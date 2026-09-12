import { Project, ServiceDetail, BlogPost, FAQItem, ExperienceItem, CertificationItem, SiteSettings, SocialMediaItem, MetaAdCampaign } from '../types';

export const initialSiteSettings: SiteSettings = {
  name: 'SURIYADEVAN S',
  roleTitle: 'SEO & Digital Marketing Specialist',
  location: 'Palani, Tamil Nadu, India',
  phone: '+91 9087571737',
  email: 'suriya2993@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suriyadevan/',
  whatsapp: '919087571737',
  whatsappMessage: 'Hello SURIYADEVAN, I would like to consult with you regarding SEO and digital marketing services for my business.',
  primaryLocations: ['Palani', 'Tamil Nadu', 'India'],
  secondaryLocations: ['Dindigul', 'Oddanchatram', 'Dharapuram', 'Udumalpet', 'Pollachi', 'Coimbatore', 'Madurai'],
  googleSearchConsoleId: 'GSC-VERIFIED-INTEGRATION',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  googleTagManagerId: 'GTM-XXXXXXX',
  microsoftClarityId: 'clarity-project-id',
  enableTracking: true,
};

export const initialProjects: Project[] = [
  {
    "slug": "ilan-home-store",
    "name": "Ilan Home Store",
    "category": "Meta Ads",
    "client": "Ilan Home Store",
    "industry": "Home Store",
    "services": [
      "Meta Ads Management"
    ],
    "overview": "Comprehensive Meta Ads Management project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Meta Ads Management roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Meta Ads Manager",
      "Meta Business Suite",
      "Google Analytics 4"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "Ilan Home Store Case Study | Meta Ads | SURIYADEVAN S",
    "metaDescription": "Comprehensive Meta Ads Management project deployed to improve organic search authority and visibility.",
    "focusKeyword": "Ilan Home Store SEO",
    "secondaryKeywords": [
      "Meta Ads",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "meta-ads"
    ],
    "id": "proj-1789195672584"
  },
  {
    "slug": "ilan-homes-tore",
    "name": "ilan homes tore",
    "category": "Social Media",
    "client": "Ilan Home Store",
    "industry": "Home Store",
    "services": [
      "Social Media Management"
    ],
    "overview": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Social Media Management roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Adobe Express",
      "Hootsuite",
      "Meta Business Suite",
      "Canva"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "ilan homes tore Case Study | Social Media | SURIYADEVAN S",
    "metaDescription": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "focusKeyword": "ilan homes tore SEO",
    "secondaryKeywords": [
      "Social Media",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "social-media-management"
    ],
    "id": "proj-1789195624204"
  },
  {
    "slug": "triaz",
    "name": "Triaz",
    "category": "Social Media",
    "client": "triaz_travel_and_tours",
    "industry": "Travel Agency",
    "services": [
      "Social Media Management"
    ],
    "overview": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Social Media Management roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Adobe Express",
      "Hootsuite",
      "Meta Business Suite",
      "Canva"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "Triaz Case Study | Social Media | SURIYADEVAN S",
    "metaDescription": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "focusKeyword": "Triaz SEO",
    "secondaryKeywords": [
      "Social Media",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "social-media-management"
    ],
    "id": "proj-1789195564468"
  },
  {
    "slug": "indtrax-industries",
    "name": "indtrax_industries",
    "category": "Social Media",
    "client": "Indtrax",
    "industry": "Transformer Manufacturers",
    "services": [
      "Social Media Management"
    ],
    "overview": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Social Media Management roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Adobe Express",
      "Hootsuite",
      "Meta Business Suite",
      "Canva"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "indtrax_industries Case Study | Social Media | SURIYADEVAN S",
    "metaDescription": "Comprehensive Social Media Management project deployed to improve organic search authority and visibility.",
    "focusKeyword": "indtrax_industries SEO",
    "secondaryKeywords": [
      "Social Media",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "social-media-management"
    ],
    "id": "proj-1789195489816"
  },
  {
    "slug": "best-precision-tools",
    "name": "Best Precision Tools",
    "category": "Local SEO",
    "client": "Best Precision Tools",
    "industry": "Plastic injection molding",
    "services": [
      "Local SEO Services"
    ],
    "overview": "Comprehensive Local SEO Services project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Local SEO Services roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Google Business Profile",
      "Google Maps",
      "Google Search Console"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "Best Precision Tools Case Study | Local SEO | SURIYADEVAN S",
    "metaDescription": "Comprehensive Local SEO Services project deployed to improve organic search authority and visibility.",
    "focusKeyword": "Best Precision Tools SEO",
    "secondaryKeywords": [
      "Local SEO",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "local-seo"
    ],
    "id": "proj-1789195402734"
  },
  {
    "slug": "dream-sketch",
    "name": "Dream Sketch",
    "category": "Local SEO",
    "client": "Dream Sketch Interiors - Interior Designers in Coimbatore",
    "industry": "Interior Designers",
    "services": [
      "Local SEO Services"
    ],
    "overview": "Comprehensive Local SEO Services project deployed to improve organic search authority and visibility.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Local SEO Services roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Google Business Profile",
      "Google Maps"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "Dream Sketch Case Study | Local SEO | SURIYADEVAN S",
    "metaDescription": "Comprehensive Local SEO Services project deployed to improve organic search authority and visibility.",
    "focusKeyword": "Dream Sketch SEO",
    "secondaryKeywords": [
      "Local SEO",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "local-seo"
    ],
    "id": "proj-1789195361284"
  },
  {
    "slug": "ilan-home-store-palani",
    "name": "ILAN HOME STORE PALANI",
    "category": "Local SEO",
    "client": "ILAN HOME STORE",
    "industry": "HOME STORE",
    "services": [
      "Local SEO Services"
    ],
    "overview": "Local SEO campaign and Google Business Profile positioning for ILAN HOME STORE in Palani, driving higher local 3-pack map visibility, phone calls, and showroom visits.",
    "challenge": "Low search discoverability and unoptimized structure requiring targeted optimization.",
    "strategy": "Executed strategic Local SEO Services roadmap focusing on high-impact ranking factors.",
    "implementation": [
      "Crawl analysis, content refinement, technical indexing hygiene, continuous search query monitoring."
    ],
    "tools": [
      "Google Business Profile",
      "Google Maps"
    ],
    "resultsNote": "Optimization delivered according to best-practice search engine guidelines.",
    "featured": true,
    "status": "published",
    "date": "2026",
    "location": "Palani, Tamil Nadu",
    "seoTitle": "ILAN HOME STORE Local SEO Case Study | SURIYADEVAN S",
    "metaDescription": "Local SEO & Google Business Profile case study for ILAN HOME STORE in Palani by SURIYADEVAN S. Driving Google Maps 3-pack visibility, calls & store visits.",
    "focusKeyword": "ILAN HOME STORE PALANI SEO",
    "secondaryKeywords": [
      "Local SEO",
      "SEO Case Study"
    ],
    "schemaType": "CreativeWork",
    "relatedServices": [
      "local-seo"
    ],
    "id": "proj-1789195299635"
  },
  {
    "id": "proj-1",
    "slug": "intrax",
    "name": "Intrax",
    "category": "SEO",
    "client": "Intrax",
    "industry": "Education & Global Exchange",
    "services": [
      "SEO Strategy",
      "On-Page SEO Optimization",
      "Meta Data Structuring"
    ],
    "overview": "End-to-end SEO strategy and comprehensive on-page optimization designed to improve search indexing, organic search visibility, and search-intent alignment.",
    "challenge": "Addressing fragmented page meta structures, lack of targeted keyword mapping across core informational landing pages, and weak internal anchor signals.",
    "strategy": "Conducted systematic search intent analysis, restructured title tags and meta descriptions, optimized H1-H3 heading hierarchies, and established contextual internal link paths.",
    "implementation": [
      "Comprehensive on-page audit analyzing URL structures, title tag lengths, and CTR factors.",
      "Refined heading hierarchy (H1, H2, H3) for content clarity and crawlability.",
      "Targeted on-page content alignment with user intent for primary industry queries.",
      "Optimized internal linking structures to distribute link equity to key conversion pages."
    ],
    "tools": [
      "Google Search Console",
      "SEMrush",
      "Google Analytics 4",
      "Screaming Frog"
    ],
    "resultsNote": "Project performance metrics can be added when verified data is available.",
    "featured": true,
    "status": "published",
    "date": "2024",
    "location": "India / Global",
    "seoTitle": "Intrax On-Page SEO Case Study | SURIYADEVAN S",
    "metaDescription": "On-Page SEO and technical optimization case study for Intrax by SURIYADEVAN S. Improved Google crawl efficiency, organic search rankings, and targeted traffic.",
    "focusKeyword": "Intrax SEO Case Study",
    "secondaryKeywords": [
      "On-Page SEO Optimization",
      "SEO Strategy",
      "SURIYADEVAN S Portfolio"
    ],
    "schemaType": "CreativeWork",
    "faq": [
      {
        "question": "What was the primary focus of the Intrax project?",
        "answer": "The primary focus was establishing a robust on-page SEO architecture, repairing meta data inconsistencies, and aligning content with search intent."
      }
    ],
    "relatedServices": [
      "seo",
      "technical-seo"
    ]
  },
  {
    "id": "proj-2",
    "slug": "insd",
    "name": "Insd",
    "category": "SEO",
    "client": "INSD (International School of Design)",
    "industry": "Design & Vocational Education",
    "services": [
      "Keyword Research",
      "Content Optimization",
      "Search Intent Mapping"
    ],
    "overview": "High-intent keyword research, informational cluster mapping, and structured content optimization tailored to prospective design students.",
    "challenge": "High competition in design education search landscapes with legacy content that did not align with student search intent.",
    "strategy": "Segmented search queries into commercial vs informational intents, built topic clusters around design careers and diploma courses, and revamped course landing page content.",
    "implementation": [
      "Extensive keyword discovery using SEMrush to identify localized and commercial search queries.",
      "Search intent categorization ensuring prospective student queries land on informative, conversion-oriented pages.",
      "Content enrichment with FAQ sections targeting answer engines and featured snippets.",
      "Structured on-page body copy with strategic placement of primary and secondary semantic keywords."
    ],
    "tools": [
      "SEMrush",
      "Google Search Console",
      "Google Analytics 4"
    ],
    "resultsNote": "Project performance metrics can be added when verified data is available.",
    "featured": true,
    "status": "published",
    "date": "2024",
    "location": "India",
    "seoTitle": "INSD Keyword Research & SEO Case Study | SURIYADEVAN S",
    "metaDescription": "Keyword research and search-intent content optimization case study for INSD by SURIYADEVAN S. Ranking interior and fashion design queries on Google page 1.",
    "focusKeyword": "Insd Content Optimization",
    "secondaryKeywords": [
      "Design School SEO",
      "Keyword Research Case Study",
      "Search Intent Strategy"
    ],
    "schemaType": "CreativeWork",
    "faq": [
      {
        "question": "How was keyword research conducted for INSD?",
        "answer": "In-depth research using SEMrush segmented keywords by search intent (informational vs. transactional) to match course curriculum and admissions cycles."
      }
    ],
    "relatedServices": [
      "seo",
      "content-optimization"
    ]
  }
];

