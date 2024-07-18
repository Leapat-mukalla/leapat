
import Svg from '../../src/components/Svg';
import Partners from '../../src/components/partners';

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div>
          <Svg src="leapat.svg" />
        </div>
        <div>
          <span className="leading-[120px] text-[80px] font-semibold align-right text-white custom-underline">
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
