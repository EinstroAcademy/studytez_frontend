import React, { useEffect, useState } from "react";
import "./about.css";
import tellus from "../../Images/home/7.png";
import guidence from "../../Images/home/8.png";
import support from "../../Images/home/9.png";

function About() {
  const [image, setImage] = useState(tellus);
  console.log(image);

  const scrollPosition = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition < 1700) {
        setImage(tellus);
      } else if (scrollPosition >= 1700 && scrollPosition < 2300) {
        setImage(guidence);
      } else if(scrollPosition>2300) {
        setImage(support);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container about-main">
      <div>
        <h1 className="about-head">
          Here's how we turn your dream into reality
        </h1>
      </div>
      <div className="about-container">
        <div className="about-left">
          <div className="about-left-content">
            <h3>Heading</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              repudiandae veniam optio sunt nostrum rerum esse nulla cumque
              laudantium! Similique, rerum adipisci! Laudantium earum labore
              iusto veniam possimus, officiis eius magni minima veritatis
              impedit rem dolore ipsa! Sapiente ipsa laborum tempora perferendis
              nesciunt adipisci ratione.
            </p>
          </div>
          <div className="about-left-content">
            <h3>Heading</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              repudiandae veniam optio sunt nostrum rerum esse nulla cumque
              laudantium! Similique, rerum adipisci! Laudantium earum labore
              iusto veniam possimus, officiis eius magni minima veritatis
              impedit rem dolore ipsa! Sapiente ipsa laborum tempora perferendis
              nesciunt adipisci ratione.
            </p>
          </div>
          <div className="about-left-content">
            <h3>Heading</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              repudiandae veniam optio sunt nostrum rerum esse nulla cumque
              laudantium! Similique, rerum adipisci! Laudantium earum labore
              iusto veniam possimus, officiis eius magni minima veritatis
              impedit rem dolore ipsa! Sapiente ipsa laborum tempora perferendis
              nesciunt adipisci ratione.
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-child">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
