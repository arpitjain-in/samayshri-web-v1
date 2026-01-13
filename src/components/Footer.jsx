import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../data/company';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6 group w-fit">
              <img 
                src={logo} 
                alt="Samayshri Agro and Foods Industries" 
                className="h-24 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm mb-6 text-gray-400 max-w-md">
              First fully automated, IoT-enabled flour mill in Guna district. 
              Producing premium quality Atta, Besan, and Daliya with traditional 
              chakki grinding methods.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-brand-500 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-brand-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm mb-6">
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center hover:text-brand-500 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {companyInfo.contact.email}
              </a>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center hover:text-brand-500 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.contact.phone}
              </a>
            </div>
            
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-brand-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-brand-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-brand-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
