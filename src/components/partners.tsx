'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ourProjects/carousel';
import sirajImage from '@/svgs/partners/siraj.png';
import HadhramutForCultureImage from '@/svgs/partners/hadhramut-for-culture.png';
import britchCounsil from '@/svgs/partners/britch-counsil.png';

const imageSources = [
  { src: HadhramutForCultureImage, alt: 'HadhramutForCulture' },
  { src: sirajImage, alt: 'Siraj' },
  { src: britchCounsil, alt: 'britchCounsil' },
  { src: HadhramutForCultureImage, alt: 'HadhramutForCultureImage' },
  { src: sirajImage, alt: 'sirajImage2' },
  { src: britchCounsil, alt: 'britchCounsil2' },
  { src: HadhramutForCultureImage, alt: 'HadhramutForCultureImage2' },
  { src: sirajImage, alt: 'sirajImage3' },
  { src: britchCounsil, alt: 'britchCounsil3' },
  // Add more images as needed
];

const Partners = () => {
  return (
    <div className="relative w-full overflow-x-auto">
      <Carousel opts={{ direction: 'rtl', loop: false }}>
        <CarouselContent className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9">
          {imageSources.map((image, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <Image src={image.src} alt={image.alt} className="w-[133px] h-[39px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
