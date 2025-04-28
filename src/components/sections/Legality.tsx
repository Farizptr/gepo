export default function Legality() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden mt-10 pl-4">
      {/* Yellow circular elements */}
      <div className="absolute left-[-20px] top-[calc(7rem+4.5rem)] w-12 h-22 bg-yellow-400 rounded-r-full"></div>
      <div className="absolute right-[-20px] bottom-[7rem] w-12 h-22 bg-yellow-400 rounded-l-full"></div>

      {/* Main content */}
      <div className="mx-auto px-0 md:px-16 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-semibold mb-1" style={{ fontSize: '40px' }}>Legalitas</h1>
          <p className="font-medium text-[32px] italic" style={{ color: '#FFD700' }}>Powering Your Life</p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          {/* NIB Certificate */}
          <div className="rounded-3xl shadow-md p-8 border border-black box-border flex flex-col items-center" style={{ backgroundColor: 'rgba(233,233,233,0.2)' }}>
            <h2 className="font-medium text-[30px] mb-2 text-left w-full">Sertifikat Perizinan Usaha Berbasis Risiko (NIB)</h2>
            <p className="mb-6 text-[16px] text-left w-full">Status usaha yang telah memenuhi standar legalitas yang diatur pemerintah</p>
            
            <img 
                src="/images/sertifikat-1.png" 
                alt="NIB Certificate"
                className="w-full max-w-lg object-contain mb-2"
              />
          </div>

          {/* SNI Certificate */}
          <div className="rounded-3xl shadow-md p-8 border border-black box-border flex flex-col items-center" style={{ backgroundColor: 'rgba(233,233,233,0.2)' }}>
            <h2 className="font-medium text-[30px] mb-2 text-left w-full">Sertifikat Standar (Sertifikat SNI)</h2>
            <p className="mb-6 text-[16px] text-left w-full">Usaha dan produk perusahaan telah teruji dan memenuhi persyaratan yang ditetapkan oleh lembaga sertifikasi yang berwenang</p>
            
            <img 
                src="/images/sertifikat-2.png" 
                alt="SNI Certificate"
                className="w-full max-w-lg object-contain mb-2"
              />
          </div>
        </div>
      </div>
    </div>
  );
}