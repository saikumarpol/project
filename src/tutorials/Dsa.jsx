import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { FaPython, FaLaptopCode } from 'react-icons/fa';

const DSATutorial = () => {
  const [stackOutput, setStackOutput] = useState([]);

  // Initialize Mermaid for flowcharts
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  // Copy code to clipboard
  const copyCode = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy code:', err);
    });
  };

  // Simulate stack operations
  const pushToStack = () => {
    const newItem = Math.floor(Math.random() * 100);
    setStackOutput((prev) => [...prev, newItem]);
  };

  const popFromStack = () => {
    setStackOutput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Data Structures and Algorithms for Beginners
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly tutorial on Data Structures and Algorithms (DSA)! Think of DSA as organizing your toys (data structures) and finding the best way to tidy them up (algorithms). By the end, you’ll understand key concepts and code them in Python!
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What are Data Structures and Algorithms?</h2>
        <p className="mb-4">
          A <strong>data structure</strong> is like a box to store your data (e.g., a list or a tree). An <strong>algorithm</strong> is a recipe to solve a problem, like sorting your books. DSA helps you write faster, smarter programs.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic Python knowledge (e.g., loops, functions).</li>
          <li>
            Python installed (<a href="https://www.python.org/downloads/" className="text-blue-600 hover:underline">Download Python</a>).
          </li>
          <li>A text editor (e.g., VS Code).</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">How DSA Works</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Choose Data Structure];
              B --> C[Apply Algorithm];
              C --> D[Get Result];
              D --> E[End];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 1: Arrays
        </h2>
        <p className="mb-4">
          An <strong>array</strong> is like a row of lockers, each holding one item (e.g., numbers). You can quickly find items by their position (index).
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Find maximum in an array
def find_max(arr):
    return max(arr)

# Usage
lockers = [10, 5, 8, 12, 3]
print(find_max(lockers))  # Output: 12
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Find maximum in an array
def find_max(arr):
    return max(arr)

# Usage
lockers = [10, 5, 8, 12, 3]
print(find_max(lockers))  # Output: 12`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 2: Linked Lists
        </h2>
        <p className="mb-4">
          A <strong>linked list</strong> is like a train, where each carriage (node) holds data and points to the next one. It’s great for adding or removing items.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Simple Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

# Usage
train = LinkedList()
train.add(1)
train.add(2)
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Simple Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

# Usage
train = LinkedList()
train.add(1)
train.add(2)`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 3: Stacks
        </h2>
        <p className="mb-4">
          A <strong>stack</strong> is like a stack of plates: you add (push) and remove (pop) from the top. It follows Last-In-First-Out (LIFO).
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Stack
class Stack:
    def __init__(self):
        self.plates = []

    def push(self, item):
        self.plates.append(item)

    def pop(self):
        return self.plates.pop() if self.plates else None

# Usage
stack = Stack()
stack.push("Plate 1")
stack.push("Plate 2")
print(stack.pop())  # Output: Plate 2
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Stack
class Stack:
    def __init__(self):
        self.plates = []

    def push(self, item):
        self.plates.append(item)

    def pop(self):
        return self.plates.pop() if self.plates else None

# Usage
stack = Stack()
stack.push("Plate 1")
stack.push("Plate 2")
print(stack.pop())  # Output: Plate 2`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Stack Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Push Item];
              B --> C[Add to Top];
              C --> D[Pop Item];
              D --> E[Remove from Top];
              E --> F[Return Item];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 4: Queues
        </h2>
        <p className="mb-4">
          A <strong>queue</strong> is like a line at a ticket counter: first in, first out (FIFO). You add (enqueue) at the back and remove (dequeue) from the front.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Queue
class Queue:
    def __init__(self):
        self.line = []

    def enqueue(self, item):
        self.line.append(item)

    def dequeue(self):
        return self.line.pop(0) if self.line else None

# Usage
queue = Queue()
queue.enqueue("Person 1")
queue.enqueue("Person 2")
print(queue.dequeue())  # Output: Person 1
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Queue
class Queue:
    def __init__(self):
        self.line = []

    def enqueue(self, item):
        self.line.append(item)

    def dequeue(self):
        return self.line.pop(0) if self.line else None

