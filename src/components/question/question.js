import React, { useContext, useState, useEffect } from "react";
import classnames from "classnames";
import { DataContext } from "../../ApplicationContext.js";
import "./question.css";
const theme = new Audio("/music.mp3");
const logSound = new Audio("/loganswer.mp3");
const correctAnswer = new Audio("/correctanswer.mp3");
const wrongAnswer = new Audio("/wronganswer.mp3");

function Question() {
  const { currentQuestion, coinCount } = useContext(DataContext);
  const [getCoinCount, setCoinCount] = coinCount;
  const getCurrentQuestion = currentQuestion[0];
  const [getLoggedAnswer, setLoggedAnswer] = useState(null);
  const [getRevealCorrectAnswer, setRevealCorrectAnswer] = useState(false);

  useEffect(() => {
    if (getLoggedAnswer === null) {
      theme.play();
    }

    return () => {
      theme.pause();
      theme.currentTime = 0;
    };
  });

  function logAnswer(id) {
    if (getRevealCorrectAnswer) {
      return;
    }

    theme.pause();
    theme.currentTime = 0;
    logSound.play();

    setLoggedAnswer(id);
  }

  function revealCorrectAnswer() {
    if (getLoggedAnswer === null) {
      return;
    }
    theme.pause();
    theme.currentTime = 0;

    if (getLoggedAnswer !== getCurrentQuestion[0].solution) {
      wrongAnswer.play();
    } else {
      setCoinCount(getCoinCount + 1);
      correctAnswer.play();
    }
    setRevealCorrectAnswer(true);
  }

  return (
    <div className="question">
      <div className="question-box" onClick={revealCorrectAnswer}>
        <p>{getCurrentQuestion[0].question}</p>
      </div>
      <div className="answers">
        {Object.keys(getCurrentQuestion[0].answers).map((id) => {
          return (
            <div
              className={classnames(
                "answer",
                { logged: getLoggedAnswer === id },
                {
                  incorrect:
                    getRevealCorrectAnswer &&
                    getLoggedAnswer !== getCurrentQuestion[0].solution &&
                    getLoggedAnswer === id,
                },
                {
                  correct:
                    getRevealCorrectAnswer &&
                    id === getCurrentQuestion[0].solution,
                }
              )}
              key={id}
              onClick={() => logAnswer(id)}
            >
              <p className="answer__text">
                {getCurrentQuestion[0].answers[id]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
