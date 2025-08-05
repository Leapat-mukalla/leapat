import { cn } from '@/lib/utils';

import Link from 'next/link';
import { ProjectsCarousel } from "./carousel";
import ProjectCard from "./project-card";
import { ChevronLeft } from "lucide-react";
import { getProjects } from "@/lib/markdown";
import { buttonVariants } from "../ui/button";

export async function ProjectsSection() {
  const projects = await getProjects();
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
        <h3 className="mb-12 text-center text-6xl text-[#262626]">
          ماذا انجزنا؟
        </h3>
        <div className="mx-auto max-w-[1100px]">
          {projects.map((project, index) => (
            <ProjectCard
              {...project}
              key={project.filePath}
              reverse={index % 2 === 0}
            />
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

      <ProjectsCarousel images={["/image.png", "/image.png", "/image.png"]} />
    </div>
  );
}
