import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './../Components/Navbar/Navbar';
import Footer from './../Components/Footer/Footer';
import Head from "next/head"; 
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog-Scope",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
