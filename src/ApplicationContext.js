import React, { useState, createContext } from "react";
import slug from 'slug'
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [getCoinCount, setCoinCount] = useState(0);
  const [getCurrentQuestion, setCurrentQuestion] = useState(null);
  const [getQuestions, setQuestions] = useState([
    {
      category: "Quam risus taciti",
      question: "Wie viel ist 1 + 1?",
      answers: { a: 2, b: 5, c: 18, d: 22 },
      solution: "a",
      answeredCorrect: false,
      id: slug('Quam risus taciti')
    },
    {
      category: "Vestibulum leo nec",
      question: "Wie viel ist 2 + 2?",
      answers: { a: 8, b: 4, c: 14, d: 22 },
      solution: "b",answeredCorrect: false,
      id: slug('Vestibulum leo nec')
    }
  ]);
  return (
    <DataContext.Provider
      value={{
        coinCount: [getCoinCount, setCoinCount],
        currentQuestion: [getCurrentQuestion, setCurrentQuestion],
        questions: [getQuestions, setQuestions],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
