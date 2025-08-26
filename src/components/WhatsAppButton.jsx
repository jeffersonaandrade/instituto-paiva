import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '81998419268'; // Número do Instituto Paiva
  const message = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Paiva.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce flex items-center justify-center relative overflow-hidden"
        aria-label="Contatar via WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        
        <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-75"></div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
