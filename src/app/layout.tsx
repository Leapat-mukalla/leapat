import "./globals.css";

import { IBM_Plex_Sans_Arabic as GFont, Montserrat } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { cn } from '@/lib/utils';

const inter = GFont({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'موقع ليبات',
  description: 'وصف لمحرك البحث',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn(inter.className, 'flex min-h-screen flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
