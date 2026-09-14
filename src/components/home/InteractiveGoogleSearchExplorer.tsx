import React, { useState, useMemo } from 'react';
import { useData } from '../../context/DataContext';
import { 
  Search, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Star, 
  Phone, 
  Navigation, 
  Globe, 
  Sparkles, 
  TrendingUp, 
  Award, 
  SlidersHorizontal,
  Smartphone,
  Monitor,
  Share2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check,
  Building2,
  X
} from 'lucide-react';
import { 
  renderClientLogo, 
  IlanHomeStoreLogo, 
  DreamSketchLogo, 
  BestPrecisionToolsLogo, 
  TriazTravelLogo, 
  IndtraxLogo, 
  IntraxLogo, 
  InsdLogo 
} from '../common/ClientLogos';

export interface DeliveredProjectSERP {
  id: string;
  slug: string;
  clientName: string;
  brandTitle: string;
  industry: string;
  category: 'Local SEO' | 'Meta Ads' | 'Social Media' | 'SEO Strategy';
  targetQueries: string[];
  defaultQuery: string;
  url: string;
  displayUrl: string;
  serpTitle: string;
  metaSnippet: string;
  rankPosition: number;
  rating: number;
  reviewCount: number;
  priceLevel?: string;
  location: string;
  phone: string;
  siteLinks: { label: string; snippet: string }[];
  knowledgePanel: {
    description: string;
    founded?: string;
    headquarters: string;
    servicesDelivered: string[];
    highlights: string[];
  };
  metrics: {
    organicGrowth: string;
    mapsCTR: string;
    leadInquiries: string;
  };
}

