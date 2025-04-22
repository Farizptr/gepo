export default function Projects() {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header with yellow line decoration */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-center">
        <div className="h-1 bg-yellow-400 flex-grow"></div>
        <h2 className="text-3xl font-bold px-6">Proyek</h2>
        <div className="h-1 bg-yellow-400 flex-grow"></div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src="/api/placeholder/500/256" 
              alt="Pemberdayaan Desa Tanaman" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pemberdayaan Desa Tanaman</h3>
            <p className="text-gray-600 mb-4">
              Dalam proyek ini, Gepo Energy bekerja sama dengan Dewan Energi Mahasiswa UGM (DEM UGM) berkesempatan melakukan pemberdayaan di Desa Tanaman. Gepo Energy melakukan instalasi Genting Photovoltaic (GEPO) sebanyak 30 unit genting dengan kapasitas daya terpasang sebesar 300 Wp. Daya yang dihasilkan GEPO digunakan untuk memenagi pompa air dari sistem pengairan kebun lidah buaya dan fasilitas umum Dusun Tanaman.
            </p>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 inline-flex items-center">
              Selengkapnya 
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src="/api/placeholder/500/256" 
              alt="Proyek Pertamina Foundation di Hutan UGM" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proyek Pertamina Foundation di Hutan UGM</h3>
            <p className="text-gray-600 mb-4">
              Dalam proyek ini, Gepo Energy bekerja sama dengan Pertamina Foundation dalam melakukan instalasi GEPO pada Dukungan Fasilitas Rumah Kompos Terintegrasi. Gepo Energy melakukan pemasangan 300 genting yang memiliki daya terpasang sebesar 3000 watt yang digunakan untuk proses produksi kompos.
            </p>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 inline-flex items-center">
              Selengkapnya 
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Pagination/Navigation buttons */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-center space-x-4">
        <button 
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Previous page"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-colors"
          aria-label="Next page"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}