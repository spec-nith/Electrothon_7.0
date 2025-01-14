import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import SJVNLogo from "../../assets/SJVNLogo.jpg";
import EMTlogo from "../../assets/EMT.png";
import slidoicon from "../../assets/slido_icon_black.png";
import slidologo from "../../assets/slido_logo_white.png";
import xyzcolor from "../../assets/xyz-logo-color.png";
import xyzwhite from "../../assets/xyz-logo-white.png";

const Sponsors2 = () => {
  return (
    <div className="container w-full flex flex-col items-center mx-auto bg-transparent text-white">
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest content inside SubHeading */}
        <SubHeading>Treasurer Sponsors</SubHeading>
        <ComingSoon />
        {/* <Box companyLogos={[{ logo: `${logo.src}` }]} /> */}
      </div>
      <div className="container flex flex-col items-center bg-transparent ">
        {/* Nest content inside SubHeading */}
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <div className="mt-2">
          <div className="flex space-x-32 items-center ">
            <Box
              companyLogos={[{ logo: SJVNLogo }]}
              size={{ width: 180, height: 360 }}
            />
            <Box
              companyLogos={[{ logo: xyzwhite }]}
              size={{ width: 250, height: 320 }}
            />
          </div>

        </div>
      </div>
      <div className="container flex flex-col items-center bg-transparent mt-20 mb-8">
        {/* Nest content inside SubHeading */}
        <SubHeading>Travel Partner</SubHeading>
        <Box
          companyLogos={[{ logo: EMTlogo }]}
          size={{ width: 450, height: 320 }}
        />
      </div>
      <div className="container flex flex-col items-center bg-transparent mt-20 mb-8">
        {/* Nest content inside SubHeading */}
        <SubHeading>Media Partner</SubHeading>
        <div className="mr-32">
          <div className="flex items-center space-x-4 mt-2">
            {/* Flex container for side-by-side logos */}
            <Box
              companyLogos={[{ logo: slidoicon }]}
              size={{ width: 250, height: 360 }}
            />
            <Box
              companyLogos={[{ logo: slidologo }]}
              size={{ width: 350, height: 360 }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsors2;
