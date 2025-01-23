import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import SJVNLogo from "../../assets/SJVNLogo.jpg";
import DevdockLogo from "../../assets/Devdock.png";
import EMTlogo from "../../assets/EMT.png";
import slidoicon from "../../assets/slido_icon_black.png";
import slidologo from "../../assets/slido_logo_white.png";
import xyzcolor from "../../assets/xyz-logo-color.png";
import xyzwhite from "../../assets/xyz-logo-white.png";

const Sponsors2 = () => {
  return (
    <div className="container w-full items-center mx-auto mt-0 bg-transparent text-white px-4">
      {/* Treasurer Sponsors Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Treasurer Sponsors</SubHeading>
        <ComingSoon />
      </div>

      {/* Chamberlain Sponsors Section */}
      <div className="w-full  items-center mt-24 bg-transparent">
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <div className="mt-4">
          <div className="flex flex-wrap flex-row justify-center gap-5">
            <Box
              companyLogos={[{ logo: SJVNLogo }]}
              size={{ width: 150, height: 320 }}
            />
            <Box
              companyLogos={[{ logo: xyzwhite }]}
              size={{ width: 200, height: 280 }}
            />
          </div>
        </div>
      </div>


      {/* Track Sponsor Section */}
      <div className="w-full flex flex-col items-center mt-10 bg-transparent">
        <SubHeading>Track Sponsor</SubHeading>
        <Box
          companyLogos={[{ logo: DevdockLogo }]}
          size={{ width: 400, height: 250 }}
        />
      </div>


      {/* Travel Partner Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Travel Partner</SubHeading>
        <Box
          companyLogos={[{ logo: EMTlogo }]}
          size={{ width: 400, height: 250 }}
        />
      </div>

      {/* Media Partner Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Media Partner</SubHeading>
        <div className="flex flex-wrap justify-center gap-4 ">
          <Box
            companyLogos={[{ logo: slidologo }]}
            size={{ width: 300, height: 300 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors2;
