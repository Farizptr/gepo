import { FC } from "react";

interface CertificateProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Certificate: FC<CertificateProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className="rounded-3xl shadow-md p-4 sm:p-6 md:p-8 border border-black box-border flex flex-col items-center transition-shadow duration-300 hover:shadow-lg"
      style={{ backgroundColor: "rgba(233,233,233,0.2)" }}
    >
      <h3 className="font-medium text-xl sm:text-2xl md:text-[30px] mb-2 text-left w-full leading-tight">
        {title}
      </h3>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-[16px] text-left w-full text-gray-700">
        {description}
      </p>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-lg object-contain mb-2"
        loading="lazy"
        width="512"
        height="512"
      />
    </div>
  );
};

const Legality: FC = () => {
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
      className="relative w-full min-h-screen bg-white overflow-hidden mt-10 px-4 sm:px-6 md:px-0 mx-auto max-w-7xl"
      aria-labelledby="legality-heading"
    >
      {/* Yellow circular elements - decorative */}

      {/* Main content */}
      <div className="mx-auto py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            id="legality-heading"
            className="font-semibold mb-1 text-3xl sm:text-4xl md:text-[40px] leading-tight"
          >
            Legalitas
          </h2>
          <p className="font-medium text-xl sm:text-2xl md:text-[32px] italic text-[#FFD700] mt-2">
            Powering Your Life
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              title={cert.title}
              description={cert.description}
              imageSrc={cert.imageSrc}
              imageAlt={cert.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legality;
