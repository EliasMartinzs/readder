"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SkeletonCards } from "../skeletons/SkeletonCards";
import { MdFavorite } from "react-icons/md";
import { SwiperWrapper } from "../reusable/SwiperWrapper";
import { SwiperImage } from "../reusable/SwiperImage";
import { useTVShows } from "@/hooks/useAnime";
import { breakpoint } from "@/constants";
import { useRouter } from "next/navigation";
import { fetchSearch } from "@/fetch";

export function NewRelease() {
  const { data, error, isLoading, refetch } = useTVShows();
  const router = useRouter();

  const linkAnime = async (title: string) => {
    const data = await fetchSearch(title);

    router.push(`/${data?.at(0).myanimelist_id}`);
  };

  return (
    <div>
      <SwiperWrapper
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        title="New releases"
        skeleton={<SkeletonCards />}
      >
        <Swiper breakpoints={breakpoint}>
          {data !== undefined &&
            data.map((anime, index) => (
              <SwiperSlide
                key={anime.title + index}
                className="max-w-[225px] h-[318px] relative mt-5 image-container"
              >
                <SwiperImage src={anime.image_url} alt={anime.title} />
                <div className="image-info flex flex-col gap-y-1 relative">
                  <p
                    onClick={() => linkAnime(anime.title)}
                    className="cursor-pointer"
                  >
                    {anime.title}
                  </p>
                  <small>
                    {anime.score} <span className="text-yellow-500">★</span>
                  </small>
                  <small>{anime.episodes} episodes</small>
                  <small className="line-clamp-6">{anime.synopsis}</small>
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
