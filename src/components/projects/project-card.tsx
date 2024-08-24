import React from 'react';
import { Project } from './constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ProjectCard({
  project,
  wrapperClass,
}: {
  project: Project;
  wrapperClass?: string;
}) {
  return (
    <div
      key={project.id}
      className={cn(
        'mb-12 flex items-center justify-between gap-20',
        wrapperClass,
      )}
    >
      <Link
        className="relative aspect-video basis-1/2"
        href={'/projects/details/' + project.id}
      >
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
      <div className="basis-1/2">
        <div className="mb-5 mb-[10px] w-[70px] rounded-md bg-[#75A3B1] text-center text-white">
          {project.status}
        </div>
        <h1 className="mb-10 text-right text-4xl font-bold text-secondary">
          {project.title}-{project.id}
        </h1>
        <p className="mb-10 text-right text-[18px] text-[#999]">
          {project.text}
        </p>
        <Link
          className="bg-gradient inline-block rounded-lg text-center text-[#75a3b1]"
          href={'/projects/details/' + project.id}
        >
          <span className="m-1 inline-block rounded-md bg-white p-2">
            المزيد عن المشروع &#10095;
          </span>
        </Link>
      </div>
    </div>
  );
}
