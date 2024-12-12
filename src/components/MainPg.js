import React from "react";
import bg from "@/assets/background.png";
import Image from "next/image";



const MainPg = () => {
  return (
    <div className="relative">
      {/* Full-screen Background Image */}
      <Image
        className="absolute top-0 left-0 h-screen w-screen object-cover z-0"
        src={bg}
        alt="Background"
        priority
      />
      <div className="flex flex-col">
        <h1>Glimpse of Last Electrothon</h1>

      </div>


    </div>
  );
};

export default MainPg;
