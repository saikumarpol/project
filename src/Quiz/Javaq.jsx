// src/quiz/JavaQuiz.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JavaQuiz = () => {
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
    if (percentage >= 90) return "🌟 Outstanding! You're a Java expert!";
    if (percentage >= 70) return "🎉 Great job! Solid understanding of Java."
    if (percentage >= 50) return "👍 Good effort! Keep practicing."
    if (percentage >= 30) return "🧐 Fair attempt. Focus on fundamentals."
    return "😢 Needs improvement. Review basics and try again."
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
            ☕ Java Quiz
          </h1>
          <p className="text-gray-300 mt-2">Test your Java knowledge — no cheating!</p>
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

// 🧠 Java Questions (30 MCQs)
const questions = [
  // Basic (1–10)
  {
    id: 1,
    question: "Which keyword is used to inherit a class in Java?\na) extends\nb) implements\nc) inherits\nd) super",
    options: ["extends", "implements", "inherits", "super"],
    correctAnswer: "extends",
  },
  {
    id: 2,
    question: "What is the default value of an int variable in Java?\na) 0\nb) null\nc) undefined\nd) garbage value",
    options: ["0", "null", "undefined", "garbage value"],
    correctAnswer: "0",
  },
  {
    id: 3,
    question: "Which method is called when an object is created?\na) constructor\nb) initializer\nc) new\nd) create",
    options: ["constructor", "initializer", "new", "create"],
    correctAnswer: "constructor",
  },
  {
    id: 4,
    question: "Which of these is not a valid access modifier in Java?\na) private\nb) public\nc) internal\nd) protected",
    options: ["private", "public", "internal", "protected"],
    correctAnswer: "internal",
  },
  {
    id: 5,
    question: "Which interface is used to store unique elements in Java?\na) List\nb) Set\nc) Map\nd) Collection",
    options: ["List", "Set", "Map", "Collection"],
    correctAnswer: "Set",
  },
  {
    id: 6,
    question: "Which keyword is used to refer to parent class in Java?\na) this\nb) super\nc) base\nd) parent",
    options: ["this", "super", "base", "parent"],
    correctAnswer: "super",
  },
  {
    id: 7,
    question: "Which one is NOT a feature of Java?\na) Platform Independent\nb) Multithreading\nc) Pointers\nd) Garbage Collection",
    options: ["Platform Independent", "Multithreading", "Pointers", "Garbage Collection"],
    correctAnswer: "Pointers",
  },
  {
    id: 8,
    question: "What is the size of int in Java?\na) 2 bytes\nb) 4 bytes\nc) 8 bytes\nd) 1 byte",
    options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    correctAnswer: "4 bytes",
  },
  {
    id: 9,
    question: "Which method must be implemented by any class that implements Runnable?\na) start()\nb) run()\nc) execute()\nd) yield()",
    options: ["start()", "run()", "execute()", "yield()"],
    correctAnswer: "run()",
  },
  {
    id: 10,
    question: "Which of the following is NOT a primitive data type?\na) boolean\nb) String\nc) char\nd) short",
    options: ["boolean", "String", "char", "short"],
    correctAnswer: "String",
  },

  // Basic (11–15)
  {
    id: 11,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(5 + 3);\n    }\n}\na) 8\nb) 53\nc) Error\nd) None",
    options: ["8", "53", "Error", "None"],
    correctAnswer: "8",
  },
  {
    id: 12,
    question: "Which keyword is used to define a constant in Java?\na) const\nb) final\nc) static\nd) define",
    options: ["const", "final", "static", "define"],
    correctAnswer: "final",
  },
  {
    id: 13,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        x++;\n        System.out.println(x);\n    }\n}\na) 10\nb) 11\nc) 9\nd) Error",
    options: ["10", "11", "9", "Error"],
    correctAnswer: "11",
  },
  {
    id: 14,
    question: "Which package contains the String class?\na) java.util\nb) java.io\nc) java.lang\nd) java.net",
    options: ["java.util", "java.io", "java.lang", "java.net"],
    correctAnswer: "java.lang",
  },
  {
    id: 15,
    question: "What is the purpose of the 'break' statement in a loop?\na) Exits loop\nb) Continues loop\nc) Skips iteration\nd) None",
    options: ["Exits loop", "Continues loop", "Skips iteration", "None"],
    correctAnswer: "Exits loop",
  },

  // Intermediate (16–25)
  {
    id: 16,
    question: "What is the output of this pseudocode?\n\nFUNCTION sum_list(list)\n    int sum = 0\n    FOR EACH item IN list\n        sum += item\n    ENDFOR\n    RETURN sum\nENDFUNCTION\n\nPRINT sum_list([1, 2, 3])\na) 6\nb) 123\nc) Error\nd) None",
    options: ["6", "123", "Error", "None"],
    correctAnswer: "6",
  },
  {
    id: 17,
    question: "Which keyword is used to implement an interface in Java?\na) extends\nb) implements\nc) inherits\nd) super",
    options: ["extends", "implements", "inherits", "super"],
    correctAnswer: "implements",
  },
  {
    id: 18,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        System.out.println(s.substring(1, 3));\n    }\n}\na) Hel\nb) ell\nc) lo\nd) Error",
    options: ["Hel", "ell", "lo", "Error"],
    correctAnswer: "ell",
  },
  {
    id: 19,
    question: "Which collection allows key-value pairs?\na) List\nb) Set\nc) Map\nd) Queue",
    options: ["List", "Set", "Map", "Queue"],
    correctAnswer: "Map",
  },
  {
    id: 20,
    question: "What is the purpose of the 'try-catch' block?\na) Loop control\nb) Exception handling\nc) Memory allocation\nd) None",
    options: ["Loop control", "Exception handling", "Memory allocation", "None"],
    correctAnswer: "Exception handling",
  },
  {
    id: 21,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[1]);\n    }\n}\na) 1\nb) 2\nc) 3\nd) Error",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 22,
    question: "Which keyword makes a method belong to the class rather than an instance?\na) final\nb) static\nc) abstract\nd) void",
    options: ["final", "static", "abstract", "void"],
    correctAnswer: "static",
  },
  {
    id: 23,
    question: "What is the output of this pseudocode?\n\nFUNCTION factorial(n)\n    IF n == 0 THEN\n        RETURN 1\n    ELSE\n        RETURN n * factorial(n - 1)\n    ENDIF\nENDFUNCTION\n\nPRINT factorial(3)\na) 6\nb) 3\nc) 9\nd) Error",
    options: ["6", "3", "9", "Error"],
    correctAnswer: "6",
  },
  {
    id: 24,
    question: "Which class is the parent of all classes in Java?\na) Object\nb) Class\nc) System\nd) None",
    options: ["Object", "Class", "System", "None"],
    correctAnswer: "Object",
  },
  {
    id: 25,
    question: "What is the purpose of the 'abstract' keyword?\na) Prevents instantiation\nb) Allows instantiation\nc) Defines constant\nd) None",
    options: ["Prevents instantiation", "Allows instantiation", "Defines constant", "None"],
    correctAnswer: "Prevents instantiation",
  },

  // Advanced (26–30)
  {
    id: 26,
    question: "What does this pseudocode do?\n\nFUNCTION filter_list(list, threshold)\n    RETURN list WHERE item > threshold\nENDFUNCTION\n\nPRINT filter_list([1, 2, 3, 4], 2)\na) [3, 4]\nb) [1, 2]\nc) Error\nd) None",
    options: ["[3, 4]", "[1, 2]", "Error", "None"],
    correctAnswer: "[3, 4]",
  },
  {
    id: 27,
    question: "What is the purpose of the 'synchronized' keyword?\na) Thread safety\nb) Memory allocation\nc) Exception handling\nd) None",
    options: ["Thread safety", "Memory allocation", "Exception handling", "None"],
    correctAnswer: "Thread safety",
  },
  {
    id: 28,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(1, 2, 3);\n        list.stream().forEach(System.out::println);\n    }\n}\na) 1 2 3\nb) [1, 2, 3]\nc) Error\nd) None",
    options: ["1 2 3", "[1, 2, 3]", "Error", "None"],
    correctAnswer: "1 2 3",
  },
  {
    id: 29,
    question: "Which keyword is used to define a generic type in Java?\na) generic\nb) type\nc) <T>\nd) class",
    options: ["generic", "type", "<T>", "class"],
    correctAnswer: "<T>",
  },
  {
    id: 30,
    question: "What is the purpose of the 'volatile' keyword in Java?\na) Prevents optimization\nb) Ensures visibility\nc) Defines constant\nd) None",
    options: ["Prevents optimization", "Ensures visibility", "Defines constant", "None"],
    correctAnswer: "Ensures visibility",
  },
];

export default JavaQuiz;