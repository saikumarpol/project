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

const CTutorial = () => {
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
        Comprehensive C Tutorial
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
        title="Introduction to C"
        theory="C is a general-purpose, procedural programming language developed by Dennis Ritchie in 1972. It is widely used for system programming, embedded systems, and operating systems like Unix."
        code={`#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
      />

      <Section
        title="Basic Syntax and Variables"
        theory="C variables must be declared with a specific data type (e.g., int, float, char) before use. Variables store data in memory."
        code={`#include <stdio.h>
int main() {
    int age = 25;
    char name[] = "Alice";
    float height = 5.6;
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    return 0;
}`}
      />

      <Section
        title="Data Types"
        theory="C supports primitive data types like int, float, double, char, and derived types like arrays, pointers, and structures."
        mermaidCode={`
graph TD;
    A[Data Types] --> B[Primitive Types];
    A --> C[Derived Types];
    B --> D[int];
    B --> E[float];
    B --> F[char];
    B --> G[double];
    C --> H[Array];
    C --> I[Pointer];
    C --> J[Structure];
`}
        code={`#include <stdio.h>
int main() {
    int num = 10;
    float pi = 3.14;
    char letter = 'A';
    int arr[3] = {1, 2, 3};
    printf("Integer: %d\\n", num);
    printf("Float: %.2f\\n", pi);
    printf("Character: %c\\n", letter);
    printf("Array first element: %d\\n", arr[0]);
    return 0;
}`}
      />

      <Section
        title="Control Flow"
        theory="C provides if-else, switch, and ternary operators for decision-making."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Block];
    B -- False --> D[Skip Block];
    C --> E[End];
    D --> E;
`}
        code={`#include <stdio.h>
int main() {
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\\n");
    } else {
        printf("x is less than or equal to 5\\n");
    }
    return 0;
}`}
      />

      <Section
        title="Loops"
        theory="C supports for, while, and do-while loops for iterative execution."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Loop Body];
    C --> D[Increment Counter];
    D --> B;
    B -- False --> E[End];
`}
        code={`#include <stdio.h>
int main() {
    for (int i = 0; i < 5; i++) {
        printf("Count: %d\\n", i);
    }
    int count = 0;
    while (count < 5) {
        printf("While Count: %d\\n", count);
        count++;
    }
    return 0;
}`}
      />

      <Section
        title="Arrays"
        theory="Arrays in C store multiple elements of the same type in contiguous memory locations."
        code={`#include <stdio.h>
int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    printf("First number: %d\\n", numbers[0]);
    for (int i = 0; i < 5; i++) {
        printf("%d\\n", numbers[i]);
    }
    return 0;
}`}
      />

      {/* INTERMEDIATE SECTION */}
      <h2 id="intermediate" className="text-2xl font-semibold mt-10 mb-4">
        Intermediate Level
      </h2>

      <Section
        title="Pointers"
        theory="Pointers store memory addresses of variables. They are crucial for dynamic memory management and passing data by reference."
        mermaidCode={`
graph TD;
    A[Variable] --> B[Memory Address];
    B --> C[Pointer];
    C --> D[Dereference];
`}
        code={`#include <stdio.h>
int main() {
    int x = 10;
    int *ptr = &x;
    printf("Value of x: %d\\n", x);
    printf("Address of x: %p\\n", (void*)&x);
    printf("Value via pointer: %d\\n", *ptr);
    return 0;
}`}
      />

      <Section
        title="Functions"
        theory="Functions in C allow modular programming by encapsulating reusable code blocks."
        code={`#include <stdio.h>
int add(int a, int b) {
    return a + b;
}
int main() {
    int sum = add(5, 3);
    printf("Sum: %d\\n", sum);
    return 0;
}`}
      />

      <Section
        title="Structures"
        theory="Structures group related data of different types into a single unit."
        code={`#include <stdio.h>
struct Person {
    char name[50];
    int age;
};
int main() {
    struct Person person = {"Alice", 25};
    printf("Name: %s, Age: %d\\n", person.name, person.age);
    return 0;
}`}
      />

      <Section
        title="Dynamic Memory Allocation"
        theory="C allows dynamic memory allocation using malloc, calloc, realloc, and free for flexible memory management."
        code={`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *arr = (int*)malloc(5 * sizeof(int));
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    for (int i = 0; i < 5; i++) {
        printf("%d\\n", arr[i]);
    }
    free(arr);
    return 0;
}`}
      />

      {/* ADVANCED SECTION */}
      <h2 id="advanced" className="text-2xl font-semibold mt-10 mb-4">
        Advanced Level
      </h2>

      <Section
        title="File Handling"
        theory="C supports file operations to read from and write to files using FILE pointers."
        code={`#include <stdio.h>
int main() {
    FILE *file = fopen("example.txt", "w");
    if (file != NULL) {
        fprintf(file, "Hello, C!\\n");
        fclose(file);
    }
    file = fopen("example.txt", "r");
    if (file != NULL) {
        char buffer[100];
        fgets(buffer, 100, file);
        printf("%s", buffer);
        fclose(file);
    }
    return 0;
}`}
      />

      <Section
        title="Multithreading"
        theory="C supports multithreading using libraries like pthread for concurrent execution."
        code={`#include <stdio.h>
#include <pthread.h>
void* threadFunc(void* arg) {
    printf("Thread is running\\n");
    return NULL;
}
int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, threadFunc, NULL);
    pthread_join(thread, NULL);
    return 0;
}`}
      />

      <Section
        title="Preprocessor Directives"
        theory="Preprocessor directives like #define, #include, and #ifdef control code compilation."
        code={`#include <stdio.h>
#define PI 3.14
int main() {
    printf("Value of PI: %.2f\\n", PI);
    return 0;
}`}
      />

      <Section
        title="Bit Manipulation"
        theory="Bit manipulation involves operations like AND, OR, XOR, and bit shifting for low-level programming."
        code={`#include <stdio.h>
int main() {
    int a = 5;  // 0101
    int b = 3;  // 0011
    printf("AND: %d\\n", a & b); // 0001
    printf("OR: %d\\n", a | b);  // 0111
    printf("XOR: %d\\n", a ^ b); // 0110
    printf("Left Shift: %d\\n", a << 1); // 1010
    return 0;
}`}
      />

      {/* Free Resources */}
      <h2 id="resources" className="text-2xl font-semibold mt-10 mb-4">
        Free Resources
      </h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="https://www.tutorialspoint.com/cprogramming/" className="text-blue-600">
            TutorialsPoint C Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/c-programming-language/" className="text-blue-600">
            GeeksforGeeks C Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.learn-c.org/" className="text-blue-600">
            Learn-C.org
          </a>
        </li>
        <li>
          <a href="https://www.cprogramming.com/" className="text-blue-600">
            CProgramming.com
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

export default CTutorial;