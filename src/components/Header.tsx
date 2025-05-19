"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Nira<span className="text-primary">Digital</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hizmetler" className="text-gray-700 hover:text-primary transition-colors">
            Hizmetler
          </Link>
          <Link href="#neden-biz" className="text-gray-700 hover:text-primary transition-colors">
            Neden Biz?
          </Link>
          <Link href="#calismalar" className="text-gray-700 hover:text-primary transition-colors">
            Uzmanlık Alanlarımız
          </Link>
          <Link href="#iletisim" className="text-gray-700 hover:text-primary transition-colors">
            İletişim
          </Link>
        </nav>
        <button 
          className="block md:hidden text-gray-700" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col py-4">
            <Link 
              href="#hizmetler" 
              className="py-2 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link 
              href="#neden-biz" 
              className="py-2 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Neden Biz?
            </Link>
            <Link 
              href="#calismalar" 
              className="py-2 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Uzmanlık Alanlarımız
            </Link>
            <Link 
              href="#iletisim" 
              className="py-2 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
} 