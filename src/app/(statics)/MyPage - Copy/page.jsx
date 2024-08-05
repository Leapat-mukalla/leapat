"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useCallback } from "react";
import  useEmblaCarousel  from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
// import  Carousel  from "react-responsive-carousel";
export default function MyPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const prev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const next = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  // const [emblaRef]=UseEmblaCarousel({loop:true},[Autoplay()])
  return (
    <div className={styles.mainContainer}>
      <div className={styles.partition}>مشاريعناـــ</div>
      <h1 className={styles.headTitle} >ماذا انجزنا؟</h1>

      <Link href="/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image>
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
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image>
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
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image>
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
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image>
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
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image>
        </div>
        <div className={styles.content}>
          <div className={styles.button}>مكتمل</div>
          <h1 className={styles.title}>مشروع تكنو سكتش</h1>
          <p className={styles.text}>هذا النص هوا مثال لنص يمكن ان </p>
          <div className={styles.moreButton}> المزيد عن المشروع</div>
        </div>
      </Link>

      <div className={styles.moreButton1}> مزيد من المشاريع</div>

      <h2 className={styles.partition}>معرض الوسائط ـــــ</h2>
      <h2 className={styles.headTitle}>شاهدنا بدقة أعلى</h2>
      <div className="embla mx-auto mt-12 h-56 max-w-lg border" ref={emblaRef} >
        <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center"><Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image></div>
        <div className="embla__slide flex items-center justify-center"><Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg"
            }
            width={350}
            height={250}
            alt="Post Image"
          ></Image></div>
      </div>
      </div>
            <button onClick={prev}>&#10094;</button>
            <button onClick={next}>&#10095;</button>
    </div>
    </div>
  );
}
