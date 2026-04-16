import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useFetch", "useState", "useEffect", "useData"],
    answer: "useState",
  },
  {
    question: "Which is used for routing?",
    options: ["React Router", "Redux", "Node", "MongoDB"],
    answer: "React Router",
  },
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div>
        <h2>Quiz Finished 🎉</h2>
        <h3>Your Score: {score} / {questions.length}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Question {currentQ + 1}</h3>
      <p>{questions[currentQ].question}</p>

      {questions[currentQ].options.map((opt, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
          {opt}
        </div>
      ))}

      <button onClick={handleNext} disabled={!selected}>
        Next
      </button>
    </div>
  );
}

export default Quiz;