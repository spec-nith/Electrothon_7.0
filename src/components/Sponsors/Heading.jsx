const Heading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Pirata One, sans-serif' }}
        className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:mt-4 xl:mt-5 xl:mb-20 lg:mb-10 sm:mt-3 sm:mb-15 md:mb-16 md:mt-4 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default Heading;
  