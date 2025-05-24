"use client";

import { FaCheck, FaBolt, FaHeadset, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

function FeatureCard({ icon, title, description, index }: FeatureProps) {
  return (
    <motion.div 
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        <div className="text-xl">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function WhyUs() {
  const features = [
    {
      icon: <FaCheck />,
      title: 'Uygun Fiyat',
      description: 'Genç ve dinamik yapımız sayesinde rakiplerimize göre çok daha uygun fiyatlarla profesyonel hizmet sağlıyoruz.',
    },
    {
      icon: <FaBolt />,
      title: 'Hızlı Teslimat',
      description: 'Projelerinizi söz verdiğimiz tarihlerde, genellikle beklentilerinizden daha hızlı teslim ediyoruz.',
    },
    {
      icon: <FaHeadset />,
      title: 'Kişisel Destek',
      description: 'Her müşterimize özel bir temsilci atayarak 7/24 destek sunuyoruz.',
    },
    {
      icon: <FaArrowUp />,
      title: 'Ölçeklenebilirlik',
      description: 'İşletmeniz büyüdükçe çözümlerimiz de ihtiyaçlarınızla birlikte büyür ve gelişir.',
    },
  ];

  return (
    <section id="neden-biz" className="py-20 bg-gradient-to-br from-primary/5 to-white relative overflow-hidden">
      {/* Dekoratif elementler */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-light/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              Neden Biz?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Farkımızı <span className="text-primary">keşfedin</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Genç ve dinamik ekibimizle dijital çözümlerinizi uygun fiyata, hızlı ve profesyonel bir şekilde gerçekleştiriyoruz.
            </p>
            
            <motion.div 
              className="max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral/10 p-6 md:p-0 mt-6 md:mt-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative p-6 pb-0 md:pb-0 md:pt-8">
                <div className="h-2 w-12 bg-primary rounded-full absolute top-0 left-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Metodolojimiz</h3>
                <p className="text-gray-600 mb-4">Başarılı projelerimizin temelinde yatan stratejik yaklaşımımız:</p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <span className="font-semibold">1</span>
                    </div>
                    <span className="text-gray-700 font-medium">İhtiyaç Analizi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <span className="font-semibold">2</span>
                    </div>
                    <span className="text-gray-700 font-medium">Stratejik Planlama</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      <span className="font-semibold">3</span>
                    </div>
                    <span className="text-gray-700 font-medium">Çevik Geliştirme</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between px-6 py-4 mt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="text-primary">
                    <FaCheck />
                  </div>
                  <span className="text-sm text-gray-600">Ölçülebilir Sonuçlar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-primary">
                    <FaCheck />
                  </div>
                  <span className="text-sm text-gray-600">Şeffaf İletişim</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white rounded-2xl shadow-xl p-4 border border-neutral/10">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 