'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/ourProjects/page.module.css';
import ProjectCarousel from './carousel';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.partition}>مشاريعناـــ</div>
        <h1 className={styles.headTitle}>ماذا انجزنا؟</h1>

        <Link href="/id" className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/image.png"
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
              src="/image.png"
              width={350}
              height={250}
              alt="Post Image"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.button}>مكتمل</div>
            <h1 className={styles.title}>مشروع تكنو سكتش</h1>
            <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان</p>
            <button className={styles.moreButton}>
              المزيد عن المشروع &#10095;
            </button>
          </div>
        </Link>

        <div>
          <Link href="/id" className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/image.png"
                width={350}
                height={250}
                alt="Post Image"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.button}>مكتمل</div>
              <h1 className={styles.title}>مشروع تكنو سكتش</h1>
              <p className={styles.text}>
                هذا النص هوا مثال لنص يمكن ان هذا النص هوا مثال لنص يمكن ان هذا
                النص هوا مثال لنص يمكن ان هذا النص هوا مثال لنص يمكن ان
              </p>

              <div className={styles.moreButton}>
                المزيد عن المشروع &#10095;
              </div>
            </div>
          </Link>
          <Link href="/id" className={styles.post}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/image.png"
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
                src="/image.png"
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
      <button className={styles.moreButton1}>مزيد من المشاريع &#129136;</button>

      <h2 className={styles.partition}>معرض الوسائط ـــــ</h2>
      <h2 className={styles.headTitle}>شاهدنا بدقة أعلى</h2>

      <ProjectCarousel />
    </div>
  );
}
