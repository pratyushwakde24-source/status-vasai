import React from 'react';
import Link from 'next/link';
import { Home, Utensils, Calendar, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 md:hidden">
      <div className="container mx-auto flex justify-around items-center p-2 text-white">
        <Link href="/" className="flex flex-col items-center hover:text-amber-500 transition-colors">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/menu" className="flex flex-col items-center hover:text-amber-500 transition-colors">
          <Utensils className="h-6 w-6" />
          <span className="text-xs">Menu</span>
        </Link>
        <Link href="/bookings" className="flex flex-col items-center hover:text-amber-500 transition-colors">
          <Calendar className="h-6 w-6" />
          <span className="text-xs">Bookings</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center hover:text-amber-500 transition-colors">
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;