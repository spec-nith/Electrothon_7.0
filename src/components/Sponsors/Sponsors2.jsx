import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import SJVNLogo from "../../assets/SJVNLogo.jpg";
import xyzwhite from "../../assets/xyz-logo-white.png";
import slidologo from "../../assets/slido_logo_white.png";
import EMTlogo from "../../assets/EMT.png";
import EMTwhite from "../../assets/EMT_White.png";
import DevdockLogo from "../../assets/Devdock.png";
import ethindia from "../../assets/ethindia.png";
import fold from "../../assets/fold.png";
import polygon from "../../assets/polygon.png";
import Chamberlainv from "./Chamberlianv";
import Chamberlainh from "./Chamberlianh";
import TrackSpon from "./Trackspon";
import TravelPart from "./TravelPart";
import MediaPart from "./MediaPart";

const Sponsors2 = () => {
  return (
    <div className="container w-full items-center mx-auto mt-0 bg-transparent text-white px-4">
      {/* Treasurer Sponsors Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Treasurer Sponsors</SubHeading>
        <div className="mt-9">
          <div className="flex flex-wrap justify-center flex-row gap-14">
            <Chamberlainh
              companyLogos={[{ logo: polygon }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Chamberlainh
              companyLogos={[{ logo: ethindia }]}
              size={{ width: "20vw", height: "10vh" }}
            />
            <Chamberlainh
              companyLogos={[{ logo: fold }]}
              size={{ width: "60vw", height: "10vh" }}
            />
          </div>
        </div>
      </div>

      {/* Chamberlain Sponsors Section */}
      <div className="w-full  items-center mt-24 bg-transparent">
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <div className="mt-9">
          <div className="flex flex-wrap justify-center flex-row gap-14">
            <Chamberlainv
              companyLogos={[{ logo: SJVNLogo }]}
              size={{ width: "20vw", height: "20vh" }}
            />
            <Chamberlainh
              companyLogos={[{ logo: xyzwhite }]}
              size={{ width: "40vw", height: "10vh" }}
            />
          </div>
        </div>
      </div>

      {/* Track Sponsor Section */}
      <div className="w-full  items-center mt-10 bg-transparent">
        <SubHeading>Track Sponsors</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            <TrackSpon
              companyLogos={[{ logo: DevdockLogo }]}
              size={{ width: "60vw", height: "17vh" }}
            />
          </div>
        </div>
      </div>

      {/* Travel Partner Section */}
      <div className="w-full  items-center mt-10 bg-transparent">
        <SubHeading>Travel Partner</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            <TravelPart
              companyLogos={[{ logo: EMTwhite }]}
              size={{ width: "60vw", height: "23vh" }}
            />
          </div>
        </div>
      </div>

      {/* Media Partner Section */}
      <div className="w-full  items-center mt-10 bg-transparent">
        <SubHeading>Media Partner</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            <MediaPart
              companyLogos={[{ logo: slidologo }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors2;
