import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export function SEO({ 
  title = "Adwokat Wojciech Luty - Prawo Rodzinne i Rozwody Kraków | Kancelaria SLABR",
  description = "Adwokat Wojciech Luty - specjalista prawa rodzinnego w Krakowie. Ponad 10 lat doświadczenia, 800+ spraw. Rozwody, alimenty, opieka nad dziećmi, podział majątku.",
  keywords = "adwokat Kraków, prawo rodzinne Kraków, rozwód Kraków, alimenty, opieka nad dziećmi, podział majątku",
  canonicalUrl = "https://adwokat-luty.netlify.app/"
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);

    // Twitter
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [title, description, keywords, canonicalUrl]);

  return null;
}
