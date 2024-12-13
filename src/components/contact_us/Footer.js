'use client';

import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "./footer.css";
import bg from '@/assets/background.png'
import speclogo from '@/assets/speclogo.png'

export default function Footer() {
  const [state, handleSubmit] = useForm("mzbodbrg");

  const BottomFooter = () => {
    return (
      <React.Fragment>
        <div className="md:flex justify-center gap-5 lg:gap-40 mt-5 font-['Gugi']">
          <div className="flex justify-center mb-2 md:visible">
            <a href="https://spec.nith.ac.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-white md:text-lg md:font-bold hover:text-gray-300">
              <picture>
              <img
  className="w-16 md:w-32"
  src="/asset/speclogo.png" // Public path reference
  alt="spec_logo"
/>

              </picture>
            </a>
          </div>
          <div className="flex justify-center mb-4">
            <ul>
              <li className="flex justify-center pb-2 text-sm font-medium text-white md:text-lg md:justify-start">
                RESOURCES
              </li>
              <li>
                <a href="https://drive.google.com/file/u/2/d/1wtCwnQQRZWrYbEgjDSJMi-XJcVHaQGLp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300">
                  Sponsorship Brochure
                </a>
              </li>
              <li>
                <a href="https://same-uranium-0e7.notion.site/Code-of-Conduct-ec5f5146fcfe4bbd93ae30a415853a03" target="_blank" rel="noopener noreferrer" className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300">
                  Code of Conduct
                </a>
                <a href="https://giant-stork-bb9.notion.site/Hacker-s-Guide-to-ELECTROTHON-6-0-d19403d5cf67409fb57aec27e4769174?pvs=4" target="_blank" rel="noopener noreferrer" className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300">
                  Hacker Guide
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mb-4 text-sm text-white md:text-lg">
            <ul>
              <li className="flex justify-center pb-2 font-medium text-white md:justify-start">ADDRESS</li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start hover:text-gray-300">
                <a href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356" target="_blank" rel="noopener noreferrer">
                  NIT Hamirpur
                </a>
              </li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start">Hamirpur, Himachal Pradesh, India</li>
              <li className="flex justify-center font-sans text-gray-400 md:text-sm md:justify-start">177005</li>
            </ul>
          </div>
          <div className="">
            <div className="flex justify-center pb-2 text-sm font-medium text-white md:justify-start md:text-lg">STAY CONNECTED</div>
            <div className="flex justify-center mt-1 mb-10 space-x-2 md:space-x-5 md:mt-1 opacity-80">
              <a href="https://discord.gg/tTra8Ssuh2" rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon className="text-blue-800 fill-current text-1xl md:text-2xl" icon={faDiscord} />
              </a>
              <a href="https://www.facebook.com/spec.ece/" rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon className="text-blue-600 fill-current text-1xl md:text-2xl" icon={faFacebook} />
              </a>
              <a href="https://twitter.com/electrothon" rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon className="text-blue-300 fill-current text-1xl md:text-2xl" icon={faTwitter} />
              </a>
              <a href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83" rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon className="text-pink-600 fill-current text-1xl md:text-2xl" icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/" rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon className="text-blue-500 fill-current text-1xl md:text-2xl" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-2 text-sm text-gray-400">© 2023, SPEC NITH</div>
      </React.Fragment>
    );
  };

  if (state.succeeded) {
    return (
      <footer id="contact" className="flex justify-center px-4 text-gray-800 shadow-lg font-['Gugi']" style={{ backgroundColor: "rgba(34, 30, 30, 1)" }}>
        <div className="container py-6">
          <div className="grid max-w-screen-xl grid-cols-1 px-8 mx-auto text-gray-900 md:mt-4 gap-x-24 gap-y-8 md:grid-cols-2 md:px-12 lg:px-16 xl:px-24 md:pt-16 pb:10 md:pb-6 bg-black">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-[500px] mx-auto mb-10 md:mb-0"
            >
              <TitleText title="Thanks for Your Query!" />
              <motion.div
                variants={staggerContainer}
                className="mb-8 text-gray-400 md:text-lg text-center"
              >
                <p className="text-gray-300">We will get back to you soon.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer
    id="contact"
    className="flex justify-center px-4 mt-10 -mb-6 text-gray-800 shadow-lg md:mt-20"
  >
    <div className="container flex flex-col justify-center py-6 m-2 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <span className="looked text-4xl lg:text-6xl font-bold text-[#def200] my-4 lg:my-6 font-[Oswald]">
                Let's talk about everything!
              </span>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
  
      <div className="flex flex-col items-center justify-center m-4 mt-10 md:mt-4 lg:flex-row lg:space-x-44">
        {/* Map for Mobile View */}
        <div className="block md:hidden" style={{ margin: "auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
            title="map"
            width="300"
            height="200"
            className="shadow-lg invert-[0.8] rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        {/* Map for Desktop View */}
        <div className="hidden md:block" style={{ margin: "auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
            title="map"
            width="500"
            height="400"
            className="shadow-lg invert-[0.8] rounded-3xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        <div className="flex flex-col justify-center space-y-6" style={{ margin: "auto" }}>
          {/* Email Section */}
          <div className="mt-8 text-gray-300 text-center">
            Hate forms? Send us an email at{" "}
            <a
              className="underline hover:text-gray-300"
              href="mailto:spec@nith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              spec@nith.ac.in
            </a>{" "}
            instead.
          </div>
  
          {/* Name Input Section */}
          <div className="mt-6">
            <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
              <input
                className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
  
          {/* Email Input Section */}
          <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
            <input
              className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
  
          {/* Message Textarea Section */}
          <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
            <textarea
              className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            />
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button type="submit" className="bg-primary px-6 py-2 rounded-md text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
  
      <BottomFooter />
    </div>
  </footer>
  );
}  