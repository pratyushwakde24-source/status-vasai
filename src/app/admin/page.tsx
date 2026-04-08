"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Footer from "@/components/Footer";

type ViewType = "orders" | "bookings";

export default function AdminDashboard() {
  const [view, setView] = useState<ViewType>("orders");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orders, setOrders] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [ordersRes, bookingsRes] = await Promise.all([
        fetch("/api/order").catch(() => null),
        fetch("/api/booking").catch(() => null),
      ]);

      if (ordersRes?.ok) {
        const o = await ordersRes.json();
        setOrders(o.data || []);
      }
      if (bookingsRes?.ok) {
        const b = await bookingsRes.json();
        setBookings(b.data || []);
      }
    } catch (_error) {
      toast.error("Failed to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-label text-[11px] uppercase tracking-[0.4em] text-primary-container mb-3">
              Management
            </p>
            <h1 className="font-headline text-3xl md:text-5xl text-on-surface">
              Admin <span className="text-gold-gradient">Dashboard</span>
            </h1>
          </motion.div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => setView("orders")}
              className={`px-6 py-2.5 rounded-full font-label text-xs uppercase tracking-widest transition-all ${
                view === "orders"
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                  : "bg-surface-container-high text-on-surface border border-outline-variant/20 hover:border-primary/40"
              }`}
            >
              Orders ({orders.length})
            </button>
            <button
              onClick={() => setView("bookings")}
              className={`px-6 py-2.5 rounded-full font-label text-xs uppercase tracking-widest transition-all ${
                view === "bookings"
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                  : "bg-surface-container-high text-on-surface border border-outline-variant/20 hover:border-primary/40"
              }`}
            >
              Bookings ({bookings.length})
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {view === "orders" && (
              <>
                {orders.length === 0 ? (
                  <p className="text-center text-on-surface-variant py-20 bg-surface-container-low rounded-xl border border-outline-variant/10">
                    No orders found.
                  </p>
                ) : (
                  orders.map((order) => (
                    <div
                      key={order._id}
                      className="glass rounded-xl p-6 border border-outline-variant/20 flex flex-col md:flex-row gap-6 justify-between items-start"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-headline text-lg font-bold text-on-surface">
                            {order.orderId}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-on-surface-variant font-medium mb-1">
                          {order.customerDetails.name} • {order.customerDetails.phone}
                        </p>
                        <p className="text-xs text-on-surface-variant/70 mb-4 uppercase tracking-wider">
                          Type: {order.customerDetails.type}
                        </p>
                        
                        <div className="space-y-1">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {order.items.map((item: any, i: number) => (
                            <p key={i} className="text-sm text-on-surface">
                              <span className="text-on-surface-variant w-6 inline-block">{item.quantity}x</span> 
                              {item.name}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Total</p>
                        <p className="font-headline text-2xl text-primary font-bold">₹{order.total}</p>
                        <p className="text-[10px] text-on-surface-variant/50 mt-2">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {view === "bookings" && (
              <>
                {bookings.length === 0 ? (
                  <p className="text-center text-on-surface-variant py-20 bg-surface-container-low rounded-xl border border-outline-variant/10">
                    No bookings found.
                  </p>
                ) : (
                  bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="glass rounded-xl p-6 border border-outline-variant/20 flex flex-col md:flex-row gap-6 justify-between items-center"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-headline text-lg text-on-surface">
                            {booking.name}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-secondary-container/10 text-secondary-container border border-secondary-container/20">
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-on-surface-variant mb-3">
                          {booking.phone}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs font-label uppercase tracking-wider text-on-surface-variant/80">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">calendar_month</span> {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span> {booking.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">group</span> {booking.guests} Guests
                          </span>
                          {booking.occasion && booking.occasion !== "None" && (
                            <span className="text-primary border border-primary/30 px-2 py-0.5 rounded-sm bg-primary/5">
                              {booking.occasion}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right flex flex-col items-end">
                        <button className="px-5 py-2 bg-surface-container border border-outline-variant/30 text-on-surface text-xs tracking-widest uppercase rounded hover:bg-surface-container-high transition-colors">
                          Manage
                        </button>
                        <p className="text-[10px] text-on-surface-variant/50 mt-4">
                          Booked on {new Date(booking.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
