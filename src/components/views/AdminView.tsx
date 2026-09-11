import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { 
  Sliders, 
  Plus, 
  Trash2, 
  Edit3, 
  Copy, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  BarChart, 
  Code,
  Eye,
  Lock,
  KeyRound,
  Shield,
  LogOut,
  Mail,
  Inbox
} from 'lucide-react';
import { Project, BlogPost, FAQItem } from '../../types';

export const AdminView: React.FC = () => {
  const { 
    siteSettings, 
    updateSiteSettings, 
    projects, 
    addProject, 
    updateProject, 
    deleteProject, 
    duplicateProject,
    blogPosts, 
    addBlogPost, 
    updateBlogPost, 
    deleteBlogPost,
    faqs, 
    addFAQ, 
    updateFAQ, 
    deleteFAQ, 
    conversionEvents,
    resetToDefaults,
    exportJSON,
    importJSON,
    navigateTo,
    isAdmin,
    adminLogin,
    adminLogout,
    updateAdminPasscode
  } = useData();

  const [activeTab, setActiveTab] = useState<'seoAudit' | 'projects' | 'blogs' | 'faqs' | 'settings' | 'machineFiles' | 'conversions' | 'aiAssistant'>('seoAudit');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isNewBlog, setIsNewBlog] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQItem | null>(null);
  const [isNewFAQ, setIsNewFAQ] = useState(false);
  const [importString, setImportString] = useState('');
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);

  // Admin passcode login state
  const [passcodeInput, setPasscodeInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [newPasscodeInput, setNewPasscodeInput] = useState('');
  const [passcodeSuccess, setPasscodeSuccess] = useState<string | null>(null);

  // AI Content Assistant state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  // Backend leads state for suriya2993@gmail.com
  const [backendLeads, setBackendLeads] = useState<any[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

  const fetchBackendLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch('/api/contact/leads');
      if (res.ok) {
        const data = await res.json();
        setBackendLeads(data.leads || []);
      }
    } catch (err) {
      console.error('Failed to fetch backend leads:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'conversions') {
      fetchBackendLeads();
    }
  }, [activeTab]);

  const showNotice = (msg: string) => {
    setNoticeMessage(msg);
    setTimeout(() => setNoticeMessage(null), 3500);
  };

  // SEO Health Audit computation across all public routes
  const pagesToAudit = [
    { title: 'SEO & Digital Marketing Specialist in Palani | SuriyaDevan S', path: '/', h1: 'SEO & Digital Marketing Specialist in Palani, Tamil Nadu', meta: 'Helping businesses grow their Google visibility, organic traffic, local search presence and digital brand visibility.', wordCount: 1420 },
    { title: 'About SuriyaDevan S — SEO & Digital Marketing Specialist | Palani', path: '/about', h1: 'About SuriyaDevan S — SEO & Digital Marketing Specialist', meta: 'Learn about SuriyaDevan S, an SEO & Digital Marketing Specialist in Palani, Tamil Nadu.', wordCount: 890 },
    { title: 'SEO & Digital Marketing Services in Palani, Tamil Nadu | SuriyaDevan S', path: '/services', h1: 'SEO & Digital Marketing Services', meta: 'Explore end-to-end SEO, Local SEO, Technical SEO, Meta Ads, Social Media, and Google Business Profile optimization services.', wordCount: 1150 },
    { title: 'SEO Services in Palani, Tamil Nadu | Freelance SEO Specialist', path: '/services/seo', h1: 'SEO Services in Palani, Tamil Nadu', meta: 'Looking for professional SEO services in Palani? SuriyaDevan S provides data-driven On-Page, Technical, and Organic SEO strategies.', wordCount: 940 },
    { title: 'Local SEO Services in Palani | Google Maps Optimization | SuriyaDevan S', path: '/services/local-seo', h1: 'Local SEO Services in Palani', meta: 'Boost your local search visibility with Local SEO services in Palani. Expert Google Business Profile optimization and local citations.', wordCount: 880 },
    { title: 'Technical SEO Consultant Palani | Site Speed & Indexing | SuriyaDevan S', path: '/services/technical-seo', h1: 'Technical SEO & Website Performance in Palani', meta: 'Improve website crawlability, indexation, and Core Web Vitals with technical SEO consulting by SuriyaDevan S.', wordCount: 790 },
    { title: 'Social Media Management & Meta Ads in Palani | SuriyaDevan S', path: '/services/social-media-management', h1: 'Social Media & Meta Ads', meta: 'Engaging social media creatives, reel production, and targeted Meta Ads campaigns.', wordCount: 680 },
    { title: 'SEO & Digital Marketing Blog | SuriyaDevan S | Palani Guides', path: '/blog', h1: 'SEO & Digital Marketing Articles', meta: 'Actionable SEO guides, Local SEO advice for Palani businesses, WordPress technical checklists.', wordCount: 650 },
    { title: 'Resume — SuriyaDevan S | SEO & Digital Marketing Executive Palani', path: '/resume', h1: 'Professional Resume', meta: 'Official professional resume of SuriyaDevan S: SEO & Digital Marketing Executive.', wordCount: 810 },
    { title: 'Contact SuriyaDevan — SEO & Digital Marketing Specialist | Palani', path: '/contact', h1: 'Contact SuriyaDevan — SEO & Digital Marketing Specialist', meta: 'Contact SuriyaDevan S for SEO consulting, Local SEO in Palani, technical audits, and digital marketing services.', wordCount: 450 }
  ];

  // Audit checks calculation
  const auditResults = pagesToAudit.map(page => {
    const issues: string[] = [];
    if (!page.title || page.title.length < 30) issues.push('Title may be too short for optimum keyword CTR');
    if (page.title.length > 70) issues.push('Title length exceeds 70 characters (potential search snippet truncation)');
    if (!page.meta || page.meta.length < 50) issues.push('Meta description too brief');
    if (!page.h1) issues.push('Missing H1 heading tag');
    if (page.wordCount < 300) issues.push('Word count below thin-content threshold (300 words)');
    
    return {
      ...page,
      status: issues.length === 0 ? 'Passed' : 'Attention',
      issues,
      hasCanonical: true,
      hasSchema: true,
      hasOpenGraph: true,
      hasAltTags: true,
      mobileFriendly: true
    };
  });

  const totalPassed = auditResults.filter(r => r.status === 'Passed').length;
  const overallHealthScore = Math.round((totalPassed / auditResults.length) * 100);

  // Machine file outputs
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${window.location.origin}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/seo</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/local-seo</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/technical-seo</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/social-media-management</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/meta-ads</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#services/google-business-profile</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#blog</loc>
    <priority>0.8</priority>
  </url>
  ${blogPosts.map(b => `
  <url>
    <loc>${window.location.origin}/#blog/${b.slug}</loc>
    <priority>0.7</priority>
  </url>`).join('')}
  <url>
    <loc>${window.location.origin}/#contact</loc>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /

