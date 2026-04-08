"use client";

import { motion } from "framer-motion";
import { menuItems } from "../lib/data";
import MenuCard from "./MenuCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedDishes() {
  const featured = menuItems.filter((i) => i.tag === "Best Seller" || i.tag === "Chef Special").slice(0, 6);

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-4"
        >
          Curated For You
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-3xl md:text-5xl text-on-surface"
        >
          Signature <span className="text-gold-gradient">Favourites</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-on-surface-variant mt-4 max-w-lg mx-auto"
        >
          The dishes that made Status the talk of Vasai. Each one is a
          masterpiece crafted with passion.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {featured.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          href="/menu"
          className="inline-flex items-center gap-3 px-10 py-4 border border-primary-container/30 text-on-surface font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-primary-container/10 hover:border-primary/50 transition-all duration-400 group"
        >
          View Full Menu
          <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
