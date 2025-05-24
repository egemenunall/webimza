"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const mainNavItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Neden Biz?', href: '/neden-biz' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function ClientNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Scroll durumunu izle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 shadow-sm backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary flex items-center" style={{ color: '#6482AD' }} aria-label="Ana Sayfaya Git">
            <span className="relative z-10">Webimza</span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary ml-1 animate-pulse" style={{ backgroundColor: '#6482AD' }} aria-hidden="true"></span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-primary font-medium transition-colors relative group"
                style={{ '--hover-color': '#6482AD' } as React.CSSProperties}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#6482AD' }}></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary"
            style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Mobil Menüyü Aç/Kapat"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 top-20 bg-white/95 z-40 flex flex-col items-center pt-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center space-y-6 w-full px-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl text-neutral-600 hover:text-primary font-medium transition-colors w-full text-center py-3 border-b border-neutral-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-auto mb-10 bg-primary/10 text-primary font-medium rounded-full px-8 py-3 inline-flex items-center"
            style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}
            aria-label="Mobil Menüyü Kapat"
          >
            <span>Kapat</span>
            <XMarkIcon className="h-5 w-5 ml-2" />
          </button>
        </motion.div>
      )}
    </header>
  );
} 