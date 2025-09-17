import React from 'react'   
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider() {
  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
    >
      <SwiperSlide><img src="./IMG_1121 1.png " alt=""  style={{width:"1030px", height:"639px", margin: "0 auto"}}/></SwiperSlide>
      <SwiperSlide><img src="./IMG_1130 1.png " alt="" style={{width:"1030px", height:"639px", margin: "0 auto"}}/></SwiperSlide>
      <SwiperSlide><img src="./IMG_1142 1.png " alt="" style={{width:"1030px", height:"639px", margin: "0 auto"}}/></SwiperSlide>
      <SwiperSlide><img src="./IMG_1161 1.png " alt=""style={{width:"1030px", height:"639px", margin: "0 auto"}} /></SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Slider
