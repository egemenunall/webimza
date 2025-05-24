import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientNavbar from "@/components/ClientNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Webimza | Hızlı, Akıllı ve Uygun Fiyatlı Dijital Destek",
  description: "Webimza ile web sitesi, chatbot, WhatsApp botu ve sosyal medya yönetimi. Uygun fiyatlı, hızlı ve yenilikçi çözümler.",
  keywords: "web tasarımı, whatsapp bot, yapay zeka chatbot, dijital ajans, sosyal medya yönetimi, webimza, genç dijital ajans",
  metadataBase: new URL('https://webimza.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Webimza | Hızlı, Akıllı ve Uygun Fiyatlı Dijital Destek",
    description: "Webimza ile web sitesi, chatbot, WhatsApp botu ve sosyal medya yönetimi.",
    url: "https://webimza.com",
    siteName: "Webimza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webimza Örnek Proje Kolajı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webimza | Hızlı, Akıllı ve Uygun Fiyatlı Dijital Destek",
    description: "Webimza ile web sitesi, chatbot, WhatsApp botu ve sosyal medya yönetimi.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientNavbar />
        {children}
        
        {/* JSON-LD yapılandırılmış veri - SEO için */}
        <Script 
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Webimza",
              "url": "https://webimza.com",
              "logo": "https://webimza.com/logo.png",
              "sameAs": [
                "https://instagram.com/webimza",
                "https://facebook.com/webimza"
              ],
              "description": "Webimza, işletmelere özel web tasarımı, chatbot, WhatsApp botu ve sosyal medya yönetimi hizmetleri sunan genç ve dinamik bir dijital ajans.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressRegion": "Türkiye"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+905538980616",
                "contactType": "customer service"
              },
              "foundingDate": "2020"
            })
          }}
        />
      </body>
    </html>
  );
}
