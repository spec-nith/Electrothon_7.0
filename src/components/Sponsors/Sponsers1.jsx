import Heading from "./Heading";
import Box from "./logoboard";
import SubHeading from "./SubHeading";
import chancellorWhite from "../../assets/chancellorwhite.png";

const Sponsors1 = () => {
  return (
    <div id="sponsors" className="w-full container flex flex-col items-center mx-auto bg-transparent text-white">
      {/* Nest the heading content inside the Heading component */}
      <Heading>Our Sponsors</Heading>

      <div className="container flex gap-2 flex-col items-center bg-transparent">
        {/* Chancellor Sponsors Section */}
        <SubHeading>Chancellor Sponsors</SubHeading> {/* Add margin-bottom */}
        <Box
          companyLogos={[{ logo: chancellorWhite }]}
          size={{
            width: "80vw", // 80% of viewport width
            height: "25vh", // 25% of viewport height
          }}
        />
      </div>
    </div>
  );
};

export default Sponsors1;
