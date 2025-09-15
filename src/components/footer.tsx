'use client';

import FacebookSvg from '@/svgs/social/facebook.svg';
import Image from 'next/image';
import InstagramSvg from '@/svgs/social/instagram.svg';
import Link from 'next/link';
import LinkedinSvg from '@/svgs/social/linkedin.svg';
import XSvg from '@/svgs/social/x.svg';
import { links } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-8">
      <div className="container my-4 flex lg:!items-center flex-col-reverse items-center justify-center gap-8 md:grid md:grid-cols-3 md:items-start">
        <div className="text-sm md:hidden">
          مبادرة ليبات © {currentYear}
          <br />
          جميع الحقوق محفوظة
        </div>

        {/* Left column - Social Links */}
        <div className="flex flex-row gap-3 pr-3   md:justify-center">
          <Link
            href="https://www.instagram.com/leapat_ye/"
            rel="noreferrer noopener"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <InstagramSvg />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61557366681281/"
            rel="noreferrer noopener"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <FacebookSvg />
          </Link>
          <Link
            href="https://x.com/Leapat_ye/"
            rel="noreferrer noopener"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <XSvg />
          </Link>
          <Link
            href="https://www.linkedin.com/company/leapat/"
            rel="noreferrer noopener"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <LinkedinSvg />
          </Link>
        </div>

        <div className="hidden flex-col items-center space-y-2 text-white md:flex">
          <div>
            <Image
              alt="leapat logo"
              src="/leapat-white.png"
              width={212}
              height={50}
            />
          </div>
          <div className="text-center">
            مبادرة ليبات © {currentYear}
            <br />
            جميع الحقوق محفوظة
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm leading-9 text-white md:grid md:grid-cols-3 md:text-2xl md:font-semibold md:justify-end">
          {links.map((link, index) => (
            <div key={index}>
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Image
            alt="leapat logo"
            src="/leapat-white.png"
            width={212}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
}
