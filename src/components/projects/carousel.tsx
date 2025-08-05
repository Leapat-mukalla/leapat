"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/101.png",
    title: "واجهة تفاعلية متطورة",
    description: "تجربة مستخدم حديثة مع أحدث التقنيات",
  },
  {
    id: 2,
    image: "/101.png",
    title: "اجتماعات احترافية",
    description: "حلول تقنية للشركات والمؤسسات",
  },
  {
    id: 3,
    image: "/101.png",
    title: "تصاميم إبداعية",
    description: "فن رقمي بألوان زاهية ومتدرجة",
  },
  {
    id: 4,
    image: "/101.png",
    title: "مساحة عمل ذكية",
    description: "تحليل البيانات والبرمجة المتقدمة",
  },
  {
    id: 5,
    image: "/101.png",
    title: "عروض تقنية متقدمة",
    description: "شاشات تفاعلية وعناصر تقنية حديثة",
  },
];

export const ProjectsCarousel = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentSlide;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(slides.length - 1)) return "right";
    if (diff === -1 || diff === slides.length - 1) return "left";
    if (diff === 2 || diff === -(slides.length - 2)) return "far-right";
    if (diff === -2 || diff === slides.length - 2) return "far-left";
    return "hidden";
  };

  return (
    <div
      className="bg-carousel-bg relative w-full px-4 py-16"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Container */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...images, ...images].map((slide, index) => {
            const position = getSlidePosition(index);

            return (
              <div
                key={index}
                className={`absolute cursor-pointer transition-all duration-500 ease-in-out ${
                  position === "center"
                    ? "z-30 h-[320px] w-[500px] scale-100 opacity-100"
                    : position === "left" || position === "right"
                      ? "z-20 h-[320px] w-[140px] opacity-70"
                      : position === "far-left" || position === "far-right"
                        ? "z-10 h-[320px] w-[140px] opacity-40"
                        : "z-0 h-[320px] w-[140px] opacity-0"
                } ${
                  position === "left"
                    ? "-translate-x-[330px]"
                    : position === "right"
                      ? "translate-x-[330px]"
                      : position === "far-left"
                        ? "-translate-x-[480px]"
                        : position === "far-right"
                          ? "translate-x-[480px]"
                          : position === "hidden"
                            ? "translate-x-[600px]"
                            : "translate-x-0"
                }`}
                onClick={() => position !== "center" && goToSlide(index)}
              >
                <div className="bg-carousel-slide relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src={slide}
                    alt={slide + index}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "!w-6 bg-primary" : "bg-gray-300"
            }`}
            aria-label={`الانتقال إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
