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
import { ViewportFadeIn } from "@/components/viewport-fade-in";

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
            <ViewportFadeIn delay={300}>
              <p className="text-2xl font-medium text-white">
                ”ليبات“ مبادرة شبابية تقنية تأسست مطلع العام 2024م.
              </p>
            </ViewportFadeIn>
            <ViewportFadeIn delay={600}>
              <p className="text-2xl font-medium text-white">
                تسعى على عمل تحولات رقمية في العديد من القطاعات ومنها قطاع
                الثقافة والفن والاقتصاد والتعليم والصحة.
              </p>
            </ViewportFadeIn>
            <ViewportFadeIn delay={900}>
              <p className="text-2xl font-medium text-white">
                كما تسعى إلى الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا.
              </p>
            </ViewportFadeIn>
            <ViewportFadeIn delay={900}>
              <p className="text-2xl font-medium text-white">
                نسعى لإحداث نقلات إلى المستقبل من خلال تحقيق تحول رقمي شامل في
                مجالات الاقتصاد،{" "}
              </p>
            </ViewportFadeIn>
            <ViewportFadeIn delay={1200}>
              <p className="text-2xl font-medium text-white">
                الصحة، التعليم، الثقافة، والفن.
              </p>
            </ViewportFadeIn>
          </div>

          <div className="pb-40 pt-10">
            <ViewportFadeIn>
              <Link
                href="/about-us"
                className={buttonVariants({ className: "w-80" })}
              >
                تعرف علينا أكثر
                <ChevronLeft className="mr-4 sm:mr-2" />
              </Link>
            </ViewportFadeIn>
          </div>
          <div className="py-3">
            <OurGoals
              title="أهدافنا"
              subTitle="إلى ماذا نسعى؟"
              description="الريادة في التحول الرقمي في مختلف القطاعات عن طريق عبر تمكين الشباب بالابتكارات الحديثة والتكنلوجيا المتقدمة لخلق مجتمع مستدام ومتمكن تقنياً"
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
