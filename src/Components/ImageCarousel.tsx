import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl px-20 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className=" overflow-hidden"
      >
        <SwiperSlide>
          {/* <img
            src="/images/interiors/interior1.jpg"
            alt="Interior 1"
            className="w-full h-[400px] object-cover"
          /> */}
          <Image
            src="/slide-1-img.jpg"
            width={1536}
            height={750}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="/images/interiors/interior2.jpg"
            alt="Interior 2"
            className="w-full h-[400px] object-cover"
          /> */}
          <Image
            src="/slide-2-img.jpg"
            width={1536}
            height={750}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="/images/interiors/interior3.jpg"
            alt="Interior 3"
            className="w-full h-[400px] object-cover"
          /> */}
          <Image
            src="/slide-3-img.jpg"
            width={1536}
            height={750}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img
            src="/images/interiors/interior3.jpg"
            alt="Interior 3"
            className="w-full h-[400px] object-cover"
          /> */}
          <Image
            src="/slide-4-img.jpg"
            width={1536}
            height={750}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
