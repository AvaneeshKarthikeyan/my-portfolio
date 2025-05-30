"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { blogs } from "@/data"; // Your blogs data
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Blogs = () => {
  return (
    <div id="blogs" className="py-20 px-4 max-w-[1200px] mx-auto">
      <h1 className="heading mb-10 text-center">
        My <span className="text-purple">Blogs</span>
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {blogs.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="flex flex-col h-full border rounded-lg overflow-hidden"
              style={{ backgroundColor: "#13162D" }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col flex-grow"
              >
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-bold text-xl sm:text-2xl mb-2 line-clamp-2">
                    {item.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base text-[#BEC1DD] flex-grow line-clamp-3"
                    style={{ marginBottom: "1rem" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center mt-auto text-purple text-lg font-semibold">
                    <p>Check Live Blog</p>
                    <FaLocationArrow className="ml-2" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
