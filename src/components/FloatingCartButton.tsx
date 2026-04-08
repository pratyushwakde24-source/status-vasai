"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../lib/cart-context";
import { ChevronRight } from "lucide-react";

export default function FloatingCartButton() {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-xs md:max-w-md px-4"
        >
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-primary text-on-primary flex items-center justify-between px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(242,202,80,0.4)] transition-all active:scale-95 group hover:shadow-[0_10px_50px_rgba(242,202,80,0.6)]"
          >
            <div className="flex items-center gap-4">
              <div className="bg-on-primary text-primary w-8 h-8 rounded-full flex items-center justify-center font-label font-bold text-xs">
                {totalItems}
              </div>
              <div className="text-left">
                <p className="font-label text-[10px] font-extrabold uppercase tracking-widest leading-none">
                  View Cart
                </p>
                <p className="font-headline text-sm font-bold">
                  {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"} SELECTED
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-headline text-lg font-bold">
                ₹{totalPrice}
              </span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
