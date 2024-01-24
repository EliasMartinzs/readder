"use client";

import { useSeasonal } from "@/hooks/useAnime";
import { Seassons } from "./Seassons";

export function Antecipated() {
  const winterQuery = useSeasonal("winter");
  const springQuery = useSeasonal("spring");

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
          <Seassons query={winterQuery} title="Winter" />
          <Seassons query={springQuery} title="Spring" />
        </div>
      </div>
    </div>
  );
}
