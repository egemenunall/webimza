"use client";

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Nira<span className="text-primary">Digital</span>
            </Link>
            <p className="mt-2 text-gray-400 text-sm">
              Dijital dünyada büyümenize destek oluyoruz.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Anasayfa
            </Link>
            <Link href="#hizmetler" className="text-gray-300 hover:text-white transition-colors">
              Hizmetler
            </Link>
            <Link href="#neden-biz" className="text-gray-300 hover:text-white transition-colors">
              Neden Biz?
            </Link>
            <Link href="#iletisim" className="text-gray-300 hover:text-white transition-colors">
              İletişim
            </Link>
          </nav>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/niradigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Nira Digital. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 