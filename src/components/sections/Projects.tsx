export default function Projects() {
  return (
    <div id="proyek" className="w-full bg-white py-16 px-4 md:px-20">
      {/* Header with yellow line decoration */}
      <div className=" mx-auto mb-20 flex items-center justify-center ">
        <svg
          width="100%"
          height="32"
          viewBox="0 0 220 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="0,32 220,16 0,0" fill="#FFD700" />
        </svg>
        <h2 className="text-3xl font-bold px-6">Proyek</h2>
        <svg
          width="100%"
          height="32"
          viewBox="0 0 220 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <polygon points="220,32 0,16 220,0" fill="#FFD700" />
        </svg>
      </div>

      {/* Projects grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-3xl shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] overflow-hidden border border-gray-300 transition-transform duration-300 hover:scale-105">
          <div className="w-full overflow-hidden rounded-xl flex items-center justify-center p-6">
            <img
              src="/images/projek-1.png"
              alt="Pemberdayaan Desa Tanaman"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="p-6">
            <h3 className="text-[20px] font-semibold text-[#4F4F4F] mb-3 font-[\'Plus Jakarta Sans\']">
              Pemberdayaan Desa Tanaman
            </h3>
            <p className="text-[16px] mb-4 font-[\'Plus Jakarta Sans\'] text-[#828282]">
              Dalam proyek ini, Gepo Energy bekerja sama dengan Dewan Energi
              Mahasiswa UGM (DEM UGM) berkesempatan melakukan pemberdayaan di
              Desa Tanaman. Gepo Energy melakukan instalasi Genting Photovoltaic
              (GEPO) sebanyak 30 unit genting dengan kapasitas daya terpasang
              sebesar 300 Wp. Daya yang dihasilkan GEPO digunakan untuk memenagi
              pompa air dari sistem pengairan kebun lidah buaya dan fasilitas
              umum Dusun Tanaman.
            </p>
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-500 inline-flex items-center"
            >
              Selengkapnya
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-3xl shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] overflow-hidden border border-gray-300 transition-transform duration-300 hover:scale-105">
          <div className="w-full overflow-hidden rounded-xl flex items-center justify-center p-6">
            <img
              src="/images/projek-2.png"
              alt="Proyek Pertamina Foundation di Hutan UGM"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="p-6">
            <h3 className="text-[20px] font-semibold text-[#4F4F4F] mb-3 font-[\'Plus Jakarta Sans\']">
              Proyek Pertamina Foundation di Hutan UGM
            </h3>
            <p className="text-[16px] mb-4 font-[\'Plus Jakarta Sans\'] text-[#828282]">
              Dalam proyek ini, Gepo Energy bekerja sama dengan Pertamina
              Foundation dalam melakukan instalasi GEPO pada Dukungan Fasilitas
              Rumah Kompos Terintegrasi. Gepo Energy melakukan pemasangan 300
              genting yang memiliki daya terpasang sebesar 3000 watt yang
              digunakan untuk proses produksi kompos.
            </p>
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-500 inline-flex items-center"
            >
              Selengkapnya
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Pagination/Navigation buttons */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-center space-x-4">
        <button
          className="w-14 h-14 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center p-0 focus:outline-none transition-all duration-200 hover:border-yellow-400 hover:shadow-lg"
          aria-label="Previous page"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center p-0 focus:outline-none transition-all duration-200 hover:bg-yellow-500 hover:shadow-lg"
          aria-label="Next page"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
