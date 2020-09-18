import React from "react";
import './top-bar.css'
import coin from './coin.svg'

function TopBar({ playerName, points }) {
  return (
    <header className="topBar">
      <div className="playerName">
        <span className="playerName__tag">Kandidatin:</span>
        {playerName}
      </div>
      <div className="points">
        <span className="points__tag">Coins:</span>
        <span className="points__count">{points}</span>
        <img src={coin} alt="" className="points__icon" />
      </div>
    </header>
  );
}

export default TopBar