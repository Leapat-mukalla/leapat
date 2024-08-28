"use client";

import { useEffect, useState } from 'react';
import Button from '@/components/button';
import ContactUs from '@/components/contactUs';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

import LeapatLogoSvg from '@/svgs/leapat.svg';
import OurGoals from '@/components/ourGoals';
import Partners from '@/components/partners';
import ProjectSection from '@/components/projects/projects-section';

export default function Home() {
  const [currentWord, setCurrentWord] = useState("الإبـــــــداع");

  useEffect(() => {
    const words = ["الإبتـــــــكار", "التـميُّـــــــــز", "المستقبل"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentWord(words[currentIndex]);
      currentIndex = (currentIndex + 1) % words.length;
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <main className="mt-[205px]  bg-symbols-background bg-cover bg-center z-10 ">
      <div className="flex flex-col items-center space-y-2 text-center ">
        <div className="">
          <LeapatLogoSvg />
        </div>
        <div>
          <span className="align-right custom-underline text-[80px] font-semibold leading-[120px] text-white">
            قفزة نحو {currentWord}
          </span>
        </div>
      </div>

      <div className="mb-56 mt-80">
        <Partners />
      </div>
      <div className="mb-[232px] flex flex-col items-center space-y-2">
        <div className="mb-[55px]">
          <div className="flex items-baseline">
            <div id='about-us'>
              <p className="text-4xl font-semibold leading-[54px] text-white">
                من نحن؟
              </p>
            </div>
            <div
              className="h-[9px] w-[108px] rounded-[3px] bg-blueShade"
              style={{ top: '1392px', left: '725px' }}
            ></div>
          </div>
          <p className="text-6xl font-semibold leading-[80px] text-white">
            تعرف علينا
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium text-white">
            ”ليبات“ مبادرة شبابية تقنية تأسست مطلع عام 2024م.
          </p>
          <p className="text-2xl font-medium text-white">
            نسعى لإحداث نقلات إلى المستقبل من خلال تحقيق تحول رقمي شامل في
            مجالات الاقتصاد،{' '}
          </p>
          <p className="text-2xl font-medium text-white">
            الصحة، التعليم، الثقافة، والفن.
          </p>
        </div>

        <div className="pb-40">
          <Link
            href="/about-us"
            className="text-white text-4xl font-semibold flex py-5 px-24 rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)]"
          >
            تعرف علينا أكثر <ArrowLeftIcon height={50} width={50} />
          </Link>
        </div>

        <div className="py-3">
          <OurGoals
            title="أهدافنا"
            subTitle="إلى ماذا نسعى؟"
            description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
          />
        </div>
      </div>
      <ProjectSection />
      <div className='mb-[232px] flex flex-col items-center space-y-2 mt-[180px]'>
        <ContactUs
            id="contact-us"
            title="تواصل معنا"
            subTitle="نحن هنا للإستماع إليك"
            description="نسعد بتواصلكم معنا. سواء كان لديك سؤال، استفسار أو فكرة تريد مشاركتها، نحن هنا للإستماع إليك.

  املأ النموذج التالي وسيتم الرد عليك في أقرب وقت."
          />
      </div>
    </main>
  );
}
