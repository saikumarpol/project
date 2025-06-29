// src/quiz/DsaQuiz.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DsaQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const question = dsaQuestions[currentQ];
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

    if (currentQ + 1 < dsaQuestions.length) {
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
    if (percentage >= 90) return "🌟 Outstanding! You're a DSA expert!";
    if (percentage >= 70) return "🎉 Great job! Solid DSA foundation."
    if (percentage >= 50) return "👍 Good effort! Keep improving."
    if (percentage >= 30) return "🧠 Fair attempt. Strengthen basics."
    return "😢 Needs improvement. Revise concepts."
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
            📊 DSA Quiz
          </h1>
          <p className="text-gray-300 mt-2">Ace your DSA interviews with this quiz.</p>
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
                Question {currentQ + 1} / {dsaQuestions.length}
              </span>
            
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQ + 1) / dsaQuestions.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Question */}
            <pre className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
              {dsaQuestions[currentQ].question}
            </pre>

            {/* Options */}
            <div className="space-y-3">
              {dsaQuestions[currentQ].options.map((option, idx) => (
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
                <span className="font-bold">{dsaQuestions.length}</span>
              </p>
              <p className="text-lg mt-1">
  ({Math.round((score / dsaQuestions.length) * 100)}% accuracy)
</p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl font-medium mb-8 text-yellow-400"
            >
              {getPerformanceComment((score / dsaQuestions.length) * 100)}
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

// 🧠 DSA Questions (30 MCQs)
const dsaQuestions = [
  // Basic (1–10)
  {
    id: 1,
    question: "Which data structure uses FIFO principle?\na) Stack\nb) Queue\nc) Array\nd) Tree",
    options: ["Stack", "Queue", "Array", "Tree"],
    correctAnswer: "Queue",
  },
  {
    id: 2,
    question: "Which sorting algorithm has best case O(n log n)?\na) Bubble Sort\nb) Quick Sort\nc) Insertion Sort\nd) Selection Sort",
    options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    id: 3,
    question: "Which data structure is suitable for recursion?\na) Queue\nb) Stack\nc) Linked List\nd) Tree",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
  },
  {
    id: 4,
    question: "Which traversal is used to get values in sorted order in BST?\na) Inorder\nb) Preorder\nc) Postorder\nd) Level Order",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Inorder",
  },
  {
    id: 5,
    question: "What is the worst-case time complexity of binary search?\na) O(log n)\nb) O(n)\nc) O(1)\nd) O(n²)",
    options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 6,
    question: "Which data structure uses LIFO principle?\na) Queue\nb) Stack\nc) Array\nd) Linked List",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
  },
  {
    id: 7,
    question: "What is the time complexity of accessing an element in an array?\na) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
  },
  {
    id: 8,
    question: "Which data structure is used to implement a priority queue efficiently?\na) Array\nb) Linked List\nc) Heap\nd) Stack",
    options: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: "Heap",
  },
  {
    id: 9,
    question: "What is the space complexity of a singly linked list with n nodes?\na) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(n)",
  },
  {
    id: 10,
    question: "Which algorithm is used to find the shortest path in an unweighted graph?\na) DFS\nb) BFS\nc) Dijkstra’s\nd) Bellman-Ford",
    options: ["DFS", "BFS", "Dijkstra’s", "Bellman-Ford"],
    correctAnswer: "BFS",
  },

  // Intermediate (11–20)
  {
    id: 11,
    question: "What does this pseudocode do?\n\nFUNCTION reverse_list(head)\n    prev = NULL\n    current = head\n    WHILE current != NULL\n        next = current.next\n        current.next = prev\n        prev = current\n        current = next\n    ENDWHILE\n    RETURN prev\nENDFUNCTION\na) Reverses a linked list\nb) Sorts a linked list\nc) Copies a linked list\nd) Deletes a linked list",
    options: ["Reverses a linked list", "Sorts a linked list", "Copies a linked list", "Deletes a linked list"],
    correctAnswer: "Reverses a linked list",
  },
  {
    id: 12,
    question: "What is the time complexity of inserting an element into a balanced BST?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 13,
    question: "Which sorting algorithm is stable?\na) Quick Sort\nb) Heap Sort\nc) Merge Sort\nd) Selection Sort",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    id: 14,
    question: "What is the time complexity of this pseudocode?\n\nFUNCTION linear_search(arr, target)\n    FOR i FROM 0 TO length(arr)-1\n        IF arr[i] == target THEN\n            RETURN i\n        ENDIF\n    ENDFOR\n    RETURN -1\nENDFUNCTION\na) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(n)",
  },
  {
    id: 15,
    question: "Which data structure is used for implementing LRU cache?\na) Queue\nb) Stack\nc) HashMap + Linked List\nd) Binary Tree",
    options: ["Queue", "Stack", "HashMap + Linked List", "Binary Tree"],
    correctAnswer: "HashMap + Linked List",
  },
  {
    id: 16,
    question: "What is the output of this pseudocode for a stack?\n\nFUNCTION main()\n    stack = new Stack()\n    stack.push(1)\n    stack.push(2)\n    stack.pop()\n    PRINT stack.top()\nEND\na) 1\nb) 2\nc) Error\nd) None",
    options: ["1", "2", "Error", "None"],
    correctAnswer: "1",
  },
  {
    id: 17,
    question: "Which tree has all leaves at the same level?\na) Binary Tree\nb) BST\nc) AVL Tree\nd) Complete Binary Tree",
    options: ["Binary Tree", "BST", "AVL Tree", "Complete Binary Tree"],
    correctAnswer: "Complete Binary Tree",
  },
  {
    id: 18,
    question: "What is the time complexity of inserting into a min-heap?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 19,
    question: "Which algorithm detects a cycle in a graph?\na) BFS\nb) DFS\nc) Dijkstra’s\nd) Kruskal’s",
    options: ["BFS", "DFS", "Dijkstra’s", "Kruskal’s"],
    correctAnswer: "DFS",
  },
  {
    id: 20,
    question: "What is the space complexity of BFS in a graph with V vertices and E edges?\na) O(V)\nb) O(E)\nc) O(V + E)\nd) O(V²)",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
    correctAnswer: "O(V)",
  },

  // Advanced (21–30)
  {
    id: 21,
    question: "What does this pseudocode do?\n\nFUNCTION knapsack(values, weights, capacity)\n    n = length(values)\n    CREATE dp[n+1][capacity+1]\n    FOR i FROM 0 TO n\n        FOR w FROM 0 TO capacity\n            IF i == 0 OR w == 0 THEN\n                dp[i][w] = 0\n            ELSE IF weights[i-1] <= w THEN\n                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])\n            ELSE\n                dp[i][w] = dp[i-1][w]\n            ENDIF\n        ENDFOR\n    ENDFOR\n    RETURN dp[n][capacity]\nENDFUNCTION\na) Solves knapsack problem\nb) Sorts array\nc) Finds shortest path\nd) None",
    options: ["Solves knapsack problem", "Sorts array", "Finds shortest path", "None"],
    correctAnswer: "Solves knapsack problem",
  },
  {
    id: 22,
    question: "What is the time complexity of Prim’s algorithm using a priority queue?\na) O(V²)\nb) O(E log V)\nc) O(V log E)\nd) O(E²)",
    options: ["O(V²)", "O(E log V)", "O(V log E)", "O(E²)"],
    correctAnswer: "O(E log V)",
  },
  {
    id: 23,
    question: "What does this pseudocode do?\n\nFUNCTION merge_sort(arr, left, right)\n    IF left < right THEN\n        mid = (left + right) / 2\n        merge_sort(arr, left, mid)\n        merge_sort(arr, mid + 1, right)\n        merge(arr, left, mid, right)\n    ENDIF\nENDFUNCTION\na) Sorts array\nb) Reverses array\nc) Searches array\nd) None",
    options: ["Sorts array", "Reverses array", "Searches array", "None"],
    correctAnswer: "Sorts array",
  },
  {
    id: 24,
    question: "Which algorithm finds the shortest path in a weighted graph with negative edges?\na) BFS\nb) Dijkstra’s\nc) Bellman-Ford\nd) Kruskal’s",
    options: ["BFS", "Dijkstra’s", "Bellman-Ford", "Kruskal’s"],
    correctAnswer: "Bellman-Ford",
  },
  {
    id: 25,
    question: "What is the time complexity of deleting the minimum element from a min-heap?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 26,
    question: "What does this pseudocode do?\n\nFUNCTION is_balanced(root)\n    IF root == NULL THEN\n        RETURN 0\n    ENDIF\n    left_height = is_balanced(root.left)\n    IF left_height == -1 THEN RETURN -1\n    right_height = is_balanced(root.right)\n    IF right_height == -1 THEN RETURN -1\n    IF abs(left_height - right_height) > 1 THEN\n        RETURN -1\n    ELSE\n        RETURN max(left_height, right_height) + 1\n    ENDIF\nENDFUNCTION\na) Checks if tree is balanced\nb) Finds tree height\nc) Performs inorder traversal\nd) None",
    options: ["Checks if tree is balanced", "Finds tree height", "Performs inorder traversal", "None"],
    correctAnswer: "Checks if tree is balanced",
  },
  {
    id: 27,
    question: "What is the time complexity of Floyd-Warshall algorithm?\na) O(V²)\nb) O(V³)\nc) O(E log V)\nd) O(V + E)",
    options: ["O(V²)", "O(V³)", "O(E log V)", "O(V + E)"],
    correctAnswer: "O(V³)",
  },
  {
    id: 28,
    question: "Which data structure is used for topological sorting?\na) Stack\nb) Queue\nc) Heap\nd) Array",
    options: ["Stack", "Queue", "Heap", "Array"],
    correctAnswer: "Stack",
  },
  {
    id: 29,
    question: "What does this pseudocode do?\n\nFUNCTION lcs(X, Y, m, n)\n    IF m == 0 OR n == 0 THEN\n        RETURN 0\n    ENDIF\n    IF X[m-1] == Y[n-1] THEN\n        RETURN 1 + lcs(X, Y, m-1, n-1)\n    ELSE\n        RETURN max(lcs(X, Y, m-1, n), lcs(X, Y, m, n-1))\n    ENDIF\nENDFUNCTION\na) Finds longest common subsequence\nb) Finds shortest path\nc) Sorts strings\nd) None",
    options: ["Finds longest common subsequence", "Finds shortest path", "Sorts strings", "None"],
    correctAnswer: "Finds longest common subsequence",
  },
  {
    id: 30,
    question: "What is the space complexity of Dijkstra’s algorithm using a priority queue?\na) O(V)\nb) O(E)\nc) O(V + E)\nd) O(V²)",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
    correctAnswer: "O(V)",
  },
];

export default DsaQuiz;