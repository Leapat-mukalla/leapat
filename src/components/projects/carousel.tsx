'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { UseEmblaCarouselType } from 'embla-carousel-react';

const images = [
  'https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg',
  'https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg',
  'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg',
  'https://images.pexels.com/photos/3119964/pexels-photo-3119964.jpeg',
  'https://images.pexels.com/photos/6057023/pexels-photo-6057023.jpeg',
  'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg',
];

const TWEEN_FACTOR_BASE = 0.1;

const numberWithinRange = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export default function ProjectsCarousel() {
  return (
    <Carousel opts={{ direction: 'rtl', loop: true }} className="embla">
      <Content />
    </Carousel>
  );
}

const Content = () => {
  const { api: emblaApi } = useCarousel();

  const tweenFactor = React.useRef(0);
  const tweenNodes = React.useRef<HTMLDivElement[]>([]);
  const setTweenNodes = React.useCallback(
    (emblaApi: NonNullable<UseEmblaCarouselType[1]>) => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
        return slideNode.querySelector(
          '.embla__slide__number > div',
        ) as HTMLDivElement;
      });
    },
    [],
  );

  const setTweenFactor = React.useCallback(
    (emblaApi: NonNullable<UseEmblaCarouselType[1]>) => {
      tweenFactor.current =
        TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    },
    [],
  );

  const tweenOpacity = React.useCallback(
    (emblaApi: NonNullable<UseEmblaCarouselType[1]>, eventName?: any) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];

          tweenNode.style.transform = `scale(${scale}) perspective(1000px)`;
        });
      });
    },
    [],
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenOpacity]);

  return (
    <CarouselContent>
      {images.map((src, index) => (
        <CarouselItem key={index} className="basis-1/3">
          <Item src={src} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

const Item = ({ src }: { src: string }) => {
  return (
    <div className="embla__slide__number">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm">
        <Image fill alt="text" src={src} className="object-cover" />
      </div>
    </div>
  );
};
