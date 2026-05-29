import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-figures.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-neon-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-neon-red/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full neon-border-blue px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-blue">
            <Sparkles className="h-3.5 w-3.5 animate-pulse-glow" />
            New drop · Volume 07
          </div>

          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Unleash the
            <span className="block text-glow-blue text-neon-blue">Legends</span>
            <span className="block">
              You <span className="text-glow-red text-neon-red">Collect</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Hand-finished, museum-grade collectible action figures from the worlds of anime,
            manga and modern superheroes — sealed in luminous display cases built for the shelf
            you brag about.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-md bg-gradient-neon px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-background shadow-neon-blue transition hover:shadow-neon-red">
              Shop the Vault
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button className="rounded-md neon-border-blue bg-background/40 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-foreground transition hover:bg-accent">
              Limited Editions
            </button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Figures</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-neon-blue text-glow-blue">2,400+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Collectors</dt>
              <dd className="mt-1 font-display text-2xl font-bold">87K</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Rating</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-neon-red text-glow-red">4.9★</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-2xl bg-gradient-neon opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/40 shadow-glow">
            <img
              src={heroImg}
              alt="Three premium anime and superhero action figures inside glowing glass display cases"
              width={1920}
              height={1088}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neon-blue/10 to-transparent animate-scan" />
          </div>
        </div>
      </div>
    </section>
  );
}
