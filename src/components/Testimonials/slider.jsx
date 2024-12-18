'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Data from "../../assets/testimonails_data/testimonies.js";
import Heading from "../Sponsors/Heading.jsx";

const SliderT = () => {
  return (
    <div className="container w-screen h-screen mx-auto bg-transparent text-white mb-5 xs:mt-10">
      {/* Nest the content inside the Heading component */}
      <Heading>Testimonials</Heading>
      <Swiper
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 1.35,
            spaceBetween: 15,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {Data.map((d, index) => (
          <SwiperSlide className="bg-transparent" key={index}>
            <div
              className="flex flex-col items-center xs:w-[100%] sm:w-[85%] lg:w-[96%] xl:w-[97%] 2xl:w-[95%] md:w-[85%] xs:h-[67vh] sm:h-[80vh] md:h-[84vh] lg:h-[75vh] 2xl:h-[80%] mx-auto bg-[#272727] opacity-80 text-white rounded-xl xs:mt-16 sm:mt-8 md:mt-6 lg:mt-6 xl:mt-6 first-line:p-7"
              key={index}
            >
              {/* Profile Section */}
              <div className="flex flex-row items-center w-full xs:h-1/7 sm:h-1/6 md:h-1/6 lg:h-1/5 xl:h-1/5 2xl:h-auto xs:m-1 2xl:p-4 bg-transparent">
                <div className="bg-transparent">
                  <img
                    src={d.profilepic}
                    alt="Profile"
                    className="xs:h-16 sm:h-20 md:h-22 lg:h-24 xl:h-24 xs:w-16 sm:w-20 md:w-22 lg:w-24 xl:w-24 xl:m-3 rounded-full object-cover"
                  />
                </div>
                <div
                  className="flex flex-col justify-center ml-5 bg-transparent text-white"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  <div className="font-semibold bg-transparent sm:text-xl md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl mb-1">
                    {d.name}
                  </div>
                  <div className="sm:text-lg md:text-lg lg:text-xl bg-transparent">
                    {d.date}
                  </div>
                </div>
              </div>

              {/* Post Section */}
              <div
                className="flex sm:items-center md:items-center xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full h-3/4 bg-transparent"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                <img
                  src={d.postpic}
                  alt="Post"
                  className="xs:w-[88%] sm:w-[87%] md:w-[86%] lg:w-[62%] h-auto rounded-lg m-2 object-cover"
                />
                <div className="sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-left bg-transparent font-semibold sm:mt-3 md:mt-2 lg:pt-1 xs:p-4 sm:p-2 md:p-2 lg:pl-6 lg:pr-12 sm:w-[full] md:w-[full] lg:w-[34%]">
                  {d.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderT;
