"use client";

import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "dine-in", // dine-in, takeaway, delivery
    tableNo: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(i => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity
          })),
          total: totalPrice,
          customerDetails: formData,
        }),
      });

      if (response.ok) {
        toast.success("Order placed successfully!");
        clearCart();
        router.push("/profile");
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-3">
            Final Step
          </p>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface">
            Complete Your <span className="text-gold-gradient">Order</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Order Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-outline-variant/20">
                <h3 className="font-headline text-xl mb-6 text-on-surface">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name"
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter mobile number"
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-outline-variant/20">
                <h3 className="font-headline text-xl mb-6 text-on-surface">Service Type</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["dine-in", "takeaway", "delivery"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({...formData, type: t})}
                      className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                        formData.type === t 
                        ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20" 
                        : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                      }`}
                    >
                      {t.replace("-", " ")}
                    </button>
                  ))}
                </div>

                {formData.type === "dine-in" && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Table Number</label>
                    <input 
                      required
                      type="text" 
                      value={formData.tableNo}
                      onChange={e => setFormData({...formData, tableNo: e.target.value})}
                      placeholder="e.g. VIP-01"
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                )}

                {formData.type === "delivery" && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Delivery Address</label>
                    <textarea 
                      required
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                      placeholder="Enter complete address"
                      rows={3}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                )}
              </div>

              <button 
                disabled={isSubmitting || items.length === 0}
                className="w-full bg-primary text-on-primary font-label uppercase tracking-[0.3em] text-sm py-5 rounded-2xl shadow-2xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Place Order Now"}
              </button>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl border border-outline-variant/20 overflow-hidden sticky top-32">
              <div className="bg-primary/5 p-6 border-b border-outline-variant/10">
                <h3 className="font-headline text-lg text-on-surface">Order Summary</h3>
              </div>
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex gap-4 items-center">
                      <span className="text-primary-container font-bold w-6">{item.quantity}x</span>
                      <span className="text-on-surface font-medium">{item.name}</span>
                    </div>
                    <span className="text-on-surface-variant">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                {items.length === 0 && (
                  <p className="text-center text-on-surface-variant py-8">Your cart is empty</p>
                )}
              </div>
              <div className="p-6 bg-surface-container-high/50 border-t border-outline-variant/10 space-y-3">
                <div className="flex justify-between text-on-surface-variant text-xs uppercase tracking-widest font-medium">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant text-xs uppercase tracking-widest font-medium">
                  <span>Taxes (Included)</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between text-on-surface text-lg font-bold pt-2">
                  <span>Grand Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-widest text-center mt-6">
              Complimentary Table Service for Dine-in
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
