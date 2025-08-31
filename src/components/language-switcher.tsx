"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { languages } from "@/lib/constants";
import useScroll from "@/hooks/use-scroll";
import { useState } from "react";

export function LanguageSwitcher() {
  const { y } = useScroll();
  const scrolled = y > 80;
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]); 

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setCurrentLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 text-white transition-colors hover:text-gray-300",
            scrolled && "text-[#171717]",
          )}
        >
          <Globe className="h-4 w-4" />
          <span
            className={cn("text-sm font-medium", scrolled && "text-[#171717]")}
          >
            {currentLanguage.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 border border-gray-200 bg-white shadow-lg"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex cursor-pointer items-center gap-3 px-3 py-2 transition-colors hover:bg-gray-50",
              currentLanguage.code === language.code &&
                "bg-blue-50 text-blue-600",
            )}
          >
            <span className="text-sm font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
