import React from 'react';
import { motion } from 'framer-motion';

const cProblems = [
  "Reverse a string without using library functions.",
  "Check if a string is a palindrome using pointers.",
  "Count vowels, consonants, digits, and white spaces.",
  "Find factorial using recursion.",
  "Swap two numbers using pointers.",
  "Check if a number is prime.",
  "Fibonacci series using loops.",
  "Create a structure to store student info.",
  "Implement a basic calculator using switch.",
  "Matrix addition and multiplication.",
  "Find GCD and LCM of two numbers.",
  "Implement linear and binary search.",
  "Bubble sort and selection sort.",
  "Store and print data using array of structures.",
  "Check for Armstrong number.",
  "Use of dynamic memory allocation (malloc, calloc).",
  "Reverse an array in-place.",
  "Count frequency of elements in an array.",
  "Implement stack using arrays.",
  "Check whether a year is leap year.",
  "Use file I/O to write and read a text file.",
  "Copy contents of one file to another.",
  "Find length of a string without strlen().",
  "Pointer arithmetic and dereferencing.",
  "Use of typedef to define custom types.",
  "Bitwise operations examples.",
  "Pass arrays to functions.",
  "Implement a linked list.",
  "Write a program using union.",
  "Calculate power of number using loops."
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
const Cps = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🔧 C Programming Practice Problems</h1>
      <p className="text-gray-600 mb-8">
        Practice C language problems covering arrays, pointers, memory, and data structures.
      </p>
      <div className="space-y-4">
        {cProblems.map((problem, index) => (
          <ProblemCard key={index} text={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cps;