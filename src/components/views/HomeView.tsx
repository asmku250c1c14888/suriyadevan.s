import React, { useState, useMemo } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
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
  HelpCircle
} from 'lucide-react';
import { FAQItem } from '../../types';

export const HomeView: React.FC = () => {
  const { siteSettings, projects, services, faqs, addFAQ, updateFAQ, deleteFAQ, navigateTo, trackEvent, isAdmin } = useData();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

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
        title="SEO & Digital Marketing Specialist Palani | SURIYADEVAN S"
        description="Rank #1 on Google with SURIYADEVAN S. Expert SEO, Local SEO, Meta Ads & social media management for businesses in Palani, Tamil Nadu. Get a free audit!"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-white creative-grid-pattern">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Geographic entity pill */}
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/80 rounded-full px-3.5 py-1 text-xs text-indigo-700">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-bold text-slate-800">Palani, Tamil Nadu, India</span>
            <span className="text-indigo-300">•</span>
            <span className="text-indigo-600 font-medium">Available for Freelance Growth Projects</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] font-display">
            SEO & Digital Marketing Specialist <br className="hidden sm:inline" />
            <span className="text-indigo-600">in Palani, Tamil Nadu</span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Helping businesses grow their Google visibility, organic traffic, local search presence and digital brand visibility through SEO and performance-focused digital marketing.
          </p>

          {/* Core CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
            >
              <span>Get a Free SEO Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                trackEvent('service_view', 'Hero secondary CTA');
                navigateTo('/services');
              }}
              className="w-full sm:w-auto bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-indigo-300 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-2xs flex items-center justify-center space-x-1.5"
            >
              <span>Explore Services & Projects</span>
            </button>

            <a
              href={siteSettings.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('linkedin_click', 'Hero LinkedIn CTA')}
              className="w-full sm:w-auto text-slate-600 hover:text-indigo-600 px-4 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Quick Credibility Badges */}
          <div className="pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[11px] text-indigo-600 uppercase font-bold tracking-wider">Experience</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">{projects.length}+ Projects Delivered Live</div>
            </div>
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[11px] text-indigo-600 uppercase font-bold tracking-wider">Rankings</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Google 1st-Page Rankings</div>
            </div>
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[11px] text-indigo-600 uppercase font-bold tracking-wider">Location</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">Palani & Tamil Nadu Focus</div>
            </div>
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[11px] text-indigo-600 uppercase font-bold tracking-wider">Approach</div>
              <div className="text-sm font-black text-slate-900 mt-0.5">100% Ethical White-Hat</div>
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
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center space-x-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>Live</span>
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {project.date || '2026'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                      {project.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      Client: {project.client} {project.industry ? `• ${project.industry}` : ''}
                    </p>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
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

                  <div className="mt-6 pt-4 border-t border-slate-200/60">
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
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {service.slug === 'seo' && <Search className="w-5 h-5" />}
                  {service.slug === 'local-seo' && <MapPin className="w-5 h-5" />}
                  {service.slug === 'technical-seo' && <BarChart3 className="w-5 h-5" />}
                  {service.slug === 'social-media-management' && <Share2 className="w-5 h-5" />}
                  {service.slug === 'meta-ads' && <Globe className="w-5 h-5" />}
                  {service.slug === 'google-business-profile' && <Award className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
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

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    trackEvent('service_view', service.name);
                    navigateTo(`/services/${service.slug}`);
                  }}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                >
                  <span>Explore {service.name} & Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Palani Local Business SEO Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 creative-dark-grid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Geographic SEO Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                Local SEO for Palani & Regional Businesses
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When consumers in Palani or travelling pilgrims search for retail shops, clinics, interior decorators, hotels, or repair services, Google provides local map suggestions. I optimize your Google Business Profile and local citations to place your business right where nearby customers are looking.
              </p>
              
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tailored For Palani & Surrounding Towns:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Retail Stores', 'Furniture & Home Appliances', 'Clinics & Healthcare', 'Hotels & Hospitality', 'Interior Designers & Architects', 'Professional Services', 'Local Small Businesses'].map((cat, idx) => (
                    <span key={idx} className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full text-slate-300">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 text-xs text-slate-400">
                Regional coverage includes <strong>Palani</strong>, <strong>Dindigul</strong>, <strong>Oddanchatram</strong>, <strong>Dharapuram</strong>, <strong>Udumalpet</strong>, <strong>Pollachi</strong>, <strong>Coimbatore</strong>, and <strong>Madurai</strong>.
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/90 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h3 className="text-base font-bold text-white font-display">
                Request a Free Local SEO Audit for Palani
              </h3>
              <p className="text-xs text-slate-300">
                Find out why your business might be missing from the Google Maps 3-pack and how to capture nearby buyers.
              </p>
              <button
                onClick={handleConsultation}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                Claim Your Free Local Audit
              </button>
            </div>
          </div>
        </div>
      </section>

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
                    <option value="General">General</option>
                    <option value="SEO">SEO</option>
                    <option value="Local SEO">Local SEO</option>
                    <option value="Social Media & Ads">Social Media & Ads</option>
                    <option value="Working Together">Working Together</option>
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
    </div>
  );
};
