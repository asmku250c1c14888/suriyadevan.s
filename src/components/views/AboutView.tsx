import React from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { toolsAndTech } from '../../data/initialData';

export const AboutView: React.FC = () => {
  const { siteSettings, experience, certifications, education, navigateTo, trackEvent } = useData();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteSettings.name,
      jobTitle: siteSettings.roleTitle,
      url: window.location.href,
      email: siteSettings.email,
      telephone: siteSettings.phone,
      sameAs: [siteSettings.linkedin],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palani',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: education.institution
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <SEOHead
        title="About SuriyaDevan S — SEO & Digital Marketing Specialist | Palani"
        description="Learn about SuriyaDevan S, an SEO & Digital Marketing Specialist in Palani, Tamil Nadu. Experience at Avanexa & Cannibals Media, certifications, and technical capabilities."
        schema={aboutSchema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Hero Header */}
        <div className="mt-4 pb-10 border-b border-slate-200 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <MapPin className="w-3.5 h-3.5" />
            <span>Palani, Tamil Nadu, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            About SuriyaDevan S — SEO & Digital Marketing Specialist
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Helping businesses improve Google visibility, local search presence, website performance, and digital brand visibility through ethical, data-informed search engine optimization and performance marketing.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                trackEvent('consultation_click', 'About Page CTA');
                navigateTo('/contact');
              }}
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all shadow-sm flex items-center space-x-1.5"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={siteSettings.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('linkedin_click', 'About Page LinkedIn')}
              className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="py-12 border-b border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            SEO and Digital Marketing Executive with hands-on experience managing end-to-end SEO projects, including On-Page SEO, Off-Page SEO, Link Building, Local SEO, Technical SEO, Keyword Research, Content Optimization, Google Ads, Paid Search Campaigns, Social Media Marketing, Content Strategy, Email Marketing, Website Analytics, and WordPress Website Management.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Experience includes achieving Google first-page rankings and improving organic traffic through data-driven strategies, search intent mapping, and analytical continuous optimization.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="py-12 border-b border-slate-200 space-y-8">
          <div>
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              Career History
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8 relative pl-6 border-l-2 border-indigo-200">
            {experience.map((exp) => (
              <div key={exp.id} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-2 border-white shadow-xs" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">{exp.role}</h3>
                    <div className="text-xs font-semibold text-indigo-600">{exp.company} • {exp.location}</div>
                  </div>
                  <span className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold mt-1 sm:mt-0 self-start sm:self-auto border border-slate-200/60">
                    {exp.period} ({exp.type})
                  </span>
                </div>

                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="py-12 border-b border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold text-slate-900 font-display">Education</h2>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <h3 className="text-sm font-bold text-slate-900">{education.degree}</h3>
              <p className="text-xs text-slate-600 font-medium">{education.institution}</p>
              <div className="text-[11px] text-slate-400 pt-2">{education.period} • {education.location}</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold text-slate-900 font-display">Certifications & Courses</h2>
            </div>
            <div className="space-y-2.5">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{cert.title}</div>
                    <div className="text-slate-500">{cert.issuer}</div>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills & Work Ethic */}
        <div className="py-12 border-b border-slate-200 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 font-display">Core Professional Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="font-bold text-slate-900 mb-1">Time Management</div>
              <p className="text-slate-600 leading-relaxed">Structured sprint scheduling, milestone delivery across multiple client accounts, and timely communication.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="font-bold text-slate-900 mb-1">Problem Solving</div>
              <p className="text-slate-600 leading-relaxed">Diagnosing technical crawl bottlenecks, schema syntax anomalies, and identifying search-intent mismatches.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="font-bold text-slate-900 mb-1">Adaptability</div>
              <p className="text-slate-600 leading-relaxed">Staying abreast of evolving Google search algorithm updates, AI search shifts, and emerging local search features.</p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="py-12 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 font-display">Tools & Technical Stack</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {toolsAndTech.map((tool, idx) => (
              <span key={idx} className="bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                {tool.name} <span className="text-slate-400 font-normal">({tool.category})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
