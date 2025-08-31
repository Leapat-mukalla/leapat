"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/lib/constants";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import useWidth from "@/hooks/use-width";

export function HeaderDesktop() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const width = useWidth();
  const { y } = useScroll();
  const scrolled = y > 80;


  return (
    <div className="flex w-full items-center justify-center gap-10 overflow-auto bg-transparent">
      {links.map((link, index) => {
        const isActive = !index
          ? isHome
          : pathname === link.url || pathname.startsWith(link.url);

        return (
          <Link
            key={index}
            href={link.url}
            scroll={true}
            className={cn(
              "text-light-gray ml-12 text-base font-semibold leading-9 text-nav_color",
              isActive &&
                `ml-12 border-b-2 border-white text-white transition duration-300 ease-in-out ${scrolled && "border-b-2 border-[#171717] !text-[#171717]"}`,
              scrolled && "text-[#454545]",
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
