"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { magazines } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MagazineCard = ({ item }: { item: any }) => (
  <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] border rounded-xl overflow-hidden bg-[#1A1D3A] m-2">
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center w-full h-full p-4"
    >
      <div className="relative w-[70%] aspect-[3/4] mb-8 overflow-hidden rounded-md">
        <img
          src={item.img}
          alt="magazine cover"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h1 className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1 text-center text-white">
        {item.title}
      </h1>
      <p className="text-sm lg:text-lg text-gray-400 line-clamp-2 text-center mt-2">
        {item.des}
      </p>
      <div className="flex items-center justify-center mt-6">
        <p className="text-purple text-sm lg:text-xl">Read Magazine</p>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </div>
    </a>
  </div>
);

const Magazines = () => {
  return (
    <div id="magazines" className="py-20">
      <h1 className="heading mb-10">
        My <span className="text-purple">Magazines</span>
      </h1>

      {magazines.length >= 3 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper px-4"
        >
          {magazines.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <MagazineCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {magazines.map((item) => (
            <MagazineCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Magazines;
