"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

import { Search } from "lucide-react";

export default function BlogSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const currentSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-12 flex w-96 max-w-full gap-1 rounded-lg bg-background px-2"
      >
        <input
          className="w-full outline-none"
          placeholder="ابحث عن مقالة"
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          disabled={isPending}
          className="my-2 py-1 rounded-xl bg-custom-gradient px-5 text-background disabled:opacity-50"
        >
          {isPending ? "جارٍ البحث..." : "بحث"}
        </button>
      </form>
      {currentSearch && (
        <div className="mt-4 text-sm text-gray-600">
          البحث عن: `&quot;{currentSearch}`&quot;
        </div>
      )}
    </>
  );
}
