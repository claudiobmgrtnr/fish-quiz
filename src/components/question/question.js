import React, { useContext, useState, useEffect } from "react";
import Joker from "../joker/joker.js";
import Player from '../player/player.js';
import classnames from "classnames";
import { DataContext } from "../../ApplicationContext.js";
import "./question.css";
const theme = new Audio("/music.mp3");
const logSound = new Audio("/loganswer.mp3");
const jokerSound = new Audio("/jokersound.mp3");
const lauda = new Audio("/mamalauda.mp3");
jokerSound.volume = 0.6;
const correctAnswer = new Audio("/correctanswer.mp3");
const wrongAnswer = new Audio("/wronganswer.mp3");

function Question() {
  const { currentQuestion, coinCount, answeredQuestions, jokers } = useContext(
    DataContext
  );
  const [getCoinCount, setCoinCount] = coinCount;
  const [getCoinWasCounted, setCoinWasCounted] = useState(false);
  const [getUsedJokers, setUsedJokers] = jokers;
  const [getAnsweredQuestions, setAnsweredQuestions] = answeredQuestions;
  const getCurrentQuestion = currentQuestion[0];
  const [getLoggedAnswer, setLoggedAnswer] = useState(null);
  const [getPlayTheme, setPlayTheme] = useState(true);
  const [getFiftyFiftyActive, setFiftyFiftyActive] = useState(false);
  const [getRevealCorrectAnswer, setRevealCorrectAnswer] = useState(false);

  function handleJokerClick(id) {
    if (getUsedJokers.indexOf(id) > -1) {
      return;
    }

    jokerSound.play();
    theme.pause();
    setPlayTheme(false);

    setUsedJokers([...getUsedJokers, id]);

    switch (id) {
      case "5050":
        setFiftyFiftyActive(true);
        break;
        
      default:
        break;
    }
  }

  useEffect(() => {
    if (getLoggedAnswer === null && getPlayTheme) {
      theme.play().catch(() => {});
    }

    return () => {
      theme.pause();
      theme.currentTime = 0;
    };
  });

  function onClickPlay() {
    theme.pause();
    lauda.play();
  }

  function onClickPause() {
    theme.play();
    lauda.pause();
  }

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

    setAnsweredQuestions([getCurrentQuestion[0].id, ...getAnsweredQuestions]);
    if (getLoggedAnswer !== getCurrentQuestion[0].solution) {
      wrongAnswer.play();
    } else if(getCoinWasCounted === false) {
      setCoinCount(getCoinCount + 1);
      correctAnswer.play();
      setCoinWasCounted(true);
    }
    setRevealCorrectAnswer(true);
  }

  let skippedAnswers = 0;

  function renderAnswers() {
    return Object.keys(getCurrentQuestion[0].answers).map((id) => {
      if (
        !getFiftyFiftyActive ||
        skippedAnswers > 1 ||
        id === getCurrentQuestion[0].solution
      ) {
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
            <p className="answer__text">{getCurrentQuestion[0].answers[id]}</p>
          </div>
        );
      } else {
        skippedAnswers++;
        return <div className="answer invisible" key={id}></div>;
      }
    });
  }
  return (
    <div className="question">
      <Joker handleJokerClick={handleJokerClick} />
      <div className="question-box" onClick={revealCorrectAnswer}>
        <p dangerouslySetInnerHTML={{__html: getCurrentQuestion[0].question}}></p>
        {getCurrentQuestion[0].id === "volklore"? <Player onClickPause={onClickPause} onClickPlay={onClickPlay}/> : null}
      </div>
      <div className="answers">{renderAnswers()}</div>
    </div>
  );
}

export default Question;
