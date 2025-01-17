"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import styles from "./slider.module.css";
import data from "@/assets/last_electrothon_data/images"; 
import { Pirata_One } from 'next/font/google';

const Slider = ({ images, reverse }) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{
                delay: 0, 
                disableOnInteraction: false, 
                reverseDirection: reverse, 
            }}
            speed={5000} 
            loop={true} 
            modules={[Autoplay]}
            className={styles.slider}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{ objectFit: "cover" }}
                        width={400}
                        height={400}
                        className={styles.image}
                        loading={index < 4 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="/path-to-blur-placeholder.jpg"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const pirataOne = Pirata_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const DualSlider = () => {
    const imagePaths = Object.values(data).map((imagePath) => imagePath);
    const row1Images = imagePaths.slice(0, 9);
    const row2Images = imagePaths.slice(9, 18);

    return (
        <div className={`${styles.dualSlider}`}>
            <h1 
            style={{
                textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
            className={`${pirataOne.className} text-[50px] sm:text-[70px] md:text-[4.5rem] text-center text-white mb-0`}>
                Glimpse of Last Electrothon
            </h1>
            {/* First row: Left-scrolling */}
            <Slider images={row1Images} reverse={false} />
            {/* Second row: Right-scrolling */}
            <Slider images={row2Images} reverse={true} />
        </div>
    );
};

export default DualSlider;
