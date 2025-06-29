import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const advancedQuizQuestions = [
  // C (1–12)
  {
    id: 1,
    question: "What happens if you access a dangling pointer in C?\na) Program crashes\nb) Undefined behavior\nc) Null pointer exception\nd) Compilation error",
    options: ["Program crashes", "Undefined behavior", "Null pointer exception", "Compilation error"],
    correctAnswer: "Undefined behavior",
  },
  {
    id: 2,
    question: "What is the output of this code?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    int *p = &x;\n    *p++;\n    printf(\"%d\", x);\n    return 0;\n}\na) 5\nb) 6\nc) Undefined\nd) Error",
    options: ["5", "6", "Undefined", "Error"],
    correctAnswer: "5",
  },
  {
    id: 3,
    question: "What is the purpose of 'volatile' in C?\na) Prevents compiler optimization\nb) Makes variable constant\nc) Enables dynamic allocation\nd) None",
    options: ["Prevents compiler optimization", "Makes variable constant", "Enables dynamic allocation", "None"],
    correctAnswer: "Prevents compiler optimization",
  },
  {
    id: 4,
    question: "What does this pseudocode do?\n\nFUNCTION copy_string(src, dest)\n    WHILE *src != '\\0'\n        *dest++ = *src++\n    ENDWHILE\n    *dest = '\\0'\nEND\na) Copies string\nb) Reverses string\nc) Compares string\nd) Concatenates string",
    options: ["Copies string", "Reverses string", "Compares string", "Concatenates string"],
    correctAnswer: "Copies string",
  },
  {
    id: 5,
    question: "What is the output of this code?\n\n#include <stdio.h>\nint main() {\n    int arr[2][2] = {{1, 2}, {3, 4}};\n    printf(\"%d\", *(*(arr + 1) + 1));\n    return 0;\n}\na) 2\nb) 3\nc) 4\nd) Error",
    options: ["2", "3", "4", "Error"],
    correctAnswer: "4",
  },
  {
    id: 6,
    question: "Which function is used to resize dynamically allocated memory in C?\na) malloc()\nb) calloc()\nc) realloc()\nd) free()",
    options: ["malloc()", "calloc()", "realloc()", "free()"],
    correctAnswer: "realloc()",
  },
  {
    id: 7,
    question: "What is the purpose of '#pragma pack' in C?\na) Aligns memory\nb) Controls structure padding\nc) Defines macros\nd) None",
    options: ["Aligns memory", "Controls structure padding", "Defines macros", "None"],
    correctAnswer: "Controls structure padding",
  },
  {
    id: 8,
    question: "What is the output of this code?\n\n#include <stdio.h>\nint main() {\n    int x = 10;\n    printf(\"%d\", (x << 1));\n    return 0;\n}\na) 5\nb) 10\nc) 20\nd) Error",
    options: ["5", "10", "20", "Error"],
    correctAnswer: "20",
  },
  {
    id: 9,
    question: "What does 'restrict' keyword do in C?\na) Limits variable scope\nb) Optimizes pointer aliasing\nc) Makes variable constant\nd) None",
    options: ["Limits variable scope", "Optimizes pointer aliasing", "Makes variable constant", "None"],
    correctAnswer: "Optimizes pointer aliasing",
  },
  {
    id: 10,
    question: "What is the output of this code?\n\n#include <stdio.h>\nunion U {\n    int i;\n    char c;\n} u;\nint main() {\n    u.i = 65;\n    printf(\"%c\", u.c);\n    return 0;\n}\na) A\nb) 65\nc) Error\nd) Undefined",
    options: ["A", "65", "Error", "Undefined"],
    correctAnswer: "A",
  },
  {
    id: 11,
    question: "What is the time complexity of accessing a memory block using a pointer?\na) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
  },
  {
    id: 12,
    question: "What does this pseudocode do?\n\nFUNCTION swap_ptr(ptr1, ptr2)\n    temp = *ptr1\n    *ptr1 = *ptr2\n    *ptr2 = temp\nEND\na) Swaps pointers\nb) Swaps values\nc) Copies pointers\nd) None",
    options: ["Swaps pointers", "Swaps values", "Copies pointers", "None"],
    correctAnswer: "Swaps values",
  },

  // C++ (13–25)
  {
    id: 13,
    question: "What is the output of this code?\n\n#include <iostream>\nclass Base {\npublic:\n    virtual void show() { std::cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic:\n    void show() override { std::cout << \"Derived\"; }\n};\nint main() {\n    Base* b = new Derived();\n    b->show();\n    delete b;\n    return 0;\n}\na) Base\nb) Derived\nc) Error\nd) Undefined",
    options: ["Base", "Derived", "Error", "Undefined"],
    correctAnswer: "Derived",
  },
  {
    id: 14,
    question: "What is the purpose of 'std::move' in C++?\na) Copies object\nb) Enables move semantics\nc) Deletes object\nd) None",
    options: ["Copies object", "Enables move semantics", "Deletes object", "None"],
    correctAnswer: "Enables move semantics",
  },
  {
    id: 15,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> v = {1, 2, 3};\n    v.push_back(4);\n    std::cout << v.capacity();\n    return 0;\n}\na) 3\nb) 4\nc) 6\nd) Implementation-dependent",
    options: ["3", "4", "6", "Implementation-dependent"],
    correctAnswer: "Implementation-dependent",
  },
  {
    id: 16,
    question: "What is the purpose of 'constexpr' in C++?\na) Runtime evaluation\nb) Compile-time evaluation\nc) Dynamic allocation\nd) None",
    options: ["Runtime evaluation", "Compile-time evaluation", "Dynamic allocation", "None"],
    correctAnswer: "Compile-time evaluation",
  },
  {
    id: 17,
    question: "What does this pseudocode do?\n\nTEMPLATE<typename T>\nFUNCTION max_val(a, b)\n    RETURN a > b ? a : b\nEND\na) Finds maximum\nb) Sorts values\nc) Swaps values\nd) None",
    options: ["Finds maximum", "Sorts values", "Swaps values", "None"],
    correctAnswer: "Finds maximum",
  },
  {
    id: 18,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <memory>\nint main() {\n    std::shared_ptr<int> p1 = std::make_shared<int>(10);\n    std::shared_ptr<int> p2 = p1;\n    std::cout << p1.use_count();\n    return 0;\n}\na) 1\nb) 2\nc) 0\nd) Error",
    options: ["1", "2", "0", "Error"],
    correctAnswer: "2",
  },
  {
    id: 19,
    question: "What is the purpose of 'std::unique_ptr'?\na) Shared ownership\nb) Single ownership\nc) No ownership\nd) None",
    options: ["Shared ownership", "Single ownership", "No ownership", "None"],
    correctAnswer: "Single ownership",
  },
  {
    id: 20,
    question: "What is the output of this code?\n\n#include <iostream>\nclass A {\npublic:\n    virtual ~A() { std::cout << \"A\"; }\n};\nclass B : public A {\npublic:\n    ~B() { std::cout << \"B\"; }\n};\nint main() {\n    A* a = new B();\n    delete a;\n    return 0;\n}\na) AB\nb) BA\nc) A\nd) Error",
    options: ["AB", "BA", "A", "Error"],
    correctAnswer: "BA",
  },
  {
    id: 21,
    question: "What is the time complexity of std::map insertion?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 22,
    question: "What is the purpose of 'noexcept' in C++?\na) Ensures exceptions\nb) Prevents exceptions\nc) Catches exceptions\nd) None",
    options: ["Ensures exceptions", "Prevents exceptions", "Catches exceptions", "None"],
    correctAnswer: "Prevents exceptions",
  },
  {
    id: 23,
    question: "What is the output of this code?\n\n#include <iostream>\n#include <thread>\nvoid func() { std::cout << \"Thread\"; }\nint main() {\n    std::thread t(func);\n    t.join();\n    return 0;\n}\na) Thread\nb) Error\nc) Nothing\nd) Undefined",
    options: ["Thread", "Error", "Nothing", "Undefined"],
    correctAnswer: "Thread",
  },
  {
    id: 24,
    question: "What does 'std::forward' do in C++?\na) Copies arguments\nb) Forwards arguments with preserved value category\nc) Moves arguments\nd) None",
    options: ["Copies arguments", "Forwards arguments with preserved value category", "Moves arguments", "None"],
    correctAnswer: "Forwards arguments with preserved value category",
  },
  {
    id: 25,
    question: "What is the purpose of 'std::mutex' in C++?\na) Thread synchronization\nb) Memory allocation\nc) Exception handling\nd) None",
    options: ["Thread synchronization", "Memory allocation", "Exception handling", "None"],
    correctAnswer: "Thread synchronization",
  },

  // Java (26–38)
  {
    id: 26,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(1, 2, 3);\n        list.stream().filter(x -> x > 1).forEach(System.out::print);\n    }\n}\na) 123\nb) 23\nc) 1\nd) Error",
    options: ["123", "23", "1", "Error"],
    correctAnswer: "23",
  },
  {
    id: 27,
    question: "What is the purpose of 'synchronized' in Java?\na) Thread safety\nb) Memory allocation\nc) Exception handling\nd) None",
    options: ["Thread safety", "Memory allocation", "Exception handling", "None"],
    correctAnswer: "Thread safety",
  },
  {
    id: 28,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        String s = new String(\"Hello\");\n        String t = s.intern();\n        System.out.println(s == t);\n    }\n}\na) true\nb) false\nc) Error\nd) Undefined",
    options: ["true", "false", "Error", "Undefined"],
    correctAnswer: "false",
  },
  {
    id: 29,
    question: "What does this pseudocode do?\n\nFUNCTION reduce_list(list, func, init)\n    result = init\n    FOR EACH item IN list\n        result = func(result, item)\n    ENDFOR\n    RETURN result\nENDFUNCTION\na) Maps list\nb) Reduces list\nc) Filters list\nd) None",
    options: ["Maps list", "Reduces list", "Filters list", "None"],
    correctAnswer: "Reduces list",
  },
  {
    id: 30,
    question: "What is the purpose of 'volatile' in Java?\na) Prevents optimization\nb) Ensures visibility\nc) Defines constant\nd) None",
    options: ["Prevents optimization", "Ensures visibility", "Defines constant", "None"],
    correctAnswer: "Ensures visibility",
  },
  {
    id: 31,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        ExecutorService es = Executors.newFixedThreadPool(2);\n        es.submit(() -> System.out.print(\"Task\"));\n        es.shutdown();\n    }\n}\na) Task\nb) Error\nc) Nothing\nd) Undefined",
    options: ["Task", "Error", "Nothing", "Undefined"],
    correctAnswer: "Task",
  },
  {
    id: 32,
    question: "What is the time complexity of HashMap get operation in Java?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
  },
  {
    id: 33,
    question: "What is the purpose of 'default' methods in Java interfaces?\na) Static methods\nb) Provide implementation\nc) Prevent implementation\nd) None",
    options: ["Static methods", "Provide implementation", "Prevent implementation", "None"],
    correctAnswer: "Provide implementation",
  },
  {
    id: 34,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        Optional<String> opt = Optional.ofNullable(null);\n        System.out.println(opt.orElse(\"Empty\"));\n    }\n}\na) null\nb) Empty\nc) Error\nd) None",
    options: ["null", "Empty", "Error", "None"],
    correctAnswer: "Empty",
  },
  {
    id: 35,
    question: "What is the purpose of 'CompletableFuture' in Java?\na) Synchronous execution\nb) Asynchronous execution\nc) Memory management\nd) None",
    options: ["Synchronous execution", "Asynchronous execution", "Memory management", "None"],
    correctAnswer: "Asynchronous execution",
  },
  {
    id: 36,
    question: "What does this pseudocode do?\n\nFUNCTION collect_map(map, key, value)\n    IF key IN map THEN\n        map[key].append(value)\n    ELSE\n        map[key] = [value]\n    ENDIF\nENDFUNCTION\na) Groups values by key\nb) Sorts map\nc) Merges maps\nd) None",
    options: ["Groups values by key", "Sorts map", "Merges maps", "None"],
    correctAnswer: "Groups values by key",
  },
  {
    id: 37,
    question: "What is the output of this code?\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add(\"A\");\n        list.add(0, \"B\");\n        System.out.println(list);\n    }\n}\na) [A, B]\nb) [B, A]\nc) Error\nd) None",
    options: ["[A, B]", "[B, A]", "Error", "None"],
    correctAnswer: "[B, A]",
  },
  {
    id: 38,
    question: "What is the purpose of 'java.lang.invoke' package?\na) Reflection\nb) Dynamic method invocation\nc) Thread management\nd) None",
    options: ["Reflection", "Dynamic method invocation", "Thread management", "None"],
    correctAnswer: "Dynamic method invocation",
  },

  // DSA (39–50)
  {
    id: 39,
    question: "What is the time complexity of Dijkstra’s algorithm using a priority queue?\na) O(V²)\nb) O(E log V)\nc) O(V log E)\nd) O(E²)",
    options: ["O(V²)", "O(E log V)", "O(V log E)", "O(E²)"],
    correctAnswer: "O(E log V)",
  },
  {
    id: 40,
    question: "What does this pseudocode do?\n\nFUNCTION knapsack(values, weights, capacity)\n    n = length(values)\n    CREATE dp[n+1][capacity+1]\n    FOR i FROM 0 TO n\n        FOR w FROM 0 TO capacity\n            IF i == 0 OR w == 0 THEN\n                dp[i][w] = 0\n            ELSE IF weights[i-1] <= w THEN\n                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])\n            ELSE\n                dp[i][w] = dp[i-1][w]\n            ENDIF\n        ENDFOR\n    ENDFOR\n    RETURN dp[n][capacity]\nENDFUNCTION\na) Solves knapsack problem\nb) Sorts array\nc) Finds shortest path\nd) None",
    options: ["Solves knapsack problem", "Sorts array", "Finds shortest path", "None"],
    correctAnswer: "Solves knapsack problem",
  },
  {
    id: 41,
    question: "What is the space complexity of Floyd-Warshall algorithm?\na) O(V)\nb) O(V²)\nc) O(V³)\nd) O(E)",
    options: ["O(V)", "O(V²)", "O(V³)", "O(E)"],
    correctAnswer: "O(V²)",
  },
  {
    id: 42,
    question: "What does this pseudocode do?\n\nFUNCTION is_balanced(root)\n    IF root == NULL THEN\n        RETURN 0\n    ENDIF\n    left_height = is_balanced(root.left)\n    IF left_height == -1 THEN RETURN -1\n    right_height = is_balanced(root.right)\n    IF right_height == -1 THEN RETURN -1\n    IF abs(left_height - right_height) > 1 THEN\n        RETURN -1\n    ELSE\n        RETURN max(left_height, right_height) + 1\n    ENDIF\nENDFUNCTION\na) Checks if tree is balanced\nb) Finds tree height\nc) Performs inorder traversal\nd) None",
    options: ["Checks if tree is balanced", "Finds tree height", "Performs inorder traversal", "None"],
    correctAnswer: "Checks if tree is balanced",
  },
  {
    id: 43,
    question: "What is the time complexity of Kruskal’s algorithm using a disjoint-set data structure?\na) O(E log V)\nb) O(V log E)\nc) O(V²)\nd) O(E²)",
    options: ["O(E log V)", "O(V log E)", "O(V²)", "O(E²)"],
    correctAnswer: "O(E log V)",
  },
  {
    id: 44,
    question: "What does this pseudocode do?\n\nFUNCTION lcs(X, Y, m, n)\n    IF m == 0 OR n == 0 THEN\n        RETURN 0\n    ENDIF\n    IF X[m-1] == Y[n-1] THEN\n        RETURN 1 + lcs(X, Y, m-1, n-1)\n    ELSE\n        RETURN max(lcs(X, Y, m-1, n), lcs(X, Y, m, n-1))\n    ENDIF\nENDFUNCTION\na) Finds longest common subsequence\nb) Finds shortest path\nc) Sorts strings\nd) None",
    options: ["Finds longest common subsequence", "Finds shortest path", "Sorts strings", "None"],
    correctAnswer: "Finds longest common subsequence",
  },
  {
    id: 45,
    question: "What is the time complexity of inserting into a balanced BST?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 46,
    question: "Which data structure is used for topological sorting?\na) Stack\nb) Queue\nc) Heap\nd) Array",
    options: ["Stack", "Queue", "Heap", "Array"],
    correctAnswer: "Stack",
  },
  {
    id: 47,
    question: "What is the time complexity of deleting from a min-heap?\na) O(1)\nb) O(log n)\nc) O(n)\nd) O(n log n)",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 48,
    question: "What does this pseudocode do?\n\nFUNCTION dijkstra(graph, start)\n    CREATE dist[V] = infinity\n    CREATE pq = PriorityQueue()\n    dist[start] = 0\n    pq.insert(start, 0)\n    WHILE pq NOT EMPTY\n        u = pq.extract_min()\n        FOR EACH neighbor v OF u\n            IF dist[u] + weight(u, v) < dist[v] THEN\n                dist[v] = dist[u] + weight(u, v)\n                pq.decrease_key(v, dist[v])\n            ENDIF\n        ENDFOR\n    ENDWHILE\n    RETURN dist\nENDFUNCTION\na) Finds shortest paths\nb) Finds minimum spanning tree\nc) Detects cycles\nd) None",
    options: ["Finds shortest paths", "Finds minimum spanning tree", "Detects cycles", "None"],
    correctAnswer: "Finds shortest paths",
  },
  {
    id: 49,
    question: "What is the space complexity of a trie with n strings of average length m?\na) O(n)\nb) O(m)\nc) O(n * m)\nd) O(n + m)",
    options: ["O(n)", "O(m)", "O(n * m)", "O(n + m)"],
    correctAnswer: "O(n * m)",
  },
  {
    id: 50,
    question: "What does this pseudocode do?\n\nFUNCTION kmp_search(text, pattern)\n    CREATE lps = longest_prefix_suffix(pattern)\n    i = 0, j = 0\n    WHILE i < length(text)\n        IF pattern[j] == text[i] THEN\n            i++, j++\n        ENDIF\n        IF j == length(pattern) THEN\n            PRINT \"Found at\", i-j\n            j = lps[j-1]\n        ELSE IF i < length(text) AND pattern[j] != text[i] THEN\n            IF j != 0 THEN j = lps[j-1]\n            ELSE i++\n            ENDIF\n        ENDIF\n    ENDWHILE\nENDFUNCTION\na) String matching\nb) String sorting\nc) String reversal\nd) None",
    options: ["String matching", "String sorting", "String reversal", "None"],
    correctAnswer: "String matching",
  },
];

const AdvancedQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question

  // Load answers from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('advancedQuizAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Save answers to localStorage on update
  useEffect(() => {
    localStorage.setItem('advancedQuizAnswers', JSON.stringify(answers));
  }, [answers]);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null); // Move to next question if time runs out
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (option) => {
    const question = advancedQuizQuestions[currentQ];
    const isCorrect = option === question.correctAnswer;
    if (isCorrect && option !== null) setScore(score + 1);

    setAnswers([
      ...answers,
      {
        question: question.question,
        selected: option || 'Skipped (Time Out)',
        correct: question.correctAnswer,
        isCorrect: option !== null && isCorrect,
      },
    ]);

    if (currentQ + 1 < advancedQuizQuestions.length) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(30); // Reset timer for next question
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
    setTimeLeft(30);
    localStorage.removeItem('advancedQuizAnswers');
  };

  const getPerformanceComment = (percentage) => {
    if (percentage >= 90) return "🌟 Elite! You're a programming master!";
    if (percentage >= 70) return "🎉 Impressive! Strong advanced skills.";
    if (percentage >= 50) return "👍 Solid effort! Keep mastering advanced concepts.";
    if (percentage >= 30) return "🧐 Fair attempt. Dive deeper into advanced topics.";
    return "😢 Needs work. Study advanced C, C++, Java, and DSA.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
            🚀 Advanced Programming Quiz
          </h1>
          <p className="text-gray-300 mt-2 text-lg">Challenge your C, C++, Java, and DSA expertise — 50 tough questions!</p>
        </motion.div>

        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-600"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-400">
                Question {currentQ + 1} / {advancedQuizQuestions.length}
              </span>
              <span className="text-sm text-yellow-400">
                Time Left: {timeLeft}s
              </span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQ + 1) / advancedQuizQuestions.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <pre className="mb-6 text-base leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-lg">
              {advancedQuizQuestions[currentQ].question}
            </pre>
            <div className="space-y-4">
              {advancedQuizQuestions[currentQ].options.map((option, idx) => (
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#4B5563' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option)}
                  key={idx}
                  className={`w-full py-3 px-4 rounded-lg text-left transition-all text-white ${
                    answers[currentQ]?.selected === option
                      ? answers[currentQ].isCorrect
                        ? 'bg-green-600'
                        : 'bg-red-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Select option ${option}`}
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
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-600"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">🎉 Quiz Completed!</h2>
            <div className="text-center mb-6">
              <p className="text-2xl">
                You scored{' '}
                <span className="font-bold text-green-400">{score}</span> out of{' '}
                <span className="font-bold">{advancedQuizQuestions.length}</span>
              </p>
              <p className="text-lg mt-2">
                ({Math.round((score / advancedQuizQuestions.length) * 100)}% accuracy)
              </p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-xl font-medium mb-8 text-yellow-400"
            >
              {getPerformanceComment((score / advancedQuizQuestions.length) * 100)}
            </motion.p>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              <AnimatePresence>
                {answers.map((ans, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      ans.isCorrect
                        ? 'border-green-500 bg-green-900/20'
                        : 'border-red-500 bg-red-900/20'
                    }`}
                  >
                    <strong className="block mb-2">Q{idx + 1}: {ans.question}</strong>
                    <p>
                      ✅ Correct: <span className="font-medium">{ans.correct}</span> |{' '}
                      📝 Your Answer:{' '}
                      <span className={ans.isCorrect ? 'text-green-400' : 'text-red-400'}>
                        {ans.selected}
                      </span>
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex justify-between mt-8">
              <Link
                to="/"
                className="py-3 px-6 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-semibold transition-colors"
              >
                🏠 Back to Home
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={restartQuiz}
                className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                🔄 Restart Quiz
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdvancedQuiz;