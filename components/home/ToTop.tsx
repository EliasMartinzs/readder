"use client";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ToTop() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="p-5 lg:p-5 fixed bottom-0 right-0 z-50">
      <Button
        onClick={toTop}
        className="bg-white p-2 rounded-full transition-all hover:scale-110"
      >
        <ArrowUpIcon className="text-background text-4xl" />
      </Button>
    </div>
  );
}
