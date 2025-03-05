import Image from "next/image";
import { Pirata_One } from "next/font/google";
import judge1Image from "../../assets/judges/megha.webp";
import judge2Image from "../../assets/judges/sachin.webp";
import judge3Image from "../../assets/judges/shekhar.webp";
import judge4Image from "../../assets/judges/himank.webp";
import judge5Image from "../../assets/judges/devansh.webp";
import judge6Image from "../../assets/judges/dhiraj.webp";
import judge7Image from "../../assets/judges/vikrant.webp";
import judge8Image from "../../assets/judges/aman.webp";
import { useRef } from "react";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LeftArrowIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8L8 12M8 12L12 16M8 12H16M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 22 12 12 22C6.47715 22 2 17.5228 2 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 2 12 12 2C22 6.47715 22 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const judges = [
  {
    id: 1,
    name: "Megha Arora",
    color: "#37375E",
    image: judge1Image,
    linkedin: "https://www.linkedin.com/in/devrelmegha/",
  },
  {
    id: 2,
    name: "Sachin Jha",
    color: "#782A2B",
    image: judge2Image,
    linkedin: "https://www.linkedin.com/in/sachin-jha-/",
  },
  {
    id: 3,
    name: "Shekhar Patel",
    color: "#3E6E7C",
    image: judge3Image,
    linkedin: "https://www.linkedin.com/in/shekhar-patel-149bb0224",
  },
  {
    id: 4,
    name: "Himank Varshney",
    color: "#002E78",
    image: judge4Image,
    linkedin: "https://www.linkedin.com/in/varhimank/",
  },
  {
    id: 5,
    name: "Devansh Sood",
    color: "#D0A022",
    image: judge5Image,
    linkedin: "https://www.linkedin.com/in/sood2105/",
  },
  {
    id: 6,
    name: "Dhiraj Kumar",
    color: "#5E2D79",
    image: judge6Image,
    linkedin: "https://www.linkedin.com/in/dhiraj-kumar-71620b45/",
  },
  {
    id: 7,
    name: "Vikrant Khedkar",
    color: "#1B4D3E",
    image: judge7Image,
    linkedin: "https://www.linkedin.com/in/vikrant-khedkar/",
  },
  {
    id: 8,
    name: "Aman Kr. Poddar",
    color: "#AA4A44",
    image: judge8Image,
    linkedin: "https://www.linkedin.com/in/amanpoddar10/",
  },
];

export default function JudgesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="judges" className="relative w-full overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-start">
        <h2
          className={`${pirataOne.className} text-[50px] sm:text-[70px] md:text-[4.5rem] text-center text-white mt-3 mb-8 sm:mb-10 md:mb-12 lg:mb-12 w-[80%] sm:w-[70%] md:w-[60%]`}
          style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Our Judges and Mentors
        </h2>

        <div className="relative w-full flex items-center justify-center">
          <button
            className="absolute left-2 md:left-5 lg:left-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("left")}
          >
            <LeftArrowIcon />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full max-w-6xl space-x-16 px-8 justify-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {judges.map((judge) => (
              <JudgeCard key={judge.id} judge={judge} />
            ))}
          </div>

          <button
            className="absolute right-2 md:right-5 lg:right-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("right")}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function JudgeCard({ judge }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
        <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-44 md:h-44 lg:w-52 lg:h-52">
          <div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: judge.color }}
          />
          {judge.image && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src={judge.image}
                alt={judge.name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </a>
      <p className="text-white text-lg font-semibold text-center">
        {judge.name}
      </p>
      <div
        className="w-44 sm:w-52 md:w-40 lg:w-52 h-1 mt-2"
        style={{ backgroundColor: judge.color }}
      />
    </div>
  );
}
