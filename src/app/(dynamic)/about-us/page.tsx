import React from 'react';
import OurGoals from '@/components/ourGoals';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import Card from '@/components/card';
import HeroSection from '@/components/hero-section';

export default async function AboutUsPage() {
  return (
    <div>
      {/* Header Section */}
      <HeroSection title="من نحن؟" view="list" />

      {/* Introduction Section */}
      <div className="mb-[210px] flex flex-col items-center">
        <div className="mb-[55px]">
          <div className="flex items-baseline">
            <p className="text-4xl font-semibold leading-[54px] text-white">
              من نحن؟
            </p>
            <div className="h-[9px] w-14 rounded-[3px] bg-blueShade lg:w-[246px]"></div>
          </div>
          <p className="text-6xl font-semibold leading-[80px] text-white">
            تعرف علينا
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-medium text-white">
            ”ليبات“ مبادرة شبابية تقنية تأسست مطلع عام 2024، نسعى لتحقيق قفزات
            رقمية ملموسة يقودها الشباب المبتكر. نهدف
          </p>
          <p className="text-2xl font-medium text-white">
            إلى تعزيز ثقافة الابتكار والتعاون بين الشباب لمعالجة القضايا الملحة
            وتحقيق تأثير مستدام في مجالات الصحة، البيئة، التعليم،
          </p>
          <p className="text-2xl font-medium text-white">
            الفن، والثقافة. نسعى لبناء مجتمع أكثر وعياً وعدالة من خلال توفير
            الموارد والإرشاد وتطوير مهارات الشباب.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="flex flex-wrap justify-center gap-40">
        {/* Vision */}
        <div className="relative w-[498px]">
          <div className="absolute h-full w-full transform bg-[url('../svgs/corner.png')] bg-left-bottom bg-no-repeat"></div>
          <div className="mr-5 mt-5 p-1">
            <div className="flex items-baseline">
              <p className="text-[36px] font-semibold leading-[54px] text-white">
                رؤيتنا
              </p>
              <div className="h-[9px] w-14 rounded-[3px] bg-blueShade lg:w-[246px]"></div>
            </div>
            <h3 className="text-[60px] font-semibold leading-[90px] text-white">
              إلى ماذا نتطلع؟
            </h3>
            <p className="text-lg text-white">
              نسعى في ليبات للوصول لمجتمع يستخدام التكنولوجيا لتحقيق قفزات
              وتحولات رقمية ملموسة. نرى مستقبلا يقوده الشباب المبتكر يقدم حلولا
              جديدة ومبتكرة للتحديات العالمية في مجالات عدة.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="relative w-[498px]">
          <div className="absolute left-0 top-0 h-full w-full scale-x-[-1] transform bg-[url('../svgs/corner.png')] bg-left-bottom bg-no-repeat"></div>
          <div className="mr-5 mt-5 p-1">
            <div className="flex items-baseline">
              <p className="text-[36px] font-semibold leading-[54px] text-white">
                مهمتنا
              </p>
              <div className="h-[9px] w-14 rounded-[3px] bg-blueShade lg:w-[246px]"></div>
            </div>
            <h3 className="text-[60px] font-semibold leading-[90px] text-white">
              ماعلينا فعله
            </h3>
            <p className="text-lg text-white">
              نسعى في ليبات إلى تحقيق قفزات رقمية ملموسة من خلال تمكين الشباب
              المبتكر، وتعزيز ثقافة الابتكار والتعاون لاستخدام التكنولوجيا في
              معالجة القضايا الملحة وتحقيق تأثير مستدام.
            </p>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="mt-[97px] flex justify-center py-3">
        <OurGoals
          hideMission={true}
          title="أهدافنا"
          subTitle="إلى ماذا نسعى؟"
          description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
        />
      </div>
    </div>
  );
}
