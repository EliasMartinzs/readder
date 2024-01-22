"use client";

import { animes, mangas, menu } from "@/constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface IMenuLinks {
  setIsOpen: (prevState: boolean) => void;
}

export function MenuLinks({ setIsOpen }: IMenuLinks) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <div>
      {menu.map((category) => (
        <div key={category.title}>
          <h2 className="font-bold text-2xl my-3">{category.title}</h2>
          <h3
            className="flex-between w-full transition-transform"
            onClick={() => toggleCategory(category.title)}
          >
            <span className="font-semibold hover:underline underline-offset-4 cursor-pointer">
              {category.subtitle}
            </span>
            <span className="cursor-pointer transition-transform">
              {expanded === category.title ? (
                <ChevronUp className="w-5 h-5 text-light" />
              ) : (
                <ChevronDown className="w-5 h-5 text-light" />
              )}
            </span>
          </h3>
          {expanded === category.title && (
            <div className="font-light px-2 my-3 capitalize flex flex-col">
              {category.items.map((item) => (
                <Link
                  href={`/${category.title.toLowerCase()}/${item.label}`}
                  className="hover:underline underline-offset-4 cursor-pointer hover:text-blue-500 p-2"
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
