import React from 'react';
import ProjectCard from '@/components/projects/project-card';
import ProjectSearchForm from "@/components/projects/project-search-form";
import { HeroSection } from "@/components/hero-section";
import { getProjects } from '@/lib/markdown';

interface ProjectsPageProps {
  searchParams: {
    search?: string;
  };
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const allProjects = await getProjects();
  const searchQuery = searchParams.search?.toLowerCase().trim();

  // Filter projects based on search query
  const filteredProjects = searchQuery
    ? allProjects.filter(
        (project) =>
          project.data.title.toLowerCase().includes(searchQuery) ||
          project.content.toLowerCase().includes(searchQuery),
      )
    : allProjects;

  return (
    <>
      <HeroSection view="list" title="مشاريعنا">
        <ProjectSearchForm />
      </HeroSection>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1100px]">
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                {filteredProjects.length} نتيجة للبحث عن `&quot;
                {searchParams.search}`&quot;
              </p>
            </div>
          )}

          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                {...project}
                key={project.filePath}
                reverse={index % 2 === 0}
              />
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-600">
                {searchQuery
                  ? "لا توجد مشاريع تطابق البحث"
                  : "لا توجد مشاريع متاحة"}
              </p>
              {searchQuery && (
                <a
                  href="/projects"
                  className="mt-4 inline-block text-blue-600 underline hover:text-blue-800"
                >
                  عرض جميع المشاريع
                </a>
              )}
            </div>
          )}
        </div>

        {/* todo add infinite scroll pagination */}
      </section>
    </>
  );
}
