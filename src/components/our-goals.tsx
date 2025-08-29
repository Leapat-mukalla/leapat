"use client";

import React from "react";
import { IconCard } from "./icon-card";
import Image from "next/image";
import { ViewportFadeIn } from "./viewport-fade-in";

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
      <div className="relative z-10 mb-[55px]">
        <ViewportFadeIn>
          <div className="flex items-baseline">
            <div>
              <h2 className="text-4xl font-semibold leading-[54px] text-white">
                {title}
              </h2>
            </div>
            <div className="h-[9px] w-14 rounded-[3px] bg-primary lg:w-[246px]"></div>
          </div>
        </ViewportFadeIn>
        <ViewportFadeIn delay={600}>
          <p className="text-6xl font-semibold leading-[80px] text-white">
            {subTitle}
          </p>
        </ViewportFadeIn>
      </div>

      <div className="min-w-full max-w-[1030px] text-center">
        <ViewportFadeIn>
          <p className="mb-24 py-3 text-2xl font-medium text-white">
            {description}
          </p>
        </ViewportFadeIn>
      </div>
      <div className="grid max-w-[780px] justify-between gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-14">
          <ViewportFadeIn>
            <IconCard
              icon="setting"
              title="توفير الموارد اللازمة"
              description="والإرشاد والفرص للشباب لتحقيق ابتكاراتهم، وتطوير وبناء مهاراتهم وقدراتهم."
            />
          </ViewportFadeIn>
          <ViewportFadeIn>
            <IconCard
              icon="oneZeroOne"
              title="قيادة التحول الرقمي"
              description="في مختلف القطاعات، من خلال
          تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة"
            />
          </ViewportFadeIn>
        </div>
        <div className="mt-14 space-y-14">
          <ViewportFadeIn>
            <IconCard
              icon="handShake"
              title="تعزيز التعاون والشراكات"
              description="مع المنظمات والمؤسسات والخبراء لتعزيز التأثير والوصول إلى جمهور أوسع."
            />
          </ViewportFadeIn>
          <ViewportFadeIn>
            <IconCard
              icon="browserCode"
              title="الإستفادة من التكنولوجيا"
              description="لتحقيق أهداف التنمية المستدامة والمساهمة في بناء مجتمع أكثر وعيا وعدالة واستدامة."
            />
          </ViewportFadeIn>
        </div>
      </div>

      {!hideMission && (
        <div className="relative z-0 mt-[205px] min-h-[500px]">
          <Image
            src="/man.png"
            width={400}
            height={200}
            alt="leapat man illustration"
            className="animate-wiggle-infinite absolute -start-1/3 top-48 w-64 object-contain lg:top-20 lg:w-96"
          />

          <Image
            src="/woman.png"
            width={400}
            height={200}
            alt="leapat woman illustration"
            className="animate-wiggle-infinite absolute -end-9 top-52 w-64 object-contain lg:-end-1/3 lg:-top-20 lg:w-96"
          />
          <p className="relative z-10 max-w-[833px] text-center text-4xl font-medium leading-[54px] text-white underline decoration-primary decoration-4">
            ”في ليبات، نسعى لقيادة التحول الرقمي لتحقيق قفزات رقمية ملموسة
            بقيادة الشباب المبتكر“
          </p>
        </div>
      )}
    </div>
  );
};
