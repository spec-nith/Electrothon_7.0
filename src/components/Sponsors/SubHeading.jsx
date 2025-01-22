const SubHeading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Jacques Francois, sans-serif' }}
        className="text-4xl mb-2 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl text-center  lg:m-3.5 md:mb-3  sm:m-3 sm:mb-2 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default SubHeading;
  