'use client';

import Corner from '@/svgs/arrow.svg';
import React from 'react';

interface ContactUsFormProps {
  // title: string;
  // subTitle: string;
  // description: string;
}

const ContactUsForm: React.FC<ContactUsFormProps> = (
  {
    // title,
    // subTitle,
    // description,
  },
) => {
  return (
    <div className="flex items-center space-y-2">
      <form>
        <input type="text" placeholder='الإسم'/>
        <input type="email" placeholder='البريد الألكتروني'/>
        <textarea name="" id="" placeholder="محتوى الرسالة"></textarea>
      </form>
    </div>
  );
};

export default ContactUsForm;
