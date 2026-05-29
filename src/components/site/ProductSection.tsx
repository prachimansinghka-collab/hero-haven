import { ArrowRight } from "lucide-react";
import { ProductCard, type Product } from "./ProductCard";

export function ProductSection({
  eyebrow,
  title,
  description,
  products,
  accent = "blue",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  products: Product[];
  accent?: "blue" | "red";
}) {
  const accentText = accent === "red" ? "text-neon-red text-glow-red" : "text-neon-blue text-glow-blue";
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.3em] ${accentText}`}>
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
            )}
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
          >
            View all
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
