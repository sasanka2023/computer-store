import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../../public/gridimgs/1.jpg';
import two from '../../public/gridimgs/2.jpg';
import three from '../../public/gridimgs/3.jpg';
import four from '../../public/gridimgs/4.jpg';
import five from '../../public/gridimgs/5.jpg';
import six from '../../public/gridimgs/6.jpg';
import seven from '../../public/gridimgs/7.jpg';
import eight from '../../public/gridimgs/8.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';



// import required modules
import { Autoplay,Grid} from 'swiper/modules';
import Image from 'next/image';
const Gridbar = () => {
  return (
    <div className='mt-14 mb-14 text-center items-center ml-10 mr-10 block'>
        <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction: false,
          }}
         
        spaceBetween={40}
        speed={2000}
        
        modules={[Autoplay,Grid]}
        className="mySwiper"
        
      >
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={one} alt='1'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={two} alt='2'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={three} alt='3'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={four} alt='4'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={five} alt='5'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={six} alt='6'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={seven} alt='7'></Image></SwiperSlide>
        <SwiperSlide className="shadow-glow hover:shadow-glow-hover transition-shadow"><Image src={eight} alt='8'></Image></SwiperSlide>
        
        
      </Swiper>
      <div className='text-center  content-center w-full  text-white mt-5p flex justify-center items-center'>
        <h2 className='font-normal text-2xl mr-4'>Still waiting ?</h2>
        <button className='p-2 bg-white text-black font-semibold'>Shop now</button>
      </div>
      </div>
  )
}

export default Gridbar