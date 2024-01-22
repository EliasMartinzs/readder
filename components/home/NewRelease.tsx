"use client";

// import { useTVShows } from "@/hooks/useAnime";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { MdFavorite } from "react-icons/md";
import { useQuery } from "react-query";
import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SwiperImage } from "../reusable/SwiperImage";
import { useTVShows } from "@/hooks/useAnime";
import { breakpoint } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimeRecommendation } from "@/types";
import { favoriteAnime } from "@/actions/favorite";

const useTvShowsFetch = [
  {
    title: "Ore dake Level Up na Ken",
    type: "TV (New)",
    url: "https://myanimelist.net/anime/52299/Ore_dake_Level_Up_na_Ken",
    genres: [
      {
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
    image_url: "https://cdn.myanimelist.net/images/anime/1926/140799.jpg",
    score: 8.49,
    members: 361000,
    synopsis:
      'Ten years ago, "the Gate" appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as "Hunters." Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the "World\'s Weakest," owing to his pathetic power compared to even a measly E-Rank. Still, he hunts monsters tirelessly in low-rank Gates to pay for his mother\'s medical bills. However, this miserable lifestyle changes when Jin-Woo—believing himself to be the only one left to die in a mission gone terribly wrong—awakens in a hospital three days later to find a mysterious screen floating in front of him. This "Quest Log" demands that Jin-Woo completes an unrealistic and intense training program, or face an appropriate penalty. Initially reluctant to comply because of the quest\'s rigor, Jin-Woo soon finds that it may just transform him into one of the world\'s most fearsome Hunters. [Written by MAL Rewrite]',
    date: {
      date: "2024-01-07",
      timestamp: 1704585600,
    },
    episodes: 12,
    duration: 23,
    properties: {
      studio: {
        name: "A-1 Pictures",
        url: "https://myanimelist.net/anime/producer/56/A-1_Pictures",
      },
      source: "Web manga",
    },
  },
];

export function NewRelease() {
  const { data, error, isLoading, refetch } = useQuery("");

  return (
    <div>
      <SwiperWrapper
        // error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="New releases"
        skeleton={<SkeletonCards />}
      >
        <Swiper breakpoints={breakpoint}>
          {useTvShowsFetch !== undefined &&
            useTvShowsFetch.map((anime, index) => (
              <SwiperSlide
                key={anime.title + index}
                className="max-w-[225px] h-[318px] relative mt-5 image-container"
              >
                <SwiperImage src={anime.image_url} alt={anime.title} />
                <div className="image-info flex flex-col gap-y-1 relative">
                  <p>{anime.title}</p>
                  <small>
                    {anime.score} <span className="text-yellow-500">★</span>
                  </small>
                  <small>{anime.episodes} episodes</small>
                  <small className="line-clamp-6">{anime.synopsis}</small>

                  <div className="absolute bottom-0 left-0 p-[10px] text-lg">
                    <MdFavorite className="hover:text-red-500 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="cursor-pointer line-clamp-1 hover:line-clamp-none transition-all">
                    {anime.title}
                  </p>
                  <small>
                    {anime.date?.date !== undefined && anime.date.date}
                  </small>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperWrapper>
    </div>
  );
}
