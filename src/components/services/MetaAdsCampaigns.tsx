import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MetaAdCampaign, MetaAdCreative } from '../../types';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MousePointerClick, 
  Eye, 
  PlusCircle, 
  Trash2, 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Calendar, 
  MapPin, 
  Check, 
  X,
  Target,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const MetaAdsCampaigns: React.FC = () => {
  const { metaCampaigns, addMetaCampaign, deleteMetaCampaign, isAdmin, trackEvent } = useData();
  const [filterObjective, setFilterObjective] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [expandedCampaignId, setExpandedCampaignId] = useState<string | null>(metaCampaigns[0]?.id || null);

  // Form state for adding campaign report
  const [formData, setFormData] = useState({
    clientName: '',
    campaignName: '',
    objective: 'Lead Generation' as MetaAdCampaign['objective'],
    status: 'Completed' as MetaAdCampaign['status'],
    dateRange: 'Past 30 Days',
    location: 'Palani, Dindigul & Surrounding (Radius 30 km)',
    budgetSpent: '₹12,500',
    leadsGenerated: 240,
    purchases: 65,
    roas: '5.2x',
    costPerResult: '₹52.08 / lead',
    impressions: '145,000',
    reach: '82,000',
    clicks: '4,650',
    ctr: '3.20%',
    reportSummary: 'Delivered targeted WhatsApp leads at low acquisition cost with high conversion rate to appointments.',
    notes: 'Advantage+ budget optimization with Tamil video creative hook.',
    // Creative Reel
    reelTitle: 'Localized 20s High-Hook Reel Video',
    reelHeadline: 'Special Offer for Palani Customers',
    reelDescription: 'Tap to chat directly with store assistant on WhatsApp.',
    reelMediaUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
    // Creative Post
    postTitle: 'Offer Price Grid Static Creative',
    postHeadline: 'Flat 20% Off Weekend Special',
    postDescription: 'Free doorstep consultation or fast local delivery.',
    postMediaUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80'
  });

  const [formSuccess, setFormSuccess] = useState('');

  const filteredCampaigns = metaCampaigns.filter(c => {
    if (filterObjective === 'All') return true;
    return c.objective === filterObjective;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.campaignName) return;

    const creatives: MetaAdCreative[] = [];

    // Add Reel Creative
    if (formData.reelTitle) {
      creatives.push({
        id: 'cr-' + Date.now() + '-1',
        type: 'reel',
        title: formData.reelTitle,
        headline: formData.reelHeadline,
        description: formData.reelDescription,
        mediaUrl: formData.reelMediaUrl || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
        platform: 'Both'
      });
    }

    // Add Post Creative
    if (formData.postTitle) {
      creatives.push({
        id: 'cr-' + Date.now() + '-2',
        type: 'post',
        title: formData.postTitle,
        headline: formData.postHeadline,
        description: formData.postDescription,
        mediaUrl: formData.postMediaUrl || 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80',
        platform: 'Facebook'
      });
    }

    addMetaCampaign({
      clientName: formData.clientName,
      campaignName: formData.campaignName,
      objective: formData.objective,
      status: formData.status,
      dateRange: formData.dateRange,
      location: formData.location,
      budgetSpent: formData.budgetSpent,
      results: {
        leadsGenerated: Number(formData.leadsGenerated) || undefined,
        purchases: Number(formData.purchases) || undefined,
        roas: formData.roas,
        costPerResult: formData.costPerResult,
        impressions: formData.impressions,
        reach: formData.reach,
        clicks: formData.clicks,
        ctr: formData.ctr
      },
      creatives,
      notes: formData.notes,
      reportSummary: formData.reportSummary
    });

    setFormSuccess('Meta Ads Campaign Report added & updated live on website!');
    setTimeout(() => {
      setIsAddModalOpen(false);
      setFormSuccess('');
    }, 1000);
  };

  return (
    <div id="meta-ads-campaigns" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4 text-blue-500" />
            <span>Meta Ads Performance & Campaign Reports</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Live Campaign Case Reports & Creative Asset Showcase
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Real campaign metrics, verified Return on Ad Spend (ROAS), and live creative reels & posts deployed on Facebook & Instagram for clients in Palani and Tamil Nadu.
          </p>
        </div>

        <button
          onClick={() => {
            trackEvent('service_view', 'Open Add Meta Campaign Modal');
            setIsAddModalOpen(true);
          }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm hover:shadow"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ Add Campaign Report & Creatives</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {['All', 'Lead Generation', 'Conversions', 'Sales', 'Traffic'].map(obj => (
          <button
            key={obj}
            onClick={() => setFilterObjective(obj)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterObjective === obj
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {obj === 'All' ? 'All Objectives' : obj}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto font-medium">
          {filteredCampaigns.length} Campaigns Documented
        </span>
      </div>

      {/* Campaign Reports List */}
      <div className="space-y-6">
        {filteredCampaigns.map(camp => {
          const isExpanded = expandedCampaignId === camp.id;
          return (
            <div
              key={camp.id}
              className="bg-slate-50/60 rounded-2xl border border-slate-200/90 overflow-hidden transition-all hover:border-blue-300 shadow-xs"
            >
              {/* Campaign Header Bar */}
              <div className="p-5 sm:p-6 bg-white border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 px-2.5 py-0.5 rounded-md">
                      {camp.objective}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                      camp.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1 ${camp.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                      {camp.status}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {camp.dateRange}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                    {camp.campaignName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 flex items-center space-x-3">
                    <span className="text-indigo-600 font-bold">Client: {camp.clientName}</span>
                    <span>•</span>
                    <span className="flex items-center text-slate-500">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                      {camp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 self-start lg:self-auto">
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ad Spend</div>
                    <div className="text-base sm:text-lg font-black text-slate-900">{camp.budgetSpent}</div>
                  </div>

                  <button
                    onClick={() => setExpandedCampaignId(isExpanded ? null : camp.id)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-lg text-xs font-bold transition-colors flex items-center space-x-1"
                  >
                    <span>{isExpanded ? 'Less' : 'Details & Creatives'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isAdmin && (
                    <button
                      onClick={() => deleteMetaCampaign(camp.id)}
                      className="text-slate-400 hover:text-rose-600 p-2 transition-colors"
                      title="Delete campaign"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-200/80 bg-slate-50 text-center py-3 px-2">
                {camp.results.roas && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">ROAS</div>
                    <div className="text-base font-black text-emerald-600">{camp.results.roas}</div>
                  </div>
                )}
                {camp.results.leadsGenerated !== undefined && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Leads Generated</div>
                    <div className="text-base font-black text-blue-600">{camp.results.leadsGenerated}</div>
                  </div>
                )}
                {camp.results.costPerResult && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Cost / Result</div>
                    <div className="text-sm sm:text-base font-black text-slate-800">{camp.results.costPerResult}</div>
                  </div>
                )}
                {camp.results.reach && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Audience Reach</div>
                    <div className="text-sm sm:text-base font-bold text-slate-700">{camp.results.reach}</div>
                  </div>
                )}
                {camp.results.impressions && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Impressions</div>
                    <div className="text-sm sm:text-base font-bold text-slate-700">{camp.results.impressions}</div>
                  </div>
                )}
                {camp.results.ctr && (
                  <div className="p-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">CTR</div>
                    <div className="text-sm sm:text-base font-black text-indigo-600">{camp.results.ctr}</div>
                  </div>
                )}
              </div>

              {/* Collapsible Details: Creatives and Notes */}
              {isExpanded && (
                <div className="p-5 sm:p-7 space-y-6 border-t border-slate-200/80 bg-white">
                  {/* Executive Summary */}
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 space-y-1.5">
                    <div className="text-xs font-bold text-blue-900 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Campaign Executive Summary</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {camp.reportSummary}
                    </p>
                    {camp.notes && (
                      <p className="text-xs text-slate-500 pt-1">
                        <strong>Targeting Strategy:</strong> {camp.notes}
                      </p>
                    )}
                  </div>

                  {/* Creative Showcase */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                        <span>Ad Creatives Used in this Campaign</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">
                          {camp.creatives?.length || 0} Creatives
                        </span>
                      </h4>
                    </div>

                    {camp.creatives && camp.creatives.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {camp.creatives.map(creative => (
                          <div
                            key={creative.id}
                            className="flex flex-col sm:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/90"
                          >
                            <div className="relative w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                              <img
                                src={creative.mediaUrl || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80'}
                                alt={creative.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2">
                                <span className="bg-black/70 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                                  {creative.type === 'reel' ? <Video className="w-2.5 h-2.5 text-pink-400" /> : <ImageIcon className="w-2.5 h-2.5 text-blue-400" />}
                                  <span className="capitalize">{creative.type}</span>
                                </span>
                              </div>
                            </div>

                            <div className="flex-1 space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-blue-600 uppercase">
                                  Placements: {creative.platform}
                                </span>
                              </div>
                              <h5 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                                {creative.title}
                              </h5>
                              {creative.headline && (
                                <p className="text-xs font-semibold text-slate-700 line-clamp-2">
                                  Hook: "{creative.headline}"
                                </p>
                              )}
                              {creative.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-2">
                                  {creative.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">No individual creative assets logged for this campaign.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Campaign Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Add Meta Ads Campaign Report & Creatives</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <p className="text-sm font-bold text-slate-800">{formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleAddSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Client / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sri Amman Silks & Sarees"
                      value={formData.clientName}
                      onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Campaign Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diwali Silk Saree WhatsApp Leads"
                      value={formData.campaignName}
                      onChange={e => setFormData({ ...formData, campaignName: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Objective</label>
                    <select
                      value={formData.objective}
                      onChange={e => setFormData({ ...formData, objective: e.target.value as any })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                    >
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Conversions">Conversions</option>
                      <option value="Sales">Sales / Catalogs</option>
                      <option value="Traffic">Traffic</option>
                      <option value="Brand Awareness">Brand Awareness</option>
                      <option value="Engagement">Engagement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                    >
                      <option value="Completed">Completed</option>
                      <option value="Active">Active (Ongoing)</option>
                      <option value="Optimizing">Optimizing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Budget Spent</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹15,000"
                      value={formData.budgetSpent}
                      onChange={e => setFormData({ ...formData, budgetSpent: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Date Range</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 10 - Oct 31, 2024"
                      value={formData.dateRange}
                      onChange={e => setFormData({ ...formData, dateRange: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Geo Location Target</label>
                    <input
                      type="text"
                      placeholder="e.g. Palani, Udumalpet, Dharapuram (Radius 35 km)"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                    />
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Campaign Performance Results
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Leads / Conv.</label>
                      <input
                        type="number"
                        placeholder="e.g. 342"
                        value={formData.leadsGenerated}
                        onChange={e => setFormData({ ...formData, leadsGenerated: Number(e.target.value) })}
                        className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">ROAS</label>
                      <input
                        type="text"
                        placeholder="e.g. 5.8x"
                        value={formData.roas}
                        onChange={e => setFormData({ ...formData, roas: e.target.value })}
                        className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Cost / Result</label>
                      <input
                        type="text"
                        placeholder="e.g. ₹42.39 / lead"
                        value={formData.costPerResult}
                        onChange={e => setFormData({ ...formData, costPerResult: e.target.value })}
                        className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">CTR</label>
                      <input
                        type="text"
                        placeholder="e.g. 3.1%"
                        value={formData.ctr}
                        onChange={e => setFormData({ ...formData, ctr: e.target.value })}
                        className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Creatives Attached: Reel & Post */}
                <div className="space-y-3 bg-blue-50/40 p-3.5 rounded-xl border border-blue-100">
                  <div className="text-xs font-bold text-blue-900 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Attach Creative Reel & Creative Post</span>
                  </div>

                  {/* Creative 1: Reel */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-slate-200">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-1">🎥 Creative Reel Title</label>
                      <input
                        type="text"
                        placeholder="e.g. 20-Sec Saree Draping Hook Reel"
                        value={formData.reelTitle}
                        onChange={e => setFormData({ ...formData, reelTitle: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-1">Reel Media URL</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={formData.reelMediaUrl}
                        onChange={e => setFormData({ ...formData, reelMediaUrl: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                  </div>

                  {/* Creative 2: Post */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-slate-200">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-1">🖼️ Creative Post Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Festival Offer Price Grid Creative"
                        value={formData.postTitle}
                        onChange={e => setFormData({ ...formData, postTitle: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-1">Post Media URL</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={formData.postMediaUrl}
                        onChange={e => setFormData({ ...formData, postMediaUrl: e.target.value })}
                        className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-2 py-1.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Report Summary & Key Takeaways</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Generated 342 WhatsApp leads and 89 store sales..."
                    value={formData.reportSummary}
                    onChange={e => setFormData({ ...formData, reportSummary: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                  >
                    Save Campaign Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
