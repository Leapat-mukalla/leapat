import { ArrowRight, ChevronLeft, Search } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface NoResultsProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
  searchQuery?: string;
}

export default function NoResults({
  title = "لا توجد نتائج",
  message = "لم يتم العثور على نتائج تطابق بحثك. حاول استخدام كلمات بحث أخرى",
  buttonText = "عودة لقائمة المقالات",
  buttonHref = "/blog",
  searchQuery,
}: NoResultsProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-20">
      <Image src="/no-resutls.svg" alt="No Results" width={400} height={400} />
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mb-8 leading-relaxed text-gray-600">{message}</p>

        <Link
          href={buttonHref}
          className="my-2 inline-flex items-center gap-2 rounded-3xl bg-blue-600 bg-custom-gradient px-6 py-3 font-medium text-background disabled:opacity-50"
        >
          {buttonText}
          <ChevronLeft className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
