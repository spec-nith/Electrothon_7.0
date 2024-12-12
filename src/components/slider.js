"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className={styles.slider}>
            <button className={styles.arrowLeft} onClick={goToPrev}>
                &#8592;
            </button>
            <div className={styles.imageContainer} style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
            <button className={styles.arrowRight} onClick={goToNext}>
                &#8594;
            </button>
        </div>
    );
};

const DualSlider = () => {
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
            <Slider images={row1Images} />
            <Slider images={row2Images} />
        </div>
    );
};

export default DualSlider;
