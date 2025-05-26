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

  // Mobil menü açıkken body scroll'unu engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);
  
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
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary fixed top-4 right-4 z-50"
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
          className="md:hidden fixed inset-0 bg-white z-40 flex flex-col"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ 
            height: '100vh',
            width: '100vw',
            top: 0,
            left: 0,
            paddingTop: '1rem'
          }}
        >
          {/* Header alanı - mobil menüde logo */}
          <div className="flex justify-start items-center px-6 py-6">
            <Link 
              href="/" 
              className="text-2xl font-bold text-primary flex items-center" 
              style={{ color: '#6482AD' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Webimza</span>
              <span className="inline-block w-2 h-2 rounded-full bg-primary ml-1" style={{ backgroundColor: '#6482AD' }}></span>
            </Link>
          </div>

          {/* Menü içeriği */}
          <nav className="flex-1 flex flex-col justify-start px-6 pt-8">
            <div className="space-y-2">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block text-2xl text-neutral-700 hover:text-primary font-medium transition-colors py-4 px-4 rounded-lg hover:bg-neutral-50"
                    style={{ '--hover-color': '#6482AD' } as React.CSSProperties}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Alt kısım - iletişim butonu */}
          <div className="px-6 pb-8">
            <Link
              href="/iletisim"
              className="block w-full text-center bg-primary text-white font-medium rounded-full py-4 px-8 hover:bg-primary/90 transition-colors"
              style={{ backgroundColor: '#6482AD' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hemen İletişime Geç
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
} 