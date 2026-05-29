import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-neon shadow-neon-blue">
                <Zap className="h-5 w-5 text-background" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-black tracking-widest">
                HERO<span className="text-neon-blue text-glow-blue">VAULT</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium collectible action figures from the worlds you grew up loving.
            </p>
          </div>
          {[
            { h: "Shop", l: ["Anime", "Superheroes", "Manga", "Movies", "Accessories"] },
            { h: "Vault", l: ["Limited Editions", "New Arrivals", "Best Sellers", "Trending"] },
            { h: "Support", l: ["Track Order", "Shipping", "Returns", "Contact"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-neon-blue">
                {col.h}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="transition hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} HeroVault Collectibles. All rights reserved.</p>
          <p className="font-display uppercase tracking-widest">Forged for collectors.</p>
        </div>
      </div>
    </footer>
  );
}
