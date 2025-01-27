import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import chancellorWhite from "../../assets/chancellorwhite.png";
import mlhw from '../../assets/mlh_white.png';
import Eventpart from "./Eventpart";

const Sponsors1 = () => {
  return (
    <div id="sponsors" className="w-full container flex flex-col items-center mx-auto bg-transparent text-white">
      {/* Nest the heading content inside the Heading component */}
      <Heading>Our Sponsors</Heading>
      {/* <div className="container flex flex-col items-center bg-transparent"> */}
        {/* Nest the subheading content inside the SubHeading component */}
        {/* <SubHeading>Event Partner</SubHeading> */}
        {/* <PartnerBox /> */}
      {/* </div> */}
      <div className="container flex flex-col items-center mb-9 bg-transparent">
        {/* Nest the subheading content inside the SubHeading component */}
        <SubHeading>Event Partner</SubHeading>
        <Eventpart companyLogos={[{ logo: mlhw }]} size={{ width: "45vw", height: "30vh" }} />
      </div>
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest the subheading content inside the SubHeading component */}
        <SubHeading>Chancellor Sponsors</SubHeading>
        <Box companyLogos={[{ logo: chancellorWhite }]} size={{ width: "45vw", height: "30vh" }} />
      </div>
    </div>
  );
};

export default Sponsors1;
