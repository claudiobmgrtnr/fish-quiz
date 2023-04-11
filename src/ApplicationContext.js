import React, { useState, createContext } from "react";
import slug from "slug";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [getCoinCount, setCoinCount] = useState(-12);
  const [getUsedJokers, setUsedJokers] = useState([]);
  const [getIsFirstVisit, setIsFirstVisit] = useState(true);
  const [getCurrentQuestion, setCurrentQuestion] = useState(null);
  const [getAnsweredQuestions, setAnsweredQuestions] = useState([]);
  const [getQuestions, setQuestions] = useState([
      {
          category: "Ausser Haus",
          question: "Wie viele Retail Shops haben wir?",
          answers: {
              a: "6",
              b: "8",
              c: "10",
              d: "12",
          },
          solution: "c",
          id: slug("AusserHaus"),
      },
      {
          category: "Back in the days",
          question: "Wann war das Gründungsjahr von Digitec?",
          answers: { a: "1998", b: "2000", c: "2001", d: "2003" },
          solution: "c",
          id: slug("BackInTheDays"),
      },
      {
          category: "Meet The Zürrers",
          question: "Wie viele Zürrer gibt es in der Firma (inkl. MGB)?",
          answers: {
              a: "1",
              b: "2",
              c: "42",
              d: "4",
          },
          solution: "d",
          id: slug("MeetTheZurrers"),
      },
      {
          category: "Git Push",
          question: "Welches war dein erster Commit in devinite?",
          answers: {
              a: "ERP-16017: Brand and Product inline images no longer show default cross (72e13c4c8)",
              b: "Merged PR 2531: ERP-16325 Wording (0577dce8a8c7)",
              c: "Merged PR 938: Merge feature/darwin/sprint172/ERP-16057 to develop (16f648f190a57)",
              d: "ERP-16022: Removed everything related to rating reason (06d27a153d2f057)",
          },
          solution: "a",
          id: slug("GitPush"),
      },
      {
          category: "I love CSS",
          question:
              "Wie viele Commits hat Dani - unser Ferontend Profi - im ISO?",
          answers: {
              a: "43",
              b: "10",
              c: "21",
              d: "8",
          },
          solution: "b",
          id: slug("ILoveCss"),
      },
      {
          category: "Farbenblind",
          question:
              "Welche Farbe hat dein Hemd auf dem <a href='https://api.media.atlassian.com/file/4ee7f22a-1337-4754-bb0e-89ea50cb9f8c/binary?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlZThmYTBlNC1iOWFhLTRhM2YtYTViYS1jZmM3MzE5MGZiZjkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjRlZTdmMjJhLTEzMzctNDc1NC1iYjBlLTg5ZWE1MGNiOWY4YyI6WyJyZWFkIl19LCJleHAiOjE2ODA2MDc0MjYsIm5iZiI6MTY4MDUyNDUwNn0.TKw7lVScUuUfAMid0bcV-4Xbr5rBAYQgQtu8aT-34Nk&client=ee8fa0e4-b9aa-4a3f-a5ba-cfc73190fbf9&name=croissants_24-7.jpg&max-age=2940&width=796&height=500' target='blank'>Gipfelibild?</a>",
          answers: {
              a: "Blau",
              b: "Pink",
              c: "Gelb",
              d: "Selenski Grün",
          },
          solution: "a",
          id: slug("Farbenblind"),
      },
      {
          category: "Stells Dött Hine Ab!",
          question: "Wie gross ist die Lagerfläche in Wohlen?",
          answers: {
              a: "38700 m2",
              b: "51200 ms",
              c: "46500 m2",
              d: "87614 m2",
          },
          solution: "c",
          id: slug("StellsDottHineAb"),
      },
      {
          category: "Danke, Nei!",
          question: "Wie viel tage ist das Rückgaberecht auf Markplatzprodukte",
          answers: {
              a: "7 Tage",
              b: "14 Tage",
              c: "21 Tage",
              d: "Abängig vom Händler",
          },
          solution: "b",
          id: slug("DankeNei"),
      },
      {
          category: "Influencer",
          question: "Wie viel Follower hat der Galaxus Pinterest Account?",
          answers: {
              a: "2631",
              b: "4798",
              c: "7967",
              d: "1591",
          },
          solution: "b",
          id: slug("Influencer"),
      },
      {
          category: "Zahlen bitte",
          question: "Wie hoch sind unsere Mahngebühren für die 2. Mahnung?",
          answers: {
              a: "50CHF",
              b: "500CHF",
              c: "15CHF",
              d: "5CHF",
          },
          solution: "d",
          id: slug("ZahlenBitte"),
      },
      {
          category: "Back in The Days Pt2",
          question:
              "Wie hiess das ursprünglich Unternehmen was Florian, Oliver und Marcel im Jahr 2001 gegründet haben?",
          answers: {
              a: "Compumart",
              b: "Gamers Nation",
              c: "Kollektivgesellschaft Nägeli Trading & Co.",
              d: "Digitech",
          },
          solution: "c",
          id: slug("BackInTheDaysPtTwo"),
      },
      {
          category: "Einspruch, euer Ehren!",
          question: "Wann wurden unsere AGB’s das letzte mal aktualisier?",
          answers: {
              a: "2022",
              b: "2021",
              c: "2020",
              d: "2019",
          },
          solution: "d",
          id: slug("EinspruchEuerEhren"),
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
