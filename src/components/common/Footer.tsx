import React from 'react';
import { useData } from '../../context/DataContext';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sliders, 
  FileCode, 
  ShieldCheck, 
  Sparkles,
  Lock,
  LogOut
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo, trackEvent, isAdmin, setIsLoginModalOpen, adminLogout } = useData();

  const handleNav = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Top geographic / entity banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-indigo-400 text-[11px] font-bold tracking-wider uppercase block mb-1">
              Entity & Location Authority
            </span>
            <p className="text-white text-sm sm:text-base font-semibold font-display">
              SuriyaDevan S — SEO & Digital Marketing Specialist based in Palani, Tamil Nadu, India
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Providing localized SEO, Google Business Profile optimization, and performance digital marketing across Palani, Dindigul, Oddanchatram, Dharapuram, Udumalpet, Pollachi, Coimbatore, and Tamil Nadu.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleNav('/contact')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg font-semibold text-xs transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <span>Work With SuriyaDevan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={siteSettings.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('linkedin_click', 'Footer Banner')}
              className="p-2.5 border border-slate-700 rounded-lg hover:border-indigo-400 hover:text-white text-slate-300 transition-colors bg-slate-900"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Bio & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-white font-bold text-sm tracking-tight font-display">
                {siteSettings.name}
              </h3>
              <p className="text-indigo-400 text-xs mt-0.5 font-medium">
                {siteSettings.roleTitle}
              </p>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Helping businesses grow organic visibility, Google Business Profile local dominance, search crawl efficiency, and digital brand presence with verified, data-backed execution.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span>Palani, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <a 
                  href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} 
                  onClick={() => trackEvent('phone_click', 'Footer')}
                  className="hover:text-white transition-colors"
                >
                  {siteSettings.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <a 
                  href={`mailto:${siteSettings.email}`}
                  onClick={() => trackEvent('email_click', 'Footer')}
                  className="hover:text-white transition-colors"
                >
                  {siteSettings.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">
                  About SuriyaDevan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services')} className="hover:text-white transition-colors">
                  Services & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/blog')} className="hover:text-white transition-colors">
                  Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/resume')} className="hover:text-white transition-colors">
                  Resume & Experience
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors">
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Services with linked projects */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Services & Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/services/seo')} className="hover:text-white transition-colors text-left">
                  SEO Services <span className="text-[10px] text-slate-500 block">Intrax & Insd Case Studies</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/local-seo')} className="hover:text-white transition-colors text-left">
                  Local SEO & Google Maps <span className="text-[10px] text-slate-500 block">Best Precision Case Study</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/technical-seo')} className="hover:text-white transition-colors text-left">
                  Technical SEO & Audits <span className="text-[10px] text-slate-500 block">Triaz Case Study</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/social-media-management')} className="hover:text-white transition-colors text-left">
                  Social Media & Posters
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/meta-ads')} className="hover:text-white transition-colors text-left">
                  Meta Ads (FB & Instagram)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/google-business-profile')} className="hover:text-white transition-colors text-left">
                  Google Business Profile
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Technical & Machine Discovery */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              CMS & Discovery
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/admin')} className="hover:text-white transition-colors flex items-center space-x-1.5 text-indigo-300">
                  <Sliders className="w-3 h-3 text-indigo-400" />
                  <span>CMS & SEO Health Tool</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/admin?tab=sitemap')} className="hover:text-white transition-colors flex items-center space-x-1 text-slate-400">
                  <FileCode className="w-3 h-3 text-slate-500" />
                  <span>View sitemap.xml</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/admin?tab=robots')} className="hover:text-white transition-colors flex items-center space-x-1 text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-slate-500" />
                  <span>View robots.txt</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/admin?tab=llms')} className="hover:text-white transition-colors flex items-center space-x-1 text-slate-400">
                  <FileCode className="w-3 h-3 text-slate-500" />
                  <span>View llms.txt</span>
                </button>
              </li>
              <li className="pt-2">
                <button onClick={() => handleNav('/privacy-policy')} className="hover:text-white transition-colors text-slate-500">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/terms')} className="hover:text-white transition-colors text-slate-500">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/disclaimer')} className="hover:text-white transition-colors text-slate-500">
                  Disclaimer & Ethics
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800/60">
                {isAdmin ? (
                  <button 
                    onClick={adminLogout} 
                    className="hover:text-red-400 transition-colors flex items-center space-x-1.5 text-emerald-400 font-semibold"
                    title="Click to logout"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Owner Logged In (Logout)</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsLoginModalOpen(true)} 
                    className="hover:text-white transition-colors flex items-center space-x-1 text-slate-500"
                  >
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>Owner Portal Login</span>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} SuriyaDevan S. All rights reserved. Palani, Tamil Nadu, India.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Entity-First Architecture</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">JSON-LD Structured Data</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Core Web Vitals Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
