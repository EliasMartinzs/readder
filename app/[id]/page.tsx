"use client";

import { Separator } from "@/components/ui/separator";
import { useAnimeById } from "@/hooks/useAnime";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperImage } from "@/components/reusable/SwiperImage";

import "swiper/css";
import Loading from "@/components/reusable/Loading";
import { Button } from "@/components/ui/button";

export default function Anime({ params }: { params: { id: number } }) {
  const { data: anime, isLoading, error, refetch } = useAnimeById(params.id);

  if (error)
    return (
      <div className="w-full h-screen flex-center flex-col gap-y-2">
        <Image
          src="/wrong.png"
          width={300}
          height={300}
          alt="something went wrong"
        />
        <h2 className="text-2xl">Something went wrong</h2>
        <Button
          variant="default"
          className="bg-blue-500"
          onClick={() => refetch}
        >
          Try again
        </Button>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full h-screen flex-center">
        <Loading size="md" variant="input" />
      </div>
    );

  return (
    <div className="pt-32 px-2 lg:px-40">
      <div className="">
        <div className="space-y-10">
          <div className="flex items-start justify-start gap-x-5 max-lg:flex-col gap-y-5">
            <div className="w-full max-lg:grid place-items-center">
              <Image
                src={anime?.picture_url ?? ""}
                alt={anime?.title_ov ?? ""}
                width={300}
                height={450}
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">
                {anime?.title_ov}
              </h2>
              <div>
                <p className="font-semibold text-lg">Alternatives title</p>
                <h2>{anime?.alternative_titles?.english}</h2>
                <h2>{anime?.alternative_titles?.synonyms}</h2>
                <h2>{anime?.alternative_titles?.japanese}</h2>
              </div>

              <div>
                <span className="flex gap-x-3 items-center justify-between w-40 ">
                  <span className="font-semibold">Ranked:</span>{" "}
                  {anime?.statistics?.ranked}
                </span>
                <span className="flex gap-x-3 items-center justify-between w-40 lg:w-96">
                  <span className="font-semibold">Score:</span>{" "}
                  {anime?.statistics?.score}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold">Favories:</span>{" "}
                  {anime?.statistics?.favorites}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold">Popularity:</span>{" "}
                  {anime?.statistics?.popularity}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold"> Members:</span>{" "}
                  {anime?.statistics?.members}
                </span>
              </div>

              <div>
                <p className="font-semibold text-lg">Synopsis</p>
                <p className="font-light">{anime?.synopsis}</p>
              </div>
            </div>
          </div>
          <Separator className="bg-slate-300/50" />
          <div className="flex items-start justify-start gap-x-5 flex-col gap-y-5">
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="lg:w-96 max-lg:px-2 space-y-5">
                <h2 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">
                  Informations
                </h2>
                <div className="flex-between w-full border-b border-slate-300/20">
                  <h5 className="font-semibold">Episodes</h5>
                  <div className="flex">
                    <p>{anime?.information?.episodes} ep </p> /
                    <p> {anime?.information?.duration}</p>
                  </div>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Status</h5>
                  <p>{anime?.information?.status}</p>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Aired</h5>
                  <p>{anime?.information?.aired}</p>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Premiered</h5>
                  {anime !== undefined &&
                    Array.isArray(anime?.information?.premiered) &&
                    anime?.information?.premiered?.map((premiere) => (
                      <Link href={premiere.url} key={premiere.name}>
                        {premiere.name}
                      </Link>
                    ))}
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Producers</h5>
                  <div className="flex flex-col items-end justify-center">
                    {anime !== undefined &&
                      Array.isArray(anime?.information?.premiered) &&
                      anime?.information?.producers?.map((producer) => (
                        <Link key={producer.name} href={producer.url}>
                          {producer.name}
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Studios</h5>
                  <div className="flex flex-col items-end justify-center">
                    {anime !== undefined &&
                      Array.isArray(anime?.information?.premiered) &&
                      anime?.information?.studios?.map((studio) => (
                        <Link key={studio.name} href={studio.url}>
                          {studio.name}
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Genres</h5>
                  <div className="flex flex-col items-end justify-center">
                    {anime !== undefined &&
                      Array.isArray(anime?.information?.premiered) &&
                      anime?.information?.genres?.map((genre) => (
                        <Link key={genre.name} href={genre.url}>
                          {genre.name}
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Demographic</h5>
                  <div className="flex flex-col items-end justify-center">
                    {anime !== undefined &&
                      Array.isArray(anime?.information?.premiered) &&
                      anime?.information?.demographic?.map((demo) => (
                        <Link key={demo.name} href={demo.url}>
                          {demo.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5 overflow-hidden">
                <h2 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">
                  Characters
                </h2>

                <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                    1366: {
                      slidesPerView: 6,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {anime !== undefined &&
                    anime?.characters?.map((character) => (
                      <SwiperSlide
                        key={character.name}
                        className="w-[225px] h-auto relative"
                      >
                        <SwiperImage
                          src={character.picture_url}
                          alt={character.name}
                        />
                        {character.name}
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
