"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, PartyPopper } from "lucide-react";

export default function EventsCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/ambience/bar.png"
          alt="Bar Area"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-8"
          >
            <PartyPopper size={18} className="text-primary" />
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
              Celebrate With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl text-on-surface mb-8 font-bold leading-tight"
          >
            Plan Your Next Event <br /> At <span className="text-gold-gradient">Status</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-on-surface-variant text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From intimate birthdays to grand celebrations — make them legendary.
            Our dedicated events team will craft an unforgettable experience tailored to your style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              href="/events"
              className="px-10 py-4.5 bg-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-lg glow-gold-hover transition-all duration-400 active:scale-95 shadow-2xl"
            >
              Start Planning
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi! I'd like to plan an event at Status Vasai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-4.5 border border-primary-container/30 text-on-surface font-label text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary-container/10 transition-all duration-400 active:scale-95 shadow-lg"
            >
              <MessageCircle size={20} className="text-primary" />
              Chat Support
            </a>
          </motion.div>

          {/* Event tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-16"
          >
            {["🎂 Birthdays", "🥂 Celebrations", "👯 Friend Gatherings", "🎊 Private Parties", "🤵 Corporate Events"].map(
              (event) => (
                <span
                  key={event}
                  className="px-5 py-2.5 bg-surface-container-high/40 rounded-full font-label text-[11px] font-bold text-on-surface-variant border border-outline-variant/10 shadow-sm"
                >
                  {event}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


