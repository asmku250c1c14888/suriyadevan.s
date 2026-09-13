import React, { useState, useMemo } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { buildServiceSchema, buildCollectionSchema } from '../../utils/seoSchemas';
import { Project } from '../../types';
import { SocialMediaPortfolio } from '../services/SocialMediaPortfolio';
import { MetaAdsCampaigns } from '../services/MetaAdsCampaigns';
import { 
  Search, 
  MapPin, 
  BarChart3, 
  Share2, 
  Globe, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Clock,
  Layers,
  PlusCircle,
  FolderPlus,
  Sparkles,
  X,
  ExternalLink,
  SlidersHorizontal,
  Calendar,
  Briefcase,
  Wrench,
  Check,
  ChevronRight,
  Eye,
  Trash2
} from 'lucide-react';

export const ServicesView: React.FC = () => {
  const { services, projects, addProject, deleteProject, activePath, siteSettings, navigateTo, trackEvent, isAdmin } = useData();

  // Dialog states
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Form state for adding project directly to service
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    industry: '',
    category: 'SEO' as Project['category'],
    services: '',
    overview: '',
    challenge: '',
    strategy: '',
    implementation: '',
    tools: 'Google Search Console, SEMrush, Google Analytics 4',
    resultsNote: 'Project deliverables executed and verified according to client scope.',
    date: `${new Date().getFullYear()}`,
    location: 'Palani / Tamil Nadu, India'
  });

  const [formSuccess, setFormSuccess] = useState('');

  // Determine if viewing a specific service subpage (e.g. /services/seo or /services/local-seo)
  const pathParts = activePath.split('?')[0].split('/');
  const subSlug = pathParts[2] || '';
  const currentService = services.find(s => s.slug === subSlug || (subSlug === 'meta-ads-management' && s.slug === 'meta-ads'));

  // Helper to test if a project belongs to a service
  const isProjectMatchingService = (proj: Project, serviceSlug: string) => {
    if (proj.relatedServices && proj.relatedServices.includes(serviceSlug)) return true;
    const s = serviceSlug.toLowerCase();
    const c = (proj.category || '').toLowerCase();
    if (s === 'seo' && (c === 'seo' || c === 'wordpress')) return true;
    if (s === 'local-seo' && (c === 'local seo' || c === 'google business profile')) return true;
    if (s === 'technical-seo' && c === 'technical seo') return true;
    if (s === 'social-media-management' && (c === 'social media' || c.includes('social'))) return true;
    if (s === 'meta-ads' && (c === 'meta ads' || c.includes('ads'))) return true;
    if (s === 'google-business-profile' && (c === 'google business profile' || c === 'local seo')) return true;
    return false;
  };

  // Projects filtered for current service
  const currentServiceProjects = useMemo(() => {
    if (!currentService) return [];
    return projects.filter(p => isProjectMatchingService(p, currentService.slug));
  }, [currentService, projects]);

  // Open add project modal pre-configured for the current service
  const openAddProjectForCurrentService = () => {
    if (currentService) {
      let defaultCategory: Project['category'] = 'SEO';
      if (currentService.slug === 'local-seo') defaultCategory = 'Local SEO';
      else if (currentService.slug === 'technical-seo') defaultCategory = 'Technical SEO';
      else if (currentService.slug === 'social-media-management') defaultCategory = 'Social Media';
      else if (currentService.slug === 'meta-ads') defaultCategory = 'Meta Ads';
      else if (currentService.slug === 'google-business-profile') defaultCategory = 'Google Business Profile';

      setNewProject({
        name: '',
        client: '',
        industry: '',
        category: defaultCategory,
        services: currentService.name,
        overview: `Comprehensive ${currentService.name} project deployed to improve organic search authority and visibility.`,
        challenge: 'Low search discoverability and unoptimized structure requiring targeted optimization.',
        strategy: `Executed strategic ${currentService.name} roadmap focusing on high-impact ranking factors.`,
        implementation: 'Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring.',
        tools: currentService.toolsUsed.join(', '),
        resultsNote: 'Optimization delivered according to best-practice search engine guidelines.',
        date: `${new Date().getFullYear()}`,
        location: 'Palani, Tamil Nadu'
      });
    }
    setFormSuccess('');
    setAddModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name || !newProject.client) return;

    const slug = newProject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const serviceList = newProject.services.split(',').map(s => s.trim()).filter(Boolean);
    const toolsList = newProject.tools.split(',').map(t => t.trim()).filter(Boolean);
    const implementationList = newProject.implementation.split('\n').map(i => i.trim()).filter(Boolean);

    addProject({
      slug: slug || `project-${Date.now()}`,
      name: newProject.name,
      category: newProject.category,
      client: newProject.client,
      industry: newProject.industry || 'General Business',
      services: serviceList.length > 0 ? serviceList : [newProject.category],
      overview: newProject.overview,
      challenge: newProject.challenge,
      strategy: newProject.strategy,
      implementation: implementationList.length > 0 ? implementationList : [newProject.strategy],
      tools: toolsList.length > 0 ? toolsList : ['Google Search Console'],
      resultsNote: newProject.resultsNote,
      featured: true,
      status: 'published',
      date: newProject.date,
      location: newProject.location,
      seoTitle: (`${newProject.name} Case Study | ${newProject.category} | SURIYADEVAN S`).slice(0, 60),
      metaDescription: newProject.overview.slice(0, 160),
      focusKeyword: `${newProject.name} SEO`,
      secondaryKeywords: [newProject.category, 'SEO Case Study'],
      schemaType: 'CreativeWork',
      relatedServices: currentService ? [currentService.slug] : ['seo']
    });

    setFormSuccess(`"${newProject.name}" has been successfully added to this service!`);
    setTimeout(() => {
      setAddModalOpen(false);
      setFormSuccess('');
    }, 1200);
  };

  // ----------------------------------------------------
  // Render: Single Service Detail Page with its Projects
  // ----------------------------------------------------
  if (currentService) {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
    const serviceSchema = buildServiceSchema(currentService, origin);

    return (
      <div className="min-h-screen bg-slate-50/60 pb-20">
        <SEOHead
          title={currentService.seoTitle}
          description={currentService.metaDescription}
          canonical={`${origin}/services/${currentService.slug}`}
          schema={serviceSchema}
        />

        {/* Hero Banner with Creative Indigo Accents */}
        <div className="bg-white border-b border-slate-200/80 pt-6 pb-12 creative-grid-pattern">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Services', path: '/services' },
                { label: currentService.name }
              ]}
            />

            <div className="mt-4 space-y-4 max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/60 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{currentService.localFocus || 'Palani & Tamil Nadu Region'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
                {currentService.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {currentService.fullDescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    trackEvent('consultation_click', `Service: ${currentService.name}`);
                    navigateTo('/contact');
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow flex items-center space-x-2"
                >
                  <span>Request {currentService.name} Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={openAddProjectForCurrentService}
                  className="bg-white hover:bg-indigo-50 text-indigo-600 border border-indigo-200 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5"
                >
                  <PlusCircle className="w-4 h-4 text-indigo-600" />
                  <span>Add Project to this Service</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
          
          {/* Key Deliverables & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center space-x-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Who This Is For</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3 font-display">
                Ideal For Businesses Seeking Real Growth
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentService.targetAudience}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Deliverables</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3 font-display">
                What You Get With This Service
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {currentService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dedicated Social Media Portfolio (Instagram Posts & Reels) */}
          {currentService.slug === 'social-media-management' && (
            <SocialMediaPortfolio />
          )}

          {/* Dedicated Meta Ads Campaigns (Live Reports & Creatives) */}
          {(currentService.slug === 'meta-ads' || currentService.slug === 'meta-ads-management') && (
            <MetaAdsCampaigns />
          )}

          {/* ============================================================ */}
          {/* INTEGRATED SERVICE PROJECTS & CASE STUDIES (USER DIRECTIVE) */}
          {/* ============================================================ */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Real-World Client Execution</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Projects & Case Studies for {currentService.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Delivered projects specifically implementing {currentService.name} strategies.
                </p>
              </div>

              {isAdmin && (
                <button
                  onClick={openAddProjectForCurrentService}
                  className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-2xs self-start sm:self-auto"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>+ Add Project to {currentService.name}</span>
                </button>
              )}
            </div>

            {/* List of projects belonging to this service */}
            {currentServiceProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {currentServiceProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/90 hover:border-indigo-300 p-5 transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100/80 text-indigo-700 px-2.5 py-1 rounded-md">
                          {proj.category}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {proj.date}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                        {proj.name}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        Client: {proj.client} • {proj.industry}
                      </div>

                      <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                        {proj.overview}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-200/60">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Strategy & Execution:
                        </div>
                        <p className="text-xs text-slate-700 line-clamp-2">
                          {proj.strategy}
                        </p>
                      </div>

                      {proj.tools && proj.tools.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {proj.tools.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                              {t}
                            </span>
                          ))}
                          {proj.tools.length > 3 && (
                            <span className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">
                              +{proj.tools.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <div className="text-[11px] text-emerald-600 font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Deliverable</span>
                      </div>

                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Full Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 px-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 mx-auto flex items-center justify-center">
                  <FolderPlus className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  No projects recorded yet for {currentService.name}
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {isAdmin ? 'You can add new client case studies or projects directly to this service page using the button below.' : 'Projects and case studies for this service will appear here once published.'}
                </p>
                {isAdmin && (
                  <button
                    onClick={openAddProjectForCurrentService}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold inline-flex items-center space-x-1.5 shadow-2xs"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Add First Project to {currentService.name}</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Process Methodology */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Methodology & Roadmap
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                How {currentService.name} Is Executed
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentService.processSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-50/80 p-5 rounded-xl border border-slate-200/80 space-y-2 relative overflow-hidden">
                  <span className="text-[10px] font-black text-indigo-600 bg-indigo-100/80 px-2 py-0.5 rounded">
                    Step 0{idx + 1}
                  </span>
                  <div className="text-xs font-bold text-slate-900">{step.title}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features & Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-4 font-display flex items-center space-x-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Scope & Feature Inclusions</span>
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {currentService.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900 mb-4 font-display flex items-center space-x-2">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                  <span>Tools & Verification Systems</span>
                </h2>
                <div className="flex flex-wrap gap-2 text-xs mb-6">
                  {currentService.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg font-medium text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-indigo-900 flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Geographic Focus</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  Targeted specifically for searches in <strong>Palani</strong>, <strong>Dindigul</strong>, <strong>Oddanchatram</strong>, <strong>Dharapuram</strong>, <strong>Udumalpet</strong>, <strong>Pollachi</strong>, <strong>Coimbatore</strong>, and across <strong>Tamil Nadu</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {currentService.faqs && currentService.faqs.length > 0 && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Frequently Asked Questions about {currentService.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentService.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                    <div className="font-bold text-xs text-slate-900 mb-1.5">{faq.question}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Conversion Section */}
          <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-2xl text-center space-y-4 shadow-md creative-dark-grid">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/60">
              Direct Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to grow your search visibility with {currentService.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
              Get in touch directly with SURIYADEVAN for a thorough inspection of your website, search indexing, and organic opportunity roadmap.
            </p>
            <div className="pt-2 flex justify-center items-center gap-3">
              <button
                onClick={() => {
                  trackEvent('consultation_click', `Bottom CTA ${currentService.name}`);
                  navigateTo('/contact');
                }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5"
              >
                <span>Get Free SEO Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MODAL: ADD PROJECT TO THIS SERVICE */}
        {/* ============================================================ */}
        {addModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Add Project to {currentService.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    This case study will be displayed on the {currentService.name} page.
                  </p>
                </div>
                <button
                  onClick={() => setAddModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSuccess ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Project Saved!</h4>
                  <p className="text-xs text-slate-600">{formSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleSaveProject} className="p-6 space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Project Name *</label>
                      <input
                        type="text"
                        required
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                        placeholder="e.g. Palani Heritage Hotel SEO"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Client Name *</label>
                      <input
                        type="text"
                        required
                        value={newProject.client}
                        onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                        placeholder="e.g. Hotel Grand Palani"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Industry</label>
                      <input
                        type="text"
                        value={newProject.industry}
                        onChange={(e) => setNewProject({ ...newProject, industry: e.target.value })}
                        placeholder="e.g. Hospitality & Tourism"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value as Project['category'] })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs bg-white"
                      >
                        <option value="SEO">SEO</option>
                        <option value="Local SEO">Local SEO</option>
                        <option value="Technical SEO">Technical SEO</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Google Business Profile">Google Business Profile</option>
                        <option value="WordPress">WordPress</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Project Overview</label>
                    <textarea
                      rows={2}
                      value={newProject.overview}
                      onChange={(e) => setNewProject({ ...newProject, overview: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Client Challenge / Problem</label>
                    <textarea
                      rows={2}
                      value={newProject.challenge}
                      onChange={(e) => setNewProject({ ...newProject, challenge: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Strategy Implemented</label>
                    <textarea
                      rows={2}
                      value={newProject.strategy}
                      onChange={(e) => setNewProject({ ...newProject, strategy: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Implementation Tasks (one per line)</label>
                    <textarea
                      rows={3}
                      value={newProject.implementation}
                      onChange={(e) => setNewProject({ ...newProject, implementation: e.target.value })}
                      placeholder="Identified high-intent keywords&#10;Repaired broken canonical links&#10;Added schema markup"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Tools Used (comma separated)</label>
                      <input
                        type="text"
                        value={newProject.tools}
                        onChange={(e) => setNewProject({ ...newProject, tools: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Year / Date</label>
                      <input
                        type="text"
                        value={newProject.date}
                        onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-indigo-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setAddModalOpen(false)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-2xs"
                    >
                      Save Project to {currentService.name}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* MODAL: FULL CASE STUDY DEEP DIVE */}
        {/* ============================================================ */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200/60">
                      {selectedCaseStudy.category}
                    </span>
                    <span className="text-xs text-slate-400">• {selectedCaseStudy.industry}</span>
                    <span className="text-xs text-slate-400">• {selectedCaseStudy.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-display">
                    {selectedCaseStudy.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500">
                    Client: {selectedCaseStudy.client}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.overview}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 mb-1">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.challenge}</p>
                  </div>
                  <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-950 mb-1">Strategic Solution</h4>
                    <p className="text-slate-700 leading-relaxed">{selectedCaseStudy.strategy}</p>
                  </div>
                </div>

                {selectedCaseStudy.implementation && selectedCaseStudy.implementation.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">Implementation Roadmap</h4>
                    <ul className="space-y-2">
                      {selectedCaseStudy.implementation.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCaseStudy.tools && selectedCaseStudy.tools.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Tools & Analytics Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.tools.map((tool, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-[11px] font-semibold text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                  <div className="font-bold text-indigo-300 text-xs">Performance Note & Delivery</div>
                  <p className="text-slate-300 text-[11px]">{selectedCaseStudy.resultsNote}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                {isAdmin ? (
                  <button
                    onClick={() => {
                      deleteProject(selectedCaseStudy.id);
                      setSelectedCaseStudy(null);
                    }}
                    className="text-red-500 hover:text-red-700 text-xs font-semibold flex items-center space-x-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Project</span>
                  </button>
                ) : <div />}

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------
  // Render: All Services Overview & Project Showcase
  // ----------------------------------------------------
  const allServicesList = [
    'SEO Services',
    'Local SEO Services',
    'Technical SEO',
    'On-Page SEO',
    'Off-Page SEO',
    'Keyword Research',
    'Content Optimization',
    'WordPress SEO',
    'Social Media Management',
    'Social Media Poster Design',
    'Social Media Reels Strategy',
    'Meta Ads',
    'Google Business Profile Optimization',
    'Online Reputation Management',
    'Google Analytics / GA4',
    'Google Search Console',
    'Google Tag Manager',
    'Microsoft Clarity',
    'Website SEO Audits'
  ];

  // Filter projects for the interactive showcase
  const filteredProjects = projects.filter(p => {
    const matchesCat = categoryFilter === 'All' || p.category === categoryFilter;
    const matchesQuery = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
  const servicesDirectorySchema = useMemo(() => {
    return buildCollectionSchema(
      'SEO & Digital Marketing Services',
      'Comprehensive search engine optimization, local SEO, technical audits, social media marketing, and Meta ad management services in Palani by SURIYADEVAN S.',
      '/services',
      services.map(s => ({
        name: s.name,
        url: `/services/${s.slug}`,
        description: s.shortDescription
      })),
      origin
    );
  }, [services, origin]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      <SEOHead
        title="SEO & Digital Marketing Services Palani | SURIYADEVAN S"
        description="Result-driven SEO, Local SEO, Technical SEO, Meta Ads & Social Media Management services in Palani by SURIYADEVAN S. Grow organic traffic & local leads."
        canonical={`${origin}/services`}
        schema={servicesDirectorySchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Header Banner */}
        <div className="mt-4 pb-10 border-b border-slate-200 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            <span>Palani & Tamil Nadu Coverage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            SEO & Digital Marketing Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Data-backed organic search optimization, local Google Business Profile positioning, technical performance enhancements, and social campaigns tied directly to verified real-world projects.
          </p>
        </div>

        {/* Dedicated Core Services Grid with Linked Projects */}
        <div className="py-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Primary Service Specializations
              </h2>
              <p className="text-xs text-slate-500">
                Click any service to view full details and its specific real-world client projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((serv) => {
              const matchedProjects = projects.filter(p => isProjectMatchingService(p, serv.slug));

              return (
                <div
                  key={serv.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between hover:border-indigo-400 transition-all hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
                        {serv.localFocus || 'Palani Focus'}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {matchedProjects.length} {matchedProjects.length === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-display">
                      {serv.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {serv.shortDescription}
                    </p>

                    {/* Show linked project names right on the service card */}
                    {matchedProjects.length > 0 && (
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-indigo-500" />
                          <span>Delivered Projects in this Service:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {matchedProjects.map(p => (
                            <span key={p.id} className="text-[11px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-800">
                              {p.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 space-y-1.5">
                      {serv.keyFeatures.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => {
                        trackEvent('service_view', serv.name);
                        navigateTo(`/services/${serv.slug}`);
                      }}
                      className="w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
                    >
                      <span>Explore Service & Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE SHOWCASE OF PROJECTS GROUPED BY SERVICE */}
        {/* ============================================================ */}
        <div className="py-12 border-t border-slate-200">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                  Case Studies & Work Portfolio
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Client Projects Delivered by Service Category
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Browse real-world client projects categorized under their specific service delivery domains.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {['All', 'SEO', 'Local SEO', 'Technical SEO', 'Social Media', 'Meta Ads'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      categoryFilter === cat
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-indigo-300 transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {project.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {project.name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Client: {project.client}
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200/60">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Services Involved:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((s, idx) => (
                          <span key={idx} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => {
                        // Find matching service slug and navigate to it
                        const matchingSlug = project.relatedServices?.[0] || 'seo';
                        navigateTo(`/services/${matchingSlug}`);
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-indigo-600 flex items-center space-x-1"
                    >
                      <span>Go to Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Creatives & Reels Showcase */}
        <div className="py-8 border-t border-slate-200/80">
          <SocialMediaPortfolio />
        </div>

        {/* Meta Ads Campaign Reports & Performance Analytics */}
        <div className="py-8 border-t border-slate-200/80">
          <MetaAdsCampaigns />
        </div>

        {/* 19 Service Capabilities Grid */}
        <div className="py-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              Complete Digital Marketing & SEO Capabilities
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Every deliverable is verified using industry standard suites including SEMrush, Google Search Console, GA4, GTM, and Microsoft Clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {allServicesList.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-slate-700 font-semibold flex items-center space-x-2.5 shadow-2xs hover:border-indigo-300 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 p-8 sm:p-10 bg-indigo-50 border border-indigo-100 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Need an objective SEO review of your business website?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Schedule a complimentary preliminary review. I'll inspect your Google indexing, search console diagnostics, and local rankings in Palani and Tamil Nadu.
          </p>
          <button
            onClick={() => {
              trackEvent('consultation_click', 'Services Page Bottom');
              navigateTo('/contact');
            }}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all inline-flex items-center space-x-1.5 shadow-sm"
          >
            <span>Get a Free Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Case Study Modal for All-Services View */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200/60">
                    {selectedCaseStudy.category}
                  </span>
                  <span className="text-xs text-slate-400">• {selectedCaseStudy.industry}</span>
                  <span className="text-xs text-slate-400">• {selectedCaseStudy.date}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">
                  {selectedCaseStudy.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500">
                  Client: {selectedCaseStudy.client}
                </div>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Project Overview</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.overview}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 mb-1">The Challenge</h4>
                  <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>
                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-950 mb-1">Strategic Solution</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCaseStudy.strategy}</p>
                </div>
              </div>

              {selectedCaseStudy.implementation && selectedCaseStudy.implementation.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">Implementation Roadmap</h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.implementation.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedCaseStudy.tools && selectedCaseStudy.tools.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 text-sm">Tools & Analytics Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCaseStudy.tools.map((tool, idx) => (
                      <span key={idx} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-[11px] font-semibold text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1">
                <div className="font-bold text-indigo-300 text-xs">Performance Note & Delivery</div>
                <p className="text-slate-300 text-[11px]">{selectedCaseStudy.resultsNote}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end items-center">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
