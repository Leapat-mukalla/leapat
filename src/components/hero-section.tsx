import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function HeroSection({
  title,
  children,
  view,
  className,
}: {
  title?: string;
  children?: React.ReactNode;
  view: 'list' | 'details';
  className?: string;
}) {
  return (
    <section className="bg-custom-gradient">
      <div
        className={cn(
          'container flex flex-col py-40',
          {
            'items-center justify-center': view === 'list',
          },
          className,
        )}
      >
        <Image
          src="/leapat-white.png"
          width={600}
          height={400}
          alt="Leapat Logo"
        />
        <h1 className="text-4xl font-semibold leading-[120px] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
          {title}
        </h1>

        {children}
      </div>
    </section>
  );
}
