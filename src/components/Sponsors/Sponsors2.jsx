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
import polygon from "../../assets/polygon.png";
import Chamberlainv from "./Chamberlianv";
import Chamberlainh from "./Chamberlianh";
import TrackSpon from "./Trackspon";
import TravelPart from "./TravelPart";
import MediaPart from "./MediaPart";
import Treasurer from "./Treasurer";
import quillAi from "../../assets/quill_resized.webp";
import appwrite from "../../assets/Sponsor/appwrite.png";
import InkindSpon from "./InkindSpon.jsx";
import Protoio from "../../assets/Sponsor/Protoio.png";
import theDevArmy from "../../assets/Sponsor/theDevArmy.png";
import SolidityScan from "../../assets/Sponsor/SolidityScan.png";
import CredShields from "../../assets/Sponsor/CredShields.png";
import Aptos from "../../assets/Sponsor/Aptos.png";
import langdb from "@/assets/Sponsor/langdb.svg";
import dominos from "@/assets/dominos3.png";
import loftWhite from "../../assets/Loft_White.png"
import mongo from "../../assets/images/MongoDB_White.png"
import midnight from "../../assets/images/midnight.png"
import streamlit from "../../assets/images/streamlit-logo-primary.png"
import cf from "../../assets/images/CF_logo_horizontal_whitetype.png"

const Sponsors2 = () => {
  return (
    <div className="container w-full items-center mx-auto mt-0 bg-transparent text-white px-4">
      {/* Treasurer Sponsors Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Treasurer Sponsors</SubHeading>
        <div className="mt-9">
          <div className="flex flex-wrap justify-center flex-row gap-14">
            <Treasurer
              companyLogos={[{ logo: polygon }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: ethindia }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: Aptos }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: mongo }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: midnight }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: streamlit }]}
              size={{ width: "60vw", height: "10vh" }}
            />
            <Treasurer
              companyLogos={[{ logo: cf }]}
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
              companyLogos={[{ logo: quillAi }]}
              size={{ width: "50vw", height: "20vh" }}
            />
            <Chamberlainh
              companyLogos={[{ logo: DevdockLogo }]}
              size={{ width: "50vw", height: "20vh" }}
            />
            <Chamberlainv
              companyLogos={[{ logo: loftWhite }]}
              size={{ width: "20vw", height: "20vh" }}
            />
          </div>
        </div>
      </div>

      {/* In-Kind Sponsors Section */}
      <div className="w-full  items-center mt-10 bg-transparent">
        <SubHeading>In-kind Sponsors</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            <InkindSpon
              companyLogos={[{ logo: appwrite }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5"
            />
            <InkindSpon
              companyLogos={[{ logo: Protoio }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5"
            />
            <InkindSpon
              companyLogos={[{ logo: theDevArmy }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: SolidityScan }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: xyzwhite }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: CredShields }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: EMTwhite }]}
              size={{ width: "60vw", height: "23vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: slidologo }]}
              size={{ width: "60vw", height: "23vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: langdb }]}
              size={{ width: "60vw", height: "23vh" }}
              className="p-5 "
            />
            <InkindSpon
              companyLogos={[{ logo: dominos }]}
              size={{ width: "60vw", height: "18vh" }}
              className="p-5 "
            />
          </div>
        </div>
      </div>

      {/* Travel Partner Section */}
      {/* <div className="w-full  items-center mt-10 bg-transparent">
        <SubHeading>Travel Partner</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            <TravelPart
              companyLogos={[{ logo: EMTwhite }]}
              size={{ width: "60vw", height: "23vh" }}
            />
          </div>
        </div>
      </div> */}

      {/* Media Partner Section */}
      {/* <div className="w-full  items-center mt-10 bg-transparent">
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
      </div> */}
    </div>
  );
};

export default Sponsors2;
