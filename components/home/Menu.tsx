"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiLogin, CiMenuFries, CiUser } from "react-icons/ci";
import { User } from "../reusable/User";
import { Logout } from "../reusable/Logout";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useState } from "react";
import { MenuLinks } from "./MenuLinks";
import { Heart } from "lucide-react";
import { Search } from "../reusable/Search";

export function Menu() {
  const { name, image } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <CiMenuFries className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent className="text-foreground bg-background">
          <SheetHeader>
            <SheetTitle>Readder</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-y-10 mt-14">
            <>
              {name ? (
                <div className="flex items-center justify-between">
                  <User toggleName name={name} img={image ?? ""} />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-x-8">
                  <Link
                    href="/auth/login"
                    className="flex-center gap-3 p-3 cursor-pointer text-lg border-b border-blue-500 hover:border-blue-700 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <CiLogin className="w-7 h-7" /> Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="flex-center gap-3 p-3 cursor-pointer text-lg border-b border-blue-500 hover:border-blue-700 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <CiUser className="w-7 h-7" /> Register
                  </Link>
                </div>
              )}
            </>
            <Search setModalIsOpen={setIsOpen} />
            <MenuLinks setIsOpen={setIsOpen} />
            {name && <Logout />}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
