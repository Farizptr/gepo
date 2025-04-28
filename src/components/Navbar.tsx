import { useState, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";

// Define navigation items for reusability
const navItems = [
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#produk", label: "Produk" },
  { href: "#legalitas", label: "Legalitas" },
  { href: "#proyek", label: "Proyek" },
  { href: "#testimoni", label: "Testimoni" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for navbar shadow effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu with body scroll lock
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const newState = !prev;
      // Prevent body scroll when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return newState;
    });
  }, []);

  // Handle navigation click with smooth scrolling
  const scrollToSection = useCallback((href: string) => {
    // Get the target element
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Calculate the target position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      window.history.pushState(null, '', href);
      
      // Update active section
      setActiveSection(targetId);
    }
  }, []);

  // Handle navigation link clicks
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    const href = e.currentTarget.getAttribute('href') || '';
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }

    scrollToSection(href);
  }, [isMenuOpen, scrollToSection]);

  // Check if a section is active
  const isActive = (href: string) => {
    return activeSection === href.substring(1);
  };

  return (
    <nav
      className={`w-full bg-white border-b border-gray-200 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      } animate-navbar-fade-in`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - responsive sizing */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              aria-label="Home"
              onClick={handleNavClick}
              className="no-underline"
            >
              <img
                className="h-10 sm:h-12 w-auto opacity-0 animate-fade-in"
                src="/images/logo-navbar.png"
                alt="Gepo Energy Logo"
                style={{ animation: "fadeIn 1s forwards" }}
                loading="eager" // Important for above-the-fold content
                width="auto"
                height="48"
              />
            </a>
          </div>

          {/* Desktop menu - centered with active states */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-black hover:text-black hover:font-semibold py-2 transition-all duration-200 relative no-underline ${isActive(item.href) ? 'font-semibold' : ''}`}
                  onClick={handleNavClick}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {/* No underline for active state, only font weight change */}
                </a>
              ))}
            </div>
          </div>

          {/* Contact us button - responsive sizing */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#hubungi-kami"
              className="bg-[#FFD700] hover:bg-[#FFD700]/80 px-4 py-2 rounded-full text-black font-medium flex items-center focus:font-medium transition-all duration-300 hover:scale-105 no-underline"
              onClick={handleNavClick}
              aria-label="Hubungi Kami"
            >
              Hubungi Kami
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu button - improved accessibility */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth animation */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 no-underline ${isActive(item.href) 
                ? 'text-[#FFD700] bg-gray-50' 
                : 'text-black hover:text-[#FFD700] hover:bg-gray-50'}`}
              onClick={handleNavClick}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#hubungi-kami"
              className="flex items-center w-max px-3 py-2 bg-[#FFD700] hover:bg-[#FFD700]/80 rounded-full text-black font-medium transition-colors duration-200 no-underline"
              onClick={handleNavClick}
              aria-label="Hubungi Kami"
            >
              Hubungi Kami
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
