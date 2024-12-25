import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";

const Sponsors1 = () => {
  return (
    <div id="sponsors" className="container flex flex-col items-center w-3/4 mx-auto bg-transparent text-white">
      {/* Nest the heading content inside the Heading component */}
      <Heading>OUR SPONSORS</Heading>
    {/* <div className="container flex flex-col items-center bg-transparent"> */}
        {/* Nest the subheading content inside the SubHeading component */}
        {/* <SubHeading>Event Partner</SubHeading> */}
        {/* <PartnerBox /> */}
      {/* </div>  */}
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest the subheading content inside the SubHeading component */}
        <SubHeading>Chancellor Sponsors</SubHeading>
        <Box companyLogos={[{ logo: `${logo.src}` }]} />
      </div>
    </div>
  );
};

export default Sponsors1;
