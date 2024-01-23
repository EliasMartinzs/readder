import Link from "next/link";
import { Menu } from "./Menu";
import { NavigationMenuLinks } from "./NavigationLinks";
import { CiUser } from "react-icons/ci";
import { Search } from "../reusable/Search";
import { auth } from "@/auth";
import { User } from "../reusable/User";
import Popoover from "../reusable/Popoover";
import { Logout } from "../reusable/Logout";
import { SkeletonHeader } from "../skeletons/SkeletonHeader";
import { Suspense } from "react";
import { User2Icon } from "lucide-react";

export async function Header() {
  const user = await auth();

  return (
    <Suspense fallback={<SkeletonHeader />}>
      <header className="h-20 py-5 px-5 lg:px-32 w-full absolute top-0 z-50">
        <nav className="w-full flex-between">
          <div className="w-full flex-between">
            <Link
              href="/"
              className="text-gradient-1 font-black text-2xl lg:text-4xl max-lg:text-center max-lg:w-full"
            >
              Readder
            </Link>
            <Menu />
          </div>

          <div className="flex items-center max-lg:hidden gap-x-5">
            <Search />
            <NavigationMenuLinks />
            {user ? (
              <Popoover
                icon={
                  <User
                    img={user?.user?.image ?? ""}
                    name={user?.user?.image ?? ""}
                  />
                }
              >
                <div className="space-y-3">
                  <Link
                    className="
               flex items-center justify-start gap-x-3 text-lg font-light cursor-pointer hover:underline underline-offset-8
               "
                    href="profile"
                  >
                    My Profile
                  </Link>
                  <Logout icon={false} />
                </div>
              </Popoover>
            ) : (
              <Link
                href="/auth/login"
                className="font-semibold hover:underline underline-offset-4"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>
    </Suspense>
  );
}
