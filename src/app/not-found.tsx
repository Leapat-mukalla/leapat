// import BackButton from "@/components/BackButton";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="text-center text-white flex flex-col items-center justify-center leading-8 mx-4 my-12">
      <h1 className="font-bold  mb-10 mt-12 lg:text-8xl md:text-7xl sm:text-6xl">404</h1>
      <p className="text-2xl">
        لم نستطع العثور على هذه الصفحة! 
      </p>
      <p className="text-2xl">
        يمكنك العودة الى الصفحة الرئيسية او التواصل معنا للمساعدة.
      </p>
      <div className="">
          <Link
              href="/"
              className="mt-6 flex items-center justify-center rounded-[20px] bg-gradient-to-r from-[#75A3B1] to-[rgb(152,108,172)] px-4 py-2 max-text-2xl font-semibold text-white whitespace-nowrap"
            >
                عودة للصفحة الرئيسية
              <ArrowLeft
                strokeWidth={3.5}
                className="mr-4 max-w-[35px]  max-h-[35px]"
                // height={35}
                // width={35}
              />
            </Link>
        </div>
    </div>
  );
};

export default NotFoundPage;
