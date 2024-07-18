import Svg from './Svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leapat-black text-white">

      <div className="flex justify-between mx-[200px] my-4">
        <div className="flex flex-row">
          <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md space-x-2">
            <Svg src="social/instagram.svg" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md space-x-2">
            <Svg src="social/facebook.svg" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md space-x-2">
            <Svg src="social/x.svg" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-mdspace-x-2 ">
            <Svg src="social/linkedin.svg" />
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div><Svg src="leapat-mini.svg" /></div>
          <div>
            مبادرة ليبات © {currentYear}<br />
            جميع الحقوق محفوظة
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">من نحن؟</a></div>
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">المشاريع</a></div>
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">المدونة</a></div>
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">الأحداث</a></div>
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">الوظائف</a></div>
          <div><a className="font-semibold text-2xl leading-9 text-white" href="#">تواصل معنا</a></div>
      </div>

      </div>
    </footer>
  );
}

export default Footer;