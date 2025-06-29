// src/quiz/CQuiz.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const question = cQuestions[currentQ];
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

    if (currentQ + 1 < cQuestions.length) {
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
    if (percentage >= 90) return "🌟 Outstanding! You're a C expert!";
    if (percentage >= 70) return "🎉 Great job! Solid understanding of C."
    if (percentage >= 50) return "👍 Good effort! Keep practicing."
    if (percentage >= 30) return "🧐 Fair attempt. Review basics."
    return "😢 Needs improvement. Study harder!"
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
            💻 C Programming Quiz
          </h1>
          <p className="text-gray-300 mt-2">Test your C skills — no peeking!</p>
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
                Question {currentQ + 1} / {cQuestions.length}
              </span>
             
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQ + 1) / cQuestions.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Question */}
            <pre className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
              {cQuestions[currentQ].question}
            </pre>

            {/* Options */}
            <div className="space-y-3">
              {cQuestions[currentQ].options.map((option, idx) => (
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

            <div className="text-center mb-6">
              <p className="text-xl">
                You scored{" "}
                <span className="font-bold text-green-400">{score}</span> out of{" "}
                <span className="font-bold">{cQuestions.length}</span>
              </p>
              <p className="text-lg mt-1">
                ({Math.round((score / cQuestions.length) * 100)}% accuracy)
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl font-medium mb-8 text-yellow-400"
            >
              {getPerformanceComment((score / cQuestions.length) * 100)}
            </motion.p>

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

// 🧠 C Questions (30 MCQs)
const cQuestions = [
  // Basic (1–10)
  {
    id: 1,
    question: "Which function is used to dynamically allocate memory in C?\na) malloc()\nb) calloc()\nc) realloc()\nd) all of the above",
    options: ["malloc()", "calloc()", "realloc()", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    id: 2,
    question: "What is the size of int in C (on most 32-bit systems)?\na) 2 bytes\nb) 4 bytes\nc) 8 bytes\nd) 10 bytes",
    options: ["2 bytes", "4 bytes", "8 bytes", "10 bytes"],
    correctAnswer: "4 bytes",
  },
  {
    id: 3,
    question: "Which of the following is not a loop in C?\na) for\nb) while\nc) do-while\nd) repeat-until",
    options: ["for", "while", "do-while", "repeat-until"],
    correctAnswer: "repeat-until",
  },
  {
    id: 4,
    question: "What does #include mean in C?\na) Macro\nb) Preprocessor directive\nc) Function call\nd) None",
    options: ["Macro", "Preprocessor directive", "Function call", "None"],
    correctAnswer: "Preprocessor directive",
  },
  {
    id: 5,
    question: "What is the output of this code?\n\nint main() {\n    printf(\"%d\", 5 / 2);\n    return 0;\n}\na) 2\nb) 2.5\nc) 3\nd) Error",
    options: ["2", "2.5", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 6,
    question: "Which operator is used to access the address of a variable?\na) *\nb) &\nc) ->\nd) .",
    options: ["*", "&", "->", "."],
    correctAnswer: "&",
  },
  {
    id: 7,
    question: "Which header file is required for printf() and scanf()?\na) stdlib.h\nb) stdio.h\nc) string.h\nd) math.h",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    correctAnswer: "stdio.h",
  },
  {
    id: 8,
    question: "What is the output of this code?\n\nint main() {\n    int x = 10;\n    x++;\n    printf(\"%d\", x);\n    return 0;\n}\na) 10\nb) 11\nc) 9\nd) Error",
    options: ["10", "11", "9", "Error"],
    correctAnswer: "11",
  },
  {
    id: 9,
    question: "Which keyword is used to define a constant in C?\na) const\nb) final\nc) static\nd) define",
    options: ["const", "final", "static", "define"],
    correctAnswer: "const",
  },
  {
    id: 10,
    question: "What is the purpose of 'break' statement in C?\na) Exits loop\nb) Continues loop\nc) Defines function\nd) None",
    options: ["Exits loop", "Continues loop", "Defines function", "None"],
    correctAnswer: "Exits loop",
  },

  // Intermediate (11–20)
  {
    id: 11,
    question: "What is a dangling pointer in C?\na) Pointer pointing to freed memory\nb) Null pointer\nc) Wild pointer\nd) Void pointer",
    options: ["Pointer pointing to freed memory", "Null pointer", "Wild pointer", "Void pointer"],
    correctAnswer: "Pointer pointing to freed memory",
  },
  {
    id: 12,
    question: "What is the output of this pseudocode?\n\nFUNCTION swap(a, b)\n    temp = a\n    a = b\n    b = temp\nEND\n\nint main()\n    int x = 5, y = 10\n    swap(x, y)\n    PRINT x, y\nEND\na) 5, 10\nb) 10, 5\nc) Error\nd) None",
    options: ["5, 10", "10, 5", "Error", "None"],
    correctAnswer: "5, 10",
  },
  {
    id: 13,
    question: "Which function is used to free dynamically allocated memory?\na) free()\nb) delete()\nc) release()\nd) clear()",
    options: ["free()", "delete()", "release()", "clear()"],
    correctAnswer: "free()",
  },
  {
    id: 14,
    question: "What is the output of this code?\n\nint main() {\n    char str[] = \"Hello\";\n    printf(\"%s\", str + 1);\n    return 0;\n}\na) Hello\nb) ello\nc) Error\nd) None",
    options: ["Hello", "ello", "Error", "None"],
    correctAnswer: "ello",
  },
  {
    id: 15,
    question: "What is the purpose of 'static' variable in a function?\na) Retains value between calls\nb) Global access\nc) Dynamic allocation\nd) None",
    options: ["Retains value between calls", "Global access", "Dynamic allocation", "None"],
    correctAnswer: "Retains value between calls",
  },
  {
    id: 16,
    question: "Which operator is used to access structure members via pointer?\na) .\nb) ->\nc) *\nd) &",
    options: [".", "->", "*", "&"],
    correctAnswer: "->",
  },
  {
    id: 17,
    question: "What is the output of this code?\n\nint main() {\n    int arr[3] = {1, 2, 3};\n    printf(\"%d\", *(arr + 1));\n    return 0;\n}\na) 1\nb) 2\nc) 3\nd) Error",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 18,
    question: "What does 'NULL' represent in C?\na) Zero address\nb) Any address\nc) Invalid address\nd) None",
    options: ["Zero address", "Any address", "Invalid address", "None"],
    correctAnswer: "Zero address",
  },
  {
    id: 19,
    question: "Which keyword is used to define a structure in C?\na) struct\nb) class\nc) union\nd) typedef",
    options: ["struct", "class", "union", "typedef"],
    correctAnswer: "struct",
  },
  {
    id: 20,
    question: "What is the output of this code?\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}\na) 5\nb) 6\nc) Error\nd) None",
    options: ["5", "6", "Error", "None"],
    correctAnswer: "5",
  },

  // Advanced (21–30)
  {
    id: 21,
    question: "What does this pseudocode do?\n\nFUNCTION copy_string(src, dest)\n    WHILE *src != '\\0'\n        *dest = *src\n        src++\n        dest++\n    ENDWHILE\n    *dest = '\\0'\nEND\na) Copies string\nb) Reverses string\nc) Compares string\nd) Concatenates string",
    options: ["Copies string", "Reverses string", "Compares string", "Concatenates string"],
    correctAnswer: "Copies string",
  },
  {
    id: 22,
    question: "What is the purpose of 'volatile' keyword in C?\na) Prevents optimization\nb) Constant value\nc) Dynamic allocation\nd) None",
    options: ["Prevents optimization", "Constant value", "Dynamic allocation", "None"],
    correctAnswer: "Prevents optimization",
  },
  {
    id: 23,
    question: "What is the output of this code?\n\nint main() {\n    int *p = malloc(sizeof(int));\n    *p = 10;\n    printf(\"%d\", *p);\n    free(p);\n    return 0;\n}\na) 10\nb) Error\nc) Undefined\nd) None",
    options: ["10", "Error", "Undefined", "None"],
    correctAnswer: "10",
  },
  {
    id: 24,
    question: "What does this pseudocode do?\n\nFUNCTION reverse_array(arr, n)\n    FOR i FROM 0 TO n/2 - 1\n        SWAP arr[i] WITH arr[n-1-i]\n    ENDFOR\nEND\na) Reverses array\nb) Sorts array\nc) Copies array\nd) None",
    options: ["Reverses array", "Sorts array", "Copies array", "None"],
    correctAnswer: "Reverses array",
  },
  {
    id: 25,
    question: "Which function opens a file in C?\na) open()\nb) fopen()\nc) file()\nd) read()",
    options: ["open()", "fopen()", "file()", "read()"],
    correctAnswer: "fopen()",
  },
  {
    id: 26,
    question: "What is the output of this code?\n\nint main() {\n    int x = 5;\n    int *p = &x;\n    *p = 10;\n    printf(\"%d\", x);\n    return 0;\n}\na) 5\nb) 10\nc) Error\nd) None",
    options: ["5", "10", "Error", "None"],
    correctAnswer: "10",
  },
  {
    id: 27,
    question: "What is the purpose of 'typedef' in C?\na) Defines new type\nb) Allocates memory\nc) Declares function\nd) None",
    options: ["Defines new type", "Allocates memory", "Declares function", "None"],
    correctAnswer: "Defines new type",
  },
  {
    id: 28,
    question: "What does this pseudocode do?\n\nFUNCTION factorial(n)\n    IF n == 0 THEN\n        RETURN 1\n    ELSE\n        RETURN n * factorial(n-1)\n    ENDIF\nEND\na) Computes factorial\nb) Computes power\nc) Sums numbers\nd) None",
    options: ["Computes factorial", "Computes power", "Sums numbers", "None"],
    correctAnswer: "Computes factorial",
  },
  {
    id: 29,
    question: "What is the output of this code?\n\nint main() {\n    int arr[2][2] = {{1, 2}, {3, 4}};\n    printf(\"%d\", arr[1][0]);\n    return 0;\n}\na) 1\nb) 2\nc) 3\nd) 4",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    id: 30,
    question: "What is the purpose of '#define' in C?\na) Defines macro\nb) Includes file\nc) Declares variable\nd) None",
    options: ["Defines macro", "Includes file", "Declares variable", "None"],
    correctAnswer: "Defines macro",
  },
];

export default CQuiz;