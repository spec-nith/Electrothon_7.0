"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data_prizes from "../../assets/prizes_data/prizes.js";

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
 
  const { pic1, pic2, pic3 } = data_prizes[0] || {}; 

  return (
    <div className="prizes-section w-full min-h-screen bg-cover bg-center py-6 md:py-8 lg:py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8"
      >
        {/* Title */}
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl pirata-one-regular mb-6 md:mb-8 lg:mb-10 mt-4">
          Prizes
        </h1>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 md:px-6 lg:px-8 w-full max-w-6xl">
          {/* Second Prize */}
          <div
            className="order-2 md:order-1 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-10"
            style={{
              border: "3px solid #66B2FF",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(102, 178, 255, 0.5)",
            }}
          >
            {pic2 ? (
              <Image
                src={pic2.replace("./", "/")} // Replace './' with '/' for Next.js compatibility
                alt="Second Prize Icon"
                width={200}
                height={200}
                className="max-w-full"
              />
            ) : (
              <p className="text-white">Image not found</p>
            )}
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl pirata-one-regular font-bold mt-4">
              Second Prize
            </h2>
          </div>

          {/* First Prize */}
          <div
            className="order-1 md:order-2 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-12"
            style={{
              border: "3px solid #66CC66",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(102, 204, 102, 0.5)",
            }}
          >
            {pic1 ? (
              <Image
                src={pic1.replace("./", "/")} // Replace './' with '/' for Next.js compatibility
                alt="First Prize Icon"
                width={250}
                height={250}
                className="max-w-full"
              />
            ) : (
              <p className="text-white">Image not found</p>
            )}
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl pirata-one-regular font-bold mt-4">
              First Prize
            </h2>
          </div>

          {/* Third Prize */}
          <div
            className="order-3 md:order-3 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-10"
            style={{
              border: "3px solid #FF99CC",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(255, 153, 204, 0.5)",
            }}
          >
            {pic3 ? (
              <Image
                src={pic3.replace("./", "/")} // Replace './' with '/' for Next.js compatibility
                alt="Third Prize Icon"
                width={200}
                height={200}
                className="max-w-full"
              />
            ) : (
              <p className="text-white">Image not found</p>
            )}
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl pirata-one-regular font-bold mt-4">
              Third Prize
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Prize;
