import React, { useState, useCallback, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white border border-gray-200 shadow-md rounded-3xl p-4 sm:p-6 md:p-8 flex-shrink-0 flex flex-col justify-center w-full z-10 transition-all duration-300 ${isActive ? 'shadow-lg' : ''}`}
      style={{ width: "100%", minWidth: "60%", maxWidth: "60%" }}
      role="group"
      aria-roledescription="slide"
      aria-label={`Testimonial by ${testimonial.name}`}
    >
      <p className="text-base sm:text-xl md:text-[24px] font-['Plus Jakarta Sans'] text-[#101828] mb-4 sm:mb-6 p-2 sm:p-4 leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center p-2 sm:p-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name}'s avatar`}
            className="w-full h-full object-cover"
            loading="lazy"
            width="48"
            height="48"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/api/placeholder/48/48";
            }}
          />
        </div>
        <div className="ml-3 sm:ml-4">
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
            {testimonial.name}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const Comments: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Pemasangan sistem energi surya di perusahaan kami mengurangi biaya listrik secara signifikan, dan kami merasa bangga bisa berkontribusi pada lingkungan!",
      name: "Andi",
      position: "Pemilik Bisnis",
      avatar: "/images/comment.png",
    },
    {
      quote:
        "Produk Gepo Energy membantu perusahaan kami beralih ke energi bersih dengan mudah dan efisien, terima kasih banyak Gepo Energy atas bantuannya!",
      name: "AF Hangga",
      position: "CEO Perusahaan",
      avatar: "/images/comment.png",
    },
    {
      quote:
        "Investasi pada panel surya dari Gepo Energy memberikan pengembalian yang cepat. Kami sangat puas dengan layanan dan kualitas produknya.",
      name: "Budi",
      position: "Manager Operasional",
      avatar: "/images/comment.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevTestimonial();
    } else if (e.key === 'ArrowRight') {
      nextTestimonial();
    }
  }, [nextTestimonial, prevTestimonial]);

  return (
    <section 
      id="testimoni"
      className="py-12 sm:py-16 md:py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="px-4 sm:px-6 md:px-0 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <img
              src="/images/quote.png"
              alt="Quote Mark"
              className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
              width="64"
              height="64"
              aria-hidden="true"
            />
            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-900 leading-tight w-full"
            >
              Apa kata mereka tentang Gepo Energy
            </h2>
            <div className="mt-6 sm:mt-8 flex items-center w-full max-w-xs">
              <button
                onClick={prevTestimonial}
                className="focus:outline-none focus:ring-2 focus:ring-[#FFD700] p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L10 14L18 22"
                    stroke="#A3A3A3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex-1 mx-2 flex items-center">
                <div 
                  className="relative w-full h-1 bg-gray-300 rounded overflow-hidden"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={((currentIndex + 1) / testimonials.length) * 100}
                >
                  <div
                    className="absolute left-0 top-0 h-1 bg-black rounded"
                    style={{
                      width: `${
                        ((currentIndex + 1) / testimonials.length) * 100
                      }%`,
                      transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                </div>
              </div>
              <button
                onClick={nextTestimonial}
                className="focus:outline-none focus:ring-2 focus:ring-[#FFD700] p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 6L18 14L10 22"
                    stroke="#A3A3A3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full lg:ml-8">
            <div 
              className="relative w-full min-h-[280px] sm:min-h-[320px] md:min-h-[400px] flex items-center overflow-x-hidden"
              role="region"
              aria-label="Testimonial slider"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Slider track */}
              <div
                className="w-full h-full flex gap-4 sm:gap-6 md:gap-8 transition-transform duration-500"
                style={{
                  transform:
                    currentIndex === testimonials.length - 1
                      ? `translateX(-${(testimonials.length - 1) * 63}%)`
                      : `translateX(-${currentIndex * 61}%)`,
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <TestimonialCard 
                    key={idx} 
                    testimonial={testimonial} 
                    isActive={idx === currentIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
