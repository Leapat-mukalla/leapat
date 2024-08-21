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
  id?: string
  title: string;
  subTitle: string;
  description: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  id,
  title,
  subTitle,
  description,
}) => {
  return (
    <div id={id} className="flex h-full content-around">
      <div className="flex-col h-full min-h-[400px] content-around items-center px-12">
        <div className="">
          <div className="flex content-end items-baseline">
            <p className="text-4xl font-semibold leading-[54px] text-white">
              {title}
            </p>
            <div
              className="h-[9px] w-[380px] rounded-[3px] bg-blueShade"
              style={{ top: '1392px', left: '725px' }}
            ></div>
          </div>
        </div>
        <p className="text-6xl font-semibold leading-[80px] text-white">
          {subTitle}
        </p>
        <div className="min-w-full max-w-[300px] text-center">
          <p className="mb-24 py-3 text-right text-2xl font-medium text-white">
            {description}
          </p>
        </div>
      </div>

      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
