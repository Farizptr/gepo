import { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderSrc?: string;
  blurAmount?: number;
}

export default function ImageLoader({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  placeholderSrc,
  blurAmount = 10
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate a tiny placeholder if not provided
  const placeholder = placeholderSrc || generateTinyPlaceholder(src);

  useEffect(() => {
    // Create new image to preload
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      // Add a small delay to make the transition smoother
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    };
    
    return () => {
      // Clean up
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurry placeholder image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `blur(${blurAmount}px)`,
          transform: 'scale(1.1)' // Slightly larger to prevent blur edges
        }}
      />
      
      {/* Main image that fades in when loaded */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
      />
    </div>
  );
}

// Helper function to generate a tiny placeholder version of the image
function generateTinyPlaceholder(src: string): string {
  // For now, we'll just return a color based on the image path
  // In a production app, you might want to generate actual tiny thumbnails
  const hash = src.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Generate a light pastel color based on the hash
  const hue = Math.abs(hash) % 360;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='hsl(${hue}, 60%, 85%)'/%3E%3C/svg%3E`;
}
