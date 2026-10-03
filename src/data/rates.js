// Rate card shown on rates.samayshri.com
// To update rates: change the numbers below, update `effectiveDate`, and push to main.

export const rateCard = {
  // Shows a "sample rates" warning banner on the page. Set to false once real rates are entered.
  isSample: true,

  // YYYY-MM-DD
  effectiveDate: '2026-10-03',

  // Digits only, with country code. Used for the Call and WhatsApp buttons.
  phone: '918989906777',
  whatsapp: '918989906777',

  categories: [
    {
      id: 'atta',
      name: { hi: 'चक्की आटा', en: 'Whole Wheat Chakki Atta' },
      items: [
        { size: '5 kg', weightKg: 5, pack: { hi: 'हैंडल बैग', en: 'Handle bag' }, rate: 210 },
        { size: '10 kg', weightKg: 10, pack: { hi: 'हैंडल बैग', en: 'Handle bag' }, rate: 410 },
        { size: '5 kg', weightKg: 5, pack: { hi: 'लैमिनेटेड पाउच', en: 'Laminated pouch' }, rate: 215 },
        { size: '10 kg', weightKg: 10, pack: { hi: 'लैमिनेटेड पाउच', en: 'Laminated pouch' }, rate: 420 },
        { size: '26 kg', weightKg: 26, pack: { hi: 'बड़ा बैग', en: 'Big bag' }, rate: 1010 },
      ],
    },
    {
      id: 'besan',
      name: { hi: 'चना दाल बेसन', en: 'Pure Chana Dal Besan' },
      items: [
        { size: '500 g', weightKg: 0.5, pack: { hi: 'पाउच', en: 'Pouch' }, rate: 55 },
        { size: '1 kg', weightKg: 1, pack: { hi: 'पाउच', en: 'Pouch' }, rate: 105 },
        { size: '40 kg', weightKg: 40, pack: { hi: 'बैग', en: 'Bag' }, rate: 3900 },
      ],
    },
    {
      id: 'daliya',
      name: { hi: 'दलिया', en: 'Daliya (Cracked Wheat)' },
      items: [
        { size: '500 g', weightKg: 0.5, pack: { hi: 'पाउच', en: 'Pouch' }, rate: 30 },
      ],
    },
  ],

  notes: [
    { hi: 'दरें बिना पूर्व सूचना के बदल सकती हैं।', en: 'Rates may change without prior notice.' },
    { hi: 'ऑर्डर से पहले कृपया दर की पुष्टि करें।', en: 'Please confirm the rate before placing an order.' },
  ],
};
