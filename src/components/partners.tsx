'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Svg from './Svg';


const Partners = () => {
  return (
    <div className='relative'>
        <Carousel
            autoPlay
            infiniteLoop
            // showStatus={false}
            // showThumbs={true}
            // interval={2000}
            showArrows={false}
            stopOnHover={false} // Optional: Continue autoplay on hover
            swipeable={true}    // Optional: Allow swiping to change slides
            dynamicHeight={true} // Optional: Adjust height dynamically
        >
            <div>
              <img src="/partners/siraj.png" alt="Siraj" />
            </div>

            <div>
              <img src="/partners/britch-counsil.png" alt="Britch Counsil" />
            </div>
            <div>
              <img src="/partners/hadhramut-for-culture.png" alt="hadhramut-for-culture" />
            </div>
        </Carousel>
    </div>
  );
};

export default Partners;
