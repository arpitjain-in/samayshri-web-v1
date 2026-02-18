import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Cog,
  Shield,
  Wheat,
  Package,
  Sparkles,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import ProductModal from "../components/ProductModal";
import { companyInfo } from "../data/company";
import attaChakkiImg from "../assets/atta-chakki.png";
import besanImg from "../assets/besan.png";
import daliyaImg from "../assets/daliya.png";
import Home1 from "./Home1";

const productData = {
  atta: {
    name: "Chakki Atta",
    category: "Whole Wheat Flour",
    color: "#dc2626",
    gradientStart: "#fee2e2",
    gradientEnd: "#fecaca",
    description: "Samayshri's Shikharji Chakki Atta is a premium whole wheat flour crafted using traditional stone-grinding methods combined with modern technology. Each grain is carefully processed to preserve nutrients and natural flavors.",
    features: [
      "100% Pure Whole Wheat",
      "Cold Stone-Ground Process",
      "High in Fiber & Protein",
      "No Additives or Preservatives",
      "Rich in Essential Minerals",
      "Maintains Natural Nutrients"
    ],
    benefits: [
      "Aids in digestion and promotes gut health",
      "Helps regulate blood sugar levels",
      "Rich source of B vitamins and minerals",
      "Supports heart health with high fiber content",
      "Keeps you fuller for longer",
      "Promotes sustained energy throughout the day"
    ],
    sizes: "5 kg, 10 kg, 25 kg bulk packs",
    usage: "Perfect for making traditional Indian breads, rotis, parathas, and everyday baking. Use 1-2 cups per day for a nutritious diet.",
    storage: "Store in an airtight container in a cool, dry place. Keep away from moisture and direct sunlight. Best consumed within 6 months of purchase."
  },
  daliya: {
    name: "Daliya",
    category: "Cracked Wheat",
    color: "#16a34a",
    gradientStart: "#f0fdf4",
    gradientEnd: "#dcfce7",
    description: "Samayshri's Daliya is premium cracked wheat that combines quick cooking convenience with nutritional excellence. Ideal for a wholesome breakfast or light dinner.",
    features: [
      "100% Natural Cracked Wheat",
      "Rich in Dietary Fiber",
      "Quick Cooking (15-20 minutes)",
      "Nutrient-Dense & Wholesome",
      "No Artificial Processing",
      "Perfect for Modern Kitchens"
    ],
    benefits: [
      "Excellent source of complex carbohydrates",
      "Promotes digestive health",
      "Low glycemic index for better blood sugar control",
      "Rich in antioxidants and minerals",
      "Helps maintain healthy cholesterol levels",
      "Provides sustained energy without spikes"
    ],
    sizes: "500g, 1 kg, 5 kg packs",
    usage: "Prepare as a porridge by boiling with water or milk. Mix with vegetables, spices, and ghee for a traditional Indian breakfast. Can also be used in soups and salads.",
    storage: "Keep in an airtight, moisture-proof container in a cool place. Store away from pests and strong odors. Remains fresh for 8-10 months."
  },
  besan: {
    name: "Besan",
    category: "Gram Flour",
    color: "#d97706",
    gradientStart: "#fef3c7",
    gradientEnd: "#fde68a",
    description: "Samayshri's Besan is 100% pure gram flour - finely ground chickpeas with exceptional purity and texture. A versatile ingredient for cooking and skincare.",
    features: [
      "100% Pure Chickpea Flour",
      "Ultra-Fine Texture",
      "High Protein Content",
      "No Fillers or Extenders",
      "Premium Grade Quality",
      "Naturally Gluten-Free"
    ],
    benefits: [
      "Excellent plant-based protein source",
      "Rich in fiber for digestive health",
      "Supports muscle building and repair",
      "Low glycemic index for stable energy",
      "Contains essential amino acids",
      "Great for skin health when used externally"
    ],
    sizes: "500g, 1 kg, 5 kg packs",
    usage: "Use for making pakoras, bhajias, chikhalwali, and traditional sweets. Mix with water to create a natural face mask for glowing skin. Ideal for vegetarian cooking.",
    storage: "Store in an airtight container in a cool, dry environment. Keep away from humidity and direct heat. Lasts up to 10-12 months when stored properly."
  }
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Home1 />

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-brand-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-semibold mb-4">
              ⭐ Featured Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Range
            </h2>
            <p className="text-lg text-gray-600">
              Discover Samayshri's Shikharji brand - crafted with tradition,
              perfected with technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chakki Atta */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-visible hover:shadow-2xl transition-all duration-300">
                {/* Ribbon/Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    100% ATTA
                  </motion.div>
                </div>

                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center p-4 overflow-hidden">
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-64 h-64 bg-brand-400 rounded-full blur-2xl"
                  />

                  {/* Wheat icon decoration */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 left-4"
                  >
                    <Wheat className="w-12 h-12 text-brand-300 opacity-40" />
                  </motion.div>

                  <motion.img
                    src={attaChakkiImg}
                    alt="Samayshri's Shikharji Chakki Atta"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                    Chakki Atta
                  </h3>
                  <p className="text-brand-600 font-semibold mb-3">
                    Whole Wheat Flour
                  </p>
                  <ul className="space-y-2 mb-4">
                    {["High Fiber", "High Protein", "High Nutrition"].map(
                      (feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </motion.li>
                      )
                    )}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      5kg | 10kg | 26kg
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openProductModal(productData.atta)}
                      className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-semibold"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Daliya */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-visible hover:shadow-2xl transition-all duration-300">
                {/* Ribbon/Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    HEALTHY
                  </motion.div>
                </div>

                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4 overflow-hidden">
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute w-64 h-64 bg-green-400 rounded-full blur-2xl"
                  />

                  {/* Sparkles decoration */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute top-8 right-8"
                  >
                    <Sparkles className="w-10 h-10 text-green-400" />
                  </motion.div>

                  <motion.img
                    src={daliyaImg}
                    alt="Samayshri's Daliya Cracked Wheat"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Daliya
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    Cracked Wheat
                  </p>
                  <ul className="space-y-2 mb-4">
                    {["Rich in Fiber", "Quick Cooking", "Nutrient Dense"].map(
                      (feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </motion.li>
                      )
                    )}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      500g | 1kg
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openProductModal(productData.daliya)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Besan */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-visible hover:shadow-2xl transition-all duration-300">
                {/* Ribbon/Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    PREMIUM
                  </motion.div>
                </div>

                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-4 overflow-hidden">
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute w-64 h-64 bg-amber-400 rounded-full blur-2xl"
                  />

                  {/* Shield decoration */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-8"
                  >
                    <Shield className="w-10 h-10 text-amber-300 opacity-40" />
                  </motion.div>

                  <motion.img
                    src={besanImg}
                    alt="Samayshri's Besan Gram Flour"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Besan
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    Gram Flour
                  </p>
                  <ul className="space-y-2 mb-4">
                    {["100% Pure", "Rich Protein", "Fine Texture"].map(
                      (feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </motion.li>
                      )
                    )}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      500g | 1kg | 40kg
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openProductModal(productData.besan)}
                      className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action below products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-full hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                <AnimatedCounter end={35000} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Sqft Plant Area</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                <AnimatedCounter end={40} suffix=" MT" />
              </div>
              <p className="text-gray-600 font-medium">Flour per Day</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                <AnimatedCounter end={5} suffix=" MT" />
              </div>
              <p className="text-gray-600 font-medium">Besan per Day</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">IoT Monitoring</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Samayshri Agro?
            </h2>
            <p className="text-lg text-gray-600">
              Setting new standards in flour production with technology and
              tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cog,
                title: "Fully Automated",
                description:
                  "End-to-end automated process ensuring consistent quality and efficiency",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "IoT Enabled",
                description:
                  "Real-time monitoring and control with advanced IoT sensors",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Building2,
                title: "24/7 Surveillance",
                description:
                  "Complete CCTV coverage for quality assurance and security",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Wheat,
                title: "Traditional Chakki",
                description:
                  "Slow stone grinding preserving nutrients and natural flavor",
                color: "from-amber-500 to-amber-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
                Experience Innovation at Daulat Baug
              </h2>
              <p className="text-xl mb-8 text-brand-100">
                Visit our state-of-the-art facility and witness the future of
                flour milling
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                Schedule Your Visit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={isModalOpen} 
        product={selectedProduct} 
        onClose={closeProductModal} 
      />
    </div>
  );
}
