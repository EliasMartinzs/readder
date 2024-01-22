"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const FormSocial = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const loginWithProvider = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex-center flex-col gap-y-2">
      <Button
        className="w-full flex-center text-center border p-2 relative font-normal transition-colors"
        onClick={() => loginWithProvider("google")}
      >
        <span className="absolute left-2">
          <FcGoogle className="text-2xl" />
        </span>
        Continue with google
      </Button>
      <Button
        className="w-full flex-center text-center border p-2 relative font-normal transition-colors"
        onClick={() => loginWithProvider("github")}
      >
        <span className="absolute left-2">
          <FaGithub className="text-2xl" />
        </span>
        Continue with github
      </Button>
    </div>
  );
};
