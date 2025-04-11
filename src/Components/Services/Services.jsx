import React, { useState } from 'react'
import './service.css'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

import keyService from "../../Images/home/keyService.png";

function Services() {

    const [openId, setOpenId] = useState("1");

  // Toggle function to handle open/close
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="container-fluid service-container">
      <h3 className='text-center service-heading'>Key Service by Einstro</h3>
      <div className="container service-key">
        <div className="row align-items-center">
          <div className="col-6 pt-5">
          <Accordion flush open={openId} toggle={toggle} className='service-accordion'>
        <AccordionItem>
          <AccordionHeader targetId="1" onClick={() => toggle("1")}>Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2" onClick={() => toggle("2")}>Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3" onClick={() => toggle("3")}>Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4" onClick={() => toggle("4")}>Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5" onClick={() => toggle("5")}>Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
          </div>
          <div className="col-6">
              <div className='text-center'>
              <img src={keyService} className='service-right-img'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services