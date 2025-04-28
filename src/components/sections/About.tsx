import { FC } from 'react';

const About: FC = () => {
  return (
    <section 
      id="tentang-kami"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-0 mx-auto mt-16 sm:mt-20 max-w-7xl"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 md:gap-12">
        {/* Left side - Video */}
        <div className="w-full md:w-[40%] flex justify-center items-start self-start">
          <div className="w-full max-w-[520px] aspect-square bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/U_znYIAKREE?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&cc_load_policy=0&loop=1&playlist=U_znYIAKREE"
              title="Gepo Energy Video"
              className="object-cover w-full h-full rounded-3xl"
              style={{aspectRatio: '1 / 1', background: '#fff'}}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              tabIndex={-1}
              loading="lazy"
              aria-label="Video presentasi Gepo Energy"
            ></iframe>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-[60%] md:pl-8 flex flex-col justify-center mt-8 md:mt-0">
          {/* Yellow accent line - ramp SVG version */}
          <div className="w-full mb-4 md:mb-8">
            <svg width="100%" height="16" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <polygon points="0,16 220,0 220,16" fill="#FFD700" aria-hidden="true" />
            </svg>
          </div>

          {/* Title section */}
          <div className="mb-4 md:mb-8">
            <h2 
              id="about-heading"
              className="font-montserrat text-3xl sm:text-4xl md:text-[40px] font-semibold text-black leading-tight"
            >
              Gepo Energy
            </h2>
            <p className="font-montserrat text-2xl sm:text-3xl md:text-[32px] font-medium text-[#FFD700] italic mt-2">
              Powering Your Life
            </p>
          </div>

          {/* Content paragraphs */}
          <div className="font-['Plus_Jakarta_Sans'] text-[#313131] text-base sm:text-[16px] md:text-lg space-y-6 max-w-2xl">
            <p className="leading-relaxed">
              Gepo Energy adalah inovasi di bidang teknologi energi terbarukan
              dengan produk unggulan,{' '}
              <span className="font-semibold">Genting Photovoltaic (GEPO)</span>
              . Kami mengembangkan genting yang terintegrasi dengan sel surya
              berbasis Internet of Things (IoT) dan dilapisi dengan kaca
              self-cleaning.
            </p>

            <p className="leading-relaxed">
              Inovasi ini menyederhanakan pemasangan sistem energi terbarukan
              dan memungkinkan genting untuk membersihkan debu secara otomatis
              dengan aliran air, menjaga efisiensi penyerapan daya matahari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
