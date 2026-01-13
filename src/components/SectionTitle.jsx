import { motion } from 'framer-motion';

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
}
