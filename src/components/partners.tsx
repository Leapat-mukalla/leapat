'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import sirajImage from '@/svgs/partners/siraj.png';
import HadhramutForCultureImage from '@/svgs/partners/hadhramut-for-culture.png';
import britchCounsil from '@/svgs/partners/britch-counsil.png';

const imageSources = [
  { src: HadhramutForCultureImage, alt: 'HadhramutForCulture' },
  { src: sirajImage, alt: 'Siraj' },
  { src: britchCounsil, alt: 'British Council' },
  { src: HadhramutForCultureImage, alt: 'HadhramutForCulture2' },
  { src: sirajImage, alt: 'Siraj2' },
  { src: britchCounsil, alt: 'British Council2' },
  { src: HadhramutForCultureImage, alt: 'HadhramutForCulture3' },
  { src: sirajImage, alt: 'Siraj3' },
  { src: britchCounsil, alt: 'British Council3' },
];

// is not work with me as design usein Carousel
const Partners = () => {
  return (
    <div className="relative w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4">
        {imageSources.map((image, index) => (
          <div key={index} className="flex items-center justify-center min-w-[150px] flex-shrink-0">
            <Image src={image.src} alt={image.alt} className="object-contain" width={100} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
