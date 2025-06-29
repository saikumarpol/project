import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 🧠 Your 30 Questions
const questions = [
  {
    id: 1,
    question: "What will be the output of the following code?\n\nx = [1, 2, 3]\nprint(x[1])",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 2,
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    correctAnswer: "def",
  },
  {
    id: 3,
    question: "What is the output of print(2 ** 3 ** 2)?",
    options: ["64", "512", "256", "None"],
    correctAnswer: "512",
  },
  {
    id: 4,
    question: "What is the data type of: print(type({}))?",
    options: ["dict", "list", "set", "None"],
    correctAnswer: "dict",
  },
  {
    id: 5,
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "except", "finally"],
    correctAnswer: "except",
  },
  {
    id: 6,
    question: "What does the 'len()' function do?",
    options: ["Returns length", "Returns data type", "Adds items", "None"],
    correctAnswer: "Returns length",
  },
  {
    id: 7,
    question: "What will this code print?\n\nx = [1, 2, 3]\nprint(x[-1])",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "3",
  },
  {
    id: 8,
    question: "What is the correct way to install a package in Python?",
    options: ["install pkg", "python install", "pip install pkg", "setup pkg"],
    correctAnswer: "pip install pkg",
  },
  {
    id: 9,
    question: "How to start a comment in Python?",
    options: ["//", "#", "--", "/* */"],
    correctAnswer: "#",
  },
  {
    id: 10,
    question: "Which loop is used when the number of iterations is unknown?",
    options: ["for", "while", "do-while", "loop"],
    correctAnswer: "while",
  },
  // Add more questions up to 30 here...
  {
    id: 11,
    question: "What is the output?\n\nprint(bool('False'))",
    options: ["False", "True", "Error", "None"],
    correctAnswer: "True",
  },
  {
    id: 12,
    question: "Which operator is used for floor division?",
    options: ["/", "//", "%", "**"],
    correctAnswer: "//",
  },
  {
    id: 13,
    question: "What is the result of: '5' + '5'?",
    options: ["10", "55", "Error", "None"],
    correctAnswer: "55",
  },
  {
    id: 14,
    question: "Which method adds item at end of a list?",
    options: ["append()", "add()", "insert()", "extend()"],
    correctAnswer: "append()",
  },
  {
    id: 15,
    question: "What is the output of: print(type(lambda x: x))?",
    options: ["function", "lambda", "method", "None"],
    correctAnswer: "function",
  },
  {
    id: 16,
    question: "Python is:",
    options: ["Compiled", "Interpreted", "Both", "None"],
    correctAnswer: "Interpreted",
  },
  {
    id: 17,
    question: "What is the output of: print(10 // 3)?",
    options: ["3.3", "3", "3.0", "Error"],
    correctAnswer: "3",
  },
  {
    id: 18,
    question: "Which is a valid variable name?",
    options: ["2name", "_name", "name!", "None"],
    correctAnswer: "_name",
  },
  {
    id: 19,
    question: "How do you start a function in Python?",
    options: ["func name():", "def name():", "function name():", "None"],
    correctAnswer: "def name():",
  },
  {
    id: 20,
    question: "Which module handles random numbers?",
    options: ["math", "random", "numbers", "os"],
    correctAnswer: "random",
  },
  {
    id: 21,
    question: "Which one is immutable?",
    options: ["list", "dict", "set", "tuple"],
    correctAnswer: "tuple",
  },
  {
    id: 22,
    question: "What is the keyword to create a class?",
    options: ["def", "func", "class", "struct"],
    correctAnswer: "class",
  },
  {
    id: 23,
    question: "What will this return?\n\nlist('abc')",
    options: ["['abc']", "['a','b','c']", "['a,b,c']", "Error"],
    correctAnswer: "['a','b','c']",
  },
  {
    id: 24,
    question: "How to import module?",
    options: ["use()", "require()", "import", "include"],
    correctAnswer: "import",
  },
  {
    id: 25,
    question: "Which operator is used for power?",
    options: ["^", "**", "//", "%%"],
    correctAnswer: "**",
  },
  {
    id: 26,
    question: "Which function returns max value?",
    options: ["highest()", "max()", "top()", "maximum()"],
    correctAnswer: "max()",
  },
  {
    id: 27,
    question: "Which is not a keyword?",
    options: ["lambda", "try", "eval", "pass"],
    correctAnswer: "eval",
  },
  {
    id: 28,
    question: "Which is used to take input?",
    options: ["scanf()", "cin", "input()", "read()"],
    correctAnswer: "input()",
  },
  {
    id: 29,
    question: "What is the extension of Python file?",
    options: [".py", ".pt", ".pyt", ".python"],
    correctAnswer: ".py",
  },
  {
    id: 30,
    question: "Which method removes an item from a list?",
    options: ["delete()", "remove()", "discard()", "None"],
    correctAnswer: "remove()",
  },
];

const PythonQuizApp = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const question = questions[currentQ];
    const isCorrect = option === question.correctAnswer;
    if (isCorrect) setScore(score + 1);

    setAnswers([
      ...answers,
      {
        question: question.question,
        selected: option,
        correct: question.correctAnswer,
        isCorrect,
      },
    ]);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getPerformanceComment = (percentage) => {
    if (percentage >= 90) return "🌟 Outstanding! You’re a Python expert!";
    if (percentage >= 70) return "🎉 Great job! Solid understanding of Python.";
    if (percentage >= 50) return "👍 Good effort! Keep practicing to improve.";
    if (percentage >= 30) return "🧐 Fair attempt. Focus on fundamentals.";
    return "😢 Needs improvement. Review basics and try again.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            🐍 Python Quiz
          </h1>
          <p className="text-gray-300 mt-2">Test your knowledge — No cheating!</p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">
                Question {currentQ + 1} / {questions.length}
              </span>
              {/* <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full">
                Score: {score}
              </span> */}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQ + 1) / questions.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Question */}
            <pre className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
              {questions[currentQ].question}
            </pre>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQ].options.map((option, idx) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option)}
                  key={idx}
                  className={`w-full py-3 px-4 rounded-lg text-left transition-all ${
                    answers[currentQ]?.selected === option
                      ? answers[currentQ].isCorrect
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">🎉 Quiz Completed!</h2>

            {/* Final Score */}
            <div className="text-center mb-6">
              <p className="text-xl">
                You scored{" "}
                <span className="font-bold text-green-400">{score}</span> out of{" "}
                <span className="font-bold">{questions.length}</span>
              </p>
              <p className="text-lg mt-1">
                ({Math.round((score / questions.length) * 100)}% accuracy)
              </p>
            </div>

            {/* Comment Based on Score */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl font-medium mb-8 text-yellow-400"
            >
              {getPerformanceComment((score / questions.length) * 100)}
            </motion.p>

            {/* Review Answers */}
            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2">
              {answers.map((ans, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    ans.isCorrect
                      ? "border-green-500 bg-green-900/20"
                      : "border-red-500 bg-red-900/20"
                  }`}
                >
                  <strong className="block mb-1">Q{idx + 1}: {ans.question}</strong>
                  <p>
                    ✅ Correct: <span className="font-medium">{ans.correct}</span> |{" "}
                    📝 Your Answer:{" "}
                    <span className={ans.isCorrect ? "text-green-400" : "text-red-400"}>
                      {ans.selected}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Restart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={restartQuiz}
              className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              🔄 Restart Quiz
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PythonQuizApp;