import { useState } from "react";

const quizData = [
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: ['Both are same', "'==' checks value, '===' checks value and type", "'===' checks only value", "'==' checks value and type"],
    answer: "'==' checks value, '===' checks value and type",
  },
  {
    question: 'What is the purpose of the `let` keyword in JavaScript?',
    options: ['Block-scoped variable', 'Function-scoped variable', 'Global variable', 'None'],
    answer: 'Block-scoped variable',
  },
  {
    question: 'Which company developed JavaScript?',
    options: ['Microsoft', 'Netscape', 'Google', 'Apple'],
    answer: 'Netscape',
  },
  {
    question: 'What is a closure in JavaScript?',
    options: ['A block', 'Function inside function with access to outer variables', 'Loop', 'A data structure'],
    answer: 'Function inside function with access to outer variables',
  },
  {
    question: 'What is the output of typeof null?',
    options: ['null', 'object', 'undefined', 'number'],
    answer: 'object',
  },
  {
    question: 'Which keyword is used to create a constant in JavaScript?',
    options: ['const', 'let', 'var', 'static'],
    answer: 'const',
  },
  {
    question: 'Which method converts JSON data to a JavaScript object?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.objectify()'],
    answer: 'JSON.parse()',
  },
  {
    question: 'What is the output of: console.log([] + [])?',
    options: ['0', 'undefined', '[]', '"" (empty string)'],
    answer: '"" (empty string)',
  },
  {
    question: 'Which symbol is used for comments in JavaScript?',
    options: ['#', '//', '<!-- -->', '%%'],
    answer: '//',
  },
  {
    question: 'What will `typeof NaN` return?',
    options: ['number', 'NaN', 'undefined', 'object'],
    answer: 'number',
  },
  {
    question: 'Which method adds elements to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()',
  },
  {
    question: 'Which method removes the last element of an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    answer: 'pop()',
  },
  {
    question: 'How can you convert a string to an integer in JavaScript?',
    options: ['parseInt()', 'Number()', 'Both', 'None'],
    answer: 'Both',
  },
  {
    question: 'What is a promise in JavaScript?',
    options: ['Loop', 'Data structure', 'Asynchronous operation handler', 'Error handler'],
    answer: 'Asynchronous operation handler',
  },
  {
    question: 'Which JavaScript method returns the first element that passes a test?',
    options: ['filter()', 'map()', 'find()', 'forEach()'],
    answer: 'find()',
  },
  {
    question: 'What is hoisting in JavaScript?',
    options: ['Lifting weights', 'Variable/function declarations moved to top', 'A CSS technique', 'None of the above'],
    answer: 'Variable/function declarations moved to top',
  },
  {
    question: 'What does isNaN("text") return?',
    options: ['true', 'false', 'NaN', '0'],
    answer: 'true',
  },
  {
    question: 'What is the default value of an uninitialized variable?',
    options: ['null', '0', 'undefined', 'false'],
    answer: 'undefined',
  },
  {
    question: 'How do you write a function in JavaScript?',
    options: ['def func()', 'function myFunc()', 'func ->', 'create func()'],
    answer: 'function myFunc()',
  },
  {
    question: 'What will be the output of console.log(2 + "2")?',
    options: ['4', '22', 'NaN', 'undefined'],
    answer: '22',
  },
  // Remaining 80 questions to follow...
];


// export default function Quiz() {
//   const [current, setCurrent] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const handleAnswer = (option) => {
//     if (option === quizData[current].answer) {
//       setScore(score + 1);
//     }

//     const next = current + 1;
//     if (next < quizData.length) {
//       setCurrent(next);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrent(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
//       <h1>JavaScript Quiz</h1>

//       {showResult ? (
//         <div>
//           <h2>Your Score: {score} / {quizData.length}</h2>
//           <button onClick={restartQuiz}>Restart Quiz</button>
//         </div>
//       ) : (
//         <div>
//           <h2>{quizData[current].question}</h2>
//           {quizData[current].options.map((opt, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswer(opt)}
//               style={{ display: "block", margin: "10px 0" }}
//             >
//               {opt}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";

// const quizData = [/*...Paste your full 100-question quiz here...*/];

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

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "20px",
      backgroundColor: "#f9fbfd",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', sans-serif",
      textAlign: "center",
    },
    question: {
      fontSize: "20px",
      marginBottom: "20px",
      fontWeight: "bold",
      color: "#2c3e50",
    },
    button: {
      display: "block",
      width: "100%",
      margin: "10px 0",
      padding: "12px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#3498db",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
    },
    result: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#27ae60",
    },
    restartBtn: {
      marginTop: "20px",
      padding: "12px 24px",
      backgroundColor: "#e67e22",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    scoreStatus: {
      marginBottom: "20px",
      fontSize: "16px",
      color: "#7f8c8d",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#34495e" }}>🚀 JavaScript Quiz</h1>

      {showResult ? (
        <div>
          <div style={styles.result}>
            🎉 Your Score: {score} / {quizData.length}
          </div>
          <button
            onClick={restartQuiz}
            style={styles.restartBtn}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d35400")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e67e22")}
          >
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div style={styles.scoreStatus}>
            Question {current + 1} of {quizData.length} | Score: {score}
          </div>
          <h2 style={styles.question}>
            {quizData[current].question}
          </h2>
          {quizData[current].options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(opt)}
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
