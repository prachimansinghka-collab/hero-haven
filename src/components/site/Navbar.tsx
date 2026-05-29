import { Heart, Search, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";

const categories = ["Anime", "Superheroes", "Manga", "Movies", "Accessories"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-md bg-gradient-neon shadow-neon-blue">
            <Zap className="h-5 w-5 text-background" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-black tracking-widest">
            HERO<span className="text-neon-blue text-glow-blue">VAULT</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {categories.map((c) => (
            <a
              key={c}
              href="#"
              className="relative text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {c}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-blue shadow-neon-blue transition-all duration-300 group-hover:w-full hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden h-10 w-10 place-items-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-foreground sm:grid">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative grid h-10 w-10 place-items-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-foreground">
            <Heart className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-neon-red text-[10px] font-bold text-background shadow-neon-red">
              3
            </span>
          </button>
          <button className="relative grid h-10 w-10 place-items-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-neon-blue text-[10px] font-bold text-background shadow-neon-blue">
              2
            </span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="ml-1 grid h-10 w-10 place-items-center rounded-md text-muted-foreground md:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {categories.map((c) => (
              <a key={c} href="#" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {c}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
