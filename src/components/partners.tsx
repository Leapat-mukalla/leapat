'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

const imageSources = [
  { src: '/partners/hadhramut-for-culture.png', alt: 'HadhramutForCulture' },
  { src: '/partners/siraj.png', alt: 'Siraj' },
  { src: '/partners/britch-counsil.png', alt: 'britchCounsil' },
];

const Partners = () => {
  return (
    <div className="relative w-full overflow-x-auto">
      <Carousel
        plugins={[
          AutoScroll({
            playOnInit: true,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        opts={{ direction: 'rtl', loop: true }}
      >
        <CarouselContent className="items-center">
          {[
            ...imageSources,
            ...imageSources,
            ...imageSources,
            ...imageSources,
          ].map((image, index) => (
            <CarouselItem
              key={index}
              className="relative basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={130}
                height={100}
                className="object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
