import React, { useState, createContext } from "react";
import slug from "slug";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [getCoinCount, setCoinCount] = useState(0);
  const [getUsedJokers, setUsedJokers] = useState([]);
  const [getCurrentQuestion, setCurrentQuestion] = useState(null);
  const [getAnsweredQuestions, setAnsweredQuestions] = useState([]);
  const [getQuestions, setQuestions] = useState([
    {
      category: "Enttäuschungen",
      question: "Was ist Patrick’s bis jetzt die grösste Enttäuschung?",
      answers: {
        a: "Der nicht gewonnene Oscar für Matrix Recyclet",
        b: "Die vergessenen Ordner, Schulsachen etc. auf dem Autodach",
        c:
          "Das Claudio schneller eine nach italienischen Vorgaben gebackene Pizza essen kann als er",
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
      category: "Namen aus vergangenen Zeiten",
      question:
        "Welchen Spitznamen bekam Patrick in der Oberstufe unter anderem wegen einer Kleidermarke/Kleidungsstück die er ständig getragen hat?",
      answers: {
        a: "Stoney wegen Stone Island",
        b: "Fischli wegen Fishbone",
        c: "Karl wegen Karl Kani",
        d: "Dä ¾ Pädi, weil er ständig (auch im Winter) ¾ Hosen getragen hat",
      },
      solution: "b",
      id: slug("Namen aus vergangenen Zeiten"),
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
      category: "Wortspielreie",
      question:
        "Welches Wort oder welche Wortkombination belustigt Patrick nach einigen Bierchen immer wieder aufs Neue?",
      answers: {
        a: "Häder Poznial Ümpe",
        b: "Heyyy Heeeyyyy … (und en name)",
        c: "Das überleb ich nöd",
        d: "Suuuuuggä",
      },
      solution: "d",
      id: slug("Wortspielreie"),
    },
    {
      category: "Downhillgott Patrick Krapf",
      question:
        "Was wiederfährt Patrick in der nächsten Filmsequenz?",
      answers: {
        a: "Er springt galant über einen Kicker",
        b: "Er knallt gegen einen Baum",
        c: "Zwei andere Biker fordern ihn zum einem Rennen heraus",
        d: "Patrick meistert den Trail souverän",
      },
      solution: "b",
      id: slug("Downhillgott Patrick Krapf"),
    },
    {
      category: "Fifty Shades of Patrick",
      question:
        "Was bestellte Patrick an seinem JGA voller Freude und Enthusiasmus neben einem Wasser?",
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
        "Patrick, bekannt als weitsichtiger und aufmerksamer Fahrzeugführer, überfuhr vor Jahren etwas auf der Strasse. Was war das seiner Meinung nach?",
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
        "Wandern mit Patrick; Auf was muss man sicherlich nicht verzichten?",
      answers: {
        a: "Den Gipfelschnaps",
        b: "Dass er sich über die Schwierigkeit beklagt",
        c: "Auf 300 Pausen für 20 Fotos",
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
        d: "Seine liebste ¾ Hose",
      },
      solution: "a",
      id: slug("Lost in Croatia"),
    },
    {
      category: "Black Out",
      question:
        "Was führte bei Patrick einam zu einem Knock-Out?",
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
        questions: [getQuestions, setQuestions],
        answeredQuestions: [getAnsweredQuestions, setAnsweredQuestions],
        jokers: [getUsedJokers, setUsedJokers],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
