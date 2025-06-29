import React, { useEffect } from "react";

// Load Mermaid via CDN
const loadMermaid = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
  script.onload = () => {
    if (window.mermaid) {
      window.mermaid.initialize({ startOnLoad: false });
    }
  };
  document.body.appendChild(script);
};

const CppTutorial = () => {
  useEffect(() => {
    loadMermaid();
    const initializeMermaid = () => {
      if (window.mermaid) {
        window.mermaid.init();
      }
    };
    const timer = setTimeout(initializeMermaid, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Comprehensive C++ Tutorial
      </h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Table of Contents</h2>
      <ul className="list-disc ml-6 text-blue-600">
        <li><a href="#beginner">Beginner Level</a></li>
        <li><a href="#intermediate">Intermediate Level</a></li>
        <li><a href="#advanced">Advanced Level</a></li>
        <li><a href="#resources">Free Resources</a></li>
      </ul>

      {/* BEGINNER SECTION */}
      <h2 id="beginner" className="text-2xl font-semibold mt-10 mb-4">
        Beginner Level
      </h2>

      <Section
        title="Introduction to C++"
        theory="C++ is a powerful, general-purpose programming language created by Bjarne Stroustrup as an extension of C. It supports both procedural and object-oriented programming."
        code={'#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}'}
      />

      <Section
        title="Basic Syntax and Variables"
        theory="C++ variables must be declared with a type. Common types include int, double, char, and string."
        code={'#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int age = 25;\n    string name = "Alice";\n    double height = 5.6;\n    cout << "Name: " << name << endl;\n    cout << "Age: " << age << endl;\n    cout << "Height: " << height << endl;\n    return 0;\n}'}
      />

      <Section
        title="Data Types"
        theory="C++ supports primitive types (int, double, char) and derived types (arrays, pointers, references, classes)."
        mermaidCode={`
graph TD;
    A[Data Types] --> B[Primitive Types];
    A --> C[Derived Types];
    B --> D[int];
    B --> E[double];
    B --> F[char];
    B --> G[bool];
    C --> H[Array];
    C --> I[Pointer];
    C --> J[Reference];
    C --> K[Class];
`}
        code={'#include <iostream>\nusing namespace std;\nint main() {\n    int num = 10;\n    double pi = 3.14;\n    char letter = \'A\';\n    bool flag = true;\n    cout << "Int: " << num << endl;\n    cout << "Double: " << pi << endl;\n    cout << "Char: " << letter << endl;\n    cout << "Bool: " << flag << endl;\n    return 0;\n}'}
      />

      <Section
        title="Control Flow"
        theory="C++ provides if-else, switch, and ternary operators for decision-making."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Block];
    B -- False --> D[Skip Block];
    C --> E[End];
    D --> E;
`}
        code={'#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    if (x > 5) {\n        cout << "x is greater than 5" << endl;\n    } else {\n        cout << "x is less than or equal to 5" << endl;\n    }\n    return 0;\n}'}
      />

      <Section
        title="Loops"
        theory="C++ supports for, while, and do-while loops for iteration."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Loop Body];
    C --> D[Increment Counter];
    D --> B;
    B -- False --> E[End];
`}
        code={'#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << "Count: " << i << endl;\n    }\n    int count = 0;\n    while (count < 5) {\n        cout << "While Count: " << count << endl;\n        count++;\n    }\n    return 0;\n}'}
      />

      <Section
        title="Arrays"
        theory="Arrays in C++ store multiple elements of the same type in contiguous memory."
        code={'#include <iostream>\nusing namespace std;\nint main() {\n    int numbers[5] = {1, 2, 3, 4, 5};\n    cout << "First number: " << numbers[0] << endl;\n    for (int num : numbers) {\n        cout << num << endl;\n    }\n    return 0;\n}'}
      />

      {/* INTERMEDIATE SECTION */}
      <h2 id="intermediate" className="text-2xl font-semibold mt-10 mb-4">
        Intermediate Level
      </h2>

      <Section
        title="Object-Oriented Programming (OOP)"
        theory="C++ supports OOP with classes, objects, inheritance, polymorphism, and encapsulation."
        mermaidCode={`
graph LR;
    A[Class] --> B[Object];
    B --> C[Method];
    C --> D[Constructor];
    B --> E[Inheritance];
    E --> F[Subclass];
    E --> G[Superclass];
    G --> H[Method Overriding];
    F --> I[Polymorphism];
`}
        code={'#include <iostream>\nusing namespace std;\nclass Person {\npublic:\n    string name;\n    int age;\n    Person(string n, int a) : name(n), age(a) {}\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\nint main() {\n    Person p("Alice", 25);\n    p.display();\n    return 0;\n}'}
      />

      <Section
        title="Inheritance"
        theory="Inheritance allows a derived class to inherit properties and methods from a base clan."
        mermaidCode={`
graph TD;
    A[Base Class] --> B[Derived Class];
    B --> C[Inherits Properties];
    B --> D[Inherits Methods];
`}
        code={'#include <iostream>\nusing namespace std;\nclass Animal {\npublic:\n    virtual void sound() {\n        cout << "Some sound" << endl;\n    }\n};\nclass Dog : public Animal {\npublic:\n    void sound() override {\n        cout << "Bark" << endl;\n    }\n};\nint main() {\n    Dog dog;\n    dog.sound();\n    return 0;\n}'}
      />

      <Section
        title="Polymorphism"
        theory="Polymorphism allows objects of different classes to be treated as objects of a common base class."
        mermaidCode={`
graph TD;
    A[Base Class] --> B[Derived Class 1];
    A --> C[Derived Class 2];
    B --> D[Override Method];
    C --> E[Override Method];
`}
        code={'#include <iostream>\nusing namespace std;\nclass Shape {\npublic:\n    virtual void draw() {\n        cout << "Drawing shape" << endl;\n    }\n};\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n};\nint main() {\n    Shape* shape = new Circle();\n    shape->draw();\n    delete shape;\n    return 0;\n}'}
      />

      <Section
        title="Templates"
        theory="Templates enable generic programming by allowing functions and classes to work with any data type."
        code={'#include <iostream>\nusing namespace std;\ntemplate <typename T>\nT add(T a, T b) {\n    return a + b;\n}\nint main() {\n    cout << "Int sum: " << add(5, 3) << endl;\n    cout << "Double sum: " << add(5.5, 3.3) << endl;\n    return 0;\n}'}
      />

      {/* ADVANCED SECTION */}
      <h2 id="advanced" className="text-2xl font-semibold mt-10 mb-4">
        Advanced Level
      </h2>

      <Section
        title="STL (Standard Template Library)"
        theory="The STL provides containers (vector, list, map), algorithms (sort, find), and iterators for efficient data handling."
        code={'#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    vector<int> vec = {5, 2, 9, 1};\n    sort(vec.begin(), vec.end());\n    for (int num : vec) {\n        cout << num << " ";\n    }\n    return 0;\n}'}
      />

      <Section
        title="Smart Pointers"
        theory="Smart pointers (unique_ptr, shared_ptr) manage memory automatically to prevent leaks."
        code={'#include <iostream>\n#include <memory>\nusing namespace std;\nclass Test {\npublic:\n    void display() { cout << "Test object" << endl; }\n};\nint main() {\n    unique_ptr<Test> ptr = make_unique<Test>();\n    ptr->display();\n    return 0;\n}'}
      />

      <Section
        title="Multithreading"
        theory="C++11 introduced threading support for concurrent programming."
        code={'#include <iostream>\n#include <thread>\nusing namespace std;\nvoid threadFunc() {\n    cout << "Thread is running" << endl;\n}\nint main() {\n    thread t(threadFunc);\n    t.join();\n    return 0;\n}'}
      />

      <Section
        title="Lambda Expressions"
        theory="Lambda expressions provide a concise way to define anonymous functions."
        code={'#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    for_each(numbers.begin(), numbers.end(), [](int n) {\n        cout << n << endl;\n    });\n    return 0;\n}'}
      />

      <Section
        title="Design Patterns"
        theory="C++ supports design patterns like Singleton, Factory, and Observer for scalable software design."
        code={'#include <iostream>\nusing namespace std;\n// Singleton Pattern\nclass Singleton {\nprivate:\n    static Singleton* instance;\n    Singleton() {}\npublic:\n    static Singleton* getInstance() {\n        if (!instance) instance = new Singleton();\n        return instance;\n    }\n    void display() { cout << "Singleton instance" << endl; }\n};\nSingleton* Singleton::instance = nullptr;\n// Factory Pattern\nclass Shape {\npublic:\n    virtual void draw() = 0;\n};\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "Drawing Circle" << endl; }\n};\nclass ShapeFactory {\npublic:\n    Shape* getShape() { return new Circle(); }\n};\nint main() {\n    Singleton::getInstance()->display();\n    ShapeFactory factory;\n    Shape* shape = factory.getShape();\n    shape->draw();\n    delete shape;\n    return 0;\n}'}
      />

      {/* Free Resources */}
      <h2 id="resources" className="text-2xl font-semibold mt-10 mb-4">
        Free Resources
      </h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.cplusplus.com/doc/tutorial/" className="text-blue-600">
            CPlusPlus.com Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/c-plus-plus/" className="text-blue-600">
            GeeksforGeeks C++ Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.learncpp.com/" className="text-blue-600">
            LearnCpp.com
          </a>
        </li>
        <li>
          <a href="https://www.tutorialspoint.com/cplusplus/" className="text-blue-600">
            TutorialsPoint C++ Tutorial
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
      <Flowchart
        title={`${title} Flowchart`}
        mermaidCode={mermaidCode}
      />
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

export default CppTutorial;