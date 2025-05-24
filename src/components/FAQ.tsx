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
      question: "Web sitesi yaptırmak ne kadar sürer?",
      answer: "Web sitesi projelerinin tamamlanma süresi, projenin karmaşıklığına, sayfa sayısına ve özel gereksinimlere bağlı olarak değişir. Basit bir kurumsal site genellikle 1-2 hafta içinde tamamlanabilirken, daha kapsamlı projeler 4-6 hafta sürebilir. Proje başlangıcında size net bir zaman çizelgesi sunuyoruz."
    },
    {
      question: "Ödeme koşullarınız nelerdir?",
      answer: "Projelerimizde genellikle %40 başlangıç ödemesi, %30 tasarım onayı sonrası ve %30 proje tesliminde olmak üzere üç aşamalı bir ödeme planı uyguluyoruz. Farklı bütçe ve ihtiyaçlara göre esnek ödeme seçenekleri de sunabiliyoruz."
    },
    {
      question: "WhatsApp botu ne işe yarar?",
      answer: "WhatsApp botu, müşterilerinizle 7/24 otomatik iletişim kurmanızı sağlar. Sık sorulan sorulara anında yanıt verebilir, randevu oluşturabilir, sipariş alabilir ve müşteri desteği sağlayabilir. Bu sayede müşteri memnuniyetini artırırken operasyonel yükünüzü azaltabilirsiniz."
    },
    {
      question: "Yaptığınız web sitesi mobil uyumlu olacak mı?",
      answer: "Evet, tüm web sitelerimiz tamamen mobil uyumlu (responsive) olarak tasarlanmaktadır. Günümüzde internet trafiğinin büyük bir kısmı mobil cihazlardan geldiği için, her ekran boyutunda mükemmel görünen ve kullanımı kolay siteler geliştiriyoruz."
    },
    {
      question: "SEO çalışması yapıyor musunuz?",
      answer: "Evet, tüm web sitelerimiz SEO'ya uygun olarak kodlanır ve temel SEO optimizasyonları yapılır. Ayrıca, daha kapsamlı SEO hizmetleri için özel paketlerimiz bulunmaktadır. İçerik optimizasyonu, anahtar kelime araştırması, teknik SEO ve düzenli raporlama ile arama motorlarında üst sıralarda yer almanıza yardımcı oluyoruz."
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