import Heading from "./Heading"
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg"
const Sponsors1= () =>{
    return(
        
      <div className="container flex flex-col items-center w-3/4 mx-auto bg-transparent text-white">
        <Heading children={"OUR SPONSORS"} />
        <div className="container flex flex-col items-center bg-transparent">
        <SubHeading children={"Event Partner"} />
        <PartnerBox />
        </div>
        <div className="container flex flex-col items-center bg-transparent">
        <SubHeading children={"Chamberlain Sponsors"} />
        <Box companyLogos={[{"logo":`${logo.src}`},]}/>
        </div>
      </div>
   
    )
}
export default Sponsors1;