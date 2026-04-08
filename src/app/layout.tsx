import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import CartPanel from "@/components/CartPanel";
import FloatingCartButton from "@/components/FloatingCartButton";

import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Status Vasai — Premium Dining & Lounge Experience",
  description:
    "Vasai's ultimate chill dining experience. Premium restaurant and bar with artisan cocktails, signature dishes, and unforgettable ambience. Book your table now.",
  keywords:
    "Status Vasai, restaurant Vasai, bar Vasai, dining Vasai, biryani, cocktails, nightlife, party venue",
  openGraph: {
    title: "Status Vasai — Premium Dining & Lounge Experience",
    description:
      "Vasai's ultimate chill dining experience. Premium cuisine, artisan cocktails, and cinematic ambience.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-on-surface font-body antialiased">
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
          }}
        />
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <CartPanel />
          <FloatingCartButton />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
