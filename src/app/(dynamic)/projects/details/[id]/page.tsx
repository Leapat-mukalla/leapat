import React from 'react';
import HeroSection from '@/components/hero-section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';
import ProjectsCarousel from '@/components/projects/carousel';
import getProject from '@/lib/markdown';

export default async function ProjectDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await getProject(id);

  return (
    <>
      <HeroSection title={project.data.title} view="details">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">المشاريع</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.data.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeroSection>
      <section className="bg-background py-20 md:py-48">
        <div className="prose md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert mx-auto">
          <header className="mb-20 flex gap-5">
            <Image
              className="not-prose relative z-10 rounded-[27px] object-cover"
              src="/image.png"
              alt="Post Image"
              width={190}
              height={190}
            />

            <div className="mt-4">
              <span className="not-prose rounded-md bg-[#75A3B1] px-4 py-1 text-center text-white">
                {project.data.completed ? 'مكتمل' : 'قيد الإنجاز'}
              </span>
              <h1 className="mt-2 text-right text-4xl font-bold">
                {project.data.title}
              </h1>
            </div>
          </header>

          <div
            className="mx-auto my-20"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {!!project.data?.media?.length && (
            <ProjectsCarousel images={project.data.media} />
          )}
        </div>
      </section>
    </>
  );
}
