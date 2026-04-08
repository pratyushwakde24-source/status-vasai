"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "../lib/data";
import { useState } from "react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-4"
        >
          Visual Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-3xl md:text-5xl text-on-surface"
        >
          Our <span className="text-gold-gradient">Gallery</span>
        </motion.h2>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelectedImage(i)}
            className={`cinematic-reveal rounded-lg overflow-hidden cursor-pointer border border-outline-variant/5 hover:border-primary/25 transition-all duration-500 ${
              i === 0 || i === 5
                ? "row-span-2 h-64 md:h-[420px]"
                : "h-32 md:h-48"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full aspect-video"
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="80vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-headline text-sm text-on-surface/70">
              {galleryImages[selectedImage].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
