'use client';

import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { initialQues, moreQues } from "./faq_master";

export default function Faqs() {
  const [open, setOpen] = useState(-1); // Initially no question is open
  const [loadMore, setLoadMore] = useState(false); // State to toggle load more questions

  const handleOpen = (value) => {
    setOpen(open === value ? -1 : value); // Toggle open state, close if already open
  };

  return (
    <div
      className="w-full px-4 sm:px-10 mt-20 text-center text-white md:px-20 xl:px-32"
      id="faq"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Required for overlay
      }}
    >
      {/* FAQ Heading */}
      <div className="py-5">
        <h1
          className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pirata-one-regular"
          style={{
            color: "#FFFFFF", // White color for the heading text
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          FAQs
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 md:mx-10 lg:grid grid-cols-1 gap-10">
        {/* Render initial questions */}
        <div className="w-full">
          {initialQues.map((faq, index) => (
            <Accordion key={faq.title + index} open={open === index} className="rounded-xl shadow-lg">
              <AccordionHeader
                style={{
                  background: "linear-gradient(to bottom, rgba(0, 0, 57, 0.7), rgba(2, 29, 59, 0.7))", // Blue gradient with 70% opacity
                  fontFamily: "Jacques Francois",
                  color: "#FFFFFF", // White text for the question
                  borderBottom: open === index ? "2px solid #D2A374" : "none", // Golden border when open
                  transition: "border-bottom 0.3s ease", // Smooth transition for the effect
                }}
                className="my-4 p-6 text-center rounded-xl text-base font-normal border-none"
                onClick={() => handleOpen(index)}
              >
                <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                  {faq.title}
                </h1>
              </AccordionHeader>

              <AccordionBody
                className={`text-lg md:text-xl h-auto text-justify lg:text-left text-white rounded-xl p-6 transition-all duration-500 ease-in-out ${
                  open === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: "rgba(128, 71, 28, 0.7)", // Dark brown background with 70% opacity
                  fontFamily: "Jacques Francois",
                  color: "#E0D6D1",
                  margin: "auto",
                  width: "100%",
                  borderRadius: "1rem", // Rounded corners for a nicer shape
                }}
              >
                {faq.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>

        {/* Render more questions if 'loadMore' is true */}
        {loadMore && (
          <div className="w-full">
            {moreQues.map((faq, index) => (
              <Accordion
                key={faq.title + (index + initialQues.length)}
                open={open === index + initialQues.length}
                className="rounded-xl shadow-lg"
              >
                <AccordionHeader
                  style={{
                    background: "linear-gradient(to bottom, rgba(0, 0, 57, 0.7), rgba(2, 29, 59, 0.7))", // Blue gradient with 70% opacity
                    fontFamily: "Jacques Francois",
                    color: "#FFFFFF", // White text for the question
                    borderBottom: open === index + initialQues.length ? "2px solid #D2A374" : "none", // Golden border when open
                    transition: "border-bottom 0.3s ease", // Smooth transition for the effect
                  }}
                  className="my-4 p-6 text-center rounded-xl text-base font-normal border-none"
                  onClick={() => handleOpen(index + initialQues.length)}
                >
                  <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                    {faq.title}
                  </h1>
                </AccordionHeader>

                <AccordionBody
                  className={`text-lg md:text-xl h-auto text-justify lg:text-left text-white rounded-xl p-6 transition-all duration-500 ease-in-out ${
                    open === index + initialQues.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    backgroundColor: "rgba(128, 71, 28, 0.7)", // Dark brown background with 70% opacity
                    fontFamily: "Jacques Francois",
                    color: "#E0D6D1",
                    margin: "auto",
                    width: "100%",
                    borderRadius: "1rem", // Rounded corners for a nicer shape
                  }}
                >
                  {faq.content}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}

        {/* Button to load more questions */}
        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => setLoadMore((prev) => !prev)} // Toggle the loadMore state
            className="p-4 mt-4 mb-10 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-lg pirata-one-regular text-white bg-[#000039] border-2 border-[#D2A374] hover:bg-[#021D3B]"
          >
            {loadMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
