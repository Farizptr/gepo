export default function About() {
  return (
    <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/foto-about.png"
              alt="Solar panels installation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          {/* Yellow accent line */}
          {/* Yellow accent line - angled SVG version */}
          <div className="w-full mb-8">
            <svg
              height="4"
              width="100%"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <line
                x1="1"
                y1="0"
                x2="100"
                y2="0"
                stroke="#FBBF24"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Title section */}
          <div className="mb-8">
            <h2 className="font-montserrat text-3xl md:text-[40px] font-semibold text-black mb-2">
              Gepo Energy
            </h2>
            <p className="font-montserrat text-2xl md:text-[32px] font-light text-[#FFD700]">
              Powering Your Life
            </p>
          </div>

          {/* Content paragraphs */}
          <div className="font-['Plus_Jakarta_Sans'] text-[#313131] space-y-6">
            <p>
              Gepo Energy adalah inovasi di bidang teknologi energi terbarukan
              dengan produk unggulan,{" "}
              <span className="font-semibold">Genting Photovoltaic (GEPO)</span>
              . Kami mengembangkan genting yang terintegrasi dengan sel surya
              berbasis Internet of Things (IoT) dan dilapisi dengan kaca
              self-cleaning.
            </p>

            <p>
              Inovasi ini menyederhanakan pemasangan sistem energi terbarukan
              dan memungkinkan genting untuk membersihkan debu secara otomatis
              dengan aliran air, menjaga efisiensi penyerapan daya matahari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
