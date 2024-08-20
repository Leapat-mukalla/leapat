'use client';

import Button from '../button';
import Corner from '@/svgs/arrow.svg';
import React from 'react';

interface ContactUsFormProps {
  //
}

const ContactUsForm: React.FC<ContactUsFormProps> = (
  {
    //
  },
) => {
  return (
    <div className=" flex h-full min-h-[400px] content-around items-center pl-12">
      <form className="flex-col">
        <div className="flex">
          <input
            type="text"
            placeholder="الإسم"
            className="ml-4 rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
          />
          <input
            type="email"
            placeholder="البريد الألكتروني"
            className="ml-4 rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
          />
        </div>
        <div className="py-12">
          <textarea
            name=""
            id=""
            cols={68}
            rows={10}
            placeholder="محتوى الرسالة"
            className="resize-none rounded-[10px] bg-[#EBE9E9] py-4 px-8 outline-none"
          ></textarea>
        </div>
        <Button label="أرسال" />
      </form>
    </div>
  );
};

export default ContactUsForm;
