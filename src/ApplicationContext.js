import React, { useState, createContext } from "react";
import slug from "slug";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [getCoinCount, setCoinCount] = useState(0);
  const [getUsedJokers, setUsedJokers] = useState([]);
  const [getIsFirstVisit, setIsFirstVisit] = useState(true);
  const [getCurrentQuestion, setCurrentQuestion] = useState(null);
  const [getAnsweredQuestions, setAnsweredQuestions] = useState([]);
  const [getQuestions, setQuestions] = useState([
    {
      category: "Enttäuschungen",
      question: "Was ist Patrick’s bisherige grösste Enttäuschung?",
      answers: {
        a: "Der nicht gewonnene Oscar für Matrix Recyclet",
        b: "Die vergessenen Ordner, Schulsachen etc. auf dem Autodach",
        c: "Dass Claudio schneller eine Pizza essen kann als er. (Aber nur nomali Pizza! Nöd da fättige Glump usem Alpeblick!)",
        d: "Nur Nici hat das letzte Stück aufs Lenzerhorn geschafft",
      },
      solution: "c",
      id: slug("Enttäuschungen"),
    },
    {
      category: "Güügälä",
      question:
        "Wie viele Biere braucht Patrick bis seine Zunge schwer wird und seine Augenlieder zufallen?",
      answers: { a: "2-3", b: "5-7", c: "8-10", d: "Mehr als 10" },
      solution: "a",
      id: slug("Güügälä"),
    },
    {
      category: "Vergangene Zeiten",
      question:
        "Welchen Spitznamen hatte Patrick in der Oberstufe? Tipp: Der Ursprung liegt in einer Kleidermarke die er ständig getragen hat!",
      answers: {
        a: "Stoney, wegen Stone Island",
        b: "Fischli, wegen Fishbone",
        c: "Karl, wegen Karl Kani",
        d: "Dä ¾ Pädi, weil er ständig ¾ Hosen getragen hat (auch im Winter)",
      },
      solution: "b",
      id: slug("Vergangene Zeiten"),
    },
    {
      category: "Movie Night",
      question:
        "Welcher Film ist die mit Abstand grösste Enttäuschung in Patrick’s Leben?",
      answers: {
        a: "Die Verurteilten",
        b: "Lombock",
        c: "Cloud Atlas",
        d: "Get Rich or Die Trying",
      },
      solution: "c",
      id: slug("Movie Night"),
    },
    {
      category: "Wortspielreien",
      question:
        "Welches Wort oder welche Wortkombination belustigt Patrick nach einigen Bierchen immer wieder aufs Neue?",
      answers: {
        a: "Häder Poznial Ümpe",
        b: "Heyyy Heeeyyyy … (und en name)",
        c: "Das überleb ich nöd",
        d: "Suuuuuggä",
      },
      solution: "d",
      id: slug("Wortspielreien"),
    },
    {
      category: "Downhillgott Patrick Krapf",
      question:
        "Was passiert mit Patrick in der <a href='http://127.0.0.1:8080/' target='blank'>folgenden Filmsequenz?</a>",
      answers: {
        a: "Er springt galant über einen Kicker (Schanze)",
        b: "Er knallt gegen einen Baum",
        c: "Zwei andere Biker fordern ihn zum einem Rennen heraus und er gewinnt",
        d: "Patrick meistert den Trail souverän und kommt mit einem Lächeln bei der Talstation an",
      },
      solution: "b",
      id: slug("Downhillgott Patrick Krapf"),
    },
    {
      category: "Fifty Shades of Patrick",
      question:
        "Was bestellte Patrick überraschend an seinem JGA voller Freude und Enthusiasmus nebst einem Wasser?",
      answers: {
        a: "Shot roulette",
        b: "Weil er ganz verrückt war eine Flasche Wasser ohne",
        c: "Ein Pingu-Galce aus der Kinderkarte",
        d: "Eine Flasche Appenzeller",
      },
      solution: "d",
      id: slug("Fifty Shades of Patrick"),
    },
    {
      category: "Formel P (P stoht für Patrick)",
      question:
        "Patrick, bekannt als weitsichtiger und geduldiger Fahrzeugführer, überfuhr vor Jahren etwas auf der Strasse. Was war das seiner Meinung nach?",
      answers: {
        a: "Eine Entenfamilie",
        b: "Ein Wildschwein",
        c: "Plastiksack",
        d: "Ein Büschel Stroh",
      },
      solution: "c",
      id: slug("Formel P (P stoht für Patrick)"),
    },
    {
      category: "Gipfelstrümer",
      question:
        "Auf was muss man sicherlich nicht verzichten, wenn man mit Patrick wandern geht?",
      answers: {
        a: "Den Gipfelschnaps",
        b: "Dass er sich über die Schwierigkeit beklagt",
        c: "Auf 300 Pausen für 20'000 Fotos",
        d: "Die erste Gruppe auf dem Gipfel zu sein",
      },
      solution: "c",
      id: slug("Gipfelstrümer"),
    },
    {
      category: "Volklore",
      question:
        "Wie heisst die Mutter von Niki Lauda?",
      answers: {
        a: "Elisabeth",
        b: "Heidi",
        c: "Gertrud",
        d: "Mama Lauda",
      },
      solution: "d",
      id: slug("Volklore"),
    },
    {
      category: "Lost in Croatia",
      question:
        "Was hat Patrick in Kroazien auf dem Autodach liegen lassen?",
      answers: {
        a: "Sein HTC One",
        b: "Eine Oakley Sonnenbrille",
        c: "Eine Rado Uhr",
        d: "Seine liebste ¾ Hose (die er auch im Winter trägt)",
      },
      solution: "a",
      id: slug("Lost in Croatia"),
    },
    {
      category: "Black Out",
      question:
        "Was führte bei Patrick einaml zu einem Knock-Out?",
      answers: {
        a: "Er wurde beim Eishockey von einem Puck am Kopf getroffen",
        b: "Er ist auf einer Banenschale ausgerutscht",
        c: "Patrick hat sich beim Autofahren so aufgereget, dass er kurz das Bewusstsein verlor",
        d: "Er hat sich beim Fuss verknackst",
      },
      solution: "d",
      id: slug("Black Out"),
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
