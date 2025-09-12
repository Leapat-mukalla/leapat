import React from "react";
import { HeroSection } from "@/components/hero-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { ProjectsCarousel } from "@/components/projects/carousel";
import getProject, { getBlogs } from "@/lib/markdown"; // ✅ جلب getBlogs
import BlogCard from "@/components/blog/blog-card";

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
        <div className="prose mx-auto dark:prose-invert md:prose-lg lg:prose-xl xl:prose-2xl">
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
                    في حصين صممنا أداة رقمية شاملة تجمع بين التوعية والفحص، بحيث
                    تقدم للمستخدم تجربة متكاملة تساعده على حماية نفسه رقميًا.
                    الأداة تمكّنك من التحقق بسهولة مما إذا كانت بياناتك قد ظهرت
                    في أي تسريب معروف، وفي الوقت نفسه توفر لك مساعدًا تفاعليًا
                    يجيب على استفساراتك ويزوّدك بخطوات عملية ونصائح وقائية.
                    حرصنا أن تكون هذه الأداة آمنة، سريعة، وسهلة الاستخدام، لتعزز
                    وعيك وتمنحك راحة البال بأن بياناتك في أيدٍ موثوقة.
                  </p>
                  <a
                    href={project.data.tool.url}
                    target="_blank"
                    className="block no-underline"
                  >
                    <div className="flex h-20 cursor-pointer items-center justify-between rounded-[32px] bg-[#E8ECFB] px-8 py-2">
                      <span className="font-semibold text-[#1542D4]">
                        جرّب الأداة الآن
                      </span>
                      <Image
                        src="/arrow-up-left.svg"
                        alt="arrow"
                        width={28}
                        height={28}
                      />
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
                    يأتي برنامج حصين بدعم ورعاية من شركاء استراتيجيين آمنوا
                    بأهمية الأمان الرقمي وضرورة تمكين الأفراد من حماية بياناتهم.
                    بفضل مؤسسة عدالة وشركائنا في هذا المسار، استطعنا تطوير أدوات
                    عملية وموارد توعوية تسهم في بناء مجتمع أكثر وعيًا وأمانًا في
                    الفضاء الرقمي.
                  </p>
                  <div className="flex flex-wrap gap-10">
                    {project.data.partners.map((logo: string, idx: number) => (
                      <Image
                        key={idx}
                        src={logo}
                        alt={`شريك ${idx + 1}`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
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
                      <BlogCard
                        key={blog.filePath}
                        data={blog.data}
                        filePath={blog.filePath}
                      />
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <div
              className="mx-auto my-20"
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
