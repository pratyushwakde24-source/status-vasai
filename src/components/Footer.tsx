import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} The Status Vasai. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-amber-500"><Facebook /></a>
          <a href="#" className="text-gray-400 hover:text-amber-500"><Instagram /></a>
          <a href="#" className="text-gray-400 hover:text-amber-500"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;