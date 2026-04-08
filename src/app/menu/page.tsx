"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { menuItems, menuCategories } from "@/lib/data";
import MenuCard from "@/components/MenuCard";
import Footer from "@/components/Footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("North Indian");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg =
        vegFilter === "all" ||
        (vegFilter === "veg" && item.veg) ||
        (vegFilter === "nonveg" && !item.veg);
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegFilter]);

  return (
    <>
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-3">
            Curated Menu
          </p>
          <h1 className="font-headline text-3xl md:text-5xl text-on-surface">
            Our <span className="text-gold-gradient">Menu</span>
          </h1>
        </motion.div>

        {/* Search and Filters */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
            {/* Search */}
            <div className="w-full md:max-w-md">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                Refine Search
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cravings? Search here..."
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 pl-12 rounded-t-lg transition-all duration-400"
                />
              </div>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() =>
                  setVegFilter(vegFilter === "veg" ? "all" : "veg")
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full border font-label text-xs uppercase tracking-tight transition-all ${
                  vegFilter === "veg"
                    ? "bg-green-600/20 border-green-500/40 text-green-400"
                    : "bg-surface-container-high border-outline-variant/15 text-on-surface"
                }`}
              >
                <span
                  className="material-symbols-outlined text-sm text-green-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  circle
                </span>
                Veg
              </button>
              <button
                onClick={() =>
                  setVegFilter(vegFilter === "nonveg" ? "all" : "nonveg")
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full border font-label text-xs uppercase tracking-tight transition-all ${
                  vegFilter === "nonveg"
                    ? "bg-red-600/20 border-red-500/40 text-red-400"
                    : "bg-surface-container-high border-outline-variant/15 text-on-surface"
                }`}
              >
                <span
                  className="material-symbols-outlined text-sm text-red-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  circle
                </span>
                Non-Veg
              </button>
            </div>
          </div>
        </motion.section>

        {/* Categories Navigation */}
        <nav className="mb-12 overflow-x-auto no-scrollbar -mx-6 px-6">
          <ul className="flex gap-6 md:gap-8 border-b border-outline-variant/10 pb-4 min-w-max">
            {menuCategories.map((cat) => (
              <li key={cat} className="relative">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`font-headline text-base md:text-lg tracking-widest uppercase transition-colors ${
                    activeCategory === cat
                      ? "text-primary"
                      : "text-on-surface/40 hover:text-on-surface"
                  }`}
                >
                  {cat}
                </button>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="categoryIndicator"
                    className="absolute -bottom-4 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Grid */}
        <motion.div
          key={activeCategory + vegFilter + searchQuery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <span className="material-symbols-outlined text-5xl text-outline-variant/30 mb-4 block">
                restaurant
              </span>
              <p className="font-headline text-lg text-on-surface/40">
                No dishes found
              </p>
              <p className="text-sm text-on-surface-variant/40 mt-2">
                Try a different search or category
              </p>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
