import { HeroSection } from '@/components/hero-section'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'المقالات - ليبات',
  description: 'اكتشف أحدث المقالات والتقنيات في عالم التكنولوجيا والتحول الرقمي من فريق ليبات',
  keywords: ['مقالات', 'تكنولوجيا', 'التحول الرقمي', 'ليبات', 'اليمن'],
  openGraph: {
    title: 'المقالات - ليبات',
    description: 'اكتشف أحدث المقالات والتقنيات في عالم التكنولوجيا والتحول الرقمي من فريق ليبات',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      {children}
    </div>
  )
}