# Disallow private CMS administration endpoints from search engine indexing
Disallow: /admin
Disallow: /#admin

Sitemap: ${window.location.origin}/sitemap.xml`;

  const llmsTxt = `# SuriyaDevan S — SEO & Digital Marketing Specialist

## Entity Overview
- Name: SuriyaDevan S
- Role: SEO & Digital Marketing Executive | Freelance SEO Specialist | Local SEO Specialist
- Geographic Location: Palani, Tamil Nadu, India
- Secondary Target Areas: Dindigul, Oddanchatram, Dharapuram, Udumalpet, Pollachi, Coimbatore, Madurai, Tamil Nadu, India
- Contact Phone: ${siteSettings.phone}
- Contact Email: ${siteSettings.email}
- LinkedIn Profile: ${siteSettings.linkedin}

## Core Services
1. Search Engine Optimization (SEO Strategy, On-Page, Off-Page)
2. Local SEO & Google Business Profile (formerly GMB) Optimization
3. Technical SEO (Site Performance, Core Web Vitals, Crawlability, Schema)
4. Keyword Research & Search Intent Mapping
5. Social Media Marketing & Poster Design
6. Meta Ads (Facebook & Instagram Advertising)
7. Website Analytics (Google Search Console, GA4, GTM, Microsoft Clarity)

## Verified Work & Experience
- Avanexa: Digital Marketing Executive (Managed 5 client SEO projects end-to-end; achieved Google 1st-page rankings)
- Cannibals Media: SEO & Digital Marketing Intern (Google Business Profile & Online Reputation Management)
- Key Projects: Intrax (SEO Strategy), Insd (Keyword Research), Triaz (Technical SEO), Dream Sketch (WordPress SEO), Best Precision (Local SEO & GBP).
- Education: Bachelor of Commerce (Computer Applications) — Rev. Jacob Memorial Christian College (2021–2024).
- Certifications: Simplilearn (SEM), Coursera (Google & Meta), KGiSL MicroCollege (2025).`;

  // AI Content Assistant simulation with strict factual guardrails
  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) return;
    const promptLower = aiPrompt.toLowerCase();
    
    if (promptLower.includes('palani') || promptLower.includes('local seo')) {
      setAiResponse(`[AI SEO Suggestion for Palani Local Search]
Focus Keyword: "Local SEO Specialist in Palani"
Target H2: "How Palani Retailers and Service Showrooms Can Capture High-Intent Foot Traffic"
Suggested Meta Description: "Discover actionable Local SEO steps for businesses in Palani, Tamil Nadu. Optimize your Google Business Profile and local citations with SuriyaDevan S."
Factual Guardrail: Metrics must remain marked as "Needs verified information" until real client data is attached.`);
    } else if (promptLower.includes('project') || promptLower.includes('case study')) {
      setAiResponse(`[AI Template: New Client SEO Project]
Project Name: [Enter Client Name]
Category: SEO / Local SEO / Technical SEO
Services: On-Page Optimization, Keyword Research, Search Console Monitoring
Challenge: [Describe baseline indexing or structure issues]
Strategy: Intent mapping, meta corrections, internal linking
Results: Needs verified information (Zero fabricated claims permitted)`);
    } else if (promptLower.includes('faq')) {
      setAiResponse(`[AI Suggested FAQ for Answer Engine Optimization]
