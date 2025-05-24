"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-primary overflow-hidden shadow-xl" style={{ backgroundColor: '#6482AD' }}>
        <div className="px-6 py-10 sm:px-10 sm:py-12 md:py-16 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Bize Ulaşın! Hadi Tanışalım
            </h2>
            <p className="text-white/80 text-lg">
              Sizin için buradayız. Sorularınızı yanıtlamak ve projelerinizde size destek olmak için her zaman yanınızdayız.
            </p>
          </div>
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/iletisim" 
                className="inline-block rounded-full bg-white py-4 px-8 text-lg font-medium text-primary shadow-md hover:shadow-lg transition-all duration-200"
                style={{ color: '#6482AD' }}
              >
                İletişime Geçin
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 