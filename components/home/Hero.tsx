"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";
import { heroAnimes } from "@/constants";
export function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      className="h-[500px] lg:h-[800px]"
      modules={[Autoplay]}
      autoplay
    >
      {heroAnimes.map((anime, i) => (
        <SwiperSlide
          key={anime.label + i}
          className="w-full h-4 lg:h-[700px] relative image-fade"
        >
          <picture className="w-full h-4 lg:h-[700px]">
            <source media="(max-width: 768px)" srcSet={anime.mobileBanner} />
            <source media="(min-width: 769px)" srcSet={anime.desktopBanner} />
            <Image
              src={anime.desktopBanner}
              alt={anime.label}
              fill
              className="object-cover opacity-40 "
            />
            <div className="w-full h-full flex lg:items-start justify-center items-center px-2 lg:px-10  absolute z-50 flex-col gap-y-3">
              <h3 className="text-3xl lg:text-5xl xl:text-7xl italic font-black text-center">
                {anime.label}
              </h3>
              <div className="flex gap-x-2">
                {anime.genre.map((gen) => (
                  <small
                    className="border rounded-full p-2 border-slate-400/30 capitalize font-semibold cursor-pointer hover:bg-white hover:text-background transition-colors"
                    key={gen}
                  >
                    {gen}
                  </small>
                ))}
              </div>
              <small className="max-lg:hidden w-1/4 text-base">
                {anime.description}
              </small>
            </div>
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
