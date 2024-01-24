"use client";

import { useMovies } from "@/hooks/useAnime";
import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoint } from "@/constants";
import { SwiperImage } from "../reusable/SwiperImage";
import Link from "next/link";

export function Movies() {
  const { data, error, isLoading, refetch } = useMovies();

  return (
    <div>
      <SwiperWrapper
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="Movies"
        skeleton={<SkeletonCards />}
      >
        <Swiper breakpoints={breakpoint}>
          {data !== undefined &&
            data.map((anime, index) => (
              <SwiperSlide
                key={anime.title + index}
                className="max-w-[225px] h-[318px] relative mt-5 image-container"
              >
                <SwiperImage src={anime.picture_url} alt={anime.title} />

                <div className="flex flex-col">
                  <Link
                    href={`/${anime.myanimelist_id}`}
                    className="cursor-pointer line-clamp-1 hover:line-clamp-none transition-all"
                  >
                    {anime.title}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperWrapper>
    </div>
  );
}
