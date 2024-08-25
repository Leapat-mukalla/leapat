import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ProjectMatter } from '@/lib/markdown';

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
        'mb-12 flex flex-col items-center justify-between gap-5 p-4 md:flex-row md:gap-20',
        {
          'md:flex-row-reverse': reverse,
        },
      )}
    >
      <Link className="relative aspect-video w-full md:basis-1/2" href={url}>
        <Image
          className="relative z-10 rounded-[27px] object-cover"
          fill
          src="/image.png"
          alt="Post Image"
        />
        <span
          style={{
            boxShadow: '#75A3B1 16px 20px 56px 0px',
          }}
          className="absolute -bottom-0 right-1/4 z-0 h-1/2 w-1/2"
        ></span>
      </Link>
      <div className="md:basis-1/2">
        <div className="mb-5 mb-[10px] w-[70px] rounded-md bg-[#75A3B1] text-center text-white">
          {project.completed ? 'مكتمل' : 'قيد التنفيذ'}
        </div>
        <h1 className="mb-10 text-right text-4xl font-bold text-secondary">
          {project.title}
        </h1>
        <p
          className="mb-10 line-clamp-3 text-right text-[18px] text-[#999]"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <Link
          className="bg-gradient inline-block rounded-lg text-center text-[#75a3b1]"
          href={url}
        >
          <span className="m-1 inline-block rounded-md bg-white p-2">
            المزيد عن المشروع &#10095;
          </span>
        </Link>
      </div>
    </div>
  );
}
