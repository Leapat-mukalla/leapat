import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic as GFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = GFont({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["arabic"]
 });

export const metadata: Metadata = {
  title: "موقع ليبات",
  description: "وصف لمحرك البحث",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
