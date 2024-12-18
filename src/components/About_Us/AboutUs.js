"use client"; // Add this line at the top of your file

import React, { useEffect, useRef } from 'react';
import bg from '@/assets/backgroundimg.jpg';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const titleRef = useRef(null);
    const rectangleRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%", // Start when the top of the title hits 80% of the viewport height
                end: "top 30%", // End when it reaches 30%
                scrub: true,
                markers: false // Set to true for debugging
            }
        });

        tl.from(titleRef.current, { x: -100, opacity: 0, duration: 1 })
          .from(rectangleRef.current, { x: -100, opacity: 0, duration: 1 }, "<")
          .from(paragraphRef.current, { x: -100, opacity: 0, duration: 1 }, "<");

        return () => {
            // Clean up ScrollTrigger instances on unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="relative">
            {/* Background Layer */}
            <div className="fixed inset-0 z-[-1] bg-[#091826]">
                <div className="relative w-full h-full">
                    <Image
                        src={bg.src}
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        quality={100} // Optional: Adjust quality
                        className="opacity-50" // Set image opacity
                    />
                </div>
            </div>

            {/* Page Content */}
            <div className="relative">
                <h1 ref={titleRef} className="text-5xl pt-[15vh] pl-[6vw] font-pirata md:text-4xl sm:text-3xl text-center">About Us</h1>
                <div className="relative mx-[6vw] my-[5vh] flex flex-col items-center">
                    {/* Background Rectangle */}
                    <div ref={rectangleRef} className="relative w-full max-w-[70vw] bg-[#03294F] opacity-50 rounded-[100px] z-0 p-[4vh]">
                        {/* Content */}
                        <div className="relative z-10 w-full flex items-center justify-center">
                            <p ref={paragraphRef} className="font-humanistika text-base md:text-xl lg:text-2xl font-normal text-white leading-[1.3] text-center md:text-left">
                                Prepare to embark on an extraordinary journey into the Colosseum of Code as we unveil the 7th in-person edition of Electrothon! This year, under the banner of a medieval realm, we invite you to a battlefield where code meets creativity and innovation becomes legendary.
                                <br />
                                <br />
                                Spearheaded by the dynamic student community SPEC and illuminated by the vibrant energy of NIT Hamirpur, Electrothon has left an indelible mark on the tech community, empowering over 6000 students to unleash their potential.
                                <br />
                                <br />
                                In previous editions, budding innovators wove spells of technology, transforming visions into reality. Now, in this medieval chapter, prepare to arm yourself with ingenuity, compete with the bravest of coders, and forge groundbreaking solutions that will echo through the halls of innovation.
                            </p>
                        </div>
                    </div>
                    
                    {/* Cannonballs Positioned Relative to Whole Page */}
                    {/* Uncomment if needed */}
                    {/* 
                    <Cannonball2 style={{ position: 'absolute', top: '-35%', left: '60%' }} reflectionPosition="top-left" />
                    <Cannonball3 style={{ position: 'absolute', top: '-35%', left: '86%' }} reflectionPosition="top-right" />
                    <Cannonball4 style={{ position: 'absolute', top: '18%', left: '90%' }} reflectionPosition='bottom-left' />
                    <Cannonball style={{ position: 'absolute', top: '60%', left: '78%' }} reflectionPosition='bottom-right' /> 
                    */}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
