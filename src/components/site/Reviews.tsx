import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Kenji T.",
    role: "Verified Collector",
    text: "The detail is insane. The LED display case feels like a museum piece. Best unboxing of my life.",
    rating: 5,
  },
  {
    name: "Maya R.",
    role: "Anime Fan",
    text: "Got the limited edition swordsman — sword glows for real. Packaging alone is worth framing.",
    rating: 5,
  },
  {
    name: "Devon K.",
    role: "Father / Hero",
    text: "Bought one for my kid, ended up keeping it on my shelf. Build quality is next level.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-neon-blue text-glow-blue">
            Collector Wall
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Loved by 87,000+ Collectors
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative overflow-hidden rounded-xl border border-border/70 bg-gradient-card p-6 transition hover:border-neon-blue/50 hover:shadow-neon-blue"
            >
              <Quote className="absolute right-4 top-4 h-10 w-10 text-neon-blue/20" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neon-blue text-neon-blue" />
                ))}
              </div>
              <blockquote className="text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4">
                <div className="font-display font-bold">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
