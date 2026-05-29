import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

function getDiff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { d, h, m, s };
}

export function CountdownBanner() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 47 + 1000 * 32);
  const [t, setT] = useState(() => getDiff(target));

  useEffect(() => {
    const id = setInterval(() => setT(getDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { v: t.d, l: "Days" },
    { v: t.h, l: "Hours" },
    { v: t.m, l: "Min" },
    { v: t.s, l: "Sec" },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-neon-red/40 bg-gradient-card p-8 shadow-neon-red sm:p-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-neon-red/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-neon-blue/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full neon-border-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neon-red">
                <Flame className="h-3.5 w-3.5" /> Flash Drop
              </div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
                <span className="text-glow-red text-neon-red">40% Off</span> Limited Edition Vault
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Twelve numbered figures. Once they're gone, they're gone forever. The countdown is live.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-neon px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-background shadow-neon-blue">
                Claim Your Drop
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {cells.map((c) => (
                <div
                  key={c.l}
                  className="relative overflow-hidden rounded-lg border border-border/70 bg-background/60 p-4 text-center neon-border-blue"
                >
                  <div className="font-display text-3xl font-black tabular-nums text-neon-blue text-glow-blue sm:text-4xl">
                    {String(c.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
