import React from "react";
import MainPg from '@/components/MainPg/MainPg.js'
import AboutUs from '@/components/About_Us/AboutUs.js'
import Faqs from "@/components/Faq/faq";
import styles from './page.module.css'; // Import CSS module
import Slider from '@/components/last_electrothon/slider.js';
import Timeline from "@/components/Timeline/timeline";
import Sponsors1 from "@/components/Sponsors/Sponsers1";
import Sponsors2 from "@/components/Sponsors/Sponsors2";
import Prize from "@/components/Prizes/Prizes";
import SliderT from "@/components/Testimonials/slider";
import bg from "../assets/backgroundimg.jpg"
import Footer from "@/components/contact_us/Footer";
import JudgesSection from "../components/JudgesSection/JudgesSection.js";
import Organizers from "@/components/Organizers/Organizer";
import Image from "next/image";
import ThemeSection from "@/components/ThemeSection/ThemeSection";




export default function Home() {

  return (
    <div
    className="relative scroll-smooth bg-cover bg-center bg-fixed h-full overflow-y-auto"
    style={{ backgroundImage: `url(${bg.src})` }}>
    <MainPg />
    <AboutUs />
    <h1 className={styles.title}>Glimpse of Last Electrothon</h1>
    <Slider />
    <JudgesSection />
    <Prize />
    {/* <section id="timeline" className="py-12">
    <Timeline />
    </section> */}
    <Sponsors1 />
    <Sponsors2 />
    <SliderT /> 
    <Organizers />
 
    



      <Faqs/> 
      <Footer/>
   
  </div>
  
  );
}
