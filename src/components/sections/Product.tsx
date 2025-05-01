export default function Product() {
  return (
    <div id="produk" className="min-h-screen w-full bg-[url('/images/produk-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-8">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1 items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
            <h3 className="font-semibold mb-1 text-3xl sm:text-4xl md:text-[40px] leading-tight mx-4">Produk</h3>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Gepo Solar Roof */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
                Gepo Solar Roof
              </h2>
              <p className="text-sm text-center text-gray-600 mb-4">
                Panel Surya Terintegrasi dengan Genting
              </p>
              <div className="flex gap-2">
                <div className="w-1/2 h-40 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/images/produk-1.png"
                    alt="Gepo Solar Roof - Solar Panel Connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 h-40 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/images/produk-2.png"
                    alt="Gepo Solar Roof - Integrated Roof Panel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Self Cleaning Technology */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
                Self Cleaning Technology
              </h2>
              <p className="text-sm text-center text-gray-600 mb-4">
                Self Cleaning Glass
              </p>
              <div className="flex justify-center">
                <div className="w-full h-40 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/images/produk-3.png"
                    alt="Self Cleaning Glass Comparison"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* IoT */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
                IoT
              </h2>
              <p className="text-sm text-center text-gray-600 mb-4">
                Terintegrasi dengan IoT
              </p>
              <div className="flex justify-center">
                <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/images/produk-4.png"
                    alt="IoT Monitoring Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Small Scale Prototype */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
                Small Scale Prototype
              </h2>
              <p className="text-sm text-center text-gray-600 mb-4">
                Ethylene Vinyl Acetate (EVA) film dengan sel surya
              </p>
              <div className="flex justify-center">
                <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/images/produk-4.png"
                    alt="Small Scale Prototype"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section transition wave */}
        <div className="w-full overflow-hidden leading-none -mb-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
}
