import { ChevronLeft } from "lucide-react";
import Link from 'next/link';
import ProjectCard from "./project-card";
import { ProjectsCarousel } from "./carousel";
import { ViewportFadeIn } from "../viewport-fade-in";
import { buttonVariants } from "../ui/button";
import { cn } from '@/lib/utils';
import { getProjects } from "@/lib/markdown";

export async function ProjectsSection() {
  const allProjects = await getProjects();
  
  const featuredProjectPaths = [
    'techno-sketch',
    'ramadan-tech-evenings',
    'tech-exhibition-capacity-building',
  ];
  
  const featuredProjects = featuredProjectPaths
    .map(path => allProjects.find(project => project.filePath === path))
    .filter((project): project is typeof allProjects[0] => project !== undefined);
  
  return (
    <div className="bg-white pb-20">
      <div className="pt-14">
        <h2
          className={cn(
            "mt-18 flex items-end justify-center gap-2 text-4xl text-primary",
          )}
        >
          مشاريعنا
          <span className="mb-2 inline-block h-[9px] w-[130px] bg-primary"></span>
        </h2>
        <h3 className="mb-12 pt-1 text-center text-6xl text-[#262626]">
          ماذا أنجزنا؟
        </h3>
        <div className="mx-auto max-w-[1100px]">
          {featuredProjects.map((project, index) => (
            <ViewportFadeIn key={project.filePath}>
              <ProjectCard {...project} reverse={index % 2 === 0} />
            </ViewportFadeIn>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-40">
        <Link
          href="/projects"
          className={buttonVariants({ className: "px-20" })}
        >
          مزيد من المشاريع <ChevronLeft className="mr-4" />
        </Link>
      </div>

      <h2
        className={cn(
          "mt-18 flex items-end justify-center gap-2 text-4xl text-primary",
        )}
      >
        معرض الوسائط{" "}
        <span className="mb-2 inline-block h-[9px] w-[200px] bg-primary"></span>
      </h2>
      <h3 className="mb-12 text-center text-6xl text-[#262626]">
        شاهدنا بدقة أعلى
      </h3>

      <ProjectsCarousel images={[
        "/content/projects/digital-forum/digital-forum-1.JPG",
        "/content/projects/tech-exhibition/tech-exhibition-gallery-3.jpg",
        "/content/projects/techno-sketch/techno-sketch-gallery5.jpg"
      ]} />
    </div>
  );
}
