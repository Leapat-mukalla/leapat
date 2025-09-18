import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import getProject, { getBlogs } from "@/lib/markdown"; // ✅ جلب getBlogs

import BlogCard from "@/components/blog/blog-card";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import { ProjectsCarousel } from "@/components/projects/carousel";
import React from "react";

export default async function ProjectDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await getProject(id);
  const blogs = await getBlogs(); // ✅ هنا نجيب المقالات كلها

  const isHaseen = project.data.layout === "haseen";

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
        <div className="container mx-auto">
          <header className="mb-20 flex gap-5">
            <Image
              className="not-prose relative z-10 rounded-[27px] object-cover"
              src={project.data.image || "/image.png"}
              alt={project.data.title}
              width={190}
              height={190}
            />
            <div className="mt-4">
              <span className="not-prose rounded-md bg-primary px-4 py-1 text-center text-white">
                {project.data.completed ? "مكتمل" : "قيد الإنجاز"}
              </span>
              <h1 className="mt-2 text-right text-4xl font-bold">
                {project.data.title}
              </h1>
            </div>
          </header>

          {isHaseen ? (
            <>
              {project.data.tool?.url && (
                <section className="my-20 max-sm:mx-4">
                  <h2 className="mb-6 text-2xl font-bold text-[#1542D4]">
                    الأداة المطوَّرة ضمن حصين
                  </h2>
                  <p>
في حصين صممنا أداة رقمية شاملة تجمع بين جانبين أساسيين، لتمنحك تجربة متكاملة تساعدك على حماية نفسك رقميًا:                  </p>
                  <ul className="list-disc pr-8 my-4">
                    <li className="mb-2">
                      <strong>أداة فحص التسريبات:</strong> للتحقق مما إذا كان بريدك الإلكتروني أو اسم المستخدم أو رقم هاتفك قد ظهر في أي تسريب بيانات معروف، مع ضمان كامل لخصوصيتك.
                    </li>
                    <li className="mb-2">
                      <strong>المساعد التفاعلي:</strong> شات بوت ذكي يجيب على استفساراتك حول الأمان الرقمي والابتزاز الإلكتروني، ويقدّم لك نصائح وخطوات عملية سهلة التطبيق.
                    </li>
                  </ul>
                  <p>
                    حرصنا أن تكون هذه الأداة آمنة، سريعة، وسهلة الاستخدام، لتمنحك راحة البال بأن بياناتك في أيدٍ موثوقة.
                  </p>
                  <a
                    href={project.data.tool.url}
                    target="_blank"
                    className="my-6 block no-underline"
                  >
                    <div className="group flex h-20 cursor-pointer items-center justify-between rounded-[32px] bg-[#E8ECFB] px-8 py-2 transition-all duration-300 hover:bg-[#1542D4] hover:shadow-lg hover:translate-y-[-2px]">
                      <span className="font-semibold text-[#1542D4] transition-colors duration-300 group-hover:text-white">
                        جرّب الأداة الآن
                      </span>
                      <div className="transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:scale-110">
                        <Image
                          src="/arrow-up-left.svg"
                          alt="arrow"
                          width={28}
                          height={28}
                          className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    </div>
                  </a>
                </section>
              )}

              {!!project.data.partners?.length && (
                <section className="my-20 max-sm:mx-4">
                  <h2 className="mb-6 text-2xl font-bold text-[#1542D4]">
                    الشركاء
                  </h2>
                  <p>
                    تأتي الحملة التوعوية بدعم من مشروع آمن ضمن مشروع تكامل،
                    بتنفيذ مؤسسة عدالة للتنمية القانونية، وبالشراكة مع منظمة
                    سيفرورلد، وبتمويل من الاتحاد الأوروبي.
                  </p>
                  <div className="mt-6 flex flex-nowrap justify-center items-center gap-1 sm:gap-2 md:gap-4 w-full">
                    {project.data.partners.map((logo: string, idx: number) => (
                      <div className="relative h-10 w-16 sm:h-12 sm:w-20 md:h-16 md:w-28 lg:h-20 lg:w-32 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]" key={idx}>
                        <Image
                          fill
                          src={logo}
                          alt={`شريك ${idx + 1}`}
                          className="object-contain"
                          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!!blogs?.length && (
                <section className="my-20 max-sm:mx-4">
                  <h2 className="mb-6 text-2xl font-bold text-[#1542D4]">
                    المقالات التوعوية
                  </h2>
                  <p className="mb-6">
                    إلى جانب الأدوات، يقدم حصين مقالات تثقيفية دورية تغطي أحدث
                    القضايا والتهديدات الرقمية، وتعرض استراتيجيات سهلة التطبيق
                    لحماية نفسك وبياناتك. هدفنا أن تكون هذه المقالات مصدرًا
                    موثوقًا يساعدك على بناء وعي رقمي متجدد ومتطور.
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                      <BlogCard {...blog} key={blog.filePath} />
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <div
              className="prose mx-auto my-20 dark:prose-invert md:prose-lg lg:prose-xl xl:prose-2xl"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}

          {!!project.data?.media?.length && (
            <ProjectsCarousel images={project.data.media} />
          )}
        </div>
      </section>
    </>
  );
}
