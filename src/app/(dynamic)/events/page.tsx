import React from 'react';

import { HeroSection } from "@/components/hero-section";
import { EVENTS } from './data';

export default async function ProjectsPage() {
  return (
    <>
      <HeroSection view="list" title="الاحداث">
      </HeroSection>

      <section className="bg-background py-20 px-4">
        <h2 className="text-6xl text-center py-20 font-bold">المتحدثين</h2>
        <div className='flex flex-wrap justify-center gap-2'>
          {EVENTS.map((event, index) => (
            <div key={index} className="flex items-center justify-center">
            <div className="relative">
             {event.speaker.company && <div
                className="rounded-full p-2 absolute -bottom-2 end-2"
                style={{
                  background: "linear-gradient(122.26deg, #986CAC -2.58%, #100F0D 52.67%, #75A3B1 107.26%)",
                }}
              >
                {/* Image container with white padding to create border effect */}
                <div className="rounded-full p-0.5 bg-white">
                  <div className="overflow-hidden rounded-full">
                  <a href={event.speaker.company.url} target='_blank' rel='noopener noreferrer'>
                <img className='rounded-full size-4 sm:size-16 ' src={event.speaker.company.image} alt={event.speaker.name} />
              </a>
                  </div>
                </div>
              </div>}
              {/* Gradient border container with custom gradient */}
              <div
                className="rounded-full p-2"
                style={{
                  background: "linear-gradient(122.26deg, #986CAC -2.58%, #100F0D 52.67%, #75A3B1 107.26%)",
                }}
              >
                {/* Image container with white padding to create border effect */}
                <div className="rounded-full p-0.5 bg-white">
                  <div className="overflow-hidden rounded-full">
                  <a href={event.speaker.url} target='_blank' rel='noopener noreferrer'>
                <img className='rounded-full size-16 sm:size-24 md:size-40' src={event.speaker.image} alt={event.speaker.name} />
              </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}

        </div>
      </section>
      <section className="bg-background py-20 ">
        <ul className="mx-auto max-w-[1100px]">
          <li className='w-full font-semibold px-4 max-w-full grid grid-cols-12 items-center min-h-40 border-t border-muted transition-opacity duration-300 first-of-type:border-t-0'>
            <div className='text-3xl col-span-12 md:col-span-6'>
              عنوان الحدث
            </div>
            <div className='text-3xl col-span-12 md:col-span-3'>
              المتحدث
            </div>
            <div className='text-3xl col-span-12 md:col-span-3'>
              الفيديو
            </div>
          </li>
          {EVENTS.map((event, index) => (
            <li key={index} className='w-full hover:bg-muted px-4 max-w-full grid grid-cols-12 items-center min-h-40 border-t border-muted transition-opacity duration-300 first-of-type:border-t-0'>
              <div className='text-3xl col-span-12 md:col-span-6'>
                {event.title}
              </div>
              <div className='flex gap-3 col-span-12 md:col-span-3'>
                <div className='flex -gap-2'>
                 {event.speaker.company &&
                  <a href={event.speaker.company.url} target='_blank' rel='noopener noreferrer'>
                  <img className='rounded-full w-8 h-8' src={event.speaker.company.image} alt={event.speaker.company.name} />
                </a>}
                  <a href={event.speaker.url} target='_blank' rel='noopener noreferrer'>
                    <img className='rounded-full w-8 h-8' src={event.speaker.image} alt={event.speaker.name} />
                  </a>
                </div>


                <a href={event.speaker.url} target='_blank' rel='noopener noreferrer' className='text-xl'>
                  {event.speaker.name}
                </a>

              </div>
              <div className='col-span-12 md:col-span-3'>
                {event.video ? (

              <div className='col-span-12 flex justify-center items-center md:col-span-3 aspect-[9/6] my-4 bg-muted rounded-lg overflow-hidden'>
              </div>
                ) : (
                  <div className='text-xl'>
                    {Intl.DateTimeFormat('ar-SA', { dateStyle: 'full' }).format(new Date(event.date))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
