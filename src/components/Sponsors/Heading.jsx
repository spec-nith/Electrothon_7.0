const Heading = ({ children }) => {
    return (
      <h2
      className="text-[50px] sm:text-[70px] md:text-[4.5rem] font-pirata text-center mb-12"
      style={{
        textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
      }}
      >
        {children}
      </h2>
    );
  };
  
  export default Heading;
  