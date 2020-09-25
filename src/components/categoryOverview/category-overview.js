import React, { useContext, useEffect } from "react";
import "./category-overview.css";
import Category from "../category/category.js";
import Question from "../question/question.js";
import Modal from "react-modal";
import { DataContext } from "../../ApplicationContext.js";
const intro = new Audio('/intro.mp3');

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "60px",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    borderRadius: "0",
    background: "#011540",
    border: "none",
  },
  overlay: {
    background: "none",
  },
};

function CategoryOverview() {
  const { questions, currentQuestion, answeredQuestions, isFirstVisit } = useContext(DataContext);
  const [getAnsweredQuestions, setAnsweredQuestions] = answeredQuestions;
  const [getCurrentQuestion, setCurrentQuestion] = currentQuestion;
  const [getIsFirstVisit, setIsFirstVisit] = isFirstVisit;
  const [getQuestions] = questions;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(questionId) {
    setCurrentQuestion(
      getQuestions.filter((question) => question.id === questionId)
    );

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="categoryOverview">
      <h1 className="title">
        En rechte Palaari binenand haa
        <span className="subTitle">The Game</span>
      </h1>
      <div className="categories">
        {getQuestions.map((question) => (
          <Category
            answered={getAnsweredQuestions.indexOf(question.id) > -1}
            openModal={openModal}
            key={question.id}
            question={question}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Question"
        style={customStyles}
      >
        <Question />
      </Modal>
    </div>
  );
}

export default CategoryOverview;
