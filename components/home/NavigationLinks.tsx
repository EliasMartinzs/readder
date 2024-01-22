"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { animes, mangas } from "@/constants";
import Link from "next/link";

export function NavigationMenuLinks() {
  return (
    <div className="flex items-center w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {animes.map((link, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-auto lg:w-auto bg-background border border-slate-300/10">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="flex flex-col">
                        {link.items.map((items) => (
                          <Link
                            href={`/animes/${items.label}`}
                            className="p-2 hover:text-blue-500 hover:underline underline-offset-4 capitalize"
                            key={items.label}
                          >
                            {items.label}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          {mangas.map((link, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-auto lg:w-auto bg-background border border-slate-300/10">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="" href="/">
                        {link.items.map((items) => (
                          <p
                            className="p-2 hover:text-blue-500 hover:underline underline-offset-4 capitalize"
                            key={items.label}
                          >
                            {items.label}
                          </p>
                        ))}
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
