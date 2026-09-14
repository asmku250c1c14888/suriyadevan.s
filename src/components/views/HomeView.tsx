import React, { useState, useMemo } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { SearchIntentHub } from '../common/SearchIntentHub';
import { APP_IMAGES } from '../../assets/images';
import { InteractiveRankingComparison } from '../common/InteractiveRankingComparison';
import { InteractiveIndustrySolutions } from '../common/InteractiveIndustrySolutions';
import { InteractiveLocalRadiusExplorer } from '../common/InteractiveLocalRadiusExplorer';
import { InteractiveImageModal } from '../common/InteractiveImageModal';
import { InteractiveGoogleSearchExplorer } from '../home/InteractiveGoogleSearchExplorer';
import { renderClientLogo } from '../common/ClientLogos';
import { 
  buildPersonSchema, 
  buildLocalBusinessSchema, 
  buildWebSiteSchema, 
  buildFAQSchema 
} from '../../utils/seoSchemas';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  BarChart3, 
  Share2, 
  Globe, 
  Award,
  Linkedin,
  Clock,
  Layers,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
  X,
  HelpCircle,
  TrendingUp,
  Maximize2,
  ShieldCheck,
  Target,
  Zap,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { FAQItem } from '../../types';

export const HomeView: React.FC = () => {
  const { siteSettings, projects, services, faqs, addFAQ, updateFAQ, deleteFAQ, navigateTo, trackEvent, isAdmin } = useData();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Interactive Image Modal state
  const [activeImageModal, setActiveImageModal] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    title: ''
  });

  // Hero interactive hotspot active selection
  const [heroHotspot, setHeroHotspot] = useState<number>(0);

  // FAQ Modal & CRUD state
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [deleteFaqConfirmId, setDeleteFaqConfirmId] = useState<string | null>(null);
  const [faqToast, setFaqToast] = useState<string | null>(null);
  const [faqFormData, setFaqFormData] = useState<{
    question: string;
    answer: string;
    category: FAQItem['category'];
    featured: boolean;
  }>({
    question: '',
    answer: '',
    category: 'General',
    featured: true
  });

  const showFaqToast = (msg: string) => {
    setFaqToast(msg);
    setTimeout(() => setFaqToast(null), 3500);
  };

  const openAddFaqModal = () => {
    setEditingFaq(null);
    setFaqFormData({
      question: '',
      answer: '',
      category: 'General',
      featured: true
    });
    setIsFaqModalOpen(true);
  };

  const openEditFaqModal = (faq: FAQItem) => {
    setEditingFaq(faq);
    setFaqFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      featured: faq.featured ?? true
    });
    setIsFaqModalOpen(true);
  };

  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqFormData.question.trim() || !faqFormData.answer.trim()) {
      alert('Please provide both a question and an answer.');
      return;
    }

    if (editingFaq) {
      updateFAQ(editingFaq.id, faqFormData);
      showFaqToast('FAQ updated successfully!');
    } else {
      addFAQ(faqFormData);
      showFaqToast('New FAQ added successfully!');
    }

    setIsFaqModalOpen(false);
    setEditingFaq(null);
  };

  const handleDeleteFaq = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    deleteFAQ(id);
    setDeleteFaqConfirmId(null);
    showFaqToast('FAQ removed successfully.');
  };

  const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>('All');

  // Dynamic project categories with live counts
  const projectCategories = useMemo(() => {
    const cats = ['All', 'Local SEO', 'Social Media', 'Meta Ads', 'SEO'];
    return cats.map(cat => ({
      name: cat,
      count: cat === 'All' 
        ? projects.length 
        : projects.filter(p => (p.category || '').toLowerCase().includes(cat.toLowerCase())).length
    }));
  }, [projects]);

  const displayedProjects = useMemo(() => {
    return projects.filter(p => {
      if (projectCategoryFilter === 'All') return true;
      return (p.category || '').toLowerCase().includes(projectCategoryFilter.toLowerCase());
    });
  }, [projects, projectCategoryFilter]);

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 6);

  const homeSchema = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
    const graph: any[] = [
      buildPersonSchema(origin),
      buildLocalBusinessSchema(origin),
      buildWebSiteSchema(origin)
    ];

    if (faqs && faqs.length > 0) {
      const faqSchema = buildFAQSchema(
        faqs.map(f => ({ question: f.question, answer: f.answer }))
      );
      if (faqSchema) graph.push(faqSchema);
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graph
    };
  }, [faqs]);

  const handleConsultation = () => {
    trackEvent('consultation_click', 'Homepage Hero');
    navigateTo('/contact');
  };

  const toolsAndTech = [
    { name: 'Google Search Console' },
    { name: 'Google Analytics 4' },
    { name: 'Google Tag Manager' },
    { name: 'Microsoft Clarity' },
    { name: 'SEMrush' },
    { name: 'Google Business Profile' },
    { name: 'Meta Ads Manager' },
    { name: 'WordPress' },
    { name: 'PageSpeed Insights' },
    { name: 'Adobe Express' },
    { name: 'Canva' }
  ];

  return (
    <div className="min-h-screen bg-slate-50/70">
      <SEOHead
        title="SURIYADEVAN S | SEO & Digital Marketing Specialist Palani, Tamil Nadu"
        description="Official website of SURIYADEVAN S (Suriyadevan). Top SEO specialist, Local SEO, Meta Ads & Google Business Profile expert in Palani, Tamil Nadu. Proven Google 1st-page rankings."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white creative-grid-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Hero Content & Keyword Targeting */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Geographic entity pill */}
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/80 rounded-full px-3.5 py-1.5 text-xs text-indigo-700 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold text-slate-900">Palani, Tamil Nadu, India (624601)</span>
                <span className="text-indigo-300">•</span>
                <span className="text-indigo-600 font-semibold">Digital Marketing Agency & SEO Expert</span>
              </div>

              {/* Main H1 Headline */}
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 block">
                  Official SEO Practice & Growth Consultancy
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] font-display">
                  SURIYADEVAN S <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 text-2xl sm:text-4xl block mt-1.5">
                    Digital Marketing Agency & SEO Company in Palani
                  </span>
                </h1>
              </div>

              {/* Supporting Copy with Natural Keyword Density */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Rank on <strong>Google first page</strong>, dominate the <strong>Google Maps 3-Pack</strong> in Palani, generate high-intent buyer inquiries via <strong>Meta & Instagram Ads</strong>, and build blazing-fast business websites. Affordable, white-hat digital marketing services tailored for local shops, showrooms, hotels, hospitals, and startups.
              </p>

              {/* High-Intent Keyword Tags */}
              <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-700">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Maps SEO Palani</span>
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Instagram & Meta Ads Agency</span>
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Website Development Company</span>
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Affordable for Local Shops</span>
                </span>
              </div>

              {/* Core CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleConsultation}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center space-x-2 group"
                >
                  <span>Get Free SEO & Digital Audit</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919087571737?text=Hi%20Suriyadevan,%20I%20want%20to%20rank%20my%20business%20in%20Palani"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_hero_click', 'Hero WhatsApp CTA')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    trackEvent('service_view', 'Hero secondary CTA');
                    navigateTo('/services');
                  }}
                  className="bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-indigo-300 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs flex items-center justify-center space-x-1.5"
                >
                  <span>All Services</span>
                </button>
              </div>

              {/* Quick Credibility Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] text-indigo-600 uppercase font-bold tracking-wider">Experience</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">{projects.length}+ Live Client Projects</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] text-indigo-600 uppercase font-bold tracking-wider">Rankings</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">Google 1st-Page Rankings</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] text-indigo-600 uppercase font-bold tracking-wider">Location</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">Palani & Tamil Nadu</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] text-indigo-600 uppercase font-bold tracking-wider">Methodology</div>
                  <div className="text-sm font-black text-slate-900 mt-0.5">100% Ethical White-Hat</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Agency Visual with Hotspots */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 bg-slate-900 shadow-xl group">
                <img
                  src={APP_IMAGES.heroAgency}
                  alt="SURIYADEVAN S Digital Marketing Agency Workspace in Palani"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Interactive Growth Hub</span>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => {
                    trackEvent('image_inspect_click', 'Hero Agency Visual');
                    setActiveImageModal({
                      isOpen: true,
                      src: APP_IMAGES.heroAgency,
                      alt: 'SURIYADEVAN S Digital Marketing Workspace in Palani',
                      title: 'Digital Marketing Agency in Palani Command Center',
                      subtitle: 'Multi-screen analytics dashboard tracking Google 1st-page rankings, Maps traffic, and paid Meta Ads campaigns.'
                    });
                  }}
                  className="absolute top-3 right-3 bg-slate-900/85 hover:bg-indigo-600 backdrop-blur-md border border-slate-700 text-white p-2 rounded-xl transition-all shadow-md text-xs font-semibold flex items-center space-x-1.5"
                  title="Inspect Image in High-Resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Inspect Full-Res</span>
                </button>

                {/* Pulsating Interactive Hotspots */}
                {/* Hotspot 1: Google Rankings */}
                <button
                  onClick={() => setHeroHotspot(0)}
                  className={`absolute top-[28%] left-[26%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
                    heroHotspot === 0 ? 'bg-indigo-600 ring-4 ring-indigo-400/50 scale-110' : 'bg-slate-900/90 hover:bg-indigo-600'
                  }`}
                  title="Google Rank #1 Engine"
                >
                  <Search className="w-4 h-4 text-white" />
                </button>

                {/* Hotspot 2: Google Maps 3-Pack */}
                <button
                  onClick={() => setHeroHotspot(1)}
                  className={`absolute top-[22%] right-[22%] translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
                    heroHotspot === 1 ? 'bg-emerald-600 ring-4 ring-emerald-400/50 scale-110' : 'bg-slate-900/90 hover:bg-emerald-600'
                  }`}
                  title="Google Maps 3-Pack Dominance"
                >
                  <MapPin className="w-4 h-4 text-white" />
                </button>

                {/* Hotspot 3: High ROAS Meta Ads */}
                <button
                  onClick={() => setHeroHotspot(2)}
                  className={`absolute bottom-[35%] left-[28%] -translate-x-1/2 translate-y-1/2 p-2 rounded-full transition-all ${
                    heroHotspot === 2 ? 'bg-purple-600 ring-4 ring-purple-400/50 scale-110' : 'bg-slate-900/90 hover:bg-purple-600'
                  }`}
                  title="Social Media & Meta Ads"
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </button>

                {/* Hotspot 4: Fast Web Dev */}
                <button
                  onClick={() => setHeroHotspot(3)}
                  className={`absolute bottom-[30%] right-[25%] translate-x-1/2 translate-y-1/2 p-2 rounded-full transition-all ${
                    heroHotspot === 3 ? 'bg-blue-600 ring-4 ring-blue-400/50 scale-110' : 'bg-slate-900/90 hover:bg-blue-600'
                  }`}
                  title="Fast Mobile-First Website"
                >
                  <Globe className="w-4 h-4 text-white" />
                </button>

                {/* Active Hotspot Bottom Detail Box */}
                <div className="absolute bottom-3 inset-x-3 bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-xl p-3 text-white transition-all">
                  {heroHotspot === 0 && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                        <span className="flex items-center space-x-1.5">
                          <Search className="w-3.5 h-3.5" />
                          <span>Google First Page Rankings</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                          100% White-Hat
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Entity-based SEO and semantic search architecture targeting high-intent commercial keywords across Palani.
                      </p>
                    </div>
                  )}

                  {heroHotspot === 1 && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                        <span className="flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Google Maps 3-Pack Dominance</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                          Local 3-Pack #1
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Turn mobile "near me" searches into daily foot traffic, store visits, and direct customer phone calls.
                      </p>
                    </div>
                  )}

                  {heroHotspot === 2 && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-purple-400">
                        <span className="flex items-center space-x-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Instagram & Meta Ads Lead Gen</span>
                        </span>
                        <span className="text-[10px] text-purple-300 bg-purple-950/80 border border-purple-800 px-2 py-0.5 rounded">
                          5.8x Avg ROAS
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Direct-response ad creative driving Click-to-WhatsApp chats, showroom visits, and product orders within 48 hours.
                      </p>
                    </div>
                  )}

                  {heroHotspot === 3 && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-400">
                        <span className="flex items-center space-x-1.5">
                          <Globe className="w-3.5 h-3.5" />
                          <span>Fast Mobile-First Website Dev</span>
                        </span>
                        <span className="text-[10px] text-blue-300 bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded">
                          99/100 Core Web Vitals
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        High-converting business websites, WhatsApp catalogs, and custom e-commerce stores optimized for speed and SEO.
                      </p>
                    </div>
                  )}

                  {/* Hotspot Switchers */}
                  <div className="flex justify-between items-center pt-2 mt-1 border-t border-slate-800 text-[10px] text-slate-400">
                    <span>Click dots on image to switch focus</span>
                    <div className="flex space-x-1">
                      {[0, 1, 2, 3].map((i) => (
                        <button
                          key={i}
                          onClick={() => setHeroHotspot(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            heroHotspot === i ? 'bg-indigo-400 w-4' : 'bg-slate-600 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Guarantee Callout */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between shadow-2xs">
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Zero Bloat:</strong> You work directly with Suriyadevan S, no agency junior handoffs.</span>
                </div>
                <button
                  onClick={() => navigateTo('/about')}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 whitespace-nowrap pl-2"
                >
                  Read Bio →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Highlights Horizontal Ticker */}
      <section className="bg-slate-900 text-slate-300 py-3.5 px-4 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium">
          <span className="text-indigo-400 font-bold uppercase tracking-wider">Capabilities:</span>
          <span>• SEO Strategy</span>
          <span>• Local SEO</span>
          <span>• Technical SEO</span>
          <span>• Keyword Research</span>
          <span>• Content Optimization</span>
          <span>• Social Media Posters & Reels</span>
          <span>• Meta Ads</span>
          <span>• Google Business Profile</span>
          <span>• WordPress SEO</span>
          <span>• GA4 & GSC Analytics</span>
        </div>
      </section>

      {/* Interactive Ranking Comparison Slider (Before vs After) */}
      <InteractiveRankingComparison />

      {/* Who is SURIYADEVAN S — Entity Grounding */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>About SURIYADEVAN S</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Digital Marketing Executive & Freelance SEO Specialist in Palani
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I am an SEO and Digital Marketing Executive with hands-on experience managing end-to-end search engine optimization projects. My experience encompasses on-page SEO, off-page link building, local SEO, technical health optimization, search intent mapping, paid Meta Ads, and social media marketing.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Having managed 5 complete client SEO projects at <strong>Avanexa</strong> and optimized Google Business Profiles and Online Reputation Management at <strong>Cannibals Media</strong>, I focus on measurable organic search expansion rather than vanity metrics.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold shadow-2xs">B.Com (Computer Applications)</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold shadow-2xs">Google Certified</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold shadow-2xs">Meta Certified</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold shadow-2xs">KGiSL MicroCollege (2025)</span>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigateTo('/about')}
                className="text-xs font-bold text-slate-900 hover:text-indigo-600 inline-flex items-center space-x-1.5 border-b-2 border-indigo-600 pb-0.5 transition-colors"
              >
                <span>Read Full Professional Background & Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-3">
              Verified Experience Highlights
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Avanexa</div>
                <div className="text-indigo-600 font-semibold">Digital Marketing Executive (SEO)</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Managed 5 SEO projects end-to-end. Achieved Google first-page rankings, increased organic traffic, created search-intent content, and integrated GSC, GA4, GTM, and Microsoft Clarity.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Cannibals Media</div>
                <div className="text-indigo-600 font-semibold">SEO & Digital Marketing Intern</div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Managed Google My Business / Google Business Profile listings, supported Online Reputation Management (ORM), and monitored customer reviews to improve local SEO.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => navigateTo('/resume')}
                className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-colors shadow-2xs"
              >
                View Complete Interactive Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Search Explorer for Delivered Projects */}
      <InteractiveGoogleSearchExplorer />

      {/* Featured SEO Projects embedded with Service context */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Client Portfolio & Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
                Client Projects Delivered by Service ({projects.length} Live)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl">
                Real-world client work managed and updated live from the owner management panel across Local SEO, Social Media, Meta Ads, Technical SEO, and Google Business Profile optimization.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('/services')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
              >
                <span>Explore All Services & Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Project Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-100">
            {projectCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setProjectCategoryFilter(cat.name)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
                  projectCategoryFilter === cat.name
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  projectCategoryFilter === cat.name ? 'bg-slate-700 text-slate-100' : 'bg-slate-200 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => {
              const matchingServiceSlug = project.relatedServices?.[0] || 
                (project.category.toLowerCase().includes('local') ? 'local-seo' :
                 project.category.toLowerCase().includes('social') ? 'social-media-management' :
                 project.category.toLowerCase().includes('meta') ? 'meta-ads' :
                 project.category.toLowerCase().includes('tech') ? 'technical-seo' : 'seo');

              return (
                <div
                  key={project.id}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-400 transition-all hover:shadow-md group"
                >
                  <div>
                    {/* Project Header with Client Own Logo */}
                    <div className="flex items-start justify-between mb-4 border-b border-slate-200/60 pb-3">
                      <div className="flex-1">
                        {renderClientLogo(project.slug || project.name, 'sm')}
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/60">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center space-x-1 text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                        {project.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {project.date || '2026'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-2 font-semibold">
                      Client: {project.client} {project.industry ? `• ${project.industry}` : ''}
                    </p>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {project.overview || `Comprehensive ${project.category} campaign delivered for ${project.client}, focusing on measurable growth and audience engagement.`}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200/60">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Delivered Under Service:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(project.services && project.services.length > 0 ? project.services : [project.category]).map((serv, idx) => (
                          <span key={idx} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                            {serv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 space-y-2">
                    {/* Interactive Google SERP quick launch */}
                    <button
                      onClick={() => {
                        trackEvent('search_project_google', project.name);
                        const element = document.getElementById('google-search-simulator');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <Search className="w-3.5 h-3.5 text-blue-600" />
                      <span>Search on Google Simulator</span>
                    </button>

                    <button
                      onClick={() => {
                        trackEvent('project_view', project.name);
                        navigateTo(`/services/${matchingServiceSlug}`);
                      }}
                      className="w-full py-2.5 bg-white border border-slate-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 text-slate-800 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-2xs"
                    >
                      <span>View in {project.category} Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            * Note on integrity: We adhere strictly to ethical reporting. Numerical metric data is updated directly as verified client analytics datasets are finalized.
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
            Tailored Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Digital Marketing & SEO Services
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Targeted service offerings engineered to address search algorithms, technical crawling hurdles, local buyer intent, and social engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const serviceImage = 
              service.slug === 'google-business-profile' || service.slug === 'local-seo' 
                ? APP_IMAGES.localMaps 
                : service.slug === 'meta-ads' || service.slug === 'social-media-management'
                ? APP_IMAGES.socialAds
                : service.slug === 'technical-seo' || service.slug === 'seo'
                ? APP_IMAGES.websiteDev
                : APP_IMAGES.localRetail;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between hover:shadow-lg overflow-hidden group"
              >
                <div>
                  {/* Service Visual Header with Interactive Zoom trigger */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={serviceImage}
                      alt={`${service.name} in Palani`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    <button
                      onClick={() => {
                        trackEvent('service_image_inspect', service.name);
                        setActiveImageModal({
                          isOpen: true,
                          src: serviceImage,
                          alt: `${service.name} showcase in Palani`,
                          title: service.name,
                          subtitle: service.shortDescription
                        });
                      }}
                      className="absolute top-3 right-3 p-1.5 bg-slate-900/80 hover:bg-indigo-600 text-white rounded-lg backdrop-blur-sm transition-colors text-xs flex items-center space-x-1"
                      title="Inspect full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] pr-0.5">Zoom</span>
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-indigo-400/40">
                        {service.slug.replace(/-/g, ' ')}
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 bg-slate-900/70 px-2 py-0.5 rounded">
                        Palani Targeted
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                      {service.slug === 'seo' && <Search className="w-4 h-4" />}
                      {service.slug === 'local-seo' && <MapPin className="w-4 h-4" />}
                      {service.slug === 'technical-seo' && <BarChart3 className="w-4 h-4" />}
                      {service.slug === 'social-media-management' && <Share2 className="w-4 h-4" />}
                      {service.slug === 'meta-ads' && <Globe className="w-4 h-4" />}
                      {service.slug === 'google-business-profile' && <Award className="w-4 h-4" />}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      trackEvent('service_view', service.name);
                      navigateTo(`/services/${service.slug}`);
                    }}
                    className="w-full py-2 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white text-indigo-700 font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>Explore {service.name} & Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Industry Solutions & Local Retail Focus */}
      <InteractiveIndustrySolutions />

      {/* Interactive Local Radius & Tamil Intent Explorer */}
      <InteractiveLocalRadiusExplorer />

      {/* Search Intent & How People Search Hub */}
      <SearchIntentHub />

      {/* Tools and Technologies Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Data Tools & Technologies Utilized
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-4xl mx-auto">
            {toolsAndTech.map((tool, idx) => (
              <div 
                key={idx} 
                className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-indigo-300 transition-colors"
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
            Factual Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Why Work With SURIYADEVAN?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            No inflated promises or fabricated rankings. Transparent, hands-on execution backed by verified experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3">
              01
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-display">End-to-End Project Execution</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Managed 5 SEO client projects from preliminary crawl audits and keyword research to on-page restructuring and analytics tracking.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3">
              02
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-display">Local SEO & Google Business Profile</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Hands-on management of Google Business Profile listings, review monitoring, category tuning, and local reputation management.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs mb-3">
              03
            </div>
            <h3 className="font-bold text-sm text-slate-900 font-display">Data & User-Behavior Tools</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Proven integration and daily utilization of Google Search Console, Google Analytics 4, Google Tag Manager, and Microsoft Clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Toast Notification */}
          {faqToast && (
            <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 flex items-center space-x-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{faqToast}</span>
            </div>
          )}

          <div className="text-center mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
              Answer Engine Optimization (AEO)
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Direct, factual answers to common client questions regarding SEO, Local SEO, and digital marketing services.
            </p>

            {isAdmin && (
              <div className="pt-2">
                <button
                  onClick={openAddFaqModal}
                  className="inline-flex items-center space-x-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-2xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Question & Answer</span>
                </button>
              </div>
            )}
          </div>

          {displayedFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-sm font-bold text-slate-900 font-display">No FAQs available</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {isAdmin ? 'No questions are currently published. Click below to add your first client FAQ.' : 'Answers to common questions will appear here.'}
              </p>
              {isAdmin && (
                <button
                  onClick={openAddFaqModal}
                  className="inline-flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-2xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add First FAQ</span>
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {displayedFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                const isConfirmingDelete = deleteFaqConfirmId === faq.id;

                return (
                  <div 
                    key={faq.id} 
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white hover:border-slate-300"
                  >
                    {/* Delete confirmation banner (Admin only) */}
                    {isAdmin && isConfirmingDelete && (
                      <div className="px-4 py-2.5 bg-red-50 border-b border-red-200 text-red-900 flex justify-between items-center text-xs">
                        <span className="font-semibold">Delete this question?</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setDeleteFaqConfirmId(null)}
                            className="px-2 py-0.5 bg-white border border-slate-300 text-slate-700 rounded text-[11px] font-semibold hover:bg-slate-100"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={(e) => handleDeleteFaq(faq.id, e)}
                            className="px-2 py-0.5 bg-red-600 text-white rounded text-[11px] font-semibold hover:bg-red-700 shadow-2xs"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between px-5 py-4 bg-slate-50/70 hover:bg-slate-100 transition-colors">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="text-left flex-1 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none flex items-center justify-between pr-4"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{faq.question}</span>
                          {faq.category && faq.category !== 'General' && (
                            <span className="hidden sm:inline-block text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                              {faq.category}
                            </span>
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Quick FAQ Action Buttons: Edit & Delete (Admin Only) */}
                      {isAdmin && (
                        <div className="flex items-center space-x-1 pl-2 border-l border-slate-200 flex-shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditFaqModal(faq);
                            }}
                            className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-white rounded transition-colors"
                            title="Edit this FAQ"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteFaqConfirmId(faq.id);
                            }}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-white rounded transition-colors"
                            title="Delete this FAQ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {isOpen && (
                      <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-2">
                        <p>{faq.answer}</p>
                        <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-50">
                          <span>Category: <strong className="text-slate-600 font-semibold">{faq.category}</strong></span>
                          {isAdmin && (
                            <button
                              onClick={() => openEditFaqModal(faq)}
                              className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center space-x-1"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>Edit Answer</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Show all / fewer toggle */}
          {faqs.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
              >
                {showAllFaqs ? 'Show Fewer FAQs' : `View All ${faqs.length} FAQs`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Add / Edit Modal */}
      {isFaqModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {editingFaq ? 'Edit FAQ' : 'Add New Question & Answer'}
                </h3>
                <p className="text-xs text-slate-500">
                  Provide clear, factual answers for prospective clients.
                </p>
              </div>
              <button
                onClick={() => setIsFaqModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFaq} className="p-6 space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Question *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How long does Local SEO in Palani take to show results?"
                  value={faqFormData.question}
                  onChange={(e) => setFaqFormData({ ...faqFormData, question: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Answer *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide a direct, factual explanation with realistic expectations..."
                  value={faqFormData.answer}
                  onChange={(e) => setFaqFormData({ ...faqFormData, answer: e.target.value })}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-xs leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={faqFormData.category}
                    onChange={(e) => setFaqFormData({ ...faqFormData, category: e.target.value as any })}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <option value="General & Brand">General & Brand</option>
                    <option value="SEO">SEO</option>
                    <option value="Local SEO">Local SEO</option>
                    <option value="Technical SEO">Technical SEO</option>
                    <option value="Hiring & Pricing">Hiring & Pricing</option>
                    <option value="Social Media & Ads">Social Media & Ads</option>
                    <option value="Working Together">Working Together</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div className="flex items-center sm:pt-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={faqFormData.featured}
                      onChange={(e) => setFaqFormData({ ...faqFormData, featured: e.target.checked })}
                      className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="font-semibold text-slate-700">Feature on Homepage</span>
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsFaqModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all shadow-2xs"
                >
                  {editingFaq ? 'Update FAQ' : 'Save FAQ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Strong Final CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white text-center creative-dark-grid">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/60">
            Ready to grow your search visibility?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-display">
            Let's Discuss Your SEO & Digital Marketing Strategy
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need Local SEO for your business in Palani, technical fixes, or a comprehensive organic search roadmap across Tamil Nadu, get in touch today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm flex items-center justify-center space-x-1.5"
            >
              <span>Request Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
              onClick={() => trackEvent('phone_click', 'Footer CTA Banner')}
              className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
            >
              Call: {siteSettings.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Global Interactive Image Modal for Zooming / Inspecting Visuals */}
      <InteractiveImageModal
        isOpen={activeImageModal.isOpen}
        onClose={() => setActiveImageModal(prev => ({ ...prev, isOpen: false }))}
        imageSrc={activeImageModal.src}
        imageAlt={activeImageModal.alt}
        title={activeImageModal.title}
        subtitle={activeImageModal.subtitle}
      />
    </div>
  );
};
