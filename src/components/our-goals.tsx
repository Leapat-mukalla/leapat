"use client";

import React from "react";
import { IconCard } from "./icon-card";
import Image from "next/image";

interface OurGoalsProps {
  title: string;
  subTitle: string;
  description: string;
  hideMission?: boolean;
}

export const OurGoals = ({
  title,
  subTitle,
  description,
  hideMission = false,
}: OurGoalsProps) => {
  return (
    <div className="relative mx-auto flex max-w-5xl flex-col items-center">
      <Image
        src="/101.png"
        fill
        alt="leapat goals bg"
        className="z-0 object-contain object-center"
      />
      <div className="mb-[55px]">
        <div className="flex items-baseline">
          <div>
            <p className="text-4xl font-semibold leading-[54px] text-white">
              {title}
            </p>
          </div>
          <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
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
      <div className="grid max-w-[780px] justify-between gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-14">
          <IconCard
            icon="setting"
            title="توفير الموارد اللازمة"
            description="والإرشاد والفرص للشباب لتحقيق ابتكاراتهم، وتطوير وبناء مهاراتهم وقدراتهم."
          />
          <IconCard
            icon="oneZeroOne"
            title="قيادة التحول الرقمي"
            description="في مختلف القطاعات، من خلال
          تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة"
          />
        </div>
        <div className="mt-14 space-y-14">
          <IconCard
            icon="handShake"
            title="تعزيز التعاون والشراكات"
            description="مع المنظمات والمؤسسات والخبراء لتعزيز التأثير والوصول إلى جمهور أوسع."
          />
          <IconCard
            icon="browserCode"
            title="الإستفادة من التكنولوجيا"
            description="لتحقيق أهداف التنمية المستدامة والمساهمة في بناء مجتمع أكثر وعيا وعدالة واستدامة."
          />
        </div>
      </div>

      {!hideMission && (
        <div className="relative mt-[205px] min-h-[500px]">
          <Image
            src="/man.png"
            width={400}
            height={200}
            alt="leapat man illustration"
            className="absolute -start-1/3 top-20 -scale-x-100 object-contain"
          />
          <Image
            src="/woman.png"
            width={400}
            height={200}
            alt="leapat woman illustration"
            className="absolute -end-1/3 -top-20 -scale-x-100 object-contain"
          />
          <p className="max-w-[833px] text-center text-4xl font-medium leading-[54px] text-white underline decoration-primary decoration-4">
            ”في ليبات، نسعى لقيادة التحول الرقمي لتحقيق قفزات رقمية ملموسة
            بقيادة الشباب المبتكر“
          </p>
        </div>
      )}
    </div>
  );
};
