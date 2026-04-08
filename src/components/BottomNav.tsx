"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed, CalendarDays, PartyPopper, User } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/menu", icon: UtensilsCrossed, label: "Menu" },
  { href: "/bookings", icon: CalendarDays, label: "Book" },
  { href: "/events", icon: PartyPopper, label: "Party" },
  { href: "/profile", icon: User, label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", damping: 20 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%] max-w-md"
    >
      <div className="flex justify-around items-center py-3 px-2 bg-surface/90 backdrop-blur-xl rounded-full border border-primary-container/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center transition-all duration-500 relative ${
                isActive
                  ? "text-[#C9A96E] scale-110"
                  : "text-white/40 hover:text-[#C9A96E]"
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span className="font-label text-[8px] uppercase tracking-[0.1em] mt-1">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -bottom-1 w-4 h-0.5 bg-[#C9A96E] rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
