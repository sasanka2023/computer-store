'use client'

import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../../public/1.jpg';
import Styles from './home.module.css';



import eight from '../../public/8.jpg';
import nine from '../../public/9.jpg';
import ten from '../../public/10.jpg';
import eleven from '../../public/11.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Gridbar from '@/components/Gridbar';

const adsElement = [
  { imageUrl: one },



  
  { imageUrl: eight },
  { imageUrl: nine },
  { imageUrl: ten },
  { imageUrl: eleven },

];

const headTitles = [
  {titleline: 'Welcome to the best online store'},
  {titleline: 'Get the best deals on our products'},
  {titleline: 'We have the best products for you'},
  {titleline: 'Get the best deals on our products'},
  {titleline: 'enjoy the best deals on our products'},


]

export default function Home() {
  return (
    <main>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {adsElement.map(({ imageUrl }, index) => (
          <SwiperSlide key={index} className='mb-10 block  '>
            <AdUnit imageUrl={imageUrl} id={index} key={index} title={headTitles[index].titleline}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='text-center content-center w-full h-1/5 text-white mt-5p '>
        <h1 className='font-bold text-4xl pb-14'>Why Choose Us for Your Hardware Needs</h1>
        <p className='text-1xl ml-14 mr-14 text-wrap'>At our website, we guarantee the quality of our hardware components, offer competitive pricing,<br/> and provide fast shipping to ensure a seamless shopping experience.</p>
      </div>

      <div>
        <Gridbar/>
      </div>
      
    </main>

    
  );
}

const AdUnit = ({ imageUrl, id,title }) => (
  <div className="w-full h-fit relative flex">
    <div className=' w-1/3  text-right  text-white font-bold ml-10'>
      <h2 className={Styles.headline}>{title}</h2>
    </div>
    <Image
      src={imageUrl}
      alt={`ad${id}`}
      className={`${Styles.imgstyle}mr-0 ml-auto w-2/3 `} 
    />
    
  </div>
)
  
   
 

