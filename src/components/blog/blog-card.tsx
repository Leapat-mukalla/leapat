import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  data: {
    image: string;
    title: string;
    author: string;
    authorTitle: string;
    date: string;
    excerpt: string;
  };
  filePath: string;
}

function formatDate(dateString: string) {
  return dateString;
}

export default function BlogCard({ data, filePath }: BlogCardProps) {
  const url = `/blog/posts/${filePath}`;
  return (
    <div className="group overflow-hidden  rounded-tr-3xl rounded-tl-3xl bg-white duration-300 hover:shadow-sm">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

        <div className="p-6" dir="rtl">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {data.author}
              </div>
              <div className="text-xs text-gray-600">{data.authorTitle}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">{formatDate(data.date)}</div>
        </div>

        <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link
            href={url}
            className="transition-colors hover:text-blue-600"
          >
            {data.title}
          </Link>
        </h2>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-700">
          {data.excerpt}
        </p>

        <Link
          href={url}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          أكمل القراءة
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
