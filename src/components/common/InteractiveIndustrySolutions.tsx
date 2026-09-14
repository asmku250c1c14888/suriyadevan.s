import React, { useState } from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Utensils, 
  Hotel, 
  HeartPulse, 
  GraduationCap, 
  Sofa, 
  Factory, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  MapPin, 
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { APP_IMAGES } from '../../assets/images';
import { InteractiveImageModal } from './InteractiveImageModal';

interface IndustryData {
  id: string;
  name: string;
  categoryKeyword: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  locationArea: string;
  targetQueries: string[];
  painPoint: string;
  solution: string;
  provenDeliverables: string[];
  expectedImpact: string;
  whatsappPreset: string;
}

export const InteractiveIndustrySolutions: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('textile');
  const [modalImage, setModalImage] = useState<{ url: string; title: string; subtitle: string } | null>(null);

  const industries: IndustryData[] = [
    {
      id: 'textile',
      name: 'Textile & Clothing Shops',
      categoryKeyword: 'digital marketing for textile shops Palani',
      icon: ShoppingBag,
      image: APP_IMAGES.localRetail,
      locationArea: 'Gandhi Road, Palani Bus Stand & Bazaar Streets',
      targetQueries: [
        'digital marketing for textile shops Palani',
        'digital marketing for shops Palani',
        'saree showroom Instagram marketing Palani',
        'local SEO for retail stores Palani'
      ],
      painPoint: 'Relying solely on local foot traffic while shoppers increasingly browse Instagram Reels and search Google Maps for festival silk sarees and wedding collections.',
      solution: 'High-aesthetic Instagram Reels showing latest fabric arrivals, localized Meta ad carousels with WhatsApp chat buttons, and Google Maps #1 rank for shoppers searching in Palani and Oddanchatram.',
      provenDeliverables: [
        'Targeted Click-to-WhatsApp Meta Ads for new festival arrivals',
        'Google Business Profile setup with photo geotagging on Gandhi Road',
        'Instagram Reels script & poster designs for festive promotions',
        'Local SEO mapping for wedding collections & silk sarees'
      ],
      expectedImpact: '3x-5x increase in WhatsApp inquiries & immediate showroom weekend foot traffic.',
      whatsappPreset: 'Hi Suriyadevan, I run a textile/clothing shop in Palani and want to discuss digital marketing and Google Maps ranking.'
    },
    {
      id: 'hotels',
      name: 'Hotels & Temple Stays',
      categoryKeyword: 'digital marketing for hotels Palani',
      icon: Hotel,
      image: APP_IMAGES.websiteDev,
      locationArea: 'Adivaram, Giri Veedhi, Railway Station & Dindigul Highway',
      targetQueries: [
        'digital marketing for hotels Palani',
        'digital marketing for local businesses Palani',
        'best hotel near Palani Murugan temple Google ranking',
        'Palani lodge room booking SEO'
      ],
      painPoint: 'Paying steep 20-30% commissions to aggregators while rooms sit empty on non-festival weekdays and travelers search directly on Google Maps.',
      solution: 'Direct booking Google Maps 3-Pack placement, local hotel SEO for pilgrimage seekers from Bangalore, Chennai, and Coimbatore, plus seasonal Meta Ads for peak Thai Poosam and Panguni Uthiram festivals.',
      provenDeliverables: [
        'Google Maps 3-Pack optimization for "hotels near Palani temple"',
        'Zero-commission direct booking website landing page setup',
        'Local citation synchronization across hospitality directories',
        'Seasonal Facebook & Instagram ad campaigns for weekend pilgrims'
      ],
      expectedImpact: '40%+ growth in direct phone calls and commission-free room bookings.',
      whatsappPreset: 'Hi Suriyadevan, I manage a hotel/cottage in Palani and need digital marketing to get more direct room bookings.'
    },
    {
      id: 'restaurants',
      name: 'Restaurants & Cafes',
      categoryKeyword: 'digital marketing for restaurants Palani',
      icon: Utensils,
      image: APP_IMAGES.localRetail,
      locationArea: 'Palani Town, Adivaram Road & Dindigul Bypass',
      targetQueries: [
        'digital marketing for restaurants Palani',
        'digital marketing for small business Palani',
        'best veg restaurant in Palani Google ranking',
        'food marketing agency Palani'
      ],
      painPoint: 'Thousands of tourists and daily travelers looking for authentic vegetarian meals in Palani choose whichever restaurant ranks highest with 4.5+ stars on Google Maps.',
      solution: 'Optimizing Google Maps menu listings, local appetizing photo uploads, review collection QR-codes at payment counters, and viral local food Reels showcasing specialty dishes and traditional sweets.',
      provenDeliverables: [
        'Google Business Profile digital menu upload and verification',
        'Automated review acquisition strategy for dining guests',
        'High-retention Instagram Reels concepts highlighting kitchen freshness',
        'Geo-fenced mobile ads targeting temple visitors within 5km radius'
      ],
      expectedImpact: 'Consistently full tables during peak temple timings and lunch rushes.',
      whatsappPreset: 'Hi Suriyadevan, I own a restaurant/cafe in Palani and want digital marketing and Google Maps review optimization.'
    },
    {
      id: 'hospitals',
      name: 'Hospitals & Clinics',
      categoryKeyword: 'digital marketing for hospitals Palani',
      icon: HeartPulse,
      image: APP_IMAGES.heroAgency,
      locationArea: 'Palani Municipality, Dindigul Road & New Dharapuram Road',
      targetQueries: [
        'digital marketing for hospitals Palani',
        'clinic SEO services in Palani',
        'orthopedic doctor Palani Google ranking',
        'best clinic in Palani near me'
      ],
      painPoint: 'Patients searching in distress on smartphones need quick phone numbers, verified doctor timings, and authentic reviews, but unoptimized clinics do not appear in top local searches.',
      solution: 'Healthcare local SEO, doctor credentials schema, verified emergency contact listings on Google Maps, and targeted Meta Ads for free health camps, diabetes care, and orthopedic consultations.',
      provenDeliverables: [
        'Google Business Profile with emergency call button and doctor timings',
        'Medical specialist schema markup for Google rich snippets',
        'Meta Ads targeting Palani, Oddanchatram, and Udumalpet for health checkups',
        'Clean reputation management and patient testimonial showcase'
      ],
      expectedImpact: 'Over 200+ verified monthly patient appointment inquiries and calls.',
      whatsappPreset: 'Hi Suriyadevan, I represent a hospital/clinic in Palani and want to discuss healthcare SEO and patient inquiry ads.'
    },
    {
      id: 'realestate',
      name: 'Real Estate & Builders',
      categoryKeyword: 'digital marketing for real estate Palani',
      icon: Building2,
      image: APP_IMAGES.websiteDev,
      locationArea: 'Palani Suburbs, Kodaikanal Foothills & Oddanchatram Corridor',
      targetQueries: [
        'digital marketing for real estate Palani',
        'plots for sale in Palani Google Ads',
        'villas near Palani Meta Ads',
        'interior designers Palani SEO'
      ],
      painPoint: 'High-ticket buyers and NRIs searching for farmland, villa plots near temple foothills, and construction services do not see your project unless you run targeted PPC and high-ranking landing pages.',
      solution: 'High-converting Google Ads search campaigns for "plots for sale in Palani", Meta Ads with video walkthroughs targeting buyers in Chennai, Bangalore, and Coimbatore, and mobile-friendly project showcase pages.',
      provenDeliverables: [
        'Google Ads PPC search campaigns targeting verified property buyers',
        'Meta Ads video lead forms with automated WhatsApp lead notifications',
        'High-converting property landing page with layout plans & pricing',
        'Local SEO ranking for construction and interior designers in Palani'
      ],
      expectedImpact: 'High-intent buyer leads with verified phone numbers at a low cost per lead.',
      whatsappPreset: 'Hi Suriyadevan, I am a builder/real estate promoter in Palani looking for digital marketing and Google Ads.'
    },
    {
      id: 'furniture',
      name: 'Furniture & Manufacturers',
      categoryKeyword: 'digital marketing for furniture shops Palani',
      icon: Sofa,
      image: APP_IMAGES.socialAds,
      locationArea: 'Palani Industrial Zone, Dharapuram Road & Oddanchatram',
      targetQueries: [
        'digital marketing for furniture shops Palani',
        'digital marketing for manufacturers Palani',
        'digital marketing for startups Palani',
        'affordable digital marketing services Palani'
      ],
      painPoint: 'Local workshops and showrooms lose orders to regional mega-retailers because buyers don’t realize premium custom furniture is available locally at wholesale rates.',
      solution: 'Catalog showcase ads on Facebook & Instagram, Google ranking for wholesale and custom inquiries, and WhatsApp business catalog integrations for fast order closing.',
      provenDeliverables: [
        'WhatsApp Business product catalog setup with direct checkout links',
        'Local search ranking for furniture showrooms and manufacturing units',
        'Meta carousel ads featuring living room sets and factory-direct pricing',
        'Regional SEO targeting Palani, Dharapuram, Udumalpet, and Dindigul'
      ],
      expectedImpact: 'Consistent weekly bulk orders and retail showroom visits from across 3 districts.',
      whatsappPreset: 'Hi Suriyadevan, I have a furniture shop/manufacturing business in Palani and want to grow my sales with digital marketing.'
    }
  ];

  const selectedIndustry = industries.find((i) => i.id === selectedIndustryId) || industries[0];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/80 rounded-full px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tailored Industry Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Digital Marketing for <span className="text-indigo-600">Local Businesses & Shops</span> in Palani
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every business in Palani has unique customer journeys. Select your industry below to see the exact digital marketing roadmap, target search queries, and expected business growth.
          </p>
        </div>

        {/* Industry Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                  isSelected 
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200' 
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card Showcase */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
          {/* Left Column: Strategy & Problem-Solution */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold font-mono">
                {selectedIndustry.categoryKeyword}
              </span>
              <span className="px-3 py-1 bg-slate-200/70 text-slate-700 rounded-full text-xs font-medium flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{selectedIndustry.locationArea}</span>
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedIndustry.name} in Palani & Surrounding Towns
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedIndustry.painPoint}
              </p>
            </div>

            {/* Strategic Roadmap */}
            <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>The SURIYADEVAN S Growth Strategy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedIndustry.solution}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                What We Deploy For Your Business:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedIndustry.provenDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Keywords Pill Cloud */}
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Targeted Palani Search Queries:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedIndustry.targetQueries.map((q, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-mono text-slate-600">
                    "{q}"
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/919087571737?text=${encodeURIComponent(selectedIndustry.whatsappPreset)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss {selectedIndustry.name} Strategy on WhatsApp</span>
              </a>

              <div className="text-xs text-slate-500">
                ⚡ Projected Result: <strong className="text-slate-800">{selectedIndustry.expectedImpact}</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Image Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white">
              <img
                src={selectedIndustry.image}
                alt={`${selectedIndustry.name} Digital Marketing Strategy in Palani`}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 border border-white/10">
                <MapPin className="w-3 h-3 text-indigo-400" />
                <span>Palani Market Focus</span>
              </div>

              {/* Interactive Inspect Button */}
              <button
                type="button"
                onClick={() => setModalImage({
                  url: selectedIndustry.image,
                  title: `${selectedIndustry.name} Digital Marketing Plan`,
                  subtitle: `High-resolution visual mockup for ${selectedIndustry.categoryKeyword} deployed by SURIYADEVAN S.`
                })}
                className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-xl shadow-md transition-all flex items-center space-x-1 text-xs font-bold"
              >
                <Maximize2 className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Inspect Mockup</span>
              </button>
            </div>

            {/* Micro Stats Card underneath */}
            <div className="mt-3 p-3.5 bg-white rounded-xl border border-slate-200 text-left shadow-2xs flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Search Intent Match</div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">High Commercial & Local Intent</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Agency Rate</div>
                <div className="text-xs font-bold text-emerald-600 mt-0.5">Affordable for Small Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox */}
      {modalImage && (
        <InteractiveImageModal
          isOpen={true}
          onClose={() => setModalImage(null)}
          imageUrl={modalImage.url}
          title={modalImage.title}
          subtitle={modalImage.subtitle}
          badge="Palani Industry Solution"
          metrics={[
            { label: 'Market', value: 'Palani & Region' },
            { label: 'Strategy', value: 'SEO + Meta Ads' },
            { label: 'ROI Timeline', value: '30 - 90 Days' }
          ]}
        />
      )}
    </section>
  );
};
