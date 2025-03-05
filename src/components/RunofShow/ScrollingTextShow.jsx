"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Event schedule data
const dayData = {
  "DAY 1": [
    { "Event": "Arrival", "Timing": "8:00 AM", "Venue": "Auditorium" },
    { "Event": "Checkin", "Timing": "11:00-2:00 PM", "Venue": "Auditorium" },
    { "Event": "Opening Ceremony", "Timing": "2:00-4:00 PM", "Venue": "Auditorium" },
    { "Event": "Hacking Begins", "Timing": "4:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Snack Time", "Timing": "5:30-6:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Github Workshop", "Timing": "6:00-6:45 PM", "Venue": "New Lecture Hall" },
    { "Event": "Dinner", "Timing": "7:45 PM", "Venue": "Mess" }
  ],
  "DAY 2": [
    { "Event": "BreakFast", "Timing": "8:00 AM", "Venue": "Mess" },
    { "Event": "Hacking phase I", "Timing": "9:00 AM", "Venue": "New Lecture Hall" },
    { "Event": "Mentor Shift Active", "Timing": "10:00 AM- 11:30 AM", "Venue": "New Lecture Hall" },
    { "Event": "DevRelSquad Workshop", "Timing": "11:30 AM- 12:15 AM", "Venue": "New Lecture Hall" },
    { "Event": "Lunch", "Timing": "12:20 PM - 2:00 PM", "Venue": "Mess" },
    { "Event": "Hacking Phase 2", "Timing": "2:00 PM - 3:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Mentors Shift 2", "Timing": "2:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "MLH Mini event/talk", "Timing": "3:00 PM - 4:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Evaluation Phase 1", "Timing": "4:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "Snack Time", "Timing": "5:30 PM - 6:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Speaker's Talk", "Timing": "7:00 PM - 8:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Dinner", "Timing": "8:00 PM - 9:00 PM", "Venue": "Mess" },
    { "Event": "Online Mentor Shift", "Timing": "10:00 PM", "Venue": "Online" }
  ],
  "DAY 3": [
    { "Event": "Breakfast", "Timing": "7:45 AM", "Venue": "Mess" },
    { "Event": "Soft Submission Deadline", "Timing": "9:00 AM - 9:30 AM", "Venue": "New Lecture Hall" },
    { "Event": "Hard Submission", "Timing": "9:30 AM - 10:00 AM", "Venue": "New Lecture Hall" },
    { "Event": "Judging Slot", "Timing": "10:30 AM - 12:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "Lunch", "Timing": "12:30 PM - 2:00 PM", "Venue": "Mess" },
    { "Event": "Buffer for Networking", "Timing": "2:00 PM - 3:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Closing and Result", "Timing": "3:00 PM - 5:00 PM", "Venue": "Auditorium" },
    { "Event": "Snack Time", "Timing": "5:00 PM - 5:30 PM", "Venue": "New Lecture Hall" }
  ]
};

const ScrollingTextShow = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleMouseEnter = (e, item) => {
    const rect = e.target.getBoundingClientRect();
    setHoveredEvent({
      event: item.Event,
      timing: item.Timing,
      venue: item.Venue,
      position: { top: rect.top + window.scrollY, left: rect.left + window.scrollX },
    });
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  // Helper function to create scrolling event list
  const createScrollingContainer = (events) => (
    <motion.ul className="flex flex-col space-y-2 h-full">
      {events.map((item, index) => (
        <>
          <li
            key={`${item.Event}-${index}`}
            onMouseEnter={(e) => handleMouseEnter(e, item)}
            onMouseLeave={handleMouseLeave}
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 57, 0.7), rgba(2, 29, 59, 0.7))", // Blue gradient with 70% opacity
              fontFamily: "Jacques Francois",
              color: "#FFFFFF", // White text for the question
              transition: "border-bottom 0.3s ease", // Smooth transition for the effect
              boxShadow: "0px 6px 16px rgba(188, 135, 65, 0.35)",
              borderBottom: "2px solid #D2A374"
            }}
            className="w-[300px] cursor-pointer pt-3 text-center items-center justify-center text-sm md:text-base font-semibold bg-[rgba(46,72,98,0.64)] backdrop-blur-xl rounded-lg shadow-2xl relative "
          >
            <div className="pb-3 rounded-lg" >{item.Event}</div>

            {/* Tooltip is rendered separately and positioned globally */}
          {hoveredEvent &&
            hoveredEvent.event === item.Event &&
            hoveredEvent.timing === item.Timing && (
              <AnimatePresence>
                <motion.div
                  key="tooltip"
                  className={`w-full py-3 rounded-lg bg-transparent `}
                  initial={{ opacity: 0, height: "auto" }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
               
                >
                  <p className="text-center font-normal">
                    Time: {hoveredEvent.timing}
                  </p>
                  <p className="text-center font-normal">
                    Venue: {hoveredEvent.venue}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </li>
        </>
      ))
      }
    </motion.ul >
  );

  // Component for each day's events
  const SliderItem = ({ children, day }) => (
    <div className="w-[300px] flex-shrink-0 h-full flex flex-col items-center">
      <h2 className="text-white text-lg md:text-[40px] font-bold mt-5 mb-10">{day}</h2>
      {children}
    </div>
  );

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Title */}
      <h1
        style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
        className="w-full py-4 md:py-6 text-center text-xl md:text-6xl font-pirata text-white"
      >
        Run of Show
      </h1>
      <div className="flex justify-center items-center w-[80%]">
        <div className="flex items-center justify-center space-x-20">
          {Object.keys(dayData).map((day) => (
            <div key={day} className="h-[75vh] overflow-y-auto scrollbar-hide flex items-center justify-center">
              <SliderItem day={day}>{createScrollingContainer(dayData[day])}</SliderItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTextShow;
