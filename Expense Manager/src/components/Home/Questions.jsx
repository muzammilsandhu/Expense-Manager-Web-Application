import React, { useState } from "react";
import Accordion from "./Accordion";
import { questions } from "./QuestionsAPI";
import "../../css/Home//Questions.scss";

const Questions = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="question-main-div">
        <div className="line-left" style={{ marginBottom: "5px" }}></div>
        <h1> Frequently Asked Questions </h1>
        <div className="question-div">
          {data.map((currentElement) => {
            const { id } = currentElement;
            return <Accordion key={id} {...currentElement} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;
