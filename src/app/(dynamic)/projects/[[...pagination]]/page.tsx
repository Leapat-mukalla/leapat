'use client';

import React from 'react';
import ProjectCard from '@/components/projects/project-card';

import { PROJECTS } from '@/components/projects/constants';
import HeroSection from '@/components/hero-section';

export default function ProjectsPage() {
  // todo get query params for pagination and search

  const updateSearch = () => {
    // todo update search
  };

  return (
    <>
      <HeroSection view="list" title="مشاريعنا">
        <div className="mt-12 flex w-96 max-w-full gap-1 rounded-lg bg-background px-2">
          <input className="w-full outline-none" placeholder="ابحث عن مشروع" />
          <button
            onClick={updateSearch}
            className="bg-gradient my-2 rounded-md px-3 text-background"
          >
            بحث
          </button>
        </div>
      </HeroSection>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1100px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              wrapperClass={index % 2 === 0 ? 'flex-row-reverse' : ''}
            />
          ))}
        </div>

        {/* todo add infinite scroll pagination */}
      </section>
    </>
  );
}
