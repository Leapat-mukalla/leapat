"use client"

import Card from "../card";
import Corner from "@/svgs/arrow.svg"
import React from 'react';
interface OurGoalsProps {
  title: string;
  subTitle: string;
  description: string;
} 

const OurGoals: React.FC<OurGoalsProps> =({title,subTitle,description}) => {
  return (
    <div className="mb-[232px] flex flex-col items-center space-y-2">
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
        <p className="text-2xl font-medium text-white">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-40  max-w-[780px]">
        <Card direction={null} />
        <Card direction="top" />
        <Card direction="left" />
        <Card direction="right" />
      </div>
    </div>
  );
}

export default OurGoals;