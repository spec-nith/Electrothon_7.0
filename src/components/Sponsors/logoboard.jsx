const Box = ({ companyLogos }) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 bg-bd w-3/4 xl:h-72 rounded-lg xl:mb-10 md:mb-2 overflow-hidden">

        {companyLogos.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt="Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-30 lg:h-30 xl:w-36 xl:h-36 xl:m-2 lg:m-1 md:m-1.5 bg-transparent"
          />
        ))}
      </div>
    );
  };
  
  export default Box;