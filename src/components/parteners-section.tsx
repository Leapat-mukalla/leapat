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
      <div className="mt-6 flex flex-wrap justify-center gap-10">
        {partners.map((logo: string, idx: number) => (
          <div className="h-18 relative w-44" key={idx}>
            <Image
              fill
              src={logo}
              alt={`شريك ${idx + 1}`}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
