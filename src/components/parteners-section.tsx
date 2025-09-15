import { cn } from "@/lib/utils";
import Image from "next/image";
import getProject from "@/lib/markdown";

export default async function PartenersSection() {
  // Fetch the hassen project data to get partner images
  const hassenProject = await getProject("hassen");
  const partners = hassenProject.data.partners || [];


  return (
    <section className="container mx-auto my-20 max-sm:mx-4">
      <div className="mb-12 text-center">
        <h2
          className={cn(
            "mt-18 mb-4 flex items-end justify-center gap-2 text-3xl text-primary lg:text-5xl",
          )}
        >
          الشركاء
          <span className="mb-2 inline-block h-[9px] rounded bg-primary lg:w-[370px]"></span>
        </h2>
        <p className="text-center">
          تأتي الحملة التوعوية بدعم من مشروع آمن ضمن مشروع تكامل، بتنفيذ مؤسسة
          عدالة للتنمية القانونية، وبالشراكة مع منظمة سيفرورلد، وبتمويل من
          الاتحاد الأوروبي.
        </p>
      </div>
      <div className="mt-6 flex flex-nowrap justify-center items-center gap-1 sm:gap-2 md:gap-4 w-full">
        {partners.length > 0 ? (
          partners.map((logo: string, idx: number) => (
            <div className="relative h-10 w-16 sm:h-12 sm:w-20 md:h-16 md:w-28 lg:h-20 lg:w-32 flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]" key={idx}>
              <Image
                fill
                src={logo}
                alt={`شريك ${idx + 1}`}
                className="object-contain"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>لا توجد صور شركاء متاحة</p>
          </div>
        )}
      </div>
    </section>
  );
}
