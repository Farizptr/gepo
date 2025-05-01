import { lazy, Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import ScrollBasedLoader from './components/ScrollBasedLoader';

// Lazy load section components
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Legality = lazy(() => import('./components/sections/Legality'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Comments = lazy(() => import('./components/sections/Comments'));
const Footer = lazy(() => import('./components/sections/Footer'));
const Product = lazy(() => import('./components/sections/Product'));

// Simple empty fallback that maintains space but doesn't show a loading indicator
const EmptyFallback = () => <div className="min-h-[100px]"></div>;

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        {/* Hero is loaded immediately since it's above the fold */}
        <Suspense fallback={<EmptyFallback />}>
          <Hero />
        </Suspense>
        
        {/* Other sections are loaded only when scrolled into view */}
        <ScrollBasedLoader 
          id="about" 
          minHeight="300px" 
          animationType="fade-up"
          animationDuration={800}
        >
          <Suspense fallback={<EmptyFallback />}>
            <About />
          </Suspense>
        </ScrollBasedLoader>
        
        <ScrollBasedLoader 
          id="product" 
          minHeight="300px"
          animationType="slide-in-right"
          animationDuration={900}
        >
          <Suspense fallback={<EmptyFallback />}>
            <Product />
          </Suspense>
        </ScrollBasedLoader>
        
        <ScrollBasedLoader 
          id="legality" 
          minHeight="300px"
          animationType="slide-in-left"
          animationDuration={900}
        >
          <Suspense fallback={<EmptyFallback />}>
            <Legality />
          </Suspense>
        </ScrollBasedLoader>
        
        <ScrollBasedLoader 
          id="projects" 
          minHeight="400px"
          animationType="zoom-in"
          animationDuration={1000}
        >
          <Suspense fallback={<EmptyFallback />}>
            <Projects />
          </Suspense>
        </ScrollBasedLoader>
        
        <ScrollBasedLoader 
          id="comments" 
          minHeight="400px"
          animationType="fade-up"
          animationDuration={800}
          animationDelay={200}
        >
          <Suspense fallback={<EmptyFallback />}>
            <Comments />
          </Suspense>
        </ScrollBasedLoader>
      </main>
      
      <ScrollBasedLoader 
        id="footer" 
        minHeight="200px"
        animationType="fade-in"
        animationDuration={1000}
      >
        <Suspense fallback={<EmptyFallback />}>
          <Footer />
        </Suspense>
      </ScrollBasedLoader>
    </div>
  );
}

export default App;
