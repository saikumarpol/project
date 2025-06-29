// src/quiz/CppQuiz.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CppQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const question = cppQuestions[currentQ];
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

    if (currentQ + 1 < cppQuestions.length) {
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
    if (percentage >= 90) return "🌟 Outstanding! You're a C++ pro!";
    if (percentage >= 70) return "🎉 Great job! Solid understanding of C++.";
    if (percentage >= 50) return "👍 Good effort! Keep practicing.";
    if (percentage >= 30) return "🧐 Fair attempt. Learn the basics.";
    return "😢 Needs improvement. Practice more!";
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
            🔁 C++ Quiz
          </h1>
          <p className="text-gray-300 mt-2">Test your C++ knowledge — no cheating!</p>
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
                Question {currentQ + 1} / {cppQuestions.length}
              </span>
             
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQ + 1) / cppQuestions.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Question */}
            <pre className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
              {cppQuestions[currentQ].question}
            </pre>

            {/* Options */}
            <div className="space-y-3">
              {cppQuestions[currentQ].options.map((option, idx) => (
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
                <span className="font-bold">{cppQuestions.length}</span>
              </p>
              <p className="text-lg mt-1">
                ({Math.round((score / cppQuestions.length) * 100)}% accuracy)
              </p>
            </div>

            {/* Comment Based on Score */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl font-medium mb-8 text-yellow-400"
            >
              {getPerformanceComment((score / cppQuestions.length) * 100)}
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

// 🧠 C++ Questions (30 MCQs)
const cppQuestions = [
  // Basic (1–10)
  {
    id: 1,
    question: "Which operator is used to access members via pointer variables?\na) .\nb) ->\nc) ::\nd) []",
    options: [".", "->", "::", "[]"],
    correctAnswer: "->",
  },
  {
    id: 2,
    question: "What is the size of float in C++?\na) 2 bytes\nb) 4 bytes\nc) 8 bytes\nd) 10 bytes",
    options: ["2 bytes", "4 bytes", "8 bytes", "10 bytes"],
    correctAnswer: "4 bytes",
  },
  {
    id: 3,
    question: "Which of the following is not a storage class in C++?\na) auto\nb) static\nc) register\nd) extern\ne) global",
    options: ["auto", "static", "register", "extern", "global"],
    correctAnswer: "global",
  },
  {
    id: 4,
    question: "Which of the following is used to terminate loops early?\na) break\nb) stop\nc) continue\nd) exit",
    options: ["break", "stop", "continue", "exit"],
    correctAnswer: "break",
  },
  {
    id: 5,
    question: "Which keyword is used to declare a constant in C++?\na) final\nb) const\nc) immutable\nd) static",
    options: ["final", "const", "immutable", "static"],
    correctAnswer: "const",
  },
  {
    id: 6,
    question: "What is the output of this code?\n\n#include <iostream>\nint main() {\n    std::cout << 5 / 2;\n    return 0;\n}\na) 2\nb) 2.5\nc) 3\nd) Error",
    options: ["2", "2.5", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 7,
    question: "Which header file is required for std::cout?\na) stdio.h\nb) iostream\nc) string.h\nd) cmath",
    options: ["stdio.h", "iostream", "string.h", "cmath"],
    correctAnswer: "iostream",
  },
  {
    id: 8,
    question: "What is the output of this code?\n\n#include <iostream>\nint main() {\n    int x = 10;\n    x++;\n    std::cout << x;\n    return 0;\n}\na) 10\nb) 11\nc) 9\nd) Error",
    options: ["10", "11", "9", "Error"],
    correctAnswer: "11",
  },
  {
    id: 9,
    question: "Which keyword is used to define a class in C++?\na) class\nb) struct\nc) object\nd) type",
    options: ["class", "struct", "object", "type"],
    correctAnswer: "class",
  },
  {
    id: 10,
    question: "What is the purpose of the 'namespace' keyword?\na) Defines scope\nb) Declares variables\nc) Allocates memory\nd) None",
    options: ["Defines scope", "Declares variables", "Allocates memory", "None"],
    correctAnswer: "Defines scope",
  },

  // Intermediate (11–20)
  {
    id: 11,
    question: "What is the output of this code?\n\n#include <iostream>\nint main() {\n    int arr[3] = {1, 2, 3};\n    std::cout << *(arr + 1);\n    return 0;\n}\na) 1\nb) 2\nc) 3\nd) Error",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 12,
    question: "What does this pseudocode do?\n\nFUNCTION swap(a, b)\n    temp = a\n    a = b\n    b = temp\nEND\n\nint main()\n    int x = 5, y = 10\n    swap(x, y)\n    PRINT x, y\nEND\na) 5, 10\nb) 10, 5\nc) Error\nd) None",
    options: ["5, 10", "10, 5", "Error", "None"],
    correctAnswer: "5, 10",
  },
  {
    id: 13,
    question: "Which STL container stores unique elements?\na) vector\nb) set\nc) list\nd) map",
    options: ["vector", "set", "list", "map"],
    correctAnswer: "set",
  },
  {
    id: 14,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <string>\nint main() {\n    std::string s = \"Hello\";\n    std::cout << s.substr(1, 3);\n    return 0;\n}\na) Hel\nb) ell\nc) lo\nd) Error",
    options: ["Hel", "ell", "lo", "Error"],
    correctAnswer: "ell",
  },
  {
    id: 15,
    question: "Which keyword is used for dynamic memory allocation in C++?\na) malloc\nb) new\nc) alloc\nd) create",
    options: ["malloc", "new", "alloc", "create"],
    correctAnswer: "new",
  },
  {
    id: 16,
    question: "What is the purpose of the 'virtual' keyword?\na) Static binding\nb) Dynamic binding\nc) Memory allocation\nd) None",
    options: ["Static binding", "Dynamic binding", "Memory allocation", "None"],
    correctAnswer: "Dynamic binding",
  },
  {
    id: 17,
    question: "What is the output of this code?\n\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x++;\n    return 0;\n}\na) 5\nb) 6\nc) Error\nd) None",
    options: ["5", "6", "Error", "None"],
    correctAnswer: "5",
  },
  {
    id: 18,
    question: "Which STL container is used for key-value pairs?\na) vector\nb) set\nc) map\nd) list",
    options: ["vector", "set", "map", "list"],
    correctAnswer: "map",
  },
  {
    id: 19,
    question: "What does this pseudocode do?\n\nFUNCTION reverse_array(arr, n)\n    FOR i FROM 0 TO n/2 - 1\n        SWAP arr[i] WITH arr[n-1-i]\n    ENDFOR\nEND\na) Reverses array\nb) Sorts array\nc) Copies array\nd) None",
    options: ["Reverses array", "Sorts array", "Copies array", "None"],
    correctAnswer: "Reverses array",
  },
  {
    id: 20,
    question: "Which keyword is used to define a reference variable?\na) &\nb) *\nc) ->\nd) ::",
    options: ["&", "*", "->", "::"],
    correctAnswer: "&",
  },

  // Advanced (21–30)
  {
    id: 21,
    question: "What does this pseudocode do?\n\nFUNCTION factorial(n)\n    IF n == 0 THEN\n        RETURN 1\n    ELSE\n        RETURN n * factorial(n-1)\n    ENDIF\nEND\na) Computes factorial\nb) Computes power\nc) Sums numbers\nd) None",
    options: ["Computes factorial", "Computes power", "Sums numbers", "None"],
    correctAnswer: "Computes factorial",
  },
  {
    id: 22,
    question: "What is the purpose of the 'override' keyword in C++?\na) Ensures overriding\nb) Static binding\nc) Memory allocation\nd) None",
    options: ["Ensures overriding", "Static binding", "Memory allocation", "None"],
    correctAnswer: "Ensures overriding",
  },
  {
    id: 23,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <memory>\nint main() {\n    std::unique_ptr<int> p = std::make_unique<int>(5);\n    std::cout << *p;\n    return 0;\n}\na) 5\nb) Error\nc) Undefined\nd) None",
    options: ["5", "Error", "Undefined", "None"],
    correctAnswer: "5",
  },
  {
    id: 24,
    question: "What is the time complexity of push operation in a std::vector?\na) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
  },
  {
    id: 25,
    question: "Which keyword is used to define a template in C++?\na) template\nb) generic\nc) type\nd) class",
    options: ["template", "generic", "type", "class"],
    correctAnswer: "template",
  },
  {
    id: 26,
    question: "What is the purpose of 'const' member function?\na) Modifies object\nb) Prevents modification\nc) Static function\nd) None",
    options: ["Modifies object", "Prevents modification", "Static function", "None"],
    correctAnswer: "Prevents modification",
  },
  {
    id: 27,
    question: "What is the output of this code?\n\n#include <iostream>\nclass Base {\npublic:\n    virtual void show() { std::cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { std::cout << \"Derived\"; }\n};\nint main() {\n    Base* b = new Derived();\n    b->show();\n    return 0;\n}\na) Base\nb) Derived\nc) Error\nd) None",
    options: ["Base", "Derived", "Error", "None"],
    correctAnswer: "Derived",
  },
  {
    id: 28,
    question: "What does this pseudocode do?\n\nFUNCTION copy_string(src, dest)\n    WHILE *src != '\\0'\n        *dest = *src\n        src++\n        dest++\n    ENDWHILE\n    *dest = '\\0'\nEND\na) Copies string\nb) Reverses string\nc) Compares string\nd) Concatenates string",
    options: ["Copies string", "Reverses string", "Compares string", "Concatenates string"],
    correctAnswer: "Copies string",
  },
  {
    id: 29,
    question: "What is the purpose of 'std::shared_ptr'?\na) Single ownership\nb) Shared ownership\nc) No ownership\nd) None",
    options: ["Single ownership", "Shared ownership", "No ownership", "None"],
    correctAnswer: "Shared ownership",
  },
  {
    id: 30,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    std::cout << v.size();\n    return 0;\n}\na) 3\nb) 2\nc) 1\nd) Error",
    options: ["3", "2", "1", "Error"],
    correctAnswer: "3",
  },
];
export default CppQuiz;