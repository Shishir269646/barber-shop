import { Geist, Geist_Mono } from "next/font/google";
import { Tangerine, Merienda } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TangerineF = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: "--font-TangerineF",
});

const merienda = Merienda({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal'],
  variable: "--font-Merienda",
});



export const metadata = {
  title: "Barber shop",
  description: "This app is made for demo purpose practice only.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${TangerineF.className}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merienda.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
