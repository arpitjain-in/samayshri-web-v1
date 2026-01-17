import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProductModal({ isOpen, product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex items-center justify-between p-6 bg-gradient-to-r border-b border-gray-200"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${product.gradientStart || '#f3f4f6'}, ${product.gradientEnd || '#ffffff'})`,
                }}
              >
                <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Product Category */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Product Type
                  </p>
                  <p className="text-xl font-semibold mt-1" style={{ color: product.color }}>
                    {product.category}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-green-500 mr-3 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Health Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-500 mr-3 font-bold mt-1">★</span>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Available Sizes
                  </h3>
                  <p className="text-gray-700">{product.sizes}</p>
                </div>

                {/* Usage Recommendations */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Usage Recommendations
                  </h3>
                  <p className="text-gray-700">{product.usage}</p>
                </div>

                {/* Storage */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Storage Instructions
                  </h3>
                  <p className="text-gray-700">{product.storage}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: product.color }}
                    className="flex-1 px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