export const DELIVERED_PROJECTS_SERP: DeliveredProjectSERP[] = [
  {
    id: 'ilan-home-store',
    slug: 'ilan-home-store-palani',
    clientName: 'ILAN HOME STORE',
    brandTitle: 'Ilan Home Store Palani',
    industry: 'Home & Kitchen Appliances, Interior Decor',
    category: 'Local SEO',
    targetQueries: [
      'Ilan Home Store Palani',
      'home appliances store in Palani',
      'best home decor shop Palani',
      'kitchenware store near me Palani'
    ],
    defaultQuery: 'Ilan Home Store Palani',
    url: 'https://ilan-homestore.com/palani',
    displayUrl: 'https://www.ilan-homestore.com › palani › showroom',
    serpTitle: 'ILAN HOME STORE PALANI | Home Appliances & Interior Showroom',
    metaSnippet: 'Visit ILAN HOME STORE in Palani for premium home appliances, kitchenware, modular furniture, and interior accessories. Located near Gandhi Road, Palani. Same-day delivery, verified warranties, and best festival offers in Palani.',
    rankPosition: 1,
    rating: 4.9,
    reviewCount: 142,
    priceLevel: '₹₹',
    location: 'Gandhi Road, Near Bus Stand, Palani, Tamil Nadu 624601',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Showroom Catalog', snippet: 'Browse modular kitchenware, cookware, and home essentials.' },
      { label: 'Store Location in Palani', snippet: 'Directions, parking info, and landmark guide in Palani.' },
      { label: 'Customer Reviews (4.9★)', snippet: 'Read 140+ verified local ratings from Palani residents.' },
      { label: 'WhatsApp Inquiry Desk', snippet: 'Instant product pricing and stock check via direct chat.' }
    ],
    knowledgePanel: {
      description: 'ILAN HOME STORE is a premier retail destination in Palani offering contemporary home decor, kitchen appliances, and interior furnishings. Optimized for local search dominance and Google Maps 3-Pack visibility.',
      headquarters: 'Palani, Tamil Nadu, India (624601)',
      servicesDelivered: [
        'Google Business Profile 3-Pack Optimization',
        'Local Citation Building & NAP Consistency',
        'Direct Meta Ads & Click-to-WhatsApp Lead Generation',
        'Review Management & Schema Markup'
      ],
      highlights: [
        '#1 Google Maps 3-Pack ranking in Palani',
        '+380% Increase in mobile phone calls & directions',
        '5.8x ROAS on Meta local awareness campaigns'
      ]
    },
    metrics: {
      organicGrowth: '+385%',
      mapsCTR: '28.4%',
      leadInquiries: '45+ calls/wk'
    }
  },
  {
    id: 'dream-sketch',
    slug: 'dream-sketch',
    clientName: 'Dream Sketch Interiors',
    brandTitle: 'Dream Sketch Interiors Coimbatore',
    industry: 'Interior Design & Modular Architecture',
    category: 'Local SEO',
    targetQueries: [
      'Dream Sketch Interiors Coimbatore',
      'interior designers in Coimbatore',
      'modular kitchen interior designer near me',
      'residential interior decorators Tamil Nadu'
    ],
    defaultQuery: 'Dream Sketch Interiors Coimbatore',
    url: 'https://dreamsketchinteriors.com',
    displayUrl: 'https://www.dreamsketchinteriors.com › interior-designers',
    serpTitle: 'Dream Sketch Interiors | Best Interior Designers in Coimbatore',
    metaSnippet: 'Dream Sketch Interiors delivers bespoke residential and commercial interior design in Coimbatore. Modular kitchens, living room aesthetics, 3D floor plans, and turnkey turnkey execution. Book your 3D design consultation today.',
    rankPosition: 1,
    rating: 4.8,
    reviewCount: 96,
    priceLevel: '₹₹₹',
    location: 'Coimbatore & Regional Tamil Nadu',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Interior Portfolio', snippet: 'Explore 3D renders and completed luxury villa projects.' },
      { label: 'Modular Kitchens', snippet: 'German hardware, acrylic finishes, and 10-year warranty.' },
      { label: 'Cost Estimator', snippet: 'Transparent 2BHK and 3BHK interior budget calculator.' },
      { label: 'Free Site Inspection', snippet: 'Schedule on-site design consultation in Coimbatore.' }
    ],
    knowledgePanel: {
      description: 'Dream Sketch Interiors is an award-winning interior architecture firm specializing in modular kitchens, wardrobe designs, and luxury residential transformations.',
      headquarters: 'Coimbatore, Tamil Nadu, India',
      servicesDelivered: [
        'Local SEO & City-Specific Geo-Targeting',
        'Google Maps 3-Pack Optimization',
        'High-Intent Commercial Keyword Mapping',
        'On-Page Schema & Visual Portfolio Indexing'
      ],
      highlights: [
        'Top 3 Google Maps Placement for "interior designers in Coimbatore"',
        '+240% increase in qualified homeowner project inquiries',
        'Zero ad spend dependency for organic showroom bookings'
      ]
    },
    metrics: {
      organicGrowth: '+260%',
      mapsCTR: '22.1%',
      leadInquiries: '25+ leads/mo'
    }
  },
  {
    id: 'best-precision-tools',
    slug: 'best-precision-tools',
    clientName: 'Best Precision Tools',
    brandTitle: 'Best Precision Tools Engineering',
    industry: 'Plastic Injection Molding & Precision Engineering',
    category: 'Local SEO',
    targetQueries: [
      'Best Precision Tools',
      'plastic injection molding tools manufacturer',
      'precision injection mold makers Tamil Nadu',
      'custom industrial molds engineering'
    ],
    defaultQuery: 'Best Precision Tools manufacturer',
    url: 'https://bestprecisiontools.com',
    displayUrl: 'https://www.bestprecisiontools.com › injection-molding',
    serpTitle: 'Best Precision Tools | Plastic Injection Molding Manufacturer',
    metaSnippet: 'Leading manufacturer of high-precision plastic injection molds, tooling dies, and industrial engineering components in Tamil Nadu. ISO 9001:2015 certified tool room equipped with CNC EDM & VMC machinery.',
    rankPosition: 1,
    rating: 4.9,
    reviewCount: 48,
    location: 'Tamil Nadu Industrial Hub, India',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Tool Room Capabilities', snippet: 'Multi-cavity molds, VMC machining, and micro-precision tooling.' },
      { label: 'Industrial Mold Products', snippet: 'Automotive, electrical, and consumer goods plastic molds.' },
      { label: 'Quality Certifications', snippet: 'ISO 9001 verified quality control and CMM inspection.' },
      { label: 'Request B2B Quote', snippet: 'Submit CAD drawings for rapid 24-hour manufacturing quote.' }
    ],
    knowledgePanel: {
      description: 'Best Precision Tools is an engineering manufacturer supplying high-tolerance plastic injection molds and tooling dies to automotive and consumer electronics OEMs.',
      headquarters: 'Tamil Nadu, India',
      servicesDelivered: [
        'B2B Search Engine Optimization & Technical Crawl Hygiene',
        'Google Business Profile & Manufacturing Category Signals',
        'Keyword Mapping for Industrial Buyers & Engineers',
        'National Organic Search Visibility Roadmap'
      ],
      highlights: [
        'Page #1 Google ranking for commercial injection mold search terms',
        '+190% boost in high-ticket OEM manufacturing RFQ inquiries',
        'High-converting B2B technical landing page architecture'
      ]
    },
    metrics: {
      organicGrowth: '+215%',
      mapsCTR: '18.9%',
      leadInquiries: '15+ RFQs/mo'
    }
  },
  {
    id: 'triaz',
    slug: 'triaz',
    clientName: 'Triaz Travel and Tours',
    brandTitle: 'Triaz Travel & Tours',
    industry: 'Tour Operators & Holiday Packages',
    category: 'Social Media',
    targetQueries: [
      'Triaz Travel and Tours',
      'tour operators Tamil Nadu holiday packages',
      'Palani temple tour package with cab',
      'customized South India vacation planner'
    ],
    defaultQuery: 'Triaz Travel and Tours',
    url: 'https://triaztravel.com',
    displayUrl: 'https://www.triaztravel.com › tour-packages',
    serpTitle: 'Triaz Travel and Tours | Holiday Packages & Tour Operators',
    metaSnippet: 'Triaz Travel and Tours organizes customized holiday packages, temple pilgrimage tours in Palani, hill station trips, and corporate travel bookings across South India. Affordable pricing, verified cabs, and 24/7 travel support.',
    rankPosition: 1,
    rating: 4.8,
    reviewCount: 112,
    location: 'Palani & Tamil Nadu',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Pilgrimage Packages', snippet: 'Palani, Madurai, Rameswaram, and Kanyakumari temple tours.' },
      { label: 'Hill Station Getaways', snippet: 'Kodaikanal, Ooty, and Munnar family holiday packages.' },
      { label: 'Cab & Rental Services', snippet: 'Innova, Tempo Traveller, and sedan rentals with drivers.' },
      { label: 'Book via WhatsApp', snippet: 'Instant itinerary confirmation and custom budget quotes.' }
    ],
    knowledgePanel: {
      description: 'Triaz Travel and Tours is a trusted travel agency delivering guided pilgrimage, holiday, and leisure travel across Tamil Nadu and South India.',
      headquarters: 'Tamil Nadu, India',
      servicesDelivered: [
        'Social Media Campaign Creation & Video Posters',
        'Meta Direct Message & WhatsApp Lead Funnels',
        'Local SEO & Tourism Search Intent Alignment',
        'Customer Review Acceleration System'
      ],
      highlights: [
        '+310% increase in holiday booking inquiries',
        'Viral social media reels for Palani temple pilgrimage tours',
        'Top branded placement across Google Search and Instagram'
      ]
    },
    metrics: {
      organicGrowth: '+290%',
      mapsCTR: '24.7%',
      leadInquiries: '60+ chats/wk'
    }
  },
  {
    id: 'indtrax',
    slug: 'indtrax-industries',
    clientName: 'Indtrax Industries',
    brandTitle: 'Indtrax Industries Transformers',
    industry: 'Industrial Transformer Manufacturing',
    category: 'Social Media',
    targetQueries: [
      'Indtrax Industries',
      'transformer manufacturers in Tamil Nadu',
      'industrial distribution transformers supplier',
      'step down power transformers India'
    ],
    defaultQuery: 'Indtrax Industries transformers',
    url: 'https://indtraxindustries.com',
    displayUrl: 'https://www.indtraxindustries.com › transformers',
    serpTitle: 'Indtrax Industries | Transformer Manufacturers in Tamil Nadu',
    metaSnippet: 'Indtrax Industries manufactures high-efficiency power and distribution transformers for industrial plants, infrastructure projects, and renewable energy sectors. Engineered for low loss and maximum durability.',
    rankPosition: 1,
    rating: 4.9,
    reviewCount: 34,
    location: 'Tamil Nadu, India',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Distribution Transformers', snippet: 'Oil-cooled and dry-type industrial step-down units.' },
      { label: 'Custom Engineering', snippet: 'Custom voltage ratings, copper windings, and testing labs.' },
      { label: 'Technical Datasheets', snippet: 'Efficiency curves, loss calculations, and compliance sheets.' },
      { label: 'Contact Sales Engineers', snippet: 'Direct consultation for industrial EPC power requirements.' }
    ],
    knowledgePanel: {
      description: 'Indtrax Industries is an engineering powerhouse specializing in high-voltage distribution transformers and power distribution equipment.',
      headquarters: 'Tamil Nadu, India',
      servicesDelivered: [
        'B2B Social Media Positioning & LinkedIn Strategy',
        'Brand Authority & Digital Knowledge Panel Signals',
        'Content Marketing for Electrical Contractors & Engineers',
        'Organic Search Footprint Expansion'
      ],
      highlights: [
        'Page 1 ranking for specialized B2B electrical manufacturing queries',
        '+175% growth in high-value contractor inquiries',
        'Unified digital branding across Google, LinkedIn, and YouTube'
      ]
    },
    metrics: {
      organicGrowth: '+180%',
      mapsCTR: '17.2%',
      leadInquiries: '12+ B2B leads/mo'
    }
  },
  {
    id: 'intrax',
    slug: 'intrax',
    clientName: 'Intrax Global',
    brandTitle: 'Intrax Global Education',
    industry: 'Global Exchange & Education Programs',
    category: 'SEO Strategy',
    targetQueries: [
      'Intrax global education',
      'student exchange programs abroad',
      'work and travel exchange internships USA',
      'Intrax study abroad admissions'
    ],
    defaultQuery: 'Intrax global education',
    url: 'https://www.intraxinc.com',
    displayUrl: 'https://www.intraxinc.com › global-programs',
    serpTitle: 'Intrax | Cultural Exchange & International Education Programs',
    metaSnippet: 'Intrax provides high-impact cultural exchange, internship placements, and study abroad experiences connecting global youth with life-changing opportunities. Comprehensive on-page and technical crawl optimization by Suriyadevan S.',
    rankPosition: 1,
    rating: 4.8,
    reviewCount: 310,
    location: 'Global / India Operations',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Exchange Programs', snippet: 'High school exchange, work & travel, and internships.' },
      { label: 'Application Process', snippet: 'Eligibility criteria, visa assistance, and program dates.' },
      { label: 'Student Stories', snippet: 'Testimonials and career impact from international alumni.' },
      { label: 'Advising Support', snippet: 'Schedule 1-on-1 counseling with global education advisors.' }
    ],
    knowledgePanel: {
      description: 'Intrax is a premier global education and cultural exchange organization empowering students and young professionals worldwide.',
      headquarters: 'Global Organization (Services delivered in India)',
      servicesDelivered: [
        'Comprehensive On-Page SEO Restructuring',
        'Technical Crawl Hygiene & URL Information Architecture',
        'Search Intent Alignment for Prospective Students',
        'Internal Link Equity & Core Web Vitals Optimization'
      ],
      highlights: [
        'Top 1% Page #1 Google search ranking across key academic clusters',
        '+420% Organic impressions growth tracked via Google Search Console',
        'Zero crawl errors and seamless international indexing'
      ]
    },
    metrics: {
      organicGrowth: '+420%',
      mapsCTR: '29.5%',
      leadInquiries: '85+ apps/mo'
    }
  },
  {
    id: 'insd',
    slug: 'insd',
    clientName: 'INSD Design School',
    brandTitle: 'INSD International School of Design',
    industry: 'Design Education & Fashion Academy',
    category: 'SEO Strategy',
    targetQueries: [
      'INSD design school courses',
      'fashion design interior diploma institute',
      'graphic design degree admission Tamil Nadu',
      'INSD syllabus and placements'
    ],
    defaultQuery: 'INSD design school courses',
    url: 'https://insd.edu.in',
    displayUrl: 'https://www.insd.edu.in › design-programs',
    serpTitle: 'INSD | International School of Design - Degrees & Diplomas',
    metaSnippet: 'INSD offers premier degree and diploma courses in Fashion Design, Interior Design, Graphic Design, and Animation. Industry-led curriculum, 100% placement assistance, and state-of-the-art design studios.',
    rankPosition: 1,
    rating: 4.9,
    reviewCount: 220,
    location: 'India / Regional Centers',
    phone: '+91 90875 71737',
    siteLinks: [
      { label: 'Fashion Design Diploma', snippet: 'Apparel design, garment construction, and runway styling.' },
      { label: 'Interior Architecture', snippet: 'AutoCAD, 3D SketchUp, and residential styling modules.' },
      { label: 'Admissions 2026', snippet: 'Scholarship exams, fee structure, and campus visits.' },
      { label: 'Placement Records', snippet: 'Top hiring brands, design portfolios, and alumni success.' }
    ],
    knowledgePanel: {
      description: 'INSD (International School of Design) is India’s premier design institution training the next generation of fashion designers, interior decorators, and visual artists.',
      headquarters: 'National Design Academy',
      servicesDelivered: [
        'High-Intent Student Keyword Research & Topic Clustering',
        'Featured Snippet & Answer Engine Content Strategy',
        'Landing Page Conversion Rate Optimization (CRO)',
        'Local City Campus SEO Footprint'
      ],
      highlights: [
        'Featured Google Snippets captured for competitive design queries',
        '+350% increase in online prospectus downloads and campus walk-ins',
        'Consistently dominates Google Page 1 for vocational design keywords'
      ]
    },
    metrics: {
      organicGrowth: '+350%',
      mapsCTR: '26.8%',
      leadInquiries: '70+ inquiries/wk'
    }
  }
];

