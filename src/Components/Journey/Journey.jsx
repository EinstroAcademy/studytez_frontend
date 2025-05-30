import React, { useState } from 'react'
import './journey.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import search from '../../Images/home/search.png'
import councellors from '../../Images/home/counsellor.png'
import university from '../../Images/home/university.png'
import { useNavigate } from 'react-router-dom';
import EnquiryForm from '../floatingMenu/EnquiryForm';

function Journey() {
  const navigate = useNavigate();
  const [isEnquiry,setIsEnquiry] =useState(false)
  return (
    <div className="container my-5">
      <div className="journey-slides-box">
        <Swiper
          slidesPerView={3}
          spaceBetween={35}
          freeMode={true}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode, Pagination]}
          className="journeySwiper"
        >
          <SwiperSlide>
            <div className="journey-card" onClick={()=>navigate('/course/list')}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="roadmap-content">Search and Apply to Top Universities</div>
                <div>
                  <img src={search} className="roadmap-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-expert-card" onClick={()=>setIsEnquiry(!isEnquiry)}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="expert-content">Talk to our Expert Counsellors</div>
                <div>
                  <img src={councellors} className="expert-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-expert-card" onClick={()=>navigate('/blog')}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="expert-content">Read our Blogs</div>
                <div>
                  <img src={university} className="expert-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
          <EnquiryForm isEnquiry={isEnquiry} setIsEnquiry={setIsEnquiry} />
    </div>
  );
}

export default Journey