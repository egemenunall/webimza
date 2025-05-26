"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Webimza nedir?",
      answer: "Webimza, küçük ve orta ölçekli işletmelere özel, uygun maliyetli dijital çözümler sunan bir dijitalleştirme şirketidir. Web sitesi tasarımı, WhatsApp botu, sosyal medya yönetimi ve daha fazlasını sunar."
    },
    {
      question: "Web sitesi hizmetiniz neleri kapsıyor?",
      answer: "Webimza'dan alacağınız web sitesi hizmeti; mobil uyumlu tasarım, hızlı yüklenme, temel SEO ayarları, işletme bilgileri entegrasyonu ve 1 yıl teknik destek içerir."
    },
    {
      question: "WhatsApp botu nedir, ne işe yarar?",
      answer: "WhatsApp botu, müşterilerinize otomatik olarak yanıt veren bir sistemdir. Sık sorulan soruları yanıtlar, ürün bilgisi verir, hatta rezervasyon ya da sipariş alabilir."
    },
    {
      question: "Sosyal medya yönetimi hizmeti veriyor musunuz?",
      answer: "Evet. İçerik planlama, görsel tasarım, haftalık/aylık paylaşım ve reklam yönetimi hizmetleri sunuyoruz."
    },
    {
      question: "Hizmetlerinizin fiyatları nedir?",
      answer: "Hizmet fiyatlarımız, işletmenin ihtiyacına göre değişir. Bütçenize uygun teklifler sunmak için ücretsiz ön görüşme yapıyoruz."
    },
    {
      question: "Web sitesi teslim süresi ne kadar?",
      answer: "Standart bir web sitesi genellikle 5-7 iş günü içinde teslim edilir. Ekstra özellikler istenirse süre uzayabilir."
    },
    {
      question: "Teknik destek sağlıyor musunuz?",
      answer: "Evet. Teslim sonrası 1 yıl boyunca ücretsiz teknik destek sağlıyoruz."
    },
    {
      question: "Sadece yerel esnafa mı hizmet veriyorsunuz?",
      answer: "Hayır. Türkiye'nin her yerindeki işletmelere dijital çözümler sunuyoruz."
    },
    {
      question: "Mevcut web sitemi geliştirebilir misiniz?",
      answer: "Evet. Var olan web sitenizi güncelleyebilir, hızlandırabilir ve daha profesyonel hale getirebiliriz."
    }
  ];

  return (
    <section className="py-16 bg-neutral/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4"
            style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Merak Edilenler
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            style={{ color: '#6482AD' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sıkça Sorulan Sorular
          </motion.h2>
          <motion.p 
            className="text-primary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Müşterilerimizin en çok merak ettiği soruları yanıtladık. Başka sorularınız varsa, iletişim formundan bize ulaşabilirsiniz.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                className={`w-full text-left p-5 rounded-lg shadow-md flex justify-between items-center ${
                  activeIndex === index 
                  ? 'bg-primary text-white' 
                  : 'bg-white hover:bg-neutral/20 text-primary'
                }`}
                style={{ backgroundColor: activeIndex === index ? '#6482AD' : '' }}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeIndex === index && (
                <motion.div 
                  className="bg-white p-5 rounded-b-lg shadow-md mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-primary/80">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 