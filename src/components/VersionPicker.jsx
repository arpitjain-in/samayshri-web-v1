const selectClass =
  'w-full min-h-[44px] rounded-lg border border-earth-200 bg-white px-3 text-base font-semibold text-gray-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 disabled:bg-earth-100 disabled:text-gray-700 disabled:opacity-100';

// Date and version dropdowns. Admins use them to pick a saved version; the public page shows them disabled.
const VersionPicker = ({ days, versions, day, version, onDayChange, onVersionChange, disabled = false }) => (
  <div className="grid grid-cols-2 gap-3">
    <label className="block min-w-0">
      <span className="mb-1 block text-xs font-medium text-earth-700">दिनांक · Date</span>
      <select
        className={selectClass}
        value={day}
        disabled={disabled}
        onChange={(event) => onDayChange?.(event.target.value)}
      >
        {days.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
    <label className="block min-w-0">
      <span className="mb-1 block text-xs font-medium text-earth-700">वर्ज़न · Version</span>
      <select
        className={selectClass}
        value={version}
        disabled={disabled}
        onChange={(event) => onVersionChange?.(Number(event.target.value))}
      >
        {versions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default VersionPicker;
