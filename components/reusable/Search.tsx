"use client";

import { cn } from "@/lib/utils";
import { KeyboardEvent, useState } from "react";
import { Input } from "../ui/input";
import { MdOutlineSearchOff, MdSearch } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const searchedAnimes = () => {
    setIsOpen(!isOpen);

    if (search.length >= 1) {
      router.push(`/searched/${search}`);
      setSearch("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchedAnimes();
    }
  };

  return (
    <div className="relative">
      <div className="flex-center gap-x-">
        <div
          className={cn(
            "transition-all ease-in h-10",
            isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
          )}
        >
          <Input
            className="bg-transparent outline-none border-b border-slate-300/50 placeholder:text-white"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button className="p-0 absolute right-0" onClick={searchedAnimes}>
          <MdSearch className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
