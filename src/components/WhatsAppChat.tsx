import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const phoneNumber = '919951354444';
  const message = 'Hello! I would like to know more about your services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">Chat with us</span>
    </button>
  );
};

export default WhatsAppChat; 