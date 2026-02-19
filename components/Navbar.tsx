import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-medical-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔹 Navbar Height Increased */}
        <div className="flex justify-between items-center h-24">
          
          {/* 🔹 Logo Section */}
          <Link to="/" className="flex items-center">
            <img 
              className="h-20 w-auto object-contain rounded-full"
              src="/logo.png" 
              alt="Dr Amna Logo"
            />
          </Link>

          {/* 🔹 Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-medical-secondary ${
                  location.pathname === link.path
                    ? 'text-medical-primary'
                    : 'text-medical-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-medical-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-medical-secondary transition-all shadow-md active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-primary p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 🔹 Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden border-b border-medical-primary/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-medical-primary'
                      : 'text-medical-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-medical-primary text-white px-4 py-3 rounded-xl font-bold"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
