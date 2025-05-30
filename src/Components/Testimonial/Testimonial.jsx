import React, { useEffect, useState } from "react";
import "./testimonial.css";
import Man from "../../Images/logo/man.jpg";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import qoute from "./../../Images/logo/testimonial-quote.png";
import tqoute from "../../Images/icons/qoute.png";
import tqouteleft from "../../Images/icons/tqoute.png";
import { testimonialData } from "../Data/testimonialData";
import { truncate } from "lodash";

function Testimonial() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    setReviewData(testimonialData);
  }, []);
  const testimonialList = [
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
    {
      name: "John Deo",
      img: Man,
      desg: "Reporter",
    },
  ];
  return (
    <section id="testimonial">
    <div className="container p-0 testimonial-bg">
      <div className="testimonial-bg-design">
        <div className="child-bg">
          <img src={qoute} loading="lazy"/>
        </div>
        <div className="testimonial-head">
          <h1>Testimonial</h1>
          <p>
            Thousands of students have placed their trust in Einstro Study
            Abroad to guide them through every step of their study abroad
            journey. Join our global community and achieve your academic dreams.
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        grabCursor={true}
        pagination={{ clickable: true }}
        watchSlidesProgress
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        className="testimonial-wrapper"
      >
        {reviewData.map((list) => {
          return (
            <SwiperSlide>
              <div className="">
                <div class="card-new">
                  <div class="face front-face">
                    <img src={list.image} alt="" class={`profile`} loading="lazy"/>
                    <div class="pt-3 text-uppercase name">{list.name}</div>
                    <div class="designation">{list.course}</div>
                    <div class="designation">{list.university},</div>
                    <div class="designation">{list.country}</div>
                  </div>
                  <div class="face back-face">
                    <span class="fas fa-quote-left"></span>
                    <div class="testimonial-review">
                      {truncate(list.review, { length: 440 })}
                    </div>
                    <span class="fas fa-quote-right"></span>
                  </div>
                </div>

                {/* <div className="testimonial-card-img">
                <img src={list.image} />
                <div className="testimonial-name">
                  <h3>{list.name}</h3>
                  <h5 className="tl-country">{list.course}</h5>
                  <h3 className="tl-country">{list.university}</h3>
                  <h5 className="tl-country"><i>{list.country}</i></h5>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt 
                </p>
              </div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </section>
  );
}

export default Testimonial;
