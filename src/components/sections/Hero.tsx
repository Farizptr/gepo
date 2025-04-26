export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-64px)]">
      <div className="relative w-full h-full">
        {/* Background image - using hero-bg.png */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{ 
            backgroundImage: `url('/images/hero-bg.png')`,
            zIndex: 0,
          }}
        >
          <div className="absolute inset-0  bg-opacity-10"></div>
        </div>

        {/* Content overlay - Adjusted padding for mobile */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full pt-25 px-4 md:px-6 lg:px-8 text-center font-montserrat animate-fade-in" style={{animationDelay:'0.5s'}}>
          {/* Main heading - Responsive text sizes */}
          <h1 className="text-[50px] font-semibold mb-4 md:mb-6 text-black max-w-5xl leading-tight font-montserrat">
            Let's Start the Green Energy Era
            <br className="hidden sm:block" />
            with <span className="font-bold">Gepo Energy</span>
          </h1>

          {/* Subheading - Adjusted for mobile */}
          <p className="text-base sm:text-[16px] md:text-xl text-[#1C1C1C] max-w-3xl mb-6 md:mb-8 px-4 md:px-0">
            Solusi energi terbarukan yang efisien, ramah lingkungan, dan
            terjangkau untuk masa depan Indonesia yang berkelanjutan.
          </p>

          {/* CTA Button - Made responsive */}
          <button className="bg-black text-white font-montserrat text-[16px] tracking-widest py-5 px-8 mb-4 rounded-full hover:bg-[#FFD700] hover:text-black hover:font-semibold transition-colors duration-200 cursor-pointer">
            JELAJAHI SOLUSI KAMI
          </button>

          {/* Stats section - Improved mobile layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-7 w-full max-w-4xl mx-auto px-4">
            {/* Green Energy Stat */}
            <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <img
                src="/images/battery.png"
                alt="Energi Hijau"
                className="w-10 h-14"
              />
              <div className="flex flex-col items-center text-center">
                <div className="font-bold text-xl sm:text-2xl text-black">
                  3
                </div>
                <div className="text-xs font-bold text-black font-montserrat">
                  kWh energi
                  <br />
                  hijau
                </div>
              </div>
            </div>

            {/* CO2 Stat */}
            <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <img
                src="/images/co2.png"
                alt="CO2 Terhindar"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-center text-center">
                <div className="font-bold text-xl sm:text-2xl text-black">
                  11.49
                </div>
                <div className="text-xs font-bold text-black font-montserrat">
                  ton/years CO2
                  <br />
                  terhindar
                </div>
              </div>
            </div>

            {/* Trees Stat */}
            <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <img
                src="/images/trees.png"
                alt="Pohon Ditanam"
                className="w-14 h-14"
              />
              <div className="flex flex-col items-center text-center">
                <div className="font-bold text-xl sm:text-2xl text-black">
                  523
                </div>
                <div className="text-xs font-bold text-black font-montserrat">
                  pohon
                  <br />
                  ditanam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
