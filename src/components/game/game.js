import React, { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../ApplicationContext.js";
import TopBar from "../topBar/top-bar";
import CategoryOverview from "../categoryOverview/category-overview.js";


import "./game.css";
const intro = new Audio("/intro.mp3");

export default function Game() {
  const { isFirstVisit } = useContext(DataContext);
  const [getIsFirstVisit, setIsFirstVisit] = isFirstVisit;
  const [getStart, setStart] = useState(false);
  const [getUsernameIsExisting, setUsernameIsExisting] = useState(false);
  const inputRef = useRef(null)
  useEffect(() => {
    if (getStart && getIsFirstVisit) {
      intro.play();
      setIsFirstVisit(false);
    }
  });

  const validateInput = () => {
    const value = inputRef.current.value;
    if(value.length > 0) {
      setUsernameIsExisting(true)
    }
  }

  if (getIsFirstVisit) {
    return (
      <div className="startScreen">
        <input type="text" placeholder="Dein Name" className="nameinput" ref={inputRef} onInput={validateInput}/>
        <button disabled = {!getUsernameIsExisting} className="start" onClick={() => setStart(true)}>
          Start
        </button>
      </div>
    );
  } else {
    return (
      <div onClick={() => intro.pause()}>
        <TopBar playerName="Nicole" />
        <CategoryOverview />
      </div>
    );
  }
}
