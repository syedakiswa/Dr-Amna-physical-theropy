
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-primary text-white pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center ">
               <Link to="/" className="flex items-center">
                         <img 
                           className="h-20 w-auto object-contain rounded-full"
                           src="/logo.png" 
                           alt="Dr Amna Logo"
                         />
                       </Link>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Empowering your recovery journey with clinical precision and compassionate care. 
              Dr. Amna's Physical Therapy & Rehab Center is your partner in movement and health.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Dr-Amnas-Physical-Therapy-And-Rehab-Center-100083281655200/" className="hover:text-medical-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fdr.amnasphysicaltherapy%253Figsh%253DMTRmcDI5eHFyNTJ1eA%253D%253D%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEySU9yRmc3aXpvUTVKZVVYdXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR42SqDYOOb3dCcSBbQNbSQSoJKViY4n3_NNAN6vNrTCFYVQNIBQW7eqIGrR6w_aem_K4EDkBEfmzZxyXPT3otYWQ&h=ASUJMQqkNWmwDWRF4GyTHFkatBYW2KOpQPpgSRoxCiwhgau662DNK4sTp2IIGYFJrX5fCYaRAAJbH2E6hHHud_uY2nQrsVXWSQ3-pdoFWzkKuIVbGXMvt0gI9QFI5FepyOM9" className="hover:text-medical-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a 
    href="mailto:amnafarooq237@gmail.com" 
    className="hover:text-medical-secondary transition-colors"
  >
    <Mail className="w-5 h-5" />
  </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-100/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-blue-100/70 text-sm">Musculoskeletal Rehab</li>
              <li className="text-blue-100/70 text-sm">Post-Surgical Recovery</li>
              <li className="text-blue-100/70 text-sm">Sports Injury Management</li>
              <li className="text-blue-100/70 text-sm">Geriatric Physiotherapy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-secondary shrink-0" />
                <span className="text-blue-100/70 text-sm">Karachi Division Sindh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-secondary shrink-0" />
                <span className="text-blue-100/70 text-sm">0336-2415036</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-secondary shrink-0" />
                <span className="text-blue-100/70 text-sm">Amnafarooq237@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-blue-100/40 text-xs">
            © {new Date().getFullYear()} Dr. Amna's Physical Therapy & Rehab Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
