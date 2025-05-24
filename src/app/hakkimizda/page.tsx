import Footer from "@/components/Footer";
import About from "@/components/About";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webimza Hakkımızda | Biz Kimiz? Tarihçemiz ve Vizyonumuz",
  description: "Webimza dijital ajansı hakkında bilgi edinin. Genç ve dinamik ekibimiz, tarihçemiz, vizyonumuz, misyonumuz ve çalışma metodolojimizi keşfedin.",
  alternates: {
    canonical: "https://webimza.com/hakkimizda",
  },
  openGraph: {
    title: "Webimza Hakkımızda | Biz Kimiz? Tarihçemiz ve Vizyonumuz",
    description: "Webimza dijital ajansı hakkında bilgi edinin. Genç ve dinamik ekibimiz, tarihçemiz, vizyonumuz, misyonumuz ve çalışma metodolojimizi keşfedin.",
    url: "https://webimza.com/hakkimizda",
    siteName: "Webimza",
    locale: "tr_TR",
    type: "website",
  }
};

export default function HakkimizdaPage() {
  return (
    <>
      <main id="main-content" className="pt-28">
        <h1 className="sr-only">Webimza Hakkında - Tarihçemiz, Vizyonumuz ve Değerlerimiz</h1>
        
        <section id="about-section" aria-labelledby="about-heading">
          <About />
        </section>
        
        {/* Tarihçemiz */}
        <section id="history-section" className="py-16 bg-neutral/10" aria-labelledby="history-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
                Tarihçemiz
              </span>
              <h2 id="history-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nasıl <span className="text-primary" style={{ color: '#6482AD' }}>Başladık</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Yolculuğumuzu, dijital dünyada işletmelere yardımcı olmak ve teknolojik çözümlerle fark yaratmak vizyonuyla başlattık.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                      <span className="font-semibold">01</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Kuruluş Aşaması</h3>
                  </div>
                  <p className="text-gray-600 ml-12">
                    2020 yılında, teknoloji tutkunları tarafından kurularak, işletmelere uygun maliyetli dijital çözümler sunmaya başladık.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                      <span className="font-semibold">02</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Büyüme Dönemi</h3>
                  </div>
                  <p className="text-gray-600 ml-12">
                    İlk projelerimizin başarısı, müşteri tabanımızı genişletmemize ve hizmet yelpazemizi büyütmemize olanak sağladı.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }} aria-hidden="true">
                      <span className="font-semibold">03</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Bugün</h3>
                  </div>
                  <p className="text-gray-600 ml-12">
                    Şu anda, en son teknolojileri kullanan ve müşterilerimize özel çözümler sunan güçlü bir ekip olarak çalışmalarımıza devam ediyoruz.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1605143185675-a6ca8652e545?w=800"
                    alt="Webimza gelişim süreci - ekibimiz bilgisayar başında çalışırken"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="w-full object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJhAOGcFmzwgAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <p className="text-white/80 text-lg">50+ Tamamlanan proje ve büyüyen portföyümüzle, müşterilerimize değer katmaya devam ediyoruz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vizyon & Misyon */}
        <section id="vision-mission-section" className="py-16 bg-white" aria-labelledby="vision-mission-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
                Vizyonumuz & Misyonumuz
              </span>
              <h2 id="vision-mission-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Bizi <span className="text-primary" style={{ color: '#6482AD' }}>Motive Eden</span> Değerler
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Her gün bizi ileriye taşıyan ve müşterilerimize en iyi hizmeti sunmamızı sağlayan temel prensiplere inanıyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              {/* Vizyon */}
              <div className="bg-neutral/5 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }} aria-hidden="true">
                  <svg className="w-8 h-8 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 mb-4">
                  Dijital dünyada küçük ve orta ölçekli işletmelere güç veren, erişilebilir teknoloji çözümleriyle fark yaratan öncü bir teknoloji şirketi olmak.
                </p>
                <p className="text-gray-600">
                  İşletmelerin dijital dönüşüm süreçlerini kolaylaştırarak, büyüme ve başarılarına katkıda bulunmayı hedefliyoruz.
                </p>
              </div>
              
              {/* Misyon */}
              <div className="bg-neutral/5 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }} aria-hidden="true">
                  <svg className="w-8 h-8 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Misyonumuz</h3>
                <p className="text-gray-600 mb-4">
                  Müşterilerimizin ihtiyaçlarını anlayarak, yenilikçi, kullanıcı dostu ve etkili dijital çözümler sunmak. Teknolojiyi karmaşıklıktan arındırarak, her işletmenin erişebileceği hale getirmek.
                </p>
                <p className="text-gray-600">
                  Her projede müşteri memnuniyetini en üst düzeyde tutmak ve uzun vadeli iş ortaklıkları geliştirmek.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Çalışma Metodolojimiz */}
        <section id="methodology-section" className="py-16 bg-neutral/10" aria-labelledby="methodology-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
                Metodolojimiz
              </span>
              <h2 id="methodology-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nasıl <span className="text-primary" style={{ color: '#6482AD' }}>Çalışıyoruz</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Projelerinizi hayata geçirirken, verimliliği ve kaliteyi ön planda tutan sistematik bir yaklaşım izliyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#6482AD' }} aria-hidden="true">1</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mt-4 mb-3">Keşif ve Analiz</h3>
                <p className="text-gray-600 text-center">
                  İhtiyaçlarınızı anlamak için detaylı görüşmeler yapar, mevcut durumunuzu analiz ederiz.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#6482AD' }} aria-hidden="true">2</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mt-4 mb-3">Planlama ve Tasarım</h3>
                <p className="text-gray-600 text-center">
                  Çözüm stratejisini belirler, projenin ayrıntılı planını oluşturur ve görsel tasarımları hazırlarız.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#6482AD' }} aria-hidden="true">3</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mt-4 mb-3">Geliştirme ve Test</h3>
                <p className="text-gray-600 text-center">
                  En uygun teknolojileri kullanarak çözümü geliştirir, kapsamlı testlerle kaliteyi garanti ederiz.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#6482AD' }} aria-hidden="true">4</div>
                <h3 className="text-xl font-bold text-gray-800 text-center mt-4 mb-3">Teslimat ve Destek</h3>
                <p className="text-gray-600 text-center">
                  Projeyi teslim eder, kullanım eğitimini verir ve sürekli teknik destek hizmeti sunarız.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ekstra İçerik: Değerlerimiz */}
        <section id="values-section" className="py-16 bg-white" aria-labelledby="values-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
                Değerlerimiz
              </span>
              <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Bizi <span className="text-primary" style={{ color: '#6482AD' }}>Biz</span> Yapan İlkelerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Her projemizde benimsediğimiz temel değerlerimiz, müşterilerimize en iyi hizmeti sunmamızı sağlıyor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Değer 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary" style={{ borderColor: '#6482AD' }}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }}>
                  <svg className="w-7 h-7 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Güven</h3>
                <p className="text-gray-600">
                  Müşterilerimizle güvene dayalı, şeffaf ve dürüst bir iletişim kuruyoruz.
                </p>
              </div>
              
              {/* Değer 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary" style={{ borderColor: '#6482AD' }}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }}>
                  <svg className="w-7 h-7 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hız</h3>
                <p className="text-gray-600">
                  Projelerinizi hızlı ve zamanında teslim ederek rekabet avantajı sağlıyoruz.
                </p>
              </div>
              
              {/* Değer 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary" style={{ borderColor: '#6482AD' }}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }}>
                  <svg className="w-7 h-7 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Yenilikçilik</h3>
                <p className="text-gray-600">
                  Güncel teknolojileri ve trendleri takip ederek, yenilikçi çözümler sunuyoruz.
                </p>
              </div>
              
              {/* Değer 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary" style={{ borderColor: '#6482AD' }}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)' }}>
                  <svg className="w-7 h-7 text-primary" style={{ color: '#6482AD' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">İşbirliği</h3>
                <p className="text-gray-600">
                  Müşterilerimizle yakın işbirliği içinde çalışarak, beklentileri tam olarak karşılıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="cta-section">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </>
  );
} 