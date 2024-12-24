import Box from "./logoboard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";

const Sponsors2 = () => {
  return (
    <div className="container flex flex-col items-center w-3/4 mx-auto bg-transparent text-white">
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest content inside SubHeading */}
        <SubHeading>Treasurer Sponsors</SubHeading>
        <Box companyLogos={[{ logo: `${logo.src}` }]} />
      </div>
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest content inside SubHeading */}
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <Box companyLogos={[{ logo: `${logo.src}` }]} />
      </div>
    </div>
  );
};

export default Sponsors2;
