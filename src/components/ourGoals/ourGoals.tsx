"use client"

import Card from "../card";
import CodeIcon from "@/svgs/code.svg";
import HandsIcon from "@/svgs/Handshake.svg"
import React from 'react';
import Settings from '@/svgs/settings.svg';
import ZeroOneIcon from "@/svgs/code.svg"
interface OurGoalsProps {
  title: string;
  subTitle: string;
  description: string;
  hideMission?: boolean;
}

const OurGoals: React.FC<OurGoalsProps> = ({ title, subTitle, description, hideMission = false }) => {
  return (
    <div className="mb-[232px] flex flex-col items-center">
      <div className="mb-[55px]">
        <div className="flex items-baseline">
          <div>
            <p className="text-4xl font-semibold leading-[54px] text-white">
              {title}
            </p>
          </div>
          <div className="h-[9px] w-14 rounded-[3px] bg-blueShade lg:w-[246px]"></div>
        </div>
        <p className="text-6xl font-semibold leading-[80px] text-white">
          {subTitle}
        </p>
      </div>

      <div className="min-w-full max-w-[1030px] text-center">
        <p className="mb-24 py-3 text-2xl font-medium text-white">
          {description}
        </p>
      </div>
      <div className="flex max-w-[780px] flex-wrap justify-center gap-40">
        <Card
          direction={null}
          icon={<Settings />}
          title="توفير الموارد اللازمة"
          description="والإرشاد والفرص للشباب لتحقيق ابتكاراتهم، وتطوير وبناء مهاراتهم وقدراتهم."
        />
        <Card
          direction="top"
          icon={<HandsIcon />}
          title="تعزيز التعاون والشراكات"
          description="مع المنظمات والمؤسسات والخبراء لتعزيز التأثير والوصول إلى جمهور أوسع."
        />
        <Card
          direction="left"
          title="قيادة التحول الرقمي"
          icon={<ZeroOneIcon />}
          description="في مختلف القطاعات، من خلال
تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة"
        />
        <Card
          direction="right"
          title="الإستفادة من التكنولوجيا"
          description="لتحقيق أهداف التنمية المستدامة والمساهمة في بناء مجتمع أكثر وعيا وعدالة واستدامة."
          icon={<CodeIcon />}
        />
      </div>

      {!hideMission && (
        <div className="mt-[205px]">
          <p className="max-w-[833px] text-center text-4xl font-medium leading-[54px] text-white underline decoration-blueShade decoration-4">
            ”في ليبات، نسعى لقيادة التحول الرقمي لتحقيق قفزات رقمية ملموسة
            بقيادة الشباب المبتكر“
          </p>
        </div>
      )}
    </div>
  );
}

export default OurGoals;
