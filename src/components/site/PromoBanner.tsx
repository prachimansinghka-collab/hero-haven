import { Tag, Users } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="relative z-40 w-full overflow-hidden border-b border-neon-red/30 bg-gradient-to-r from-neon-red/10 via-background to-neon-blue/10">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-neon-red/20 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-neon-blue/20 blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 sm:flex-row sm:gap-4 sm:py-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neon-red/15 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-neon-red neon-border-red">
            <Tag className="h-3 w-3" />
            Exclusive Launch Offer
          </span>
        </div>

        <p className="text-center text-sm font-semibold text-foreground sm:text-base">
          <span className="text-neon-red text-glow-red">First 10 buyers get 40% OFF</span>
          {" — "}
          <span className="text-muted-foreground">Grab yours before it runs out!</span>
        </p>

        <div className="flex items-center gap-1.5 rounded-full bg-background/60 px-2.5 py-1 text-xs font-bold text-neon-blue border border-neon-blue/30">
          <Users className="h-3 w-3" />
          <span>7 left</span>
        </div>
      </div>
    </div>
  );
}
