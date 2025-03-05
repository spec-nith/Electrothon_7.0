// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import data_prizes from "../../assets/prizes_data/prizes";

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const Prize = () => {
//   const { pic1, pic2, pic3 } = data_prizes[0] || {};

//   return (
//     <div
//       id="prizes"
//       className="prizes-section w-full bg-cover bg-center flex items-center justify-center"
//     >
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8 w-full max-w-7xl"
//       >
//         {/* Title */}
//         <h1
//           style={{
//             textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
//           }}
//           className="text-white text-[20px] md:text-[70px] lg:text-[4.5rem] pirata-one-regular mb-8">
//           Prizes
//         </h1>

//         {/* Prizes Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
//           {/* Second Prize */}
//           <div
//             className="order-2 md:order-1 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
//             style={{
//               border: "3px solid #66B2FF",
//               borderRadius: "24px",
//               boxShadow: "0px 6px 15px rgba(102, 178, 255, 0.5)",
//             }}
//           >
//             <div className="relative">
//               <Image
//                 src={pic2 || "/placeholder-image.png"}
//                 alt="Second Prize Icon"
//                 width={200}
//                 height={200}
//                 className="max-w-full"
//               />
//               <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl pirata-one-regular font-bold">
//                 Coming Soon
//               </p>
//             </div>
//             <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
//               Second Prize
//             </h2>
//           </div>

//           {/* First Prize */}
//           <div
//             className="order-1 md:order-2 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
//             style={{
//               border: "3px solid #66CC66",
//               borderRadius: "24px",
//               boxShadow: "0px 6px 15px rgba(102, 204, 102, 0.5)",
//             }}
//           >
//             <div className="relative">
//               <Image
//                 src={pic1 || "/placeholder-image.png"}
//                 alt="First Prize Icon"
//                 width={250}
//                 height={250}
//                 className="max-w-full"
//               />
//               <p className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl pirata-one-regular font-bold">
//                 Coming Soon
//               </p>
//             </div>
//             <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
//               First Prize
//             </h2>
//           </div>

//           {/* Third Prize */}
//           <div
//             className="order-3 md:order-3 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
//             style={{
//               border: "3px solid #FF99CC",
//               borderRadius: "24px",
//               boxShadow: "0px 6px 15px rgba(255, 153, 204, 0.5)",
//             }}
//           >
//             <div className="relative">
//               <Image
//                 src={pic3 || "/placeholder-image.png"}
//                 alt="Third Prize Icon"
//                 width={200}
//                 height={200}
//                 className="max-w-full"
//               />
//               <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl pirata-one-regular font-bold">
//                 Coming Soon
//               </p>
//             </div>
//             <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
//               Third Prize
//             </h2>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Prize;





// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ReactPlayer from 'react-player';
// import Gold from '../../assets/Prizes/Gold.mp4';

// const VideoCards = () => {
//     const videoRefs = useRef([]);
//     const containerRefs = useRef([]); // Store refs for border animation

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         requestAnimationFrame(() => {
//             videoRefs.current.forEach((player, index) => {
//                 if (!player || !containerRefs.current[index]) return;

//                 ScrollTrigger.create({
//                     trigger: containerRefs.current[index],
//                     start: 'top 75%',
//                     end: 'bottom 25%',
//                     onEnter: () => player.seekTo(0, "seconds"),
//                     onEnterBack: () => player.seekTo(0, "seconds"),
//                     onLeave: () => player.getInternalPlayer().pause(),
//                     onLeaveBack: () => player.getInternalPlayer().pause(),
//                 });

//                 // Border animation
//                 gsap.to(containerRefs.current[index], {
//                   boxShadow: `0 0 50px 20px ${["#c8dcda", "#fed81d", "#f38d28"][index]}`, // Increased glow effect
//                   duration: 1,
//                   repeat: -1,
//                   yoyo: true,
//                   ease: "power1.inOut",
//               });
              
//             });

//             ScrollTrigger.refresh();
//         });
//     }, []);

//     return (
//         <div className="w-full h-auto  flex flex-col items-center justify-center bg-transparent">
//             <h1
//                 style={{
//                     textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
//                 }}
//                 className="text-white text-[20px] md:text-[70px] lg:text-[4.5rem] pirata-one-regular mb-8">
//                 Prizes
//             </h1>
//             <div className="flex flex-wrap gap-10 justify-center">
//                 {["#feaa31", "#dadada", "#6e5100"].map((color, index) => (
//                     <div
//                         key={index}
//                         ref={(el) => (containerRefs.current[index] = el)}
//                         className="relative rounded-xl flex flex-col items-center justify-center w-[70vw] max-w-[400px] h-[50vh] max-h-[500px] bg-[#060c21] p-5 border-0 transition-all"
//                     >
//                         <ReactPlayer
//                             ref={(player) => (videoRefs.current[index] = player)}
//                             url={Gold}
//                             playing={true}
//                             muted
//                             width="100%"
//                             height="auto"
//                             controls={false}
//                             loop={true}
//                             onEnded={() => videoRefs.current[index].seekTo(videoRefs.current[index].getDuration())}
//                         />
//                         <div className="text-center text-gray-300 mt-4">
//                             <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
//                                 Glowing Border
//                             </h1>
//                             <p className="text-sm md:text-base leading-relaxed">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//                                 corporis iure impedit quam quaerat quas odit aliquam nulla totam quasi!
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VideoCards;


import ReactPlayer from 'react-player';
import Gold3 from '../../assets/Prizes/Gold3.mp4';
import Silver2 from'../../assets/Prizes/Silver2.mp4';
import Bronze2 from '../../assets/Prizes/Bronze2.mp4';
import './style.css';
const Prizes = () => {



    return(
        <div id = "prizes" className="w-full h-auto items-center justify-center flex flex-col bg-transparent">
            <h1
                style={{
                    textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
                }}
                className="text-white text-[20px] md:text-[70px] sm:text-[60px] custom:text-[40px] xs:text-[40px] lg:text-[4.5rem] pirata-one-regular mb-8">
                Prizes
            </h1>
            <div className="flex gap-10 custom:gap-5 items-center justify-center h-auto">
                <div className="card-wrapper2 h-[50vh] lg:h-[40vh] xl:h-[50.3vh] md:h-[35vh] w-[20vw] custom:w-[25vw] xs:w-[25vw] md:w-[25vw] sm:w-[25vw] sm:h-[30.2vh] custom:h-[22.3vh] xs:h-[20.2vh] ">
                    <div className='...'></div>
                    <div className="card-content2 flex flex-col items-center text-center justify-center text-xs ">
                    <ReactPlayer
                             url={Silver2}
                             playing={true}
                             muted
                             width="100%"
                             height="auto"
                             controls={false}
                             loop={true}
                    />
                    <h1 className='font-sans font-bold text-[#dadada] text-5xl md:text-3xl sm:text-2xl custom:text-xl xs:text-base'>25K INR</h1>
                    <h1 className='font-sans font-medium text-[#dadada] text-xl md:text-lg sm:text-base xs:text-xs custom:text-xs'>First Runner Up</h1>
                    </div>
                </div>
                <div className="card-wrapper h-[50vh] lg:h-[40vh] xl:h-[50.3vh] md:h-[35vh] w-[20vw] custom:w-[25vw] xs:w-[25vw] md:w-[25vw] sm:w-[25vw] sm:h-[30.2vh] custom:h-[22.3vh] xs:h-[20.2vh] ">
                    <div className='...'></div>
                    <div className="card-content flex flex-col items-center text-center justify-center text-xs ">
                    <ReactPlayer
                             url={Gold3}
                             playing={true}
                             muted
                             width="100%"
                             height="auto"
                             controls={false}
                             loop={true}
                    />
                    <h1 className='font-sans font-bold text-[#ffea2b] text-5xl md:text-3xl sm:text-2xl custom:text-xl xs:text-base'>35K INR</h1>
                    <h1 className='font-sans font-medium text-[#ffea2b] text-xl md:text-lg sm:text-base xs:text-xs custom:text-xs'>Winner</h1>
                    </div>
                </div>
                <div className="card-wrapper3 h-[50vh] lg:h-[40vh] xl:h-[50.3vh] md:h-[35vh] w-[20vw] custom:w-[25vw] xs:w-[25vw] md:w-[25vw] sm:w-[25vw] sm:h-[30.2vh] custom:h-[22.3vh]  xs:h-[20.2vh] ">
                    <div className='...'></div>
                    <div className="card-content3 flex flex-col items-center text-center justify-center ">
                    <ReactPlayer
                             url={Bronze2}
                             playing={true}
                             muted
                             width="100%"
                             height="auto"
                             controls={false}
                             loop={true}
                    />
                    <h1 className='font-sans items-center justify-center font-bold text-[#eb9029] text-5xl md:text-3xl sm:text-2xl custom:text-xl xs:text-base'>15K INR</h1>
                    <h1 className='font-sans font-medium text-[#eb9029] text-xl md:text-lg sm:text-base xs:text-xs custom:text-xs '>Second Runner Up</h1>
                    </div>
                </div>
            </div>
            <h1
                style={{
                    textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
                }}
                className="text-white text-[10px] md:text-[1.5rem] sm:text-[1.5rem] custom:text-[1.5rem] xs:text-[1.5rem] lg:text-[1.5rem] font-sans font-semibold mt-5 mb-8">
                Includes prizes worth 5k
            </h1>
        </div>
    );
};

export default Prizes;