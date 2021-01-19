import React, {useContext} from "react";
import './top-bar.css'
import coin from './coin.svg'
import mute from './mute.svg'
import mute_active from './mute_active.svg'
import {DataContext} from "../../ApplicationContext.js";

function TopBar() {
  const {coinCount, muted} = useContext(DataContext);

  
  const [getCoinCount, setCoinCount] = coinCount;
  const [getIsMuted, setIsMuted] = muted;
  return (
    <header className="topBar">
      <div className="points">
        <span className="points__tag">Punkte:</span>
        <span className="points__count" onDoubleClick={()=> setCoinCount(getCoinCount+1)}>{getCoinCount}</span>
        <img src={coin} alt="" className="points__icon" />
      </div>
      <div className="mute">
        <img onClick={ (e) => {setIsMuted(!getIsMuted)}} src={getIsMuted ? mute_active : mute} alt="mute"/>
      </div>
    </header>
  );
}

export default TopBar