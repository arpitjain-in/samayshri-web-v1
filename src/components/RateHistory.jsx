import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import RateList from './RateList';
import VersionPicker from './VersionPicker';
import {
  formatDay,
  formatTime,
  RATE_HISTORY_COLLECTION,
  RATE_HISTORY_META_COLLECTION,
  RATE_HISTORY_META_DOC,
} from '../utils/rateCardStore';

const toEntry = (snapshot) => {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    version: data.version,
    savedAt: data.savedAt.toDate(),
    savedBy: data.savedBy,
    card: JSON.parse(data.json),
  };
};

const RateHistory = ({ onRestore }) => {
  const [counts, setCounts] = useState(null); // { '2026-10-10': 2 }, null while loading
  const [day, setDay] = useState(null);
  const [version, setVersion] = useState(null);
  const [entriesByDay, setEntriesByDay] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getDoc(doc(db, RATE_HISTORY_META_COLLECTION, RATE_HISTORY_META_DOC))
      .then((snapshot) => {
        const loadedCounts = snapshot.exists() ? snapshot.data().counts : {};
        const latestDay = Object.keys(loadedCounts).sort().pop();
        setCounts(loadedCounts);
        if (latestDay) {
          setDay(latestDay);
          setVersion(loadedCounts[latestDay]);
        }
      })
      .catch((loadError) => setError(`Could not load history: ${loadError.message}`));
  }, []);

  // Each day's versions are fetched once, the first time that day is picked.
  useEffect(() => {
    if (!day || entriesByDay[day]) return;
    getDocs(query(collection(db, RATE_HISTORY_COLLECTION), where('day', '==', day)))
      .then((snapshot) => {
        const entries = snapshot.docs.map(toEntry).sort((a, b) => a.version - b.version);
        setEntriesByDay((current) => ({ ...current, [day]: entries }));
      })
      .catch((loadError) => setError(`Could not load ${formatDay(day)}: ${loadError.message}`));
  }, [day, entriesByDay]);

  if (error) {
    return (
      <main className="px-4 pt-4">
        <p role="status" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {error}
        </p>
      </main>
    );
  }

  if (!counts || (day && !entriesByDay[day])) {
    return (
      <div className="flex justify-center py-10" role="status" aria-label="Loading history">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!day) {
    return (
      <main className="px-4 pt-4">
        <p className="text-sm text-earth-700">No history yet. Every time you save rates, a copy is kept here.</p>
      </main>
    );
  }

  const entries = entriesByDay[day];
  const entry = entries.find((candidate) => candidate.version === version);
  const dayOptions = Object.keys(counts)
    .sort()
    .reverse()
    .map((value) => ({ value, label: formatDay(value) }));
  const versionOptions = entries
    .map((candidate) => ({ value: candidate.version, label: `v${candidate.version} · ${formatTime(candidate.savedAt)}` }))
    .reverse();

  return (
    <main className="space-y-4 px-4 pt-4 pb-10">
      <VersionPicker
        days={dayOptions}
        versions={versionOptions}
        day={day}
        version={version}
        onDayChange={(nextDay) => {
          setDay(nextDay);
          setVersion(counts[nextDay]);
        }}
        onVersionChange={setVersion}
      />

      {entry ? (
        <>
          <p className="text-sm text-earth-700">
            Saved {formatDay(day)}, {formatTime(entry.savedAt)} by {entry.savedBy}
            <span className="block">Effective date on this version: {formatDay(entry.card.effectiveDate)}</span>
          </p>
          <RateList categories={entry.card.categories} />
          <button
            type="button"
            onClick={() => onRestore(entry.card, `${formatDay(day)} v${entry.version}`)}
            className="min-h-[48px] w-full rounded-lg border border-brand-600 bg-white font-semibold text-brand-700 active:bg-brand-50"
          >
            Use these rates again
          </button>
        </>
      ) : (
        <p className="text-sm text-earth-700">This version could not be found.</p>
      )}
    </main>
  );
};

export default RateHistory;
