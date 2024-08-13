'use client';
import Button from '@/components/button';
import ContactUs from '@/components/contactUs';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/app/(statics)/MyPage/page.module.css';
import classNames from 'classnames';
import LeapatLogoSvg from '@/svgs/leapat.svg';
import OurGoals from '@/components/ourGoals';
import Partners from '@/components/partners';
export default function Home() {
  const images = [
    'https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg',
    'https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg',
    'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg',
    'https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg',
    'https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg',
    'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const getCarouselClass = (index: number) => {
    if (index === currentIndex) {
      return classNames(styles.carouselItem, styles.middleItem);
    } else if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === images.length - 1)
    ) {
      return styles.carouselItem;
    } else if (
      index === currentIndex + 1 ||
      (currentIndex === images.length - 1 && index === 0)
    ) {
      return styles.carouselItem;
    } else {
      return styles.carouselItem;
    }
  };

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

      <div className="mb-56 mt-80">
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

        <div className="py-3">
          <OurGoals
            title="أهدافنا"
            subTitle="إلى ماذا نسعى؟"
            description="إلى قيادة التحول الرقمي في مختلف القطاعات من خلال تطوير وتنفيذ مشاريع وحلول تكنولوجية مبتكرة، والعمل على الاستفادة من التكنولوجيا لبناء مجتمع أكثر وعيًا. من خلال توفير الموارد والإرشاد والفرص للشباب لتحقيق ابتكاراتهم وتطوير مهاراتهم، وتعزيز الشراكات والتعاون مع المنظمات والخبراء."
          />
        </div>

        <ContactUs
          title="تواصل معنا"
          subTitle="نحن هنا للإستماع إليك"
          description="نسعد بتواصلكم معنا. سواء كان لديك سؤال، استفسار أو فكرة تريد مشاركتها، نحن هنا للإستماع إليك.

املأ النموذج التالي وسيتم الرد عليك في أقرب وقت."
        />
        <div className={styles.container}>
          <div className={styles.partition}>مشاريعناـــ</div>
          <h1 className={styles.headTitle}>ماذا انجزنا؟</h1>

          <Link href="/id" className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
                width={350}
                height={250}
                alt="Post Image"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.button}>مكتمل</div>
              <h1 className={styles.title}>مشروع تكنو سكتش</h1>
              <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
              <div className={styles.moreButton}> المزيد عن المشروع</div>
            </div>
          </Link>
          <Link href="/id" className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
                width={350}
                height={250}
                alt="Post Image"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.button}>مكتمل</div>
              <h1 className={styles.title}>مشروع تكنو سكتش</h1>
              <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
              <div className={styles.moreButton}> المزيد عن المشروع</div>
            </div>
          </Link>
          <div>
            <Link href="/id" className={styles.post}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src="https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
                  width={350}
                  height={250}
                  alt="Post Image"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.button}>مكتمل</div>
                <h1 className={styles.title}>مشروع تكنو سكتش</h1>
                <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
                <div className={styles.moreButton}>
                  {' '}
                  &#10094; المزيد عن المشروع
                </div>
              </div>
            </Link>
            <Link href="/id" className={styles.post}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src="https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
                  width={350}
                  height={250}
                  alt="Post Image"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.button}>مكتمل</div>
                <h1 className={styles.title}>مشروع تكنو سكتش</h1>
                <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
                <div className={styles.moreButton}>
                  {' '}
                  &#10094; المزيد عن المشروع
                </div>
              </div>
            </Link>
            <Link href="/id" className={styles.post}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src="https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
                  width={350}
                  height={250}
                  alt="Post Image"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.button}>مكتمل</div>
                <h1 className={styles.title}>مشروع تكنو سكتش</h1>
                <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
                <div className={styles.moreButton}>
                  {' '}
                  &#10094; المزيد عن المشروع
                </div>
              </div>
            </Link>

            <div className={styles.moreButton1}> مزيد من المشاريع</div>

            <h2 className={styles.partition}>معرض الوسائط ـــــ</h2>
            <h2 className={styles.headTitle}>شاهدنا بدقة أعلى</h2>
            <div className={styles.carouselContent}>
              <button
                className={classNames(
                  styles.carouselButton,
                  styles.carouselPrevious,
                )}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              {images.map((src, index) => (
                <div key={index} className={getCarouselClass(index)}>
                  <img src={src} alt={`Carousel ${index}`} />
                </div>
              ))}
              <button
                className={classNames(
                  styles.carouselButton,
                  styles.carouselNext,
                )}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
