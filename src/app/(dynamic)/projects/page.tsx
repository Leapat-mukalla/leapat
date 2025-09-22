import { HeroSection } from "@/components/hero-section";
import NoResults from "@/components/ui/no-results";
import ProjectCard from "@/components/projects/project-card";
import ProjectSearchForm from "@/components/projects/project-search-form";
import React from "react";
import { getProjects } from "@/lib/markdown";

interface ProjectsPageProps {
  searchParams: {
    search?: string;
  };
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const allProjects = (await getProjects()).filter(
    (project) => !project.data.hidden,
  );
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
            <NoResults
              title={searchQuery ? "لا توجد نتائج" : "لا توجد مشاريع متاحة"}
              message={
                searchQuery
                  ? "لم يتم العثور على مشاريع تطابق بحثك. حاول استخدام كلمات بحث أخرى"
                  : "لا توجد مشاريع متاحة حالياً. تحقق مرة أخرى لاحقاً"
              }
              buttonText="عودة لقائمة المشاريع"
              buttonHref="/projects"
              searchQuery={searchQuery}
            />
          )}
        </div>

        {/* todo add infinite scroll pagination */}
      </section>
    </>
  );
}
