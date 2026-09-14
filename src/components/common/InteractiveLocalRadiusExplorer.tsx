import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  MessageCircle,
  TrendingUp,
  Languages
} from 'lucide-react';
import { useData } from '../../context/DataContext';

interface AreaInfo {
  id: string;
  name: string;
  distance: string;
  pincode: string;
  marketProfile: string;
  keySearchQueries: string[];
  tamilHeading: string;
  tamilDescription: string;
  commercialOpportunity: string;
}

export const InteractiveLocalRadiusExplorer: React.FC = () => {
  const { navigateTo } = useData();
  const [selectedAreaId, setSelectedAreaId] = useState<string>('palani');
  const [activeLanguageTab, setActiveLanguageTab] = useState<'all' | 'english' | 'tamil'>('all');

  const areas: AreaInfo[] = [
    {
      id: 'palani',
      name: 'Palani Town & Surrounds',
      distance: '0 - 15 km (Hub)',
      pincode: '624601',
      marketProfile: 'Pilgrimage hotels, retail silk & textile showrooms, restaurants, healthcare clinics, and educational institutions.',
      keySearchQueries: [
        'digital marketing agency in Palani',
        'digital marketing company in Palani',
        'digital marketing services in Palani',
        'SEO services in Palani',
        'Google Maps SEO Palani',
        'Google Business Profile optimization Palani',
        'Google Ads agency Palani',
        'social media marketing agency Palani'
      ],
      tamilHeading: 'பழனியில் சிறந்த டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சி & எஸ்சிஓ சேவை',
      tamilDescription: 'பழனி முருகன் கோவில் பக்தர்கள் மற்றும் உள்ளூர் வாடிக்கையாளர்கள் உங்கள் கடையை Google-ல் தேடும்போது முதலிடத்தில் காட்ட எஸ்சிஓ மற்றும் கூகுள் மேப்ஸ் உத்திகள்.',
      commercialOpportunity: 'Capture tens of thousands of pilgrim visitors and everyday local buyers searching on mobile.'
    },
    {
      id: 'oddanchatram',
      name: 'Oddanchatram',
      distance: '28 km',
      pincode: '624619',
      marketProfile: 'Major South Indian vegetable wholesale market, agro-machinery suppliers, commission traders, retail businesses.',
      keySearchQueries: [
        'digital marketing agency Oddanchatram',
        'SEO services in Oddanchatram',
        'Google Maps ranking Oddanchatram',
        'digital marketing for shops Oddanchatram',
        'wholesale business website Oddanchatram'
      ],
      tamilHeading: 'ஒட்டன்சத்திரம் வர்த்தகர்கள் & விவசாய நிறுவனங்களுக்கான டிஜிட்டல் மார்க்கெட்டிங்',
      tamilDescription: 'ஒட்டன்சத்திரம் காய்கறி மார்க்கெட் வியாபாரிகள், வேளாண் இயந்திர தயாரிப்பாளர்கள் மற்றும் சில்லறை கடைகளுக்கான பிரத்யேக விளம்பரங்கள்.',
      commercialOpportunity: 'Wholesale B2B inquiry capture across Tamil Nadu and neighboring states.'
    },
    {
      id: 'dharapuram',
      name: 'Dharapuram',
      distance: '35 km',
      pincode: '638656',
      marketProfile: 'Textile spinning mills, apparel manufacturing, agricultural seed centers, jewellery showrooms, private schools.',
      keySearchQueries: [
        'digital marketing agency Dharapuram',
        'SEO services Dharapuram',
        'textile digital marketing Dharapuram',
        'Google ranking service Dharapuram',
        'social media marketing Dharapuram'
      ],
      tamilHeading: 'தாராபுரம் டெக்ஸ்டைல் & பள்ளி நிறுவனங்களுக்கான டிஜிட்டல் வளர்ச்சி',
      tamilDescription: 'தாராபுரம் ஜவுளி கடைகள், நூற்பாலைகள் மற்றும் பள்ளிகளுக்கான ஆன்லைன் பிராண்டிங் & புதிய மாணவர் சேர்க்கை விளம்பரங்கள்.',
      commercialOpportunity: 'High-ticket industrial inquiries and regional retail footfall.'
    },
    {
      id: 'udumalpet',
      name: 'Udumalpet',
      distance: '37 km',
      pincode: '642126',
      marketProfile: 'Poultry hub, windmill engineering, ecotourism lodges, paper mills, and retail showrooms.',
      keySearchQueries: [
        'digital marketing agency Udumalpet',
        'SEO services Udumalpet',
        'social media agency Udumalpet',
        'digital marketing for small business Udumalpet',
        'Google Ads services Udumalpet'
      ],
      tamilHeading: 'உடுமலைப்பேட்டை தொழில் நிறுவனங்களுக்கான ஆன்லைன் விளம்பர சேவை',
      tamilDescription: 'உடுமலை பண்ணை தயாரிப்புகள், சுற்றுலா தங்கும் விடுதிகள் மற்றும் தொழில் நிறுவனங்களுக்கான கூகுள் ரேங்கிங்.',
      commercialOpportunity: 'Capture tourism corridor travelers and agro-industry buyers.'
    },
    {
      id: 'dindigul',
      name: 'Dindigul (District HQ)',
      distance: '56 km',
      pincode: '624001',
      marketProfile: 'District headquarters, lock manufacturing, iron works, leather tanneries, biryani restaurants, colleges.',
      keySearchQueries: [
        'digital marketing agency Dindigul',
        'SEO services Dindigul',
        'social media marketing agency Dindigul',
        'website development company Dindigul',
        'digital advertising agency Dindigul'
      ],
      tamilHeading: 'திண்டுக்கல் மாவட்ட நிறுவனங்களுக்கான முழுமையான டிஜிட்டல் மார்க்கெட்டிங்',
      tamilDescription: 'திண்டுக்கல் பூட்டு, தோல் ஆலைகள், பிரியாணி உணவகங்கள் மற்றும் கல்லூரிகளுக்கான பிரத்யேக கூகுள் விளம்பரங்கள்.',
      commercialOpportunity: 'Metropolitan district-level visibility and high-volume e-commerce potential.'
    }
  ];

  const selectedArea = areas.find((a) => a.id === selectedAreaId) || areas[0];

  const tamilKeywordsList = [
    { tamil: 'பழனி டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சி', tanglish: 'digital marketing agency Palani Tamil', englishMeaning: 'Digital Marketing Agency in Palani' },
    { tamil: 'பழனி எஸ்சிஓ சேவை', tanglish: 'SEO service Palani', englishMeaning: 'SEO Services in Palani' },
    { tamil: 'கூகுள் ரேங்கிங் சர்வீஸ் பழனி', tanglish: 'Google ranking service Palani', englishMeaning: 'Google 1st-Page Ranking Service' },
    { tamil: 'கூகுள் மேப்ஸ் 3-பேக் பழனி', tanglish: 'Google Maps SEO Palani', englishMeaning: 'Google Maps 3-Pack Palani' },
    { tamil: 'பழனி சோஷியல் மீடியா மார்க்கெட்டிங்', tanglish: 'social media marketing Palani', englishMeaning: 'Social Media & Instagram Marketing Palani' },
    { tamil: 'பழனி நிறுவனங்களுக்கு இணையதள உருவாக்கம்', tanglish: 'website development company Palani', englishMeaning: 'Website & Ecommerce Development Palani' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200/80 rounded-full px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <Navigation className="w-3.5 h-3.5 text-indigo-600" />
            <span>Regional Coverage & Local Entities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Local Dominance Across <span className="text-indigo-600">Palani & Neighboring Towns</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Headquartered in Palani, SURIYADEVAN S scales local businesses across Dindigul, Tiruppur, and Coimbatore districts through hyper-localized keyword targeting.
          </p>
        </div>

        {/* Area Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {areas.map((area) => {
            const isSelected = area.id === selectedAreaId;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedAreaId(area.id)}
                className={`p-3.5 rounded-xl text-left transition-all border ${
                  isSelected 
                    ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20' 
                    : 'bg-white/80 border-slate-200 hover:border-indigo-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-bold ${isSelected ? 'text-indigo-600' : 'text-slate-900'}`}>
                    {area.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{area.distance}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 truncate">
                  Pin: {area.pincode}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Area Intelligence Panel */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">{selectedArea.name} Market Strategy</h3>
                <span className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-indigo-200/60">
                  {selectedArea.distance} from Palani Core
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {selectedArea.marketProfile}
              </p>
            </div>

            <a
              href={`https://wa.me/919087571737?text=${encodeURIComponent(`Hi Suriyadevan, I need digital marketing and SEO services for my business in ${selectedArea.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-2xs shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Grow in {selectedArea.name}</span>
            </a>
          </div>

          {/* Bilingual Tamil & English Intent Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tamil Regional Card */}
            <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/70 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-800">
                <Languages className="w-4 h-4 text-amber-700" />
                <span>தமிழ் வழியான வணிக வளர்ச்சி (Tamil Local Intent)</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {selectedArea.tamilHeading}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedArea.tamilDescription}
              </p>
            </div>

            {/* Commercial Opportunity Card */}
            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-200/70 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-indigo-800">
                <TrendingUp className="w-4 h-4 text-indigo-700" />
                <span>Commercial Opportunity in {selectedArea.name}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedArea.commercialOpportunity}
              </p>
              <div className="text-[11px] text-indigo-700 font-medium">
                Direct client delivery with transparent local Google Search Console metrics.
              </div>
            </div>
          </div>

          {/* Target Query Pills for this area */}
          <div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Ranked Search Keywords for {selectedArea.name}:
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedArea.keySearchQueries.map((query, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-mono text-slate-800 flex items-center space-x-1.5"
                >
                  <Search className="w-3 h-3 text-indigo-500" />
                  <span>"{query}"</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tamil & Tanglish Entity Cloud Bar */}
        <div className="mt-8 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
              <Languages className="w-4 h-4 text-indigo-600" />
              <span>Tamil / Tanglish Search Intent Terms (பழனி தேடல் சொற்கள்)</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              Indexed for Answer Engines & Voice Search
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tamilKeywordsList.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60 text-xs">
                <div className="font-bold text-slate-900">{item.tamil}</div>
                <div className="text-[11px] font-mono text-indigo-600 mt-0.5">"{item.tanglish}"</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{item.englishMeaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
