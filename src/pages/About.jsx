import { motion } from 'framer-motion';
import { MapPin, Factory, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { companyInfo } from '../data/company';

export default function About() {
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
              About Samayshri Agro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Pioneering the future of flour milling in Madhya Pradesh with 
              cutting-edge technology and unwavering commitment to quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Our Story"
                title="First of Its Kind in Guna District"
                centered={false}
                className="mb-6"
              />
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Samayshri Agro and Foods Industries stands as a testament to innovation 
                  and tradition. Established at <strong>Daulat Baug</strong>, our facility 
                  represents the first fully automated, IoT-enabled flour mill in the 
                  entire Guna district.
                </p>
                <p>
                  Spanning an impressive <strong>35,000 square feet</strong>, our 
                  state-of-the-art plant combines the wisdom of traditional chakki grinding 
                  with modern automation. Every grain is processed with care, ensuring that 
                  the nutritional value and natural flavor remain intact.
                </p>
                <p>
                  Our commitment extends beyond production. We've pioneered a complete 
                  end-to-end automated process, monitored 24/7 through advanced IoT sensors 
                  and surveillance systems, setting new benchmarks for quality and transparency 
                  in the industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Factory, label: '35,000 Sqft', subtitle: 'Plant Area' },
                { icon: TrendingUp, label: '40 MT/Day', subtitle: 'Flour Capacity' },
                { icon: Award, label: 'IoT Enabled', subtitle: '24/7 Monitoring' },
                { icon: Users, label: '5 MT/Day', subtitle: 'Besan Capacity' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card text-center"
                >
                  <stat.icon className="w-12 h-12 text-brand-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.subtitle}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Location"
                title="Daulat Baug, Guna"
                className="mb-8"
              />
              
              <div className="card">
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-brand-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Campus Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {companyInfo.address.full}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">District</div>
                    <div className="font-semibold text-gray-900">{companyInfo.address.district}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">State</div>
                    <div className="font-semibold text-gray-900">{companyInfo.address.state}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="What Sets Us Apart"
            title="Our Key Highlights"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {companyInfo.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-brand-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium text-lg">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-brand-100 text-lg leading-relaxed">
                To deliver premium quality, nutritionally rich flour products through 
                sustainable practices and cutting-edge technology, while upholding the 
                traditional values of chakki grinding that preserve natural goodness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-brand-100 text-lg leading-relaxed">
                To become the most trusted name in flour products across Madhya Pradesh, 
                setting industry benchmarks in quality, innovation, and customer satisfaction 
                while contributing to the community's prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
