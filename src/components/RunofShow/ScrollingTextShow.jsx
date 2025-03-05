"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
    { "Event": "Closing and Result", "Timing": "3:00 PM - 5:00 PM", "Venue": "Auditorium" }
  ]
};

const ScrollingTextShow = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const scrollContainerRef = useRef(null);

  // Ensure scroll starts at the leftmost position on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  const handleMouseEnter = (item) => {
    setHoveredEvent(item);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const createScrollingContainer = (events) => (
    <motion.ul className="flex flex-col space-y-3 min-h-full w-[300px]">
      {events.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
          className="w-full cursor-pointer p-3 text-center text-sm md:text-base font-semibold bg-gradient-to-b from-[rgba(0,0,57,0.7)] to-[rgba(2,29,59,0.7)] text-white rounded-lg shadow-xl border-b-2 border-[#D2A374] transition-all"
        >
          <div className="pb-3">{item.Event}</div>

          {/* Tooltip for event details */}
          {hoveredEvent && hoveredEvent.Event === item.Event && (
            <AnimatePresence>
              <motion.div
                key="tooltip"
                className="w-full py-3 rounded-lg bg-transparent"
                initial={{ opacity: 0, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-center font-normal">Time: {hoveredEvent.Timing}</p>
                <p className="text-center font-normal">Venue: {hoveredEvent.Venue}</p>
              </motion.div>
            </AnimatePresence>
          )}
        </li>
      ))}
    </motion.ul>
  );

  const SliderItem = ({ children, day }) => (
    <div className="w-[300px] flex-shrink-0 flex flex-col items-center snap-start">
      <h2 className="text-white text-lg md:text-[40px] font-bold mt-5 mb-5">{day}</h2>
      {children}
    </div>
  );

  return (
    <div className="relative w-full max-w-full flex flex-col items-center justify-center">
      {/* Title */}
      <h1
        style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
        className="w-full py-4 md:py-6 text-center text-xl md:text-6xl font-pirata text-white"
      >
        Run of Show
      </h1>

      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto flex items-start justify-start lg:justify-center scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex space-x-10 px-5 min-h-screen max-w-max">
          {Object.keys(dayData).map((day) => (
            <div key={day} className="overflow-y-visible flex items-start justify-center">
              <SliderItem day={day}>{createScrollingContainer(dayData[day])}</SliderItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTextShow;
