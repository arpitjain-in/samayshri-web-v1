import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { LogOut, Plus, Trash2 } from 'lucide-react';
import app, { db } from '../firebase';
import { fetchRateCard, parseWeightKg, RATE_CARD_COLLECTION, RATE_CARD_DOC } from '../utils/rateCardStore';

const auth = getAuth(app);

const inputClass =
  'w-full min-h-[44px] rounded-lg border border-earth-200 bg-white px-3 text-base text-gray-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600';

const Field = ({ label, ...inputProps }) => (
  <label className="block min-w-0">
    <span className="mb-1 block text-xs font-medium text-earth-700">{label}</span>
    <input className={inputClass} {...inputProps} />
  </label>
);

// Rates are kept as text while editing so a half-typed number like "29." isn't lost.
const toForm = (card) => ({
  effectiveDate: card.effectiveDate,
  categories: card.categories.map((category) => ({
    id: category.id,
    name: { ...category.name },
    items: category.items.map((item) => ({
      size: item.size,
      pack: { ...item.pack },
      ratePerKg: String(item.ratePerKg),
    })),
  })),
  notes: card.notes.map((note) => ({ ...note })),
});

// Returns { card } ready to save, or { error } describing the first problem found.
const fromForm = (form) => {
  if (!form.effectiveDate) return { error: 'Choose the effective date.' };

  const categories = [];
  for (const category of form.categories) {
    const label = category.name.en.trim() || category.name.hi.trim();
    if (!category.name.hi.trim() || !category.name.en.trim()) {
      return { error: `Enter both Hindi and English names for ${label || 'the new product'}.` };
    }
    const items = [];
    for (const item of category.items) {
      const weightKg = parseWeightKg(item.size);
      if (!weightKg) return { error: `${label}: size "${item.size}" must look like "10 kg" or "500 g".` };
      const ratePerKg = Number(item.ratePerKg);
      if (!item.ratePerKg.trim() || !(ratePerKg > 0)) {
        return { error: `${label} ${item.size}: enter a rate per kg greater than 0.` };
      }
      if (!item.pack.hi.trim() || !item.pack.en.trim()) {
        return { error: `${label} ${item.size}: enter the pack type in Hindi and English.` };
      }
      items.push({
        size: item.size.trim(),
        weightKg,
        pack: { hi: item.pack.hi.trim(), en: item.pack.en.trim() },
        ratePerKg,
      });
    }
    categories.push({
      id: category.id,
      name: { hi: category.name.hi.trim(), en: category.name.en.trim() },
      items,
    });
  }

  const notes = form.notes
    .map((note) => ({ hi: note.hi.trim(), en: note.en.trim() }))
    .filter((note) => note.hi || note.en);

  return { card: { effectiveDate: form.effectiveDate, categories, notes } };
};

