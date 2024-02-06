import React, { useState } from "react";
import "../../css/Home/Questions.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const [bold, setBold] = useState(false);
  const [iconClick, setIconClick] = useState(false);

  const toggleAccordion = () => {
    setShow(!show);
    setBold(!bold);
    setIconClick(!iconClick);
  };

  return (
    <div className="accordion-div">
      <p
        className={`question-p ${show ? "active" : ""} ${bold ? "bold" : ""}`}
        style={{ color: show ? "#4b95cd" : "initial" }}
        onClick={toggleAccordion}
      >
        {question}
        <FontAwesomeIcon
          icon={iconClick ? faChevronUp : faChevronDown}
          className="icon"
          style={{ float: "right" }}
          onClick={toggleAccordion}
        />
      </p>
      {show && (
        <div>
          <p className="answer-p"> {answer} </p>
          <hr />
        </div>
      )}
      {!show && <hr />}
    </div>
  );
};

export default Accordion;
