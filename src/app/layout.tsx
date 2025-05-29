import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import CookieConsent from "@/components/ui/CookieConsent";
import BackToTop from "@/components/ui/BackToTop";
import { Toaster } from "@/components/ui/toaster"


 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logix Solutios",
  description: "Hr Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header/>
        {children}
        <Toaster/>
        <Footer/>
        <FloatingWhatsApp phoneNumber="+923475933141" />
        <CookieConsent/>
        <BackToTop/>
        
      </body>
    </html>
  );
}
