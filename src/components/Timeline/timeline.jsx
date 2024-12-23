import React from "react";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-start text-white pt-16">
      <div className="flex items-center mb-12">
        {/* Heading Text */}
        <h2 className="text-[117.12px] font-pirata">Timeline</h2>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl px-8">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 w-10 h-1/2 bg-[#03294F] rounded-lg rounded-[50px]"></div> {/* Upper part */}
        <div className="absolute left-5 top-1/2 w-10 h-1/2 bg-[#374151] rounded-lg rounded-[50px]"></div> {/* Lower part */}

        {/* Logo positioned in the center */}
        <div className="absolute left-[1rem] top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center bg-transparent">

          <Image
            src="/asset/Ellipse 61.png" // Correct path to the image in the public folder
            alt="Logo"
            fill
            style={{ objectFit: "contain"}} // Apply styles directly using style
              
              />
  <Image
  src="/asset/small_logo.png" // Path to the overlay image
  alt="Overlay Logo"
  width={74}
  height={66}
  className="absolute"
  style={{
    objectFit: "contain",
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Adjust for proper centering
  }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-20">
          {/* Item 1 */}
          <div className="relative flex items-center">
            {/* Horizontal Connecting Line */}
            <div className="absolute left-7 top-1/2 -translate-y-1/2 w-[3vw] h-2 bg-[#374151]"></div>
            <div className="ml-20 bg-[#03294F] p-7 rounded-2xl shadow-lg w-3/5 relative opacity-75 w-[830px] h-[186px]">
              <h3 className="text-[47.34px] relative pb-2 font-afacad">
                Registration Begins
                {/* Underline */}
                <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-white rounded-full"></span>
              </h3>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center">
            {/* Horizontal Connecting Line */}
            <div className="absolute left-[2rem] top-1/2 -translate-y-1/2 w-[3vw] h-2 bg-[#374151]"></div>
            <div className="ml-20 bg-[#03294F] p-7 rounded-3xl shadow-lg w-3/5 relative opacity-75 w-[830px] h-[186px]">
              <h3 className="text-[47.34px] relative pb-2 font-afacad">
                Participation Shortlist
                {/* Underline */}
                <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-white rounded-full"></span>
              </h3>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-center">
            {/* Horizontal Connecting Line */}
            <div className="absolute left-7 top-1/2 -translate-y-1/2 w-[3vw] h-2 bg-[#374151]"></div>
            <div className="ml-20 bg-[#03294F] p-7 rounded-2xl shadow-lg w-3/5 relative opacity-75 w-[830px] h-[186px]">
              <h3 className="text-[47.34px] relative pb-2 font-afacad">
                Electrothon Main Event
                {/* Underline */}
                <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-white rounded-full"></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
