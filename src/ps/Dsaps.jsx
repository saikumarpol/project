import React from 'react';
import { motion } from 'framer-motion';

const dsaProblems = [
  "Implement stack using array and linked list.",
  "Queue using arrays and dequeue.",
  "Check for balanced parentheses.",
  "Reverse a linked list.",
  "Detect cycle in linked list.",
  "Sort a linked list.",
  "Binary Search Tree implementation.",
  "Level order traversal of binary tree.",
  "Find height of binary tree.",
  "Convert sorted array to BST.",
  "Heap sort and operations.",
  "Dijkstra’s shortest path algorithm.",
  "Graph traversal: DFS and BFS.",
  "Topological sort.",
  "Implement disjoint set (Union-Find).",
  "Kadane’s algorithm for max subarray.",
  "Sliding window problems.",
  "Two pointer approach.",
  "Binary search in rotated sorted array.",
  "Quick sort and merge sort.",
  "Find kth largest element.",
  "LRU cache design.",
  "Longest increasing subsequence.",
  "Count inversions in array.",
  "Minimum spanning tree (Prim’s, Kruskal’s).",
  "Rat in a Maze problem.",
  "N-Queens problem.",
  "Longest common subsequence.",
  "Knapsack problem.",
  "Trie implementation and prefix search."
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

const Dsaps = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 DSA Practice Problems</h1>
      <p className="text-gray-600 mb-8">
        Master data structures and algorithms with these curated problems for placements and interviews.
      </p>
      <div className="space-y-4">
        {dsaProblems.map((problem, index) => (
          <ProblemCard key={index} text={problem} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dsaps;