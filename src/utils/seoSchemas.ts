/**
 * Standardized Schema.org JSON-LD structured data generators for SEO, AIO, GEO, and AEO.
 * Optimized for Google Rich Results (Sitelinks Searchbox, FAQPage, BreadcrumbList, LocalBusiness, Service, BlogPosting, Person).
 */

export const DOMAIN_URL = 'https://suriyadevan-s.vercel.app';

export interface BreadcrumbEntry {
  name: string;
  path?: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

/**
 * Global Person Schema for SURIYADEVAN S
 */
export function buildPersonSchema(origin = DOMAIN_URL) {
  return {
    '@type': 'Person',
    '@id': `${origin}/#person`,
    name: 'SURIYADEVAN S',
    givenName: 'SURIYADEVAN',
    familyName: 'S',
    additionalName: 'Suriya',
    jobTitle: 'SEO & Digital Marketing Specialist',
    description: 'Specialist in Search Engine Optimization, Google Business Profile, Local SEO, Technical SEO, and Meta Ads for businesses in Palani, Tamil Nadu, and globally.',
    url: origin,
    image: `${origin}/favicon.svg`,
    telephone: '+919087571737',
    email: 'suriya2993@gmail.com',
    birthPlace: 'Palani, Tamil Nadu, India',
    nationality: 'Indian',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palani',
      addressLocality: 'Palani',
      addressRegion: 'Tamil Nadu',
      postalCode: '624601',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/in/suriyadevan/',
      'https://github.com/suriyadevan',
      'https://twitter.com/suriyadevan',
      'https://instagram.com/suriyadevan'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Subramanya College of Arts and Science, Palani',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palani',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      }
    },
    knowsAbout: [
      'Search Engine Optimization (SEO)',
      'Local SEO',
      'Technical SEO',
      'Google Business Profile Optimization',
      'Google Maps 3-Pack Rankings',
      'Meta Ads Management (Facebook & Instagram)',
      'Social Media Marketing & Reels Strategy',
      'WordPress SEO & Speed Optimization',
      'Google Search Console',
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Microsoft Clarity',
      'SEMrush',
      'PageSpeed Insights & Core Web Vitals',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)'
    ]
  };
}

/**
 * LocalBusiness / ProfessionalService Schema for Palani SEO agency/freelance practice
 */
export function buildLocalBusinessSchema(origin = DOMAIN_URL) {
  return {
    '@type': 'ProfessionalService',
    '@id': `${origin}/#service-business`,
    name: 'SURIYADEVAN S — SEO & Digital Marketing Specialist Palani',
    alternateName: 'SuriyaDevan SEO Consultant Palani',
    description: 'Premier SEO and digital marketing consultancy in Palani, Tamil Nadu. Delivering top Google keyword rankings, Google Maps 3-pack visibility, high-ROAS Meta Ads, and social media growth.',
    url: origin,
    logo: `${origin}/favicon.svg`,
    image: `${origin}/og-image.svg`,
    telephone: '+919087571737',
    email: 'suriya2993@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR, USD',
    paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palani Town',
      addressLocality: 'Palani',
      addressRegion: 'Tamil Nadu',
      postalCode: '624601',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.4500',
      longitude: '77.5167'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Palani' },
      { '@type': 'City', name: 'Dindigul' },
      { '@type': 'City', name: 'Oddanchatram' },
      { '@type': 'City', name: 'Dharapuram' },
      { '@type': 'City', name: 'Udumalpet' },
      { '@type': 'City', name: 'Pollachi' },
      { '@type': 'City', name: 'Coimbatore' },
      { '@type': 'City', name: 'Madurai' },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SEO and Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            url: `${origin}/services/seo`,
            description: 'Comprehensive keyword research, on-page optimization, and technical search growth.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO Services',
            url: `${origin}/services/local-seo`,
            description: 'Google Maps 3-pack optimization, NAP citations, and geo-targeted traffic.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO Audit',
            url: `${origin}/services/technical-seo`,
            description: 'Crawl error fixes, Core Web Vitals acceleration, and schema markup implementation.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            url: `${origin}/services/social-media-management`,
            description: 'Content calendar planning, custom promotional posters, and viral Reels concepts.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meta Ads Management',
            url: `${origin}/services/meta-ads`,
            description: 'High-conversion Facebook and Instagram ad campaigns for leads and sales.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Business Profile Optimization',
            url: `${origin}/services/google-business-profile`,
            description: 'Complete profile setup, category refinement, and review acquisition framework.'
          }
        }
      ]
    }
  };
}

/**
 * WebSite Schema with Sitelinks Searchbox
 */
export function buildWebSiteSchema(origin = DOMAIN_URL) {
  return {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: origin,
    name: 'SURIYADEVAN S | SEO & Digital Marketing Specialist Palani',
    alternateName: 'Suriyadevan Portfolio',
    description: 'Official portfolio and digital marketing website of SURIYADEVAN S in Palani, Tamil Nadu.',
    publisher: {
      '@id': `${origin}/#person`
    },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${origin}/services?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * BreadcrumbList Schema
 */
export function buildBreadcrumbSchema(items: BreadcrumbEntry[], origin = DOMAIN_URL) {
  const itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: origin
    }
  ];

  items.forEach((item, idx) => {
    const itemUrl = item.path
      ? (item.path.startsWith('http') ? item.path : `${origin}${item.path}`)
      : undefined;

    itemListElement.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: item.name,
      ...(itemUrl ? { item: itemUrl } : {})
    });
  });

  return {
    '@type': 'BreadcrumbList',
    itemListElement
  };
}

