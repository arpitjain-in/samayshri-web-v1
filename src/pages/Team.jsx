import { motion } from 'framer-motion';
import { User, Mail, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { teamMembers } from '../data/team';

export default function Team() {
  const founder = teamMembers.find(member => member.level === 'founder');
  const executives = teamMembers.filter(member => member.level === 'executive');
  const heads = teamMembers.filter(member => member.level === 'head');

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
              Our Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Experienced professionals driving innovation and excellence in 
              every aspect of our operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      {founder && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              subtitle="Leadership"
              title="Visionary Founder"
              className="mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card bg-gradient-to-br from-white to-brand-50 border-2 border-brand-200">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center shadow-xl">
                      <User className="w-24 h-24 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-xl text-brand-600 font-semibold mb-4">
                      {founder.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {founder.responsibilities}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Executive Team */}
      {executives.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle
              subtitle="Executive Leadership"
              title="Core Management"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {executives.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Department Heads */}
      {heads.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle
              subtitle="Department Leadership"
              title="Functional Heads"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {heads.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Team CTA */}
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
                Join Our Growing Team
              </h2>
              <p className="text-xl mb-8 text-brand-100">
                We're always looking for talented individuals passionate about 
                quality and innovation
              </p>
              <a
                href="mailto:careers@samayshriagro.com"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Your Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ member, index, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card group hover:scale-105 transition-transform duration-300"
    >
      {/* Avatar */}
      <div className={`${compact ? 'w-20 h-20' : 'w-28 h-28'} bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
        <User className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} text-white`} />
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-gray-900 mb-1`}>
          {member.name}
        </h3>
        <div className="flex items-center justify-center mb-3">
          <Briefcase className="w-4 h-4 text-brand-600 mr-2" />
          <p className={`${compact ? 'text-sm' : 'text-base'} text-brand-600 font-semibold`}>
            {member.title}
          </p>
        </div>
        <p className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600 leading-relaxed`}>
          {member.responsibilities}
        </p>
      </div>
    </motion.div>
  );
}
