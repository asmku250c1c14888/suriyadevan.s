import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { buildContactPageSchema } from '../../utils/seoSchemas';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  Check,
  Loader2,
  AlertCircle,
  Inbox
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { siteSettings, trackEvent } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    service: 'SEO Services',
    budget: 'Flexible',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionMeta, setSubmissionMeta] = useState<{
    leadId?: string;
    recipientEmail?: string;
    message?: string;
    emailSent?: boolean;
    emailStatus?: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number.';
    if (!formData.message.trim()) errs.message = 'Please share a brief note about your requirements.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      business: formData.business?.trim() || 'N/A',
      website: formData.website?.trim() || 'N/A',
      service: formData.service || 'SEO Services',
      budget: formData.budget || 'Flexible',
      message: formData.message.trim(),
      _subject: `New Portfolio Lead: ${formData.name.trim()} - ${formData.service || 'Inquiry'}`
    };

    try {
      // 1. Submit directly to user's Formspree endpoint (collects all forms to suriya2993@gmail.com)
      const formspreeResponse = await fetch('https://formspree.io/f/mnpqyvyq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!formspreeResponse.ok) {
        const errorData = await formspreeResponse.json().catch(() => ({}));
        const errMessage = 
          errorData.errors?.map((err: any) => err.message).join(', ') || 
          'Form delivery encountered an issue. Please try again or WhatsApp directly.';
        throw new Error(errMessage);
      }

      // 2. Also log to backend portfolio store for Admin CMS lead records
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (logErr) {
        console.warn('Backend leads store sync notice:', logErr);
      }

      setSubmissionMeta({
        recipientEmail: 'suriya2993@gmail.com',
        emailSent: true,
        emailStatus: 'Delivered directly to suriya2993@gmail.com via Formspree.'
      });
      setSubmitted(true);
      trackEvent('contact_form_submit', `${formData.name} - ${formData.service} (${formData.business || 'Individual'})`);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      // Fallback attempt via backend
      try {
        const fallbackRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (fallbackRes.ok) {
          const fallbackData = await fallbackRes.json();
          setSubmissionMeta(fallbackData);
          setSubmitted(true);
          trackEvent('contact_form_submit', `${formData.name} - ${formData.service}`);
          return;
        }
      } catch {
        // Fallback error handled below
      }
      setSubmitError(err.message || 'Unable to send message right now. Please reach out directly on WhatsApp or email suriya2993@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleanNumber = siteSettings.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    `Hello SURIYADEVAN, I am contacting you from your website regarding ${formData.service || 'SEO services'}.`
  )}`;

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
  const contactSchema = buildContactPageSchema(origin);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <SEOHead
        title="Contact SURIYADEVAN S | SEO Specialist in Palani"
        description="Contact SURIYADEVAN S for freelance SEO & digital marketing in Palani, Tamil Nadu. Call +91 9087571737 or email suriya2993@gmail.com for a free consultation!"
        canonical={`${origin}/contact`}
        schema={contactSchema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Header */}
        <div className="mt-4 pb-8 border-b border-slate-200 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Palani, Tamil Nadu, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Contact SURIYADEVAN — SEO Specialist
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Whether you need a full SEO audit, Google Business Profile optimization for Palani local search, or ongoing performance marketing, let's discuss your objectives.
          </p>
        </div>

        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                Direct Contact Details
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Location</div>
                    <div className="text-slate-600">Palani, Tamil Nadu, India</div>
                    <div className="text-slate-400 text-[11px]">Primary service area: Palani, Dindigul, Coimbatore & Remote</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Phone / Calling</div>
                    <a 
                      href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                      onClick={() => trackEvent('phone_click', 'Contact Page')}
                      className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
                    >
                      {siteSettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Email Inquiries</div>
                    <a 
                      href={`mailto:${siteSettings.email}`}
                      onClick={() => trackEvent('email_click', 'Contact Page')}
                      className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
                    >
                      {siteSettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mt-0.5">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">LinkedIn</div>
                    <a 
                      href={siteSettings.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('linkedin_click', 'Contact Page')}
                      className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
                    >
                      linkedin.com/in/suriyadevan
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp chat */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', 'Contact Page WhatsApp CTA')}
                  className="w-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-2 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Factual Commitment */}
            <div className="p-5 bg-indigo-50/60 rounded-2xl border border-indigo-100 text-xs text-slate-700 space-y-2">
              <div className="flex items-center space-x-1.5 font-bold text-indigo-900">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Client Privacy & Data Integrity</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600">
                Your contact details and website metrics remain strictly confidential. I provide transparent assessments without automated spam or unsolicited upsells.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-1 font-display">
                Request a Free Consultation
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the details below and I will review your website and respond within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-1.5 bg-emerald-100/80 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">
                      <Mail className="w-3 h-3 text-emerald-700" />
                      <span>Delivered to suriya2993@gmail.com via Formspree</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your message and requirements have been sent directly to SURIYADEVAN at <strong className="text-indigo-600">suriya2993@gmail.com</strong> via Formspree.
                    </p>
                  </div>

                  {/* Submission summary breakdown */}
                  <div className="bg-white p-4 rounded-xl border border-emerald-200/80 text-left text-xs space-y-2 max-w-md mx-auto shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1.5 flex justify-between">
                      <span>Submitted Details</span>
                      <span className="text-emerald-700 font-medium">Logged in Backend</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-400 block">Service</span>
                        <span className="font-semibold text-slate-800">{formData.service}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Contact Phone</span>
                        <span className="font-semibold text-slate-800">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Email Address</span>
                        <span className="font-semibold text-slate-800">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Business/Brand</span>
                        <span className="font-semibold text-slate-800">{formData.business || 'Individual client'}</span>
                      </div>
                    </div>
                    {formData.website && (
                      <div className="text-[11px] pt-1 border-t border-slate-50">
                        <span className="text-slate-400">Website: </span>
                        <span className="text-indigo-600 font-medium">{formData.website}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Immediate Reply via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          business: '',
                          website: '',
                          service: 'SEO Services',
                          budget: 'Flexible',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2.5">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold">{submitError}</p>
                        <p className="text-[11px] text-red-600 mt-0.5">
                          You can also message Suriya directly on WhatsApp or email <strong>suriya2993@gmail.com</strong>.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full p-2.5 rounded-lg border ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        } focus:outline-indigo-500`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@example.com"
                        className={`w-full p-2.5 rounded-lg border ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        } focus:outline-indigo-500`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full p-2.5 rounded-lg border ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        } focus:outline-indigo-500`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Company or Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.business}
                        onChange={e => setFormData({ ...formData, business: e.target.value })}
                        placeholder="e.g. Palani Furniture Showroom"
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Website URL (if existing)
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={e => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-indigo-500 bg-white"
                      >
                        <option value="SEO Services">Comprehensive SEO (On/Off Page)</option>
                        <option value="Local SEO">Local SEO & Palani Google Maps</option>
                        <option value="Technical SEO">Technical SEO & Speed Fixes</option>
                        <option value="Google Business Profile">Google Business Profile (GMB) Optimization</option>
                        <option value="Social Media">Social Media Management & Posters</option>
                        <option value="Meta Ads">Meta Ads (Facebook / Instagram)</option>
                        <option value="Full Audit">Complete Website & SEO Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Project Details or Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business, current website challenges, target location, or what you want to achieve on Google..."
                      className={`w-full p-2.5 rounded-lg border ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-indigo-500`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.message}</span>}
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center space-x-2">
                    <Inbox className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>
                      Forms are delivered directly to <strong>suriya2993@gmail.com</strong> via Formspree.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${
                      isSubmitting 
                        ? 'bg-indigo-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    } text-white py-3 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center space-x-2 shadow-xs`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to suriya2993@gmail.com via Formspree...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Details to SURIYADEVAN</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
