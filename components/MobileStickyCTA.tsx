
import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-medical-primary/10 px-4 py-3 flex gap-3 shadow-2xl">
      <a 
        href="tel:+923362415036"
        className="flex-1 flex items-center justify-center space-x-2 bg-medical-light border border-medical-primary/20 text-medical-primary py-3 rounded-xl font-bold text-sm active:bg-medical-primary active:text-white transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span>Call Now</span>
      </a>
      <Link 
        to="/contact"
        className="flex-1 flex items-center justify-center space-x-2 bg-medical-primary text-white py-3 rounded-xl font-bold text-sm active:bg-medical-secondary transition-colors"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Now</span>
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