/**
 * FAQPage Schema for Google Rich Snippets
 */
export function buildFAQSchema(faqs: FAQEntry[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Service Detail Page Schema
 */
export function buildServiceSchema(
  service: {
    name: string;
    shortDescription: string;
    fullDescription?: string;
    slug: string;
    localFocus?: string;
    faqs?: FAQEntry[];
  },
  origin = DOMAIN_URL
) {
  const serviceUrl = `${origin}/services/${service.slug}`;
  const graph: any[] = [
    {
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: service.name,
      description: service.shortDescription,
      url: serviceUrl,
      provider: {
        '@id': `${origin}/#person`
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: service.localFocus || 'Palani, Tamil Nadu, India'
      },
      serviceType: service.name,
      category: 'Digital Marketing & SEO Services',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        price: 'Contact for custom quote',
        url: `${origin}/contact`
      }
    },
    buildBreadcrumbSchema(
      [
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/services/${service.slug}` }
      ],
      origin
    )
  ];

  if (service.faqs && service.faqs.length > 0) {
    const faqSchema = buildFAQSchema(service.faqs);
    if (faqSchema) graph.push(faqSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

/**
 * BlogPosting / Article Schema
 */
export function buildBlogPostingSchema(
  post: {
    title: string;
    excerpt: string;
    slug: string;
    publishDate: string;
    modifiedDate?: string;
    category?: string;
    focusKeyword?: string;
    faqs?: FAQEntry[];
  },
  origin = DOMAIN_URL
) {
  const postUrl = `${origin}/blog/${post.slug}`;
  const graph: any[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${postUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      url: postUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl
      },
      datePublished: post.publishDate,
      dateModified: post.modifiedDate || post.publishDate,
      author: {
        '@id': `${origin}/#person`
      },
      publisher: {
        '@id': `${origin}/#service-business`
      },
      image: `${origin}/og-image.svg`,
      articleSection: post.category || 'SEO & Digital Marketing',
      keywords: post.focusKeyword ? `${post.focusKeyword}, SEO Palani, Digital Marketing` : 'SEO Palani, Digital Marketing'
    },
    buildBreadcrumbSchema(
      [
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` }
      ],
      origin
    )
  ];

  if (post.faqs && post.faqs.length > 0) {
    const faqSchema = buildFAQSchema(post.faqs);
    if (faqSchema) graph.push(faqSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

/**
 * CollectionPage Schema for Services & Blog Directory
 */
export function buildCollectionSchema(
  name: string,
  description: string,
  path: string,
  items: { name: string; url: string; description?: string }[],
  origin = DOMAIN_URL
) {
  const collectionUrl = `${origin}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${collectionUrl}#collection`,
        name,
        description,
        url: collectionUrl,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            url: item.url.startsWith('http') ? item.url : `${origin}${item.url}`,
            ...(item.description ? { description: item.description } : {})
          }))
        }
      },
      buildBreadcrumbSchema([{ name, path }], origin)
    ]
  };
}

/**
 * About Page Schema
 */
export function buildAboutPageSchema(origin = DOMAIN_URL) {
  const aboutUrl = `${origin}/about`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${aboutUrl}#about`,
        name: 'About SURIYADEVAN S — SEO & Digital Marketing Specialist',
        description: 'Comprehensive profile and experience of SURIYADEVAN S, an SEO & Digital Marketing Specialist based in Palani, Tamil Nadu.',
        url: aboutUrl,
        mainEntity: {
          '@id': `${origin}/#person`
        }
      },
      buildPersonSchema(origin),
      buildBreadcrumbSchema([{ name: 'About', path: '/about' }], origin)
    ]
  };
}

/**
 * Contact Page Schema
 */
export function buildContactPageSchema(origin = DOMAIN_URL) {
  const contactUrl = `${origin}/contact`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${contactUrl}#contact`,
        name: 'Contact SURIYADEVAN S — Free SEO Consultation',
        description: 'Get in touch with SURIYADEVAN S for freelance SEO, Local SEO, and Digital Marketing consulting in Palani, Tamil Nadu.',
        url: contactUrl,
        mainEntity: {
          '@id': `${origin}/#service-business`
        }
      },
      buildBreadcrumbSchema([{ name: 'Contact', path: '/contact' }], origin)
    ]
  };
}

/**
 * Resume ProfilePage Schema
 */
export function buildResumePageSchema(origin = DOMAIN_URL) {
  const resumeUrl = `${origin}/resume`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${resumeUrl}#profile`,
        name: 'Resume of SURIYADEVAN S — SEO & Digital Marketing Specialist',
        description: 'Professional resume and qualifications of SURIYADEVAN S in Palani: certifications in SEMrush & Google, tools expertise, and client case studies.',
        url: resumeUrl,
        mainEntity: {
          '@id': `${origin}/#person`
        }
      },
      buildBreadcrumbSchema([{ name: 'Resume', path: '/resume' }], origin)
    ]
  };
}
