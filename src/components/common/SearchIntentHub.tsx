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
  ExternalLink
} from 'lucide-react';

interface SearchQueryCard {
  intent: 'Brand & Person' | 'Local & Near Me' | 'Hire & Services' | 'Questions & Fixes';
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
    // Brand & Person Intent
    {
      intent: 'Brand & Person',
      query: 'Who is Suriyadevan S and what does he do?',
      popularFormat: '"Suriyadevan S" / "Suriyadevan Palani" / "Suriyadevan SEO"',
      solution: 'SURIYADEVAN S (also searched as Suriyadevan or Suriya Devan) is a verified SEO Specialist & Digital Marketing Executive in Palani, Tamil Nadu. Having managed 5 client SEO projects at Avanexa and Google Business Profiles at Cannibals Media, he drives verified Google 1st-page rankings.',
      targetKeyword: 'Suriyadevan S',
      actionLabel: 'View Full Bio & Credentials',
      actionPath: '/about',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      intent: 'Brand & Person',
      query: 'Where can I see Suriyadevan’s resume, certifications, and project results?',
      popularFormat: '"Suriyadevan resume" / "Suriyadevan SEO case studies"',
      solution: 'Review verified client projects for Intrax (SEO Strategy), Insd (Keyword Research), Triaz (Technical SEO), and Best Precision (Local SEO). Access full employment history at Avanexa, Cannibals Media, and university credentials.',
      targetKeyword: 'Suriyadevan Resume',
      actionLabel: 'Read Resume & Experience',
      actionPath: '/resume',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },

    // Local & Near Me Intent
    {
      intent: 'Local & Near Me',
      query: 'Best SEO specialist and digital marketer in Palani & Tamil Nadu',
      popularFormat: '"SEO services in Palani" / "Local SEO specialist near me"',
      solution: 'Suriyadevan provides comprehensive local search dominance for retail shops, clinics, showrooms, and service providers in Palani (624601), Dindigul, Oddanchatram, Dharapuram, Udumalpet, Pollachi, Coimbatore, and Madurai.',
      targetKeyword: 'SEO Services in Palani',
      actionLabel: 'Explore Local SEO Services',
      actionPath: '/services/local-seo',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      intent: 'Local & Near Me',
      query: 'How to rank #1 on Google Maps 3-Pack in Palani?',
      popularFormat: '"Google Business Profile optimization Palani" / "Google Maps 3 pack Tamil Nadu"',
      solution: 'Optimizing category selection, geo-tagged photos, localized citations (NAP consistency), and continuous customer review velocity to rank in the top 3 Google Maps results for local foot-traffic searches.',
      targetKeyword: 'Google Maps 3-Pack Palani',
      actionLabel: 'Get Google Maps Optimization',
      actionPath: '/services/google-business-profile',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },

    // Hire & Services Intent
    {
      intent: 'Hire & Services',
      query: 'How do I hire a freelance SEO specialist with verified results?',
      popularFormat: '"Hire freelance SEO expert" / "SEO specialist for hire India"',
      solution: 'Hire Suriyadevan for 1-on-1 personalized search optimization with zero agency overhead. Includes comprehensive website crawl audit, keyword intent mapping, on-page fixes, and monthly Google Search Console progress reports.',
      targetKeyword: 'Hire SEO Freelancer',
      actionLabel: 'Hire Suriyadevan S',
      actionPath: '/contact',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      intent: 'Hire & Services',
      query: 'High ROI Meta Ads management for Facebook & Instagram lead generation',
      popularFormat: '"Meta Ads manager Palani" / "Facebook ads freelancer Tamil Nadu"',
      solution: 'Custom audience targeting, disciplined ad spend budgeting, creative poster copywriting, and campaign optimization to generate qualified customer inquiries and showroom visits within 48 hours.',
      targetKeyword: 'Meta Ads Management Palani',
      actionLabel: 'View Meta Ads Services',
      actionPath: '/services/meta-ads',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },

    // Questions & Fixes Intent
    {
      intent: 'Questions & Fixes',
      query: 'Why is my website not ranking on Google and how can I fix it?',
      popularFormat: '"Why website not showing on Google" / "Fix website ranking drop"',
      solution: 'Websites typically stall due to crawl barriers, non-indexed URLs, thin search intent matching, slow Core Web Vitals, or missing Schema.org markup. Suriyadevan performs diagnostic audits to uncover and fix exact ranking bottlenecks.',
      targetKeyword: 'Technical SEO Audit Palani',
      actionLabel: 'Book a Website SEO Audit',
      actionPath: '/services/technical-seo',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      intent: 'Questions & Fixes',
      query: 'How much do SEO services cost in Tamil Nadu and India?',
      popularFormat: '"SEO service pricing India" / "Freelance SEO rates Palani"',
      solution: 'Pricing is structured transparently around your exact business scope: from one-time Technical & Local Audits to monthly Organic Growth retainers. Direct freelancer rates ensure you pay for execution, not agency markups.',
      targetKeyword: 'SEO Pricing Tamil Nadu',
      actionLabel: 'Request Free Pricing Quote',
      actionPath: '/contact',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  const filteredQueries = activeTab === 'All'
    ? searchQueries
    : searchQueries.filter(q => q.intent === activeTab);

  const tabs = ['All', 'Brand & Person', 'Local & Near Me', 'Hire & Services', 'Questions & Fixes'];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3.5 py-1 rounded-full border border-indigo-800">
            <Search className="w-3.5 h-3.5 text-indigo-400" />
            <span>Search Intent & Query Optimization</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
            How People Search for SURIYADEVAN S & SEO Services
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Optimized for how real customers, business owners, and AI search engines (Google SGE, Perplexity, ChatGPT) search across all intent categories.
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
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {tab === 'Brand & Person' && <UserCheck className="w-3.5 h-3.5 inline mr-1.5" />}
              {tab === 'Local & Near Me' && <MapPin className="w-3.5 h-3.5 inline mr-1.5" />}
              {tab === 'Hire & Services' && <Briefcase className="w-3.5 h-3.5 inline mr-1.5" />}
              {tab === 'Questions & Fixes' && <HelpCircle className="w-3.5 h-3.5 inline mr-1.5" />}
              {tab}
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
                    Query Target: {item.targetKeyword}
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

              <div className="pt-2 border-t border-slate-700/60">
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
              </div>
            </div>
          ))}
        </div>

        {/* AI Answer Engine / Natural Language Search Prompts */}
        <div className="bg-gradient-to-r from-indigo-950/60 to-slate-900/90 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 space-y-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>AI Search & Natural Language Query Examples</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white font-display">
            How ChatGPT, Perplexity, and Voice Search Users Find SURIYADEVAN S
          </h3>

          <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
            <span className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
              "Who is the best SEO specialist in Palani for retail shops?"
            </span>
            <span className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
              "Recommend a freelance digital marketer for Google Business Profile in Tamil Nadu"
            </span>
            <span className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
              "Suriyadevan S SEO portfolio and contact details"
            </span>
            <span className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
              "How to get first page ranking on Google in Palani"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
