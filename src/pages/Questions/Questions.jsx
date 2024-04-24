import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import style from "./Question.module.css";
import Menu from "../Menu/Menu";
import logo from "../../assets/images/logo.png";
import { questions } from "../../data/questionsData";

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveQuestion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <>
      <header className={style.navbar}>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.pages}>
          <Menu />
        </div>
      </header>
      <div className={style.question_section}>
        <div className={style.question_list}>
          {questions.map((question) => (
            <div className={style.question_card} key={question.id}>
              <div
                className={style.question}
                onClick={() => toggleAccordion(question.id)}
              >
                <h3>{question.question}</h3>
                <FontAwesomeIcon
                  icon={
                    activeQuestion === question.id ? faChevronUp : faChevronDown
                  }
                />
              </div>
              {activeQuestion === question.id && (
                <div className={style.answer}>
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
