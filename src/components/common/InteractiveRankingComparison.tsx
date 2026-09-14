import React, { useState, useRef, useCallback } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Search, 
  TrendingUp, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle, 
  Maximize2,
  Layers,
  ArrowRight,
  Star
} from 'lucide-react';
import { APP_IMAGES } from '../../assets/images';
import { InteractiveImageModal } from './InteractiveImageModal';

export const InteractiveRankingComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeMode, setActiveMode] = useState<'slider' | 'split'>('slider');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3.5 py-1 text-xs font-semibold text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Evidence</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
            See the Real Impact: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Before vs. After</span> SURIYADEVAN S
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Drag the interactive visual slider below to examine how our SEO and Google Maps optimization transforms an unranked Palani business into the top choice on Google.
          </p>

          {/* Interactive controls */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setActiveMode('slider')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'slider' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Interactive Slider
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('split')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'split' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center space-x-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen Inspection</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Widget */}
        {activeMode === 'slider' ? (
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/8] max-h-[560px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl select-none cursor-ew-resize bg-slate-950"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Layer (Background / Full Width) */}
            <div className="absolute inset-0 w-full h-full p-4 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AFTER: Top Google Ranking & Local 3-Pack Palani</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60 hidden sm:inline">
                  Rank #1 Confirmed
                </span>
              </div>

              {/* Simulated Rich SERP Card for Palani */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
                {/* Google Search Card */}
                <div className="bg-slate-900/90 border border-indigo-500/30 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">G</span>
                    <span className="text-slate-300">https://yourbusiness.com</span>
                    <span className="text-emerald-400 font-semibold">• Page 1 Result #1</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-indigo-400 mt-1 hover:underline">
                    Best Digital Marketing & SEO Services in Palani — SURIYADEVAN S
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Premier SEO company and Google Maps 3-Pack agency in Palani. Helping local shops, showrooms, hotels & clinics capture verified inbound customer phone calls.
                  </p>
                  <div className="mt-3 flex items-center space-x-2 text-[11px] text-emerald-400 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Organic Impressions: +380% | Daily Phone Inquiries: 14+</span>
                  </div>
                </div>

                {/* Google Maps 3-Pack Card */}
                <div className="bg-slate-900/90 border border-emerald-500/30 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>Google Maps 3-Pack Palani</span>
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Position 1</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">4.9</span>
                    <span className="text-xs text-slate-400">(48+ Local Reviews)</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Marketing Agency in Palani • Bus Stand Road / Adivaram
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-indigo-600/30 border border-indigo-500/40 rounded text-[11px] font-semibold text-indigo-300 flex items-center space-x-1">
                      <PhoneCall className="w-3 h-3" />
                      <span>Direct Calls: +410%</span>
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-600/30 border border-emerald-500/40 rounded text-[11px] font-semibold text-emerald-300">
                      Directions: +290%
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metric Strip */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Google Ranking</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-400">Position #1 - #3</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Local Footfall</div>
                  <div className="text-xs sm:text-sm font-black text-indigo-400">+350% In-Store</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Ad Spend Waste</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-400">Reduced to 0%</div>
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped Overlay) */}
            <div 
              className="absolute inset-0 h-full p-4 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-r-2 border-indigo-400 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[1000px] max-w-none flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/40 px-3 py-1 rounded-full text-xs font-bold text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>BEFORE: Page 5 Invisible & Zero Local Calls</span>
                  </div>
                  <span className="text-xs font-mono text-red-400 bg-red-950/80 px-2.5 py-1 rounded border border-red-800/60 hidden sm:inline">
                    No Google Maps Visibility
                  </span>
                </div>

                {/* Simulated Poor SERP / Missing listing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
                  <div className="bg-slate-900/80 border border-red-500/20 p-4 rounded-xl opacity-75">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                      <span className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-400">?</span>
                      <span>Google Search Query: [Service] in Palani</span>
                    </div>
                    <div className="mt-3 p-3 bg-red-950/30 border border-red-900/40 rounded text-xs text-red-300">
                      ⚠️ Website found buried on Page 5 (Position #48). Potential buyers never scroll past the top 3 results.
                    </div>
                    <div className="mt-3 text-[11px] text-slate-500">
                      Organic Traffic: &lt; 5 visits / month • Zero lead conversion
                    </div>
                  </div>

                  <div className="bg-slate-900/80 border border-red-500/20 p-4 rounded-xl opacity-75">
                    <div className="text-xs font-bold text-slate-400 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Google Business Profile Status</span>
                    </div>
                    <div className="mt-3 p-3 bg-red-950/30 border border-red-900/40 rounded text-xs text-red-300">
                      ⚠️ Unverified profile, wrong category, missing phone number, 0 recent reviews, invisible on Google Maps.
                    </div>
                    <div className="mt-3 text-[11px] text-slate-500">
                      Competitors taking 100% of nearby buyer phone calls.
                    </div>
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800/80">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Google Ranking</div>
                    <div className="text-xs sm:text-sm font-black text-red-400">Unranked / Page 5</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Local Footfall</div>
                    <div className="text-xs sm:text-sm font-black text-slate-500">Zero Direct Leads</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Lost Revenue</div>
                    <div className="text-xs sm:text-sm font-black text-red-400">₹50,000+ / month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-black">
                ⟷
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-Side Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-red-500/30 rounded-2xl p-6 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/40 px-3 py-1 rounded-full text-xs font-bold text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span>BEFORE (Without Local SEO)</span>
              </div>
              <h3 className="text-lg font-bold text-white">Buried on Page 5 & Missing on Maps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Local customers in Palani searching for textile shops, restaurants, doctors, or services are clicking on your competitors because your site and Google Maps profile aren't optimized.
              </p>
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-red-400 font-semibold">
                  <span>Google Ranking Position</span>
                  <span>#48 (Page 5)</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Google Maps 3-Pack Presence</span>
                  <span>Not Found</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Monthly Inbound Phone Calls</span>
                  <span>0 - 2 calls</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AFTER (With SURIYADEVAN S Strategy)</span>
              </div>
              <h3 className="text-lg font-bold text-white">#1 on Google Search & Top Maps 3-Pack</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dominating high-intent keyword searches across Palani, Oddanchatram, Dharapuram, and Udumalpet. Your business is the primary choice whenever prospective buyers look for solutions.
              </p>
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-emerald-400 font-semibold">
                  <span>Google Ranking Position</span>
                  <span>#1 (Page 1 Top)</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <span>Google Maps 3-Pack Presence</span>
                  <span>Top 3 Verified</span>
                </div>
                <div className="flex items-center justify-between text-indigo-400 font-semibold">
                  <span>Monthly Inbound Phone Calls</span>
                  <span>45 - 120 calls</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for full screen image inspection */}
        <InteractiveImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={APP_IMAGES.localMaps}
          title="Google Maps Local 3-Pack Ranking Verification — Palani"
          subtitle="Real-world ranking snapshot illustrating position #1 Google Maps 3-Pack dominance for high-intent Palani commercial searches."
          badge="Verified Local Ranking Proof"
          metrics={[
            { label: 'Map Position', value: '#1 in Palani' },
            { label: 'Rating', value: '4.9 ★ (48+ reviews)' },
            { label: 'Call Velocity', value: '+410% Growth' }
          ]}
        />
      </div>
    </section>
  );
};
