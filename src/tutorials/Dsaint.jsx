import React, { useState } from "react";

const dsaQuestions = [
  {
    question: "1. What is Data Structure?",
    answer: `A data structure is a way of organizing and storing data so it can be accessed and modified efficiently.
Common types include arrays, linked lists, stacks, queues, trees, and graphs.
Choosing the right data structure improves algorithm performance and resource usage.`,
  },
  {
    question: "2. What is the difference between an array and a linked list?",
    answer: `- Arrays have fixed size and provide random access in O(1) time.
- Linked lists are dynamic in size and allow easy insertion/deletion, but take O(n) for access.
- Arrays use contiguous memory; linked lists use nodes with pointers.`,
  },
  {
    question: "3. What is a stack and how is it used?",
    answer: `A stack is a linear data structure that follows LIFO (Last In First Out).
It is used for expression evaluation, backtracking (e.g., DFS), and managing function calls.
Basic operations: push, pop, peek, isEmpty.`,
  },
  {
    question: "4. What is a queue and how is it used?",
    answer: `A queue is a linear data structure that follows FIFO (First In First Out).
It is used in scheduling tasks, buffering data, and BFS traversal.
Variants include circular queue, deque, and priority queue.`,
  },
  {
    question: "5. What is the difference between BFS and DFS?",
    answer: `- **BFS** uses a queue and explores neighbors level-by-level.
- **DFS** uses a stack (or recursion) and explores as far as possible before backtracking.
- BFS is good for shortest path; DFS for path existence or topological sort.`,
  },
  {
    question: "6. What is a hash table?",
    answer: `A hash table is a data structure that stores key-value pairs using a hash function to map keys to indices.
It provides average O(1) time complexity for search, insert, and delete operations.
Collisions are handled via chaining or open addressing.`,
  },
  {
    question: "7. What is a tree data structure?",
    answer: `A tree is a hierarchical data structure composed of nodes connected by edges.
Each node contains a value and references to its child nodes.
The topmost node is called root, and nodes without children are called leaves.`,
  },
  {
    question: "8. What is a binary tree?",
    answer: `A binary tree is a tree where each node has at most two children, referred to as left and right child.
Used in binary search trees, heap data structures, and Huffman coding.`,
  },
  {
    question: "9. What is a binary search tree (BST)?",
    answer: `A binary search tree is a binary tree where:
- Left subtree of a node contains only values less than the node's value.
- Right subtree contains only values greater than the node's value.
This allows fast searching, insertion, and deletion in O(log n) on average.`,
  },
  {
    question: "10. What is a heap?",
    answer: `A heap is a specialized tree-based data structure that satisfies the heap property:
- Max Heap: parent ≥ children
- Min Heap: parent ≤ children
Heaps are used to implement priority queues and in heap sort.`,
  },
  {
    question: "11. What is a graph?",
    answer: `A graph is a collection of vertices (nodes) and edges connecting them.
Graphs can be directed/undirected, weighted/unweighted.
Used in social networks, maps, network routing, etc.`,
  },
  {
    question: "12. What is the difference between linear and non-linear data structures?",
    answer: `- Linear: Elements arranged sequentially (e.g., arrays, linked lists, stacks, queues)
- Non-linear: Elements not arranged sequentially (e.g., trees, graphs)
Non-linear structures represent hierarchical or networked relationships.`,
  },
  {
    question: "13. What is a trie?",
    answer: `A trie (prefix tree) is a tree-like data structure used for efficient retrieval of keys in a dataset of strings.
Each node represents a character, and paths from root to leaf represent words.
Tries are used in autocomplete features and spell checkers.`,
  },
  {
    question: "14. What is a segment tree?",
    answer: `A segment tree is a binary tree used for efficient range queries (like sum, min, max over a range) and updates.
It supports both point and range updates in logarithmic time.`,
  },
  {
    question: "15. What is a disjoint set (Union-Find)?",
    answer: `Disjoint Set Union (DSU) is a data structure that keeps track of a partition of a set into disjoint subsets.
Supports find (determine which set an element belongs to) and union (merge two sets).
Used in Kruskal’s algorithm for MST.`,
  },
  {
    question: "16. What is a greedy algorithm?",
    answer: `A greedy algorithm makes locally optimal choices at each step with the hope of finding a global optimum.
Examples: Dijkstra's algorithm, Huffman coding, activity selection.
Not always correct but efficient when applicable.`,
  },
  {
    question: "17. What is dynamic programming?",
    answer: `Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.
It is used in optimization problems like knapsack, Fibonacci, LCS, and matrix chain multiplication.`,
  },
  {
    question: "18. What is memoization?",
    answer: `Memoization is an optimization technique used primarily to speed up recursive algorithms by storing results of expensive function calls and returning the cached result when the same inputs occur again.`,
  },
  {
    question: "19. What is tabulation in DP?",
    answer: `Tabulation is a bottom-up approach in dynamic programming where we solve smaller subproblems first and build up solutions to larger problems iteratively, usually using a table (array).`,
  },
  {
    question: "20. What is the difference between recursion and iteration?",
    answer: `- Recursion: Function calls itself until base case reached. Uses call stack.
- Iteration: Uses loops to repeat a block of code.
Recursion can be more intuitive but may cause stack overflow; iteration is generally faster.`,
  },
  {
    question: "21. What is time complexity?",
    answer: `Time complexity measures the amount of time an algorithm takes relative to input size.
Expressed using Big O notation, e.g., O(1), O(n), O(n log n), O(n²).`,
  },
  {
    question: "22. What is space complexity?",
    answer: `Space complexity measures the amount of memory used by an algorithm relative to input size.
Includes auxiliary space and input space.`,
  },
  {
    question: "23. What is Big O notation?",
    answer: `Big O notation describes the upper bound of the time or space complexity of an algorithm.
It helps compare efficiency across different algorithms. Example: O(n²) means time grows quadratically.`,
  },
  {
    question: "24. What is divide and conquer?",
    answer: `Divide and Conquer breaks a problem into smaller subproblems, solves them recursively, and combines their results.
Examples: Merge Sort, Quick Sort, Binary Search.`,
  },
  {
    question: "25. What is backtracking?",
    answer: `Backtracking is a brute-force algorithmic technique that tries out all possibilities and backtracks if a solution path doesn't lead to success.
Used in Sudoku solvers, N-Queens, and maze problems.`,
  },
  {
    question: "26. What is a sorting algorithm?",
    answer: `A sorting algorithm arranges elements in a specific order (ascending/descending).
Common types include Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, and Heap Sort.`,
  },
  {
    question: "27. What is bubble sort?",
    answer: `Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.
It has O(n²) time complexity and is rarely used in practice due to inefficiency.`,
  },
  {
    question: "28. What is merge sort?",
    answer: `Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts them recursively, and merges them.
It has O(n log n) time and O(n) space complexity.`,
  },
  {
    question: "29. What is quick sort?",
    answer: `Quick Sort selects a pivot and partitions the array around it so that smaller elements are on one side and larger on the other.
Average time complexity is O(n log n), worst-case O(n²).`,
  },
  {
    question: "30. What is binary search?",
    answer: `Binary Search finds the position of a target value in a sorted array by repeatedly dividing the search interval in half.
It runs in O(log n) time.`,
  },
  {
    question: "31. What is Kadane's Algorithm?",
    answer: `Kadane’s Algorithm finds the maximum subarray sum in a given array.
It works in O(n) time by maintaining a running sum and updating the maximum when needed.`,
  },
  {
    question: "32. What is sliding window technique?",
    answer: `Sliding window is used to find substrings/subarrays that meet certain conditions.
It involves maintaining a window (subarray) and moving it across the array while updating the result.`,
  },
  {
    question: "33. What is two-pointer technique?",
    answer: `Two-pointer technique uses two pointers to traverse arrays/linked lists simultaneously.
Used in problems like finding pairs with a given sum, detecting cycles, and merging sorted arrays.`,
  },
  {
    question: "34. What is a bitmask?",
    answer: `A bitmask is a sequence of bits used to represent a subset of a collection.
Bitwise operations manipulate individual bits to store and retrieve information compactly.`,
  },
  {
    question: "35. What is Floyd’s cycle detection algorithm?",
    answer: `Floyd’s cycle detection algorithm (tortoise and hare) detects cycles in a linked list using two pointers moving at different speeds.
If there is a cycle, the two pointers will eventually meet.`,
  },
  {
    question: "36. What is topological sort?",
    answer: `Topological sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u→v, u comes before v.
Used in task scheduling and dependency resolution.`,
  },
  {
    question: "37. What is Dijkstra's algorithm?",
    answer: `Dijkstra’s algorithm finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights.
Uses a priority queue to select next closest node.`,
  },
  {
    question: "38. What is Prim's algorithm?",
    answer: `Prim’s algorithm finds the minimum spanning tree (MST) of a connected, undirected graph.
Starts with a node and greedily adds the cheapest edge that connects to the growing MST.`,
  },
  {
    question: "39. What is Kruskal's algorithm?",
    answer: `Kruskal’s algorithm builds the MST by sorting all edges and adding the smallest edge that doesn’t form a cycle.
Uses Union-Find data structure to detect cycles.`,
  },
  {
    question: "40. What is the Bellman-Ford algorithm?",
    answer: `Bellman-Ford finds the shortest paths from a single source in a graph that may have negative weight edges.
Detects negative weight cycles and runs in O(V*E) time.`,
  },
  {
    question: "41. What is the Floyd-Warshall algorithm?",
    answer: `Floyd-Warshall computes shortest paths between all pairs of vertices in a graph.
Works for both positive and negative weights, but not for graphs with negative cycles.`,
  },
  {
    question: "42. What is a suffix array?",
    answer: `A suffix array is a sorted array of all suffixes of a string.
Used in pattern matching, text compression, and bioinformatics.`,
  },
  {
    question: "43. What is Rabin-Karp algorithm?",
    answer: `Rabin-Karp is a string matching algorithm that uses hashing to find patterns in text.
Efficient for multiple pattern searches.`,
  },
  {
    question: "44. What is the Boyer-Moore algorithm?",
    answer: `Boyer-Moore is a fast string searching algorithm that skips ahead using preprocessing of the pattern.
More efficient than naive search for large texts.`,
  },
  {
    question: "45. What is a Bloom Filter?",
    answer: `A Bloom Filter is a probabilistic data structure that tells whether an element is possibly in a set or definitely not in it.
Used in caching, databases, and spell checkers.`,
  },
  {
    question: "46. What is a Fenwick Tree (Binary Indexed Tree)?",
    answer: `A Fenwick Tree is used for efficient prefix sum queries and updates in O(log n) time.
Used in frequency counting and range query problems.`,
  },
  {
    question: "47. What is a suffix automaton?",
    answer: `A suffix automaton is a compact representation of all substrings of a string.
It's used in advanced string processing tasks like substring checking and counting distinct substrings.`,
  },
  {
    question: "48. What is the A* algorithm?",
    answer: `A* is a pathfinding algorithm that uses heuristics to guide search towards the goal.
Combines actual cost and estimated future cost to choose next move.`,
  },
  {
    question: "49. What is the Z Algorithm?",
    answer: `Z Algorithm preprocesses a string to create a Z-array where Z[i] is the length of the longest substring starting at i that matches the prefix of the string.
Used in pattern matching.`,
  },
  {
    question: "50. What is amortized analysis?",
    answer: `Amortized analysis determines the average cost per operation in the worst-case scenario over a sequence of operations.
Used in analyzing dynamic arrays, splay trees, and hash tables.`,
  },
];

const Dsaint = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   
      <div className="space-y-4">
        {dsaQuestions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 shadow hover:shadow-lg transition duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="text-left w-full font-semibold text-lg flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <pre className="mt-3 whitespace-pre-wrap text-black-700 text-sm">{item.answer}</pre>
            )}
          </div>
        ))}
      </div>
  
  );
};

export default Dsaint;
