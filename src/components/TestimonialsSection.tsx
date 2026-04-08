"use client";

import { motion } from "framer-motion";
import { testimonials } from "../lib/data";
import StarRating from "./StarRating";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest overflow-hidden">
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-4"
          >
            Guest Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl lg:text-6xl text-on-surface"
          >
            What Our <span className="text-gold-gradient">Guests Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Grid - Fixed Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.slice(0, 2).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 md:p-10 flex flex-col justify-between group shadow-2xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 bg-surface-container-low/40"
            >
              <div>
                {/* Stars */}
                <StarRating rating={t.rating} size={20} className="mb-10" />

                {/* Quote */}
                <p className="font-body text-base md:text-xl text-on-surface/90 leading-relaxed mb-12 italic relative">
                  <span className="absolute -top-6 -left-2 text-6xl text-primary/10 font-serif leading-none">&ldquo;</span>
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-outline-variant/5">
                <div className="w-16 h-16 rounded-full bg-surface-container-high border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-xl overflow-hidden shrink-0">
                  <span className="font-headline text-xl font-bold text-primary">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-headline text-lg md:text-xl text-on-surface font-bold">
                    {t.name}
                  </p>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 mt-1 font-bold">
                    Verified Guest ✦ Vasai
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


