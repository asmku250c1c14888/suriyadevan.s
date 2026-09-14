import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { 
  Search, 
  MapPin, 
  UserCheck, 
  Briefcase, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Target,
  Building2,
  Languages,
  Zap
} from 'lucide-react';

interface SearchQueryCard {
  intent: 'Core Agency' | 'High-Intent Services' | 'Local Businesses & Shops' | 'Surrounding Towns' | 'Tamil Intent' | 'Brand & Bio';
  query: string;
  popularFormat: string;
  solution: string;
  targetKeyword: string;
  actionLabel: string;
  actionPath: string;
  badgeColor: string;
}

export const SearchIntentHub: React.FC = () => {
  const { navigateTo, trackEvent } = useData();
  const [activeTab, setActiveTab] = useState<string>('All');

  const searchQueries: SearchQueryCard[] = [
    // Core Agency Keywords
    {
      intent: 'Core Agency',
      query: 'Best digital marketing agency in Palani for business growth',
      popularFormat: '"digital marketing agency in Palani" / "digital marketing company in Palani"',
      solution: 'SURIYADEVAN S is the premier digital marketing agency and consultant in Palani. We deliver full-funnel digital marketing services, local search dominance, high-conversion Meta Ads, and ROI-focused digital advertising for small businesses, shops, and enterprises across Palani.',
      targetKeyword: 'digital marketing agency in Palani',
      actionLabel: 'Explore Agency Services',
      actionPath: '/services',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      intent: 'Core Agency',
      query: 'Digital marketing services near me in Palani & Dindigul',
      popularFormat: '"digital marketing services in Palani" / "digital marketing services near me"',
      solution: 'Looking for a reliable online marketing agency in Palani? Direct, hands-on execution covering organic Google SEO, Google Maps 3-pack, Instagram marketing, Google Ads PPC, and website development tailored for local Palani businesses.',
      targetKeyword: 'digital marketing services in Palani',
      actionLabel: 'Get Free Digital Consultation',
      actionPath: '/contact',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      intent: 'Core Agency',
      query: 'Digital marketing consultant & expert in Palani',
      popularFormat: '"digital marketing consultant Palani" / "digital marketing expert Palani"',
      solution: 'Direct 1-on-1 strategic consulting with SURIYADEVAN S. Avoid bloated agency markups and get tailored roadmap planning, competitor intelligence, and measurable customer acquisition frameworks.',
      targetKeyword: 'digital marketing consultant Palani',
      actionLabel: 'Meet Suriyadevan S',
      actionPath: '/about',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },

    // High-Intent Services
    {
      intent: 'High-Intent Services',
      query: 'Top SEO services and Google ranking service in Palani',
      popularFormat: '"SEO services in Palani" / "Google ranking service Palani" / "website SEO service Palani"',
      solution: 'Data-driven On-Page, Technical, and Semantic Entity SEO engineered to put your website on Page 1 of Google for high-converting commercial keywords with sustainable white-hat growth.',
      targetKeyword: 'SEO services in Palani',
      actionLabel: 'View SEO Services',
      actionPath: '/services/seo',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      intent: 'High-Intent Services',
      query: 'Google Maps SEO & Google Business Profile optimization Palani',
      popularFormat: '"Google Maps SEO Palani" / "Google Business Profile optimization Palani"',
      solution: 'Rank #1 on Google Maps and dominate the local 3-Pack. We optimize categories, geo-tagged photos, NAP citations, and review velocity so nearby mobile shoppers call your business first.',
      targetKeyword: 'Google Maps SEO Palani',
      actionLabel: 'Dominate Google Maps',
      actionPath: '/services/google-business-profile',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      intent: 'High-Intent Services',
      query: 'Instagram & Facebook advertising agency in Palani',
      popularFormat: '"Instagram marketing agency Palani" / "Facebook advertising agency Palani" / "Google Ads agency Palani"',
      solution: 'High-converting Meta Ads and Google Ads PPC campaigns driving instant buyer inquiries, Click-to-WhatsApp chats, and verified customer visits within 48 hours.',
      targetKeyword: 'social media marketing agency Palani',
      actionLabel: 'View Ads Campaigns',
      actionPath: '/services/meta-ads',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      intent: 'High-Intent Services',
      query: 'Website development company & ecommerce website development Palani',
      popularFormat: '"website development company Palani" / "ecommerce website development Palani"',
      solution: 'Ultra-fast, mobile-first responsive business websites, WhatsApp catalogs, and custom e-commerce stores designed for high conversion, Core Web Vitals, and native SEO indexing.',
      targetKeyword: 'website development company Palani',
      actionLabel: 'Build Your Website',
      actionPath: '/services',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },

    // Local Businesses & Shops
    {
      intent: 'Local Businesses & Shops',
      query: 'Affordable digital marketing for small business & shops in Palani',
      popularFormat: '"affordable digital marketing services Palani" / "digital marketing for shops Palani"',
      solution: 'Cost-effective growth retainers without agency overhead. Specially tailored packages for textile shops, furniture stores, restaurants, hotels, hospitals, and startups in Palani.',
      targetKeyword: 'affordable digital marketing services Palani',
      actionLabel: 'Check Affordable Packages',
      actionPath: '/contact',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      intent: 'Local Businesses & Shops',
      query: 'Digital marketing for textile shops, hotels & restaurants in Palani',
      popularFormat: '"digital marketing for textile shops Palani" / "digital marketing for hotels Palani"',
      solution: 'Targeted pilgrimage tourism campaigns for Adivaram hotels, festive fashion Reels for textile shops on Gandhi Road, and Google Maps review systems for restaurants and cafes.',
      targetKeyword: 'digital marketing for local businesses Palani',
      actionLabel: 'See Industry Playbooks',
      actionPath: '/services',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },

    // Surrounding Towns
    {
      intent: 'Surrounding Towns',
      query: 'Digital marketing agency near Palani, Oddanchatram & Dharapuram',
      popularFormat: '"digital marketing agency Oddanchatram" / "digital marketing agency Dharapuram"',
      solution: 'Serving commercial businesses, spinning mills, vegetable wholesale markets, and clinics across Oddanchatram, Dharapuram, Udumalpet, and Dindigul with regional SEO and lead generation.',
      targetKeyword: 'digital marketing agency near Palani',
      actionLabel: 'View Surrounding Towns Coverage',
      actionPath: '/contact',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },

    // Tamil Intent
    {
      intent: 'Tamil Intent',
      query: 'பழனி டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சி & கூகுள் ரேங்கிங் சேவை',
      popularFormat: '"digital marketing agency Palani Tamil" / "SEO service Palani" / "Palani digital marketing"',
      solution: 'உள்ளூர் வாடிக்கையாளர்கள் மற்றும் பழனி முருகன் கோவில் பக்தர்கள் உங்கள் கடையை கூகுளில் எளிதில் கண்டறிய தமிழ் & ஆங்கில SEO உத்திகள், கூகுள் மேப்ஸ் 3-பேக் ரேங்கிங் மற்றும் வாட்ஸ்அப் விளம்பரங்கள்.',
      targetKeyword: 'digital marketing agency Palani Tamil',
      actionLabel: 'தொடர்பு கொள்ள (WhatsApp)',
      actionPath: '/contact',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },

    // Brand & Bio
    {
      intent: 'Brand & Bio',
      query: 'Who is Suriyadevan S and what verified projects has he delivered?',
      popularFormat: '"Suriyadevan S" / "Suriyadevan Palani" / "Suriyadevan SEO"',
      solution: 'SURIYADEVAN S is a verified SEO Specialist & Digital Marketing Consultant based in Palani, Tamil Nadu. Having led SEO campaigns at Avanexa and Google Business Profiles at Cannibals Media, he drives verified Google 1st-page rankings.',
      targetKeyword: 'Suriyadevan S',
      actionLabel: 'View Verified Credentials',
      actionPath: '/about',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200'
    }
  ];

  const tabs = [
    'All', 
    'Core Agency', 
    'High-Intent Services', 
    'Local Businesses & Shops', 
    'Surrounding Towns', 
    'Tamil Intent', 
    'Brand & Bio'
  ];

  const filteredQueries = activeTab === 'All'
    ? searchQueries
    : searchQueries.filter(q => q.intent === activeTab);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3.5 py-1 rounded-full border border-indigo-800">
            <Search className="w-3.5 h-3.5 text-indigo-400" />
            <span>Search Intent & Keyword Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
            How People Search for Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Palani Digital Marketing Services</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Targeting commercial, transactional, and local search queries for "Digital Marketing Agency in Palani", SEO services, Google Maps 3-Pack, and industry-specific business growth.
          </p>
        </div>

        {/* Intent Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                trackEvent('search_intent_tab_click', tab);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400/40'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {tab === 'Core Agency' && <Briefcase className="w-3.5 h-3.5" />}
              {tab === 'High-Intent Services' && <Zap className="w-3.5 h-3.5" />}
              {tab === 'Local Businesses & Shops' && <Building2 className="w-3.5 h-3.5" />}
              {tab === 'Surrounding Towns' && <MapPin className="w-3.5 h-3.5" />}
              {tab === 'Tamil Intent' && <Languages className="w-3.5 h-3.5" />}
              {tab === 'Brand & Bio' && <UserCheck className="w-3.5 h-3.5" />}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Query Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredQueries.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-4 hover:border-indigo-500/60 transition-all hover:bg-slate-800/90 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.intent}
                  </span>
                  <span className="text-[11px] font-mono text-indigo-300/80">
                    Primary Keyword: {item.targetKeyword}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                    {item.query}
                  </h3>
                  <div className="text-[11px] text-slate-400 font-mono mt-1 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800 inline-block">
                    Search string: {item.popularFormat}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.solution}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <button
                  onClick={() => {
                    trackEvent('search_intent_action', item.query);
                    navigateTo(item.actionPath);
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors group"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] font-mono text-slate-400">Palani Rank Target</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top 15 Search Target Callout */}
        <div className="bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-indigo-400" />
            <span>Top 15 High-Priority Target Search Terms in Palani</span>
          </div>

          <p className="text-xs text-slate-300">
            Our content and schema architecture are directly optimized to rank your local business for these 15 primary commercial queries:
          </p>

          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            {[
              'Digital Marketing Agency in Palani',
              'Digital Marketing Company in Palani',
              'Digital Marketing Services in Palani',
              'SEO Services in Palani',
              'Local SEO Services Palani',
              'Google Maps SEO Palani',
              'Google Business Profile Optimization Palani',
              'Google Ads Agency Palani',
              'Social Media Marketing Agency Palani',
              'Instagram Marketing Agency Palani',
              'Website Development Company Palani',
              'Digital Marketing for Small Businesses Palani',
              'Affordable Digital Marketing Services Palani',
              'Digital Marketing Consultant Palani',
              'Digital Marketing Services Near Me'
            ].map((kw, i) => (
              <span key={i} className="bg-slate-800/90 border border-indigo-500/30 px-3 py-1 rounded-lg text-slate-200 font-mono text-[11px] flex items-center space-x-1.5">
                <span className="text-indigo-400 font-bold">#{i + 1}</span>
                <span>{kw}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
