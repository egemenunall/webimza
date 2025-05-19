"use client";

import { FaLaptopCode, FaWhatsapp, FaRobot, FaCode, FaInstagram, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

function ServiceCard({ icon, title, description, index }: ServiceProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Tasarımı',
      description: 'Küçük işletmelere özel uygun fiyatlı ve hızlı web tasarım çözümleri.',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp Botları',
      description: 'Müşteri mesajlarını otomatik yanıtlayan ve iş süreçlerinizi hızlandıran botlar.',
    },
    {
      icon: <FaRobot />,
      title: 'AI Chatbotlar',
      description: 'Yapay zeka destekli, web sitenize entegre edilebilen akıllı sohbet sistemleri.',
    },
    {
      icon: <FaCode />,
      title: 'Özel Yazılım',
      description: 'İşletmenizin ihtiyaçlarına özel yazılım geliştirme ve entegrasyon hizmetleri.',
    },
    {
      icon: <FaInstagram />,
      title: 'Sosyal Medya Yönetimi',
      description: 'Sosyal medya hesaplarınızın profesyonel yönetimi ve içerik tasarımı.',
    },
    {
      icon: <FaChartLine />,
      title: 'Dijital Pazarlama',
      description: 'SEO, Google Ads ve sosyal medya reklamları ile işletmenizi büyütün.',
    },
  ];

  return (
    <section id="hizmetler" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital dünyadaki varlığınızı güçlendirmek için ihtiyacınız olan her şey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 