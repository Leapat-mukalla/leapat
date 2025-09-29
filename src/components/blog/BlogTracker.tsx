"use client";

import { useEffect } from "react";
import { trackBlogView, trackBlogReadTime } from "@/lib/analytics";

interface BlogTrackerProps {
  blogTitle: string;
  category?: string;
  readingTime?: number;
}

export function BlogTracker({
  blogTitle,
  category = "general",
  readingTime,
}: BlogTrackerProps) {
  useEffect(() => {
    // Track initial blog view
    trackBlogView(blogTitle, category, readingTime);

    const startTime = Date.now();
    let isActive = true;

    const handleBeforeUnload = () => {
      if (isActive) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        if (timeSpent > 5) {
          trackBlogReadTime(blogTitle, timeSpent);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && isActive) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        if (timeSpent > 5) {
          trackBlogReadTime(blogTitle, timeSpent);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      // Final tracking on component unmount
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      if (timeSpent > 5) {
        trackBlogReadTime(blogTitle, timeSpent);
      }
      isActive = false;
    };
  }, [blogTitle, category, readingTime]);

  return null; // This component doesn't render anything
}