# Usage
queue = Queue()
queue.enqueue("Person 1")
queue.enqueue("Person 2")
print(queue.dequeue())  # Output: Person 1`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 5: Binary Trees
        </h2>
        <p className="mb-4">
          A <strong>binary tree</strong> is like a family tree, where each person (node) has up to two children. It’s used for hierarchical data.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Binary Tree
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def add(self, data):
        if not self.root:
            self.root = Node(data)
        # Simplified: Adds to left or right
        elif not self.root.left:
            self.root.left = Node(data)
        else:
            self.root.right = Node(data)

# Usage
tree = BinaryTree()
tree.add(1)
tree.add(2)
tree.add(3)
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Binary Tree
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def add(self, data):
        if not self.root:
            self.root = Node(data)
        # Simplified: Adds to left or right
        elif not self.root.left:
            self.root.left = Node(data)
        else:
            self.root.right = Node(data)

# Usage
tree = BinaryTree()
tree.add(1)
tree.add(2)
tree.add(3)`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Tree Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Add Root];
              B --> C[Add Left Child];
              C --> D[Add Right Child];
              D --> E[End];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 6: Sorting Algorithms
        </h2>
        <p className="mb-4">
          Sorting is like arranging students by height. <strong>Bubble sort</strong> compares and swaps neighbors until everyone’s in order.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Bubble Sort
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Usage
heights = [5, 2, 8, 1, 9]
print(bubble_sort(heights))  # Output: [1, 2, 5, 8, 9]
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Bubble Sort
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Usage
heights = [5, 2, 8, 1, 9]
print(bubble_sort(heights))  # Output: [1, 2, 5, 8, 9]`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Bubble Sort Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Compare Neighbors];
              B --> C{Swap Needed?};
              C -->|Yes| D[Swap Elements];
              C -->|No| E[Next Pair];
              D --> E;
              E --> F[All Sorted?];
              F -->|No| B;
              F -->|Yes| G[End];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 7: Searching Algorithms
        </h2>
        <p className="mb-4">
          Searching is like finding a book in a library. <strong>Linear search</strong> checks each book one by one.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Usage
books = [3, 1, 4, 1, 5]
print(linear_search(books, 4))  # Output: 2
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Usage
books = [3, 1, 4, 1, 5]
print(linear_search(books, 4))  # Output: 2`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Linear Search Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Check Element];
              B --> C{Is Target?};
              C -->|Yes| D[Return Index];
              C -->|No| E[Next Element];
              E --> F[End of Array?];
              F -->|No| B;
              F -->|Yes| G[Return -1];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaPython className="mr-2 text-blue-600" /> Step 8: Hash Tables
        </h2>
        <p className="mb-4">
          A <strong>hash table</strong> is like a dictionary: you look up a word (key) to find its meaning (value). It’s super fast for finding data.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
# Example: Hash Table (using Python dictionary)
dictionary = {}

# Add key-value pairs
dictionary["apple"] = "fruit"
dictionary["carrot"] = "vegetable"

# Lookup
print(dictionary["apple"])  # Output: fruit
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`# Example: Hash Table (using Python dictionary)
dictionary = {}

# Add key-value pairs
dictionary["apple"] = "fruit"
dictionary["carrot"] = "vegetable"

# Lookup
print(dictionary["apple"])  # Output: fruit`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hash Table Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Input Key];
              B --> C[Hash Key];
              C --> D[Store/Lookup Value];
              D --> E[Return Value];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Interactive Example: Stack Simulation
        </h2>
        <p className="mb-4">Click to play with a stack (like stacking plates):</p>
        <div className="flex space-x-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={pushToStack}
          >
            Push to Stack
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={popFromStack}
          >
            Pop from Stack
          </button>
        </div>
        {stackOutput.length > 0 && (
          <div className="bg-white p-4 border border-gray-300 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">Stack Contents:</h3>
            <ul className="list-disc pl-5">
              {stackOutput.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Keep learning DSA with these ideas:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Try more data structures (e.g., graphs).</li>
          <li>Learn faster algorithms (e.g., quicksort).</li>
          <li>Practice on LeetCode or HackerRank.</li>
          <li>Build a small project, like a to-do list with DSA.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://www.geeksforgeeks.org/data-structures/" className="text-blue-600 hover:underline">GeeksforGeeks: Data Structures</a>
          </li>
          <li>
            <a href="https://www.programiz.com/dsa" className="text-blue-600 hover:underline">Programiz: DSA Tutorials</a>
          </li>
          <li>
            <a href="https://leetcode.com/" className="text-blue-600 hover:underline">LeetCode: Practice Problems</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DSATutorial;