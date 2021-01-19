import React, { useState, createContext } from "react";
import slug from "slug";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [getCoinCount, setCoinCount] = useState(0);
  const [getUsedJokers, setUsedJokers] = useState([]);
  const [getIsFirstVisit, setIsFirstVisit] = useState(true);
  const [getCurrentQuestion, setCurrentQuestion] = useState(null);
  const [getAnsweredQuestions, setAnsweredQuestions] = useState([]);
  const [getIsMuted, setIsMutet] = useState(false)
  const [getQuestions, setQuestions] = useState([
    {
      category: "Frühes Leben",
      question: "Ich bin geboren am...",
      answers: {
        a: "20. April 1985",
        b: "6. Dezember 1990",
        c: "14. Juni 1987",
        d: "4. Mai 1889",
      },
      solution: "c",
      id: slug("Frühes Leben"),
    },
    {
      category: "Familie",
      question:
        "Wie viele Geschwister habe ich?",
      answers: { a: "1.5", b: "3", c: "0", d: "7" },
      solution: "a",
      id: slug("Familie"),
    },
    {
      category: "Random Fact 1",
      question:"Als Kind habe ich es gehasst...",
      answers: {
        a: "Zu zeichnen",
        b: "In den Zoo zu gehen (Ich habe Angst vor Ziegen)",
        c: "Zu singen",
        d: "Zu Wandern",
      },
      solution: "d",
      id: slug("Random Fact 1"),
    },
    {
      category: "Hobbies",
      question:
        "In meiner Freizeit...",
      answers: {
        a: "Bin ich oft auf dem Board Unterwegs",
        b: "Lese ich gerne Fantasy-Romane",
        c: "Baue ich eine Miniaturversion vom MGB Hochhaus",
        d: "Gehe ich gerne Wandern",
      },
      solution: "a",
      id: slug("Hobbies"),
    },
    {
      category: "Musik",
      question:
        "Meine musik Genres sind...",
      answers: {
        a: "Klassik",
        b: "Hip Hop, Funk, Soul, Jazz",
        c: "90 Music (Rednex und so)",
        d: "Ländler, Schlager",
      },
      solution: "b",
      id: slug("Musik"),
    },
    {
      category: "Random Fact 2",
      question:
        "Meine Lieblings JS Funktion ist",
      answers: {
        a: "String.prototype.endswith()",
        b: "Object.freeze()",
        c: "Array.prototype.reduce()",
        d: "Ich bin sicher ned so en nerd wo e lieblings JS funktion het…",
      },
      solution: "c",
      id: slug("Random Fact 2"),
    },
    {
      category: "Essen",
      question:
        "Mein Lieblingsessen ist...",
      answers: {
        a: "Döner vom Stargrill",
        b: "Pizza Salame",
        c: "Fish & Chips",
        d: "Ghackets und Hörnli mit Öpfelmues (Thurgi halt)",
      },
      solution: "d",
      id: slug("Essen"),
    },
    {
      category: "Random Fact 3",
      question:
        "Das wichtigste in meinem Leben ist / sind…",
      answers: {
        a: "Meine Freunde",
        b: "Dass der Bitcoin Steigt",
        c: "Mein Mountain Bike zu fahren",
        d: "Enten zu Füttern am Bodensee",
      },
      solution: "a",
      id: slug("Random Fact 3"),
    },  
  ]);
  return (
    <DataContext.Provider
      value={{
        coinCount: [getCoinCount, setCoinCount],
        currentQuestion: [getCurrentQuestion, setCurrentQuestion],
        isFirstVisit: [getIsFirstVisit, setIsFirstVisit],
        questions: [getQuestions, setQuestions],
        answeredQuestions: [getAnsweredQuestions, setAnsweredQuestions],
        jokers: [getUsedJokers, setUsedJokers],
        muted: [getIsMuted, setIsMutet]
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
