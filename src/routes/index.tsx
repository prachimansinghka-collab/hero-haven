import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProductSection } from "@/components/site/ProductSection";
import { CountdownBanner } from "@/components/site/CountdownBanner";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";
import type { Product } from "@/components/site/ProductCard";

import f1 from "@/assets/figure-1.jpg";
import f2 from "@/assets/figure-2.jpg";
import f3 from "@/assets/figure-3.jpg";
import f4 from "@/assets/figure-4.jpg";
import f5 from "@/assets/figure-5.jpg";
import f6 from "@/assets/figure-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeroVault — Premium Collectible Action Figures" },
      {
        name: "description",
        content:
          "Museum-grade collectible action figures from anime, manga and superhero universes. Limited drops, LED display cases, worldwide shipping.",
      },
      { property: "og:title", content: "HeroVault — Premium Collectible Action Figures" },
      {
        property: "og:description",
        content: "Limited edition action figures for serious collectors.",
      },
    ],
  }),
  component: Index,
});

const trending: Product[] = [
  { id: "t1", name: "Azure Ronin — Blade of Dawn", series: "Anime · Saga", price: 189, oldPrice: 229, rating: 4.9, reviews: 412, image: f1, badge: "Hot" },
  { id: "t2", name: "Crimson Vanguard MK II", series: "Superheroes", price: 219, rating: 4.8, reviews: 287, image: f2, badge: "Hot" },
  { id: "t3", name: "Solar Saiyan — Ascension", series: "Manga · Legends", price: 249, rating: 5.0, reviews: 511, image: f3, badge: "Best" },
  { id: "t4", name: "Nightshade — Twin Fangs", series: "Anime · Shadow", price: 199, oldPrice: 239, rating: 4.7, reviews: 196, image: f4, badge: "Hot" },
];

const newArrivals: Product[] = [
  { id: "n1", name: "Titan Pilot — Core Online", series: "Movies · Mecha", price: 279, rating: 4.9, reviews: 88, image: f5, badge: "New" },
  { id: "n2", name: "Nocturne Knight — Black Armor", series: "Superheroes", price: 259, rating: 4.9, reviews: 142, image: f6, badge: "New" },
  { id: "n3", name: "Azure Ronin — Variant Blue", series: "Anime · Saga", price: 199, rating: 4.8, reviews: 64, image: f1, badge: "New" },
  { id: "n4", name: "Solar Saiyan — Gold Frame", series: "Manga · Legends", price: 269, rating: 4.9, reviews: 73, image: f3, badge: "New" },
];

const limited: Product[] = [
  { id: "l1", name: "Crimson Vanguard /500", series: "Numbered Edition", price: 349, oldPrice: 449, rating: 5.0, reviews: 58, image: f2, badge: "Limited" },
  { id: "l2", name: "Nightshade — Blood Moon /300", series: "Numbered Edition", price: 389, rating: 5.0, reviews: 41, image: f4, badge: "Limited" },
  { id: "l3", name: "Titan Pilot — Reactor /250", series: "Numbered Edition", price: 429, rating: 4.9, reviews: 33, image: f5, badge: "Limited" },
  { id: "l4", name: "Nocturne Knight — Onyx /400", series: "Numbered Edition", price: 369, oldPrice: 449, rating: 5.0, reviews: 62, image: f6, badge: "Limited" },
];

const best: Product[] = [
  { id: "b1", name: "Solar Saiyan — Ascension", series: "Manga · Legends", price: 249, rating: 5.0, reviews: 511, image: f3, badge: "Best" },
  { id: "b2", name: "Azure Ronin — Blade of Dawn", series: "Anime · Saga", price: 189, rating: 4.9, reviews: 412, image: f1, badge: "Best" },
  { id: "b3", name: "Nocturne Knight", series: "Superheroes", price: 259, rating: 4.9, reviews: 380, image: f6, badge: "Best" },
  { id: "b4", name: "Crimson Vanguard MK II", series: "Superheroes", price: 219, rating: 4.8, reviews: 287, image: f2, badge: "Best" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductSection
          eyebrow="Trending Figures"
          title="What Collectors Are Hunting Now"
          description="The most-watched figures across the vault this week."
          products={trending}
          accent="blue"
        />
        <ProductSection
          eyebrow="New Arrivals"
          title="Fresh Off The Production Line"
          description="Latest additions to the catalog — packed, photographed, ready to ship."
          products={newArrivals}
          accent="blue"
        />
        <CountdownBanner />
        <ProductSection
          eyebrow="Limited Editions"
          title="Numbered. Sealed. Untouchable."
          description="Once these are gone, they never come back. Each piece individually numbered."
          products={limited}
          accent="red"
        />
        <ProductSection
          eyebrow="Best Sellers"
          title="Hall Of Heroes"
          description="Top-rated, top-shelved, top of the leaderboard."
          products={best}
          accent="blue"
        />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