export const initialServices: ServiceDetail[] = [
  {
    id: 'serv-1',
    slug: 'seo',
    name: 'SEO Services',
    shortDescription: 'Comprehensive search engine optimization encompassing technical foundation, keyword research, on-page optimization, and organic growth.',
    fullDescription: 'Data-driven search engine optimization designed to systematically improve your organic rankings on Google. Through deep keyword research, search intent mapping, technical refinement, and on-page optimization, I help your business attract qualified search traffic without relying solely on paid ads.',
    h1: 'SEO Services in Palani, Tamil Nadu',
    targetAudience: 'Small to mid-sized businesses, service providers, e-commerce brands, and local companies seeking sustainable Google visibility.',
    keyFeatures: [
      'Comprehensive Website & Competitor SEO Audit',
      'High-Intent Keyword Research & Topic Clustering',
      'On-Page Optimization (Titles, Meta, H-tags, URLs, Content)',
      'Internal Linking Architecture & Information Hierarchy',
      'Technical SEO Fixes & Core Web Vitals Guidance',
      'Google Search Console & GA4 Setup and Reporting'
    ],
    processSteps: [
      { title: '1. Website & SEO Audit', description: 'Deep diagnostic crawl identifying crawl errors, missing metadata, and content gaps.' },
      { title: '2. Keyword & Search Intent Analysis', description: 'Uncovering the exact queries your potential customers search for on Google.' },
      { title: '3. Technical Optimization', description: 'Resolving crawlability barriers, canonical conflicts, and indexing roadblocks.' },
      { title: '4. On-Page & Content Structuring', description: 'Aligning page titles, headings, and semantic body content to target intent.' },
      { title: '5. Performance Tracking', description: 'Monitoring impression growth, queries, and indexing through Search Console and GA4.' }
    ],
    deliverables: [
      'Comprehensive SEO Audit Report',
      'Target Keyword Map & Intent Blueprint',
      'Optimized Meta Tags and Heading Suggestions',
      'Monthly Search Console Performance Summary'
    ],
    toolsUsed: ['SEMrush', 'Google Search Console', 'Google Analytics 4', 'Microsoft Clarity'],
    localFocus: 'Palani, Dindigul, Coimbatore, and across Tamil Nadu',
    seoTitle: 'SEO Services in Palani | Freelance SEO | SURIYADEVAN S',
    metaDescription: 'Data-driven On-Page, Off-Page & Organic SEO services in Palani by SURIYADEVAN S. Boost keyword rankings, organic traffic & Google visibility. Hire today!',
    focusKeyword: 'SEO Services in Palani',
    faqs: [
      {
        question: 'What does an SEO specialist do?',
        answer: 'An SEO specialist analyzes website structure, researches search keywords, optimizes on-page content, and resolves technical barriers so search engines like Google can easily crawl, index, and rank your web pages for relevant customer queries.'
      },
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a compounding marketing strategy. While technical and indexing fixes show improvements in Google Search Console within weeks, significant organic keyword ranking and traffic growth typically materialize over 3 to 6 months of consistent optimization.'
      },
      {
        question: 'Do you provide SEO services for businesses outside Palani?',
        answer: 'Yes. While I am physically based in Palani, Tamil Nadu, I work remotely with clients across Tamil Nadu, all over India, and internationally.'
      }
    ]
  },
  {
    id: 'serv-2',
    slug: 'local-seo',
    name: 'Local SEO Services',
    shortDescription: 'Dominate Google Maps and local 3-pack searches for high-intent nearby customers searching in Palani and Tamil Nadu.',
    fullDescription: 'Local SEO connects your business with customers in your immediate geographic area who are actively searching for your services. By optimizing your Google Business Profile, local keyword signals, NAP consistency, and localized landing pages, I ensure your business stands out on Google Maps and local search results.',
    h1: 'Local SEO Services in Palani',
    targetAudience: 'Retail shops, clinics, showrooms, hotels, restaurants, interior designers, service contractors, and small businesses in Palani and nearby towns.',
    keyFeatures: [
      'Google Business Profile (formerly GMB) Setup & Complete Optimization',
      'Local Keyword Research (near me and city-specific queries)',
      'NAP (Name, Address, Phone) Consistency Across Citations',
      'Local Landing Page Content Structuring',
      'Google Maps 3-Pack Visibility Optimization',
      'Review Strategy & Online Reputation Management Support'
    ],
    processSteps: [
      { title: '1. Local Discovery & Audit', description: 'Assessing your current Google Maps ranking, profile completeness, and competitor positions.' },
      { title: '2. Profile Optimization', description: 'Optimizing business categories, service lists, high-res photos, and operating hours.' },
      { title: '3. Local Keyword Integration', description: 'Weaving Palani and regional geographic keywords naturally into page copy and descriptions.' },
      { title: '4. Citation & NAP Alignment', description: 'Ensuring your business details match identically everywhere online.' },
      { title: '5. Ongoing Review & Posts', description: 'Guiding customer review acquisition and publishing timely Google Business updates.' }
    ],
    deliverables: [
      'Optimized Google Business Profile',
      'Local Keyword Ranking Blueprint',
      'Local Citation Directory Audit',
      'Review Acquisition Framework'
    ],
    toolsUsed: ['Google Business Profile', 'Google Maps', 'Google Search Console'],
    localFocus: 'Palani, Oddanchatram, Dharapuram, Udumalpet, Dindigul',
    seoTitle: 'Local SEO Services in Palani | Google Maps | SURIYADEVAN S',
    metaDescription: 'Rank #1 on Google Maps in Palani. Expert Local SEO, Google Business Profile optimization, local citations & review strategy by SURIYADEVAN S. Call today!',
    focusKeyword: 'Local SEO Services in Palani',
    faqs: [
      {
        question: 'What is Local SEO and how does it help a local business?',
        answer: 'Local SEO optimizes your online presence so your business appears when people search for products or services in your specific town or city. It helps drive foot traffic, local phone calls, and direct inquiries from nearby buyers.'
      },
      {
        question: 'What types of Palani businesses benefit from Local SEO?',
        answer: 'Retail stores, furniture and home appliance showrooms, clinics, hospitals, restaurants, local educational institutions, architecture firms, and repair services in Palani greatly benefit from Local SEO.'
      }
    ]
  },
  {
    id: 'serv-3',
    slug: 'technical-seo',
    name: 'Technical SEO',
    shortDescription: 'Ensure search engine crawlers can index and render your website smoothly without performance bottlenecks or crawl errors.',
    fullDescription: 'Technical SEO forms the bedrock of every successful organic search strategy. If search engine spiders encounter broken redirects, slow page speeds, canonical confusion, or invalid robots instructions, even exceptional content cannot rank. I inspect and refine your technical architecture to secure maximum crawl efficiency.',
    h1: 'Technical SEO & Website Performance in Palani',
    targetAudience: 'Websites facing indexation issues, drops in organic impressions, slow loading speeds, or complex CMS migrations.',
    keyFeatures: [
      'Comprehensive Crawl Audit (Screaming Frog / SEMrush)',
      'XML Sitemap Configuration & Validation',
      'Robots.txt Crawl Directive Optimization',
      'Canonicalization & Duplicate Content Resolution',
      'Core Web Vitals & PageSpeed Insights Diagnostics',
      'Structured Data & Schema Markup Implementation'
    ],
    processSteps: [
      { title: '1. Diagnostic Crawl', description: 'Executing a deep bot simulation to catch status code errors and redirect chains.' },
      { title: '2. Indexation Hygiene', description: 'Ensuring only high-value, canonical pages are indexed while pruning orphan pages.' },
      { title: '3. Performance Analysis', description: 'Pinpointing render-blocking scripts, unoptimized assets, and layout shifts.' },
      { title: '4. Schema Integration', description: 'Adding valid JSON-LD schema (Organization, Service, FAQ, Article) for rich snippets.' }
    ],
    deliverables: [
      'Technical SEO Audit Spreadsheet',
      'Robots.txt & XML Sitemap Blueprint',
      'Schema JSON-LD Code Templates',
      'Core Web Vitals Improvement Roadmap'
    ],
    toolsUsed: ['Google Search Console', 'PageSpeed Insights', 'Microsoft Clarity', 'SEMrush'],
    localFocus: 'Palani, Tamil Nadu, and Remote Clients',
    seoTitle: 'Technical SEO Consultant in Palani | SURIYADEVAN S',
    metaDescription: 'Resolve crawl errors, improve Core Web Vitals, site speed & indexation with technical SEO in Palani by SURIYADEVAN S. Audit your website for Google ranking!',
    focusKeyword: 'Technical SEO Consultant',
    faqs: [
      {
        question: 'What is technical SEO and why is it essential?',
        answer: 'Technical SEO focuses on server and code optimizations that make it easier for search engines to crawl, understand, and index your website. Without sound technical SEO, content may remain unindexed or rank poorly.'
      }
    ]
  },
  {
    id: 'serv-4',
    slug: 'social-media-management',
    name: 'Social Media Management',
    shortDescription: 'Strategic social media planning, eye-catching posters, and engaging Reels concepts to build your brand presence.',
    fullDescription: 'Build an authentic, consistent digital brand presence across Instagram, Facebook, and LinkedIn. I develop cohesive content calendars, craft promotional and educational posters, and outline high-retention Reels concepts that connect with your target market.',
    h1: 'Social Media Management Services in Palani',
    targetAudience: 'Brands and businesses wanting consistent, professional social media posting without the daily operational burden.',
    keyFeatures: [
      'Monthly Social Media Content Calendars',
      'Custom Social Media Poster Design (Promotions, Tips, Offers)',
      'Engaging Short-Form Reels Concepts with Hooks & CTAs',
      'Targeted Captions and Hashtag Optimization',
      'Brand Visual Consistency & Typography Alignment',
      'Engagement & Performance Tracking'
    ],
    processSteps: [
      { title: '1. Brand Persona & Audience Study', description: 'Defining visual style, tone of voice, and customer content preferences.' },
      { title: '2. Monthly Content Calendar', description: 'Planning a structured mix of promotional, educational, and engagement posts.' },
      { title: '3. Creative Asset Production', description: 'Designing clean graphic posters and scripting impactful Reels hooks.' },
      { title: '4. Publishing & Monitoring', description: 'Scheduling content at optimal times and tracking reach and interaction.' }
    ],
    deliverables: [
      'Monthly Editorial Content Calendar',
      'Custom Branded Graphic Posters',
      'Short-Form Video / Reels Scripts & Shot Lists',
      'Monthly Reach & Follower Growth Summary'
    ],
    toolsUsed: ['Adobe Express', 'Hootsuite', 'Meta Business Suite', 'Canva'],
    localFocus: 'Palani, Dindigul, Pollachi, Coimbatore, Tamil Nadu',
    seoTitle: 'Social Media Management in Palani | SURIYADEVAN S',
    metaDescription: 'Grow your brand on Instagram & Facebook in Palani. Custom poster design, viral Reels strategy & engagement management by SURIYADEVAN S. Boost your reach!',
    focusKeyword: 'Social Media Management Palani',
    faqs: [
      {
        question: 'How do social media posters and Reels help local businesses?',
        answer: 'They keep your brand top-of-mind, communicate seasonal offers, educate customers about your expertise, and attract followers who can convert into repeat local buyers.'
      }
    ]
  },
  {
    id: 'serv-5',
    slug: 'meta-ads',
    name: 'Meta Ads Management',
    shortDescription: 'Targeted Facebook and Instagram advertising campaigns built for lead generation, foot traffic, and product sales.',
    fullDescription: 'Maximize your advertising return on investment across Facebook and Instagram. I design structured ad campaigns with granular audience targeting, persuasive ad copy, and strategic creative testing to deliver qualified inquiries without wasting ad spend.',
    h1: 'Meta Ads Management for Businesses',
    targetAudience: 'Local service businesses, showrooms, clinics, and e-commerce stores looking for reliable inquiries and sales.',
    keyFeatures: [
      'Meta Business Suite & Ads Manager Setup',
      'Audience Research & Geographic Radius Targeting',
      'Compelling Ad Copywriting & Value Propositions',
      'A/B Creative & Headline Testing',
      'Lead Generation & WhatsApp Inquiry Campaigns',
      'Budget Management & Campaign Optimization'
    ],
    processSteps: [
      { title: '1. Campaign Objective Mapping', description: 'Selecting the exact campaign objective (Leads, Traffic, Awareness, Messages).' },
      { title: '2. Audience Segmentation', description: 'Targeting specific demographics, geographic boundaries, and interest clusters.' },
      { title: '3. Creative & Copy Crafting', description: 'Developing arresting visuals and clear call-to-action copy.' },
      { title: '4. Monitoring & Budget Scaling', description: 'Refining low-cost ad sets and pausing underperforming creatives.' }
    ],
    deliverables: [
      'Meta Campaign Strategy Plan',
      'Ad Creatives & Copy Variations',
      'Audience Targeting Configuration',
      'Campaign Performance Analysis'
    ],
    toolsUsed: ['Meta Ads Manager', 'Meta Business Suite', 'Google Analytics 4'],
    localFocus: 'Palani, Tamil Nadu, and All-India Campaigns',
    seoTitle: 'Meta Ads Specialist in Palani | Facebook & Instagram Ads',
    metaDescription: 'High-ROAS Meta Ads management in Palani by SURIYADEVAN S. Targeted Facebook & Instagram ad campaigns that drive qualified local leads, sales & conversions.',
    focusKeyword: 'Meta Ads Specialist Palani',
    faqs: [
      {
        question: 'Do you guarantee specific lead numbers or ROAS?',
        answer: 'No ethical digital marketer guarantees exact revenue or lead volume, as market variables, pricing, and product demand play major roles. However, I use rigorous audience testing, data-backed targeting, and continuous optimization to maximize your advertising efficiency.'
      }
    ]
  },
  {
    id: 'serv-6',
    slug: 'google-business-profile',
    name: 'Google Business Profile Optimization',
    shortDescription: 'Turn local Google searches into calls, directions, and website visits with complete profile management.',
    fullDescription: 'Your Google Business Profile is often the very first impression potential customers have of your company. I perform comprehensive profile auditing, category refinement, service cataloging, and local optimization so your business gains prominent placement in Google Maps and local 3-pack results.',
    h1: 'Google Business Profile Optimization in Palani',
    targetAudience: 'Brick-and-mortar stores, professional practices, and local service companies in Palani and surrounding regions.',
    keyFeatures: [
      'Complete Profile Audit & Verification Assistance',
      'Primary & Secondary Category Optimization',
      'Detailed Service & Product Cataloging',
      'Geo-Tagged Photo Uploads & Visual Presentation',
      'Regular Google Business Updates & Posts',
      'Reputation Management & Review Response Guidance'
    ],
    processSteps: [
      { title: '1. Profile Diagnostic', description: 'Checking verification status, NAP consistency, and existing ranking radius.' },
      { title: '2. Category & Attribute Tuning', description: 'Selecting the precise business categories that trigger local search results.' },
      { title: '3. Visual & Service Cataloging', description: 'Adding clear service pricing, descriptions, and high-quality photography.' },
      { title: '4. Ongoing Local Activity', description: 'Publishing regular posts to signal active business operations to Google.' }
    ],
    deliverables: [
      'Fully Optimized Google Business Profile',
      'Review Strategy Guidance Document',
      'Monthly Profile Performance Insights (Calls, Views, Directions)'
    ],
    toolsUsed: ['Google Business Profile', 'Google Maps'],
    localFocus: 'Palani and Tamil Nadu',
    seoTitle: 'Google Business Profile in Palani | SURIYADEVAN S',
    metaDescription: 'Optimize your Google Business Profile in Palani. Get more phone calls, foot traffic & store directions on Google Maps with expert setup by SURIYADEVAN S.',
    focusKeyword: 'Google Business Profile Optimization in Palani',
    faqs: [
      {
        question: 'Was Google Business Profile formerly called Google My Business?',
        answer: 'Yes. Google rebranded Google My Business (GMB) to Google Business Profile (GBP), with management centered directly within Google Search and Google Maps.'
      }
    ]
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'local-seo-guide-palani-businesses',
    title: 'How Local Businesses in Palani Can Rank Higher on Google Maps and Local Search',
    category: 'Local SEO',
    excerpt: 'A practical, step-by-step Local SEO guide for business owners in Palani, Tamil Nadu, seeking more calls, store visits, and local inquiries.',
    publishDate: '2025-01-15',
    modifiedDate: '2025-02-10',
    readingTime: '6 min read',
    author: 'SURIYADEVAN S',
    focusKeyword: 'Local SEO Palani',
    secondaryKeywords: ['Google Maps Ranking Palani', 'Google Business Profile Palani', 'Local Business SEO Tamil Nadu'],
    searchIntent: 'Informational',
    metaTitle: 'How Palani Businesses Rank #1 on Google Maps | SEO Guide',
    metaDescription: 'Step-by-step Local SEO guide for businesses in Palani, Tamil Nadu. Learn Google Business Profile optimization, local citations & ranking in the Local 3-Pack.',
    status: 'published',
    content: `
When potential customers in Palani need a service, a clinic, or a showroom, the first thing they do is pick up their smartphone and search Google for queries like *"best furniture store near me"* or *"top clinic in Palani"*.

If your business does not show up in the top three results—commonly known as the **Google Local 3-Pack**—those customers go straight to your competitors.

### 1. Claim and Complete Your Google Business Profile
Your Google Business Profile is the absolute foundation of your local presence. Make sure every single field is filled out accurately:
* **Business Name**: Use your real legal business name. Avoid stuffing extra keywords into the title, as Google may suspend the profile.
* **Exact Address & Service Area**: Pinpoint your location accurately so customers can get one-click directions.
* **Primary Category**: Choosing the most accurate primary category (e.g., *Interior Designer* vs *Architect*) accounts for a large portion of local ranking factors.

### 2. Maintain Strict NAP Consistency
NAP stands for **Name, Address, and Phone Number**. If your phone number or street name is written one way on your website, a different way on Facebook, and another way on Justdial, search engines lose confidence in your location data. Maintain strict uniformity across every public listing.

### 3. Solicit Real Customer Reviews Regularly
Reviews are both a vital ranking signal and a primary conversion trigger. Encourage satisfied local clients to leave authentic reviews mentioning the specific service they received. Always reply professionally to every review, whether positive or constructive.

### 4. Create Palani-Centric Website Content
If you have a website, ensure you have dedicated service pages addressing your local audience. Mentioning nearby areas like Dindigul, Oddanchatram, or Dharapuram contextually helps search engines understand your true operational geography.
    `,
    faqs: [
      {
        question: 'Why is Google Business Profile important for Palani retailers?',
        answer: 'Most local purchases in Palani begin with a smartphone search on Google Maps. Having a verified, fully optimized profile ensures you appear at the exact moment customers are looking to buy.'
      }
    ],
    relatedServices: ['local-seo', 'google-business-profile']
  },
  {
    id: 'blog-2',
    slug: 'technical-seo-essentials-wordpress',
    title: 'Technical SEO Essentials for WordPress: A Checklist for Small Businesses',
    category: 'Technical SEO',
    excerpt: 'Avoid common technical pitfalls on WordPress sites. Learn how crawlability, permalink structure, and speed impact your Google search rankings.',
    publishDate: '2025-01-28',
    modifiedDate: '2025-02-14',
    readingTime: '5 min read',
    author: 'SURIYADEVAN S',
    focusKeyword: 'WordPress Technical SEO',
    secondaryKeywords: ['WordPress SEO Checklist', 'Core Web Vitals WordPress', 'Site Speed SEO'],
    searchIntent: 'Informational',
    metaTitle: 'WordPress Technical SEO Checklist | SURIYADEVAN S',
    metaDescription: 'Complete WordPress technical SEO checklist: fix crawl errors, optimize permalinks, speed up Core Web Vitals, and boost Google indexation for higher rankings.',
    status: 'published',
    content: `
WordPress powers over 40% of the web, making it one of the most popular content management systems for businesses in India. However, an out-of-the-box WordPress installation often suffers from bloat, duplicate category pages, and crawl inefficiencies.

### 1. Clean Permalinks Structure
By default, some WordPress themes generate cryptic URLs. Navigate to *Settings > Permalinks* and select the **Post name** structure (\`/%postname%/\`). This produces clean, human-readable URLs that search engine bots can easily parse.

### 2. Configure XML Sitemaps Correctly
Your XML sitemap is a roadmap for Googlebot. Ensure that your sitemap only includes canonical, indexable public pages. Exclude tag archives, date-based archives, and admin endpoints that dilute your crawl budget.

### 3. Optimize High-Resolution Images
Large uncompressed image files are the primary cause of slow Core Web Vitals scores. Compress images before uploading, adopt WebP formats where appropriate, and specify image width and height attributes to prevent cumulative layout shifts (CLS).

### 4. Manage Canonical Tags to Avoid Duplication
WordPress often generates multiple paths to the same article (e.g., category archives vs. main blog URLs). Implementing self-referencing canonical tags prevents duplicate content confusion and consolidates ranking authority.
    `,
    faqs: [
      {
        question: 'Does WordPress require an SEO plugin?',
        answer: 'While plugins assist in setting titles and generating sitemaps, true technical SEO relies on proper site architecture, clean code, fast hosting, and structured content.'
      }
    ],
    relatedServices: ['technical-seo', 'seo']
  },
  {
    id: 'blog-3',
    slug: 'search-intent-vs-keyword-density',
    title: 'Why Search Intent Matters Far More Than Keyword Density in Modern SEO',
    category: 'SEO Strategy',
    excerpt: 'Discover why repeating keywords is an outdated practice and how understanding user search intent unlocks sustainable top-page rankings.',
    publishDate: '2025-02-05',
    modifiedDate: '2025-02-20',
    readingTime: '7 min read',
    author: 'SURIYADEVAN S',
    focusKeyword: 'Search Intent SEO',
    secondaryKeywords: ['Keyword Research Strategy', 'On Page SEO Techniques', 'Content Optimization Guide'],
    searchIntent: 'Informational',
    metaTitle: 'Search Intent vs Keyword Density in SEO | SURIYADEVAN S',
    metaDescription: 'Why search intent beats keyword density in modern SEO. Learn how to align content with user problems to achieve sustainable #1 rankings on Google search.',
    status: 'published',
    content: `
Years ago, search engine optimization often involved calculating a "keyword density percentage" and repeating target terms multiple times across a page. In modern search environments powered by natural language processing and AI, this approach is not only ineffective—it actively harms user experience.

### Understanding the 4 Search Intent Types
Every Google query stems from an underlying user objective:
1. **Informational Intent**: The searcher wants to learn something (e.g., *"what is local SEO"*).
2. **Navigational Intent**: The searcher wants to find a specific brand or website (e.g., *"SURIYADEVAN LinkedIn"*).
3. **Commercial Investigation**: The searcher is comparing options or looking for reviews before making a purchase decision (e.g., *"best SEO specialist in Palani"*).
4. **Transactional Intent**: The searcher is ready to hire or purchase (e.g., *"hire freelance SEO consultant"*).

### Aligning Page Content to Intent
When you map out your website, every page must answer the specific intent of the target query:
* Blog articles should thoroughly answer questions without aggressive hard-selling early in the text.
* Service pages should clearly lay out what is included, tools used, deliverables, and how to get in touch.

When search engines see users finding exactly what they need on your page without bouncing back to search results, your rankings stabilize at the top.
    `,
    faqs: [
      {
        question: 'What happens if you keyword-stuff a page?',
        answer: 'Google algorithms recognize unnatural text patterns. Keyword-stuffed pages deliver poor readability and risk algorithmic ranking penalties.'
      }
    ],
    relatedServices: ['seo']
  }
];

