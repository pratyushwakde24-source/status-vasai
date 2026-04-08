"use client";

import { motion } from "framer-motion";
import { loveReasons } from "../lib/data";
import Image from "next/image";

export default function WhyPeopleLove() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/ambience/outdoor.png"
          alt="Status Vasai Ambience"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-4"
          >
            The Status Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-5xl text-on-surface"
          >
            Why People{" "}
            <span className="text-gold-gradient">Love Status</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loveReasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-lg p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-500 shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl md:text-5xl mb-6"
              >
                {reason.icon}
              </motion.div>
              <h3 className="font-headline text-lg text-on-surface mb-4 font-bold">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


