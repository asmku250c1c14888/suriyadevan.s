import React from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { toolsAndTech } from '../../data/initialData';

export const ResumeView: React.FC = () => {
  const { siteSettings, experience, certifications, education, trackEvent } = useData();

  const handlePrint = () => {
    trackEvent('resume_download', 'Print / PDF Resume');
    window.print();
  };

  const resumeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `Resume of ${siteSettings.name}`,
    mainEntity: {
      '@type': 'Person',
      name: siteSettings.name,
      jobTitle: siteSettings.roleTitle,
      email: siteSettings.email,
      telephone: siteSettings.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palani',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <SEOHead
        title="Resume — SURIYADEVAN S | SEO & Digital Marketing Executive Palani"
        description="Official professional resume of SURIYADEVAN S: SEO & Digital Marketing Executive with experience managing 5 end-to-end SEO projects at Avanexa, certifications, and tools."
        schema={resumeSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="no-print">
          <Breadcrumbs items={[{ label: 'Resume' }]} />
        </div>

        {/* Action Bar */}
        <div className="no-print mt-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-900 font-display">
              Professional Resume
            </h1>
            <p className="text-xs text-slate-500">
              Verified resume of SURIYADEVAN S • Palani, Tamil Nadu
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center space-x-2 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save as PDF</span>
          </button>
        </div>

        {/* Printable Resume Document */}
        <div className="bg-white p-6 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8 print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                  {siteSettings.name}
                </h2>
                <p className="text-sm font-bold text-indigo-600">
                  SEO & Digital Marketing Executive
                </p>
              </div>
              <div className="text-xs text-slate-600 text-left sm:text-right space-y-1">
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{siteSettings.location}</span>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-600" />
                  <a href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} className="hover:underline">
                    {siteSettings.phone}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <a href={`mailto:${siteSettings.email}`} className="hover:underline">
                    {siteSettings.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <a href={siteSettings.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/suriyadevan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Professional Summary
            </h3>
            <p className="text-xs text-[#44403C] leading-relaxed">
              SEO and Digital Marketing Executive with hands-on experience managing end-to-end SEO projects, including On-Page SEO, Off-Page SEO, Link Building, Local SEO, Technical SEO, Keyword Research, Content Optimization, Google Ads, Paid Search Campaigns, Social Media Marketing, Content Strategy, Email Marketing, Website Analytics, and WordPress Website Management. Experience includes achieving Google first-page rankings and improving organic traffic through data-driven strategies.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Professional Experience
            </h3>

            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs">
                  <div>
                    <span className="font-bold text-[#1C1917]">{exp.role}</span>
                    <span className="text-[#9A6B38] font-semibold"> — {exp.company}</span>
                  </div>
                  <span className="text-[#78716C] font-medium">{exp.period} | {exp.location}</span>
                </div>

                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#57534E]">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key SEO Projects Managed */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              SEO Projects Executed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#E7E2D8]">
                <div className="font-bold text-[#1C1917]">1. Intrax (SEO)</div>
                <div className="text-[#57534E]">SEO Strategy & On-Page SEO Optimization</div>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#E7E2D8]">
                <div className="font-bold text-[#1C1917]">2. Insd (SEO)</div>
                <div className="text-[#57534E]">Keyword Research & Content Optimization</div>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#E7E2D8]">
                <div className="font-bold text-[#1C1917]">3. Triaz (Technical SEO)</div>
                <div className="text-[#57534E]">Technical SEO & Site Performance</div>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#E7E2D8]">
                <div className="font-bold text-[#1C1917]">4. Dream Sketch (SEO / WordPress)</div>
                <div className="text-[#57534E]">SEO & WordPress Asset Optimization</div>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded border border-[#E7E2D8] sm:col-span-2">
                <div className="font-bold text-[#1C1917]">5. Best Precision (Local SEO)</div>
                <div className="text-[#57534E]">Local SEO & Google Business Profile Optimization</div>
              </div>
            </div>
          </div>

          {/* Technical Tools & SEO Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Tools & Technologies
            </h3>
            <p className="text-xs text-[#44403C] leading-relaxed">
              <strong>SEO & Analytics:</strong> SEMrush, Google Search Console, Google Analytics 4, Google Tag Manager, Microsoft Clarity, Google Business Profile (formerly GMB)
              <br />
              <strong>CMS & Marketing:</strong> WordPress, Hootsuite, Mailchimp, Adobe Express
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Education
            </h3>
            <div className="flex justify-between items-start text-xs">
              <div>
                <div className="font-bold text-[#1C1917]">{education.degree}</div>
                <div className="text-[#57534E]">{education.institution}</div>
              </div>
              <div className="text-[#78716C] font-medium">{education.period}</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Certifications & Additional Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A6B38] flex-shrink-0" />
                  <span><strong>{c.title}</strong> — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] border-b border-[#E7E2D8] pb-1">
              Professional Competencies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-[#FAF9F6] border border-[#E7E2D8] px-2.5 py-1 rounded text-[#292524]">Time Management</span>
              <span className="bg-[#FAF9F6] border border-[#E7E2D8] px-2.5 py-1 rounded text-[#292524]">Problem Solving</span>
              <span className="bg-[#FAF9F6] border border-[#E7E2D8] px-2.5 py-1 rounded text-[#292524]">Adaptability</span>
              <span className="bg-[#FAF9F6] border border-[#E7E2D8] px-2.5 py-1 rounded text-[#292524]">Client Communication</span>
              <span className="bg-[#FAF9F6] border border-[#E7E2D8] px-2.5 py-1 rounded text-[#292524]">Data-Driven Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
