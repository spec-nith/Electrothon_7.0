import Image from "next/image";

const Box = ({ companyLogos, size }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-3/4 rounded-lg overflow-hidden bg-transparent">
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center bg-transparent"
          style={{
            width: size.width, // Set explicit width
            height: size.height, // Set explicit height
          }}
        >
          <Image
            src={company.logo}
            alt={`${company.name} Logo`}
            layout="instrinsic"
            width={size.width} 
            height={size.height} 
            objectFit="contain"
            className="rounded-lg"
            style={{
              marginTop:'90px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
