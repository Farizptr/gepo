import { lazy, Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar';

// Lazy load section components
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Legality = lazy(() => import('./components/sections/Legality'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Comments = lazy(() => import('./components/sections/Comments'));
const Footer = lazy(() => import('./components/sections/Footer'));
const Product = lazy(() => import('./components/sections/Product'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Product />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Legality />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Comments />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
