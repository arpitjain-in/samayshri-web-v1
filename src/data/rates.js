// Rate card shown on rates.samayshri.com
// To update rates: change the numbers below, update `effectiveDate`, then build and deploy.

export const rateCard = {
  // Shows a "sample rates" warning banner on the page. Set to false once real rates are entered.
  isSample: false,

  // YYYY-MM-DD
  effectiveDate: '2026-10-03',

  // Digits only, with country code. Used for the Call and WhatsApp buttons.
  phone: '918989906777',
  whatsapp: '918989906777',

  // `ratePerKg` is in rupees per kg. The pack price is calculated as ratePerKg x weightKg.
  categories: [
    {
      id: 'atta',
      name: { hi: 'चक्की आटा', en: 'Whole Wheat Chakki Atta' },
      items: [
        { size: '5 kg', weightKg: 5, pack: { hi: 'हैंडल बैग', en: 'Handle bag' }, ratePerKg: 29.86 },
        { size: '10 kg', weightKg: 10, pack: { hi: 'हैंडल बैग', en: 'Handle bag' }, ratePerKg: 29.35 },
        { size: '5 kg', weightKg: 5, pack: { hi: 'पाउच', en: 'Pouch' }, ratePerKg: 30.11 },
        { size: '10 kg', weightKg: 10, pack: { hi: 'पाउच', en: 'Pouch' }, ratePerKg: 29.6 },
        { size: '26 kg', weightKg: 26, pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: 28.41 },
        { size: '30 kg', weightKg: 30, pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: 28.19 },
        { size: '50 kg', weightKg: 50, pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: 28.13 },
      ],
    },
    {
      id: 'besan',
      name: { hi: 'चना दाल बेसन', en: 'Pure Chana Dal Besan' },
      items: [
        { size: '500 g', weightKg: 0.5, pack: { hi: 'पैकेट', en: 'Packet' }, ratePerKg: 88 },
        { size: '40 kg', weightKg: 40, pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: 85 },
      ],
    },
    {
      id: 'bran',
      name: { hi: 'चोकर', en: 'Wheat Bran' },
      items: [
        { size: '40 kg', weightKg: 40, pack: { hi: 'बैग', en: 'Bag' }, ratePerKg: 23 },
      ],
    },
  ],

  notes: [
    { hi: 'दरें बिना पूर्व सूचना के बदल सकती हैं।', en: 'Rates may change without prior notice.' },
    { hi: 'ऑर्डर से पहले कृपया दर की पुष्टि करें।', en: 'Please confirm the rate before placing an order.' },
  ],
};
