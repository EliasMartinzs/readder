"use client";

import { useQuery } from "react-query";
import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpoint } from "@/constants";
import { SwiperImage } from "../reusable/SwiperImage";
import Link from "next/link";

const animeRecommendations = [
  {
    liked: {
      title: "Amaama to Inazuma",
      picture_url: "https://cdn.myanimelist.net/images/anime/6/80546.jpg",
      myanimelist_url: "https://myanimelist.net/anime/32828/Amaama_to_Inazuma",
      myanimelist_id: 32828,
    },
    recommendation: {
      title: "Kakushigoto",
      picture_url: "https://cdn.myanimelist.net/images/anime/1048/128385.jpg",
      myanimelist_url: "https://myanimelist.net/anime/40716/Kakushigoto",
      myanimelist_id: 40716,
      description:
        "Both fathers are widows and have a child, plus another unmarried friend who helps take care of the child.",
    },
    author: {
      name: "PastryPuffins799",
      url: "https://myanimelist.net/profile/PastryPuffins799",
    },
    recommendation_age: "4 minutes ago",
  },
];

export function Recomendations() {
  const { data, error, isLoading, refetch } = useQuery("");

  return (
    <div>
      <SwiperWrapper
        // error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="Recomendations"
        skeleton={<SkeletonCards />}
      >
        <Swiper breakpoints={breakpoint}>
          {animeRecommendations !== undefined &&
            animeRecommendations.map((anime, index) => (
              <SwiperSlide
                key={anime.author.name + index}
                className="max-w-[225px] h-[318px] relative mt-5 image-container"
              >
                <SwiperImage
                  src={anime.recommendation.picture_url}
                  alt={anime.recommendation.title}
                />

                <div className="flex flex-col">
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
