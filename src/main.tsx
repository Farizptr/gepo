import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadImages, runWhenIdle } from './utils/optimizeLoading'

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

// Create root and render app
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
