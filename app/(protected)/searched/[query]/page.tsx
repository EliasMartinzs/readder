"use client";

import Loading from "@/components/reusable/Loading";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchAnimes } from "@/hooks/useAnime";
import Image from "next/image";
import Link from "next/link";

const animeData = [
  {
    title: "One Piece Film: Z",
    description:
      "The Straw Hat Pirates enter the rough seas of the New World in search of the hidden treasures of the Pirate King, Gol D. Roger－One Piece. On their voyage, the pirates come across a terrifying, powerfu...read more.",
    picture_url:
      "https://cdn.myanimelist.net/r/50x70/images/anime/6/44297.jpg?s=ab00c4fc2882d3bb72c1985ada0af886",
    myanimelist_url: "https://myanimelist.net/anime/12859/One_Piece_Film__Z",
    myanimelist_id: 12859,
  },
];

export default function Searched({ params }: { params: { query: string } }) {
  const { data, error, isLoading } = useSearchAnimes(params.query);

  return (
    <div className="pt-32 flex flex-col gap-y-10 flex-center gap-2 lg:px-40">
      <h2 className="text-lg space-x-5 flex gap-x-2">
        Searched for:
        <span className="capitalize font-semibold">
          {decodeURIComponent(params.query)}
        </span>
      </h2>

      <>
        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {Array.from(new Array(25), (_, i) => i + 1).map((skel) => (
              <Skeleton key={skel} className="w-[200px] h-[318px] flex-center">
                <Loading variant="input" size="md" />
              </Skeleton>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
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
      </>
    </div>
  );
}
