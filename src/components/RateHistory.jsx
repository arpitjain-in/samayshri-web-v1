import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { db } from '../firebase';
import { RATE_HISTORY_COLLECTION } from '../utils/rateCardStore';

const PAGE_SIZE = 20;

const formatSavedAt = (date) =>
  date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });

const formatRate = (rate) => `₹${rate.toFixed(2)}`;

const toEntry = (snapshot) => {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    savedAt: data.savedAt.toDate(),
    savedBy: data.savedBy,
    card: JSON.parse(data.json),
  };
};

// One row per pack, keyed so the same pack can be matched across two versions.
const flattenRates = (card) => {
  const rates = new Map();
  for (const category of card.categories) {
    for (const item of category.items) {
      rates.set(`${category.id}|${item.size}|${item.pack.en}`, {
        label: `${category.name.en} ${item.size} ${item.pack.en}`,
        ratePerKg: item.ratePerKg,
      });
    }
  }
  return rates;
};

const diffRates = (card, previousCard) => {
  const current = flattenRates(card);
  const previous = flattenRates(previousCard);
  const changes = [];
  for (const [key, item] of current) {
    const before = previous.get(key);
    if (!before) changes.push({ kind: 'added', label: item.label, after: item.ratePerKg });
    else if (before.ratePerKg !== item.ratePerKg) {
      changes.push({ kind: 'changed', label: item.label, before: before.ratePerKg, after: item.ratePerKg });
    }
  }
  for (const [key, item] of previous) {
    if (!current.has(key)) changes.push({ kind: 'removed', label: item.label, before: item.ratePerKg });
  }
  return changes;
};

const ChangeLine = ({ change }) => {
  if (change.kind === 'added') {
    return <li className="text-green-800">+ {change.label}: {formatRate(change.after)}</li>;
  }
  if (change.kind === 'removed') {
    return <li className="text-red-700 line-through">{change.label}: {formatRate(change.before)}</li>;
  }
  const wentUp = change.after > change.before;
  return (
    <li>
      {change.label}: {formatRate(change.before)} →{' '}
      <span className={`font-semibold ${wentUp ? 'text-red-700' : 'text-green-800'}`}>
        {formatRate(change.after)} {wentUp ? '▲' : '▼'}
      </span>
    </li>
  );
};

const HistoryEntry = ({ entry, previousEntry, onRestore }) => {
  const [open, setOpen] = useState(false);
  const changes = previousEntry ? diffRates(entry.card, previousEntry.card) : null;
  const savedAtLabel = formatSavedAt(entry.savedAt);

  let summary = 'First saved version';
  if (changes) {
    summary = changes.length === 0 ? 'No rate changes' : `${changes.length} rate${changes.length === 1 ? '' : 's'} changed`;
  }

  return (
    <li className="rounded-xl border border-earth-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="min-w-0">
          <p className="font-semibold text-gray-900">{savedAtLabel}</p>
          <p className="truncate text-xs text-earth-700">
            {summary} · {entry.savedBy}
          </p>
        </div>
        {open ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
      </button>

      {changes && changes.length > 0 && (
        <ul className="space-y-1 px-4 pb-3 text-sm text-gray-900">
          {changes.map((change, index) => (
            <ChangeLine key={index} change={change} />
          ))}
        </ul>
      )}

      {open && (
        <div className="space-y-3 border-t border-earth-100 px-4 py-3">
          <p className="text-xs text-earth-700">Effective date on this version: {entry.card.effectiveDate}</p>
          {entry.card.categories.map((category) => (
            <div key={category.id}>
              <p className="text-sm font-bold text-gray-900">{category.name.en}</p>
              <ul className="text-sm text-earth-700">
                {category.items.map((item, index) => (
                  <li key={index} className="flex justify-between gap-3 tabular-nums">
                    <span>
                      {item.size} {item.pack.en}
                    </span>
                    <span className="font-medium text-gray-900">{formatRate(item.ratePerKg)}/kg</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onRestore(entry.card, savedAtLabel)}
            className="min-h-[44px] w-full rounded-lg border border-brand-600 text-sm font-semibold text-brand-700 active:bg-brand-50"
          >
            Use these rates again
          </button>
        </div>
      )}
    </li>
  );
};

const RateHistory = ({ onRestore }) => {
  const [entries, setEntries] = useState([]);
  // One extra entry past the current page, loaded only so the last shown entry can be compared with it.
  const [olderEntry, setOlderEntry] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPage = useCallback(async (after) => {
    setLoading(true);
    setError(null);
    try {
      const constraints = [orderBy('savedAt', 'desc'), limit(PAGE_SIZE + 1)];
      if (after) constraints.splice(1, 0, startAfter(after));
      const snapshot = await getDocs(query(collection(db, RATE_HISTORY_COLLECTION), ...constraints));
      const page = snapshot.docs.slice(0, PAGE_SIZE);
      setEntries((current) => [...(after ? current : []), ...page.map(toEntry)]);
      setOlderEntry(snapshot.docs.length > PAGE_SIZE ? toEntry(snapshot.docs[PAGE_SIZE]) : null);
      setCursor(page.length ? page[page.length - 1] : null);
    } catch (loadError) {
      setError(`Could not load history: ${loadError.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage(null);
  }, [loadPage]);

  return (
    <main className="space-y-3 px-4 pt-4 pb-10">
      {error && (
        <p role="status" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      {!loading && !error && entries.length === 0 && (
        <p className="text-sm text-earth-700">No history yet. Every time you save rates, a copy is kept here.</p>
      )}

      <ul className="space-y-3">
        {entries.map((entry, index) => (
          <HistoryEntry
            key={entry.id}
            entry={entry}
            previousEntry={entries[index + 1] ?? olderEntry}
            onRestore={onRestore}
          />
        ))}
      </ul>

      {loading ? (
        <div className="flex justify-center py-4" role="status" aria-label="Loading history">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
        </div>
      ) : (
        olderEntry && (
          <button
            type="button"
            onClick={() => loadPage(cursor)}
            className="min-h-[44px] w-full rounded-lg border border-earth-200 bg-white text-sm font-semibold text-earth-700 active:bg-earth-100"
          >
            Show older
          </button>
        )
      )}
    </main>
  );
};

export default RateHistory;
