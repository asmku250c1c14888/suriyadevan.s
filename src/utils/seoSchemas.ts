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
    alternateName: [
      'Suriyadevan',
      'Suriya Devan',
      'Suriyadevan S',
      'Suriyadevan Palani',
      'Suriyadevan SEO Specialist',
      'Suriyadevan Digital Marketer',
      'Suriyadevan Freelance SEO'
    ],
    disambiguatingDescription: 'SURIYADEVAN S is a professional Indian SEO Specialist and Digital Marketing Consultant from Palani, Tamil Nadu, recognized for Google first-page search rankings, Local SEO, and technical site performance.',
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
      name: 'Rev. Jacob Memorial Christian College (Bachelor of Commerce in Computer Applications)',
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
    name: 'SURIYADEVAN S — Digital Marketing Agency in Palani | SEO Services & Company',
    alternateName: [
      'Digital Marketing Agency in Palani',
      'Digital Marketing Company in Palani',
      'Digital Marketing Services in Palani',
      'Digital Marketing Consultant Palani',
      'Digital Marketing Expert Palani',
      'Online Marketing Agency Palani',
      'Internet Marketing Agency Palani',
      'Digital Advertising Agency Palani',
      'Marketing Agency Palani',
      'SEO Services in Palani',
      'Local SEO Services Palani',
      'Google Maps SEO Palani',
      'Google Business Profile Optimization Palani',
      'Google Ads Agency Palani',
      'Social Media Marketing Agency Palani',
      'Instagram Marketing Agency Palani',
      'Website Development Company Palani',
      'Digital Marketing for Small Businesses Palani',
      'Affordable Digital Marketing Services Palani',
      'Palani Digital Marketing Company',
      'Palani Digital Marketing Agency',
      'Suriyadevan SEO Consultant Palani'
    ],
    disambiguatingDescription: 'Premier digital marketing agency and SEO company in Palani, Tamil Nadu, run by Suriyadevan S. Delivering Google 1st-page rankings, Google Maps 3-pack visibility, high-ROAS Meta Ads, Google Ads PPC management, social media growth, and website development for small businesses and shops in Palani, Oddanchatram, Dharapuram, Udumalpet, and Dindigul.',
    description: 'Premier digital marketing agency and SEO company in Palani, Tamil Nadu. Delivering top Google keyword rankings, Google Maps 3-pack visibility, high-ROAS Meta Ads, Google Ads PPC, and website development for local businesses.',
    url: origin,
    logo: `${origin}/favicon.svg`,
    image: `${origin}/og-image.svg`,
    telephone: '+919087571737',
    email: 'suriya2993@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR, USD',
    paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
    keywords: 'digital marketing agency in Palani, digital marketing company in Palani, digital marketing services in Palani, digital marketing consultant Palani, digital marketing expert Palani, online marketing agency Palani, internet marketing agency Palani, digital advertising agency Palani, marketing agency Palani, digital marketing services near me, SEO services in Palani, local SEO services Palani, Google Maps SEO Palani, Google Business Profile optimization Palani, Google ranking service Palani, website SEO service Palani, Instagram marketing agency Palani, social media marketing agency Palani, Facebook advertising agency Palani, Google Ads agency Palani, PPC agency Palani, WhatsApp marketing services Palani, content marketing agency Palani, reputation management Palani, website development company Palani, ecommerce website development Palani, affordable digital marketing services Palani, digital marketing for small business Palani, digital marketing for shops Palani, digital marketing for restaurants Palani, digital marketing for hotels Palani, digital marketing for textile shops Palani, digital marketing agency near Palani, digital marketing agency Oddanchatram, digital marketing agency Dharapuram, digital marketing agency Udumalpet, digital marketing agency Dindigul, SEO services Palani, SEO services Dindigul, digital marketing agency Palani Tamil, Palani digital marketing company, Suriyadevan S',
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
      name: 'Digital Marketing & SEO Services in Palani',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing Services in Palani',
            url: `${origin}/services`,
            description: 'Full-funnel digital marketing services, online advertising, and organic growth consulting in Palani.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services in Palani',
            url: `${origin}/services/seo`,
            description: 'Google ranking service, website SEO service, high-intent keyword mapping, and organic traffic growth.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO Services & Google Maps SEO Palani',
            url: `${origin}/services/local-seo`,
            description: 'Google Maps 3-pack optimization, NAP citations, and geo-targeted customer foot-traffic.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Business Profile Optimization Palani',
            url: `${origin}/services/google-business-profile`,
            description: 'Complete profile setup, category refinement, review acquisition framework, and local map ranking.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Marketing & Instagram Marketing Agency Palani',
            url: `${origin}/services/social-media-management`,
            description: 'Content calendar planning, custom promotional posters, viral Instagram Reels concepts, and brand growth.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meta Ads & Facebook Advertising Agency Palani',
            url: `${origin}/services/meta-ads`,
            description: 'High-conversion Facebook and Instagram ad campaigns for lead generation, footfall, and WhatsApp orders.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads Agency & PPC Management Palani',
            url: `${origin}/services/google-ads-agency`,
            description: 'Targeted Google Search, Call-only, and Shopping PPC campaigns capturing high-intent local buyers.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development Company & Ecommerce in Palani',
            url: `${origin}/services/website-development`,
            description: 'Modern, mobile-first responsive business websites, ecommerce stores, and high-converting landing pages.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing for Small Businesses & Shops in Palani',
            url: `${origin}/services`,
            description: 'Tailored, affordable digital marketing for shops, textile stores, restaurants, hotels, clinics, and startups.'
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
    palaniKeywords?: string[];
    searchIntents?: Array<{ intent: string; query: string; solution: string }>;
    faqs?: FAQEntry[];
  },
  origin = DOMAIN_URL
) {
  const serviceUrl = `${origin}/services/${service.slug}`;
  
  // Combine FAQs and searchIntents into Google FAQ rich snippet format
  const combinedFaqs: FAQEntry[] = [
    ...(service.faqs || []),
    ...((service.searchIntents || []).map(si => ({
      question: si.query,
      answer: si.solution
    })))
  ];

  const keywordsList = service.palaniKeywords && service.palaniKeywords.length > 0
    ? service.palaniKeywords.join(', ')
    : `${service.name} in Palani, ${service.name} Tamil Nadu, Palani SEO Specialist, Suriyadevan S`;

  const graph: any[] = [
    {
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: `${service.name} in Palani, Tamil Nadu`,
      description: service.fullDescription || service.shortDescription,
      url: serviceUrl,
      provider: {
        '@id': `${origin}/#person`
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Palani',
          postalCode: '624601',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Dindigul District, Tamil Nadu'
        },
        {
          '@type': 'City',
          name: 'Oddanchatram, Tamil Nadu'
        },
        {
          '@type': 'City',
          name: 'Dharapuram, Tamil Nadu'
        },
        {
          '@type': 'City',
          name: 'Udumalpet, Tamil Nadu'
        },
        {
          '@type': 'State',
          name: 'Tamil Nadu'
        },
        {
          '@type': 'Country',
          name: 'India'
        }
      ],
      serviceType: `${service.name} in Palani`,
      category: 'Digital Marketing & SEO Services',
      keywords: keywordsList,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Packages - Palani & Remote`,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `Preliminary ${service.name} Audit & Consultation`,
              description: `Initial diagnostic assessment for ${service.name} tailored for Palani businesses.`
            },
            price: '0',
            priceCurrency: 'INR'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `Monthly ${service.name} Execution`,
              description: `End-to-end execution, monitoring, and performance optimization.`
            },
            priceCurrency: 'INR',
            price: 'Custom'
          }
        ]
      },
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
        { name: `${service.name} in Palani`, path: `/services/${service.slug}` }
      ],
      origin
    )
  ];

  if (combinedFaqs.length > 0) {
    const faqSchema = buildFAQSchema(combinedFaqs);
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
