"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "settings">("orders");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOtp) {
      setShowOtp(true);
    } else {
      setIsLoggedIn(true);
    }
  };

  // Mock order data
  const mockOrders = [
    {
      id: "STX-2024-001",
      date: "2024-12-20",
      items: ["Vasai Fort Biryani x2", "The Gold Rush x1"],
      total: 1840,
      status: "Delivered",
    },
    {
      id: "STX-2024-002",
      date: "2024-12-18",
      items: ["Dal Status Signature", "Butter Naan x4"],
      total: 635,
      status: "Delivered",
    },
    {
      id: "STX-2024-003",
      date: "2024-12-25",
      items: ["Royal Tandoori Murg", "Midnight Mojito x2"],
      total: 1645,
      status: "Preparing",
    },
  ];

  if (!isLoggedIn) {
    return (
      <>
        <div className="pt-24 pb-32 px-6 max-w-md mx-auto min-h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-lg p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl text-primary">
                  person
                </span>
              </div>
              <h1 className="font-headline text-2xl text-on-surface">
                Welcome to Status
              </h1>
              <p className="text-sm text-on-surface-variant mt-2">
                Login to track orders, manage bookings & more
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <span className="bg-surface-container-highest border-b border-outline-variant text-on-surface-variant py-4 px-3 rounded-t-lg font-body text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your number"
                    required
                    className="flex-1 bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all"
                  />
                </div>
              </div>

              {showOtp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 4-digit OTP"
                    maxLength={4}
                    required
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant focus:border-primary text-on-surface placeholder:text-outline-variant py-4 px-4 rounded-t-lg transition-all text-center text-xl tracking-[0.5em]"
                  />
                  <p className="text-xs text-on-surface-variant/50 mt-2 text-center">
                    Enter any 4 digits for demo
                  </p>
                </motion.div>
              )}

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary text-on-primary font-label text-sm font-bold uppercase tracking-widest rounded-sm glow-gold hover:shadow-[0_0_30px_rgba(242,202,80,0.5)] transition-all duration-300"
              >
                {showOtp ? "Verify OTP" : "Send OTP"}
              </motion.button>
            </form>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  const statusColors: Record<string, string> = {
    Preparing: "text-amber-400 bg-amber-400/10",
    Ready: "text-blue-400 bg-blue-400/10",
    Delivered: "text-green-400 bg-green-400/10",
  };

  return (
    <>
      <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container/30 flex items-center justify-center">
            <span className="font-headline text-xl text-primary font-bold">
              U
            </span>
          </div>
          <div>
            <h1 className="font-headline text-xl text-on-surface">
              Status Guest
            </h1>
            <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
              +91 {phone}
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-outline-variant/10 mb-8">
          {(["orders", "addresses", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-label text-sm uppercase tracking-widest transition-colors relative ${
                activeTab === tab
                  ? "text-primary"
                  : "text-on-surface/40 hover:text-on-surface"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="profileTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "orders" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="glass rounded-lg p-5 md:p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">
                      {order.id}
                    </p>
                    <p className="font-headline text-sm text-on-surface mt-0.5">
                      {order.date}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full font-label text-[10px] uppercase tracking-widest ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">
                  {order.items.join(", ")}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-label font-bold text-primary">
                    ₹{order.total}
                  </span>
                  {order.status === "Preparing" && (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[10px] font-label uppercase tracking-widest text-amber-400">
                          Preparing
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-outline-variant/30" />
                        <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/30">
                          Ready
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-outline-variant/30" />
                        <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/30">
                          Delivered
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "addresses" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="glass rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    home
                  </span>
                  <div>
                    <p className="font-headline text-sm text-on-surface">Home</p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      123, ABC Society, Vasai West, Maharashtra 401201
                    </p>
                  </div>
                </div>
                <button className="text-on-surface-variant/40 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>
                </button>
              </div>
            </div>
            <button className="w-full glass rounded-lg p-5 flex items-center justify-center gap-2 text-primary font-label text-xs uppercase tracking-widest hover:border-primary/30 transition-all">
              <span className="material-symbols-outlined text-lg">add</span>
              Add New Address
            </button>
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="glass rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  language
                </span>
                <div>
                  <p className="font-headline text-sm text-on-surface">
                    Language
                  </p>
                  <p className="text-xs text-on-surface-variant">English</p>
                </div>
              </div>
              <select className="bg-surface-container-high border border-outline-variant/15 text-on-surface text-sm rounded-lg px-3 py-1.5">
                <option>English</option>
                <option>हिंदी</option>
              </select>
            </div>
            <div className="glass rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  notifications
                </span>
                <div>
                  <p className="font-headline text-sm text-on-surface">
                    Notifications
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Order updates & offers
                  </p>
                </div>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-on-primary rounded-full" />
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full glass rounded-lg p-5 flex items-center justify-center gap-2 text-error font-label text-xs uppercase tracking-widest hover:border-error/30 transition-all"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              Logout
            </button>
          </motion.div>
        )}
      </div>
      <Footer />
    </>
  );
}
