"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ambience/hero.png"
          alt="Status Vasai Restaurant Interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Deeper multi-layer gradient overlay for premium contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-label text-[11px] md:text-xs uppercase tracking-[0.5em] text-primary-container mb-8"
        >
          ✦ Vasai &apos;s Premier Lounge & Dining ✦
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10"
        >
          <span className="text-on-surface block mb-2 drop-shadow-2xl">Elevate Your</span>
          <span className="text-gold-gradient block pb-2 drop-shadow-2xl">Dining Status</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-on-surface-variant text-base md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed drop-shadow-md"
        >
          Where sophisticated night vibes meet culinary excellence. Experience 
          cinematic ambience and flavours that define Vasai&apos;s nightlife.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <Link
            href="/bookings"
            className="px-12 py-5 bg-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-lg glow-gold transition-all duration-400 hover:shadow-[0_0_50px_rgba(242,202,80,0.4)] active:scale-95 shadow-xl"
          >
            Reserve Table
          </Link>
          <Link
            href="/menu"
            className="px-12 py-5 bg-surface-container/20 backdrop-blur-md border border-primary-container/30 text-on-surface font-label text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary-container/20 hover:border-primary/50 transition-all duration-400 active:scale-95 shadow-lg"
          >
            Explore Menu
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-12 md:gap-24"
        >
          {/* Rating Stat */}
          <div className="flex flex-col items-center">
            <StarRating rating={4.8} size={22} className="mb-4" />
            <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/80">
              <span className="text-primary font-bold mr-1">4.8</span> Google Reviews
            </p>
          </div>

          {[
            { value: "500+", label: "Happy Guests" },
            { value: "150+", label: "Chef's Specials" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="font-headline text-2xl md:text-3xl text-primary font-bold mb-3 drop-shadow-sm px-4">
                {stat.value}
              </p>
              <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-label text-[9px] uppercase tracking-[0.4em] text-on-surface-variant/30 font-bold">
          Swipe Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-outline-variant/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
