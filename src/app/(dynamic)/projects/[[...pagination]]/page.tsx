import React from 'react';
import ProjectCard from '@/components/projects/project-card';

import HeroSection from '@/components/hero-section';
import { getProjects } from '@/lib/markdown';

export default async function ProjectsPage() {
  // todo get query params for pagination and search
  const projects = await getProjects();

  return (
    <>
      <HeroSection view="list" title="مشاريعنا">
        <form className="mt-12 flex w-96 max-w-full gap-1 rounded-lg bg-background px-2">
          <input className="w-full outline-none" placeholder="ابحث عن مشروع" />
          <button
            type="submit"
            className="my-2 rounded-md bg-gradient px-3 text-background"
          >
            بحث
          </button>
        </form>
      </HeroSection>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1100px]">
          {projects.map((project, index) => (
            <ProjectCard
              {...project}
              key={project.filePath}
              reverse={index % 2 === 0}
            />
          ))}
        </div>

        {/* todo add infinite scroll pagination */}
      </section>
    </>
  );
}
