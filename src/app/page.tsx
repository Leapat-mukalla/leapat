import Button from '@/components/button';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import OurGoals from '@/components/ourGoals';
import Partners from '@/components/partners';
export default function Home() {
  return (
    <main className="mt-[205px]">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="">
          <LeapatLogoSvg />
        </div>
        <div>
          <span className="align-right custom-underline text-[80px] font-semibold leading-[120px] text-white">
            قفزة نحو الابداع
          </span>
        </div>
      </div>

      <div className="">
        <Partners />
      </div>
      <div className="mb-[232px] flex flex-col items-center space-y-2">
        <div className="mb-[55px]">
          <div className="flex items-baseline">
            <div>
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
          <Button label="تعرف علينا أكثر" />
        </div>

        <div className="mb-52 py-3">
          <OurGoals
            title="أهدافنا"
            subTitle="إلى ماذا نسعى؟"
            description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
          />
        </div>
        {/* <div className="relative h-64 w-64">
          <div className="absolute bottom-0 left-0 h-full w-full scale-y-[-1] transform bg-[url('../svgs/corner.png')] bg-left-bottom bg-no-repeat"></div>
        </div>
        <div className="relative h-64 w-64">
          <div className="absolute bottom-0 right-0 h-full w-full scale-x-[-1] scale-y-[-1] transform bg-[url('../svgs/corner.png')] bg-left-bottom bg-no-repeat"></div>
        </div> */}
      </div>
    </main>
  );
}