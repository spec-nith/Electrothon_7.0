"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Prize = () => {
  return (
    <div className="prizes-section w-full h-screen bg-cover bg-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center text-center h-full"
      >
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl pirata-one-regular mb-12 lg:mb-16 mt-6">
          Prizes
        </h1>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 px-4 md:px-8">
          {/* Second Prize */}
          <div
            className="flex flex-col items-center justify-center bg-black/70 p-6 md:p-8"
            style={{
              border: "3px solid #66B2FF", // Subtle blue border
              borderRadius: "24px", // Fully rounded edges
              boxShadow: "0px 4px 12px rgba(102, 178, 255, 0.5)", // Blue shadow effect matching border
            }}
          >
            <Image
              src="/assets/silver.png"
              alt="Second Prize Icon"
              width={250} // Image size remains large
              height={250}
            />
            <h2 className="text-white text-xl md:text-2xl pirata-one-regular font-bold mt-4">
              Second Prize
            </h2>
          </div>

          {/* First Prize */}
          <div
            className="flex flex-col items-center justify-center bg-black/70 p-6 md:p-8"
            style={{
              border: "3px solid #66CC66", // Subtle green border
              borderRadius: "24px", // Fully rounded edges
              boxShadow: "0px 4px 12px rgba(102, 204, 102, 0.5)", // Green shadow effect matching border
            }}
          >
            <Image
              src="/assets/silver.png"
              alt="First Prize Icon"
              width={250} // Image size remains large
              height={250}
            />
            <h2 className="text-white text-xl md:text-2xl pirata-one-regular font-bold mt-4">
              First Prize
            </h2>
          </div>

          {/* Third Prize */}
          <div
            className="flex flex-col items-center justify-center bg-black/70 p-6 md:p-8"
            style={{
              border: "3px solid #FF99CC", // Subtle pink border
              borderRadius: "24px", // Fully rounded edges
              boxShadow: "0px 4px 12px rgba(255, 153, 204, 0.5)", // Pink shadow effect matching border
            }}
          >
            <Image
              src="/assets/silver.png"
              alt="Third Prize Icon"
              width={250} // Image size remains large
              height={250}
            />
            <h2 className="text-white text-xl md:text-2xl pirata-one-regular font-bold mt-4">
              Third Prize
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Prize;
