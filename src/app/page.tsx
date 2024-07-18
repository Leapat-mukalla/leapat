
import Partners from '@/components/partners';

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

      <div>
        <Partners />
      </div>
    </main>
  );
}
