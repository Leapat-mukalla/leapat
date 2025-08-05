"use client";

import useWidth from "@/hooks/use-width";
import { HeaderDesktop } from "./header.desktop";
import { HeaderMobile } from "./header.mobile";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";

export function Header() {
  const width = useWidth();
  const { y } = useScroll();

  const isDesktop = width >= 768;
  const scrolled = y > 80;

  return (
    <div
      className={cn("fixed top-24 z-20 w-full", {
        "top-0 bg-secondary/90 py-4 backdrop-blur-sm": scrolled,
      })}
    >
      {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
    </div>
  );
}
