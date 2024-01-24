import { auth } from "@/auth";
import { Antecipated } from "@/components/home/Antecipated";
import { Collection } from "@/components/home/Collection";
import { Hero } from "@/components/home/Hero";
import { Movies } from "@/components/home/Movies";
import { NewRelease } from "@/components/home/NewRelease";
import { Recomendations } from "@/components/home/Recomendations";
import { ToTop } from "@/components/home/ToTop";
import { getUserByEmail } from "@/data/user";

export default async function Home() {
  const email = await auth();
  const user = await getUserByEmail(email?.user?.email ?? "");

  return (
    <main className="relative space-y-10 lg:space-y-16">
      <Hero />
      <div className="pl-2 lg:pl-20 space-y-10 lg:space-y-16">
        <NewRelease />
        <Recomendations id={user?.id} />
        <Movies />
      </div>
      <Antecipated />
      <Collection />
      <ToTop />
    </main>
  );
}
