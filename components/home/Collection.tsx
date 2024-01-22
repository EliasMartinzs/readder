import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Collection() {
  return (
    <div className="w-full flex-center flex-col">
      <Image
        src="/luffy.png"
        alt="luffy"
        width={150}
        height={150}
        className="object-cover"
      />
      <div className="gap-y-5 flex-center flex-col -translate-y-2">
        <h3 className="text-center text-xl font-semibold">
          Check out our complete collection
        </h3>
        <Link
          href="/collections"
          className="border-2 rounded-none border-white bg-transparent text-white font-bold p-3 showd-md hover:scale-110 transition-all"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
}
