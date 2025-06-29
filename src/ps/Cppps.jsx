import React from 'react';
import { motion } from 'framer-motion';

const cppProblems = [
  "Reverse a string using STL.",
  "Check for palindrome using class.",
  "Demonstrate inheritance and polymorphism.",
  "Use vectors and maps.",
  "Create a class for bank account.",
  "Demonstrate operator overloading.",
  "Use of constructors and destructors.",
  "Function overloading and overriding.",
  "Use file streams to read/write files.",
  "Fibonacci using class and recursion.",
  "Implement stack using STL.",
  "Binary search using recursion.",
  "Demonstrate exception handling.",
  "Implement linked list class.",
  "Sort array using STL sort().",
  "Create template class.",
  "Use of static members.",
  "Count number of objects created.",
  "Check prime number using OOP.",
  "Create student class and display result.",
  "Demonstrate friend function.",
  "Operator overloading with complex numbers.",
  "Create base and derived classes.",
  "Multilevel and multiple inheritance.",
  "Virtual base class and virtual functions.",
  "Demonstrate this pointer.",
  "Use of namespaces.",
  "Create library management class.",
  "Overload << and >> operators.",
  "Write constructor initializer list."
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

const Cppps = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">💻 C++ Programming Practice</h1>
      <p className="text-gray-600 mb-8">
        C++ problems covering OOP, STL, file handling, and advanced features.
      </p>
      <div className="space-y-4">
        {cppProblems.map((problem, index) => (
          <ProblemCard key={index} text={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cppps;