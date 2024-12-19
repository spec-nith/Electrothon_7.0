const Heading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Pirata One, sans-serif' }}
        className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-center 2xl:mt-4 xl:mt-5 lg:mt-4 md:mt-4 sm:mt-3 2xl:mb-16 xl:mb-20 lg:mb-10 md:mb-16 sm:mb-14 xs:mb-12 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default Heading;
  