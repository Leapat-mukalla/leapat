'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Partners = () => {
  return (
    <div className="relative">
      <Carousel opts={{ direction: 'rtl' }}>
        <CarouselContent>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            ...
          </CarouselItem>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            ...
          </CarouselItem>
          <CarouselItem className="flex min-h-96 items-center justify-center bg-white/15 text-4xl">
            ...
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
