"use client";
import React from "react";
import Image from "next/image";
import MainPg from '@/components/MainPg.js';
import styles from './page.module.css'; // Import CSS module
import Slider from '@/components/slider.js';

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainPg />
      <h1 className={styles.title}>Glimpse of Last Electrothon</h1>
      <Slider />
    </div>
  );
}
