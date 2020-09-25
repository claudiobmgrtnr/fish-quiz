import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../ApplicationContext.js";
import TopBar from "../topBar/top-bar";
import CategoryOverview from "../categoryOverview/category-overview.js";

import "./game.css";
const intro = new Audio("/intro.mp3");

export default function Game() {
  const { isFirstVisit } = useContext(DataContext);
  const [getIsFirstVisit, setIsFirstVisit] = isFirstVisit;
  const [getStart, setStart] = useState(false);

  useEffect(() => {
    if (getStart && getIsFirstVisit) {
      intro.play();
      setIsFirstVisit(false);
    }
  });

  if (getIsFirstVisit) {
    return (
      <div className="startScreen">
        <div className="start" onClick={() => setStart(true)}>
          Start
        </div>
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
