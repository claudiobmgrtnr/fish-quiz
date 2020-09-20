import React from "react";
import logo from "./logo.svg";
import TopBar from "./components/topBar/top-bar";
import CategoryOverview from "./components/categoryOverview/category-overview.js";
import "./App.css";
import {DataProvider} from "./ApplicationContext";

function App() {
  const questions = [
    { category: "gaggi bollä" },
    { category: "hallo velo" },
    { category: "gaggi bollä" },
    { category: "hallo velo" },
    { category: "gaggi bollä" },
    { category: "hallo velo" },
    { category: "Päddi, ein Mann für alle Fälle" },
    { category: "hallo velo" },
    { category: "gaggi bollä" },
    { category: "hallo velo" },
    { category: "Päddi, ein Mann für alle Fälle" },
    { category: "hallo velo" },
  ];
  return (
    <DataProvider>
      <div className="app">
        <TopBar playerName="Nicole"/>
        <CategoryOverview questions={questions} />
      </div>
    </DataProvider>
  );
}

export default App;
