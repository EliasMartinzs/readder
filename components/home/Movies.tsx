"use client";

import { useMovies, useRecomendations } from "@/hooks/useAnime";
import { useQuery } from "react-query";
import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoint } from "@/constants";
import { SwiperImage } from "../reusable/SwiperImage";
import Link from "next/link";
import { AnimeMovies } from "@/types";

const anime = [
  {
    title: "Fullmetal Alchemist: Brotherhood",
    picture_url:
      "https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
    myanimelist_url:
      "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    myanimelist_id: 5114,
    rank: 1,
    score: 9.1,
    type: "TV (64 eps)",
    aired_on: "Apr 2009 - Jul 2010",
    members: 221519,
  },
];

export function Movies() {
  const { data, error, isLoading, refetch } = useQuery("");

  return (
    <div>
      <SwiperWrapper
        // error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="We think you will like it"
        skeleton={<SkeletonCards />}
      >
        <Swiper breakpoints={breakpoint}>
          {anime !== undefined &&
            anime.map((anime, index) => (
              <SwiperSlide
                key={anime.title + index}
                className="max-w-[225px] h-[318px] relative mt-5 image-container"
              >
                <SwiperImage src={anime.picture_url} alt={anime.title} />

                <div className="flex flex-col">
                  <Link
                    href={`/`}
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
