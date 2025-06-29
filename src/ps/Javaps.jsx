import React from 'react';
import { motion } from 'framer-motion';

const javaProblems = [
  "Write a program to reverse a string using recursion.",
  "Check if a number is a palindrome in Java.",
  "Write a Java program to count vowels and consonants in a string.",
  "Find factorial using iterative and recursive approaches.",
  "Sort an array using Bubble Sort.",
  "Implement linear and binary search.",
  "Use ArrayList to store and display elements.",
  "Write a program to implement a stack using array.",
  "Create a simple calculator using switch case.",
  "Find duplicates in an array.",
  "Check for Armstrong number.",
  "Swap two variables without using a third variable.",
  "Write a method to check prime number.",
  "Fibonacci series using recursion.",
  "Implement a basic banking system (OOP).",
  "Create a simple Employee class and display details.",
  "Demonstrate method overloading and overriding.",
  "Use interfaces and abstract classes.",
  "Demonstrate exception handling with try-catch.",
  "Create custom exception class.",
  "Use HashMap to store student records.",
  "Implement a queue using LinkedList.",
  "Find the second largest element in an array.",
  "Write a program for matrix multiplication.",
  "Read and write a file in Java.",
  "Check whether a year is a leap year.",
  "Count characters, words, lines in a file.",
  "Use threads to print even and odd numbers.",
  "Create a simple GUI calculator with Swing.",
  "Write a program to sort a list of objects."
];

const ProblemCard = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    className="bg-white p-4 rounded-xl shadow hover:shadow-md border-l-4 border-green-600"
  >
    <p className="text-gray-800 font-medium">
      <span className="text-green-600 font-bold">{index + 1}.</span> {text}
    </p>
  </motion.div>
);

const Javaps = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">☕ Java Programming Problems</h1>
      <p className="text-gray-600 mb-8">
        Practice these Java coding questions for interviews and self-improvement.
        Topics include OOP, data structures, file I/O, and exception handling.
      </p>
      <div className="space-y-4">
        {javaProblems.map((problem, index) => (
          <ProblemCard key={index} text={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Javaps;