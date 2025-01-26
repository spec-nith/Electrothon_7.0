import Image from "next/image";

const Box = ({ companyLogos, size }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-72 rounded-lg overflow-hidden bg-transparent">
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center bg-[#221e1e] bg-opacity-70 rounded-lg overflow-hidden"
          style={{
            width: size?.width || "20vw", // Default to 20% of the viewport width
            height: size?.height || "10vh", // Default to 10% of the viewport height
          }}
        >
          <Image
            src={company.logo}
            alt={`${company.name || "Company"} Logo`} // Fallback for alt text
            layout="fill" // Makes the image fill the parent container
            objectFit="contain" // Ensures the logo fits within the box
            className="rounded-lg p-5"
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
