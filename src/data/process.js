import { Droplets, Wind, Cog, Filter, Trash2, Package } from 'lucide-react';

export const processSteps = [
  {
    id: 1,
    title: 'Cleaning',
    shortDesc: 'Remove dust, stones and impurities',
    fullDesc: 'Advanced cleaning process using state-of-the-art sieves and aspirators to remove dust particles, stones, and other impurities. Ensures only the finest quality grains proceed to the next stage.',
    icon: Wind,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Tempering/Conditioning',
    shortDesc: 'Moisture adjusted for grinding',
    fullDesc: 'Precise moisture adjustment through controlled water addition and resting period. This critical step ensures optimal grain structure for efficient grinding and superior flour quality.',
    icon: Droplets,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'Grinding (Chakki)',
    shortDesc: 'Slow emery-stone grinding preserving nutrients',
    fullDesc: 'Traditional chakki (stone mill) grinding at controlled low speeds. This time-honored method preserves essential nutrients, vitamins, and the natural flavor of the grain.',
    icon: Cog,
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 4,
    title: 'Sifting & Separation',
    shortDesc: 'Vibro sifters to separate fine flour',
    fullDesc: 'High-precision vibro sifters separate fine flour from bran and other particles. Multiple sifting stages ensure consistent particle size and premium quality in every batch.',
    icon: Filter,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'Dust Collection',
    shortDesc: 'Modern dust collectors for quality and cleanliness',
    fullDesc: 'Advanced dust collection systems maintain a clean production environment and capture fine particles. Ensures product purity and workplace safety throughout the process.',
    icon: Trash2,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Packaging',
    shortDesc: 'Final packing of atta and bran',
    fullDesc: 'Automated packaging in various sizes with quality sealing. Each package is carefully weighed, sealed, and inspected to maintain freshness and hygiene from factory to your kitchen.',
    icon: Package,
    color: 'from-rose-500 to-rose-600',
  },
];
