export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'SEO' | 'Technical SEO' | 'Local SEO' | 'Social Media' | 'Meta Ads' | 'Google Business Profile' | 'WordPress';
  client: string;
  industry: string;
  services: string[];
  overview: string;
  challenge: string;
  strategy: string;
  implementation: string[];
  tools: string[];
  resultsNote: string;
  verifiedMetrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  featured: boolean;
  status: 'published' | 'draft';
  date: string;
  location?: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  schemaType: string;
  faq?: { question: string; answer: string }[];
  relatedServices?: string[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  h1: string;
  targetAudience: string;
  keyFeatures: string[];
  processSteps: { title: string; description: string }[];
  deliverables: string[];
  toolsUsed: string[];
  localFocus?: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  publishDate: string;
  modifiedDate: string;
  readingTime: string;
  author: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Informational' | 'Commercial' | 'Navigational' | 'Transactional';
  metaTitle: string;
  metaDescription: string;
  status: 'published' | 'draft';
  faqs?: { question: string; answer: string }[];
  relatedServices?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'SEO' | 'Local SEO' | 'Social Media & Ads' | 'Working Together';
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship';
  responsibilities: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface SiteSettings {
  name: string;
  roleTitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  whatsappMessage: string;
  primaryLocations: string[];
  secondaryLocations: string[];
  googleSearchConsoleId: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  microsoftClarityId: string;
  enableTracking: boolean;
}

export interface ConversionEvent {
  id: string;
  eventType: 'contact_form_submit' | 'phone_click' | 'email_click' | 'linkedin_click' | 'whatsapp_click' | 'consultation_click' | 'project_view' | 'service_view' | 'resume_download';
  details?: string;
  timestamp: string;
}

export interface SocialMediaItem {
  id: string;
  type: 'reel' | 'post' | 'carousel';
  title: string;
  platform: 'Instagram' | 'Facebook' | 'LinkedIn' | 'YouTube Shorts';
  clientName: string;
  caption: string;
  metrics: {
    views?: string;
    likes?: string;
    reach?: string;
    engagementRate?: string;
  };
  mediaUrl?: string;
  postUrl?: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
}

export interface MetaAdCreative {
  id: string;
  type: 'reel' | 'post' | 'carousel';
  title: string;
  headline?: string;
  description?: string;
  mediaUrl?: string;
  adPreviewUrl?: string;
  platform: 'Instagram' | 'Facebook' | 'Both';
}

export interface MetaAdCampaign {
  id: string;
  clientName: string;
  campaignName: string;
  objective: 'Lead Generation' | 'Conversions' | 'Traffic' | 'Brand Awareness' | 'Sales' | 'Engagement';
  status: 'Active' | 'Completed' | 'Optimizing';
  dateRange: string;
  location: string;
  budgetSpent: string;
  results: {
    leadsGenerated?: number;
    purchases?: number;
    roas?: string;
    costPerResult?: string;
    impressions?: string;
    reach?: string;
    clicks?: string;
    ctr?: string;
  };
  creatives: MetaAdCreative[];
  notes?: string;
  reportSummary: string;
}
