import type { Metadata } from "next";
import { Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";

import Header from "./ui/components/header/header"; 
import Footer from "./ui/components/footer/footer"; // <-- importe o Footer

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "WingHub",
  description: "Gestão inteligente de espaços e conexões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${montserrat.variable} ${ubuntu.variable} antialiased`}>
        {/* Header global */}
        <Header />

        {/* Conteúdo das páginas */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
