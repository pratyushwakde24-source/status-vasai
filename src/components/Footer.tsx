"use client";

import Link from "next/link";
import { Share2, Camera, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-primary-container/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-headline text-lg text-primary-container uppercase tracking-widest mb-4">
              Status Vasai
            </h3>
            <p className="font-body text-sm text-on-surface-variant/60 leading-relaxed mb-4">
              Vasai&apos;s ultimate chill dining experience. Where night vibes
              meet exceptional cuisine.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-on-surface-variant/60 hover:text-primary hover:border-primary/30 transition-all"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-on-surface-variant/60 hover:text-primary hover:border-primary/30 transition-all"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.3em] text-primary-container mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/bookings", label: "Book a Table" },
                { href: "/events", label: "Events & Parties" },
                { href: "/profile", label: "My Account" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-on-surface-variant/50 hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.3em] text-primary-container mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs text-on-surface-variant/50">
                <MapPin size={14} className="text-primary" />
                Near Vasai Fort, Vasai West
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-xs text-on-surface-variant/50 hover:text-on-surface transition-colors"
                >
                  <Phone size={14} className="text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center gap-2 text-xs text-on-surface-variant/50 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={14} className="text-green-500" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-label text-[11px] uppercase tracking-[0.3em] text-primary-container mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-on-surface-variant/50">
                <span className="text-on-surface/70">Mon – Thu:</span> 12 PM –
                11 PM
              </li>
              <li className="text-sm text-on-surface-variant/50">
                <span className="text-on-surface/70">Fri – Sat:</span> 12 PM –
                11:30 PM
              </li>
              <li className="text-sm text-on-surface-variant/50">
                <span className="text-on-surface/70">Sunday:</span> 12 PM –
                11 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-xs text-on-surface-variant/30">
            © 2025 Status Vasai. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-label text-xs text-on-surface-variant/30 hover:text-on-surface-variant/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-label text-xs text-on-surface-variant/30 hover:text-on-surface-variant/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Extra padding for mobile bottom nav */}
      <div className="h-20 md:h-0" />
    </footer>
  );
}
