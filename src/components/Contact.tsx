"use client";

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada gerçek bir form gönderimi yapılabilir
    // Şimdilik sadece başarılı olduğunu simüle ediyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Form başarılı mesajını 5 saniye göster
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-light to-white relative overflow-hidden">
      {/* Dekoratif elementler */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/5 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-neutral/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Projeniz İçin <span className="text-primary">Bize Ulaşın</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital çözümler için hemen iletişime geçin, size özel teklif oluşturalım.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-5">
              {/* İletişim Bilgileri */}
              <div className="md:col-span-2 bg-primary text-white p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-6">İletişim Bilgilerimiz</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white/80 mb-1">E-posta</h4>
                      <a href="mailto:info@webimza.com" className="text-white hover:text-neutral transition-colors">
                        info@webimza.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white/80 mb-1">Telefon</h4>
                      <a href="tel:+905538980616" className="text-white hover:text-neutral transition-colors">
                        0553 898 06 16
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/80 mb-1">WhatsApp</h4>
                      <a href="https://wa.me/905538980616" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral transition-colors">
                        WhatsApp ile Mesaj Gönder
                      </a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-12 pt-6 border-t border-white/20">
                  <h4 className="font-medium mb-4">Sosyal Medya</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/webimza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://facebook.com/webimza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://r10.net/webimza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-all"
                    >
                      <span className="font-bold text-sm">R10</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3 p-8 md:p-10">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-3xl mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Teşekkürler!</h3>
                    <p className="text-gray-600 text-lg">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Bize Yazın</h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="0553 898 06 16"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none bg-white"
                      >
                        <option value="">Lütfen seçin</option>
                        <option value="web-tasarim">Web Tasarımı</option>
                        <option value="whatsapp-bot">WhatsApp Botu</option>
                        <option value="chatbot">AI Chatbot</option>
                        <option value="ozel-yazilim">Özel Yazılım</option>
                        <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Projeniz hakkında kısa bilgi verin..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-secondary text-white font-medium rounded-lg px-5 py-3 shadow-md hover:shadow-lg transition-all duration-200 disabled:bg-gray-400 disabled:shadow-none flex items-center justify-center"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          Mesajımı Gönder
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* WhatsApp Butonu */}
      <motion.a 
        href="https://wa.me/905538980616" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full border-2 border-white shadow-xl hover:bg-secondary transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="WhatsApp ile İletişim"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </section>
  );
} 