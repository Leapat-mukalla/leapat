import ContactUs from '@/components/contact-us';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import OurGoals from '@/components/ourGoals';
import Partners from '@/components/partners';
import TransitionTitle from '@/components/transition-title';
import ProjectSection from '@/components/projects/projects-section';
import HeroSection from '@/components/hero-section';


export default function Home() {
  return (
    <>
      <HeroSection className="min-w-full" view="list">
        <TransitionTitle />

        <div className="mb-56 mt-80">
          <Partners />
        </div>
        <div className="mb-[232px] flex flex-col items-center space-y-2">
          <div className="mb-[55px]">
            <div className="flex items-baseline">
              <div id="about-us">
                <p className="text-4xl font-semibold leading-[54px] text-white">
                  من نحن؟
                </p>
              </div>
              <div
                className="h-[9px] w-[108px] rounded-[3px] bg-blueShade"
                style={{ top: '1392px', left: '725px' }}
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
              مجالات الاقتصاد،{' '}
            </p>
            <p className="text-2xl font-medium text-white">
              الصحة، التعليم، الثقافة، والفن.
            </p>
          </div>

        <div className="pb-40">
          <Link
              href="/about-us"
              className="m-4 mt-6 flex items-center justify-center rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)] px-24 py-5 text-4xl font-semibold text-white sm:px-16 sm:py-4 whitespace-nowrap"
            >
              تعرف علينا أكثر
              <ArrowLeft
                strokeWidth={3.5}
                className="mr-4 sm:mr-2"
                height={35}
                width={35}
              />
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

      <ProjectSection />

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
