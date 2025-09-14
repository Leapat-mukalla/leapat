"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { links } from "@/lib/constants";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/use-scroll";

export function HeaderDesktop() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { y } = useScroll();
  const scrolled = y > 80;

  return (
    <div className="flex w-full items-center justify-center bg-transparent px-8">
      <div className="flex items-center justify-center gap-10">
        {links.map((link, index) => {
          const isActive = !index
            ? isHome
            : pathname === link.url || pathname.startsWith(link.url);
          if (link.hasDropdown && link.dropdownItems) {
            return (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "text-light-gray ml-12 flex items-center gap-1 text-base font-semibold leading-9 text-nav_color transition-colors hover:text-white",
                      isActive && "border-b-2 border-white text-white",
                      scrolled && "text-[#454545] hover:text-[#171717]",
                      scrolled &&
                        isActive &&
                        "border-b-2 border-[#171717] text-[#171717]",
                    )}
                  >
                    {link.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="mt-2 w-64 border border-gray-200 bg-white shadow-lg"
                >
                  {link.dropdownItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={item.url}
                        className="flex cursor-pointer flex-col items-start p-3 transition-colors hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">
                          {item.title}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={index}
              href={link.url}
              scroll={true}
              className={cn(
                "text-light-gray ml-12 text-base font-semibold leading-9 text-nav_color transition-colors hover:text-white",
                isActive && "border-b-2 border-white text-white",
                scrolled && "text-[#454545] hover:text-[#171717]",
                scrolled &&
                  isActive &&
                  "border-b-2 border-[#171717] text-[#171717]",
              )}
            >
              {link.title}
            </Link>
          );
        })}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
