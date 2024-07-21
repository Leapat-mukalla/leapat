function Header() {
  return (
    <header className="flex justify-center pt-[94px]">
      <ul className="flex gap-4">
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">الرئيسية</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">من نحن؟</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">المشاريع</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">المدونة</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">الأحداث</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">الوظائف</a></li>
        <li><a className="font-semibold text-base leading-9 text-light-gray" href="#">تواصل معنا</a></li>
      </ul>
    </header>

  );
}

export default Header;