'use client'
import React from 'react'
import Image from "next/image"
import dynamic from 'next/dynamic'

const OrganizerSlider = dynamic(() => import('./OrganizerSlider'), { ssr: false })

const leadOrganizers = [
  {
    image: "/stockimage.png",
    name: "Lead Organizer 1",
    role: "Lead"
  },
  {
    image: "/stockimage.png",
    name: "Lead Organizer 2",
    role: "Lead"
  }
]

const organizers = Array(40)
  .fill(null)
  .map((_, index) => ({
    image: "/stockimage.png",
    name: `Organizer ${index + 1}`,
    role: "Organizer",
  }));


export default function Organizers() {
  return (
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Lead Organizers Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl text-white text-center mb-6 md:mb-10" style={{ fontFamily: 'Pirata One, sans-serif' }}>
            Lead Organizers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {leadOrganizers.map((leader, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[calc(50%-0.5rem)] mx-auto"
              >
                {/* White Frame */}
                <div
                  className="bg-white p-3 rounded-sm shadow-lg flex flex-col justify-center items-center" 
                  // Increased padding here
                  style={{
                    aspectRatio: "1",
                    maxWidth: "210px",
                    margin: "0 auto"
                  }}
                >
                  {/* Purple Background and Image */}
                  <div
                    className="relative bg-[#473d8d] flex justify-center items-center rounded-sm" 
                    // Purple adjusted between dark blue and purple
                    style={{
                      aspectRatio: "1",
                      maxWidth: "100%",
                      width: "99%", // Creates extra padding between white and purple
                      height: "99%"
                    }}
                  >
                    {/* Tape Element */}
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-5 bg-white/50 transform -rotate-6 z-20"
                      style={{
                        opacity: 0.9, // More transparent
                      }} 
                    />
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-sm"
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
        <div>
          <h2 className="text-3xl md:text-5xl text-white text-center mb-6 md:mb-10" style={{ fontFamily: 'Pirata One, sans-serif' }}>
            Organizers
          </h2>
          <OrganizerSlider organizers={organizers} />
        </div>
      </div>

  )
}