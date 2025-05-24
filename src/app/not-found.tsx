import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | Webimza',
  description: 'Üzgünüz, aradığınız sayfa bulunamadı.',
};

export default function NotFoundPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral to-neutral/60 px-4 pt-24 pb-16">
        <div className="max-w-3xl w-full text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="relative flex items-center justify-center w-full h-full bg-primary rounded-full text-white text-4xl font-bold">
              404
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sayfa Bulunamadı</h1>
          
          <p className="text-xl text-primary/70 mb-8">
            Üzgünüz, aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <Link 
              href="/"
              className="bg-primary hover:bg-secondary text-white font-medium rounded-full px-8 py-3 transition-all duration-300 flex items-center justify-center"
              style={{ backgroundColor: '#6482AD' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Anasayfaya Dön
            </Link>
            
            <Link 
              href="/iletisim"
              className="bg-white hover:bg-neutral/10 text-primary font-medium border border-primary/20 rounded-full px-8 py-3 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Bize Ulaşın
            </Link>
          </div>
          
          <div className="mt-16 text-primary/50 text-sm">
            <p>Bir bağlantıyı mı takip ettiniz? Yazım hatası olabilir.</p>
            <p>Eğer buraya gelmenize neden olan bir bağlantı izlediyseniz, lütfen bize bildirin.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 