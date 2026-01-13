import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Calendar, Users, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { companyInfo } from '../data/company';

// Form validation schema
const visitFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  visitDate: z.string().min(1, 'Please select a preferred visit date'),
  numberOfVisitors: z.string().min(1, 'Please specify number of visitors'),
  message: z.string().optional(),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(visitFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Add to Firestore
      await addDoc(collection(db, 'visits'), {
        ...data,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      toast.success('Visit request submitted successfully! We will contact you soon.');
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Visit Our Facility
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Experience our state-of-the-art production facility and witness 
              innovation in action at Daulat Baug
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <SectionTitle
                subtitle="Get In Touch"
                title="Contact Information"
                centered={false}
                className="mb-8"
              />

              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {companyInfo.address.full}
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${companyInfo.contact.phone}`}
                      className="text-gray-600 hover:text-brand-600 transition-colors"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-gray-600 hover:text-brand-600 transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Why Visit Section */}
              <div className="mt-8 p-6 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl border border-brand-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Why Visit Daulat Baug?
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tour our 35,000 sqft automated facility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Witness traditional chakki grinding in action</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Learn about our IoT-enabled quality control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Meet our team and discuss partnerships</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visit Request Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card bg-gradient-to-br from-white to-gray-50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Plant Visit
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">
                        Request Submitted Successfully!
                      </h4>
                      <p className="text-sm text-green-700">
                        Thank you for your interest. Our team will contact you shortly 
                        to confirm your visit details.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Visit Date & Number of Visitors */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="visitDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Preferred Visit Date *
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        {...register('visitDate')}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.visitDate ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors`}
                      />
                      {errors.visitDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.visitDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="numberOfVisitors" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Number of Visitors *
                      </label>
                      <input
                        type="number"
                        id="numberOfVisitors"
                        {...register('numberOfVisitors')}
                        min="1"
                        max="50"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.numberOfVisitors ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors`}
                        placeholder="1"
                      />
                      {errors.numberOfVisitors && (
                        <p className="mt-1 text-sm text-red-600">{errors.numberOfVisitors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your visit purpose, interests, or any special requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-lg shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Visit Request
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
