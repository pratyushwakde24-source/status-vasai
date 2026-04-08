'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'MENU', href: '/menu' },
    { name: 'BOOKINGS', href: '/bookings' },
    { name: 'EVENTS', href: '/events' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-charcoal/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4 text-soft-white">
        <Link href="/" className="text-2xl font-serif font-bold text-brand-gold">
          Status Vasai
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group tracking-widest text-sm font-sans uppercase">
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:block bg-brand-gold text-black hover:bg-yellow-500 transition-colors">
            Book Table
          </Button>
          {/* Add Cart Icon Here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;