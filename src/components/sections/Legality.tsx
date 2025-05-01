import { FC } from "react";
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface CertificateProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Certificate: FC<CertificateProps & { isVisible: boolean, delay: string }> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isVisible,
  delay
}) => {
  return (
    <div
      className={`bg-white rounded-3xl shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] overflow-hidden border border-gray-300 transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 transform-none scale-100' : 'opacity-0 scale-95'}`}
      style={isVisible ? {transitionDelay: delay} : {}}
    >
      <div className="w-full overflow-hidden rounded-xl flex items-center justify-center p-6">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[20px] font-semibold text-[#4F4F4F] mb-3">
          {title}
        </h3>
        <p className="text-[16px] mb-4 text-[#828282]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Legality: FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  
  const certificates = [
    {
      title: "Sertifikat Perizinan Usaha Berbasis Risiko (NIB)",
      description:
        "Status usaha yang telah memenuhi standar legalitas yang diatur pemerintah",
      imageSrc: "/images/sertifikat-1.png",
      imageAlt: "NIB Certificate",
    },
    {
      title: "Sertifikat Standar (Sertifikat SNI)",
      description:
        "Usaha dan produk perusahaan telah teruji dan memenuhi persyaratan yang ditetapkan oleh lembaga sertifikasi yang berwenang",
      imageSrc: "/images/sertifikat-2.png",
      imageAlt: "SNI Certificate",
    },
  ];

  return (
    <section
      id="legalitas"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden mt-10 px-4 sm:px-6 md:px-20 transition-opacity duration-500"
      aria-labelledby="legality-heading"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Yellow circular elements - decorative */}

      {/* Main content */}
      <div className="mx-auto py-12 sm:py-16">
        {/* Header */}
        <div 
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}
          style={isVisible ? {transitionDelay: '0.2s'} : {}}
        >
          <h2
            id="legality-heading"
            className="font-semibold mb-1 text-3xl sm:text-4xl md:text-[40px] leading-tight text-black"
          >
            Legalitas
          </h2>
          <p className="font-medium text-xl sm:text-2xl md:text-[32px] italic text-[#FFD700] mt-2">
            Powering Your Life
          </p>
        </div>

        {/* Certificates Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          style={isVisible ? {transitionDelay: '0.4s'} : {}}
        >
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              title={cert.title}
              description={cert.description}
              imageSrc={cert.imageSrc}
              imageAlt={cert.imageAlt}
              isVisible={isVisible}
              delay={`${0.6 + (index * 0.2)}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legality;
