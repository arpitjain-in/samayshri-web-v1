import { motion } from 'framer-motion';
import { Package, ShoppingBag, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { products } from '../data/products';

export default function Products() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Premium quality flour products crafted with traditional methods and 
              modern precision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Offer"
            title="Premium Product Range"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Quality Guarantee"
            title="Why Our Products Stand Out"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Carefully selected grains and rigorous quality checks',
              },
              {
                icon: CheckCircle2,
                title: 'No Additives',
                description: '100% natural with no artificial preservatives or colors',
              },
              {
                icon: Package,
                title: 'Hygienic Packaging',
                description: 'Sealed in clean, moisture-proof packaging',
              },
              {
                icon: ShoppingBag,
                title: 'Multiple Sizes',
                description: 'Available in various pack sizes for your convenience',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interested in Our Products?
              </h2>
              <p className="text-xl mb-8 text-brand-100">
                Contact us for bulk orders, dealership opportunities, or product inquiries
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:scale-105 transition-transform duration-300"
    >
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
        <Package className="w-24 h-24 text-brand-400" />
        <div className="absolute top-3 right-3 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span className="font-semibold">{product.size}</span>
          <span className="text-brand-600">• {product.packaging}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-2 gap-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start text-xs text-gray-700">
              <CheckCircle2 className="w-3 h-3 text-brand-600 mr-1 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Link
          to="/contact"
          className="block w-full text-center px-4 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
        >
          Enquire Now
        </Link>
      </div>
    </motion.div>
  );
}