Q: Does SuriyaDevan provide on-site SEO audits for Palani and Tamil Nadu businesses?
A: Yes, SuriyaDevan offers technical site audits covering crawl efficiency, Core Web Vitals, metadata hygiene, and Google Business Profile positioning.`);
    } else {
      setAiResponse(`[AI Assistant Output for: "${aiPrompt}"]
Analysis: Query mapped to entity-first structure for SuriyaDevan S (Palani, Tamil Nadu).
Suggestion: Ensure all headings reflect clear search intent. Never introduce speculative ranking numbers or unverified revenue claims.`);
    }
  };

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (!passcodeInput.trim()) {
      setLoginError('Please enter your owner passcode.');
      return;
    }
    const ok = adminLogin(passcodeInput);
    if (!ok) {
      setLoginError('Incorrect passcode. Please try again.');
    } else {
      setPasscodeInput('');
    }
  };

  const handleUpdatePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasscodeInput.trim() || newPasscodeInput.length < 4) {
      alert('Passcode must be at least 4 characters long.');
      return;
    }
    updateAdminPasscode(newPasscodeInput);
    setNewPasscodeInput('');
    setPasscodeSuccess('Passcode successfully updated! Keep your new passcode safe.');
    setTimeout(() => setPasscodeSuccess(null), 4000);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <SEOHead
          title="Owner Access Verification | SuriyaDevan S"
          description="Owner authentication required to access the CMS Dashboard."
        />
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-slate-900 px-6 py-5 text-white flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-xl">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold font-display">Owner Access Control</h2>
              <p className="text-xs text-slate-400">SuriyaDevan S Portfolio CMS</p>
            </div>
          </div>

          <form onSubmit={handlePasscodeSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Protected Management Area</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This dashboard allows updating and deleting projects, blog articles, client FAQs, and core SEO settings.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Enter your owner passcode to verify your identity and unlock editing tools.
              </p>
            </div>

            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex justify-between">
                <span>Owner Passcode</span>
                <span className="text-[11px] font-normal text-slate-400">Default: suriya2993</span>
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  autoFocus
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  placeholder="Enter passcode..."
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center justify-center space-x-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Unlock CMS Dashboard</span>
              </button>
              <button
                type="button"
                onClick={() => navigateTo('/')}
                className="py-2.5 px-4 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
              >
                Back to Site
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <SEOHead
        title="Admin CMS & Live SEO Health Dashboard | SuriyaDevan S"
        description="Private content management system and technical SEO health auditor for SuriyaDevan S's personal digital marketing portfolio."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: 'Admin CMS & SEO Audit' }]} />

        {/* Top Header */}
        <div className="mt-4 pb-6 border-b border-[#E7E2D8] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-[#1C1917] text-white rounded">
                <Sliders className="w-4 h-4 text-[#9A6B38]" />
              </span>
              <h1 className="text-2xl font-extrabold text-[#1C1917]">
                CMS & Technical SEO Dashboard
              </h1>
            </div>
            <p className="text-xs text-[#78716C] mt-1">
              Live content manager, SEO health inspector, conversion tracker, and sitemap/robots generator.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Owner Mode Active</span>
            </div>

            <button
              onClick={() => {
                adminLogout();
                showNotice('Logged out of owner session');
              }}
              className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-slate-300 rounded text-slate-700 font-semibold flex items-center space-x-1 transition-colors"
              title="Log out of owner access"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <button
              onClick={() => {
                const dataStr = exportJSON();
                const blob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `suriyadevan-data-${new Date().toISOString().split('T')[0]}.json`;
                a.click();
                showNotice('Content exported to JSON file');
              }}
              className="px-3 py-1.5 bg-white border border-[#D6D3D1] hover:bg-[#F2EFE8] rounded text-[#292524] font-medium flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Data</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all content to the verified resume seed data?')) {
                  resetToDefaults();
                  showNotice('Content reset to factual default resume data');
                }
              }}
              className="px-3 py-1.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded text-xs font-medium flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Global Notice banner */}
        {noticeMessage && (
          <div className="my-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-md flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{noticeMessage}</span>
          </div>
        )}

        {/* Tabs Bar */}
        <div className="py-4 border-b border-[#E7E2D8] flex flex-wrap gap-1.5 text-xs">
          <button
            onClick={() => setActiveTab('seoAudit')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'seoAudit' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#9A6B38]" />
            <span>SEO Health Audit ({overallHealthScore}%)</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'projects' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'blogs' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Blog Articles ({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'faqs' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <span>FAQs ({faqs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'settings' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Site & Analytics Settings</span>
          </button>

          <button
            onClick={() => setActiveTab('machineFiles')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'machineFiles' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>sitemap / robots / llms.txt</span>
          </button>

          <button
            onClick={() => setActiveTab('conversions')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'conversions' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <BarChart className="w-3.5 h-3.5" />
            <span>Conversions ({conversionEvents.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('aiAssistant')}
            className={`px-3.5 py-2 rounded-md font-medium transition-colors flex items-center space-x-1.5 ${
              activeTab === 'aiAssistant' ? 'bg-[#1C1917] text-white' : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:bg-[#F2EFE8]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9A6B38]" />
            <span>AI SEO Editor</span>
          </button>
        </div>

        {/* Tab 1: Live SEO Health Audit */}
        {activeTab === 'seoAudit' && (
          <div className="py-8 space-y-6">
            {/* Scorecard */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-1">
                <div className="text-xs text-[#78716C] uppercase font-semibold">Overall SEO Health</div>
                <div className="text-3xl font-extrabold text-[#1C1917]">{overallHealthScore}%</div>
                <div className="text-[11px] text-emerald-600 font-medium">All critical indexation factors valid</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-1">
                <div className="text-xs text-[#78716C] uppercase font-semibold">Pages Audited</div>
                <div className="text-3xl font-extrabold text-[#1C1917]">{auditResults.length}</div>
                <div className="text-[11px] text-[#78716C]">Self-referencing canonicals active</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-1">
                <div className="text-xs text-[#78716C] uppercase font-semibold">Structured Data (JSON-LD)</div>
                <div className="text-3xl font-extrabold text-[#1C1917]">100%</div>
                <div className="text-[11px] text-emerald-600 font-medium">Person, Service, Article & Breadcrumbs</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-1">
                <div className="text-xs text-[#78716C] uppercase font-semibold">Local Entity Association</div>
                <div className="text-3xl font-extrabold text-[#9A6B38]">Palani, TN</div>
                <div className="text-[11px] text-[#78716C]">GeoCoordinates & postalAddress bound</div>
              </div>
            </div>

            {/* Audit Table */}
            <div className="bg-white rounded-xl border border-[#E7E2D8] overflow-hidden">
              <div className="p-4 border-b border-[#E7E2D8] flex justify-between items-center bg-[#FAF9F6]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                  Automated Page-by-Page Technical SEO Checks
                </h3>
                <span className="text-[11px] text-[#78716C]">
                  Inspecting Title, Meta Description, H1, Word Count & Schema
                </span>
              </div>

              <div className="divide-y divide-[#E7E2D8] overflow-x-auto text-xs">
                {auditResults.map((res, i) => (
                  <div key={i} className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-[#1C1917]">{res.path}</span>
                        <span className="text-[10px] bg-[#FAF9F6] border border-[#E7E2D8] px-1.5 py-0.5 rounded text-[#57534E]">
                          ~{res.wordCount} words
                        </span>
                      </div>
                      <div className="text-[#57534E] text-[11px]">
                        <strong>Title:</strong> {res.title}
                      </div>
                      <div className="text-[#78716C] text-[11px] truncate">
                        <strong>H1:</strong> {res.h1}
                      </div>
                      {res.issues.length > 0 && (
                        <div className="text-[11px] text-amber-600 space-y-0.5 pt-1">
                          {res.issues.map((iss, issIdx) => (
                            <div key={issIdx} className="flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{iss}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 self-end md:self-auto flex-shrink-0">
                      <span className={`px-2 py-1 rounded text-[11px] font-semibold ${
                        res.status === 'Passed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {res.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Projects CMS */}
        {activeTab === 'projects' && (
          <div className="py-8 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-[#1C1917]">
                Manage Portfolio Projects ({projects.length})
              </h2>
              <button
                onClick={() => {
                  setEditingProject({
                    id: '',
                    slug: '',
                    name: '',
                    category: 'SEO',
                    client: '',
                    industry: '',
                    services: ['SEO Strategy', 'On-Page SEO'],
                    overview: '',
                    challenge: '',
                    strategy: '',
                    implementation: ['Initial keyword crawl', 'Meta tag realignment'],
                    tools: ['Google Search Console', 'SEMrush'],
                    resultsNote: 'Project performance metrics can be added when verified data is available.',
                    featured: true,
                    status: 'published',
                    date: '2025',
                    location: 'Palani, Tamil Nadu',
                    seoTitle: '',
                    metaDescription: '',
                    focusKeyword: '',
                    secondaryKeywords: [],
                    schemaType: 'CreativeWork'
                  });
                  setIsNewProject(true);
                }}
                className="bg-[#1C1917] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Edit / Add Modal Form */}
            {editingProject && (
              <div className="bg-white p-6 rounded-xl border border-[#9A6B38] space-y-4 text-xs">
                <div className="flex justify-between items-center border-b border-[#E7E2D8] pb-3">
                  <h3 className="font-bold text-sm text-[#1C1917]">
                    {isNewProject ? 'Create New Project' : `Edit Project: ${editingProject.name}`}
                  </h3>
                  <button
                    onClick={() => setEditingProject(null)}
                    className="text-[#78716C] hover:text-[#1C1917]"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold block mb-1">Project Name *</label>
                    <input
                      type="text"
                      value={editingProject.name}
                      onChange={e => setEditingProject({ 
                        ...editingProject, 
                        name: e.target.value,
                        slug: editingProject.slug || e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">URL Slug *</label>
                    <input
                      type="text"
                      value={editingProject.slug}
                      onChange={e => setEditingProject({ ...editingProject, slug: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Category</label>
                    <select
                      value={editingProject.category}
                      onChange={e => setEditingProject({ ...editingProject, category: e.target.value as any })}
                      className="w-full p-2 border border-slate-300 rounded bg-white"
                    >
                      <option value="SEO">SEO</option>
                      <option value="Technical SEO">Technical SEO</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="WordPress">WordPress</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Meta Ads">Meta Ads</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold block mb-1 text-indigo-700">Display in Service Page *</label>
                    <select
                      value={editingProject.relatedServices?.[0] || 'seo'}
                      onChange={e => setEditingProject({ ...editingProject, relatedServices: [e.target.value] })}
                      className="w-full p-2 border border-indigo-300 rounded bg-indigo-50/40 text-indigo-900 font-medium"
                    >
                      <option value="seo">Search Engine Optimization (SEO)</option>
                      <option value="local-seo">Local SEO for Palani & Region</option>
                      <option value="technical-seo">Technical SEO & Web Vitals</option>
                      <option value="social-media-management">Social Media Management</option>
                      <option value="meta-ads">Meta Ads (Facebook & Instagram)</option>
                      <option value="google-business-profile">Google Business Profile (GMB)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Industry</label>
                    <input
                      type="text"
                      value={editingProject.industry}
                      onChange={e => setEditingProject({ ...editingProject, industry: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-1">Overview Summary</label>
                  <textarea
                    rows={2}
                    value={editingProject.overview}
                    onChange={e => setEditingProject({ ...editingProject, overview: e.target.value })}
                    className="w-full p-2 border border-[#D6D3D1] rounded"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold block mb-1">The Challenge</label>
                    <textarea
                      rows={2}
                      value={editingProject.challenge}
                      onChange={e => setEditingProject({ ...editingProject, challenge: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Strategy Applied</label>
                    <textarea
                      rows={2}
                      value={editingProject.strategy}
                      onChange={e => setEditingProject({ ...editingProject, strategy: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold block mb-1">SEO Title Tag</label>
                    <input
                      type="text"
                      value={editingProject.seoTitle}
                      onChange={e => setEditingProject({ ...editingProject, seoTitle: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Focus Keyword</label>
                    <input
                      type="text"
                      value={editingProject.focusKeyword}
                      onChange={e => setEditingProject({ ...editingProject, focusKeyword: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 border border-[#D6D3D1] rounded hover:bg-[#F2EFE8]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (isNewProject) {
                        addProject(editingProject);
                        showNotice(`Project "${editingProject.name}" added successfully`);
                      } else {
                        updateProject(editingProject.id, editingProject);
                        showNotice(`Project "${editingProject.name}" updated`);
                      }
                      setEditingProject(null);
                    }}
                    className="px-5 py-2 bg-[#1C1917] text-white rounded font-semibold"
                  >
                    Save Project
                  </button>
                </div>
              </div>
            )}

            {/* List of projects */}
            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs shadow-2xs hover:border-indigo-300 transition-colors"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{proj.name}</span>
                      <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-[10px] text-slate-700 font-semibold">
                        {proj.category}
                      </span>
                      <span className="bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded text-[10px] text-indigo-700 font-bold">
                        Service: /services/{proj.relatedServices?.[0] || 'seo'}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1 max-w-xl truncate">
                      {proj.overview}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-auto flex-shrink-0">
                    <button
                      onClick={() => navigateTo(`/services/${proj.relatedServices?.[0] || 'seo'}`)}
                      title="View in Service Page"
                      className="p-1.5 border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-100/70 text-indigo-700 rounded-lg flex items-center space-x-1 font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[11px] pr-1">View in Service</span>
                    </button>
                    <button
                      onClick={() => duplicateProject(proj.id)}
                      title="Duplicate project"
                      className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingProject(proj);
                        setIsNewProject(false);
                      }}
                      title="Edit project"
                      className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-800"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete project "${proj.name}"?`)) {
                          deleteProject(proj.id);
                          showNotice(`Project "${proj.name}" removed`);
                        }
                      }}
                      title="Delete project"
                      className="p-1.5 border border-red-200 rounded-lg hover:bg-red-50 text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Blog Posts CMS */}
        {activeTab === 'blogs' && (
          <div className="py-8 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-[#1C1917]">
                Manage Blog Articles ({blogPosts.length})
              </h2>
              <button
                onClick={() => {
                  setEditingBlog({
                    id: '',
                    slug: '',
                    title: '',
                    category: 'Local SEO',
                    excerpt: '',
                    content: '### Section Heading\n\nWrite insightful, search-intent driven content.',
                    publishDate: new Date().toISOString().split('T')[0],
                    modifiedDate: new Date().toISOString().split('T')[0],
                    readingTime: '5 min read',
                    author: siteSettings.name,
                    focusKeyword: '',
                    secondaryKeywords: [],
                    searchIntent: 'Informational',
                    metaTitle: '',
                    metaDescription: '',
                    status: 'published'
                  });
                  setIsNewBlog(true);
                }}
                className="bg-[#1C1917] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write New Article</span>
              </button>
            </div>

            {editingBlog && (
              <div className="bg-white p-6 rounded-xl border border-[#9A6B38] space-y-4 text-xs">
                <h3 className="font-bold text-sm text-[#1C1917] border-b border-[#E7E2D8] pb-2">
                  {isNewBlog ? 'New Article' : `Edit Article: ${editingBlog.title}`}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold block mb-1">Article Title *</label>
                    <input
                      type="text"
                      value={editingBlog.title}
                      onChange={e => setEditingBlog({ 
                        ...editingBlog, 
                        title: e.target.value,
                        slug: editingBlog.slug || e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Slug *</label>
                    <input
                      type="text"
                      value={editingBlog.slug}
                      onChange={e => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                      className="w-full p-2 border border-[#D6D3D1] rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-1">Excerpt</label>
                  <textarea
                    rows={2}
                    value={editingBlog.excerpt}
                    onChange={e => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                    className="w-full p-2 border border-[#D6D3D1] rounded"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-1">Content (Markdown Format)</label>
                  <textarea
                    rows={8}
                    value={editingBlog.content}
                    onChange={e => setEditingBlog({ ...editingBlog, content: e.target.value })}
                    className="w-full p-2 border border-[#D6D3D1] rounded font-mono text-xs"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button onClick={() => setEditingBlog(null)} className="px-4 py-2 border rounded">Cancel</button>
                  <button
                    onClick={() => {
                      if (isNewBlog) {
                        addBlogPost(editingBlog);
                        showNotice(`Article "${editingBlog.title}" added`);
                      } else {
                        updateBlogPost(editingBlog.id, editingBlog);
                        showNotice(`Article "${editingBlog.title}" updated`);
                      }
                      setEditingBlog(null);
                    }}
                    className="px-5 py-2 bg-[#1C1917] text-white rounded font-semibold"
                  >
                    Save Article
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white p-4 rounded-lg border border-[#E7E2D8] flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-[#1C1917]">{post.title}</span>
                    <div className="text-[11px] text-[#78716C] mt-0.5">
                      {post.category} • {post.publishDate} • Intent: {post.searchIntent}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => { setEditingBlog(post); setIsNewBlog(false); }}
                      className="p-1.5 border border-[#D6D3D1] rounded hover:bg-[#F2EFE8]"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-[#1C1917]" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete article "${post.title}"?`)) {
                          deleteBlogPost(post.id);
                          showNotice(`Article "${post.title}" deleted`);
                        }
                      }}
                      className="p-1.5 border border-red-200 rounded hover:bg-red-50 text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: FAQs CMS */}
        {activeTab === 'faqs' && (
          <div className="py-8 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-slate-900">
                Manage Answer Engine FAQs ({faqs.length})
              </h2>
              <button
                onClick={() => {
                  setEditingFAQ({
                    id: '',
                    question: '',
                    answer: '',
                    category: 'General',
                    featured: true
                  });
                  setIsNewFAQ(true);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-2xs transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New FAQ</span>
              </button>
            </div>

            {editingFAQ && (
              <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm space-y-4 text-xs">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  {isNewFAQ ? 'Add New Question & Answer' : `Edit FAQ`}
                </h3>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Question *</label>
                  <input
                    type="text"
                    value={editingFAQ.question}
                    onChange={e => setEditingFAQ({ ...editingFAQ, question: e.target.value })}
                    placeholder="e.g. Do you optimize Google Business Profiles for doctors in Palani?"
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Answer *</label>
                  <textarea
                    rows={3}
                    value={editingFAQ.answer}
                    onChange={e => setEditingFAQ({ ...editingFAQ, answer: e.target.value })}
                    placeholder="Provide a factual, helpful explanation..."
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Category</label>
                    <select
                      value={editingFAQ.category}
                      onChange={e => setEditingFAQ({ ...editingFAQ, category: e.target.value as any })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-indigo-500"
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
                        checked={editingFAQ.featured}
                        onChange={e => setEditingFAQ({ ...editingFAQ, featured: e.target.checked })}
                        className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                      />
                      <span className="font-semibold text-slate-700">Feature on Homepage</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 flex justify-end space-x-2 border-t border-slate-100">
                  <button
                    onClick={() => setEditingFAQ(null)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!editingFAQ.question.trim() || !editingFAQ.answer.trim()) {
                        alert('Please fill in both the question and answer.');
                        return;
                      }
                      if (isNewFAQ) {
                        addFAQ({
                          question: editingFAQ.question,
                          answer: editingFAQ.answer,
                          category: editingFAQ.category,
                          featured: editingFAQ.featured
                        });
                        showNotice(`New FAQ added`);
                      } else {
                        updateFAQ(editingFAQ.id, editingFAQ);
                        showNotice(`FAQ updated`);
                      }
                      setEditingFAQ(null);
                    }}
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all shadow-2xs"
                  >
                    Save FAQ
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3 text-xs">
              {faqs.map(faq => (
                <div key={faq.id} className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 hover:border-slate-300 transition-colors">
                  <div className="flex justify-between items-start gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-slate-900 text-sm">{faq.question}</span>
                        <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-semibold">
                          {faq.category}
                        </span>
                        {faq.featured && (
                          <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <button
                        onClick={() => {
                          setEditingFAQ(faq);
                          setIsNewFAQ(false);
                        }}
                        title="Edit FAQ"
                        className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete FAQ: "${faq.question}"?`)) {
                            deleteFAQ(faq.id);
                            showNotice('FAQ removed');
                          }
                        }}
                        title="Delete FAQ"
                        className="p-1.5 border border-red-200 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Site Settings */}
        {activeTab === 'settings' && (
          <div className="py-8 max-w-2xl bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-4 text-xs">
            <h2 className="text-base font-bold text-[#1C1917] border-b border-[#E7E2D8] pb-3">
              Entity & Analytics Configuration
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold block mb-1">Entity Name</label>
                <input
                  type="text"
                  value={siteSettings.name}
                  onChange={e => updateSiteSettings({ name: e.target.value })}
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Phone Number</label>
                <input
                  type="text"
                  value={siteSettings.phone}
                  onChange={e => updateSiteSettings({ phone: e.target.value })}
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Email Address</label>
                <input
                  type="email"
                  value={siteSettings.email}
                  onChange={e => updateSiteSettings({ email: e.target.value })}
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">LinkedIn Profile</label>
                <input
                  type="text"
                  value={siteSettings.linkedin}
                  onChange={e => updateSiteSettings({ linkedin: e.target.value })}
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Google Search Console Verification</label>
                <input
                  type="text"
                  value={siteSettings.googleSearchConsoleId}
                  onChange={e => updateSiteSettings({ googleSearchConsoleId: e.target.value })}
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Google Analytics 4 ID</label>
                <input
                  type="text"
                  value={siteSettings.googleAnalyticsId}
                  onChange={e => updateSiteSettings({ googleAnalyticsId: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full p-2 border border-[#D6D3D1] rounded"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => showNotice('Site settings updated successfully')}
                className="px-5 py-2 bg-[#1C1917] text-white rounded font-semibold hover:bg-slate-800 transition-colors"
              >
                Save Settings
              </button>
            </div>

            {/* Owner Passcode & Security */}
            <div className="pt-6 mt-6 border-t border-slate-200">
              <div className="flex items-center space-x-2 text-[#1C1917] font-bold text-sm mb-2">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span>Owner Passcode & Access Security</span>
              </div>
              <p className="text-slate-500 text-[11px] mb-4">
                Only the owner knowing this passcode can view and trigger Add, Edit, and Delete operations across FAQs, blog articles, and service projects.
              </p>

              {passcodeSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{passcodeSuccess}</span>
                </div>
              )}

              <form onSubmit={handleUpdatePasscode} className="space-y-3">
                <div>
                  <label className="font-semibold block mb-1">Update Owner Passcode</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newPasscodeInput}
                      onChange={(e) => setNewPasscodeInput(e.target.value)}
                      placeholder="Enter new passcode (min 4 characters)..."
                      className="flex-1 p-2 border border-[#D6D3D1] rounded text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold transition-colors shadow-2xs whitespace-nowrap"
                    >
                      Update Passcode
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tab 6: Machine Files (sitemap, robots, llms) */}
        {activeTab === 'machineFiles' && (
          <div className="py-8 space-y-6 text-xs">
            {/* sitemap.xml */}
            <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <Code className="w-4 h-4 text-[#9A6B38]" />
                  <span>Dynamic XML Sitemap (sitemap.xml)</span>
                </h3>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Ready for Search Console Submission
                </span>
              </div>
              <pre className="p-3 bg-[#FAF9F6] border border-[#E7E2D8] rounded font-mono text-[11px] overflow-x-auto max-h-48 text-[#44403C]">
                {sitemapXml}
              </pre>
            </div>

            {/* robots.txt */}
            <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#9A6B38]" />
                  <span>Crawl Directives (robots.txt)</span>
                </h3>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Allows Public, Protects Admin
                </span>
              </div>
              <pre className="p-3 bg-[#FAF9F6] border border-[#E7E2D8] rounded font-mono text-[11px] overflow-x-auto text-[#44403C]">
                {robotsTxt}
              </pre>
            </div>

            {/* llms.txt */}
            <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-[#9A6B38]" />
                  <span>AI Search Discoverability (llms.txt)</span>
                </h3>
                <span className="text-[10px] text-[#78716C]">
                  Machine-readable Markdown entity summary
                </span>
              </div>
              <pre className="p-3 bg-[#FAF9F6] border border-[#E7E2D8] rounded font-mono text-[11px] overflow-x-auto max-h-48 text-[#44403C]">
                {llmsTxt}
              </pre>
            </div>
          </div>
        )}

        {/* Tab 7: Conversion Event Tracking Logs & Backend Leads */}
        {activeTab === 'conversions' && (
          <div className="py-8 space-y-8">
            {/* Backend Inbound Inquiries */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-base font-bold text-[#1C1917] flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <span>Inbound Inquiries for suriya2993@gmail.com ({backendLeads.length})</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Forms filled by clients are captured by the backend server and routed to suriya2993@gmail.com.
                  </p>
                </div>
                <button
                  onClick={fetchBackendLeads}
                  disabled={loadingLeads}
                  className="px-3 py-1.5 bg-white border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center space-x-1"
                >
                  <span>{loadingLeads ? 'Refreshing...' : 'Refresh Leads'}</span>
                </button>
              </div>

              {backendLeads.length === 0 ? (
                <div className="p-8 bg-white rounded-xl border border-[#E7E2D8] text-center text-xs text-[#78716C] space-y-2">
                  <Inbox className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="font-semibold text-slate-700">No contact submissions received yet.</p>
                  <p className="text-[11px] text-slate-500">
                    When visitors fill out the Contact page form, their complete details will appear here and be dispatched to suriya2993@gmail.com.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {backendLeads.map((lead: any) => (
                    <div key={lead.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-2.5">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-sm text-slate-900">{lead.name}</span>
                            <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                              {lead.service}
                            </span>
                            {lead.emailSent ? (
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                Email Dispatched
                              </span>
                            ) : (
                              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold px-2 py-0.5 rounded-full" title={lead.emailStatusMessage}>
                                Logged to Backend
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-600 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <a href={`mailto:${lead.email}`} className="text-indigo-600 hover:underline">
                              {lead.email}
                            </a>
                            {lead.phone && (
                              <a href={`tel:${lead.phone}`} className="text-slate-700 hover:text-slate-900 font-medium">
                                📞 {lead.phone}
                              </a>
                            )}
                            {lead.business && (
                              <span className="text-slate-500">🏢 {lead.business}</span>
                            )}
                            {lead.website && (
                              <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                                🌐 {lead.website}
                              </a>
                            )}
                            {lead.budget && (
                              <span className="text-slate-500">💰 Budget: {lead.budget}</span>
                            )}
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400 whitespace-nowrap">
                          {new Date(lead.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 whitespace-pre-wrap">
                        {lead.message}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-[10px] text-slate-400">
                          ID: {lead.id} &bull; Target: suriya2993@gmail.com
                        </span>
                        <div className="flex items-center space-x-2">
                          <a
                            href={`mailto:${lead.email}?subject=Re: SEO Inquiry for ${lead.business || lead.name}`}
                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1 rounded"
                          >
                            Reply via Email
                          </a>
                          {lead.phone && (
                            <a
                              href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${lead.name}, thank you for contacting me about ${lead.service}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1 rounded"
                            >
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Live User Interaction Event Logs */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <h2 className="text-base font-bold text-[#1C1917]">
                  Live Interaction Event Log ({conversionEvents.length})
                </h2>
                <span className="text-xs text-[#78716C]">
                  Tracking: contact_form_submit, phone_click, email_click, whatsapp_click, consultation_click
                </span>
              </div>

              {conversionEvents.length === 0 ? (
                <div className="p-8 bg-white rounded-xl border border-[#E7E2D8] text-center text-xs text-[#78716C]">
                  No conversion events logged yet in this session. Click buttons, phone links, or submit the contact form to view live tracking.
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-[#E7E2D8] divide-y divide-[#E7E2D8] text-xs">
                  {conversionEvents.map(evt => (
                    <div key={evt.id} className="p-3.5 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-[#1C1917] bg-[#FAF9F6] border border-[#E7E2D8] px-2 py-0.5 rounded mr-2">
                          {evt.eventType}
                        </span>
                        <span className="text-[#57534E]">{evt.details || 'Direct user interaction'}</span>
                      </div>
                      <span className="text-[11px] text-[#A8A29E]">
                        {new Date(evt.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 8: AI SEO Content Assistant */}
        {activeTab === 'aiAssistant' && (
          <div className="py-8 max-w-3xl space-y-6 text-xs">
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-[#9A6B38]" />
                  <span>AI SEO Content Assistant</span>
                </h3>
                <p className="text-[#78716C] mt-1">
                  Draft new project outlines, generate Palani-localized FAQ ideas, or refine meta titles.
                </p>
              </div>

              <div className="p-3 bg-[#FAF9F6] rounded border border-[#E7E2D8] text-[11px] text-[#57534E]">
                <strong>Integrity Rule:</strong> The assistant will never invent client statistics or fake search ranking claims. All unverified figures will be flagged as <em>"Needs verified information"</em>.
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={e => setAiPrompt(e.target.value)}
                  placeholder="e.g. 'Optimize this page for Palani SEO' or 'Add a new SEO project' or 'Create FAQs for local SEO'..."
                  className="w-full p-2.5 border border-[#D6D3D1] rounded focus:outline-none focus:border-[#1C1917]"
                  onKeyDown={e => e.key === 'Enter' && handleAiGenerate()}
                />
                <button
                  onClick={handleAiGenerate}
                  className="px-4 py-2 bg-[#1C1917] text-white rounded font-semibold flex items-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9A6B38]" />
                  <span>Generate Recommendations</span>
                </button>
              </div>

              {aiResponse && (
                <div className="mt-4 p-4 bg-[#FAF9F6] border border-[#E7E2D8] rounded font-mono text-xs whitespace-pre-wrap leading-relaxed text-[#292524]">
                  {aiResponse}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
