import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { processSteps } from '../data/process';
import { ChevronRight } from 'lucide-react';

export default function Process() {
  const [expandedStep, setExpandedStep] = useState(null);

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
              Our Production Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Six meticulously designed stages combining traditional wisdom with 
              modern automation for superior quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="How We Work"
            title="From Grain to Premium Flour"
            className="mb-16"
          />

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting Line */}
              <div className="absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-600"></div>

              <div className="grid grid-cols-3 gap-8 mb-16">
                {processSteps.slice(0, 3).map((step, index) => (
                  <ProcessCard
                    key={step.id}
                    step={step}
                    index={index}
                    isExpanded={expandedStep === step.id}
                    onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-8">
                {processSteps.slice(3, 6).map((step, index) => (
                  <ProcessCard
                    key={step.id}
                    step={step}
                    index={index + 3}
                    isExpanded={expandedStep === step.id}
                    onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  />
                ))}
              </div>
            </div>

            {/* Mobile/Tablet View */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <ProcessCardMobile
                  key={step.id}
                  step={step}
                  index={index}
                  isExpanded={expandedStep === step.id}
                  onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Quality First"
              title="Automated Excellence"
              className="mb-8"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-gradient-to-br from-white to-brand-50"
            >
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-4">
                  Every stage of our production process is monitored and controlled by 
                  advanced <strong>IoT sensors</strong> and <strong>automation systems</strong>. 
                  This ensures consistent quality, optimal resource utilization, and complete 
                  traceability.
                </p>
                <p className="text-lg leading-relaxed">
                  Our <strong>24/7 CCTV surveillance</strong> and real-time data analytics 
                  provide complete transparency and accountability. From the moment grains 
                  enter our facility to the final packaged product, every step is documented 
                  and optimized for excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ step, index, isExpanded, onToggle }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Step Number Circle */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-white border-4 border-brand-600 rounded-full flex items-center justify-center text-2xl font-bold text-brand-600 shadow-lg z-10">
          {step.id}
        </div>
      </div>

      <div
        className={`card cursor-pointer transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-brand-600' : ''
        }`}
        onClick={onToggle}
      >
        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
          {step.title}
        </h3>

        <p className="text-gray-600 text-center mb-4">
          {step.shortDesc}
        </p>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-gray-200"
          >
            <p className="text-gray-700 text-sm leading-relaxed">
              {step.fullDesc}
            </p>
          </motion.div>
        )}

        <div className="text-center mt-4">
          <span className="text-brand-600 text-sm font-semibold">
            {isExpanded ? 'Show less' : 'Learn more'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessCardMobile({ step, index, isExpanded, onToggle }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      <div
        className={`card cursor-pointer transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-brand-600' : ''
        }`}
        onClick={onToggle}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-3">
              {step.id}
            </div>
            <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {step.shortDesc}
            </p>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-3 border-t border-gray-200 mt-3"
              >
                <p className="text-gray-700 leading-relaxed">
                  {step.fullDesc}
                </p>
              </motion.div>
            )}

            <div className="flex items-center text-brand-600 font-semibold mt-3">
              <span className="text-sm">{isExpanded ? 'Show less' : 'Learn more'}</span>
              <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line for mobile */}
      {index < 5 && (
        <div className="ml-6 h-6 w-0.5 bg-brand-300"></div>
      )}
    </motion.div>
  );
}
