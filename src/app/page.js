import React from "react";
import Image from "next/image";
import MainPg from '@/components/MainPg/MainPg.js'
import Footer from '@/components/contact_us/Footer.js'

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainPg />
      <Footer />
    </div>
  );
}
