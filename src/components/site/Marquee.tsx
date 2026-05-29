const items = [
  "Free Shipping over $99",
  "Authenticity Certified",
  "Worldwide Delivery",
  "Numbered Limited Drops",
  "30-Day Returns",
  "New Drops Every Friday",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-background/60 py-3">
      <div className="flex w-max gap-12 whitespace-nowrap animate-marquee">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground"
          >
            <span className="mr-12 text-neon-blue">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
