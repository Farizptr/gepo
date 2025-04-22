import { Trees } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-64px)]">
      <div className="relative w-full h-full">
        {/* Background image - using hero-bg.png */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/images/hero-bg.png')`,
            zIndex: 0 
          }}
        >
          <div className="absolute inset-0  bg-opacity-10"></div>
        </div>
        
        {/* Content overlay - Adjusted padding for mobile */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full pt-8 px-4 md:px-6 lg:px-8 text-center font-montserrat">
          {/* Main heading - Responsive text sizes */}
          <h1 className="text-[50px] font-normal mb-4 md:mb-6 text-black max-w-5xl leading-tight font-montserrat">
            Let's Start the Green Energy Era
            <br className="hidden sm:block" />
            with <span className="font-bold">Gepo Energy</span>
          </h1>
          
          {/* Subheading - Adjusted for mobile */}
          <p className="text-base sm:text-lg md:text-xl text-[#1C1C1C] max-w-3xl mb-6 md:mb-8 px-4 md:px-0">
            Solusi energi terbarukan yang efisien, ramah lingkungan, dan terjangkau untuk
            masa depan Indonesia yang berkelanjutan.
          </p>
          
          {/* CTA Button - Made responsive */}
          <button className="bg-black text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full font-medium text-base sm:text-lg mb-12 md:mb-16 hover:bg-gray-800 transition-colors">
            JELAJAHI SOLUSI KAMI
          </button>
          
          {/* Stats section - Improved mobile layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16 w-full max-w-4xl mx-auto px-4">
            {/* Green Energy Stat */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <img src="/images/battery.png" alt="Energi Hijau" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="font-bold text-xl sm:text-2xl text-black">3</div>
                <div className="text-xs font-bold text-black font-montserrat">kWh energi<br />hijau</div>
              </div>
            </div>
            
            {/* CO2 Stat */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <img src="/images/co2.png" alt="CO2 Terhindar" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="font-bold text-xl sm:text-2xl text-black">11.49</div>
                <div className="text-xs font-bold text-black font-montserrat">ton/years CO2<br />terhindar</div>
              </div>
            </div>
            
            {/* Trees Stat */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <img src="/images/trees.png" alt="Pohon Ditanam" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="font-bold text-xl sm:text-2xl text-black">523</div>
                <div className="text-xs font-bold text-black font-montserrat">pohon<br />ditanam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}