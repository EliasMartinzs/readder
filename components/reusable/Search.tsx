"use client";

import { cn } from "@/lib/utils";
import { KeyboardEvent, useState } from "react";
import { Input } from "../ui/input";
import { MdOutlineSearchOff, MdSearch } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ISearch {
  setModalIsOpen: (prevState: boolean) => void;
}

export function Search({ setModalIsOpen }: ISearch) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const searchedAnimes = () => {
    setIsOpen(!isOpen);

    if (search.length >= 1) {
      router.push(`/searched/${search}`);
      setSearch("");
      setModalIsOpen(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchedAnimes();
    }
  };

  return (
    <div className="relative">
      <div className="flex lg:items-center lg:justify-center gap-x-3">
        <div
          className={cn(
            "transition-all ease-in h-10",
            isOpen
              ? "w-full lg:w-64 lg:opacity-100"
              : "w-full lg:w-0 lg:opacity-0"
          )}
        >
          <Input
            className="w-full bg-transparent outline-none border-b border-slate-300/50 placeholder:text-white"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button className="p-0 lg:absolute right-0" onClick={searchedAnimes}>
          <MdSearch className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
