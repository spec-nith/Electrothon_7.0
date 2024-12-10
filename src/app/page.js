import Sponsors1 from "@/components/Sponsors/Sponsers1";
import Sponsors2 from "@/components/Sponsors/Sponsors2";
import React from "react";
import bg from "../assets/backgroundimg.jpg"


export default function Home() {
  
  return (
  
    <div
    className="relative bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${bg.src})` }}

  >
    {/* <section className="min-h-screen flex flex-col items-center  bg-transparent"> */}
    <Sponsors1 />
    <Sponsors2 />
    {/* </section>
     */}
   
  </div>
  
  );
}
