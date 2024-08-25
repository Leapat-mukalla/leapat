import React from 'react';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import { cn } from '@/lib/utils';

export default function HeroSection({
  title,
  children,
  view,
}: {
  title: string;
  children: React.ReactNode;
  view: 'list' | 'details';
}) {
  return (
    <section
      className={cn('container flex flex-col py-40', {
        'items-center justify-center': view === 'list',
      })}
    >
      <LeapatLogoSvg />
      <h1 className="text-4xl text-white md:text-7xl">{title}</h1>

      {children}
    </section>
  );
}
