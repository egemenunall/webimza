import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Webimza - Dijital Dünyada Profesyonel Çözümler',
  description: 'Web tasarım, dijital pazarlama ve yazılım geliştirme konularında profesyonel içerikler bulabileceğiniz Webimza blog sayfası',
  keywords: 'web tasarım, dijital pazarlama, seo, yazılım geliştirme, responsive tasarım, mobil uyumluluk',
  authors: [{ name: 'Webimza Ekibi' }],
  openGraph: {
    title: 'Blog | Webimza - Dijital Dünyada Profesyonel Çözümler',
    description: 'Web tasarım, dijital pazarlama ve yazılım geliştirme konularında profesyonel içerikler',
    url: 'https://www.webimza.com/blog',
    siteName: 'Webimza',
    locale: 'tr_TR',
    type: 'website',
  },
}

// Blog yazıları için veri yapısı
const blogPosts = [
  {
    id: 1,
    title: 'Responsive Tasarımın İşletmeniz İçin Önemi',
    slug: 'responsive-tasarimin-isletmeniz-icin-onemi',
    excerpt: 'Günümüzde mobil cihazların yaygınlaşmasıyla responsive tasarımın işletmeniz için neden kritik olduğunu öğrenin.',
    date: '12 Mayıs 2023',
    author: 'Mehmet Yılmaz',
    category: 'Web Tasarım',
    readTime: '5 dakika'
  },
  {
    id: 2,
    title: 'SEO Optimizasyonu: Dijital Görünürlüğünüzü Artırmanın Yolları',
    slug: 'seo-optimizasyonu-dijital-gorunurlugunuzu-artirmanin-yollari',
    excerpt: 'Arama motorlarında üst sıralarda yer almanın püf noktaları ve SEO stratejileri hakkında kapsamlı rehber.',
    date: '24 Haziran 2023',
    author: 'Ayşe Demir',
    category: 'Dijital Pazarlama',
    readTime: '8 dakika'
  },
  {
    id: 3,
    title: 'WhatsApp Business API ile Müşteri İletişimini Güçlendirme',
    slug: 'whatsapp-business-api-ile-musteri-iletisimini-guclendirme',
    excerpt: 'WhatsApp Business API kullanarak müşteri iletişiminizi nasıl otomatikleştirebilir ve verimli hale getirebilirsiniz?',
    date: '10 Temmuz 2023',
    author: 'Emre Kaya',
    category: 'Dijital Çözümler',
    readTime: '6 dakika'
  },
  {
    id: 4,
    title: 'E-ticaret Siteleri İçin Dönüşüm Optimizasyonu',
    slug: 'e-ticaret-siteleri-icin-donusum-optimizasyonu',
    excerpt: 'E-ticaret sitenizin dönüşüm oranlarını artırmak için uygulamanız gereken stratejiler ve en iyi uygulamalar.',
    date: '15 Ağustos 2023',
    author: 'Zeynep Öztürk',
    category: 'E-ticaret',
    readTime: '7 dakika'
  },
  {
    id: 5,
    title: 'Web Sitenizin Yükleme Hızını Artırmanın 10 Yolu',
    slug: 'web-sitenizin-yukleme-hizini-artirmanin-10-yolu',
    excerpt: 'Yavaş yüklenen web siteleri müşteri kaybına neden olabilir. İşte web sitenizin performansını artıracak pratik ipuçları.',
    date: '3 Eylül 2023',
    author: 'Ali Yıldız',
    category: 'Web Performans',
    readTime: '9 dakika'
  }
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>
            Webimza Blog
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6" style={{ color: '#6482AD' }}>
            Dijital Dünyada Son Gelişmeler
          </h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Web tasarım, dijital pazarlama ve yazılım geliştirme konularında güncel bilgiler, ipuçları ve en iyi uygulamalar.
          </p>
        </div>

        {/* Öne Çıkan Blog Yazısı */}
        <div className="mb-16">
          <div className="bg-light rounded-2xl shadow-xl overflow-hidden p-6 lg:p-10">
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block mb-4" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>Web Tasarım</div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>
              Responsive Tasarımın İşletmeniz İçin Önemi
            </h2>
            <div className="flex items-center mb-4 text-sm text-neutral-500">
              <span>12 Mayıs 2023</span>
              <span className="mx-2">•</span>
              <span>5 dakika okuma</span>
              <span className="mx-2">•</span>
              <span>Mehmet Yılmaz</span>
            </div>
            <p className="text-neutral-600 mb-6">
              Günümüzde mobil cihazların yaygınlaşmasıyla responsive tasarımın işletmeniz için neden kritik olduğunu öğrenin. Kullanıcı deneyimini iyileştirmenin ve dönüşüm oranlarını artırmanın yolları.
            </p>
            <Link 
              href="/blog/responsive-tasarimin-isletmeniz-icin-onemi"
              className="bg-primary hover:bg-secondary text-light font-medium rounded-full px-6 py-2 inline-flex items-center transition-all duration-200"
              style={{ backgroundColor: '#6482AD' }}
            >
              <span>Devamını Oku</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Yazıları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Kartı 1 */}
          <article className="bg-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href="/blog/responsive-tasarimin-isletmeniz-icin-onemi" className="block">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>Web Tasarım</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-500 text-sm">15 Mayıs 2023</span>
                </div>
                
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200" style={{ color: '#6482AD' }}>
                  Responsive Tasarımın İşletmeniz İçin Önemi
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Mobil uyumlu web sitelerinin neden önemli olduğunu ve işletmenize nasıl değer katabileceğini keşfedin. Responsive tasarım, mobil kullanıcı deneyimi ve SEO faydaları hakkında kapsamlı bilgiler.
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.2)', color: '#6482AD' }}>
                    Z
                  </div>
                  <div>
                    <p className="text-sm font-medium">Zeynep Aydın</p>
                    <p className="text-xs text-neutral-500">UX/UI Tasarımcı</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          
          {/* Blog Kartı 2 */}
          <article className="bg-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href="/blog/seo-optimizasyonu-dijital-gorunurlugunuzu-artirmanin-yollari" className="block">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>Dijital Pazarlama</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-500 text-sm">24 Haziran 2023</span>
                </div>
                
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200" style={{ color: '#6482AD' }}>
                  SEO Optimizasyonu: Dijital Görünürlüğünüzü Artırmanın Yolları
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Arama motorlarında üst sıralarda yer almanın püf noktaları ve SEO stratejileri ile dijital görünürlüğünüzü nasıl artırabileceğinizi öğrenin. Etkili anahtar kelime araştırması ve backlink stratejileri.
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.2)', color: '#6482AD' }}>
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ayşe Demir</p>
                    <p className="text-xs text-neutral-500">SEO Uzmanı</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          
          {/* Blog Kartı 3 */}
          <article className="bg-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href="/blog/whatsapp-business-api-ile-musteri-iletisimini-guclendirme" className="block">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>Dijital İletişim</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-500 text-sm">15 Temmuz 2023</span>
                </div>
                
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200" style={{ color: '#6482AD' }}>
                  WhatsApp Business API ile Müşteri İletişimini Güçlendirme
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  WhatsApp Business API ile otomatik mesajlar, 7/24 canlı destek ve kişiselleştirilmiş iletişim stratejileri nasıl oluşturulur? Müşteri memnuniyetini artırmak için WhatsApp entegrasyonu.
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.2)', color: '#6482AD' }}>
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mehmet Yılmaz</p>
                    <p className="text-xs text-neutral-500">Dijital İletişim Uzmanı</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          
          {/* Blog Kartı 4 */}
          <article className="bg-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href="/blog/e-ticaret-siteleri-icin-donusum-optimizasyonu" className="block">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>E-ticaret</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-500 text-sm">18 Ağustos 2023</span>
                </div>
                
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200" style={{ color: '#6482AD' }}>
                  E-ticaret Siteleri İçin Dönüşüm Optimizasyonu
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  E-ticaret sitenizin dönüşüm oranlarını artırmak için kanıtlanmış stratejiler, kullanıcı deneyimi iyileştirmeleri ve satışları artıracak ipuçları. Sepet terk oranını düşürmenin etkili yolları.
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.2)', color: '#6482AD' }}>
                    E
                  </div>
                  <div>
                    <p className="text-sm font-medium">Emre Kaya</p>
                    <p className="text-xs text-neutral-500">E-ticaret Danışmanı</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          
          {/* Blog Kartı 5 */}
          <article className="bg-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <Link href="/blog/web-sitenizin-yukleme-hizini-artirmanin-10-yolu" className="block">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(100, 130, 173, 0.1)', color: '#6482AD' }}>Web Performansı</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-500 text-sm">5 Eylül 2023</span>
                </div>
                
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200" style={{ color: '#6482AD' }}>
                  Web Sitenizin Yükleme Hızını Artırmanın 10 Yolu
                </h2>
                
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Web sitenizin performansını ve yükleme hızını artırmak için uygulanabilir 10 teknik ipucu. Kullanıcı deneyimini iyileştirin ve dönüşüm oranlarınızı yükseltin.
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3" style={{ backgroundColor: 'rgba(100, 130, 173, 0.2)', color: '#6482AD' }}>
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ali Yıldız</p>
                    <p className="text-xs text-neutral-500">Front-end Geliştirici</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* Abone Ol Bölümü */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-light">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Dijital Dünyada Güncel Kalın</h2>
            <p className="mb-8 opacity-90">
              E-bültenimize abone olarak en güncel dijital trendler, web tasarım ipuçları ve özel tekliflerden haberdar olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-grow px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-light text-neutral-800"
                required
              />
              <button
                type="submit"
                className="bg-light text-primary font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                style={{ color: '#6482AD' }}
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 