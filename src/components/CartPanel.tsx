"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "../lib/cart-context";
import { X, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPanel() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const router = useRouter();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-surface-container-lowest border-l border-outline-variant/10 flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-5 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/10">
              {/* Back to Home Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  router.push("/");
                }}
                className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-all active:scale-90"
                aria-label="Back to home"
              >
                <ArrowLeft size={24} className="text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Centered Title */}
              <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <h2 className="font-headline text-lg md:text-xl text-on-surface tracking-wide">
                  Your Cart
                </h2>
                <p className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.2em]">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-on-surface-variant/60 hover:text-on-surface transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-outline-variant/20 mb-4" />
                  <p className="font-headline text-lg text-on-surface/40">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-on-surface-variant/40 mt-2">
                    Add some delicious items from our menu
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-3 bg-surface-container-low rounded-lg border border-outline-variant/5"
                    >
                      <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-headline text-sm text-on-surface truncate">
                          {item.name}
                        </h4>
                        <p className="font-label text-xs text-primary mt-0.5">
                          ₹{item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-sm hover:bg-primary hover:text-on-primary transition-colors"
                          >
                            −
                          </button>
                          <span className="font-label text-sm font-bold min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-sm hover:bg-primary hover:text-on-primary transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-on-surface-variant/40 hover:text-error transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                        <span className="font-label text-sm font-bold text-primary">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-outline-variant/10 space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={clearCart}
                    className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 hover:text-error transition-colors"
                  >
                    Clear All
                  </button>
                  <div className="text-right">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Total
                    </p>
                    <p className="font-headline text-2xl text-primary">
                      ₹{totalPrice}
                    </p>
                  </div>
                </div>

                {/* Delivery/Pickup Toggle */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-primary text-on-primary font-label text-xs font-bold uppercase tracking-widest rounded-sm">
                    Delivery
                  </button>
                  <button className="flex-1 py-2.5 bg-surface-container-high text-on-surface font-label text-xs font-bold uppercase tracking-widest rounded-sm border border-outline-variant/15 hover:border-primary/40 transition-all">
                    Pickup
                  </button>
                </div>

                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    // use Next navigation or window.location
                    window.location.href = "/checkout";
                  }}
                  className="w-full py-4 bg-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-sm glow-gold hover:shadow-[0_0_30px_rgba(242,202,80,0.5)] transition-all duration-300 active:scale-[0.98]">
                  Proceed to Checkout — ₹{totalPrice}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
