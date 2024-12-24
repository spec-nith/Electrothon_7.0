"use client";
import React from "react";
import Image from "next/image";
import OrganizerSlider from "./OrganizerSlider";

// Importing images data
import {
  leadOrganizers,
  thirdYearOrganizers,
  secondYearOrganizers,
} from "./organizerData";

export default function Organizers() {
  return (
    <div id="Organizers" className="relative z-10 container mx-auto px-4 py-16">
      {/* Lead Organizers Section */}
      <div className="mb-16">
        <h2
          className="text-3xl md:text-5xl text-white text-center mb-6 md:mb-10"
          style={{ fontFamily: "Pirata One, sans-serif" }}
        >
          Lead Organizers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {leadOrganizers.map((leader, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full"
            >
              <div
                className="bg-white p-3 rounded-sm shadow-lg flex flex-col justify-center items-center sm:h-52"
                style={{
                  aspectRatio: "1",
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                <div
                  className="bg-[#473d8d] flex justify-center items-center rounded-sm"
                  style={{
                    aspectRatio: "1",
                    maxWidth: "100%",
                    width: "99%",
                    height: "99%",
                  }}
                >
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/50 transform -rotate-6 z-20"
                    style={{ opacity: 0.9 }}
                  />
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={280}
                    height={280}
                    className="object-cover w-full h-full rounded-sm"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-white text-sm sm:text-lg">{leader.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizers Section */}
      <div className="mb-16">
        <h2
          className="text-3xl md:text-5xl text-white text-center mb-6 md:mb-10"
          style={{ fontFamily: "Pirata One, sans-serif" }}
        >
          Organizers
        </h2>
        <div className="space-y-12">
          {" "}
          {/* Added space between sliders */}
          <OrganizerSlider organizers={thirdYearOrganizers} direction="rtl" />
          <OrganizerSlider organizers={secondYearOrganizers} direction="ltr" />
        </div>
      </div>
    </div>
  );
}
