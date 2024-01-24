import { Antecipated } from "@/components/home/Antecipated";
import { Collection } from "@/components/home/Collection";
import { Hero } from "@/components/home/Hero";
import { Movies } from "@/components/home/Movies";
import { NewRelease } from "@/components/home/NewRelease";
import { Recomendations } from "@/components/home/Recomendations";
import { ToTop } from "@/components/home/ToTop";

export default async function Home() {
  return (
    <main className="relative space-y-10 lg:space-y-16">
      <Hero />
      <div className="pl-2 lg:pl-20 space-y-10 lg:space-y-16">
        <NewRelease />
        <Recomendations />
        <Movies />
      </div>
      <Antecipated />
      <Collection />
      <ToTop />
    </main>
  );
}
