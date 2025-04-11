import React from 'react'
import './journey.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import roadmap from '../../Images/home/roadmap.png'
import expert from '../../Images/home/expert1.png'

function Journey() {
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
            <div className="journey-card">
              <div className="d-flex ">
                <div className="roadmap-content">Create Your Roadmap</div>
                <div>
                  <img src={roadmap} className="roadmap-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-expert-card">
              <div className="d-flex ">
                <div className="expert-content">Ask an Expert</div>
                <div>
                  <img src={expert} className="expert-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-expert-card">
              <div className="d-flex ">
                <div className="expert-content">Read our blogs</div>
                <div>
                  <img src={expert} className="expert-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-card">
              <div className="d-flex ">
                <div className="roadmap-content">Find your path</div>
                <div>
                  <img src={roadmap} className="roadmap-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="journey-expert-card">
              <div className="d-flex ">
                <div className="expert-content">Explore courses</div>
                <div>
                  <img src={expert} className="expert-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    
    </div>
  );
}

export default Journey