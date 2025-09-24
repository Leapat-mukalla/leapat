import Image from 'next/image';
import Link from 'next/link';
import { ProjectMatter } from '@/lib/markdown';
import React from 'react';
import { buttonVariants } from "../ui/button";
import { cn } from '@/lib/utils';

export default function ProjectCard({
  reverse,
  data: project,
  filePath,
  content,
}: {
  reverse?: boolean;
} & ProjectMatter) {
  const url = `/projects/details/${filePath}`;

  return (
    <div
      key={filePath}
      className={cn(
        "mb-8 flex flex-col items-center justify-between gap-5 p-4 md:flex-row md:gap-20",
        {
          "md:flex-row-reverse": reverse,
        },
      )}
    >
      <Link className="relative w-full md:basis-1/2" href={url}>
        <Image
          className="relative z-10 rounded-[27px] object-contain"
          width={530}
          height={370}
          src={project.image || "/image.png"}
          alt="Post Image"
        />
      </Link>
      <div className="md:basis-1/2">
        <div className="mb-5 w-[70px] rounded-md bg-primary text-center text-white">
          {project.completed ? "مكتمل" : "قيد التنفيذ"}
        </div>
        <h1 className="mb-10 text-right text-4xl font-bold text-secondary">
          {project.title}
        </h1>
        {project.description ? (
          <p className="mb-10 text-right text-[18px] text-[#999]">
            {project.description}
          </p>
        ) : (
          <p className="mb-10 line-clamp-3 text-right text-[18px] text-[#999]">
            {project.excerpt || content}
          </p>
        )}
        <Link className={buttonVariants({ variant: "outline" })} href={url}>
          المزيد عن المشروع
        </Link>
      </div>
    </div>
  );
}
