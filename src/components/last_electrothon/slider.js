"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";
import data from "@/assets/last_electrothon_data/images"; // Adjust the import path as needed

const Slider = ({ images }) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true, // Allow user interruption for better UX
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
                        loading={index < 4 ? "eager" : "lazy"} // Eager loading for the first few images
                        placeholder="blur" // Add a blur placeholder for better perceived performance
                        blurDataURL="/path-to-blur-placeholder.jpg" // Replace with an actual small low-quality image
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const DualSlider = () => {
    const imagePaths = Object.values(data).map((imagePath) => imagePath);
    const row1Images = imagePaths.slice(0, 9); // Adjust slice indices based on your data
    const row2Images = imagePaths.slice(9, 18);

    return (
        <div className={styles.dualSlider}>
            <Slider images={row1Images} />
            <Slider images={row2Images} />
        </div>
    );
};

export default DualSlider;
