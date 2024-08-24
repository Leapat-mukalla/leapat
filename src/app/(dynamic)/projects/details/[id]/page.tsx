import { PROJECTS } from '@/components/projects/constants';

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

const project = PROJECTS[0];
export default function ProjectDetails() {
  return (
    <>
      <HeroSection title={project.title} view="details">
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
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeroSection>
      <section className="bg-background py-20 md:py-48">
        <div className="container">
          <header className="mb-20 flex gap-5">
            <Image
              className="relative z-10 rounded-[27px] object-cover"
              src="/image.png"
              alt="Post Image"
              width={190}
              height={190}
            />

            <div className="mt-4">
              <span className="rounded-md bg-[#75A3B1] px-4 py-1 text-center text-white">
                {project.status}
              </span>
              <h1 className="mt-2 text-right text-4xl font-bold">
                {project.title}-{project.id}
              </h1>
            </div>
          </header>

          <p className="mb-10 text-right text-[18px] text-[#999]">
            {project.text}
          </p>

          <ProjectsCarousel />
        </div>
      </section>
    </>
  );
}
