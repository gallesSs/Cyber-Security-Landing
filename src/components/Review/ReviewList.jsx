import React from "react";
import review from "/Reviews/reviews-bg.png";
import Review from "./Review.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewList = ({ data }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${review})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white px-4 py-10 md:pb-40">
      <h2 className="text-center text-[32px] font-bold leading-10 mb-10 md:mb-15 md:text-5xl md:leading-16 md:w-139 md:mx-auto md:mt-20">
        Trusted by 1200+ world class businesses
      </h2>

      {/* ✅ Обёртка с relative для навигации */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
          className="mb-15">
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center">
              <Review
                count={item.count}
                text={item.text}
                author={item.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Кастомные стрелки */}
        <button className="swiper-button-prev-custom hidden xl:flex absolute xl:left-[30px] 2xl:left-[60px] top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:text-blue-500 transition-colors">
          ‹
        </button>
        <button className="swiper-button-next-custom hidden xl:flex absolute xl:right-[30px] 2xl:right-[60px] top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:text-blue-500 transition-colors">
          ›
        </button>
      </div>
    </section>
  );
};

export default ReviewList;
