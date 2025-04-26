export default function Legality() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Yellow circular elements */}
      <div className="absolute left-0 top-1/3 w-20 h-40 bg-yellow-400 rounded-r-full"></div>
      <div className="absolute right-0 bottom-20 w-20 h-40 bg-yellow-400 rounded-l-full"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-1">Legalitas</h1>
          <p className="text-xl text-yellow-400 font-light">Powering Your Life</p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NIB Certificate */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-2">Sertifikat Perizinan Usaha Berbasis Risiko (NIB)</h2>
            <p className="text-gray-600 mb-6">Status usaha yang telah memenuhi standar legalitas yang diatur pemerintah</p>
            
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
              <img 
                src="/images/sertifikat-1.png" 
                alt="NIB Certificate"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* SNI Certificate */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-2">Sertifikat Standar (Sertifikat SNI)</h2>
            <p className="text-gray-600 mb-6">Usaha dan produk perusahaan telah teruji dan memenuhi persyaratan yang ditetapkan oleh lembaga sertifikasi yang berwenang</p>
            
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
              <img 
                src="/images/sertifikat-2.png" 
                alt="SNI Certificate"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}