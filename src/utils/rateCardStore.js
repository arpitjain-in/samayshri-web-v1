import { rateCard as defaultRateCard } from '../data/rates';

// The live rate card is one Firestore document, saved from the admin page as a JSON string.
// It is read over plain REST so the public page doesn't need to load the Firebase SDK.
export const RATE_CARD_COLLECTION = 'rateCard';
export const RATE_CARD_DOC = 'current';
// Every save also adds a permanent copy here, so past rates can be looked up.
export const RATE_HISTORY_COLLECTION = 'rateHistory';
// Admin-only document holding how many versions were saved on each day: { counts: { '2026-10-10': 2 } }.
export const RATE_HISTORY_META_COLLECTION = 'rateHistoryMeta';
export const RATE_HISTORY_META_DOC = 'days';

// Versions are numbered per day in India time, whatever time zone the viewer is in.
const TIME_ZONE = 'Asia/Kolkata';

// Date -> '2026-10-10'
export const toIstDay = (date) => date.toLocaleDateString('en-CA', { timeZone: TIME_ZONE });

// '2026-10-10' -> '10/10/2026'
export const formatDay = (day) => day.split('-').reverse().join('/');

export const formatTime = (date) =>
  date.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', timeZone: TIME_ZONE });

const DOC_URL = `https://firestore.googleapis.com/v1/projects/${
  import.meta.env.VITE_FIREBASE_PROJECT_ID
}/databases/(default)/documents/${RATE_CARD_COLLECTION}/${RATE_CARD_DOC}`;

const FETCH_TIMEOUT_MS = 6000;

// Returns the saved rate card, or the rates bundled in src/data/rates.js if it can't be loaded.
export const fetchRateCard = async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(DOC_URL, { signal: controller.signal, cache: 'no-store' });
    if (!response.ok) throw new Error(`Rate card request failed: ${response.status}`);
    const document = await response.json();
    return {
      ...defaultRateCard,
      ...JSON.parse(document.fields.json.stringValue),
      updatedAt: document.fields.updatedAt?.timestampValue ?? null,
      day: document.fields.day?.stringValue ?? null,
      version: document.fields.version ? Number(document.fields.version.integerValue) : null,
    };
  } catch (error) {
    console.warn('Using bundled rates:', error.message);
    return defaultRateCard;
  } finally {
    clearTimeout(timer);
  }
};

// "10 kg" -> 10, "500 g" -> 0.5. Returns null if the text isn't a weight.
export const parseWeightKg = (size) => {
  const match = size.trim().match(/^(\d+(?:\.\d+)?)\s*(kg|g|gm|gms|gram|grams)$/i);
  if (!match) return null;
  const value = parseFloat(match[1]);
  return match[2].toLowerCase() === 'kg' ? value : value / 1000;
};
