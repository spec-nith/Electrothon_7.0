import Image from 'next/image';

const Box = ({ companyLogos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-3/4 2xl:h-72 xl:h-72 lg:h-64 md:h-64 sm:h-60 xs:h-56 rounded-lg xl:mb-10 md:mb-2 overflow-hidden bg-transparent">
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative w-full h-full flex justify-center items-center bg-transparent"
        >
          <Image
            src={company.logo}
            alt={`${company.name} Logo`}
            layout="intrinsic"  
            width={500}  
            height={500} 
            objectFit="contain"
            className="rounded-lg"
            style={{ marginTop: '50px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
