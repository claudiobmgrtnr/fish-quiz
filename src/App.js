import React from "react";
import logo from "./logo.svg";
import TopBar from "./components/topBar/top-bar";
import CategoryOverview from "./components/categoryOverview/category-overview.js";
import "./App.css";

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
    <div className="app">
      <TopBar playerName="Nicole" points="0" />
      <CategoryOverview questions={questions} />
    </div>
  );
}

export default App;
