export default function Comments() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Testimonial header with quote icon */}
        <div className="flex flex-col mb-12">
          <div className="text-yellow-400 text-6xl font-serif mb-4">❝</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            apa kata<br />
            mereka tentang<br />
            Gepo Energy
          </h2>
          <div className="flex items-center mt-4">
            <div className="h-px bg-gray-400 w-32"></div>
            <div className="mx-2 bg-white text-gray-400">
              <span className="text-sm">⟨</span>
              <span className="mx-2">•</span>
              <span className="text-sm">⟩</span>
            </div>
          </div>
        </div>

        {/* Testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              "Pemasangan sistem energi surya di perusahaan kami mengurangi biaya listrik secara signifikan. Kami merasa bangga bisa berkontribusi pada lingkungan!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="Andi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Andi</h4>
                <p className="text-sm text-gray-600">Pemilik Bisnis</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              "Produk Gepo Energy membantu perusahaan kami beralih ke energi bersih dengan mudah dan efisien, terima kasih banyak Gepo energy atas bantuannya!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="AF Hangga" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">AF Hangga</h4>
                <p className="text-sm text-gray-600">CEO Perusahaan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}