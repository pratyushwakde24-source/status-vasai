"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeSlots } from "@/lib/data";
import Footer from "@/components/Footer";
import { toast } from "react-hot-toast";
import { CheckCircle2, MessageCircle, CalendarDays, Clock, Users, Gift, User, Phone, PencilLine } from "lucide-react";

export default function BookingsPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date,
          time,
          guests,
          occasion,
          specialRequests
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to book table');
      
      toast.success('Table Booked successfully!');
      setSubmitted(true);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const occasions = [
    "None",
    "Birthday 🎂",
    "Anniversary 💕",
    "Date Night 🌙",
    "Business Dinner 💼",
    "Party 🎉",
  ];

  return (
    <>
      <div className="pt-32 pb-40 px-6 min-h-screen bg-surface overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="font-label text-xs uppercase tracking-[0.5em] text-primary mb-4 block">
              ✦ Elite Reservations ✦
            </p>
            <h1 className="font-headline text-4xl md:text-6xl text-on-surface font-bold leading-tight">
              Reserve Your <span className="text-gold-gradient">Dining Sanctuary</span>
            </h1>
            <p className="font-body text-on-surface-variant mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Indulge in an unparalleled culinary journey at Status Vasai. 
              Secure your table to experience sophisticated night vibes and artisan cuisine.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                {/* Date & Time Section */}
                <div className="bg-surface-container-low/30 p-8 md:p-10 rounded-3xl border border-outline-variant/10 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                        <CalendarDays size={14} /> Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-surface-container-highest/50 border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary/40 text-on-surface py-4.5 px-5 rounded-xl transition-all duration-300 outline-none placeholder:text-on-surface/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                        <Clock size={14} /> Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full bg-surface-container-highest/50 border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary/40 text-on-surface py-4.5 px-5 rounded-xl transition-all duration-300 outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-surface-container-highest">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-surface-container-highest">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Guest & Occasion Section */}
                <div className="grid grid-cols-1 gap-10">
                  {/* Guest Count */}
                  <div className="space-y-5">
                    <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                      <Users size={14} /> Number of Guests
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setGuests(n)}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl font-headline font-bold text-base transition-all duration-400 active:scale-90 ${
                            guests === n
                              ? "bg-primary text-on-primary shadow-[0_0_25px_rgba(242,202,80,0.4)] border-transparent"
                              : "bg-surface-container-high text-on-surface/70 border border-outline-variant/15 hover:border-primary/50"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setGuests(10)}
                        className={`px-6 h-12 md:h-14 rounded-xl font-headline font-bold text-base transition-all duration-400 active:scale-90 ${
                          guests >= 10
                            ? "bg-primary text-on-primary shadow-[0_0_25px_rgba(242,202,80,0.4)] border-transparent"
                            : "bg-surface-container-high text-on-surface/70 border border-outline-variant/15 hover:border-primary/50"
                        }`}
                      >
                        10+
                      </button>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div className="space-y-5">
                    <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                      <Gift size={14} /> Any Occasion?
                    </label>
                    <div className="flex gap-3 flex-wrap">
                      {occasions.map((occ) => (
                        <button
                          key={occ}
                          type="button"
                          onClick={() => setOccasion(occ)}
                          className={`px-6 py-3 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-400 border hover:scale-105 active:scale-95 ${
                            occasion === occ
                              ? "bg-primary text-on-primary border-transparent shadow-[0\_8px\_20px\_rgba(242,202,80,0.3)]"
                              : "bg-surface-container-high text-on-surface/60 border-outline-variant/10 hover:border-primary/40"
                          }`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Personal & Extra Details Section */}
                <div className="bg-surface-container-low/30 p-8 md:p-10 rounded-3xl border border-outline-variant/10 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                        <User size={14} /> Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Alex Johnson"
                        className="w-full bg-surface-container-highest/50 border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary/40 text-on-surface py-4.5 px-5 rounded-xl transition-all duration-300 outline-none placeholder:text-on-surface/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                        <Phone size={14} /> Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-surface-container-highest/50 border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary/40 text-on-surface py-4.5 px-5 rounded-xl transition-all duration-300 outline-none placeholder:text-on-surface/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                      <PencilLine size={14} /> Special Requests
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={4}
                      placeholder="Share any special requirements (e.g., cake, decorations, seating preference)..."
                      className="w-full bg-surface-container-highest/50 border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary/40 text-on-surface py-4.5 px-5 rounded-xl transition-all duration-300 outline-none resize-none placeholder:text-on-surface/20"
                    />
                  </div>
                </div>

                {/* Submit Container */}
                <div className="flex flex-col items-center pt-10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:min-w-[400px] py-5 px-16 bg-primary text-on-primary font-label text-base font-extrabold uppercase tracking-[0.3em] rounded-2xl shadow-[0_20px_60px_rgba(242,202,80,0.3)] transition-all duration-500 hover:shadow-[0_25px_80px_rgba(242,202,80,0.5)] glow-gold disabled:opacity-50 disabled:cursor-not-allowed border-none text-center"
                  >
                    {isSubmitting ? 'Securing Spot...' : 'Confirm Reservation'}
                  </motion.button>
                  <p className="mt-6 font-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest text-center">
                    Instant confirmation on next step ✦
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 md:p-20 text-center shadow-3xl border border-primary/20 bg-surface-container-low/20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12, delay: 0.2 }}
                  className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(242,202,80,0.2)]"
                >
                  <CheckCircle2 size={48} className="text-primary" />
                </motion.div>
                
                <h2 className="font-headline text-3xl md:text-5xl text-on-surface mb-6 font-bold">
                  Reservation Validated
                </h2>
                
                <div className="space-y-4 mb-12">
                  <p className="font-body text-lg text-on-surface-variant">
                    Thank you, <span className="text-on-surface font-bold">{name}</span>. Your sanctuary awaits.
                  </p>
                  <div className="inline-block px-8 py-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="font-label text-base md:text-lg text-primary font-bold uppercase tracking-widest">
                      {guests} Guests ✦ {date} ✦ {time}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href={`https://wa.me/919876543210?text=Booking confirmed: ${name}, ${guests} guests, ${date} at ${time}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4.5 bg-green-600 text-white font-label text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-green-500 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Confirmation
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setDate("");
                      setTime("");
                      setGuests(2);
                      setName("");
                      setPhone("");
                      setOccasion("");
                      setSpecialRequests("");
                    }}
                    className="px-10 py-4.5 border border-outline-variant/30 text-on-surface font-label text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-surface-container-high hover:border-primary/40 transition-all duration-300 shadow-md"
                  >
                    Book Another Table
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}
