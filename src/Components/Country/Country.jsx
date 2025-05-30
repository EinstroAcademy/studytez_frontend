import React from "react";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./country.css";
import UK from '../../Images/country/uk.png'
import USA from '../../Images/country/usa.png'
import AUS from '../../Images/country/australia.png'
import CAN from '../../Images/country/canada.png'
import FR from '../../Images/country/france.png'
import IR from '../../Images/country/ireland.png'
import { useNavigate } from "react-router-dom";

function Country() {
  const navigate=useNavigate()
  const countryList = [
    {
      name:"UK",
      image:UK
    },
    {
      name:"USA",
      image:USA
    },
    {
      name:"Australia",
      image:AUS
    },
    {
      name:"Canada",
      image:CAN
    },
    {
      name:"France",
      image:FR
    },
    {
      name:"Ireland",
      image:IR
    }
  ]
  return (
    <div className="container p-0 my-5">
      <div className="country-main">
        <h1>The Best Countries to Study Abroad</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          pagination={{clickable:true}}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="country-swiper"
         
        >
          <div className="country-card">
            {
              countryList.map((list)=>{
                return  <SwiperSlide className="swiper-slide-uni">
                <div className="country-slide" onClick={()=>navigate(`/destination/${list.name}`)}>
                <img src={list.image} alt="" className="country-image" loading="lazy" />
                <p className="country-content">
                  <h2>Study in {list.name}</h2>
                </p>
                </div>
              </SwiperSlide>
              })
            }
           
            
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Country;
