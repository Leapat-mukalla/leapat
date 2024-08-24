'use client';

// import Corner from '@/svgs/arrow.svg';
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  direction: 'left' | 'right' | 'top' | 'bottom' | null;
}

const OurGoals: React.FC<CardProps> = ({
  direction,
  title,
  icon,
  description,
}) => {
  const transformClasses = {
    left: 'left-0 scale-y-[-1]',
    right: 'right-0 scale-x-[-1] scale-y-[-1]',
    top: 'top-0 left-0 scale-x-[-1]',
    bottom: 'bottom-0 left-0',
  };
  return (
    <div className="relative h-64 w-64">
      <div
      className={`absolute ${direction ? transformClasses[direction] : ''} h-full w-full transform bg-[url('../svgs/corner.png')] bg-left-bottom bg-no-repeat`}></div>

      <div className="mr-5 mt-5 p-1">
        <div className="">{icon}</div>
        <div className="">
          <h3 className="text-[28px] font-semibold text-white">{title}</h3>
          <p className="text-lg text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
