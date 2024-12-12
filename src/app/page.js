import React from "react";
import Image from "next/image";
import MainPg from '@/components/MainPg/MainPg.js'
import AboutUs from '@/components/MainPg/AboutUs.js'

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainPg />
      <AboutUs />
    </div>
  );
}
