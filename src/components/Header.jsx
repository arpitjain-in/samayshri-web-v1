import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { companyInfo } from '../data/company';

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Home1', href: '/home1' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '/process' },
  { name: 'Products', href: '/products' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Download Company Profile', href: '/samayshri-company-profile.pdf', external: true, download: true },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const contactEmail = 'sarthak@samayshri.com';
  const ctaNavItem = navigation.find((item) => item.name === 'Download Company Profile');
  const mainNavItems = navigation.filter((item) => item.name !== 'Download Company Profile');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="border-b border-gray-200 bg-brand-50">
        <div className="container-custom flex items-center justify-between gap-2 py-2 text-[15px] sm:justify-end sm:gap-4 sm:text-sm">
          <a
            href={`tel:${companyInfo.contact.phone.replace(/[^\d+]/g, '')}`}
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{companyInfo.contact.phone}</span>
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{contactEmail}</span>
          </a>
        </div>
      </div>
      <nav className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Samayshri Agro and Foods Industries" 
              className="h-16 sm:h-18 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <div className="flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const isExternal = item.external || item.href.endsWith('.pdf');
                const isActive = !isExternal && location.pathname === item.href;
                const linkClasses = `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`;

                return isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={linkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.download}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link key={item.name} to={item.href} className={linkClasses}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {ctaNavItem && (
              <a
                href={ctaNavItem.href}
                target="_blank"
                rel="noopener noreferrer"
                download={ctaNavItem.download}
                className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
              >
                {ctaNavItem.name}
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {mainNavItems.map((item) => {
                  const isExternal = item.external || item.href.endsWith('.pdf');
                  const isActive = !isExternal && location.pathname === item.href;
                  const linkClasses = `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive ? 'bg-brand-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`;

                  return isExternal ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={linkClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.download}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link key={item.name} to={item.href} className={linkClasses}>
                      {item.name}
                    </Link>
                  );
                })}
                {ctaNavItem && (
                  <a
                    href={ctaNavItem.href}
                    className="block rounded-full bg-brand-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    download={ctaNavItem.download}
                  >
                    {ctaNavItem.name}
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
