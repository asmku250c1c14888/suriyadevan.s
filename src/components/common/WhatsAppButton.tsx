import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { siteSettings, trackEvent } = useData();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const cleanNumber = siteSettings.whatsapp.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(siteSettings.whatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  const handleClick = () => {
    trackEvent('whatsapp_click', 'Floating Button');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip prompt */}
      {tooltipVisible && (
        <div className="mb-2 bg-slate-900 text-white text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center space-x-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <span>Chat directly on WhatsApp with SuriyaDevan</span>
          <button 
            onClick={(e) => { e.stopPropagation(); setTooltipVisible(false); }}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setTooltipVisible(true)}
        className="group flex items-center space-x-2.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full shadow-lg border border-slate-700/80 transition-all transform hover:scale-105"
        aria-label="Direct WhatsApp Chat"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
        <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide pr-0.5">Quick WhatsApp</span>
      </a>
    </div>
  );
};
