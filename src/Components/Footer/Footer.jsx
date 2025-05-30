import React from 'react'
import './footer.css'
// import logo from "../../Images/logo/Einstro-footer-logo.png";
import address from "../../Images/icons/location2.png"
import phone from "../../Images/icons/phone.png"
import email from "../../Images/icons/footer-email.png"
import logo from "../../Images/home/studytezorg.png";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <div className="container-fluid mt-5 footer">
    <div className="footer-container">
      <div className="footer-logo-details">
        <img src={logo} alt="logo" className="footer-logo" loading="lazy" />
        <h6 className="mt-4">
          Since 2014, we have been helping students fulfil their study abroad
          dreams.
        </h6>
        <div className="footer-social-details">
          <a
            href="https://www.facebook.com/einstroacademy"
            target="_blank"
            className="footer-fb"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/einstrostudyabroad/"
            target="_blank"
            className="footer-social"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/showcase/einstrostudyabroad/"
            target="_blank"
            className="footer-social"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-company-details">
        <div className="footer-address">
          <img src={address} className="ft-icon" loading="lazy" />
          No. 4/636 A, VOC Street, PTC, Thuraipakkam (OMR), Chennai - 600 097,
          Tamil Nadu, India.
        </div>
        <div className="footer-contact">
          <img src={phone} className="ft-icon" />
          <a href="tel:8925565861">8925565861</a>
        </div>
        <div className="footer-mail">
          <a href="mailto:info@einstrostudyabroad.com">
            <img src={email} className="ft-icon" />
            Einstro Study Abroad
          </a>
        </div>
      </div>
      <div className="footer-link-details">
        <div>
          <ul className="footer-links">
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate("/about")}>About Us</a>
            </li>
            <li>
              <a onClick={() => navigate("/course/list")}>Find Course</a>
            </li>
            <li>
              <li className="footer-accordion">
                <a onClick={() => navigate("/blog")}>Blog</a>
              </li>
            </li>
            <li>
              <a onClick={() => navigate("/contact")}>Contact Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-link-details">
        <ul className="footer-links">
          <h5>
            <u>Study Destinations</u>
          </h5>
          <li>
            <a onClick={() => navigate("/destination/UK")}>
              {" "}
              Study in UK
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/USA")}>
              Study in USA
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/Australia")}>
              Study in Australia
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/Canada")}>
              {" "}
              Study in Canada
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/Germany")}>
              Study in Germany
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/Ireland")}>
              Study in Ireland
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/destination/France")}>
              {" "}
              Study in France
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copy-ryt">
      &copy; {new Date().getFullYear()} Studytez | All Rights
      Reserved | powered by Einstro
    </div>
  </div>
  )
}

export default Footer