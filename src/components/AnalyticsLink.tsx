"use client";

import { trackExternalLink } from "@/lib/analytics";
import { ReactNode } from "react";

interface AnalyticsLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  trackingLabel?: string;
}

export function AnalyticsLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  trackingLabel,
}: AnalyticsLinkProps) {
  const handleClick = () => {
    // Only track external links (not internal routes)
    if (href.startsWith("http") || href.startsWith("//")) {
      trackExternalLink(href, trackingLabel);
    }
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
