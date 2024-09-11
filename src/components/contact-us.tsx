import ContactUsForm from './contactUsForm';
import React from 'react';
interface ContactUsProps {
  id?: string;
  title: string;
  subTitle: string;
  description: string;
}

const ContactUs = ({ id, title, subTitle, description }: ContactUsProps) => {
  return (
    <div
      id={id}
      className="flex h-full flex-col content-around items-center bg-custom-gradient py-52 lg:flex-row lg:space-x-8"
    >
      <div className="flex h-full min-h-[400px] flex-col content-around items-center px-12 lg:w-1/2">
        <div className="">
          <div className="flex content-end items-baseline">
            <p className="text-4xl font-semibold leading-[54px] text-white">
              {title}
            </p>
            <div className="h-[9px] w-14 rounded-[3px] bg-blueShade lg:w-[246px]"></div>
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
