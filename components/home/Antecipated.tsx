"use client";

import { useSeasonal } from "@/hooks/useAnime";
import { Seassons } from "./Seassons";
import { useQuery } from "react-query";

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

export function Antecipated() {
  // const winterQuery = useSeasonal("winter");
  // const springQuery = useSeasonal("spring");

  return (
    <div className="bg-black/20 mx-2 lg:mx-20 p-2 lg:p-10 rounded-2xl shadow-inner">
      <div className="w-full h-full flex items-center lg:items-start justify-center flex-col lg:flex-row gap-10 py-10 px-2">
        <div className="flex items-start">
          <h2 className="vertical-text text-4xl xl:text-7xl 2xl:text-9xl font-black text-gradient-1">
            Most
          </h2>
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl xl:text-5xl 2xl:text-7xl">
              Antecipated
            </h2>
            <h2 className="font-bold text-3xl xl:text-5xl 2xl:text-7xl">
              Of The
            </h2>
            <h2 className="font-bold text-3xl xl:text-5xl 2xl:text-7xl">
              Year
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <Seassons query={useTvShowsFetch} title="Winter" />
          <Seassons query={useTvShowsFetch} title="Spring" />
        </div>
      </div>
    </div>
  );
}
