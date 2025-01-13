import React from "react";
import challengesData from "./challengesData";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "./style.css";

const Challenges = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
      >
        <TitleText
          title={
            <>
              <h1
              style={{
                textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
              }}
              className="text-white text-[50px] md:text-[70px] lg:text-[6rem] pirata-one-regular mb-8">
              Challenges
            </h1>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <section
        id="challenges"
        className="relative p-2 md:p-10 mx-auto w-100% md:w-[80%] mt-2 overflow-hidden bg-[#221e1e] bg-opacity-50 rounded-3xl"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="grid grid-cols-1 content-theme">
          {challengesData && challengesData.length > 0 ? (
            challengesData.map((challenge, index) => (
              <div
                className="flex md:flex-row flex-col justify-center items-center md:m-4 mb-6 rounded-xl shadow-2xl p-4 text-white"
                key={challenge.key || index}
              >
                <div className="float-left p-5 w-3/4 mr-auto h-[140px] flex justify-center items-center ">
                  <picture>
                    <img
                      src={challenge.img}
                      className={`object-cover ${
                        index === 7
                          ? "w-1/2 h-1/2 lg:w-full lg:h-full"
                          : "w-full h-full"
                      }`}
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </div>
                <div className="ml-auto w-3/4">
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="px-3">
                      <ul className={challenge.list}>
                        {challenge.desc.map((element, descIndex) => (
                          <li
                            className="md:pt-1 md:tracking-tighter text-[20px]"
                            key={descIndex}
                          >
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {!challenge.noButton && (
                      <a
                        href={challenge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="lg:w-1/2 text-center p-2 mx-auto lg:mx-6 text-base border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 hover:border-gray-200 hover:text-black">
                          More Details
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No challenges available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Challenges;
