"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import data from "../../assets/last_electrothon_data/images.js";
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
                        priority
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const DualSlider = () => {
    return (
        <div className={styles.dualSlider}>
            {data.map((d,index) => {
                const row1Images = [
                    d.pic1,d.pic2,d.pic3,
                    d.pic4,d.pic5,d.pic6,
                    d.pic7,d.pic8,d.pic9,
                ];
        
                const row2Images = [
                    d.pic10,d.pic11,d.pic12,
                    d.pic13,d.pic14,d.pic15,
                    d.pic16,d.pic17,d.pic18,
                ];
        
                return (
                    <div key={index} className={styles.sliderContainer}>
                        <Slider images={row1Images} />
                        <Slider images={row2Images} />
                    </div>
                );
            })}
        </div>
    );
};

export default DualSlider;
