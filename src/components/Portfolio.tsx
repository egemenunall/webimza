"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Proje tipi tanımı
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export default function Portfolio() {
  // Uzmanlık alanları
  const projects: Project[] = [
    {
      id: 1,
      title: "Kurumsal Web Sitesi",
      category: "Web Tasarımı",
      description: "İşletmenizi en iyi şekilde yansıtan, müşterilerinizin sizi kolayca bulmasını sağlayan modern ve hızlı web siteleri.",
      tags: ["Responsive", "Hızlı Yükleme", "SEO Dostu"]
    },
    {
      id: 2,
      title: "Özelleştirilmiş Chatbot",
      category: "AI Chatbot",
      description: "Yapay zeka destekli, müşteri hizmetlerinizi otomatikleştiren ve 7/24 hizmet sunan akıllı chatbot çözümleri.",
      tags: ["Yapay Zeka", "Kesintisiz Destek", "Kolay Entegrasyon"]
    },
    {
      id: 3,
      title: "İşletme WhatsApp Botu",
      category: "WhatsApp Botları",
      description: "Müşteri sorularını otomatik yanıtlayan, sipariş ve randevu yönetimini kolaylaştıran WhatsApp çözümleri.",
      tags: ["Otomatik Yanıt", "Ürün Kataloğu", "Sipariş Takibi"]
    },
    {
      id: 4,
      title: "E-Ticaret Platformu",
      category: "Özel Yazılım",
      description: "İşletmenize özel, müşteri deneyimini ön planda tutan, kolay yönetilebilir e-ticaret platformları.",
      tags: ["Güvenli Ödeme", "Envanter Yönetimi", "Mobil Uyumlu"]
    },
    {
      id: 5,
      title: "Sosyal Medya Yönetimi",
      category: "Sosyal Medya Yönetimi",
      description: "Markanızın sosyal medya varlığını güçlendiren, etkileşimi artıran ve satışları destekleyen profesyonel yönetim.",
      tags: ["Stratejik İçerik", "Hedef Kitle Analizi", "Etkileşim Artırma"]
    },
    {
      id: 6,
      title: "SEO ve Dijital Pazarlama",
      category: "Dijital Pazarlama",
      description: "Web sitenizin arama motorlarında üst sıralarda yer almasını sağlayan, ziyaretçi trafiğini artıran çözümler.",
      tags: ["Google Sıralaması", "İçerik Stratejisi", "Dönüşüm Optimizasyonu"]
    }
  ];

  // Filter state
  const [filter, setFilter] = useState('all');

  // Filtered projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Tüm kategorileri projelerin içinden çıkarıyoruz
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Detay modalı için state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="calismalar" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizin dijital dünyada öne çıkmasını sağlayacak profesyonel çözümler sunuyoruz.
          </p>
        </motion.div>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Tüm Hizmetler' : category}
            </motion.button>
          ))}
        </div>

        {/* Projeler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/portfolio-placeholder.svg"
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detay Modalı */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/portfolio-placeholder.svg"
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="block text-sm text-primary font-semibold mb-1">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Sunduğumuz Avantajlar</h4>
                  <p className="text-gray-600 mb-4">
                    Sizin için özel olarak tasarlanmış, en güncel teknolojileri kullanan ve işletmenizi bir adım öne taşıyacak çözümler sunuyoruz.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#iletisim" 
                    className="inline-block mt-2 text-primary hover:text-blue-700 font-medium"
                  >
                    Detaylı Bilgi Alın →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 