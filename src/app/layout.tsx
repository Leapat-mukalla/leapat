import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic as GFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from '@/lib/utils'

const fontSans = GFont({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['arabic'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'موقع ليبات',
  description: 'وصف لمحرك البحث'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
