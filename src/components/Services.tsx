"use client";

import { FaLaptopCode, FaRobot, FaCode, FaInstagram, FaChartLine, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  index: number;
};

function ServiceCard({ icon, title, description, image, index }: ServiceProps) {
  // Her hizmet için özel detaylar
  const serviceDetails: { [key: string]: string[] } = {
    'Web Tasarım ve Geliştirme': [
      'Responsive tasarım ile tüm cihazlarda mükemmel görüntü',
      'SEO uyumlu kodlama ile arama motorlarında üst sıralarda yer alma',
      'Hızlı yükleme süresi ve optimize edilmiş performans',
      'Özelleştirilebilir tema ve bileşenler'
    ],
    'Akıllı İletişim Çözümleri': [
      'WhatsApp Business API entegrasyonu',
      'Yapay zeka destekli chatbot çözümleri',
      'Otomatik müşteri segmentasyonu ve kişiselleştirilmiş mesajlaşma',
      '7/24 kesintisiz müşteri desteği'
    ],
    'Özel Yazılım': [
      'İşletmenize özel tasarlanmış çözümler',
      'Verimlilik artıran iş akışı otomasyonları',
      'Bulut tabanlı yazılım çözümleri',
      'Kullanıcı dostu arayüz ve kolay entegrasyon'
    ],
    'Marka Konumlandırma ve Danışmanlık': [
      'Rakip analizi ve pazar araştırması',
      'Marka kimliği oluşturma ve güçlendirme',
      'Hedef kitle belirleme ve segmentasyon',
      'Uzun vadeli marka stratejisi ve yol haritası'
    ],
    'Sosyal Medya Yönetimi': [
      'Stratejik içerik planlaması ve takvimi',
      'Profesyonel görsel ve video içerik üretimi',
      'Etkileşim yönetimi ve topluluk oluşturma',
      'Detaylı analitik raporlar ve performans takibi'
    ],
    'Dijital Pazarlama': [
      'Google Ads ve sosyal medya reklamları yönetimi',
      'SEO optimizasyonu ve anahtar kelime stratejisi',
      'E-posta pazarlama kampanyaları',
      'Dönüşüm oranı optimizasyonu (CRO)'
    ]
  };

  // Mevcut servis için detayları al
  const details = serviceDetails[title] || [
    'Profesyonel ekibimiz tarafından tasarlanmış özel çözümler',
    'İşletmenizin ihtiyaçlarına özel yapılandırma',
    '7/24 teknik destek ve müşteri hizmetleri',
    'Düzenli güncelleme ve iyileştirmeler'
  ];

  // image parametresini CSS backgroundImage olarak kullanıyoruz
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-neutral/10 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={cardStyle}
    >
      {/* Renk çizgisi */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="flex-1">
        <div className="text-4xl bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{title}</h3>
        <p className="text-primary/70">{description}</p>
      </div>
      
      {/* Aşağıdan yukarı kaydırılan defter sayfası - Sadece hover olunca görünür */}
      <div className="absolute inset-0 origin-bottom bg-white 
                      transform translate-y-full group-hover:translate-y-0
                      transition-transform duration-500 ease-out
                      border-t border-gray-200 shadow-inner
                      flex items-center justify-center p-6">
        <div className="w-full h-full p-4 flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4">{title} Detayları</h3>
          <div className="space-y-3 text-gray-700">
            {details.map((detail, i) => (
              <p key={i} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{detail}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Tasarım ve Geliştirme',
      description: 'Modern, kullanıcı dostu ve profesyonel web siteleri tasarlıyoruz. İhtiyaçlarınıza uygun özelleştirilmiş çözümler sunuyoruz.',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaRobot />,
      title: 'Akıllı İletişim Çözümleri',
      description: 'WhatsApp botları, yapay zeka destekli chatbotlar ve otomatik müşteri etkileşim sistemleri ile 7/24 müşteri desteği sağlıyoruz.',
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaCode />,
      title: 'Özel Yazılım',
      description: 'İşletmenizin ihtiyaçlarına göre özelleştirilmiş yazılım çözümleri üretiyoruz. Verimlilik artıran uygulamalar geliştiriyoruz.',
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaBullseye />,
      title: 'Marka Konumlandırma ve Danışmanlık',
      description: 'Markanızı rakiplerinizden ayıracak stratejiler geliştiriyor, pazardaki konumunuzu güçlendiriyoruz. Profesyonel danışmanlık hizmetimizle fark yaratın.',
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaInstagram />,
      title: 'Sosyal Medya Yönetimi',
      description: 'Sosyal medya hesaplarınızı profesyonelce yönetiyor ve içerik üretiyoruz. Markanızın dijital varlığını güçlendiriyoruz.',
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaChartLine />,
      title: 'Dijital Pazarlama',
      description: 'SEO, reklam yönetimi ve analitik ile dijital pazarlama stratejileri sunuyoruz. Online satışlarınızı ve bilinirliğinizi artırın.',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-gradient-to-b from-neutral to-neutral/60 relative">
      {/* Dekoratif elementler */}
      <div className="hidden md:block absolute top-1/4 left-16 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/4 right-16 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Dijital Çözümler
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Profesyonel <span className="text-secondary">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            İşletmenizi dijital dünyada öne çıkaracak özel tasarlanmış çözümler sunuyoruz.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">Özel Çözüm mü Arıyorsunuz?</h3>
          <p className="text-primary/70 mb-6">
            İhtiyaçlarınıza özel çözümler için ekibimizle iletişime geçin. Size en uygun dijital stratejileri birlikte geliştirelim.
          </p>
          <a 
            href="#iletisim" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Ücretsiz Danışmanlık Alın</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 