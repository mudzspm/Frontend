// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import SupportCard from './supportCard';
interface SupportCardProps {
    image: string;
  }


const SwipeImg  =()=> {

    const imagesAnimals = [
        {
          src: 'animal-.png',
          alt: '',
        },
    
        {
          src: 'farm-.png',
          alt: 'Farm',
        },
        {
          src: 'animal-2.png',
          alt: 'Aninal',
        },
        {
          src: 'farm-2.png',
          alt: 'Farm',
        },
      ];


  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1920: {
                slidesPerView: 6,
                spaceBetween: 5,
              },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imagesAnimals.map(({ src }) => (
            <SwiperSlide>
                  <SupportCard image={src} />
                  </SwiperSlide>
                ))}      
        
      </Swiper>
    </>
  );
}

export default SwipeImg;