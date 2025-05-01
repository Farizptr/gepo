/**
 * Utility functions for optimizing images
 */

/**
 * Checks if the browser supports WebP format
 * @returns Promise that resolves to true if WebP is supported
 */
export const checkWebPSupport = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = () => resolve(true);
    webP.onerror = () => resolve(false);
    webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
};

/**
 * Gets the appropriate image source based on browser support
 * @param src Original image source
 * @param webpSrc WebP version of the image
 * @returns Promise that resolves to the appropriate image source
 */
export const getOptimalImageSrc = async (src: string, webpSrc?: string): Promise<string> => {
  // If no WebP version is provided, try to generate one
  if (!webpSrc && src.match(/\.(jpe?g|png)$/i)) {
    webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
  }
  
  // If we have a WebP version and browser supports it, use it
  if (webpSrc && await checkWebPSupport()) {
    return webpSrc;
  }
  
  // Fallback to original source
  return src;
};

/**
 * Generates a tiny placeholder for blur-up loading
 * @param src Image source
 * @returns Data URL for placeholder
 */
export const generateTinyPlaceholder = (src: string): string => {
  // For now, we'll just return a color based on the image path
  // In a production app, you might want to generate actual tiny thumbnails
  const hash = src.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Generate a light pastel color based on the hash
  const hue = Math.abs(hash) % 360;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='hsl(${hue}, 60%, 85%)'/%3E%3C/svg%3E`;
};
