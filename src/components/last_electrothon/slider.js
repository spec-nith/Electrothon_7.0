"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

const Slider = ({ images }) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className={styles.slider}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const DualSlider = () => {
    // Images for each row
    const row1Images = [
        "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
        "/images/4.jpg", "/images/5.jpg", "/images/6.jpg",
        "/images/7.jpg", "/images/8.jpg", "/images/9.jpg",
    ];

    const row2Images = [
        "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
        "/images/13.jpg", "/images/14.jpg", "/images/15.jpg",
        "/images/16.jpg", "/images/17.jpg", "/images/18.jpg",
    ];

    return (
        <div className={styles.dualSlider}>
            {/* First Slider */}
            <Slider images={row1Images} />
            {/* Second Slider */}
            <Slider images={row2Images} />
        </div>
    );
};

export default DualSlider;
