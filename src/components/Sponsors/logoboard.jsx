import Image from 'next/image';

const Box = ({ companyLogos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-bd w-3/4 2xl:h-72 xl:h-72 lg:h-64 md:h-64 sm:h-60 xs:h-56 rounded-lg xl:mb-10 md:mb-2 overflow-hidden">
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-30 lg:h-30 xl:w-36 xl:h-36 xl:m-2 lg:m-1 md:m-1.5 bg-transparent"
        >
          <Image
            src={company.logo}
            alt={`${company.name} Logo`} 
            layout="fill" 
            objectFit="contain" 
            className="rounded-lg" 
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
