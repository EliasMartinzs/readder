import { auth } from "@/auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IUSer {
  toggleName?: boolean;
  img: string;
  name: string;
}

export function User({ name, img, toggleName }: IUSer) {
  return (
    <div className="flex items-center justify-start gap-x-2">
      <Avatar>
        <AvatarImage src={img ?? ""} />
        <AvatarFallback className="text-black capitalize">
          {name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      {toggleName && <h3 className="font-medium">{name}</h3>}
    </div>
  );
}
