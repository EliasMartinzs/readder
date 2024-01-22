import React from "react";
import { Skeleton } from "../ui/skeleton";

export function SkeletonHeader() {
  return (
    <div className="w-full h-20 bg-transparent flex items-center justify-between px-2 lg:px-20">
      <Skeleton className="h-10 w-28 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex max-lg:hidden">
        <Skeleton className="h-5 w-28 rounded-full" />
        <Skeleton className="h-5 w-28 rounded-full" />
        <Skeleton className="h-5 w-28 rounded-full" />
        <Skeleton className="h-5 w-28 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}
