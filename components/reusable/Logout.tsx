"use client";

import { logout } from "@/actions/logout";
import { IoIosLogOut } from "react-icons/io";

interface ILogout {
  icon?: boolean;
}

export function Logout({ icon = true }: ILogout) {
  const onClick = async () => logout();
  return (
    <span
      onClick={onClick}
      className="flex items-center justify-start gap-x-3 text-lg font-light cursor-pointer hover:underline underline-offset-8"
    >
      {icon && <IoIosLogOut className="w-7 h-7" />}
      Logout
    </span>
  );
}
