import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// 1. ILAN HOME STORE (Palani, Tamil Nadu)
export const IlanHomeStoreLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-indigo-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-amber-400">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <circle cx="12" cy="7" r="1" fill="#F59E0B" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-indigo-900">ILAN</span>
          <span className="text-amber-600 font-extrabold">HOME STORE</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          Palani • Interior & Appliances
        </div>
      </div>
    </div>
  );
};

// 2. DREAM SKETCH INTERIORS (Coimbatore & Regional)
export const DreamSketchLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-teal-700 via-emerald-800 to-slate-900 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-teal-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-emerald-300">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="m2 17 10 5 10-5" />
          <path d="m2 12 10 5 10-5" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-teal-900">DREAM</span>
          <span className="text-emerald-600 font-extrabold">SKETCH</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          Interiors & Architecture
        </div>
      </div>
    </div>
  );
};

// 3. BEST PRECISION TOOLS
export const BestPrecisionToolsLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-cyan-800 via-slate-800 to-slate-950 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-cyan-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-cyan-400">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-slate-900">BEST</span>
          <span className="text-cyan-700 font-extrabold">PRECISION</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          Plastic Injection Molding
        </div>
      </div>
    </div>
  );
};

// 4. TRIAZ TRAVEL AND TOURS
export const TriazTravelLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-sky-400/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-sky-300">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-blue-900">TRIAZ</span>
          <span className="text-sky-600 font-extrabold">TRAVEL & TOURS</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          Tour Operator & Holiday Packages
        </div>
      </div>
    </div>
  );
};

// 5. INDTRAX INDUSTRIES
export const IndtraxLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-amber-600 via-orange-700 to-slate-900 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-amber-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-amber-300">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-slate-900">INDTRAX</span>
          <span className="text-amber-600 font-extrabold">INDUSTRIES</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          Transformer Manufacturers
        </div>
      </div>
    </div>
  );
};

// 6. INTRAX
export const IntraxLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-blue-800 via-indigo-900 to-slate-950 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-blue-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-300">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-blue-950 font-black">INTRAX</span>
          <span className="text-indigo-600 text-xs font-semibold">Global</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          International Education
        </div>
      </div>
    </div>
  );
};

// 7. INSD (International School of Design)
export const InsdLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      <div className={`${dim} rounded-xl bg-gradient-to-br from-rose-700 via-red-800 to-slate-950 p-2 text-white shadow-md flex items-center justify-center flex-shrink-0 border border-rose-500/30`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-rose-300">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-black tracking-tight text-slate-900 font-display flex items-center space-x-1">
          <span className="text-rose-900 font-black">INSD</span>
          <span className="text-slate-800 font-bold">DESIGN</span>
        </div>
        <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
          School of Design
        </div>
      </div>
    </div>
  );
};

// Helper function to render a client logo by project slug
export const renderClientLogo = (projectSlug: string, size: 'sm' | 'md' | 'lg' = 'md', className: string = '') => {
  const s = (projectSlug || '').toLowerCase();
  if (s.includes('ilan')) return <IlanHomeStoreLogo size={size} className={className} />;
  if (s.includes('dream-sketch')) return <DreamSketchLogo size={size} className={className} />;
  if (s.includes('precision')) return <BestPrecisionToolsLogo size={size} className={className} />;
  if (s.includes('triaz')) return <TriazTravelLogo size={size} className={className} />;
  if (s.includes('indtrax')) return <IndtraxLogo size={size} className={className} />;
  if (s.includes('intrax')) return <IntraxLogo size={size} className={className} />;
  if (s.includes('insd')) return <InsdLogo size={size} className={className} />;
  return <IlanHomeStoreLogo size={size} className={className} />;
};
