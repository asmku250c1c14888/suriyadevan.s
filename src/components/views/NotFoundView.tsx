import React from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Home, Search, Layers, Mail } from 'lucide-react';

export const NotFoundView: React.FC = () => {
  const { navigateTo } = useData();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50/70 px-4 py-16">
      <SEOHead
        title="Page Not Found (404) | SURIYADEVAN S Palani"
        description="The requested page could not be found. Return to SURIYADEVAN S homepage to explore SEO services, client case studies, or request a free consultation."
        noIndex={true}
      />

      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <div className="text-5xl font-black text-indigo-600 font-display">404</div>
        
        <h1 className="text-2xl font-black text-slate-900 font-display">
          Page Not Found
        </h1>

        <p className="text-xs text-slate-600 leading-relaxed">
          The page or case study you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="pt-2 flex flex-col space-y-2.5 text-xs font-bold">
          <button
            onClick={() => navigateTo('/')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg transition-all flex items-center justify-center space-x-1.5 shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigateTo('/services')}
            className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-indigo-600" />
            <span>Explore Services & Projects</span>
          </button>

          <button
            onClick={() => navigateTo('/contact')}
            className="w-full text-slate-500 hover:text-indigo-600 py-2 transition-colors flex items-center justify-center space-x-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact SURIYADEVAN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
