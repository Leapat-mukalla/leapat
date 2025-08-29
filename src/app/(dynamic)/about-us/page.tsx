import { OurGoals } from "@/components/our-goals";
import { HeroSection } from "@/components/hero-section";
import { OurTeam } from "@/components/our-team";
import { Card } from "@/components/ui/card";
import { ViewportFadeIn } from "@/components/viewport-fade-in";

export default async function AboutUsPage() {
  return (
    <div>
      <HeroSection title="من نحن؟" view="list">
        <div className="mb-[55px] mt-[210px] flex flex-col items-center">
          <div className="mb-[55px]">
            <div className="flex items-baseline">
              <ViewportFadeIn>
                <p className="text-4xl font-semibold leading-[54px] text-white">
                  من نحن؟
                </p>
                <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
              </ViewportFadeIn>
            </div>
            <ViewportFadeIn>
              <p className="text-6xl font-semibold leading-[80px] text-white">
                تعرف علينا
              </p>
            </ViewportFadeIn>
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
                إلى تعزيز ثقافة الابتكار والتعاون بين الشباب لمعالجة القضايا
                الملحة وتحقيق تأثير مستدام في مجالات الصحة، البيئة، التعليم،
              </p>
            </ViewportFadeIn>
            <ViewportFadeIn delay={1200}>
              <p className="text-2xl font-medium text-white">
                الفن، والثقافة. نسعى لبناء مجتمع أكثر وعياً وعدالة من خلال توفير
                الموارد والإرشاد وتطوير مهارات الشباب.
              </p>
            </ViewportFadeIn>
          </div>
        </div>

        <div className="space-y-10">
          <ViewportFadeIn>
            <Card className="mr-5 mt-5 rounded-3xl px-12 py-16 lg:w-2/3">
              <div className="flex items-baseline">
                <p className="text-[36px] font-semibold leading-[54px] text-white">
                  رؤيتنا
                </p>
                <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
              </div>
              <h3 className="text-[60px] font-semibold leading-[90px] text-white">
                إلى ماذا نتطلع؟
              </h3>
              <p className="text-lg text-white">
                نسعى في ليبات للوصول لمجتمع يستخدام التكنولوجيا لتحقيق قفزات
                وتحولات رقمية ملموسة. نرى مستقبلا يقوده الشباب المبتكر يقدم
                حلولا جديدة ومبتكرة للتحديات العالمية في مجالات عدة.
              </p>
            </Card>
          </ViewportFadeIn>

          <ViewportFadeIn>
            <div className="flex justify-end">
              <Card className="mr-5 mt-5 rounded-3xl px-12 py-16 lg:w-2/3">
                <div className="flex items-baseline">
                  <p className="text-[36px] font-semibold leading-[54px] text-white">
                    مهمتنا
                  </p>
                  <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
                </div>
                <h3 className="text-[60px] font-semibold leading-[90px] text-white">
                  ماعلينا فعله
                </h3>
                <p className="text-lg text-white">
                  نسعى في ليبات إلى تحقيق قفزات رقمية ملموسة من خلال تمكين
                  الشباب المبتكر، وتعزيز ثقافة الابتكار والتعاون لاستخدام
                  التكنولوجيا في معالجة القضايا الملحة وتحقيق تأثير مستدام.
                </p>
              </Card>
            </div>
          </ViewportFadeIn>
        </div>

        <div className="mt-[97px] flex justify-center py-3">
          <OurGoals
            hideMission={true}
            title="أهدافنا"
            subTitle="إلى ماذا نسعى؟"
            description="الريادة في التحول الرقمي في مختلف القطاعات عن طريق عبر تمكين الشباب بالابتكارات الحديثة والتكنلوجيا المتقدمة لخلق مجتمع مستدام ومتمكن تقنياً"
          />
        </div>
      </HeroSection>

      <OurTeam />
    </div>
  );
}
