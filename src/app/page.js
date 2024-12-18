"use client";
import React from "react";
import Image from "next/image";
import MainPg from '@/components/MainPg/MainPg.js'
import AboutUs from '@/components/About_Us/AboutUs.js'
import Footer from '@/components/contact_us/Footer.js' 
import Faqs from "@/components/Faq/faq";
import styles from './page.module.css'; // Import CSS module
import Slider from '@/components/last_electrothon/slider.js';

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainPg />
      <AboutUs />
      <Faqs/>
      <Footer />
      <h1 className={styles.title}>Glimpse of Last Electrothon</h1>
      <Slider />
    </div>
  );
}
