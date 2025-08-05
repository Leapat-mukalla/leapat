"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { links } from "@/lib/constants";

export function HeaderDesktop() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
                "ml-12 border-b-2 border-white text-white transition duration-300 ease-in-out",
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
