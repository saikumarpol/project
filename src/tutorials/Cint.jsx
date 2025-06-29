import React, { useState } from 'react';

const cQuestions = [
{
    question: "1. What is C language?",
    answer: `C is a high-level, general-purpose, procedural programming language developed by Dennis Ritchie in 1972 at Bell Labs. 
It was designed to develop system software like operating systems and compilers. C combines the features of low-level and high-level languages, 
making it suitable for system-level programming (like OS kernels) and application-level programming. It's known for its speed, portability, 
and ability to access hardware directly.`,
  },
  {
    question: "2. What are the features of C language?",
    answer: `Key features of C include:
- **Simplicity**: Easy to understand and use.
- **Portability**: Code written in C can run on different machines with minimal modifications.
- **Mid-level Language**: It supports both high-level and low-level programming.
- **Rich Library**: Provides built-in functions for performing various operations.
- **Modularity**: Code can be broken into modules using functions.
- **Dynamic Memory Management**: Using malloc(), calloc(), etc.
- **Pointers**: Allows direct memory access and manipulation.`,
  },
  {
    question: "3. What is the difference between C and C++?",
    answer: `The key differences are:
- **Paradigm**: C is procedural; C++ supports both procedural and object-oriented programming.
- **OOP Support**: C++ supports classes, objects, inheritance, polymorphism, and abstraction; C does not.
- **Function Overloading**: Available in C++, not in C.
- **Encapsulation**: Supported in C++ through access specifiers (private, public).
- **Standard Library**: C++ has STL (Standard Template Library) for data structures and algorithms.`,
  },
  {
    question: "4. What is a variable in C?",
    answer: `A variable in C is a named location in memory that stores a value of a particular data type. 
Each variable must be declared with a data type before use. Variables allow programmers to store and manipulate data during program execution.
For example: \`int age = 25;\` declares a variable 'age' of type int and assigns it a value of 25.`,
  },
  {
    question: "5. What are the data types in C?",
    answer: `C data types are classified as:
- **Basic types**: int, char, float, double
- **Derived types**: array, pointer, structure, union
- **Enumeration**: enum (for symbolic constants)
- **Void**: Represents absence of value, used in functions that return nothing.

Example:
\`char grade = 'A';\`
\`float price = 99.99;\``,
  },

  {
    question: "6. What is a pointer in C?",
    answer: `A pointer in C is a variable that stores the memory address of another variable. 
Pointers allow direct memory access and manipulation, which makes them powerful for tasks like dynamic memory allocation, arrays, strings, and function arguments. 
Example: 
\`int *ptr;\`
\`int num = 10;\`
\`ptr = &num;\``,
  },
  {
    question: "7. What is the difference between an array and a pointer?",
    answer: `- An array represents a fixed-size block of contiguous memory.
- A pointer is a variable that holds the address of another variable.
- Arrays cannot be reassigned; pointers can point to different memory locations.
- Array name gives the base address, but it's not a variable.`,
  },
  {
    question: "8. What is a structure in C?",
    answer: `A structure in C is a user-defined data type that groups together variables of different data types under one name. 
It allows you to store related information as a single unit. 
Example:
\`struct student {\`
\`    char name[20];\`
\`    int age;\`
\`};\``,
  },
  {
    question: "9. What are macros in C?",
    answer: `Macros are preprocessor directives defined using #define. They are used to define constants or functions-like code snippets that are replaced by their values before compilation.
Example:
\`#define PI 3.14159\`
\`#define SQUARE(x) ((x)*(x))\``,
  },
  {
    question: "10. What is the use of 'void' in C?",
    answer: `'void' in C specifies no value or absence of type. It has several uses:
- Function return type: \`void func()\` means function returns nothing.
- Function parameters: \`void func(void)\` means function takes no arguments.
- Void pointers: Pointers that can hold any type’s address (\`void *ptr;\`).`,
  },
  {
    question: "11. What is recursion in C?",
    answer: `Recursion is a process where a function calls itself directly or indirectly. 
It must have a base condition to prevent infinite recursion. 
Example:
\`int factorial(int n) {\`
\`    if(n == 0) return 1;\`
\`    return n * factorial(n - 1);\`
\`}\``,
  },
  {
    question: "12. What is the difference between call by value and call by reference?",
    answer: `- Call by Value: Copies actual value into function parameters. Changes inside the function do not affect original value.
- Call by Reference: Passes address of the variable. Changes made inside function reflect on the original value.`,
  },
  {
    question: "13. What is a union in C?",
    answer: `A union is similar to a structure but shares memory among its members. Only one member can hold value at a time. 
Unions save memory when only one field is needed at a time.
Example:
\`union Data {\`
\`    int i;\`
\`    float f;\`
\`    char str[20];\`
\`};\``,
  },
  {
    question: "14. What is a header file in C?",
    answer: `Header files contain function declarations, macro definitions, and other necessary components that can be included in multiple source files. 
They usually have .h extension. Example: \n\`#include <stdio.h>\` includes standard input/output functions.`,
  },
  {
    question: "15. What is the purpose of 'static' keyword in C?",
    answer: `'static' restricts scope and extends lifetime:
- Static variables retain value even after function exits.
- Static functions are visible only within the file they are declared.
- Static variables inside a function preserve their value across function calls.`,
  },
  {
    question: "16. What is a NULL pointer in C?",
    answer: `A NULL pointer is a pointer that doesn't point to any valid memory location. It is defined in several standard libraries like stdio.h and stddef.h. 
Used to indicate that the pointer is not currently pointing to anything. Example: \n\`int *ptr = NULL;\``,
  },
  {
    question: "17. What is the difference between malloc() and calloc()?",
    answer: `- malloc(): Allocates a single block of memory and does not initialize it.
- calloc(): Allocates multiple blocks of memory and initializes all bytes to zero.
Example: 
\`int *arr1 = (int*)malloc(5 * sizeof(int));\`
\`int *arr2 = (int*)calloc(5, sizeof(int));\``,
  },
  {
    question: "18. What is a dangling pointer?",
    answer: `A dangling pointer points to a memory location that has been freed or deleted. Accessing such a pointer leads to undefined behavior. 
This commonly occurs when returning a pointer to local variable from a function.`,
  },
  {
    question: "19. What is the difference between printf() and sprintf()?",
    answer: `- printf(): Prints formatted output to the console.
- sprintf(): Writes formatted output to a character buffer instead of stdout.
Example: 
\`char buffer[50];\`
\`sprintf(buffer, "Value = %d", 10);\``,
  },
  {
    question: "20. What is the difference between ‘=’ and ‘==’ operators?",
    answer: `- '=' is the assignment operator used to assign value.
- '==' is the equality operator used to compare two values.
Example:
\`if(a == 10)\` checks if a is 10.
\`a = 10;\` assigns 10 to a.`,
  },
  {
    question: "21. What is a token in C?",
    answer: `Tokens are the smallest individual units recognized by the C compiler. They include:
- Keywords (e.g., int, while)
- Identifiers (e.g., variable names)
- Constants (e.g., 10, 'A')
- String literals (e.g., "Hello")
- Operators (e.g., +, -)
- Separators (e.g., commas, semicolons)`,
  },
  {
    question: "22. What is the purpose of the 'extern' storage class specifier?",
    answer: `'extern' tells the compiler that a variable or function exists somewhere else in the program. 
It is used to declare global variables or functions defined in another file.
Example: 
\`extern int count;\``,
  },
  {
    question: "23. What is a typedef in C?",
    answer: `typedef is used to create an alias for an existing data type. 
It improves readability and simplifies complex declarations.
Example:
\`typedef struct {\`
\`    int x;\`
\`    int y;\`
\`} Point;\`
Now Point can be used to declare variables of this struct type.`,
  },
  {
    question: "24. What is the difference between ++i and i++?",
    answer: `- ++i (pre-increment): Increments i before using its value.
- i++ (post-increment): Uses current value of i then increments it.
Example:
\`int a = 5;\`
\`int b = ++a;\` // b = 6, a = 6
\`int c = a++;\` // c = 6, a = 7`,
  },
  {
    question: "25. What is the use of the 'goto' statement in C?",
    answer: `'goto' is used to transfer control unconditionally to a labeled statement in the same function. 
Although it can make code less readable and harder to debug, it may be useful in breaking out of deeply nested loops.`,
  },
  {
    question: "26. What is the size of int, char, and float in C?",
    answer: `The size depends on the system architecture:
- int: Usually 4 bytes (32-bit systems might have 2 bytes)
- char: Always 1 byte
- float: 4 bytes
You can check with sizeof():
\`printf("Size of int: %zu\\n", sizeof(int));\``,
  },
  {
    question: "27. What is the difference between 'break' and 'continue' statements?",
    answer: `- break: Exits the loop immediately.
- continue: Skips the rest of the current iteration and starts the next one.
Both are used in loops (for, while, do-while).`,
  },
  {
    question: "28. What is the role of the main() function in C?",
    answer: `main() is the entry point of every C program. Execution begins from here. 
It can optionally take command-line arguments:
\`int main(int argc, char *argv[])\``,
  },
  {
    question: "29. What is a string in C?",
    answer: `A string in C is an array of characters terminated by a null character '\\0'. 
Strings are handled using functions from string.h like strcpy(), strlen(), etc.
Example:
\`char str[] = "Hello";\``,
  },
  {
    question: "30. What is the difference between const char* p and char* const p?",
    answer: `- const char *p: Pointer to constant character (can't change the value pointed to).
- char *const p: Constant pointer to a character (can't change the address stored).
Example:
\`const char *p = "hello";\`
\`char *const p = "world";\``,
  },
  {
    question: "31. What is a function prototype in C?",
    answer: `A function prototype declares the function name, return type, and parameter types before the function is defined. 
It helps the compiler verify function calls correctly.
Example:
\`int add(int a, int b);\``,
  },
  {
    question: "32. What is the difference between a declaration and a definition in C?",
    answer: `- Declaration: Announces the existence of a variable or function.
- Definition: Provides the actual implementation or memory allocation.
Example:
Declaration: extern int x;
Definition: int x = 10;`,
  },
  {
    question: "33. What is a segmentation fault in C?",
    answer: `A segmentation fault occurs when a program tries to access a memory location it is not allowed to access. 
Common causes include dereferencing NULL pointers or accessing freed memory.`,
  },
  {
    question: "34. What is the difference between lvalue and rvalue in C?",
    answer: `- lvalue: Refers to an object that occupies some identifiable location in memory (can appear on left side of assignment).
- rvalue: Represents a value that cannot be assigned to (appears on right side).
Example:
\`int a = 10;\` // a is lvalue, 10 is rvalue`,
  },
  {
    question: "35. What is a bit field in C?",
    answer: `Bit fields allow packing of data in a structure to optimize memory usage. 
Each field is specified with a number of bits.
Example:
\`struct {\`
\`    unsigned int flag : 1;\`
\`} status;\``,
  },
  {
    question: "36. What is the difference between exit() and _exit()?",
    answer: `- exit(): Flushes stdio buffers and calls cleanup handlers.
- _exit(): Terminates the process immediately without cleanup.
_exit() is called by exit().`,
  },
  {
    question: "37. What is the difference between logical AND (&&) and bitwise AND (&)?",
    answer: `- &&: Logical AND, evaluates boolean expressions.
- &: Bitwise AND, operates on binary representations of numbers.
Example:
\`if(a > 0 && b > 0)\` // logical
\`int c = a & b;\` // bitwise`,
  },
  {
    question: "38. What is a wild pointer?",
    answer: `A wild pointer is a pointer that hasn't been initialized. It points to a random memory location and using it leads to undefined behavior. 
Always initialize pointers to NULL or a valid address.`,
  },
  {
    question: "39. What is a far pointer?",
    answer: `In older versions of C (like Turbo C), a far pointer could access memory outside the current segment. 
It was used in real-mode programming to handle larger memory addresses. This concept is obsolete in modern compilers.`,
  },
  {
    question: "40. What is the purpose of the register storage class?",
    answer: `register suggests the compiler to store the variable in CPU registers instead of RAM for faster access. 
However, modern compilers ignore this hint and optimize automatically. Example:
\`register int i;\``,
  },
  {
    question: "41. What is a near pointer?",
    answer: `Near pointer is a legacy concept from 16-bit architectures. It could only access 64KB of data. 
Modern systems don’t use near/far pointers anymore.`,
  },
  {
    question: "42. What is a self-referential structure?",
    answer: `A structure that contains a pointer to itself. Used in implementing linked lists, trees, graphs, etc.
Example:
\`struct Node {\`
\`    int data;\`
\`    struct Node *next;\`
\`};\``,
  },
  {
    question: "43. What is the difference between 'far' and 'near' pointers?",
    answer: `These were used in segmented memory models:
- Near pointers: Could access only 64KB segment.
- Far pointers: Could access full 1MB memory by storing segment and offset.
Modern systems use flat memory model; these concepts are outdated.`,
  },
  {
    question: "44. What is the difference between a function and a macro?",
    answer: `- Function: Compiled once, called at runtime.
- Macro: Replaced by preprocessor before compilation.
Macro avoids function call overhead but may lead to increased code size.`,
  },
  {
    question: "45. What is the difference between 'scanf()' and 'gets()' functions?",
    answer: `- scanf(): Reads input until whitespace, newline, or EOF.
- gets(): Reads entire line including spaces until newline.
gets() is unsafe and deprecated due to lack of bounds checking.`,
  },
  {
    question: "46. What is the difference between 'strcpy()' and 'memcpy()'?",
    answer: `- strcpy(): Copies null-terminated strings.
- memcpy(): Copies fixed number of bytes from source to destination.
Use memcpy() for copying non-string binary data.`,
  },
  {
    question: "47. What is the difference between 'exit()' and 'return' in main()?",
    answer: `- exit(): Terminates the program immediately from anywhere.
- return: Exits main() normally, returning control to OS.
Both effectively end the program, but return is preferred in main.`,
  },
  {
    question: "48. What is the difference between 'const' and 'volatile' qualifiers?",
    answer: `- const: Indicates the value should not be changed by the program.
- volatile: Tells compiler the value can change unexpectedly (e.g., hardware registers).
Both can be combined: const volatile int x;`,
  },
  {
    question: "49. What is the difference between 'sizeof()' and 'strlen()'?",
    answer: `- sizeof(): Returns total allocated size of array/variable in bytes.
- strlen(): Counts characters in a string until '\\0'.
Example:
\`char arr[10] = "Hi";\`
\`sizeof(arr)\` → 10
\`strlen(arr)\` → 2`,
  },
  {
    question: "50. What is a memory leak in C?",
    answer: `A memory leak occurs when dynamically allocated memory is not freed properly, causing gradual loss of available memory. 
It can lead to performance issues or crashes over time.
Prevent using proper free() calls after malloc/calloc.`,
  },
];

const Cint = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   
      <div className="space-y-4">
        {cQuestions.map((item, index) => (
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

export default Cint;
