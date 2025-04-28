import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

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

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="pl-30">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="/images/quote.png"
              alt="Quote Mark"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-[48px] font-bold text-gray-900 leading-tight  w-105">
              apa kata mereka tentang Gepo Energy
            </h2>
            <div className="mt-8 flex items-center w-90 ">
              <button
                onClick={prevTestimonial}
                className="focus:outline-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                <div className="relative w-full h-1 bg-gray-300 rounded">
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
                className="focus:outline-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

          <div className="w-full lg:ml-16">
            <div className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center overflow-x-hidden">
              {/* Slider track */}
              <div
                className="w-full h-full flex gap-8 transition-transform duration-500  "
                style={{
                  transform:
                    currentIndex === testimonials.length - 1
                      ? `translateX(-${(testimonials.length - 1) * 63}%)`
                      : `translateX(-${currentIndex * 61}%)`,
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 shadow-md rounded-3xl p-8 flex-shrink-0 flex flex-col justify-center w-full z-10"
                    style={{ width: "100%", minWidth: "60%", maxWidth: "60%" }}
                  >
                    <p className="text-[24px] font-[\'Plus Jakarta Sans\'] text-[#101828] mb-6 p-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center p-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/api/placeholder/48/48";
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
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
