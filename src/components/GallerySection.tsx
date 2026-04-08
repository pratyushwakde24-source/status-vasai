import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const galleryImages = [
  { src: '/images/ambience/ambience-1.jpg', alt: 'Restaurant Ambience 1' },
  { src: '/images/ambience/ambience-2.jpg', alt: 'Restaurant Ambience 2' },
  { src: '/images/ambience/ambience-3.jpg', alt: 'Restaurant Ambience 3' },
  { src: '/images/food/food-1.jpg', alt: 'Delicious Food 1' },
  { src: '/images/food/food-2.jpg', alt: 'Delicious Food 2' },
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center text-white mb-12">
          Glimpses of Status
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} style={{ width: '300px', height: '400px' }}>
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;