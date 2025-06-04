import React, { useEffect, useState } from "react";
import "./blog.css";
import blog from "../../Images/service/blogg.png";
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
import blogGroup from "../../Images/service/blogGroup.jpg";
import truncate from "lodash/truncate";
import facebook from "../../Images/icons/social/facebook.png";
import insta from "../../Images/icons/social/instagram.png";
import youtube from "../../Images/icons/social/youtube.png";
import twitter from "../../Images/icons/social/twitterx.png";
import linkedin from "../../Images/icons/social/linkedin.png";
import whatsapp from "../../Images/icons/social/whatsapp.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import plane from "../../Images/icons/plane.png";
// import EnquiryForm from "../floatingMenu/EnquiryForm";
import request, { NodeURL } from "../../api/api";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import Layout from "../Layout/Layout";

function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation()
  const [bloglist, setBlogList] = useState([]);
  const [blogDetails, setBlogDetails] = useState({});
  const [isEnquiry, setIsEnquiry] = useState(false);
  const [tableOption, setTableOption] = useState({
    search: "",
    skip: 0,
    limit: 10,
    fromDate: "",
    toDate: "",
  });

  const fetchBlogList = () => {
    request({
      url: '/client/blog/list',
      method: 'POST',
      data: tableOption,
    }).then((res) => {
      if (res.status === 1) {
        setBlogList(res.response.result);
      } else if (res && +res.status === 0) {
        toast.error(res.message)
      }
    })
  }

  useEffect(() => {
    fetchBlogList()
    window.scrollTo(0, 0);
  }, [tableOption]);

  const fetchBlogDetails = () => {
    request({
      url: '/client/blog/details',
      method: 'POST',
      data: { blogId: location?.state?.rowId },
    }).then((res) => {
      if (res.status === 1) {
        setBlogDetails(res.response);
      } else if (res && +res.status === 0) {
        toast.error(res.message)
      }
    }).catch((err)=>
    console.log(err))
  }

  useEffect(() => {
    if (location?.state?.rowId) {
      fetchBlogDetails()
    }
  }, [location?.state?.rowId,params]);

  console.log(location);
  return (
    <Layout>
      <Helmet>
        <title>{blogDetails?.title || "Studytez Blog | Einstro Academy"}</title>
        <meta name="description" content={truncate(blogDetails?.details?.replace(/<[^>]+>/g, ''), { length: 160 }) || "Read expert blogs about studying abroad, career planning, and overseas education guidance from Einstro Academy."} />
        <meta name="keywords" content="Study Abroad, Blog, Career Guidance, Einstro Academy, Overseas Education" />
        <meta property="og:title" content={blogDetails?.title || "Einstro Academy Blog"} />
        <meta property="og:description" content={truncate(blogDetails?.details?.replace(/<[^>]+>/g, ''), { length: 160 })} />
        <meta property="og:image" content={`${NodeURL}/${blogDetails?.image}`} />
        <meta property="og:url" content={`https://www.einstrostudyabroad.com/blog/${params.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="container-fluid p-0">
        <div className="blog-head">
          <div className="image-wrapper">
            <img src={blogImg} loading="lazy" />
            <img src={blogImg} loading="lazy" />
          </div>
          {/* <div className="blog-heading">
            <h1>Blog</h1>
          </div> */}
          <div className="blog-plane">
            <img src={plane} loading="lazy" />
          </div>
        </div>
        <div className="container my-5">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              <div className="blog-detail-card p-4">
                <div>
                  <h2>{blogDetails?.title}</h2>
                </div>
                <div>
                  <img src={`${NodeURL}/${blogDetails?.image}`} className="img-fluid" loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <h6>{blogDetails.postedOn ? format(new Date(blogDetails.postedOn), 'dd-MMM-yyyy') : ''}</h6>
                  <p
                    dangerouslySetInnerHTML={{ __html: blogDetails?.details }}
                  ></p>
                  <div className="text-center">
                    <button
                      className="book-btn"
                      onClick={() => setIsEnquiry(!isEnquiry)}
                    >
                      Get Free Counselling
                    </button>
                  </div>
                </div>
              </div>
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
                          <img src={whatsapp} loading="lazy" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.facebook.com/einstroacademy"
                          target="_blank"
                        >
                          {" "}
                          <img src={facebook} loading="lazy" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.youtube.com/@einstroacademy"
                          target="_blank"
                        >
                          {" "}
                          <img src={youtube} loading="lazy" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.instagram.com/einstrostudyabroad/"
                          target="_blank"
                        >
                          <img src={insta} loading="lazy" />
                        </a>
                      </div>
                      <div>
                        <a href="https://www.linkedin.com/showcase/einstrostudyabroad/" target="_blank">
                          <img src={linkedin} loading="lazy" />
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
                        {bloglist
                          .filter((list) => list.routeId !== params.id)
                          .map((list) => {
                            return (
                              <SwiperSlide
                                className="blog-slide"
                                onClick={() => navigate(`/blog/${list?.routeId}`, { state: { rowId: list._id } })}
                              >
                                <div className="article-list">
                                  <div className="px-3">
                                    <img src={`${NodeURL}/${list?.image}`} loading="lazy" />
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

export default BlogDetails;
