import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";

// Ana sayfa için statik metadata
export const metadata: Metadata = {
  title: "Webimza | Profesyonel Web Tasarımı ve Dijital Çözümler",
  description: "Webimza ile işletmenize özel web tasarımı, chatbot, WhatsApp botu ve sosyal medya yönetimi. Uygun fiyatlı, hızlı ve yenilikçi dijital çözümler.",
  alternates: {
    canonical: "https://webimza.com",
  },
  openGraph: {
    title: "Webimza | Profesyonel Web Tasarımı ve Dijital Çözümler",
    description: "Modern web tasarımı, WhatsApp bot ve yapay zeka chatbot çözümleri sunan genç ve dinamik dijital ajans.",
    url: "https://webimza.com",
    siteName: "Webimza",
    locale: "tr_TR",
    type: "website",
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main id="main-content" className="flex-grow">
        <Hero />
        <section id="about-section" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="services-section" aria-labelledby="services-heading">
          <Services />
        </section>
        <section id="why-us-section" aria-labelledby="why-us-heading">
          <WhyUs />
        </section>
        <section id="contact-section" aria-labelledby="contact-heading">
          <Contact />
        </section>
        <section id="faq-section" aria-labelledby="faq-heading">
          <FAQ />
        </section>
        <section id="cta-section">
          <CallToAction />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
