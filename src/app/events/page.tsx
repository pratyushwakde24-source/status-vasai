"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

const eventTypes = [
  {
    icon: "🎂",
    title: "Birthday Party",
    description: "Make your birthday unforgettable with custom cakes, decorations, and a dedicated party zone.",
    features: ["Custom cake", "Decoration", "Photo corner", "Party music"],
  },
  {
    icon: "🥂",
    title: "Celebration Night",
    description: "Whether it's a promotion, housewarming, or achievement — celebrate in style.",
    features: ["Reserved area", "Special menu", "Toasting service", "Live music"],
  },
  {
    icon: "👫",
    title: "Friend Gathering",
    description: "Get the squad together. Group packages with unlimited fun & food.",
    features: ["Group deals", "Long tables", "Sound system", "Games"],
  },
  {
    icon: "🎊",
    title: "Private Party",
    description: "Exclusive use of our premium space. Full privacy, full luxury.",
    features: ["Private area", "Custom menu", "Personal staff", "Custom decor"],
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src="/images/ambience/bar.png"
            alt="Events at Status Vasai"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/50 to-surface" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-4"
            >
              🎉 Celebrate With Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-3xl md:text-6xl text-on-surface"
            >
              Plan Your Night at{" "}
              <span className="text-gold-gradient">Status</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-body text-on-surface-variant mt-4 max-w-xl"
            >
              From intimate birthdays to epic parties — we make every moment
              legendary.
            </motion.p>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() =>
                  setSelectedEvent(selectedEvent === i ? null : i)
                }
                className={`glass rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 ${
                  selectedEvent === i
                    ? "border-primary/40 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                    : "hover:border-primary/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{event.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl text-on-surface mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {event.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 bg-surface-container-high rounded-full font-label text-[10px] uppercase tracking-wider text-on-surface-variant border border-outline-variant/10"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-headline text-2xl md:text-4xl text-center text-on-surface mb-12"
          >
            Enquire <span className="text-gold-gradient">Now</span>
          </motion.h2>

          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="eventForm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface py-4 px-4 rounded-t-lg transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      required
                      min={5}
                      placeholder="10"
                      className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                    Event Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event — type, budget, any special arrangements..."
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-sm glow-gold hover:shadow-[0_0_30px_rgba(242,202,80,0.5)] transition-all duration-300"
                >
                  Submit Enquiry
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="eventSuccess"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-lg p-10 md:p-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, delay: 0.2 }}
                  className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6"
                >
                  <span className="text-4xl">🎉</span>
                </motion.div>
                <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-3">
                  Enquiry Received!
                </h2>
                <p className="text-on-surface-variant mb-8">
                  Our events team will reach out within 2 hours to discuss your
                  perfect night at Status.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi! I just submitted an event enquiry on your website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-green-500 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    chat
                  </span>
                  Follow Up on WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
      <Footer />
    </>
  );
}
