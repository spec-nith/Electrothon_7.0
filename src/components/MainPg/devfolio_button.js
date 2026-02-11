"use client"

import React, { useEffect } from "react";
const Devfolio_Button = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;

    // Add a slight delay to ensure the div is rendered before the script runs
    setTimeout(() => {
      document.body.appendChild(script);
    }, 100);

    return () => {
      // Ensure the script exists before attempting to remove it
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="text-white p-1 flex justify-center items-center">
      <div
        className="apply-button w-[13rem] h-12 md:w-[20rem] "
        data-hackathon-slug="electrothon-7"
        data-button-theme="light"
      >
      </div>
    </div>
  )
}
export default Devfolio_Button;