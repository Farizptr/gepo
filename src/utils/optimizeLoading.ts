/**
 * Utility functions for optimizing resource loading
 */

/**
 * Dynamically load a CSS file
 * @param href URL of the CSS file to load
 * @param id Optional ID for the link element
 */
export const loadCSS = (href: string, id?: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if the stylesheet is already loaded
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (id) link.id = id;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
    document.head.appendChild(link);
  });
};

/**
 * Preload critical images
 * @param urls Array of image URLs to preload
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  const promises = urls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload image: ${url}`));
    });
  });
  
  return Promise.all(promises);
};

/**
 * Defer non-critical JavaScript
 * @param src URL of the script to load
 * @param id Optional ID for the script element
 * @param async Whether to load the script asynchronously
 */
export const loadScript = (src: string, id?: string, async = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if the script is already loaded
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.async = async;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.body.appendChild(script);
  });
};

/**
 * Implement requestIdleCallback with fallback
 * @param callback Function to execute during idle time
 */
export const runWhenIdle = (callback: () => void): void => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(callback, 1);
  }
};
