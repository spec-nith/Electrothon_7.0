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
            breakpoints={{
                1025: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }}
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
                        //priority
                        loading="lazy"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const DualSlider = () => {
    const row1Images = [
        "/images/1.webp", "/images/2.webp", "/images/3.webp",
        "/images/4.webp", "/images/5.webp", "/images/6.webp",
        "/images/7.webp", "/images/8.webp", "/images/9.webp",
    ];

    const row2Images = [
        "/images/10.webp", "/images/11.webp", "/images/12.webp",
        "/images/13.webp", "/images/14.webp", "/images/15.webp",
        "/images/16.webp", "/images/17.webp", "/images/18.webp",
    ];

    return (
        <div className={styles.dualSlider}>
            <Slider images={row1Images} />
            <Slider images={row2Images} />
        </div>
    );
};

export default DualSlider;
