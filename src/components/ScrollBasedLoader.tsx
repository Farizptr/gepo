import { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollBasedLoaderProps {
  children: ReactNode;
  id?: string;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  minHeight?: string;
  animationType?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
  animationDelay?: number;
  animationDuration?: number;
}

/**
 * Component that only renders its children when scrolled into view
 * Provides animation and placeholder while content is loading
 */
export default function ScrollBasedLoader({
  children,
  id,
  className = '',
  rootMargin = '200px 0px',
  threshold = 0.1,
  minHeight = '200px',
  animationType = 'fade-up',
  animationDelay = 0,
  animationDuration = 800
}: ScrollBasedLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay setting visibility slightly to allow for smooth animation
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  // Define animation classes based on the animation type
  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animationType) {
      case 'fade-up':
        return 'animate-fade-up';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'zoom-in':
        return 'animate-zoom-in';
      default:
        return 'animate-fade-up';
    }
  };

  return (
    <div 
      ref={sectionRef} 
      id={id}
      className={`${className}`}
      style={{ minHeight }}
    >
      <div 
        className={`${getAnimationClasses()}`}
        style={{
          animationDuration: `${animationDuration}ms`,
          animationDelay: `${animationDelay}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {isVisible ? (
          children
        ) : (
          <div className="w-full h-full">
            {/* Empty placeholder - no loading indicator */}
          </div>
        )}
      </div>
    </div>
  );
}
