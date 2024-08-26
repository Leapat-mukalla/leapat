"use client"

import Card from "../card";
import CodeIcon from "@/svgs/code.svg";
import HandsIcon from "@/svgs/Handshake.svg"
import Icon from "@/svgs/1010.svg"
import React from 'react';
import Settings from '@/svgs/settings.svg';
import ZeroOneIcon from "@/svgs/code.svg"
interface OurGoalsProps {
  title: string;
  subTitle: string;
  description: string;
}

const OurGoals: React.FC<OurGoalsProps> = ({ title, subTitle, description }) => {
  return (
    <div className="mb-[232px] flex flex-col items-center">
      <div className="mb-[55px]">
        <div className="flex items-baseline">
          <div>
            <p className="text-4xl font-semibold leading-[54px] text-white">
              {title}
            </p>
          </div>
          <div
            className="h-[9px] w-[246px] rounded-[3px] bg-blueShade"
            style={{ top: '1392px', left: '725px' }}
          ></div>
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

      <div className="mt-[205px]">
        <p className="text-4xl leading-[54px] font-medium	text-center	max-w-[833px] text-white underline decoration-4 decoration-blueShade">”في ليبات، نسعى لقيادة التحول الرقمي لتحقيق قفزات رقمية ملموسة بقيادة الشباب المبتكر“</p>
      </div>
    </div>
  );
}

export default OurGoals;
