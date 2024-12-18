
import React from "react";
import MainPg from '@/components/MainPg/MainPg.js'
import styles from './page.module.css'; // Import CSS module
import Slider from '@/components/last_electrothon/slider.js';
import Sponsors1 from "@/components/Sponsors/Sponsers1";
import Sponsors2 from "@/components/Sponsors/Sponsors2";
import bg from "../assets/backgroundimg.jpg"


export default function Home() {
  
  return (

  
    <div
    className="relative bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${bg.src})` }}

  >
    <MainPg />
    {/* <section className="min-h-screen flex flex-col items-center  bg-transparent"> */}
    <Sponsors1 />
    <Sponsors2 />
    {/* </section>
     */}
     <h1 className={styles.title}>Glimpse of Last Electrothon</h1>
     <Slider />
   
  </div>
  
  );
}
