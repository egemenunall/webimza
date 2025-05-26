"use client";

import Link from 'next/link';
// import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [viewHeight, setViewHeight] = useState("100vh");

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

  // Mobil menü açıkken body'nin scrollunu devre dışı bırak
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Ekran yüksekliğini al ve sabit tut
      setViewHeight(`${window.innerHeight}px`);
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Webimza Ana Sayfaya Dön">
          <motion.div 
            className="w-9 h-9 rounded-md bg-primary flex items-center justify-center"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: '#6482AD' }}
            aria-hidden="true"
          >
            <span className="text-white text-lg font-bold">W</span>
          </motion.div>
          <span className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-primary'} tracking-tight`} style={{ color: '#6482AD' }}>
            Webimza
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-1" aria-label="Ana Menü">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
            style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
          >
            Anasayfa
          </Link>
          <Link 
            href="/hizmetler" 
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
            style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
          >
            Hizmetler
          </Link>
          <Link 
            href="/hakkimizda" 
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
            style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
          >
            Hakkımızda
          </Link>
          <Link 
            href="/neden-biz" 
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
            style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
          >
            Neden Biz?
          </Link>
          <Link 
            href="/iletisim" 
            className="px-4 py-2 rounded-full bg-primary text-white hover:bg-secondary transition-all shadow-md"
            style={{ backgroundColor: '#6482AD', '--hover-bg-color': '#7FA1C3' } as CSSProperties}
          >
            İletişim
          </Link>
        </nav>
        
        <button 
          className="block md:hidden p-2.5 rounded-full bg-primary text-white shadow-md z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ backgroundColor: '#6482AD' }}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 w-full bg-white z-40 md:hidden"
          id="mobile-menu"
          aria-label="Mobil Menü"
          style={{ 
            height: viewHeight,
            position: 'fixed',
            overflowY: 'auto',
            paddingTop: '6rem',
            paddingBottom: '2rem',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}
        >
          <nav className="flex flex-col p-4 space-y-4" aria-label="Mobil Ana Menü">
            <Link 
              href="/" 
              className="py-4 px-4 rounded-md bg-neutral/5 hover:bg-primary hover:text-white transition-all flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-lg font-medium">Anasayfa</span>
            </Link>
            <Link 
              href="/hizmetler" 
              className="py-4 px-4 rounded-md bg-neutral/5 hover:bg-primary hover:text-white transition-all flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-lg font-medium">Hizmetler</span>
            </Link>
            <Link 
              href="/hakkimizda" 
              className="py-4 px-4 rounded-md bg-neutral/5 hover:bg-primary hover:text-white transition-all flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-lg font-medium">Hakkımızda</span>
            </Link>
            <Link 
              href="/neden-biz" 
              className="py-4 px-4 rounded-md bg-neutral/5 hover:bg-primary hover:text-white transition-all flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ '--hover-bg-color': '#6482AD' } as CSSProperties}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg font-medium">Neden Biz?</span>
            </Link>
            <Link 
              href="/iletisim" 
              className="py-4 px-4 rounded-md bg-primary text-white hover:bg-secondary transition-all flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ backgroundColor: '#6482AD', '--hover-bg-color': '#7FA1C3' } as CSSProperties}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-lg font-medium">İletişim</span>
            </Link>
            
            <div className="pt-8 flex justify-center">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-neutral/10 text-gray-600 rounded-full p-3"
                aria-label="Menüyü kapat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 