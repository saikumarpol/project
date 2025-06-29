// src/components/Pythonps.jsx
import React from 'react';
import { motion } from 'framer-motion';

const pythonProblems = [
  "Write a program to reverse a string.",
  "Check if a given string is a palindrome.",
  "Count the number of vowels in a string.",
  "Find the factorial of a number using recursion.",
  "Write a function to find the largest element in a list.",
  "Implement linear search in Python.",
  "Create a dictionary from two lists.",
  "Sort a list of tuples by the second item.",
  "Remove duplicates from a list.",
  "Convert Celsius to Fahrenheit using a lambda function.",
  "Print all prime numbers between 1 and 100.",
  "Write a program to check if a number is Armstrong.",
  "Flatten a nested list in Python.",
  "Merge two dictionaries.",
  "Find the most frequent element in a list.",
  "Generate Fibonacci sequence up to n terms.",
  "Check if a year is a leap year.",
  "Swap two variables without using a third variable.",
  "Implement binary search algorithm.",
  "Write a Python program to get the current date and time.",
  "Validate an email address using regular expressions.",
  "Extract all links from a webpage using BeautifulSoup.",
  "Create a simple calculator class with add, subtract, multiply, divide methods.",
  "Use threading to print numbers from 1 to 10.",
  "Read a file and count the number of words."
];

const ProblemCard = ({ text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="bg-white p-4 rounded-lg shadow hover:shadow-md border-l-4 border-blue-500 transition"
    >
      <p className="text-gray-800 font-medium">
        <span className="font-bold text-blue-600">{index + 1}.</span> {text}
      </p>
    </motion.div>
  );
};

const Pythonps = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📄 Python Coding Problems</h1>
      <p className="text-gray-600 mb-8">
        Practice these commonly asked Python coding questions in technical interviews and placement rounds.
        No solutions provided — ideal for self-assessment and timed coding practice.
      </p>

      <div className="space-y-4">
        {pythonProblems.map((problem, index) => (
          <ProblemCard key={index} text={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Pythonps;