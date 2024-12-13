
import React from "react";
import MainPg from '@/components/MainPg/MainPg.js'
import AboutUs from '@/components/About_Us/AboutUs.js' 
import Faqs from "@/components/Faq/faq";
import styles from './page.module.css'; // Import CSS module
import Slider from '@/components/last_electrothon/slider.js';
import Sponsors1 from "@/components/Sponsors/Sponsers1";
import Sponsors2 from "@/components/Sponsors/Sponsors2";

import SliderT from "@/components/Testimonials/slider";

import bg from "../assets/backgroundimg.jpg"
import Footer from "@/components/contact_us/Footer";

export default function Home() {
  
  return (

  
    <div
    className="relative bg-cover bg-center bg-fixed h-full overflow-y-auto"
    style={{ backgroundImage: `url(${bg.src})` }}>
    <MainPg />
    <AboutUs />
    <h1 className={styles.title}>Glimpse of Last Electrothon</h1>
    <Slider />
    <Sponsors1 />
    <Sponsors2 />
    <SliderT /> 
      <Faqs/> 
      <Footer/>
   
  </div>
  
  );
}