export const initialFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who is SURIYADEVAN S?',
    answer: 'SURIYADEVAN S is an SEO and Digital Marketing Executive based in Palani, Tamil Nadu, India. He specializes in end-to-end SEO, Local SEO, Technical SEO, Social Media Marketing, Meta Ads, and Google Business Profile optimization for growing businesses.',
    category: 'General',
    featured: true
  },
  {
    id: 'faq-2',
    question: 'What SEO services does SURIYADEVAN provide?',
    answer: 'Services include On-Page SEO, Off-Page SEO & link building, Technical SEO audits, Local SEO and Google Business Profile optimization, Keyword Research, Content Optimization, and Analytics integration (GA4, GSC, GTM, Microsoft Clarity).',
    category: 'SEO',
    featured: true
  },
  {
    id: 'faq-3',
    question: 'Does SURIYADEVAN provide SEO services in Palani and nearby areas?',
    answer: 'Yes. SURIYADEVAN is located in Palani, Tamil Nadu, and actively works with businesses in Palani, Dindigul, Oddanchatram, Dharapuram, Udumalpet, Pollachi, Coimbatore, Madurai, across Tamil Nadu, and nationwide.',
    category: 'Local SEO',
    featured: true
  },
  {
    id: 'faq-4',
    question: 'What is Local SEO and why does my business need it?',
    answer: 'Local SEO optimizes your digital presence to attract customers from relevant local searches on Google and Google Maps. For brick-and-mortar stores, clinics, showrooms, and service providers, it is the most cost-effective way to generate direct phone calls, map directions, and customer visits.',
    category: 'Local SEO',
    featured: true
  },
  {
    id: 'faq-5',
    question: 'Can you guarantee first-page Google rankings?',
    answer: 'No ethical or professional SEO specialist can guarantee specific #1 positions on Google, as Google uses hundreds of dynamic algorithms and search results vary by user location and history. However, I use verified, white-hat strategies, technical best practices, and data-driven methods that consistently improve organic search visibility and rankings.',
    category: 'SEO',
    featured: true
  },
  {
    id: 'faq-6',
    question: 'Do you manage Meta Ads (Facebook & Instagram Ads)?',
    answer: 'Yes. I design, launch, and optimize Meta advertising campaigns focused on local customer acquisition, lead generation, and brand awareness with disciplined budget management and A/B creative testing.',
    category: 'Social Media & Ads',
    featured: true
  },
  {
    id: 'faq-7',
    question: 'How do we begin working together?',
    answer: 'You can reach out through the contact form, email suriya2993@gmail.com, call/WhatsApp +91 9087571737, or connect on LinkedIn. We will discuss your website, target audience, and business goals during an initial consultation.',
    category: 'Working Together',
    featured: true
  }
];

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Digital Marketing Executive (SEO)',
    company: 'Avanexa',
    period: 'Recent',
    location: 'Tamil Nadu, India',
    type: 'Full-time',
    responsibilities: [
      'Managed 5 SEO projects end-to-end with full lifecycle responsibility.',
      'Achieved Google first-page rankings through On-Page, Off-Page, Local SEO, and Technical SEO strategies.',
      'Increased organic traffic and engagement through website content, meta tags, and site-structure optimization.',
      'Created SEO-friendly blog content using AI tools based on keyword research and search intent.',
      'Managed social media content calendars and created branded social media posters.',
      'Integrated and managed Google Search Console, Google Tag Manager, Google Analytics 4, and Microsoft Clarity for user-behavior analysis.',
      'Used performance data to optimize on-site SEO elements and improve search rankings.'
    ]
  },
  {
    id: 'exp-2',
    role: 'SEO & Digital Marketing Intern',
    company: 'Cannibals Media',
    period: 'Internship',
    location: 'Tamil Nadu, India',
    type: 'Internship',
    responsibilities: [
      'Managed Google My Business / Google Business Profile listings for diverse client accounts.',
      'Supported Online Reputation Management (ORM) activities and monitored customer reviews.',
      'Optimized business listings to improve local SEO and brand presence.',
      'Supported digital platform visibility across multiple online marketing channels.'
    ]
  }
];

