"use client";

import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8" style={{ backgroundColor: '#6482AD' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo ve Açıklama */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-md bg-white flex items-center justify-center shadow-md"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-primary text-xl font-bold" style={{ color: '#6482AD' }}>W</span>
              </motion.div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Webimza
              </span>
            </Link>
            <p className="text-neutral text-center md:text-left">
              Genç profesyoneller tarafından yürütülen, dijital dünyada büyümenize destek olan çözüm ortağınız.
            </p>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://instagram.com/webimza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                aria-label="Instagram"
                style={{ "--hover-text-color": "#6482AD" } as any}
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://facebook.com/webimza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                aria-label="Facebook"
                style={{ "--hover-text-color": "#6482AD" } as any}
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a 
                href="https://r10.net/webimza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                aria-label="R10"
                style={{ "--hover-text-color": "#6482AD" } as any}
              >
                <span className="font-bold text-sm">R10</span>
              </a>
            </div>
          </div>
          
          {/* Sayfalar */}
          <div>
            <h3 className="font-semibold text-xl mb-5 text-center md:text-left">Sayfalar</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <Link href="/" className="text-neutral hover:text-white hover:underline transition-all">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-neutral hover:text-white hover:underline transition-all">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-neutral hover:text-white hover:underline transition-all">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/neden-biz" className="text-neutral hover:text-white hover:underline transition-all">
                  Neden Biz?
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-neutral hover:text-white hover:underline transition-all">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-semibold text-xl mb-5 text-center md:text-left">İletişim</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#7FA1C3' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@webimza.com" className="text-neutral hover:text-white transition-all">
                  info@webimza.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#7FA1C3' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+905538980616" className="text-neutral hover:text-white transition-all">
                  0553 898 06 16
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: '#7FA1C3' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-neutral">
                  İzmir/Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Alt Bilgi */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link href="/kvkk" className="text-neutral hover:text-white text-sm transition-colors">
              KVKK ve Gizlilik Politikası
            </Link>
          </div>
          <p className="text-neutral text-sm">
            &copy; {currentYear} Webimza. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 