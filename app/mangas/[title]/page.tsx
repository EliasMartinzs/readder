"use client";
import { SwiperWrapper } from "@/components/reusable/SwiperWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { getManga } from "@/hooks/useAnime";
import Image from "next/image";

const Skeletons = ({ len }: { len: number }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mt-5">
      {Array.from({ length: len }).map((_, i) => (
        <Skeleton key={i} className="w-[225px] h-[318px]" />
      ))}
    </div>
  );
};

export default function AllMangas({ params }: { params: { title: string } }) {
  const { data: mangas, error, isLoading, refetch } = getManga(params.title);

  return (
    <div className="px-2 lg:px-40 pt-32">
      <SwiperWrapper
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        title={params.title}
        skeleton={<Skeletons len={mangas?.length ?? 10} />}
      >
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 mt-5">
          {mangas !== undefined &&
            mangas.map((manga, i) => (
              <div key={manga.title + i} className="image-container">
                <div className="relative w-[225px] h-[318px]">
                  <Image
                    fill
                    className="object-cover"
                    src={manga.picture_url}
                    alt={manga.title}
                  />
                  <div className="image-info flex flex-col gap-y-1 relative">
                    <p className="cursor-pointer text-lg">{manga.title}</p>
                    <small>Rank: {manga.rank}</small>
                    <small>
                      {manga.score} <span className="text-yellow-500">★</span>
                    </small>
                    <small>{manga.aired_on}</small>
                    <small>Members: {manga.members}</small>
                  </div>
                </div>
                <h2 className="my-1 line-clamp-1">{manga.title}</h2>
              </div>
            ))}
        </div>
      </SwiperWrapper>
    </div>
  );
}
