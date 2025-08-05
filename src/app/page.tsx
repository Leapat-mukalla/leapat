import ContactUs from '@/components/contact-us';
import Link from 'next/link';
import { ChevronLeft } from "lucide-react";
import { OurGoals } from "@/components/our-goals";
import { Partners } from "@/components/partners";
import TransitionTitle from "@/components/transition-title";
import { ProjectsSection } from "@/components/projects/projects-section";
import { HeroSection } from "@/components/hero-section";
import HeroSvg from "@/components/hero-svg";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroSection className="relative min-w-full" view="list">
        <HeroSvg />
        <TransitionTitle />

        <div className="mb-56 mt-80">
          <Partners />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="mb-[55px]">
            <div className="flex items-baseline">
              <div id="about-us">
                <p className="text-4xl font-semibold leading-[54px] text-white">
                  من نحن؟
                </p>
              </div>
              <div
                className="h-[9px] w-full max-w-[108px] rounded-[3px] bg-primary"
                style={{ top: "1392px", left: "725px" }}
              ></div>
            </div>
            <p className="text-6xl font-semibold leading-[80px] text-white">
              تعرف علينا
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-medium text-white">
              ”ليبات“ مبادرة شبابية تقنية تأسست مطلع عام 2024م.
            </p>
            <p className="text-2xl font-medium text-white">
              نسعى لإحداث نقلات إلى المستقبل من خلال تحقيق تحول رقمي شامل في
              مجالات الاقتصاد،{" "}
            </p>
            <p className="text-2xl font-medium text-white">
              الصحة، التعليم، الثقافة، والفن.
            </p>
          </div>

          <div className="pb-40 pt-10">
            <Link
              href="/about-us"
              className={buttonVariants({ className: "w-80" })}
            >
              تعرف علينا أكثر
              <ChevronLeft className="mr-4 sm:mr-2" />
            </Link>
          </div>
          <div className="py-3">
            <OurGoals
              title="أهدافنا"
              subTitle="إلى ماذا نسعى؟"
              description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
            />
          </div>
        </div>
      </HeroSection>

      <ProjectsSection />

      <ContactUs
        id="contact-us"
        title="تواصل معنا"
        subTitle="نحن هنا للإستماع إليك"
        description="نسعد بتواصلكم معنا. سواء كان لديك سؤال، استفسار أو فكرة تريد مشاركتها، نحن هنا للإستماع إليك.

  املأ النموذج التالي وسيتم الرد عليك في أقرب وقت."
      />
    </>
  );
}
