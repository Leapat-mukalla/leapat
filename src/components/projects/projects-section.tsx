import { cn } from '@/lib/utils';

import Link from 'next/link';
import ProjectCarousel from './carousel';
import ProjectCard from './project-card';
import Arrow from '@/svgs/arrow.svg';
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
      <Link
        href="/projects"
        className="mx-auto mb-20 flex w-[400px] justify-center gap-4 rounded-lg bg-gradient px-9 py-3 text-4xl text-white"
      >
        مزيد من المشاريع <Arrow />
      </Link>

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
