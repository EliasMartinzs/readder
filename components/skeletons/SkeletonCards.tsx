import { Skeleton } from "../ui/skeleton";
import Loading from "../reusable/Loading";

export function SkeletonCards() {
  return (
    <div className="flex items-center space-x-4 overflow-hidden">
      {Array.from(new Array(8), (_, i) => i + 1).map((ske) => (
        <Skeleton
          key={ske}
          className="min-w-[225px] h-[318px] mt-5 flex-center"
        />
      ))}
    </div>
  );
}