const RateAdmin = () => {
  const [user, setUser] = useState(undefined); // undefined = still checking, null = signed out
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }

  const rateCardUrl = window.location.pathname.startsWith('/rates') ? '/rates' : '/';

  useEffect(() => {
    document.title = 'Rate Card Admin - Samayshri Agro';
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (!user) return undefined;
    let cancelled = false;
    fetchRateCard().then((card) => {
      if (!cancelled) setForm(toForm(card));
    });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const handleSignIn = async () => {
    setStatus(null);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        setStatus({ type: 'error', text: `Sign-in failed: ${error.message}` });
      }
    }
  };

  const updateForm = (change) => {
    setStatus(null);
    setForm((current) => {
      const next = structuredClone(current);
      change(next);
      return next;
    });
  };

  const handleSave = async () => {
    const { card, error } = fromForm(form);
    if (error) {
      setStatus({ type: 'error', text: error });
      return;
    }
    setSaving(true);
    setStatus(null);
    try {
      await setDoc(doc(db, RATE_CARD_COLLECTION, RATE_CARD_DOC), {
        json: JSON.stringify(card),
        updatedAt: serverTimestamp(),
        updatedBy: user.email,
      });
      setStatus({ type: 'success', text: 'Saved. The rate card is updated.' });
    } catch (saveError) {
      setStatus({
        type: 'error',
        text:
          saveError.code === 'permission-denied'
            ? `${user.email} is not allowed to edit rates. Sign in with an admin account.`
            : `Could not save: ${saveError.message}`,
      });
    } finally {
      setSaving(false);
    }
  };

  const statusMessage = status && (
    <p
      role="status"
      className={`rounded-lg border px-3 py-2 text-sm font-medium ${
        status.type === 'success'
          ? 'border-green-200 bg-green-50 text-green-800'
          : 'border-red-200 bg-red-50 text-red-700'
      }`}
    >
      {status.text}
    </p>
  );

  if (user === undefined || (user && !form)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-earth-50" role="status" aria-label="Loading">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-earth-50 px-4">
        <div className="w-full max-w-sm space-y-4 rounded-xl border border-earth-100 bg-white p-6 text-center shadow-sm">
          <div>
            <p className="font-display text-xl font-bold text-gray-900">Samayshri Agro</p>
            <h1 className="text-sm text-earth-700">Rate Card Admin</h1>
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="min-h-[48px] w-full rounded-lg bg-brand-600 font-semibold text-white active:bg-brand-700"
          >
            Sign in with Google
          </button>
          {statusMessage}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-50">
      <div className="mx-auto max-w-lg pb-40">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 bg-brand-600 px-4 py-3 text-white shadow-md">
          <div className="min-w-0">
            <h1 className="font-display text-lg font-bold leading-tight">Rate Card Admin</h1>
            <p className="truncate text-xs text-brand-50">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={() => signOut(auth)}
            aria-label="Sign out"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 active:bg-white/30"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </header>

        <main className="space-y-4 px-4 pt-4">
          <Field
            label="Effective date"
            type="date"
            value={form.effectiveDate}
            onChange={(event) => updateForm((next) => { next.effectiveDate = event.target.value; })}
          />

          {form.categories.map((category, categoryIndex) => (
            <section key={category.id} className="space-y-3 rounded-xl border border-earth-100 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Product (Hindi)"
                  value={category.name.hi}
                  onChange={(event) => updateForm((next) => { next.categories[categoryIndex].name.hi = event.target.value; })}
                />
                <Field
                  label="Product (English)"
                  value={category.name.en}
                  onChange={(event) => updateForm((next) => { next.categories[categoryIndex].name.en = event.target.value; })}
                />
              </div>

              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-3 rounded-lg border border-earth-100 bg-earth-50 p-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Size (e.g. 10 kg)"
                      value={item.size}
                      onChange={(event) => updateForm((next) => { next.categories[categoryIndex].items[itemIndex].size = event.target.value; })}
                    />
                    <Field
                      label="Rate per kg (₹)"
                      inputMode="decimal"
                      value={item.ratePerKg}
                      onChange={(event) => updateForm((next) => { next.categories[categoryIndex].items[itemIndex].ratePerKg = event.target.value; })}
                    />
                    <Field
                      label="Pack (Hindi)"
                      value={item.pack.hi}
                      onChange={(event) => updateForm((next) => { next.categories[categoryIndex].items[itemIndex].pack.hi = event.target.value; })}
                    />
                    <Field
                      label="Pack (English)"
                      value={item.pack.en}
                      onChange={(event) => updateForm((next) => { next.categories[categoryIndex].items[itemIndex].pack.en = event.target.value; })}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => updateForm((next) => { next.categories[categoryIndex].items.splice(itemIndex, 1); })}
                    className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove this size
                  </button>
                </div>
              ))}

              <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() =>
                    updateForm((next) => {
                      next.categories[categoryIndex].items.push({ size: '', pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: '' });
                    })
                  }
                  className="flex min-h-[44px] items-center gap-2 rounded-lg border border-brand-600 px-3 text-sm font-semibold text-brand-700 active:bg-brand-50"
                >
                  <Plus className="h-4 w-4" />
                  Add size
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Remove ${category.name.en || 'this product'} and all its sizes?`)) {
                      updateForm((next) => { next.categories.splice(categoryIndex, 1); });
                    }
                  }}
                  className="flex min-h-[44px] items-center gap-2 px-1 text-sm font-medium text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Remove product
                </button>
              </div>
            </section>
          ))}

          <button
            type="button"
            onClick={() =>
              updateForm((next) => {
                next.categories.push({ id: `product-${Date.now()}`, name: { hi: '', en: '' }, items: [] });
              })
            }
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-brand-600 bg-white text-sm font-semibold text-brand-700 active:bg-brand-50"
          >
            <Plus className="h-4 w-4" />
            Add product
          </button>

          <section className="space-y-3 rounded-xl border border-earth-100 bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-gray-900">Notes</h2>
            {form.notes.map((note, noteIndex) => (
              <div key={noteIndex} className="space-y-3 rounded-lg border border-earth-100 bg-earth-50 p-3">
                <Field
                  label="Note (Hindi)"
                  value={note.hi}
                  onChange={(event) => updateForm((next) => { next.notes[noteIndex].hi = event.target.value; })}
                />
                <Field
                  label="Note (English)"
                  value={note.en}
                  onChange={(event) => updateForm((next) => { next.notes[noteIndex].en = event.target.value; })}
                />
                <button
                  type="button"
                  onClick={() => updateForm((next) => { next.notes.splice(noteIndex, 1); })}
                  className="flex min-h-[40px] items-center gap-2 text-sm font-medium text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  Remove note
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateForm((next) => { next.notes.push({ hi: '', en: '' }); })}
              className="flex min-h-[44px] items-center gap-2 rounded-lg border border-brand-600 px-3 text-sm font-semibold text-brand-700 active:bg-brand-50"
            >
              <Plus className="h-4 w-4" />
              Add note
            </button>
          </section>
        </main>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-earth-100 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-lg space-y-2 px-4 py-3">
          {statusMessage}
          <div className="flex gap-3">
            <a
              href={rateCardUrl}
              className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-brand-600 font-semibold text-brand-700 active:bg-brand-50"
            >
              View rate card
            </a>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="min-h-[48px] flex-1 rounded-lg bg-brand-600 font-semibold text-white active:bg-brand-700 disabled:opacity-60"
            >
              {saving ? 'Saving…' : 'Save rates'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateAdmin;
