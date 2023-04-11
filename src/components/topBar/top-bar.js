import React, {useContext} from "react";
import './top-bar.css'
import coin from './coin.svg'
import {DataContext} from "../../ApplicationContext.js";

function TopBar({ playerName }) {
  const {coinCount} = useContext(DataContext);
  
  const [getCoinCount, setCoinCount] = coinCount;
  return (
      <header className="topBar">
          <div className="playerName">
              <span className="playerName__tag">Kandidat:</span>
              {playerName}
          </div>
          <div className="points">
              <span className="points__tag">Strafsekunden:</span>
              <span
                  className="points__count"
                  onClick={() => setCoinCount(getCoinCount + 1)}>
                  {getCoinCount}
              </span>
              <img src={coin} alt="" className="points__icon" />
          </div>
      </header>
  );
}

export default TopBar