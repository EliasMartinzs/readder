"use client";

import Loading from "@/components/reusable/Loading";
import { Skeleton } from "@/components/ui/skeleton";
import { getAnimes } from "@/hooks/useAnime";
import Image from "next/image";
import Link from "next/link";

export default function Animes({ params }: { params: { title: string } }) {
  const { data, error, isLoading, refetch } = getAnimes(params.title);

  return (
    <div className="w-full px-2 lg:px-40 grid place-items-center pt-32 space-y-10">
      <h2 className="w-full text-center text-3xl font-black italic capitalize">
        {params.title}
      </h2>
      <div className="">
        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {Array.from(new Array(25), (_, i) => i + 1).map((skel) => (
              <Skeleton key={skel} className="w-[200px] h-[318px] flex-center">
                <Loading variant="input" size="md" />
              </Skeleton>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
            {data?.map((anime) => (
              <div key={anime.title} className="w-[200px] h-auto">
                <div className="w-[200px] h-[318px] relative">
                  <Image
                    src={anime.picture_url || "/default.pg"}
                    alt={anime.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href={`/${anime.myanimelist_id}`}
                  className="text-start py-1 font-medium line-clamp-1 hover:line-clamp-none"
                >
                  {anime.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
