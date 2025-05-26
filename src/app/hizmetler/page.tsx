import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webimza Hizmetleri | Web Tasarımı, Chatbot ve Dijital Çözümler",
  description: "Webimza'nın profesyonel hizmetleri: Web tasarımı, chatbot geliştirme, WhatsApp botu, sosyal medya yönetimi ve özel yazılım çözümleri.",
  alternates: {
    canonical: "https://webimza.com/hizmetler",
  },
  openGraph: {
    title: "Webimza Hizmetleri | Web Tasarımı, Chatbot ve Dijital Çözümler",
    description: "Webimza'nın profesyonel hizmetleri: Web tasarımı, chatbot geliştirme, WhatsApp botu, sosyal medya yönetimi ve özel yazılım çözümleri.",
    url: "https://webimza.com/hizmetler",
    siteName: "Webimza",
    locale: "tr_TR",
    type: "website",
  }
};

export default function HizmetlerPage() {
  return (
    <>
      <main id="main-content" className="pt-28">
        <h1 className="sr-only">Webimza Hizmetleri - Web Tasarımı, Chatbot ve Dijital Çözümler</h1>
        <section id="services-section" aria-labelledby="services-heading">
        <Services />
        </section>
        <section id="cta-section">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </>
  );
} 