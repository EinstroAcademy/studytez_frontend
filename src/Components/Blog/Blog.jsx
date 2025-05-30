import React, { useEffect, useState } from "react";
import "./blog.css";
import blog from "../../Images/service/blogg.png";
import Paginations from 'react-js-pagination'

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


import blogImg from "../../Images/service/blogbg.png";
import plane from "../../Images/icons/plane.png";
import truncate from "lodash/truncate";
import facebook from "../../Images/icons/social/facebook.png";
import insta from "../../Images/icons/social/instagram.png";
import youtube from "../../Images/icons/social/youtube.png";
import linkedin from "../../Images/icons/social/linkedin.png";

import whatsapp from "../../Images/icons/social/whatsapp.png";
import { useNavigate } from "react-router-dom";
import request, { NodeURL } from "../../api/api";
import { method } from "lodash";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";

function Blog() {
  const navigate = useNavigate();
  const [bloglist, setBlogList] = useState([]);
  const [pages, setpages] = useState("");
  const [activePage, setactivePage] = useState(1);
  const [currPage, setcurrPage] = useState(25);
  const [pageRangeDisplayed, setpageRangeDisplayed] = useState(4);
  const [list, setList] = useState([]);
  const [tableOption, setTableOption] = useState({
    search: "",
    skip: 0,
    limit: 10,
    fromDate: "",
    toDate: "",
  });

  const fetchBlogList =()=>{
    request({
      url:'/client/blog/list',
      method:'POST',
      data: tableOption,
    }).then((res)=>{
      if (res.status === 1) {
        setList(res.response.result);
        setpages(res.response.fullcount);
        setcurrPage(res.response.length);
      }else if (res && +res.status === 0) {
          setList(res.response.result);
          setpages(res.response.fullcount);
          setcurrPage(res.response.length);
      }
    })
  }

  useEffect(() => {
    setBlogList([]);
    fetchBlogList()
    window.scrollTo(0, 0);
  }, [tableOption]);

  const paginate = (data) => {
    const limit = tableOption.limit;

    if (data) {
      setactivePage(data);
      setcurrPage(limit);
      setTableOption((state) => {
        return {
          ...state,
          page: {
            current: data,
            history: data,
          },
          skip: data * limit - limit,
        };
      });
    }
  };

  return (
     <Layout>
      <Helmet>
  <title>Studytez Blog | Einstro Academy</title>
  <meta name="description" content="Explore our latest articles and insights on studying abroad, scholarships, destinations, and student tips from Einstro Academy." />
  <meta name="keywords" content="Study Abroad, Einstro Academy, Education Blog, Student Tips, Scholarships, Overseas Education" />
  <meta property="og:title" content="Studytez Blog" />
  <meta property="og:description" content="Get expert guidance on studying abroad and explore international education through our latest blog articles." />
  <meta property="og:image" content="https://www.studytez.com/assets/images/blog-thumbnail.jpg" />
  <meta property="og:url" content="https://www.studytez.com/blog" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
       <div className="container-fluid p-0">
        <div className="blog-head">
          <div className="image-wrapper">
            <img src={blogImg} loading="lazy"/>
            <img src={blogImg} loading="lazy"/>
          </div>
          {/* <div className="blog-heading">
            <h1>Blog</h1>
          </div> */}
          <div className="blog-plane">
            <img src={plane} loading="lazy"/>
          </div>
        </div>
        <div className="container my-5">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              <div className="row">
                {list.map((list) => {
                  return (
                    <div
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
                      onClick={() => navigate(`/blog/${list?.routeId}`,{state:{rowId:list._id}})}
                    >
                      <div className="blog-card">
                        <div>
                          <img src={`${NodeURL}/${list?.image}`} className="blog-img" loading="lazy"/>
                        </div>
                        <div className="blog-card-content">
                          <h5>{list?.title}</h5>
                          <p>{truncate(list.description, { length: 90 })}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Paginations
          prevPageText={<i class="fa fa-angle-left" aria-hidden="true"></i>}
          nextPageText={<i class="fa fa-angle-right" aria-hidden="true"></i>}
          firstPageText={
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          }
          lastPageText={
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
          }
          activePage={activePage}
          itemsCountPerPage={currPage}
          totalItemsCount={pages}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={paginate}
          itemClass="page-item"
          linkClass="page-link"
          activeLinkClass="blog"
        />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 right-fix">
              <div className="row">
                <div className="col-12">
                  <div className="connect-card">
                    <h4>
                      Let's Connect<hr></hr>
                    </h4>
                    <div className="connect-social">
                      <div>
                        <a
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=918925565861&text=Hello%2C%20I%20want%20to%20Study%20Abroad.%2C%20Please%20Contact%20me"
                        >
                          {" "}
                          <img src={whatsapp} loading="lazy"/>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.facebook.com/einstroacademy"
                          target="_blank"
                        >
                          {" "}
                          <img src={facebook} loading="lazy"/>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.youtube.com/@einstroacademy"
                          target="_blank"
                        >
                          {" "}
                          <img src={youtube} loading="lazy"/>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.instagram.com/einstrostudyabroad/"
                          target="_blank"
                        >
                          <img src={insta} loading="lazy"/>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.linkedin.com/showcase/einstrostudyabroad/" target="_blank">
                          <img src={linkedin} loading="lazy"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="article-card">
                    <h4>
                      Recent Article<hr></hr>
                    </h4>
                    <div className="">
                      <Swiper
                        direction={"vertical"}
                        grabCursor={true}
                        pagination={false}
                        slidesPerView={"3"}
                        loop
                        modules={[Pagination, Autoplay]}
                        className="myBlogSwiper"
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                      >
                        {list.map((list) => {
                          return (
                            <SwiperSlide
                              className="blog-slide"
                              onClick={() => navigate(`/blog/${list?.routeId}`,{state:{rowId:list._id}})}
                            >
                              <div className="article-list">
                                <div className="px-3">
                                  <img src={`${NodeURL}/${list?.image}`} loading="lazy"/>
                                </div>
                                <div className="px-2">
                                  <h5 className="article-des">
                                    {truncate(list.description, {
                                      length: 130,
                                    })}
                                  </h5>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Layout>
  );
}

export default Blog;
