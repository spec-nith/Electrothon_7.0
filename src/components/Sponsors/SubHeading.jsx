const SubHeading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Jacques Francois, sans-serif' }}
        className="text-4xl  mb-2 mt-1 sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl text-center xl:m-5 xl:mt-6 lg:mt-7 lg:m-3.5 md:mb-3 md:mt-5 sm:m-3 sm:mb-2 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default SubHeading;
  