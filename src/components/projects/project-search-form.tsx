"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function ProjectSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(currentSearch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(() => {
      const params = new URLSearchParams(searchParams);

      if (searchQuery.trim()) {
        params.set("search", searchQuery.trim());
      } else {
        params.delete("search");
      }

      router.push(`/projects?${params.toString()}`);
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-12 flex w-96 max-w-full gap-1 rounded-lg bg-background px-2"
      >
        <input
          className="w-full outline-none"
          placeholder="ابحث عن مشروع"
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
