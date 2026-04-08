"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
      {/* Map (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-outline-variant/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] h-[450px] md:h-[550px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0!2d72.8!3d19.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Status Vasai Location"
        />
      </motion.div>

      {/* Info (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <p className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-6">
          Location & Contact
        </p>
        <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-8 leading-tight font-bold">
          Visit Our <span className="text-gold-gradient">Sanctuary</span>
        </h2>
        <p className="font-body text-on-surface-variant leading-relaxed mb-12 text-lg md:text-xl">
          Nestled in the heart of Vasai, Status awaits you with open doors and
          warm hospitality. Drop by for a meal, a drink, or an unforgettable
          evening.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-5 glass bg-surface-container/20 border border-outline-variant/10 p-6 rounded-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-headline text-lg text-on-surface mb-1 font-bold">Address</p>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                Near Vasai Fort, Vasai West,<br />Maharashtra 401201
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-5 glass bg-surface-container/20 border border-outline-variant/10 p-6 rounded-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
              <Clock className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-headline text-lg text-on-surface mb-1 font-bold">Hours</p>
              <p className="text-sm text-on-surface-variant/80">Mon–Sun: 12:00 PM – 11:30 PM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-5 glass bg-surface-container/20 border border-outline-variant/10 p-6 rounded-xl hover:border-primary/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-headline text-lg text-on-surface mb-1 font-bold">Phone</p>
              <a
                href="tel:+919876543210"
                className="text-base text-primary hover:text-gold-300 transition-colors tracking-wide font-bold"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mt-12">
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20order/book%20from%20Status%20Vasai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4.5 bg-green-600 text-white font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-green-500 transition-all shadow-xl shadow-green-900/40 active:scale-95 flex-grow sm:flex-grow-0"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=Status+Vasai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4.5 border border-primary-container/40 text-on-surface font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary-container/10 transition-all active:scale-95 flex-grow sm:flex-grow-0 shadow-lg"
          >
            <Navigation size={20} className="text-primary" />
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
