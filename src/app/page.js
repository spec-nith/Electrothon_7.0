import React from "react";
import Image from "next/image";
import MainPg from '@/components/MainPg/MainPg.js'
import AboutUs from '@/components/About_Us/AboutUs.js'
import Footer from '@/components/contact_us/Footer.js'
import MainPg from '../components/MainPg.js'

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainPg />
      <AboutUs />
      <Footer />
    </div>
  );
}
