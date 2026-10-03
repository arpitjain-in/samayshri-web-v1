import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Share2 } from 'lucide-react';
import { rateCard } from '../data/rates';

const formatRupees = (amount) => `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const RateCard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  useEffect(() => {
    document.title = 'रेट कार्ड | Rate Card - Samayshri Agro';
  }, []);

  const visibleCategories =
    activeCategory === 'all'
      ? rateCard.categories
      : rateCard.categories.filter((category) => category.id === activeCategory);

  const whatsappUrl = `https://wa.me/${rateCard.whatsapp}?text=${encodeURIComponent(
    'नमस्ते, मुझे रेट कार्ड के बारे में जानकारी चाहिए।'
  )}`;

  const handleShare = () => {
    navigator
      .share({ title: 'Samayshri Rate Card', url: window.location.href })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen bg-earth-50">
      <div className="mx-auto max-w-lg pb-28">
        <header className="sticky top-0 z-10 bg-brand-600 text-white shadow-md">
          <div className="flex items-center justify-between gap-3 px-4 pt-3">
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-tight">Samayshri Agro</p>
              <h1 className="text-sm font-medium text-brand-50">रेट कार्ड · Rate Card</h1>
            </div>
            {canShare && (
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share rate card"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 active:bg-white/30"
              >
                <Share2 className="h-5 w-5" />
              </button>
            )}
          </div>

          <nav className="flex gap-2 overflow-x-auto px-4 py-3" aria-label="Product categories">
            {[{ id: 'all', name: { hi: 'सभी', en: 'All' } }, ...rateCard.categories].map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-semibold ${
                  activeCategory === category.id
                    ? 'bg-white text-brand-700'
                    : 'bg-white/15 text-white active:bg-white/30'
                }`}
              >
                {category.name.hi}
              </button>
            ))}
          </nav>
        </header>

        <main className="space-y-4 px-4 pt-4">
          {rateCard.isSample && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              नमूना दरें — वास्तविक नहीं · Sample rates, not final
            </p>
          )}

          <p className="text-sm text-earth-700">
            लागू दिनांक · Effective from{' '}
            <span className="font-semibold text-gray-900">{formatDate(rateCard.effectiveDate)}</span>
          </p>

          {visibleCategories.map((category) => (
            <section key={category.id} className="overflow-hidden rounded-xl border border-earth-100 bg-white shadow-sm">
              <div className="border-b border-brand-100 bg-brand-50 px-4 py-3">
                <h2 className="text-lg font-bold leading-tight text-gray-900">{category.name.hi}</h2>
                <p className="text-sm text-earth-700">{category.name.en}</p>
              </div>

              <ul className="divide-y divide-earth-100">
                {category.items.map((item) => (
                  <li
                    key={`${item.size}-${item.pack.en}`}
                    className="flex items-center justify-between gap-3 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-lg font-bold leading-tight text-gray-900">{item.size}</p>
                      <p className="text-sm text-earth-700">
                        {item.pack.hi} · {item.pack.en}
                      </p>
                    </div>
                    <div className="shrink-0 text-right tabular-nums">
                      <p className="text-xl font-bold leading-tight text-brand-700">{formatRupees(item.rate)}</p>
                      <p className="text-xs text-earth-600">{formatRupees(item.rate / item.weightKg)}/kg</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <ul className="space-y-2 px-1 text-sm text-earth-700">
            {rateCard.notes.map((note) => (
              <li key={note.en}>
                <span className="block text-gray-900">{note.hi}</span>
                <span className="block">{note.en}</span>
              </li>
            ))}
          </ul>
        </main>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-earth-100 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-lg gap-3 px-4 py-3">
          <a
            href={`tel:+${rateCard.phone}`}
            className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 font-semibold text-white active:bg-brand-700"
          >
            <Phone className="h-5 w-5" />
            कॉल करें
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 font-semibold text-white active:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
