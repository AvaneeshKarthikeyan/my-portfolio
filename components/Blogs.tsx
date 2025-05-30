"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { blogs } from "@/data"; // Import blogs data
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
import "swiper/css"; // Import Swiper CSS

const Blogs = () => {
  return (
    <div id="blogs" className="py-20">
      <h1 className="heading mb-10">
        My <span className="text-purple">Blogs</span>
      </h1>

      <Swiper
        modules={[Autoplay]} // ✅ Register autoplay module
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000, // ✅ 3 seconds between slides
          disableOnInteraction: false, // ✅ Keeps autoplay even after user interacts
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {blogs.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] border rounded-lg overflow-hidden">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <div className="relative flex items-center justify-center w-full h-[20vh] lg:h-[30vh] mb-10 overflow-hidden">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-full object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-center mt-7 mb-3">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Blog
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
