import React from 'react';
import play from './play.svg';
import pause from './pause.svg';
import './player.css';
export default function player({onClickPlay, onClickPause}) {
    return(
        <div className="player">
            <img src={play} alt="" onClick={()=> onClickPlay()}/>
            <img src={pause} alt="" onClick={()=> onClickPause()}/>
        </div>
    )
}