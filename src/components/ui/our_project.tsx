'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/app/(statics)/MyPage/page.module.css';
import classNames from 'classnames';

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
    <div className={styles.mainContainer}>
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
            <div className={styles.moreButton}>المزيد عن المشروع &#10095;</div>
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
            <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان</p>
            <div className={styles.moreButton}>المزيد عن المشروع &#10095;</div>
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
                المزيد عن المشروع &#10095;
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
                المزيد عن المشروع &#10095;
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
                المزيد عن المشروع &#10095;
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.moreButton1}> مزيد من المشاريع</div>

      <h2 className={styles.partition}>معرض الوسائط ـــــ</h2>
      <h2 className={styles.headTitle}>شاهدنا بدقة أعلى</h2>
      <div className={styles.carouselSpace}>
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
              <Link href={'/id'}>
                <img src={src} alt={`Carousel ${index}`} />
              </Link>
            </div>
          ))}
          <button
            className={classNames(styles.carouselButton, styles.carouselNext)}
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
