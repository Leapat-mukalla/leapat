'use client';

import InstagramSvg from '@/svgs/social/instagram.svg';
import FacebookSvg from '@/svgs/social/facebook.svg';
import XSvg from '@/svgs/social/x.svg';
import LinkedinSvg from '@/svgs/social/linkedin.svg';
import LeapatMiniSvg from '@/svgs/leapat-mini.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leapat-black text-white">
      <div className="mx-[200px] my-4 flex justify-between">
        <div className="flex flex-row space-x-2">
          <div className="flex h-9 w-9 items-center justify-center space-x-2 rounded-full bg-white shadow-md">
            <InstagramSvg />
          </div>
          <div className="flex h-9 w-9 items-center justify-center space-x-2 rounded-full bg-white shadow-md">
            <FacebookSvg />
          </div>
          <div className="flex h-9 w-9 items-center justify-center space-x-2 rounded-full bg-white shadow-md">
            <XSvg />
          </div>
          <div className="shadow-mdspace-x-2 flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <LinkedinSvg />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div>
            <LeapatMiniSvg />
          </div>
          <div>
            مبادرة ليبات © {currentYear}
            <br />
            جميع الحقوق محفوظة
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              من نحن؟
            </a>
          </div>
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              المشاريع
            </a>
          </div>
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              المدونة
            </a>
          </div>
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              الأحداث
            </a>
          </div>
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              الوظائف
            </a>
          </div>
          <div>
            <a className="text-2xl font-semibold leading-9 text-white" href="#">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
