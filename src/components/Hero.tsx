"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Hızlı, Akıllı ve Uygun Fiyatlı Dijital Destek
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Web sitesi, chatbot, WhatsApp botu ve sosyal medya yönetimi tek çatı altında.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link 
                href="#iletisim" 
                className="inline-block bg-primary hover:bg-blue-600 text-white font-medium rounded-full px-8 py-3 transition-colors"
              >
                Hemen Teklif Al
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/hero-image.svg"
                alt="Nira Digital"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 