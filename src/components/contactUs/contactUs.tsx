'use client';

import Card from '../card';
import CodeIcon from '@/svgs/code.svg';
import ContactUsForm from '../contactUsForm';
import HandsIcon from '@/svgs/Handshake.svg';
import Icon from '@/svgs/1010.svg';
import React from 'react';
import Settings from '@/svgs/settings.svg';
import ZeroOneIcon from '@/svgs/code.svg';
interface ContactUsProps {
  title: string;
  subTitle: string;
  description: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  title,
  subTitle,
  description,
}) => {
  return (
    <div className="mb-[232px] flex items-center space-y-2 content-around">
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
        <div className="min-w-full max-w-[1030px] text-center">
          <p className="mb-24 py-3 text-2xl font-medium text-white">
            {description}
          </p>
        </div>
        <div className="flex max-w-[780px] flex-wrap justify-center gap-40"></div>
      </div>

      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
