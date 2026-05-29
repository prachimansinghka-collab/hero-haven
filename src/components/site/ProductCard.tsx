import { Heart, ShoppingCart, Star } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  series: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "Hot" | "New" | "Limited" | "Best";
};

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  Hot: "bg-neon-red text-background shadow-neon-red",
  New: "bg-neon-blue text-background shadow-neon-blue",
  Limited: "bg-gradient-neon text-background",
  Best: "bg-foreground text-background",
};

export function ProductCard({ product, accent = "blue" }: { product: Product; accent?: "blue" | "red" }) {
  const ledClass = accent === "red" ? "led-shelf led-shelf-red" : "led-shelf";
  const ringClass =
    accent === "red"
      ? "hover:border-neon-red/60 hover:shadow-neon-red"
      : "hover:border-neon-blue/60 hover:shadow-neon-blue";

  return (
    <article
      className={`card-3d group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-gradient-card transition-all duration-500 ${ringClass}`}
    >
      <div className={`relative aspect-[4/5] overflow-hidden ${ledClass}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,oklch(0.30_0.15_240/0.6),transparent_70%)]" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1024}
          className="relative h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background/60 text-muted-foreground backdrop-blur transition hover:bg-neon-red hover:text-background hover:shadow-neon-red"
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-neon py-2.5 font-display text-xs font-bold uppercase tracking-widest text-background shadow-neon-blue">
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.series}</p>
        <h3 className="font-display text-base font-bold leading-tight">{product.name}</h3>
        <div className="flex items-center gap-1.5 text-xs">
          <Star className="h-3.5 w-3.5 fill-neon-blue text-neon-blue" />
          <span className="font-semibold">{product.rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-neon-blue text-glow-blue">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.oldPrice}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
