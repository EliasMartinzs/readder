"use client";

import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoint } from "@/constants";
import { SwiperImage } from "../reusable/SwiperImage";
import Link from "next/link";

import { useRecomendations, useTVShows } from "@/hooks/useAnime";
import Image from "next/image";

export function Recomendations() {
  const { data, error, isLoading, refetch } = useRecomendations();

  return (
    <div>
      <SwiperWrapper
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="Recomendations"
        skeleton={<SkeletonCards />}
      >
        <br />
        <Swiper breakpoints={breakpoint} className="h-[350px]">
          {data !== undefined &&
            data.map((anime, index) => (
              <SwiperSlide
                key={anime.recommendation.title + index}
                className="max-w-[225px] h-[318px] relative"
              >
                <Image
                  fill
                  className="object-cover"
                  src={anime.recommendation.picture_url}
                  alt={anime.recommendation.title}
                />

                <div className="flex flex-col absolute bottom-0 bg-background w-full">
                  <Link
                    href={`/${anime.recommendation.myanimelist_id}`}
                    className="cursor-pointer line-clamp-1 hover:line-clamp-none transition-all"
                  >
                    {anime.recommendation.title}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperWrapper>
    </div>
  );
}
