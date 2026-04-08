"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "../lib/cart-context";
import type { MenuItem } from "../lib/data";
import { useState } from "react";
import StarRating from "./StarRating";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const tagColors: Record<string, string> = {
    "Best Seller": "bg-primary text-on-primary",
    "Chef Special": "bg-secondary-container text-on-secondary-container",
    "Mixologist Pick": "bg-secondary-container text-on-secondary-container",
    New: "bg-tertiary-container text-on-tertiary-container",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 w-full shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Indicators Overlay */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center bg-black/20 backdrop-blur-sm ${item.veg ? "border-green-500" : "border-red-500"}`}>
            <div className={`w-2.5 h-2.5 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`} />
          </div>
        </div>
        {item.tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`${tagColors[item.tag]} font-label text-[10px] font-extrabold uppercase px-3 py-1 rounded-sm shadow-2xl`}>
              {item.tag}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-headline text-lg md:text-xl text-on-surface leading-tight font-bold">
            {item.name}
          </h3>
          <span className="font-label font-bold text-primary text-base shrink-0 ml-3">
            ₹{item.price}
          </span>
        </div>
        
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-6 font-body leading-relaxed min-h-[2.5rem]">
          {item.description}
        </p>

        {/* Footer Row */}
        <div className="mt-auto pt-5 border-t border-outline-variant/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-surface-container-high px-2.5 py-1 rounded-full border border-outline-variant/10 flex items-center gap-1.5 shadow-inner">
              <StarRating rating={item.rating} size={12} />
              <span className="text-[10px] font-label font-extrabold text-primary ml-0.5">
                {item.rating}
              </span>
            </div>
            <span className="text-[9px] font-label font-bold text-on-surface-variant/40 uppercase tracking-widest hidden sm:inline">
              {item.reviews} reviews
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`font-label text-[10px] sm:text-xs font-bold uppercase px-4 py-2.5 rounded-lg transition-all duration-300 tracking-wider shrink-0 shadow-lg ${
              added
                ? "bg-green-600 text-white"
                : "bg-primary text-on-primary hover:bg-secondary-container hover:shadow-primary/20"
            }`}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}


