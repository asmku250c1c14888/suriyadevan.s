import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight, 
  Sliders, 
  Search, 
  MapPin, 
  Phone,
  BarChart3,
  Globe,
  Share2,
  Sparkles,
  Layers,
  Award,
  Lock,
  LogOut
} from 'lucide-react';

export const Header: React.FC = () => {
  const { siteSettings, activePath, navigateTo, trackEvent, isAdmin, setIsLoginModalOpen, adminLogout } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleConsultationClick = () => {
    trackEvent('consultation_click', 'Header CTA');
    handleNav('/contact');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      {/* Top micro-bar for entity clarity */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-slate-200 font-medium">
              <MapPin className="w-3 h-3 mr-1 text-indigo-400" />
              Palani, Tamil Nadu, India
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center text-emerald-400 font-medium space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Client SEO Projects</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} 
              onClick={() => trackEvent('phone_click', 'Top Bar')}
              className="hover:text-white transition-colors flex items-center text-slate-300"
            >
              <Phone className="w-2.5 h-2.5 mr-1 text-indigo-400" />
              {siteSettings.phone}
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={`mailto:${siteSettings.email}`}
              onClick={() => trackEvent('email_click', 'Top Bar')}
              className="hover:text-white transition-colors text-slate-300"
            >
              {siteSettings.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Brand entity */}
          <button 
            onClick={() => handleNav('/')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-base shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                {siteSettings.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 tracking-wider uppercase font-semibold">
                SEO & Digital Marketing Specialist
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNav('/')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activePath === '/' ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('/about')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activePath === '/about' ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              About
            </button>

            {/* Services Dropdown (Integrated with Service Projects) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('/services')}
                className={`flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activePath.startsWith('/services') ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Services & Projects
                <ChevronDown className="w-3 h-3 ml-1 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-72 rounded-xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 flex items-center justify-between">
                    <span>Services & Case Studies</span>
                    <span className="text-[9px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-medium">Verified Work</span>
                  </div>
                  <button
                    onClick={() => handleNav('/services/seo')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-indigo-100/70 text-indigo-600 flex items-center justify-center">
                        <Search className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">SEO Services</div>
                        <div className="text-[10px] text-slate-500">Includes Intrax & Insd Case Studies</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/local-seo')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-emerald-100/70 text-emerald-600 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">Local SEO (Palani Focus)</div>
                        <div className="text-[10px] text-slate-500">Includes Best Precision Case Study</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/technical-seo')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-amber-100/70 text-amber-600 flex items-center justify-center">
                        <BarChart3 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">Technical SEO & Speed</div>
                        <div className="text-[10px] text-slate-500">Includes Triaz Performance Audit</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/social-media-management')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-pink-100/70 text-pink-600 flex items-center justify-center">
                        <Share2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">Social Media & Posters</div>
                        <div className="text-[10px] text-slate-500">Creative graphics & reels</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/meta-ads')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-100/70 text-blue-600 flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">Meta Ads (FB & Insta)</div>
                        <div className="text-[10px] text-slate-500">Campaign ROAS & conversions</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('/services/google-business-profile')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-indigo-50/60 hover:text-indigo-600 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-teal-100/70 text-teal-600 flex items-center justify-center">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold">Google Business Profile</div>
                        <div className="text-[10px] text-slate-500">Map 3-pack & reputation</div>
                      </div>
                    </div>
                  </button>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => handleNav('/services')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50/60 flex items-center justify-between"
                    >
                      <span>Explore All Services & Add Projects →</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/blog')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activePath.startsWith('/blog') ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNav('/resume')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activePath === '/resume' ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Resume
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activePath === '/contact' ? 'text-indigo-600 bg-indigo-50/80 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions: Admin CMS / Owner Mode & Free Consultation */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {isAdmin ? (
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleNav('/admin')}
                  title="Content Management Dashboard (Owner Mode Active)"
                  className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                    activePath === '/admin'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 shadow-2xs'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold">Owner CMS</span>
                </button>
                <button
                  onClick={() => adminLogout()}
                  title="Log out of owner access"
                  className="p-2 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 rounded-lg text-slate-500 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                title="Owner Login (SURIYADEVAN S)"
                className="px-2.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-all flex items-center space-x-1.5 text-xs shadow-2xs"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-medium">Owner Login</span>
              </button>
            )}

            <button
              onClick={handleConsultationClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow flex items-center space-x-1.5"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {isAdmin ? (
              <button
                onClick={() => handleNav('/admin')}
                className="p-2 text-xs border border-emerald-300 rounded-lg bg-emerald-50 text-emerald-800"
                title="Admin CMS (Owner Active)"
              >
                <Sliders className="w-4 h-4 text-emerald-700" />
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="p-2 text-xs border border-slate-200 rounded-lg bg-white text-slate-600"
                title="Owner Login"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <button
            onClick={() => handleNav('/')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('/about')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            About SURIYADEVAN
          </button>
          <button
            onClick={() => handleNav('/services')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Services & Linked Projects
          </button>
          <div className="pl-4 border-l-2 border-indigo-100 space-y-1 my-1">
            <button onClick={() => handleNav('/services/seo')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • SEO Services (Intrax & Insd Projects)
            </button>
            <button onClick={() => handleNav('/services/local-seo')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • Local SEO (Best Precision Project)
            </button>
            <button onClick={() => handleNav('/services/technical-seo')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • Technical SEO (Triaz Project)
            </button>
            <button onClick={() => handleNav('/services/social-media-management')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • Social Media & Posters
            </button>
            <button onClick={() => handleNav('/services/meta-ads')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • Meta Ads Strategy
            </button>
            <button onClick={() => handleNav('/services/google-business-profile')} className="block text-xs font-medium text-slate-600 py-1 hover:text-indigo-600">
              • Google Business Profile
            </button>
          </div>
          <button
            onClick={() => handleNav('/blog')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Blog & Insights
          </button>
          <button
            onClick={() => handleNav('/resume')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Resume
          </button>
          <button
            onClick={() => handleNav('/contact')}
            className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <button
              onClick={handleConsultationClick}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-xs font-semibold tracking-wide text-center hover:bg-indigo-700"
            >
              Get Free SEO Consultation
            </button>
            {isAdmin ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleNav('/admin')}
                  className="flex-1 bg-emerald-50 border border-emerald-300 text-emerald-800 py-2 rounded-lg text-xs font-semibold text-center flex items-center justify-center space-x-1.5"
                >
                  <Sliders className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Open Owner CMS Dashboard</span>
                </button>
                <button
                  onClick={() => adminLogout()}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold"
                  title="Log out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-medium text-center flex items-center justify-center space-x-1.5 hover:border-indigo-300"
              >
                <Lock className="w-3.5 h-3.5 text-indigo-600" />
                <span>Owner Login (Passcode Required)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
