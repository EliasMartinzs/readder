import { Anime } from "@/types";
import React, { Suspense } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

interface ISwiperWrapper {
  skeleton?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  error?: Error | null;
  isLoading?: boolean;
  refetch?: any;
}

export function SwiperWrapper({
  skeleton,
  title,
  children,
  error,
  isLoading,
  refetch,
}: ISwiperWrapper) {
  return (
    <Suspense fallback={skeleton}>
      <div className="">
        <h2 className="text-2xl lg:text-3xl font-semibold italic">{title}</h2>
      </div>
      {error ? (
        <>
          <h3>Somethin went wrong!</h3>
          <button onClick={() => refetch()}>Try again</button>
        </>
      ) : isLoading ? (
        skeleton
      ) : (
        children
      )}
    </Suspense>
  );
}
