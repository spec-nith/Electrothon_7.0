const SubHeading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Jacques Francois, sans-serif' }}
        className="text-3xl mb-6 xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-center font-bold text-white lg:m-3 md:mb-2.5 sm:m-2.5 sm:mb-2 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default SubHeading;
  