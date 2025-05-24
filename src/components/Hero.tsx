"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-neutral to-neutral/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 md:pr-8 lg:pr-12 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
              Dijital Dünyaya İmzanızı Atın
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              <span className="text-primary" style={{ color: '#6482AD' }}>Webimza</span> ile <br/>
              dijital dönüşümünüz <br/>
              <span className="relative">
                başlasın
                <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 5.5C39.3333 1.16667 147.8 -4.3 199 10.5" stroke="#6482AD" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 mb-8 max-w-lg mx-auto md:mx-0">
            İşletmenizin ihtiyaçlarına özel geliştirdiğimiz akıllı çözümlerle, büyüme yolculuğunuzda size rehberlik ediyoruz. Hemen teklif alın, farkı birlikte yaratalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#iletisim"
                className="bg-primary hover:bg-secondary text-light font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                style={{ backgroundColor: '#6482AD' }}
                aria-label="Hemen teklif almak için iletişim formuna git"
              >
                <span>Hemen Teklif Al</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              <Link
                href="/hizmetler"
                className="bg-light hover:bg-neutral/30 text-primary font-medium border border-neutral rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                aria-label="Hizmetler sayfasına git"
              >
                <span>Hizmetlerimiz</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Kolaj */}
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto h-[26rem] md:h-[32rem]">
              {/* Masaüstü için 3D efektli dekoratif resimler - yazılar kaldırıldı */}
              <motion.div 
                className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-neutral rounded-lg shadow-xl overflow-hidden z-20"
                initial={{ rotate: -6 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/hero1.png"
                    alt="Web tasarım hizmetleri - profesyonel web siteleri"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="hidden md:block absolute top-20 right-0 w-48 h-56 bg-neutral rounded-lg shadow-xl overflow-hidden z-10"
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/hero2.png"
                    alt="Akıllı iletişim çözümleri - chatbot ve WhatsApp botları"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJhAOGcFmzwgAAAABJRU5ErkJggg=="
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="hidden md:block absolute bottom-0 left-16 w-56 h-44 bg-neutral rounded-lg shadow-xl overflow-hidden z-30"
                initial={{ rotate: 4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/hero3.png"
                    alt="Dijital çözümler - sosyal medya ve pazarlama stratejileri"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJhAOGcFmzwgAAAABJRU5ErkJggg=="
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Mobil için yatay kaydırmalı kart galerisi - Gradyan tamamen kaldırıldı */}
              <div className="md:hidden w-full overflow-x-auto pb-4 snap-x snap-mandatory" aria-label="Hizmet kartları galerisi">
                <div className="flex gap-4 w-max px-4">
                  <div className="w-[280px] h-[420px] snap-center bg-neutral rounded-xl shadow-xl overflow-hidden flex-shrink-0 relative">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/hero1.png"
                        alt="Web tasarım hizmetleri - profesyonel web siteleri"
                        fill
                        sizes="(max-width: 768px) 80vw, 0vw"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-[280px] h-[420px] snap-center bg-neutral rounded-xl shadow-xl overflow-hidden flex-shrink-0 relative">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/hero2.png"
                        alt="Akıllı iletişim çözümleri - chatbot ve WhatsApp botları"
                        fill
                        sizes="(max-width: 768px) 80vw, 0vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJhAOGcFmzwgAAAABJRU5ErkJggg=="
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-[280px] h-[420px] snap-center bg-neutral rounded-xl shadow-xl overflow-hidden flex-shrink-0 relative">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/hero3.png"
                        alt="Dijital çözümler - sosyal medya ve pazarlama stratejileri"
                        fill
                        sizes="(max-width: 768px) 80vw, 0vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJhAOGcFmzwgAAAABJRU5ErkJggg=="
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Mobil için kaydırma indikatörü */}
                <div className="flex justify-center mt-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/70" style={{ backgroundColor: 'rgba(100, 130, 173, 0.7)' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary/40" style={{ backgroundColor: 'rgba(100, 130, 173, 0.4)' }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary/40" style={{ backgroundColor: 'rgba(100, 130, 173, 0.4)' }}></div>
                </div>
              </div>
              
              {/* Dekoratif öğeler */}
              <div className="hidden md:block absolute -top-6 right-20 w-20 h-20 rounded-full bg-secondary/20 z-0" style={{ backgroundColor: 'rgba(127, 161, 195, 0.2)' }} aria-hidden="true"></div>
              <div className="hidden md:block absolute bottom-20 -right-10 w-28 h-28 rounded-full bg-primary/10 z-0" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }} aria-hidden="true"></div>
              <div className="hidden md:block absolute top-40 -left-10 w-16 h-16 rounded-full bg-neutral z-0" aria-hidden="true"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}