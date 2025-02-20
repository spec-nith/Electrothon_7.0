"use client";
import React from "react";
import bg from "@/assets/backgroundimg.webp";
import Image from "next/image";
import Navbar from "@/components/MainPg/Navbar";
import Devfolio_Button from "./devfolio_button";
import "@/app/globals.css";
import hourglass from "@/assets/hourglass.gif";
import { useState, useEffect } from "react";
import timebg from "@/assets/timebg.png";
import PixelCard from "./pixelCard.js";

const MainPg = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-06T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div id="home" className="w-full lg:h-[90vh]">
      <Navbar />
      <div className="flex items-center justify-center sm:space-y-16 space-y-12 h-full flex-col">
        <div className="flex w-full flex-col items-center sm:space-y-10 justify-center">
          <span
            style={{
              textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
            className="lg:text-[110px] px-3 pirata-one-regular lg:leading-none md:text-[100px] sm:text-[70px] text-[40px] text-center tracking-widest"
          >
            ELECTROTHON 7.0
          </span>
          <span
            className="text-[20px] md:text-[40px] sm:text-[30px] lg:text-[60px] inkwell lg:leading-none  text-center text-white"
            style={{
              textShadow:
                "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff",
            }}
          >
            Colosseum of Code
          </span>
        </div>
        {/* <button className='lg:text-[28px] sm:text-[24px] text-[18px] flex space-x-3 bg-[#3770FF] items-center justify-center font-[600] inter px-6 py-2 rounded-full'>
          <Image className='sm:w-[30px] w-[23px]' src={register} alt='' width={35} height={35} />
          <span className='text-center'>
            Register Here
          </span>
        </button> */}
        <Devfolio_Button />

        <div className="flex justify-center items-center w-full">
          {/* <Image
            className="max-lg:hidden max-md:w-[100px] max-lg:w-[120px]"
            src={hourglass}
            alt=""
            width={220}
            /> */}

          <div className="flex items-center rounded-lg justify-center">
            <div className="relative w-[330px] h-[130px] sm:w-[400px] sm:h-[170px] md:w-[500px] md:h-[200px]">
              <PixelCard
                className="absolute inset-0 w-full h-full z-10 rounded-lg opacity-50"
                variant="default"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent backdrop-blur-lg border-[#7777771c] border-[10px] rounded-lg z-0">
                <div className="md:text-[53px] sm:text-[40px] text-[30px] strandall sm:tracking-widest tracking-wider text-white leading-none sm:leading-[35px] text-center">
                  Electrothon 7.0 begins in
                </div>
                <div className="abhaya-libre-regular sm:leading-[55px] leading-[40px] md:scale-100 sm:scale-90 scale-75 lg:leading-[75px] flex w-full justify-center items-center">
                  <div className="flex items-center justify-center text-[50px] text-[#c7aa73] font-light space-x-1">
                    <span className="flex w-[90px] flex-col items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">
                        {timeLeft.days}
                      </span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Days</span>
                    </span>
                    <span>:</span>
                    <span className="flex flex-col items-center w-[90px] justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">
                        {timeLeft.hours}
                      </span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Hours</span>
                    </span>
                    <span>:</span>
                    <span className="flex flex-col w-[90px] items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">
                        {timeLeft.minutes}
                      </span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Minutes</span>
                    </span>
                    <span>:</span>
                    <span className="flex w-[90px] flex-col items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">
                        {timeLeft.seconds}
                      </span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Seconds</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Image
            className="max-lg:hidden max-md:w-[100px] -scale-x-100 max-lg:w-[120px]"
            src={hourglass}
            alt=""
            width={220}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPg;
