import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadImages, runWhenIdle } from './utils/optimizeLoading'
import ResourceHints from './components/ResourceHints'

// Critical images to preload
const criticalImages = [
  '/images/projek-1.png',
  '/images/projek-2.png'
]

// Preload critical images
preloadImages(criticalImages).catch(err => {
  console.warn('Failed to preload some images:', err)
})

// Add preload hints to head
const addPreloadHints = () => {
  const preloadLinks = criticalImages.map(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    return link
  })

  preloadLinks.forEach(link => document.head.appendChild(link))
}

// Add preload hints when browser is idle
runWhenIdle(addPreloadHints)

// Register service worker for caching and offline support
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
};

// Run service worker registration when browser is idle
runWhenIdle(registerServiceWorker);

// Create root and render app
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    {/* Add resource hints for critical resources */}
    <ResourceHints 
      preloads={[
        { href: '/images/projek-1.png', as: 'image' },
        { href: '/images/projek-2.png', as: 'image' }
      ]}
      preconnects={[
        { href: window.location.origin, crossOrigin: 'anonymous' }
      ]}
    />
    <App />
  </StrictMode>,
)
