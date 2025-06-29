import React, { useEffect } from "react";

// Load Mermaid via CDN
const loadMermaid = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
  script.onload = () => {
    // Initialize Mermaid after it's loaded
    if (window.mermaid) {
      window.mermaid.initialize({ startOnLoad: false });
    }
  };
  document.body.appendChild(script);
};

const PythonTutorial = () => {
  useEffect(() => {
    // Load Mermaid script
    loadMermaid();

    // Reinitialize Mermaid after the component mounts
    const initializeMermaid = () => {
      if (window.mermaid) {
        window.mermaid.init();
      }
    };

    // Use a timeout to ensure Mermaid has time to load
    const timer = setTimeout(initializeMermaid, 500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Comprehensive Python Tutorial
      </h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Table of Contents</h2>
      <ul className="list-disc ml-6 text-blue-600">
        <li>
          <a href="#beginner">Beginner Level</a>
        </li>
        <li>
          <a href="#intermediate">Intermediate Level</a>
        </li>
        <li>
          <a href="#advanced">Advanced Level</a>
        </li>
        <li>
          <a href="#resources">Free Resources</a>
        </li>
      </ul>

      {/* BEGINNER SECTION */}
      <h2 id="beginner" className="text-2xl font-semibold mt-10 mb-4">
        Beginner Level
      </h2>

      <Section
        title="Introduction to Python"
        theory="Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability and allows developers to express concepts in fewer lines of code."
        code={`print("Hello, World!")`}
      />

      <Section
        title="Basic Syntax and Variables"
        theory="Variables are used to store data in memory. In Python, you don't need to declare the type of a variable explicitly; it is inferred automatically based on the value assigned."
        code={`x = 10\ny = "Hello"\nz = 3.14\nprint(x, y, z)`}
      />

      <Section
        title="Data Types"
        theory="Python supports various data types such as integers, floats, strings, booleans, lists, tuples, and dictionaries. Each type has specific operations that can be performed on it, such as arithmetic for numbers and concatenation for strings."
        mermaidCode={`
graph TD;
    A[Data Types] --> B[Numeric];
    A --> C[Sequence];
    A --> D[Mapping];
    A --> E[Boolean];
    B --> F[int];
    B --> G[float];
    C --> H[list];
    C --> I[tuple];
    C --> J[string];
    D --> K[dict];
    E --> L[bool];
`}
        code={`# Numeric Types
x = 10       # int
y = 3.14     # float

# Sequence Types
fruits = ["apple", "banana", "cherry"]  # list
coordinates = (10, 20)                  # tuple
greeting = "Hello, Python!"             # string

# Mapping Type
person = {"name": "Alice", "age": 25}   # dictionary

# Boolean Type
is_student = True                       # bool

print(x, y, fruits, coordinates, greeting, person, is_student)
`}
      />

      <Section
        title="Control Flow"
        theory="Control flow statements allow you to execute different blocks of code based on conditions. Python provides if, elif, and else for decision-making."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Block];
    B -- False --> D[Skip Block];
    C --> E[End];
    D --> E;
`}
        code={`x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")`}
      />

      <Section
        title="Loops"
        theory="Loops allow you to repeat a block of code multiple times. Python provides two main types of loops: for (used for iterating over sequences) and while (used for repeating until a condition is met)."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Loop Body];
    C --> D[Increment Counter];
    D --> B;
    B -- False --> E[End];
`}
        code={`# For loop
for i in range(5):
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`}
      />

      {/* INTERMEDIATE SECTION */}
      <h2 id="intermediate" className="text-2xl font-semibold mt-10 mb-4">
        Intermediate Level
      </h2>

      <Section
        title="Functions"
        theory="Functions are reusable blocks of code that perform a specific task. They help in organizing code and avoiding repetition. Functions are defined using the def keyword."
        code={`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`}
      />

      <Section
        title="Lists and Basic Data Structures"
        theory="Lists are ordered collections of items that can hold elements of different data types. They are mutable, meaning you can modify their contents after creation."
        code={`fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access first item
fruits.append("orange")  # Add an item`}
      />

      <Section
        title="Dictionaries"
        theory="Dictionaries are unordered collections of key-value pairs. They are useful for storing and retrieving data quickly using keys."
        code={`person = {"name": "Alice", "age": 25}
print(person["name"])`}
      />

      <Section
        title="Error Handling"
        theory="Errors and exceptions are common in programming. Python provides try and except blocks to handle runtime errors gracefully."
        code={`try:
    x = int(input("Enter a number: "))
    print(10 / x)
except ZeroDivisionError:
    print("Cannot divide by zero")`}
      />

      {/* ADVANCED SECTION */}
      <h2 id="advanced" className="text-2xl font-semibold mt-10 mb-4">
        Advanced Level
      </h2>

      <Section
        title="Object-Oriented Programming (OOP)"
        theory="OOP is a programming paradigm that organizes software design around objects, which are instances of classes. Classes define the structure and behavior of objects."
        mermaidCode={`
graph LR;
    A[Class] --> B[Object];
    B --> C[Attributes];
    B --> D[Methods];
    A --> E[Inheritance];
    E --> F[Subclass];
    E --> G[Superclass];
`}
        code={`class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says woof!")

dog = Dog("Buddy")
dog.bark()`}
      />

      <Section
        title="List Comprehensions"
        theory="List comprehensions provide a concise way to create lists. They are often faster and more readable than traditional loops."
        code={`squares = [x**2 for x in range(10)]
print(squares)`}
      />

      <Section
        title="Modules and Packages"
        theory="Modules are files containing Python code, while packages are directories containing multiple modules. They help organize code into reusable components."
        code={`import math
print(math.sqrt(16))  # Output: 4.0`}
      />

      <Section
        title="Decorators"
        theory="Decorators are functions that modify the behavior of other functions or methods. They are commonly used for logging, access control, and performance measurement."
        code={`def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()`}
      />

      <Section
        title="Generators"
        theory="Generators are a type of iterable, like lists or tuples. Unlike lists, they don't allow indexing but can be iterated through with for loops. They are created using functions and the yield statement."
        code={`def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)`}
      />

      <Section
        title="Lambda Functions"
        theory="Lambda functions are small anonymous functions defined with the lambda keyword. They are useful for short, throwaway functions."
        code={`add = lambda x, y: x + y
print(add(5, 3))  # Output: 8`}
      />

      <Section
        title="File Handling"
        theory="Python provides built-in functions to work with files. You can open, read, write, and close files using these functions."
        code={`with open("example.txt", "w") as file:
    file.write("Hello, File!")

with open("example.txt", "r") as file:
    print(file.read())`}
      />

      {/* Free Resources */}
      <h2 id="resources" className="text-2xl font-semibold mt-10 mb-4">
        Free Resources
      </h2>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="https://docs.python.org/3/tutorial/index.html"
            className="text-blue-600"
          >
            Official Python Documentation
          </a>
        </li>
        <li>
          <a href="https://realpython.com/" className="text-blue-600">
            Real Python
          </a>
        </li>
        <li>
          <a
            href="https://automatetheboringstuff.com/"
            className="text-blue-600"
          >
            Automate the Boring Stuff with Python
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/python/" className="text-blue-600">
            W3Schools Python Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/news/python-tutorials-for-beginners/"
            className="text-blue-600"
          >
            freeCodeCamp Python Tutorials
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/learn/python" className="text-blue-600">
            Kaggle Python Course
          </a>
        </li>
      </ul>
    </div>
  );
};

const Section = ({ title, theory, mermaidCode, code }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
    {mermaidCode && (
      <Flowchart title={`${title} Flowchart`} mermaidCode={mermaidCode} />
    )}
    <p className="mt-2 mb-2">
      <strong>Theory:</strong> {theory}
    </p>
    {code && (
      <pre className="bg-gray-200 p-4 rounded overflow-auto">
        <code>{code}</code>
      </pre>
    )}
  </div>
);

const Flowchart = ({ title, mermaidCode }) => {
  useEffect(() => {
    // Reinitialize Mermaid for dynamically added charts
    if (window.mermaid) {
      window.mermaid.init();
    }
  }, []);

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="overflow-auto">
        <div className="mermaid">{mermaidCode}</div>
      </div>
    </div>
  );
};

export default PythonTutorial;