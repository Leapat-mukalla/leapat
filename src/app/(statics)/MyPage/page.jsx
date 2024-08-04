"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
export default function MyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef(null);

  const images = [
    "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg",
    "https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg",
    "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg",
    "https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg",
    "https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg",
    "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg",
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.partition}>مشاريعناـــ</div>
      <h1 className={styles.headTitle}>ماذا انجزنا؟</h1>

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
            <div className={styles.moreButton}> &#10094; المزيد عن المشروع</div>
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
            <div className={styles.moreButton}> &#10094; المزيد عن المشروع</div>
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
            <div className={styles.moreButton}> &#10094; المزيد عن المشروع</div>
          </div>
        </Link>

        <div className={styles.moreButton1}> مزيد من المشاريع</div>

        <h2 className={styles.partition}>معرض الوسائط ـــــ</h2>
        <h2 className={styles.headTitle}>شاهدنا بدقة أعلى</h2>
        <div className={styles.carouselContainer}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // spaceBetween={-10}
            loop={true}
            slidesPerView={4.2}
            centeredSlides={true}
            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${styles.slide} ${
                    selectedIndex === index ? styles.isSelected : ""
                  }`}
                >
                  <Image
                    className={styles.image}
                    src={image}
                    width={150}
                    height={250}
                    alt={`Slide ${index}`}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div>
              <div
                className="swiper-button-prev"
                style={{ color: "white" }}
                onClick={() => swiperRef.current.slidePrev()}
              ></div>
              <div
                className="swiper-button-next"
                style={{ color: "white" }}
                onClick={() => swiperRef.current.slideNext()}
              ></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
