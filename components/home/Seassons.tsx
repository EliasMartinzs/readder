"use client";

import React, { useState } from "react";
import { UseQueryResult } from "react-query";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { Anime } from "@/types";

interface IWinter {
  // query: UseQueryResult<Anime[], Error>;
  query: any;
  title: string;
}

export function Seassons({ query, title }: IWinter) {
  // const { data, error, isLoading, refetch } = query;
  const [more, setMore] = useState(10);

  const showMore = () => {
    setMore((prev) => prev + 10);
  };

  const isLoading = false;
  const error = false;
  const data = query;

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-5 w-full">
        {error ? (
          <div className="my-5">
            <p>Something went wrong?</p>
            <Button className="text-gradient-1 border rounded-lg border-blue-500 my-4 transition-colors">
              Try again
            </Button>
          </div>
        ) : (
          <>
            {isLoading ? (
              <div className="flex gap-x-3">
                <Skeleton className="w-40 h-[200px]" />
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-40 h-[25px]" />
                  <Skeleton className="w-40 h-[25px]" />
                  <Skeleton className="w-40 h-[25px]" />
                </div>
              </div>
            ) : (
              <>
                {data !== undefined &&
                  data.slice(0, more).map((anime: Anime, i: number) => (
                    <div
                      className="mt-5 flex items-start justify-center gap-3"
                      key={anime.title + i}
                    >
                      <Image
                        src={anime.image_url || "/default.png"}
                        width={150}
                        height={200}
                        alt={anime.title}
                        loading="lazy"
                        className="object-cover"
                      />
                      <div className="flex flex-col gap-y-1 w-auto">
                        <p className="font-medium text-lg">{anime.title}</p>
                        <small>
                          {anime.score}{" "}
                          <span className="text-yellow-500">★</span>
                        </small>
                        <small>{anime.episodes} episodes</small>
                        <small className="line-clamp-4">{anime.synopsis}</small>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </>
        )}
        <div className="flex items-center justify-end">
          <Button
            className="hover:underline underline-offset-4 hover:text-blue-500 transition-colors"
            onClick={showMore}
          >
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