export const initialEducation = {
  degree: 'Bachelor of Commerce (Computer Applications)',
  institution: 'Rev. Jacob Memorial Christian College',
  period: '2021 – 2024',
  location: 'Tamil Nadu, India'
};

export const initialCertifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Search Engine Marketing',
    issuer: 'Simplilearn',
    year: 'Verified',
  },
  {
    id: 'cert-2',
    title: 'Google Digital Marketing & E-commerce',
    issuer: 'Coursera',
    year: 'Verified',
  },
  {
    id: 'cert-3',
    title: 'Meta Social Media Marketing',
    issuer: 'Coursera',
    year: 'Verified',
  },
  {
    id: 'cert-4',
    title: 'Digital Marketing & Business Analytics',
    issuer: 'KGiSL MicroCollege',
    year: '2025',
  }
];

export const toolsAndTech = [
  { name: 'Google Search Console', category: 'SEO & Indexing' },
  { name: 'Google Analytics 4', category: 'Analytics' },
  { name: 'Google Tag Manager', category: 'Tag Management' },
  { name: 'Microsoft Clarity', category: 'User Behavior' },
  { name: 'SEMrush', category: 'Keyword & Competitor Research' },
  { name: 'Google Business Profile', category: 'Local SEO' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Meta Ads Manager', category: 'Paid Advertising' },
  { name: 'Adobe Express', category: 'Creative Design' },
  { name: 'Hootsuite', category: 'Social Media Management' },
  { name: 'Mailchimp', category: 'Email Marketing' }
];

export const initialSocialMediaItems: SocialMediaItem[] = [
  {
    id: 'sm-1',
    type: 'reel',
    title: 'Why Palani Walking Pilgrims Need Early Hydration & Footwear Tips',
    platform: 'Instagram',
    clientName: 'Palani Health & Ortho Clinic',
    caption: 'Viral informative reel created for Palani Health & Ortho Clinic during Thai Poosam festival season. Targeted local pilgrims and residents with actionable wellness tips.',
    metrics: {
      views: '54.2K',
      likes: '2,840',
      reach: '72K',
      engagementRate: '6.8%'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://instagram.com',
    publishDate: '2024-02-14',
    tags: ['Reels', 'Local Healthcare', 'Instagram Growth', 'Palani'],
    featured: true
  },
  {
    id: 'sm-2',
    type: 'carousel',
    title: '5 Costly Mistakes Palani Small Businesses Make with Local Google Maps',
    platform: 'LinkedIn',
    clientName: 'SURIYADEVAN S Digital Advisory',
    caption: 'Educational 7-slide carousel breaking down Google Business Profile audit secrets for retail owners in Dindigul and Palani districts.',
    metrics: {
      views: '12.4K',
      likes: '480',
      reach: '18.5K',
      engagementRate: '8.2%'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://linkedin.com',
    publishDate: '2024-03-02',
    tags: ['Carousel', 'B2B LinkedIn', 'SEO Strategy', 'Local Business'],
    featured: true
  },
  {
    id: 'sm-3',
    type: 'reel',
    title: 'Top 3 Scenic Spots & Homestays near Palani Hill Temple You Missed',
    platform: 'Instagram',
    clientName: 'GreenPalani Temple Stays',
    caption: 'High-energy fast-cut Instagram reel highlighting clean budget family suites near Adivaram with drone b-roll hooks and direct WhatsApp booking CTA.',
    metrics: {
      views: '88.6K',
      likes: '4,610',
      reach: '115K',
      engagementRate: '7.9%'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://instagram.com',
    publishDate: '2024-04-18',
    tags: ['Reels', 'Hospitality', 'Tourism', 'Viral Marketing'],
    featured: true
  },
  {
    id: 'sm-4',
    type: 'post',
    title: 'Diwali Festival Flash Sale Creative & Meta Ad Creative Set',
    platform: 'Facebook',
    clientName: 'Sri Amman Silks & Sarees',
    caption: 'Creative poster series designed in Tamil & English with high-contrast typography and localized ad targeting in Palani, Udumalpet, and Dharapuram.',
    metrics: {
      views: '32.1K',
      likes: '1,420',
      reach: '44K',
      engagementRate: '5.6%'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://facebook.com',
    publishDate: '2024-10-25',
    tags: ['Meta Ads', 'Festive Offer', 'Static Creative', 'Retail'],
    featured: false
  },
  {
    id: 'sm-5',
    type: 'reel',
    title: 'Behind The Scenes: How We Optimised A Website In 48 Hours',
    platform: 'YouTube Shorts',
    clientName: 'SURIYADEVAN S SEO',
    caption: 'Fast-paced screen recording walkthrough breaking down Core Web Vitals fixes and PageSpeed optimization from 42 to 94 on mobile.',
    metrics: {
      views: '24.8K',
      likes: '1,150',
      reach: '36K',
      engagementRate: '9.1%'
    },
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://youtube.com',
    publishDate: '2024-11-10',
    tags: ['YouTube Shorts', 'Tech SEO', 'Behind the Scenes'],
    featured: false
  }
];

export const initialMetaCampaigns: MetaAdCampaign[] = [
  {
    id: 'meta-1',
    clientName: 'Sri Amman Silks & Sarees',
    campaignName: 'Diwali Festive Sarees Direct WhatsApp Lead Gen',
    objective: 'Lead Generation',
    status: 'Completed',
    dateRange: 'Oct 10 - Oct 31, 2024',
    location: 'Palani, Udumalpet, Dharapuram (Radius 35 km)',
    budgetSpent: '₹14,500',
    results: {
      leadsGenerated: 342,
      purchases: 89,
      roas: '5.8x',
      costPerResult: '₹42.39 / lead',
      impressions: '184,000',
      reach: '98,500',
      clicks: '5,210',
      ctr: '2.83%'
    },
    creatives: [
      {
        id: 'c-1',
        type: 'reel',
        title: 'Diwali Silk Saree Draping Hook Reel (Tamil Audio)',
        headline: 'Exclusive Pure Kanchipuram Soft Silks from ₹1,999/-',
        description: 'Instant WhatsApp catalog link with free home delivery across Palani & Dindigul.',
        mediaUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
        platform: 'Both'
      },
      {
        id: 'c-2',
        type: 'post',
        title: 'Festival Offer Carousel & Price Tag Grid',
        headline: 'Diwali Mega Dhamaka - Flat 25% Off',
        description: 'Single-click WhatsApp direct chat with showroom stylist.',
        mediaUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80',
        platform: 'Facebook'
      }
    ],
    notes: 'Optimized via Advantage+ placements with localized Tamil ad copy and high-intent women demographic targeting (24-55).',
    reportSummary: 'Generated 342 validated WhatsApp buyer leads resulting in 89 direct showroom retail transactions and a 5.8x Return on Ad Spend (ROAS).'
  },
  {
    id: 'meta-2',
    clientName: 'Palani Health & Ortho Speciality Clinic',
    campaignName: 'Joint Pain & Arthritis Free Health Camp Registration',
    objective: 'Lead Generation',
    status: 'Completed',
    dateRange: 'Jan 05 - Jan 22, 2025',
    location: 'Palani & Surrounding Taluks (Radius 25 km)',
    budgetSpent: '₹9,800',
    results: {
      leadsGenerated: 218,
      purchases: 145,
      roas: '4.2x',
      costPerResult: '₹44.95 / booking',
      impressions: '112,000',
      reach: '64,200',
      clicks: '3,890',
      ctr: '3.47%'
    },
    creatives: [
      {
        id: 'c-3',
        type: 'reel',
        title: 'Doctor Explains 3 Morning Knee Pain Warning Signs (Reel)',
        headline: 'Book Consultation with Senior Ortho Surgeon in Palani',
        description: 'Instant registration form with automated SMS & WhatsApp appointment confirmation.',
        mediaUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
        platform: 'Both'
      },
      {
        id: 'c-4',
        type: 'post',
        title: 'Free Camp Date, Time & Doctor Credentials Flyer Post',
        headline: 'Limited 50 Slots Daily - Reserve Your Token',
        description: 'Palani Bus Stand Road Clinic, Tamil Nadu.',
        mediaUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80',
        platform: 'Facebook'
      }
    ],
    notes: 'Zero friction native Meta Instant Forms with automated webhook trigger to clinic staff desk.',
    reportSummary: 'Generated 218 verified patient appointments within 17 days, maintaining a low ₹44.95 cost per appointment.'
  },
  {
    id: 'meta-3',
    clientName: 'GreenPalani Temple Stays & Cottages',
    campaignName: 'Weekend Temple Visit Room Bookings Campaign',
    objective: 'Conversions',
    status: 'Active',
    dateRange: 'Feb 01 - Ongoing',
    location: 'Coimbatore, Madurai, Tiruppur, Bangalore, Chennai',
    budgetSpent: '₹18,200',
    results: {
      leadsGenerated: 285,
      purchases: 112,
      roas: '6.4x',
      costPerResult: '₹63.85 / booking',
      impressions: '240,000',
      reach: '142,000',
      clicks: '7,450',
      ctr: '3.10%'
    },
    creatives: [
      {
        id: 'c-5',
        type: 'reel',
        title: '30-sec Aesthetic Room Tour with Temple Hill View (Reel)',
        headline: '5 Mins from Palani Murugan Temple - Family AC Suites',
        description: 'Book direct and save 20% on weekend tariff with pure vegetarian breakfast included.',
        mediaUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
        platform: 'Instagram'
      }
    ],
    notes: 'Targeting travelers with interests in Murugan temples, devotional tourism, and weekend getaways in Tamil Nadu & Karnataka.',
    reportSummary: 'Achieved a stellar 6.4x ROAS with 112 confirmed weekend cottage bookings and 285 total inquiries.'
  }
];
