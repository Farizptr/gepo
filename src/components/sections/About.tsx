export default function About() {
  return (
    <section className="py-16 px-0 md:px-16 mx-auto mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-4">
        {/* Left side - Image */}
        <div className="w-full md:w-[40%] flex justify-center items-start self-start">
          <div className="w-full max-w-[520px] aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow">
            <img
              src="/images/foto-about.png"
              alt="Gepo Energy Solar Roof"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-[60%] md:pl-8 flex flex-col justify-center">
          {/* Yellow accent line - ramp SVG version */}
          <div className="w-full mb-4 md:mb-8">
            <svg width="100%" height="16" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <polygon points="0,16 220,0 220,16" fill="#FFD700" />
            </svg>
          </div>

          {/* Title section */}
          <div className="mb-4 md:mb-8">
            <h2 className="font-montserrat text-[40px] md:text-[40px] font-semibold text-black">
              Gepo Energy
            </h2>
            <p className="font-montserrat text-[32px] md:text-[32px] font-medium text-[#FFD700] italic">
              Powering Your Life
            </p>
          </div>

          {/* Content paragraphs */}
          <div className="font-['Plus_Jakarta_Sans'] text-[#313131] text-[16px] space-y-6 max-w-2xl">
            <p>
              Gepo Energy adalah inovasi di bidang teknologi energi terbarukan
              dengan produk unggulan,{' '}
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
