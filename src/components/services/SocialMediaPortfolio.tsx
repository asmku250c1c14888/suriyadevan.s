import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { SocialMediaItem } from '../../types';
import { 
  Instagram, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Eye, 
  Heart, 
  TrendingUp, 
  PlusCircle, 
  Trash2, 
  ExternalLink, 
  Sparkles, 
  Check, 
  X,
  Play,
  Share2
} from 'lucide-react';

export const SocialMediaPortfolio: React.FC = () => {
  const { socialMediaItems, addSocialMediaItem, deleteSocialMediaItem, isAdmin, trackEvent } = useData();
  const [filterType, setFilterType] = useState<'all' | 'reel' | 'post' | 'carousel'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activePreviewItem, setActivePreviewItem] = useState<SocialMediaItem | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    type: 'reel' as SocialMediaItem['type'],
    platform: 'Instagram' as SocialMediaItem['platform'],
    clientName: '',
    caption: '',
    views: '25.4K',
    likes: '1,240',
    reach: '38K',
    engagementRate: '6.5%',
    mediaUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://instagram.com',
    publishDate: new Date().toISOString().split('T')[0],
    tags: 'Instagram Reels, Local Business, Viral Growth',
    featured: true
  });

  const [formSuccess, setFormSuccess] = useState('');

  const filteredItems = socialMediaItems.filter(item => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.clientName) return;

    addSocialMediaItem({
      title: formData.title,
      type: formData.type,
      platform: formData.platform,
      clientName: formData.clientName,
      caption: formData.caption,
      metrics: {
        views: formData.views,
        likes: formData.likes,
        reach: formData.reach,
        engagementRate: formData.engagementRate
      },
      mediaUrl: formData.mediaUrl || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
      postUrl: formData.postUrl || 'https://instagram.com',
      publishDate: formData.publishDate,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      featured: formData.featured
    });

    setFormSuccess('Social Media Reel / Post added successfully!');
    setTimeout(() => {
      setIsAddModalOpen(false);
      setFormSuccess('');
      setFormData({
        title: '',
        type: 'reel',
        platform: 'Instagram',
        clientName: '',
        caption: '',
        views: '',
        likes: '',
        reach: '',
        engagementRate: '',
        mediaUrl: '',
        postUrl: 'https://instagram.com',
        publishDate: new Date().toISOString().split('T')[0],
        tags: '',
        featured: true
      });
    }, 1000);
  };

  const presetImages = [
    { label: 'Healthcare Reel', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80' },
    { label: 'Hospitality Stays', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80' },
    { label: 'Retail Silk Saree', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
    { label: 'Festive Poster', url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80' },
    { label: 'Tech SEO Screen', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80' }
  ];

  return (
    <div id="social-media-portfolio" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Instagram & Social Media Portfolio</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Creatives, Reels & Carousel Production
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Explore high-retention short-form Reels concepts, promotional static posters, and educational carousels crafted for businesses in Palani and Tamil Nadu.
          </p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => {
              trackEvent('service_view', 'Open Add Social Media Item Modal');
              setIsAddModalOpen(true);
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm hover:shadow"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Add Instagram Post / Reel</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {(['all', 'reel', 'post', 'carousel'] as const).map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
              filterType === type
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {type === 'all' ? 'All Content' : type === 'reel' ? '🎥 Reels' : type === 'post' ? '🖼️ Creative Posts' : '📑 Carousels'}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto font-medium">
          Showing {filteredItems.length} items
        </span>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-pink-300 transition-all hover:shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setActivePreviewItem(item)}>
              <img
                src={item.mediaUrl || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80'}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
              
              {/* Type Badge */}
              <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {item.type === 'reel' ? (
                  <>
                    <Video className="w-3 h-3 text-pink-400" />
                    <span>Reel</span>
                  </>
                ) : item.type === 'post' ? (
                  <>
                    <ImageIcon className="w-3 h-3 text-indigo-400" />
                    <span>Post</span>
                  </>
                ) : (
                  <>
                    <Layers className="w-3 h-3 text-emerald-400" />
                    <span>Carousel</span>
                  </>
                )}
              </div>

              {/* Platform Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-0.5 rounded text-[10px] font-bold">
                {item.platform}
              </div>

              {/* Reel Play Overlay */}
              {item.type === 'reel' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              )}

              {/* Metrics Bar at bottom of image */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-semibold drop-shadow">
                {item.metrics.views && (
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5 text-pink-300" />
                    <span>{item.metrics.views} views</span>
                  </span>
                )}
                {item.metrics.engagementRate && (
                  <span className="flex items-center space-x-1 text-emerald-300">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metrics.engagementRate} Eng.</span>
                  </span>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-[11px] font-bold text-indigo-600 mb-1">
                  Client: {item.clientName}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 font-display group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <a
                  href={item.postUrl || 'https://instagram.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('service_view', `Social Item Click: ${item.title}`)}
                  className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center space-x-1"
                >
                  <span>View on {item.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {isAdmin && (
                  <button
                    onClick={() => deleteSocialMediaItem(item.id)}
                    className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Add Instagram Post / Reel</h3>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Content Type *</label>
                    <select
                      value={formData.type}
                      onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="reel">🎥 Reel (Short-Form Video)</option>
                      <option value="post">🖼️ Static Post / Creative</option>
                      <option value="carousel">📑 Multi-Slide Carousel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Platform *</label>
                    <select
                      value={formData.platform}
                      onChange={e => setFormData({ ...formData, platform: e.target.value as any })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="YouTube Shorts">YouTube Shorts</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Title / Hook Headline *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Why Palani Pilgrims Need Footwear Tips"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Client Name / Business *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sri Amman Silks & Sarees"
                    value={formData.clientName}
                    onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Caption / Strategy Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the hook, video scripting, and targeted audience..."
                    value={formData.caption}
                    onChange={e => setFormData({ ...formData, caption: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">Views</label>
                    <input
                      type="text"
                      placeholder="e.g. 54.2K"
                      value={formData.views}
                      onChange={e => setFormData({ ...formData, views: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">Likes</label>
                    <input
                      type="text"
                      placeholder="e.g. 2,840"
                      value={formData.likes}
                      onChange={e => setFormData({ ...formData, likes: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">Reach</label>
                    <input
                      type="text"
                      placeholder="e.g. 72K"
                      value={formData.reach}
                      onChange={e => setFormData({ ...formData, reach: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">Eng. Rate</label>
                    <input
                      type="text"
                      placeholder="e.g. 7.5%"
                      value={formData.engagementRate}
                      onChange={e => setFormData({ ...formData, engagementRate: e.target.value })}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5"
                    />
                  </div>
                </div>

                {/* Media Image URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Thumbnail / Media Image URL</label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={formData.mediaUrl}
                    onChange={e => setFormData({ ...formData, mediaUrl: e.target.value })}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] text-slate-500 font-medium mr-1">Quick Select:</span>
                    {presetImages.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, mediaUrl: p.url })}
                        className="text-[10px] bg-slate-100 hover:bg-pink-50 hover:text-pink-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Post / Reel Link URL</label>
                    <input
                      type="url"
                      placeholder="https://instagram.com/reel/..."
                      value={formData.postUrl}
                      onChange={e => setFormData({ ...formData, postUrl: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tags (Comma separated)</label>
                    <input
                      type="text"
                      placeholder="Reels, Palani, Retail, Fashion"
                      value={formData.tags}
                      onChange={e => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white shadow-xs"
                  >
                    Save & Publish
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {activePreviewItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-700">
            <div className="relative aspect-4/3 bg-slate-900">
              <img
                src={activePreviewItem.mediaUrl}
                alt={activePreviewItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActivePreviewItem(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white p-1.5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-pink-600">{activePreviewItem.clientName}</span>
                <span className="text-[11px] text-slate-500">{activePreviewItem.publishDate}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">{activePreviewItem.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{activePreviewItem.caption}</p>
              
              <div className="grid grid-cols-4 gap-2 pt-2 text-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Views</div>
                  <div className="text-xs font-black text-slate-800">{activePreviewItem.metrics.views || '-'}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Likes</div>
                  <div className="text-xs font-black text-slate-800">{activePreviewItem.metrics.likes || '-'}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Reach</div>
                  <div className="text-xs font-black text-slate-800">{activePreviewItem.metrics.reach || '-'}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Engagement</div>
                  <div className="text-xs font-black text-emerald-600">{activePreviewItem.metrics.engagementRate || '-'}</div>
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <a
                  href={activePreviewItem.postUrl || 'https://instagram.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5"
                >
                  <span>Open on {activePreviewItem.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
