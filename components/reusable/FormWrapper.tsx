import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormSocial } from "./FormSocial";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IFormWrapper {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  sso?: boolean;
  href: string;
  textHref: string;
  style?: string;
}

export function FormWrapper({
  children,
  description,
  title,
  sso,
  href,
  textHref,
  style,
}: IFormWrapper) {
  return (
    <Card className={(cn("rounded-xl shadow-md transition-all"), style)}>
      <CardHeader>
        <CardTitle className="text-start font-black lg:text-4xl">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {sso && (
          <>
            <FormSocial />
            <span className="relative w-full h-[1px] bg-slate-300 flex-center max-lg:hidden">
              <span className="absolute bg-white p-2">Or</span>
            </span>
          </>
        )}

        {children}
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-center gap-y-5">
        <Link className="hover:underline underline-offset-4" href={href}>
          {textHref}
        </Link>
      </CardFooter>
    </Card>
  );
}
