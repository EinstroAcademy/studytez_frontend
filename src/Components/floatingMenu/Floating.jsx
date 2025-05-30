import React, { useState } from "react";
import "./floating.css";

import enroll from "../../../Images/icons/enroll2.png";
import email from "../../../Images/icons/email1.png";
import linkedin from "../../../Images/icons/linkedin.png";
import whatsapp from "../../../Images/icons/whatsapp1.png";
import { Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import Select from "react-select";
import EnquiryForm from "./EnquiryForm";

function Floating() {
  const [isEnquiry, setIsEnquiry] = useState(false);
  return (
    <>
      <div className="floating-menu">
        <a
          className="fl-item edge-t fl-contact"
          onClick={() => setIsEnquiry(!isEnquiry)}
        >
          <div class="icon">
            <img src={enroll} className="img-rotate" loading="lazy"/>
          </div>
          <span class="text">Enroll</span>
        </a>
        <a className="fl-item fl-email" href="mailto:info@einstrostudyabroad.com">
          <div class="icon">
            <img src={email} className="img-rotate" loading="lazy"/>
          </div>
          <span class="text">Email</span>
        </a>
        <a className="fl-item fl-link" href="https://www.linkedin.com/showcase/einstrostudyabroad/" target="_blank">
          <div class="icon">
            <img src={linkedin} className="img-rotate" loading="lazy"/>
          </div>
          <span class="text">Linkedin</span>
        </a>
        <a
          className="fl-item edge fl-wa"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918925565861&text=Hello%2C%20I%20want%20to%20Study%20Abroad.%2C%20Please%20Contact%20me"
        >
          <div class="icon">
            <img src={whatsapp} className="img-rotate" loading="lazy"/>
          </div>
          <span class="text">Whatsapp</span>
        </a>
      </div>
      <EnquiryForm isEnquiry={isEnquiry} setIsEnquiry={setIsEnquiry} />
    </>
  );
}

export default Floating;
