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
      className="flex gap-4 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="text-primary text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const features = [
    {
      icon: <FaCheck />,
      title: 'Uygun Fiyat',
      description: 'Rakiplerimize göre çok daha uygun fiyatlarla profesyonel hizmet sağlıyoruz.',
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
    <section id="neden-biz" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Neden Biz?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital çözüm ortağınız olarak size sunduğumuz avantajlar.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="p-4 md:p-8 w-full">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 