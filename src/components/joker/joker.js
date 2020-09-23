import React, { useContext, useState } from "react";
import classnames from "classnames";
import jokerIcon from "./joker.svg";
import { DataContext } from "../../ApplicationContext.js";
import "./joker.css";
const jokerSound = new Audio("/loganswer.mp3");

function Joker({handleJokerClick}) {
  const { jokers } = useContext(DataContext);
  const [getUsedJokers, setUsedJokers] = jokers;
  const [getJokerIsVisible, setJokerIsVisible] = useState(false);

  return (
    <div className={classnames("joker", { isVisible: getJokerIsVisible })}>
      <div className="joker__container">
        <ul className="joker__list">
          <li
            className={classnames("joker__item", {
              itemUsed: getUsedJokers.indexOf("5050") > -1,
            })}
            onClick={() => handleJokerClick("5050")}
          >
            50/50
          </li>
          <li
            className={classnames("joker__item", {
              itemUsed: getUsedJokers.indexOf("publikum") > -1,
            })}
            onClick={() => handleJokerClick("publikum")}
          >
            Publikum
          </li>
          <li
            className={classnames("joker__item", {
              itemUsed: getUsedJokers.indexOf("telefon") > -1,
            })}
            onClick={() => handleJokerClick("telefon")}
          >
            Telefon
          </li>
        </ul>
      </div>
      <div
        className="joker__pull-tab"
        onClick={() => setJokerIsVisible(!getJokerIsVisible)}
      >
        <img src={jokerIcon} alt="" />
      </div>
    </div>
  );
}

export default Joker;
