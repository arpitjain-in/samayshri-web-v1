const formatPerKg = (amount) =>
  `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Whole rupees show without decimals; anything else shows paise.
const formatPackPrice = (amount) => {
  const rounded = Math.round(amount * 100) / 100;
  return `₹${rounded.toLocaleString('en-IN', {
    minimumFractionDigits: Number.isInteger(rounded) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
};

// The product cards shared by the public rate card and the admin history view.
const RateList = ({ categories }) =>
  categories.map((category) => (
    <section key={category.id} className="overflow-hidden rounded-xl border border-earth-100 bg-white shadow-sm">
      <div className="border-b border-brand-100 bg-brand-50 px-4 py-3">
        <h2 className="text-lg font-bold leading-tight text-gray-900">{category.name.hi}</h2>
        <p className="text-sm text-earth-700">{category.name.en}</p>
      </div>

      <ul className="divide-y divide-earth-100">
        {category.items.map((item, index) => (
          <li key={index} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="text-lg font-bold leading-tight text-gray-900">{item.size}</p>
              <p className="text-sm text-earth-700">
                {item.pack.hi} · {item.pack.en}
              </p>
            </div>
            <div className="shrink-0 text-right tabular-nums">
              <p className="text-xl font-bold leading-tight text-brand-700">
                {formatPerKg(item.ratePerKg)}
                <span className="text-sm font-semibold">/kg</span>
              </p>
              <p className="text-xs text-earth-600">
                {item.pack.hi} {formatPackPrice(item.ratePerKg * item.weightKg)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  ));

export default RateList;
