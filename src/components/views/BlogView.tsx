import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BlogPost } from '../../types';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  BookOpen,
  Plus,
  Trash2,
  Edit3,
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const BlogView: React.FC = () => {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost, activePath, siteSettings, navigateTo, trackEvent, isAdmin } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Modal & Toast states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'SEO Strategy',
    excerpt: '',
    content: '',
    readingTime: '4 min read',
    author: siteSettings.name || 'SuriyaDevan S',
    focusKeyword: '',
    searchIntent: 'Informational' as BlogPost['searchIntent'],
    metaTitle: '',
    metaDescription: ''
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const openNewArticleModal = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      category: 'SEO Strategy',
      excerpt: '',
      content: '## Introduction\n\nExplain the context and relevance for businesses...\n\n## Actionable Strategy\n\nDetail the exact steps and best practices.\n\n## Key Takeaways\n\n- Summary point 1\n- Summary point 2',
      readingTime: '5 min read',
      author: siteSettings.name || 'SuriyaDevan S',
      focusKeyword: '',
      searchIntent: 'Informational',
      metaTitle: '',
      metaDescription: ''
    });
    setIsModalOpen(true);
  };

  const openEditArticleModal = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      readingTime: post.readingTime,
      author: post.author,
      focusKeyword: post.focusKeyword,
      searchIntent: post.searchIntent,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription
    });
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    setFormData(prev => ({
      ...prev,
      title: val,
      slug: prev.slug && editingPost ? prev.slug : val.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    }));
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter an article title.');
      return;
    }

    const postSlug = formData.slug.trim() || formData.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
    const today = new Date().toISOString().split('T')[0];

    if (editingPost) {
      updateBlogPost(editingPost.id, {
        ...formData,
        slug: postSlug,
        modifiedDate: today
      });
      showToast(`Article "${formData.title}" updated successfully!`);
    } else {
      addBlogPost({
        ...formData,
        slug: postSlug,
        publishDate: today,
        modifiedDate: today,
        secondaryKeywords: [],
        status: 'published'
      });
      showToast(`New article "${formData.title}" published!`);
    }

    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string, title: string, redirectAfter?: boolean) => {
    deleteBlogPost(id);
    setDeleteConfirmId(null);
    showToast(`Article "${title}" has been deleted.`);
    if (redirectAfter) {
      navigateTo('/blog');
    }
  };

  // Check if viewing single post
  const slug = activePath.replace('/blog/', '').replace('/blog', '');
  const currentPost = blogPosts.find(b => b.slug === slug);

  if (currentPost) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: currentPost.title,
      description: currentPost.excerpt,
      datePublished: currentPost.publishDate,
      dateModified: currentPost.modifiedDate,
      author: {
        '@type': 'Person',
        name: siteSettings.name,
        jobTitle: 'SEO & Digital Marketing Specialist',
        url: window.location.origin
      },
      publisher: {
        '@type': 'Person',
        name: siteSettings.name
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': window.location.href
      }
    };

    return (
      <div className="min-h-screen bg-slate-50/70 pb-20">
        <SEOHead
          title={currentPost.metaTitle || currentPost.title}
          description={currentPost.metaDescription || currentPost.excerpt}
          schema={articleSchema}
        />

        {/* Toast notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 flex items-center space-x-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
            <Breadcrumbs
              items={[
                { label: 'Blog', path: '/blog' },
                { label: currentPost.title }
              ]}
            />

            {/* Post management quick actions (Admin Only) */}
            {isAdmin && (
              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <button
                  onClick={() => openEditArticleModal(currentPost)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
                  title="Edit this article"
                >
                  <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Edit Article</span>
                </button>

                <button
                  onClick={() => setDeleteConfirmId(currentPost.id)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-red-200 bg-red-50/60 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors"
                  title="Delete this article"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>

          {/* Delete confirmation dialog for single post (Admin Only) */}
          {isAdmin && deleteConfirmId === currentPost.id && (
            <div className="my-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center space-x-2 text-xs font-medium">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Are you sure you want to permanently delete this article?</span>
              </div>
              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-3 py-1 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-md hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeletePost(currentPost.id, currentPost.title, true)}
                  className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-md hover:bg-red-700 shadow-2xs"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          )}

          {/* Article Header */}
          <header className="mt-4 pb-8 border-b border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                {currentPost.category}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {currentPost.publishDate}
              </span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {currentPost.readingTime}
              </span>
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {currentPost.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              {currentPost.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {currentPost.excerpt}
            </p>
          </header>

          {/* Article Body */}
          <main className="py-10 prose prose-slate max-w-none prose-headings:font-bold prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:text-sm prose-p:leading-relaxed prose-li:text-slate-600 prose-li:text-sm">
            <div className="whitespace-pre-line text-sm text-slate-700 leading-relaxed space-y-4">
              {currentPost.content}
            </div>
          </main>

          {/* Post Footer & Author Box */}
          <footer className="pt-8 border-t border-slate-200 space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  Written by SuriyaDevan S
                </div>
                <h4 className="text-sm font-bold text-slate-900">SEO Specialist in Palani</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-md">
                  Consulting for businesses across Tamil Nadu on technical crawl hygiene, Google Business Profile optimization, and search growth.
                </p>
              </div>
              <button
                onClick={() => navigateTo('/contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-2xs self-start sm:self-auto"
              >
                Discuss This Strategy
              </button>
            </div>

            <div className="flex justify-between items-center text-xs">
              <button
                onClick={() => navigateTo('/blog')}
                className="text-slate-600 hover:text-indigo-600 font-bold"
              >
                ← Back to All Articles
              </button>
              {currentPost.focusKeyword && (
                <span className="text-slate-400">Focus Keyword: {currentPost.focusKeyword}</span>
              )}
            </div>
          </footer>
        </div>

        {/* Edit Modal (reusable) */}
        {isModalOpen && (
          <ArticleModal
            editingPost={editingPost}
            formData={formData}
            setFormData={setFormData}
            onTitleChange={handleTitleChange}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSavePost}
          />
        )}
      </div>
    );
  }

  // Articles Archive View
  const categories = ['All', 'Local SEO', 'SEO Strategy', 'WordPress SEO', 'Google Business Profile', 'Technical SEO', 'Social Media'];
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <SEOHead
        title="SEO & Digital Marketing Blog | SuriyaDevan S | Palani"
        description="Read articles on Local SEO in Palani, Google Business Profile ranking tactics, technical SEO audits, and WordPress performance."
      />

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 flex items-center space-x-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        {/* Header */}
        <div className="mt-4 pb-8 border-b border-slate-200 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Search & Strategy Insights</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            SEO & Digital Marketing Articles
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Practical insights on Local SEO in Palani, technical search hygiene, WordPress optimization, and search intent alignment.
          </p>

          <div className="pt-2">
            <button
              onClick={openNewArticleModal}
              className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Write & Add New Article</span>
            </button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-indigo-500"
              />
            </div>
            {isAdmin && (
              <button
                onClick={openNewArticleModal}
                className="hidden sm:inline-flex items-center space-x-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Blog</span>
              </button>
            )}
          </div>
        </div>

        {/* Articles List */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 font-display">No articles found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {searchQuery ? `No articles matching "${searchQuery}".` : 'No articles currently in this category.'}
            </p>
            {isAdmin && (
              <button
                onClick={openNewArticleModal}
                className="inline-flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>Create First Article</span>
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-all hover:shadow-md space-y-3 relative group"
              >
                {/* Delete confirmation inline for this card (Admin only) */}
                {isAdmin && deleteConfirmId === post.id && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2 animate-in fade-in duration-200">
                    <span className="text-xs font-medium">Delete this article permanently?</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setDeleteConfirmId(null)}
                        className="px-2.5 py-1 bg-white border border-slate-300 text-slate-700 rounded text-[11px] font-semibold hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id, post.title)}
                        className="px-2.5 py-1 bg-red-600 text-white rounded text-[11px] font-semibold hover:bg-red-700 shadow-2xs"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>• {post.publishDate}</span>
                    <span>• {post.readingTime}</span>
                    {post.focusKeyword && (
                      <span className="text-indigo-600 font-semibold">• Focus: {post.focusKeyword}</span>
                    )}
                  </div>

                  {/* Edit and Delete Actions (Admin Only) */}
                  {isAdmin && (
                    <div className="flex items-center space-x-1.5 opacity-90 sm:opacity-75 sm:group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openEditArticleModal(post)}
                        className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
                        title="Edit article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(post.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                        title="Delete article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <h2 
                  className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer font-display"
                  onClick={() => navigateTo(`/blog/${post.slug}`)}
                >
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-2 flex justify-between items-center border-t border-slate-100 text-xs">
                  <span className="text-slate-400">By {post.author}</span>
                  <button
                    onClick={() => navigateTo(`/blog/${post.slug}`)}
                    className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Add / Edit Article */}
      {isModalOpen && (
        <ArticleModal
          editingPost={editingPost}
          formData={formData}
          setFormData={setFormData}
          onTitleChange={handleTitleChange}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSavePost}
        />
      )}
    </div>
  );
};

interface ArticleModalProps {
  editingPost: BlogPost | null;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onTitleChange: (val: string) => void;
  onClose: () => void;
  onSave: (e: React.FormEvent) => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  editingPost,
  formData,
  setFormData,
  onTitleChange,
  onClose,
  onSave
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center z-10">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              {editingPost ? 'Edit Blog Article' : 'Write & Add New Article'}
            </h3>
            <p className="text-xs text-slate-500">
              Publish content to expand organic search authority and share case studies.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={onSave} className="p-6 space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Article Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Local SEO Strategy for Small Businesses in Palani"
              value={formData.title}
              onChange={(e) => onTitleChange(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="Local SEO">Local SEO</option>
                <option value="SEO Strategy">SEO Strategy</option>
                <option value="WordPress SEO">WordPress SEO</option>
                <option value="Google Business Profile">Google Business Profile</option>
                <option value="Technical SEO">Technical SEO</option>
                <option value="Social Media">Social Media</option>
                <option value="Meta Ads">Meta Ads</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">URL Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="local-seo-strategy-palani"
                className="w-full p-2.5 border border-slate-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Focus Keyword</label>
              <input
                type="text"
                placeholder="e.g. Local SEO Palani"
                value={formData.focusKeyword}
                onChange={(e) => setFormData({ ...formData, focusKeyword: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Estimated Reading Time</label>
              <input
                type="text"
                value={formData.readingTime}
                onChange={(e) => setFormData({ ...formData, readingTime: e.target.value })}
                placeholder="e.g. 5 min read"
                className="w-full p-2.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Summary / Excerpt *</label>
            <textarea
              rows={2}
              required
              placeholder="A brief 1-2 sentence overview shown on the blog archive and search snippets..."
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Full Article Content *</label>
            <textarea
              rows={8}
              required
              placeholder="Write the article content here. You can use markdown headings (## Heading), lists (- bullet), and paragraphs..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-xs font-mono leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="pt-2 border-t border-slate-200 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-all shadow-2xs"
            >
              {editingPost ? 'Update Article' : 'Publish Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
