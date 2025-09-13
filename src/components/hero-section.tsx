import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

export function HeroSection({
  title,
  children,
  view,
  className,
  showLogo = true,
}: {
  title?: string;
  children?: React.ReactNode;
  view: "list" | "details";
  className?: string;
  showLogo?: boolean;
}) {
  return (
    <section className="bg-custom-gradient">
      <div
        className={cn(
          "container flex flex-col py-40 lg:pt-60 2xl:pt-80",
          {
            "items-center justify-center": view === "list",
          },
          className,
        )}
      >
        {showLogo && (
        <Image
          src="/leapat-white.png"
          width={400}
          height={100}
          alt="Leapat Logo"
        />
        )}
        <h1 className="mb-6 text-4xl font-semibold leading-[120px] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
          {title}
        </h1>

        {children}
      </div>
    </section>
  );
}
