import { useEffect } from 'react';

interface ResourceHintsProps {
  preloads?: Array<{
    href: string;
    as: 'image' | 'style' | 'script' | 'font';
    type?: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
  }>;
  prefetches?: Array<{
    href: string;
  }>;
  preconnects?: Array<{
    href: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
  }>;
}

/**
 * Component that adds resource hints to the document head
 * This helps the browser prioritize loading of critical resources
 */
export default function ResourceHints({ preloads = [], prefetches = [], preconnects = [] }: ResourceHintsProps) {
  useEffect(() => {
    // Add preload links
    const preloadLinks = preloads.map(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      link.dataset.resourceHint = 'true';
      return link;
    });

    // Add prefetch links
    const prefetchLinks = prefetches.map(({ href }) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      link.dataset.resourceHint = 'true';
      return link;
    });

    // Add preconnect links
    const preconnectLinks = preconnects.map(({ href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      link.dataset.resourceHint = 'true';
      return link;
    });

    // Add all links to head
    const allLinks = [...preloadLinks, ...prefetchLinks, ...preconnectLinks];
    allLinks.forEach(link => document.head.appendChild(link));

    // Clean up function to remove links when component unmounts
    return () => {
      document.querySelectorAll('link[data-resource-hint="true"]').forEach(link => {
        document.head.removeChild(link);
      });
    };
  }, [preloads, prefetches, preconnects]);

  // This component doesn't render anything
  return null;
}
