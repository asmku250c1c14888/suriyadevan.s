import React from 'react';
import { useData } from '../../context/DataContext';
import { SEOHead } from '../common/SEOHead';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { buildBreadcrumbSchema } from '../../utils/seoSchemas';

export const LegalView: React.FC<{ type: 'privacy' | 'terms' | 'disclaimer' }> = ({ type }) => {
  const { siteSettings } = useData();

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer & Factual Representation Policy'
  };

  const seoData = {
    privacy: {
      title: 'Privacy Policy | SURIYADEVAN S SEO Specialist',
      desc: 'Privacy policy and client data protection practices for SURIYADEVAN S, freelance SEO and digital marketing specialist in Palani, Tamil Nadu. Reviewed annually.'
    },
    terms: {
      title: 'Terms of Service | SURIYADEVAN S SEO Specialist',
      desc: 'Terms of service and engagement agreements for SEO, Local SEO, Meta Ads & digital marketing services provided by SURIYADEVAN S in Palani, Tamil Nadu.'
    },
    disclaimer: {
      title: 'Disclaimer Policy | SURIYADEVAN S SEO Specialist',
      desc: 'Disclaimer and performance representations policy for SEO consulting, digital marketing results, and client case studies presented by SURIYADEVAN S in Palani.'
    }
  };

  const currentSeo = seoData[type] || seoData.privacy;
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
  const pagePath = `/${type}`;
  const canonicalUrl = `${origin}${pagePath}`;

  const legalSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        name: titles[type],
        description: currentSeo.desc,
        url: canonicalUrl,
        publisher: {
          '@id': `${origin}/#person`
        }
      },
      buildBreadcrumbSchema([{ name: titles[type], path: pagePath }], origin)
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.desc}
        canonical={canonicalUrl}
        schema={legalSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: titles[type] }]} />

        <div className="mt-4 pb-8 border-b border-slate-200">
          <h1 className="text-3xl font-black text-slate-900 font-display">{titles[type]}</h1>
          <p className="text-xs text-slate-500 mt-1">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="py-8 prose prose-slate text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                This Privacy Policy outlines how SURIYADEVAN S handles information collected through this portfolio and consultation website.
              </p>
              <h2 className="text-base font-bold text-slate-900 font-display">Information Collection</h2>
              <p>
                When you submit an inquiry via the contact form, your name, email address, phone number, and project details are collected solely to evaluate and respond to your digital marketing consultation request. We never sell, rent, or distribute personal information to third parties.
              </p>
              <h2 className="text-base font-bold text-slate-900 font-display">Analytics & Performance</h2>
              <p>
                Standard website interaction metrics (such as page views, device types, and referral sources) may be monitored via Google Search Console and Google Analytics to improve website accessibility and user experience.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By using this website, you agree to these Terms of Service.
              </p>
              <h2 className="text-base font-bold text-slate-900 font-display">Consulting Services</h2>
              <p>
                All digital marketing, search engine optimization, and local SEO services provided by SURIYADEVAN S are subject to individual written agreements and proposals mutually agreed upon prior to project commencement.
              </p>
              <h2 className="text-base font-bold text-slate-900 font-display">Intellectual Property</h2>
              <p>
                All original textual content, frameworks, and portfolio presentations on this website are the intellectual property of SURIYADEVAN S unless otherwise stated.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                <strong>Search Ranking & Performance Disclaimer:</strong>
              </p>
              <p>
                Search Engine Optimization (SEO) involves complex third-party algorithms managed by search engines including Google. While SURIYADEVAN S employs verified white-hat methodologies, best practices, and data-driven optimizations that have successfully generated Google first-page rankings, no digital marketer can ethically guarantee fixed #1 positions or specific traffic volumes.
              </p>
              <h2 className="text-base font-bold text-slate-900 font-display">Data Transparency & Metrics</h2>
              <p>
                Case study overviews document verified client deliverables. Where client data confidentiality is required, metrics reflect actual methodology outcomes without compromising proprietary company data.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
