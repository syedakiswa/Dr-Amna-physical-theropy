
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/0336-2415036"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 md:bottom-8 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </motion.a>
  );
};

export default WhatsAppButton;
