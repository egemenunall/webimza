"use client";

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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
    <section id="iletisim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bize Ulaşın</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital çözümler için hemen iletişime geçin, size özel teklif oluşturalım.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teşekkürler!</h3>
                  <p className="text-gray-600">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="0500 000 00 00"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
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
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Projeniz hakkında kısa bilgi verin..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-medium rounded-lg px-5 py-3 transition-colors disabled:bg-blue-400"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Butonu */}
      <a 
        href="https://wa.me/905000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="WhatsApp ile İletişim"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
} 