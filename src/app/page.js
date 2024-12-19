import React from "react";
import styles from "./page.module.css";
import bg from "../assets/backgroundimg.jpg";
import JudgesSection from "../components/JudgesSection/JudgesSection.js";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed h-full overflow-y-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <JudgesSection />
    </div>
  );
}
