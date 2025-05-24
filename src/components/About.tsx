"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Dekoratif elementler */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" style={{ backgroundColor: 'rgba(100, 130, 173, 0.05)' }} aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full" style={{ backgroundColor: 'rgba(127, 161, 195, 0.05)' }} aria-hidden="true"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
              Biz Kimiz?
            </span>
            <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Genç, <span className="text-primary" style={{ color: '#6482AD' }}>dinamik</span> ve <span className="text-primary" style={{ color: '#6482AD' }}>yenilikçi</span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg mb-8">
                Webimza, genç ve dinamik bir ekipten oluşan bir dijital ajanstır. Yenilikçi bakış açısına sahip ekibimizle, güncel teknolojileri yakından takip ederek işletmelere uygun fiyatlı, hızlı ve yaratıcı çözümler sunuyoruz.
              </p>
              <p className="text-lg mb-8">
                Web sitesi, akıllı iletişim çözümleri ve sosyal medya yönetimi gibi dijital ihtiyaçlarınızda yanınızdayız. Dinamik ekip ruhumuzla enerjik, yaratıcı ve ulaşılabilir bir hizmet anlayışı benimsiyoruz.
              </p>
            </div>
            <ul className="flex flex-wrap gap-4 mt-8 list-none pl-0" aria-label="Hizmet avantajlarımız">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Yaratıcı Çözümler</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Hızlı Teslimat</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Uygun Fiyatlar</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-neutral/10">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000"
                  alt="Webimza ekibi beyin fırtınası yaparken, genç ve dinamik profesyoneller bir masada fikirlerini paylaşıyor"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8eOfOfwAJEANz5OW6zwAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Dinamik Ekibimiz</h3>
                    <p className="text-white/80">Güncel teknolojilerle farklı çözümler</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 