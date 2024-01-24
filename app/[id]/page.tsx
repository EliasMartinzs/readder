"use client";

import { Separator } from "@/components/ui/separator";
import { useAnimeById } from "@/hooks/useAnime";
import { AnimeDetails } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperImage } from "@/components/reusable/SwiperImage";

import "swiper/css";
import Loading from "@/components/reusable/Loading";

const animeDetails: AnimeDetails[] = [
  {
    title_ov: "Sousou no Frieren",
    title_en: "Frieren: Beyond Journey's End",
    synopsis:
      "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them. However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through. As the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin. [Written by MAL Rewrite]",
    alternative_titles: {
      synonyms: "Frieren at the Funeral",
      japanese: "葬送のフリーレン",
      english: "Frieren: Beyond Journey's End",
    },
    information: {
      type: [
        { name: "TV", url: "https://myanimelist.net/topanime.php?type=tv" },
      ],
      episodes: "28",
      status: "Currently Airing",
      aired: "Sep 29, 2023 to ?",
      premiered: [
        {
          name: "Fall 2023",
          url: "https://myanimelist.net/anime/season/2023/fall",
        },
      ],
      broadcast: "Fridays at 23:00 (JST)",
      producers: [
        {
          name: "Aniplex",
          url: "https://myanimelist.net/anime/producer/17/Aniplex",
        },
        {
          name: "Dentsu",
          url: "https://myanimelist.net/anime/producer/53/Dentsu",
        },
        {
          name: "Shogakukan-Shueisha Productions",
          url: "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions",
        },
        {
          name: "Nippon Television Network",
          url: "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network",
        },
        {
          name: "TOHO animation",
          url: "https://myanimelist.net/anime/producer/1143/TOHO_animation",
        },
        {
          name: "Shogakukan",
          url: "https://myanimelist.net/anime/producer/1430/Shogakukan",
        },
      ],
      licensors: "None",
      studios: [
        {
          name: "Madhouse",
          url: "https://myanimelist.net/anime/producer/11/Madhouse",
        },
      ],
      source: "Manga",
      genre: "None",
      theme: "None",
      duration: "24 min. per ep.",
      rating: "PG-13 - Teens 13 or older",
      genres: [
        {
          name: "Adventure",
          url: "https://myanimelist.net/anime/genre/2/Adventure",
        },
        { name: "Drama", url: "https://myanimelist.net/anime/genre/8/Drama" },
        {
          name: "Fantasy",
          url: "https://myanimelist.net/anime/genre/10/Fantasy",
        },
      ],
      demographic: [
        {
          name: "Shounen",
          url: "https://myanimelist.net/anime/genre/27/Shounen",
        },
      ],
    },
    statistics: {
      score: 9.13,
      ranked: 1,
      popularity: 450,
      members: 485519,
      favorites: 15175,
    },
    characters: [
      {
        name: "Frieren",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/7/525105.jpg",
        myanimelist_url: "https://myanimelist.net/character/184947/Frieren",
        voice_actor_name: "Tanezaki, Atsumi",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/77190.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/17215/Atsumi_Tanezaki",
      },
      {
        name: "Fern",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
        myanimelist_url: "https://myanimelist.net/character/188176/Fern",
        voice_actor_name: "Ichinose, Kana",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/47097/Kana_Ichinose",
      },
      {
        name: "Fern",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
        myanimelist_url: "https://myanimelist.net/character/188176/Fern",
        voice_actor_name: "Ichinose, Kana",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/47097/Kana_Ichinose",
      },
      {
        name: "Fern",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
        myanimelist_url: "https://myanimelist.net/character/188176/Fern",
        voice_actor_name: "Ichinose, Kana",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/47097/Kana_Ichinose",
      },
      {
        name: "Fern",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
        myanimelist_url: "https://myanimelist.net/character/188176/Fern",
        voice_actor_name: "Ichinose, Kana",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/47097/Kana_Ichinose",
      },
      {
        name: "Fern",
        picture_url:
          "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
        myanimelist_url: "https://myanimelist.net/character/188176/Fern",
        voice_actor_name: "Ichinose, Kana",
        voice_actor_picture_url:
          "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
        voice_actor_myanimelist_url:
          "https://myanimelist.net/people/47097/Kana_Ichinose",
      },
    ],
    picture_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
  },
];

export default function Anime({ params }: { params: { id: number } }) {
  const { data: anime, isLoading, isError, error } = useAnimeById(params.id);

  if (isLoading)
    return (
      <div className="w-full h-screen grid place-items-center">
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
                  {anime?.statistics.ranked}
                </span>
                <span className="flex gap-x-3 items-center justify-between w-40 lg:w-96">
                  <span className="font-semibold">Score:</span>{" "}
                  {anime?.statistics.score}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold">Favories:</span>{" "}
                  {anime?.statistics.favorites}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold">Popularity:</span>{" "}
                  {anime?.statistics.popularity}
                </span>
                <span
                  className="flex gap-x-3 items-center justify-between w-40 lg:w-96
                  "
                >
                  <span className="font-semibold"> Members:</span>{" "}
                  {anime?.statistics.members}
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
                    <p>{anime?.information.episodes} ep </p> /
                    <p> {anime?.information.duration}</p>
                  </div>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Status</h5>
                  <p>{anime?.information.status}</p>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Aired</h5>
                  <p>{anime?.information.aired}</p>
                </div>
                <div className="flex-between w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Premiered</h5>
                  {anime !== undefined &&
                    anime?.information.premiered.map((premiere) => (
                      <Link href={premiere.url} key={premiere.name}>
                        {premiere.name}
                      </Link>
                    ))}
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Producers</h5>
                  <div className="flex flex-col items-end justify-center">
                    {anime !== undefined &&
                      anime?.information.producers.map((producer) => (
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
                      anime?.information.studios.map((studio) => (
                        <Link key={studio.name} href={studio.url}>
                          {studio.name}
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-start w-full  border-b border-slate-300/20">
                  <h5 className="font-semibold">Genres</h5>
                  <div className="flex flex-col items-end justify-center">
                    {Array.isArray(anime?.information?.genres) &&
                      anime?.information.genres.map((genre) => (
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
                      anime?.information.demographic.map((demo) => (
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
                    anime?.characters.map((character) => (
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
