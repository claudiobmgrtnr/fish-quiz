import React from "react";
import Game from './components/game/game.js'
import "./App.css";
import { DataProvider } from "./ApplicationContext";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Game/>
      </div>
    </DataProvider>
  );
}

export default App;
