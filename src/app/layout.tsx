import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nira Digital | Hızlı, Akıllı ve Uygun Fiyatlı Dijital Destek",
  description: "Web sitesi, chatbot, WhatsApp botu ve sosyal medya yönetimi tek çatı altında. Küçük işletmeler için uygun fiyatlı ve hızlı dijital çözümler.",
  keywords: "web tasarımı, whatsapp bot, yapay zeka chatbot, dijital ajans, sosyal medya yönetimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
