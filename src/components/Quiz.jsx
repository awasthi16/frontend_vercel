import { useState } from "react";

const quizData = [
  {
    question: "What does '===' mean in JavaScript?",
    options: ["Equals", "Strict equals", "Assigns", "None of the above"],
    answer: "Strict equals",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    answer: "Netscape",
  },
  {
    question: "How can you declare a variable in ES6?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the output of `typeof null`?",
    options: ["null", "undefined", "object", "number"],
    answer: "object",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>JavaScript Quiz</h1>

      {showResult ? (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{quizData[current].question}</h2>
          {quizData[current].options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(opt)}
              style={{ display: "block", margin: "10px 0" }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

