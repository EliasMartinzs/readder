import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Header } from "@/components/home/Header";
import { Providers } from "./providers";
import { Footer } from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Readder",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Providers>
        <html lang="en">
          <body className={cn("bg-background text-foreground")}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </Providers>
    </SessionProvider>
  );
}
