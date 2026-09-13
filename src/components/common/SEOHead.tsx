import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonical, 
  keywords, 
  ogType = 'website',
  ogImage,
  schema,
  noIndex = false
}) => {
  useEffect(() => {
    // Strict SEO bounds: Max 60 chars for Meta Title, Max 160 chars for Meta Description
    const trimmedTitle = title.trim();
    const finalTitle = trimmedTitle.length > 60 ? trimmedTitle.slice(0, 60).trim() : trimmedTitle;

    const trimmedDesc = description.trim();
    const finalDesc = trimmedDesc.length > 160 ? trimmedDesc.slice(0, 160).trim() : trimmedDesc;

    // Update document title
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', contentVal);
    };

    // Update meta description
    setMetaTag('name', 'description', finalDesc);

    // Update meta keywords if provided
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Author
    setMetaTag('name', 'author', 'SURIYADEVAN S');

    // Robots
    setMetaTag(
      'name', 
      'robots', 
      noIndex 
        ? 'noindex, nofollow' 
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // Geo tags for Palani, Tamil Nadu
    setMetaTag('name', 'geo.region', 'IN-TN');
    setMetaTag('name', 'geo.placename', 'Palani, Tamil Nadu');
    setMetaTag('name', 'geo.position', '10.4500;77.5167');
    setMetaTag('name', 'ICBM', '10.4500, 77.5167');

    // Open Graph
    setMetaTag('property', 'og:site_name', 'SURIYADEVAN S | SEO & Digital Marketing');
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDesc);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:locale', 'en_IN');

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://suriyadevan-s.vercel.app';
    const targetUrl = canonical || (origin + (window.location.pathname === '/' ? '' : window.location.pathname));
    setMetaTag('property', 'og:url', targetUrl || origin);

    const defaultImage = `${origin}/og-image.svg`;
    setMetaTag('property', 'og:image', ogImage || defaultImage);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDesc);
    setMetaTag('name', 'twitter:image', ogImage || defaultImage);

    // Update canonical tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || targetUrl || 'https://suriyadevan-s.vercel.app/');

    // Inject or update JSON-LD schema
    const existingScript = document.getElementById('page-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-json-ld';
      script.type = 'application/ld+json';
      
      let finalSchema = schema;
      // If schema is an array of schemas, wrap in @graph
      if (Array.isArray(schema)) {
        finalSchema = {
          '@context': 'https://schema.org',
          '@graph': schema
        };
      } else if (!schema['@context'] && !schema['@graph']) {
        finalSchema = {
          '@context': 'https://schema.org',
          ...schema
        };
      }

      script.text = JSON.stringify(finalSchema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('page-json-ld');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [title, description, canonical, keywords, ogType, ogImage, schema, noIndex]);

  return null;
};

