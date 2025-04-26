import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full bg-white border-b border-gray-200 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      } animate-navbar-fade-in`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - pushed to the left */}
          <div className="flex-shrink-0">
            <img
              className="h-15 w-auto opacity-0 animate-fade-in"
              src="/images/logo-navbar.png"
              alt="Gepo Energy Logo"
              style={{ animation: "fadeIn 1s forwards" }}
            />
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center items-center space-x-8">
              <a
                href="#tentang-kami"
                className="nav-link text-black hover:text-black hover:font-semibold"
              >
                Tentang Kami
              </a>
              <a
                href="#produk"
                className="nav-link text-black hover:text-black hover:font-semibold"
              >
                Produk
              </a>
              <a
                href="#legalitas"
                className="nav-link text-black hover:text-black hover:font-semibold"
              >
                Legalitas
              </a>
              <a
                href="#proyek"
                className="nav-link text-black hover:text-black hover:font-semibold"
              >
                Proyek
              </a>
              <a
                href="#testimoni"
                className="nav-link text-black hover:text-black hover:font-semibold"
              >
                Testimoni
              </a>
            </div>
          </div>

          {/* Contact us button - pushed to the right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#hubungi-kami"
              className="bg-[#FFD700] hover:bg-[#FFD700]/80 px-4 py-2 rounded-full text-black font-medium flex items-center focus:font-medium animate-pulse-on-hover transition-all duration-300"
            >
              Hubungi Kami
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
            >
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#tentang-kami"
              className="block px-3 py-2 text-black hover:text-[#FFD700] focus:font-medium"
            >
              Tentang Kami
            </a>
            <a
              href="#produk"
              className="block px-3 py-2 text-black hover:text-[#FFD700] focus:font-medium"
            >
              Produk
            </a>
            <a
              href="#legalitas"
              className="block px-3 py-2 text-black hover:text-[#FFD700] focus:font-medium"
            >
              Legalitas
            </a>
            <a
              href="#proyek"
              className="block px-3 py-2 text-black hover:text-[#FFD700] focus:font-medium"
            >
              Proyek
            </a>
            <a
              href="#testimoni"
              className="block px-3 py-2 text-black hover:text-[#FFD700] focus:font-medium"
            >
              Testimoni
            </a>
            <a
              href="#hubungi-kami"
              className="block px-3 py-2 bg-[#FFD700] hover:bg-[#FFD700]/80 rounded-full text-black font-medium items-center w-max mt-4 focus:font-medium"
            >
              Hubungi Kami
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
