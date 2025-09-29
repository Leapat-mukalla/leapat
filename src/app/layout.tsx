import "./globals.css";

import { IBM_Plex_Sans_Arabic as GFont } from 'next/font/google';
import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = GFont({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leapat.org"),

  title: "موقع ليبات",
  description: "قفزة نحو المستقبل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          inter,
          "relative flex min-h-screen flex-col bg-custom-gradient",
        )}
      >
        <Header />
        <main className="flex-grow overflow-hidden">{children}</main>
        <Footer />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}