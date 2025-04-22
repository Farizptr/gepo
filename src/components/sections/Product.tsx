export default function Product() {
  return (
    <div className="min-h-screen w-full bg-[url('/images/produk-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-8">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Produk</h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
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
                    src="/api/placeholder/200/160"
                    alt="Solar Panel Connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 h-40 bg-gray-200 rounded overflow-hidden">
                  <img
                    src="/api/placeholder/200/160"
                    alt="Integrated Roof Panel"
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
                    src="/api/placeholder/320/160"
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
                    src="/api/placeholder/320/128"
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
                    src="/api/placeholder/320/128"
                    alt="Small Scale Prototype"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
