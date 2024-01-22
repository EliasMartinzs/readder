"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Input } from "../ui/input";

export function Search() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <>
      <div className="flex items-center max-lg:hidden">
        <div
          className={`origin-right transition-transform duration-500 ease-in-out ${
            isInputVisible ? "scale-x-100" : "scale-x-0"
          }`}
        >
          <Input
            type="text"
            className="h-10 w-96 py-2 px-5 outline-none bg-white bg-opacity-40 rounded-full placeholder:text-black/50"
            placeholder="Search..."
          />
        </div>
        <button onClick={toggleInput} className="p-2">
          <BsSearch className="h-6 w-6" />
        </button>
      </div>

      <div className="lg:hidden flex items-center justify-start gap-x-3 w-full">
        <Input
          type="text"
          className="w-full rounded-md form-1"
          placeholder="Search..."
        />
        <BsSearch className="h-6 w-6" />
      </div>
    </>
  );
}
