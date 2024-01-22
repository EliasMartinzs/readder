import { footerItems } from "@/constants";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Copyright } from "./Copyright";

export function Footer() {
  return (
    <footer className="w-full p-10 gradient-footer flex-center mt-20 flex-col gap-y-10">
      <div className="grid grid-cols-2 lg:flex gap-5 lg:gap-10">
        {footerItems.map((link, i) => (
          <div className="" key={link.category + i}>
            <h3 className="font-bold">{link.category}</h3>
            <div className="flex flex-col my-2">
              {link.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Separator className="bg-opacity-20" />

      <div className="flex-center gap-x-10">
        <Link href="/" className="font-black text-gradient-1 text-2xl">
          Readder
        </Link>

        <Copyright />
      </div>
    </footer>
  );
}
