'use client'

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import sirajImage from '@/svgs/partners/siraj.png';
import HadhramutForCultureImage from '@/svgs/partners/hadhramut-for-culture.png';
import britchCounsil from '@/svgs/partners/britch-counsil.png';

const Partners = () => {
  return (
    <div className="relative">
      <Carousel opts={{ direction: 'rtl' }}>
        <CarouselContent>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            <Image src={HadhramutForCultureImage} alt="HadhramutForCulture" className="w-[133px] h-[39px]" />
          </CarouselItem>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            <Image src={sirajImage} alt="Siraj" />
          </CarouselItem>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            <Image src={britchCounsil} alt="britchCounsil" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
