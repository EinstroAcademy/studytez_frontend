import React, { useState } from "react";
import { motion } from "framer-motion";
import './accordion.css'

const Accordion = ({ title, children }) => {
  const [isAccordionOpen, setisAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setisAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordion">
      <motion.div
        className="accordion-header"
        onClick={toggleAccordion}
        initial={false}
        animate={{ backgroundColor: isAccordionOpen ? "#f0f0f0" : "#fff" }}
        transition={{ duration: 0.3 }}
      >
        <a>{title}</a>
        {
          title==="Study Abroad"&& <motion.span
          className="accordion-icon"
          initial={false}
          animate={{ rotate: isAccordionOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="mx-2"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className=""
              d="M6 9L12 15L18 9"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
        }
       
      </motion.div>
      <motion.div
        className="accordion-content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isAccordionOpen ? "150px" : 0, opacity: isAccordionOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: isAccordionOpen?"auto":"hidden" }}
      >
        <div className="accordion-text">{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
