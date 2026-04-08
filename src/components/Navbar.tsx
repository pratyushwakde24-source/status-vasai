"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/bookings", label: "Bookings" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 w-full z-[90000] transition-all duration-300 ${
          scrolled
            ? "bg-black shadow-2xl py-3 border-b border-[#C9A96E]/20"
            : "bg-black/60 backdrop-blur-md py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 relative">
          
          {/* Left: Logo/Name */}
          <Link href="/" className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold tracking-[0.3em] font-headline uppercase leading-none group">
              <span className="text-white group-hover:text-[#C9A96E] transition-colors">STATUS</span>
              <span className="text-[#C9A96E] ml-2 font-medium tracking-[0.5em] text-xs md:text-lg">VASAI</span>
            </h1>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-10 lg:gap-14 font-label tracking-[0.2em] uppercase text-[11px] font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#C9A96E] transition-colors duration-500 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Actions & Hamburger */}
          <div className="flex items-center justify-end gap-6">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-[#C9A96E] transition-all transform hover:scale-110 active:scale-95"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} strokeWidth={1.2} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-black text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger for Mobile - HIGH VISIBILITY */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white flex items-center p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
            </button>

            <Link
              href="/bookings"
              className="hidden md:inline-flex items-center justify-center bg-transparent border border-[#C9A96E]/50 text-[#C9A96E] font-label text-[10px] font-bold uppercase px-7 py-2.5 rounded-none hover:bg-[#C9A96E] hover:text-black transition-all duration-500 tracking-[0.2em]"
            >
              Book Table
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col justify-center items-center"
          >
            <div className="absolute top-6 right-6">
               <button
                onClick={() => setMobileOpen(false)}
                className="text-[#C9A96E] p-2 hover:rotate-90 transition-transform duration-300"
              >
                <X size={36} strokeWidth={1.2} />
              </button>
            </div>

            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center gap-10"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-headline text-3xl tracking-[0.2em] uppercase text-white hover:text-[#C9A96E] transition-all duration-500 py-2 block text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 }
                }}
                className="mt-12 flex flex-col items-center gap-6"
              >
                <Link
                  href="/bookings"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#C9A96E] text-black font-label text-[11px] font-bold uppercase px-12 py-4 tracking-[0.2em] shadow-2xl active:scale-95 transition-all"
                >
                  Book a Table
                </Link>
                
                <div className="flex gap-10 mt-6">
                  <a href="tel:+919876543210" className="text-white/40 hover:text-[#C9A96E] transition-colors p-2">
                    <Phone size={24} strokeWidth={1.2} />
                  </a>
                  <a href="https://wa.me/919876543210" className="text-white/40 hover:text-[#C9A96E] transition-colors p-2">
                    <MessageCircle size={24} strokeWidth={1.2} />
                  </a>
                </div>
              </motion.div>
            </motion.nav>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/10 font-headline tracking-[1em] text-[8px] uppercase pointer-events-none">
              Exclusive Luxury Dining
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>



  );
}