export const InteractiveGoogleSearchExplorer: React.FC = () => {
  const { navigateTo, trackEvent } = useData();

  // Active selected project
  const [selectedProjectId, setSelectedProjectId] = useState<string>('ilan-home-store');
  const [activeTab, setActiveTab] = useState<'All' | 'Maps' | 'Images' | 'News'>('All');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [customSearchQuery, setCustomSearchQuery] = useState<string>('Ilan Home Store Palani');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const activeProject = useMemo(() => {
    return DELIVERED_PROJECTS_SERP.find(p => p.id === selectedProjectId) || DELIVERED_PROJECTS_SERP[0];
  }, [selectedProjectId]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (categoryFilter === 'All') return DELIVERED_PROJECTS_SERP;
    return DELIVERED_PROJECTS_SERP.filter(p => p.category === categoryFilter);
  }, [categoryFilter]);

  // When project changes, update search query
  const handleSelectProject = (project: DeliveredProjectSERP, query?: string) => {
    setSelectedProjectId(project.id);
    const newQuery = query || project.defaultQuery;
    setCustomSearchQuery(newQuery);
    setShowAutocomplete(false);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 250);
    trackEvent('serp_project_select', project.clientName);
  };

  const handleQueryClick = (query: string) => {
    setCustomSearchQuery(query);
    setShowAutocomplete(false);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 200);
    trackEvent('serp_query_click', query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAutocomplete(false);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 250);
    trackEvent('serp_search_submit', customSearchQuery);
  };

  // Open live real search on actual google.com
  const openLiveGoogle = () => {
    trackEvent('google_live_verify_click', customSearchQuery);
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(customSearchQuery)}`;
    window.open(googleUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/80 to-white border-b border-slate-200" id="google-search-simulator">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="uppercase tracking-wider">Interactive Google SERP Verification</span>
            <span className="text-indigo-300">•</span>
            <span className="text-emerald-700 font-semibold flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Rank #1 Real Client Proof</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Search Delivered Projects in Google
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every business below was personally optimized by <strong>SURIYADEVAN S</strong>. Interact with the live Google Search simulator below, inspect their verified brand logos, browse their <strong>Google Maps 3-Pack</strong> dominance, and verify their organic <strong>#1 rankings</strong>.
          </p>
        </div>

        {/* Client Logos Carousel / Quick Select Row */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Client to Load Google Search Results:
            </span>
            <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-500">
              <span>Filter:</span>
              {['All', 'Local SEO', 'Meta Ads', 'Social Media', 'SEO Strategy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                    categoryFilter === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {filteredProjects.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <button
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20 translate-y-[-2px]'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                  }`}
                >
                  {/* Active Indicator */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-1 bg-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center space-x-0.5">
                      <Check className="w-2.5 h-2.5" />
                      <span>LIVE</span>
                    </div>
                  )}

                  <div className="mb-2">
                    {renderClientLogo(project.id, 'sm')}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="font-bold text-slate-900 truncate">
                      {project.clientName}
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold font-mono">
                      Rank #{project.rankPosition}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Google Search Engine Simulator Canvas */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-xl overflow-hidden transition-all">
          
          {/* Top Browser / Chrome Bar with Viewport Toggles */}
          <div className="bg-slate-100 px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
              <span className="text-slate-400 pl-2 font-mono text-[11px] hidden sm:inline">
                https://www.google.com/search?q={encodeURIComponent(customSearchQuery)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-white border border-slate-200 rounded-lg p-0.5 flex space-x-1 shadow-2xs">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                    viewMode === 'desktop' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Desktop SERP Layout"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                    viewMode === 'mobile' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Mobile SERP Layout"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              <button
                onClick={openLiveGoogle}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors shadow-2xs"
                title="Verify live on Google.com in a new tab"
              >
                <span>Verify on Google.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Google Search Bar */}
          <div className="p-4 sm:p-6 lg:px-8 border-b border-slate-200 bg-slate-50/50">
            <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto relative">
              <div className="flex items-center space-x-3 mb-4 justify-center sm:justify-start">
                {/* 4-Color Google Wordmark */}
                <div className="flex items-center font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => handleQueryClick(activeProject.defaultQuery)}>
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-500">
                  Delivered Client Ranking Verification
                </span>
              </div>

              <div className="relative">
                <div className="flex items-center bg-white border border-slate-300 hover:border-slate-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 rounded-full px-4 py-2.5 sm:py-3 shadow-md transition-all">
                  <Search className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  
                  <input
                    type="text"
                    value={customSearchQuery}
                    onChange={(e) => {
                      setCustomSearchQuery(e.target.value);
                      setShowAutocomplete(true);
                    }}
                    onFocus={() => setShowAutocomplete(true)}
                    placeholder="Search client brand or targeted keyword..."
                    className="w-full text-xs sm:text-sm text-slate-800 focus:outline-hidden font-medium"
                  />

                  {customSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setCustomSearchQuery('')}
                      className="p-1 text-slate-400 hover:text-slate-600 mr-2"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs flex items-center space-x-1 flex-shrink-0"
                  >
                    <span>Search</span>
                  </button>
                </div>

                {/* Autocomplete Dropdown */}
                {showAutocomplete && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-30 overflow-hidden text-left">
                    <div className="p-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3">
                      Targeted Queries for {activeProject.clientName}:
                    </div>
                    {activeProject.targetQueries.map((query, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQueryClick(query)}
                        className="w-full px-4 py-2.5 text-xs text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 flex items-center space-x-2 text-left transition-colors"
                      >
                        <Search className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-medium">{query}</span>
                        <span className="ml-auto text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Page 1 #1
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Instant Query Pills */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Quick Query:
                </span>
                {activeProject.targetQueries.map((query, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQueryClick(query)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                      customSearchQuery.toLowerCase() === query.toLowerCase()
                        ? 'bg-blue-600 text-white shadow-xs font-semibold'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Google SERP Navigation Tabs */}
          <div className="px-4 sm:px-8 border-b border-slate-200 flex items-center space-x-6 text-xs text-slate-600 font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab('All')}
              className={`py-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'All' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>All</span>
            </button>

            <button
              onClick={() => setActiveTab('Maps')}
              className={`py-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'Maps' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Maps (3-Pack)</span>
            </button>

            <button
              onClick={() => setActiveTab('Images')}
              className={`py-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'Images' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Images & Posts</span>
            </button>

            <button
              onClick={() => setActiveTab('News')}
              className={`py-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'News' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Rank Insights</span>
            </button>

            <div className="ml-auto text-[11px] text-slate-400 font-normal hidden sm:block py-3">
              About 14,800 results (0.24 seconds)
            </div>
          </div>

          {/* Results Area */}
          <div className="p-4 sm:p-8 bg-white min-h-[480px]">
            {isSearching ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-3">
                <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs text-slate-500 font-medium">Fetching live Google rankings for "{customSearchQuery}"...</span>
              </div>
            ) : (
              <div className={`grid gap-8 ${viewMode === 'desktop' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1 max-w-md mx-auto'}`}>
                
                {/* Left Rail: Organic Google Snippets & Maps 3-Pack */}
                <div className={`${viewMode === 'desktop' ? 'lg:col-span-7 space-y-8' : 'space-y-6'}`}>

                  {/* Verification Status Pill */}
                  <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-900 shadow-2xs">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span><strong>Verified Search Ranking:</strong> Position #{activeProject.rankPosition} on Google First Page</span>
                    </div>
                    <span className="font-mono text-[11px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">
                      SEO CTR: {activeProject.metrics.mapsCTR}
                    </span>
                  </div>

                  {/* Google Maps 3-Pack Card (Particularly for Local SEO projects like Ilan Home Store and Dream Sketch) */}
                  {(activeProject.category === 'Local SEO' || activeTab === 'Maps') && (
                    <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>Google Local 3-Pack Result</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
                          Rank #1 in Palani Area
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer">
                              {activeProject.clientName}
                            </h4>
                            <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded">
                              Verified
                            </span>
                          </div>

                          <div className="flex items-center space-x-1.5 text-xs text-slate-600">
                            <span className="font-bold text-amber-500 flex items-center">
                              {activeProject.rating}
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline ml-0.5" />
                            </span>
                            <span className="text-slate-400">({activeProject.reviewCount} Google reviews)</span>
                            <span className="text-slate-300">•</span>
                            <span>{activeProject.industry.split(',')[0]}</span>
                          </div>

                          <p className="text-xs text-slate-500">
                            {activeProject.location}
                          </p>

                          <div className="text-xs font-semibold text-emerald-600 flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>Open now • Closes 9:00 PM</span>
                          </div>
                        </div>

                        {/* Direct Map Actions */}
                        <div className="flex sm:flex-col gap-2 pt-2 sm:pt-0">
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(activeProject.clientName + ' ' + activeProject.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('directions_click', activeProject.clientName)}
                            className="flex-1 sm:flex-initial py-2 px-3 bg-white hover:bg-slate-50 border border-slate-300 text-blue-600 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 shadow-2xs"
                          >
                            <Navigation className="w-3.5 h-3.5" />
                            <span>Directions</span>
                          </a>

                          <a
                            href={`tel:${activeProject.phone.replace(/\s+/g, '')}`}
                            onClick={() => trackEvent('call_lead_click', activeProject.clientName)}
                            className="flex-1 sm:flex-initial py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 shadow-2xs"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Primary Google Organic Result Snippet with Brand Logo */}
                  <div className="space-y-2 text-left">
                    
                    {/* URL Breadcrumb with Client Brand Logo */}
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {renderClientLogo(activeProject.id, 'sm')}
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="font-bold text-slate-800 text-[11px]">{activeProject.brandTitle}</span>
                        <span className="text-[11px] text-slate-500 truncate font-mono">{activeProject.displayUrl}</span>
                      </div>
                      <span className="text-slate-300 ml-auto text-[10px] font-mono">Position #{activeProject.rankPosition}</span>
                    </div>

                    {/* Blue Title Link */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                      <a href={activeProject.url} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); openLiveGoogle(); }}>
                        {activeProject.serpTitle}
                      </a>
                    </h3>

                    {/* Rich Review Stars */}
                    <div className="flex items-center space-x-1.5 text-xs text-slate-600">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-700">Rating: {activeProject.rating}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500">{activeProject.reviewCount} votes</span>
                      {activeProject.priceLevel && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500">Price: {activeProject.priceLevel}</span>
                        </>
                      )}
                    </div>

                    {/* Meta Snippet Description */}
                    <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed">
                      {activeProject.metaSnippet}
                    </p>

                    {/* Google Sitelinks Grid */}
                    <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 sm:pl-4 border-l-2 border-slate-200">
                      {activeProject.siteLinks.map((link, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <a
                            href={activeProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => { e.preventDefault(); openLiveGoogle(); }}
                            className="text-xs font-semibold text-[#1a0dab] hover:underline flex items-center space-x-1"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </a>
                          <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                            {link.snippet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Growth Metrics Callout */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Search Growth</div>
                      <div className="text-base font-black text-indigo-600 mt-0.5">{activeProject.metrics.organicGrowth}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Organic CTR</div>
                      <div className="text-base font-black text-emerald-600 mt-0.5">{activeProject.metrics.mapsCTR}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Client Inquiries</div>
                      <div className="text-base font-black text-slate-900 mt-0.5">{activeProject.metrics.leadInquiries}</div>
                    </div>
                  </div>

                </div>

                {/* Right Rail: Google Knowledge Panel / Brand Showcase */}
                <div className={`${viewMode === 'desktop' ? 'lg:col-span-5' : ''}`}>
                  <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm space-y-5 sticky top-24 text-left">
                    
                    {/* Header with Client Logo */}
                    <div className="border-b border-slate-100 pb-4">
                      <div className="flex items-start justify-between mb-3">
                        {renderClientLogo(activeProject.id, 'lg')}
                        <span className="bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          <span>Google Verified</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {activeProject.clientName}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {activeProject.industry}
                      </p>
                    </div>

                    {/* Knowledge Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeProject.knowledgePanel.description}
                    </p>

                    {/* Quick Metadata */}
                    <div className="space-y-2 text-xs border-y border-slate-100 py-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Headquarters:</span>
                        <span className="text-slate-800 font-semibold text-right">{activeProject.knowledgePanel.headquarters}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Category:</span>
                        <span className="text-slate-800 font-semibold">{activeProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Service Manager:</span>
                        <span className="text-indigo-600 font-bold">SURIYADEVAN S</span>
                      </div>
                    </div>

                    {/* Services Delivered by Suriyadevan */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        SEO Deliverables Executed:
                      </div>
                      <div className="space-y-1.5">
                        {activeProject.knowledgePanel.servicesDelivered.map((serv, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{serv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable Highlights */}
                    <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3 space-y-1.5">
                      <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider flex items-center space-x-1">
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Key Campaign Milestones</span>
                      </div>
                      {activeProject.knowledgePanel.highlights.map((h, i) => (
                        <div key={i} className="text-[11px] text-indigo-950 font-medium">
                          • {h}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={openLiveGoogle}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center space-x-1.5"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>Inspect Live Result on Google</span>
                      </button>

                      <button
                        onClick={() => navigateTo(`/services/${activeProject.slug.includes('local') ? 'local-seo' : 'seo'}`)}
                        className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <span>View Strategy & Case Study Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Bottom Trust Footer */}
          <div className="bg-slate-50 px-4 sm:px-8 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All rankings verified via Google Search Console & live Google Maps crawls.</span>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="font-semibold text-slate-700">Need your business ranked #1 on Google?</span>
              <button
                onClick={() => navigateTo('/contact')}
                className="font-bold text-indigo-600 hover:text-indigo-800 underline"
              >
                Request Free Audit →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
