
import Partners from '@/components/partners';
import Button from "@/components/button/button";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div></div>
        <div>
          <span className="align-right custom-underline text-[80px] font-semibold leading-[120px] text-white">
            قفزة نحو الابداع
          </span>
        </div>
      </div>

      <div className="mb-[230px]">
        <Partners />
      </div>
      <div className="flex flex-col items-center space-y-2 mb-[232px]">
        <div className="mb-[55px]">
          <div className="flex items-end">
            <div>
              <p className="text-white font-semibold text-4xl leading-[54px]">من نحن؟</p>
            </div>
            <div className="w-[108px] h-[9px] bg-blueShade rounded-[3px]" style={{ top: '1392px', left: '725px' }}></div>
          </div>
          <p className="text-white font-semibold text-6xl leading-[80px]">تعرف علينا</p>
        </div>
        <div className="text-center">
          <p className="text-2xl text-white font-medium	">”ليبات“ مبادرة شبابية تقنية تأسست مطلع عام 2024م.</p>
          <p className="text-2xl text-white font-medium	">نسعى لإحداث نقلات إلى المستقبل من خلال تحقيق تحول رقمي شامل في مجالات الاقتصاد، </p>
          <p className="text-2xl text-white font-medium	">الصحة، التعليم، الثقافة، والفن.</p>
        </div>

        <div>

          <Button label="تعرف علينا أكثر" />
        </div>
      </div>
    </main>
  );
}
