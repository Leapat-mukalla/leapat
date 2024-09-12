import { cn } from '@/lib/utils';

import Link from 'next/link';
import ProjectCarousel from './carousel';
import ProjectCard from './project-card';
import { ArrowLeft } from 'lucide-react';
import { getProjects } from '@/lib/markdown';

export default async function ProjectsSection() {
  const projects = await getProjects();
  return (
    <div className="bg-white pb-80">
      <div className="pt-14">
        <h2
          className={cn(
            'mt-18 flex items-end justify-center gap-2 text-4xl text-[#75A3B1]',
          )}
        >
          مشاريعنا
          <span className="mb-2 inline-block h-[9px] w-[130px] bg-[#75A3B1]"></span>
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
      <div className="pb-40">
          <Link
            href="/projects"
            className="text-white text-4xl font-semibold flex items-center justify-center py-5 mt-8 rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)] w-[450px] mx-auto"
          >
              مزيد من المشاريع <ArrowLeft strokeWidth={3.50} className="mr-4" height={35} width={35} />
          </Link>
        </div>

      <h2
        className={cn(
          'mt-18 flex items-end justify-center gap-2 text-4xl text-[#75A3B1]',
        )}
      >
        معرض الوسائط{' '}
        <span className="mb-2 inline-block h-[9px] w-[200px] bg-[#75A3B1]"></span>
      </h2>
      <h3 className="mb-12 text-center text-6xl text-[#262626]">
        شاهدنا بدقة أعلى
      </h3>

      <ProjectCarousel images={['/image.png', '/image.png', '/image.png']} />
    </div>
  );
}
