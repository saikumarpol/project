import React, { useState } from "react";

const cppQuestions = [
  {
    question: "1. What is C++?",
    answer: `C++ is an object-oriented programming language developed by Bjarne Stroustrup in 1985. 
It extends the C language by adding features like classes, inheritance, polymorphism, and templates. 
It supports both procedural and object-oriented paradigms, making it versatile for many applications.`,
  },
  {
    question: "2. What are the key features of C++?",
    answer: `Key features include:
- Object-oriented programming (OOP) support.
- Strong type checking, function overloading, and templates.
- Low-level memory manipulation using pointers.`,
  },
  {
    question: "3. What is the difference between C and C++?",
    answer: `C is a procedural language, while C++ supports both procedural and object-oriented programming. 
C++ introduces classes, objects, and additional features like inheritance and polymorphism. 
C++ code can be more modular and reusable than C.`,
  },
  {
    question: "4. What is a class in C++?",
    answer: `A class is a user-defined data type that acts as a blueprint for creating objects. 
It encapsulates data and methods that operate on that data. 
Classes promote modular and reusable code by following object-oriented principles.`,
  },
  {
    question: "5. What is an object in C++?",
    answer: `An object is an instance of a class. 
It holds its own copy of class attributes and can access the class methods. 
Objects are the building blocks of object-oriented programming in C++.`,
  },
  {
    question: "6. What is encapsulation in C++?",
    answer: `Encapsulation is the bundling of data and functions into a single unit called a class. 
It restricts direct access to some components and prevents accidental modification of data. 
This is achieved using access specifiers like private, protected, and public.`,
  },
  {
    question: "7. What is abstraction in C++?",
    answer: `Abstraction means showing only essential details to the user and hiding complex implementation. 
In C++, it's implemented using classes and access modifiers. Users interact with public methods without knowing internal logic.`,
  },
  {
    question: "8. What is inheritance in C++?",
    answer: `Inheritance allows a class (derived class) to inherit properties and behaviors from another class (base class). 
It promotes code reusability and hierarchical classification.`,
  },
  {
    question: "9. What is polymorphism in C++?",
    answer: `Polymorphism means "many forms". It allows objects to be treated as objects of their parent class rather than their actual class. 
It enables method overriding and function overloading, allowing different implementations based on context.`,
  },
  {
    question: "10. What is function overloading in C++?",
    answer: `Function overloading allows multiple functions to have the same name but different parameters. 
The compiler selects the appropriate function based on the number, types, and order of arguments passed during the call.`,
  },
  {
    question: "11. What is operator overloading in C++?",
    answer: `Operator overloading allows existing operators (like +, -, ==) to be redefined so they work with user-defined types (like objects).
Example: Overloading '+' to add two objects of a custom class.`,
  },
  {
    question: "12. What is a constructor in C++?",
    answer: `A constructor is a special member function of a class that initializes objects of its class. 
It has the same name as the class and no return type. It is automatically called when an object is created.`,
  },
  {
    question: "13. What is a destructor in C++?",
    answer: `A destructor is a special member function used to destroy objects when they go out of scope or are explicitly deleted. 
It releases resources allocated by the object. It is denoted by ~ followed by the class name.`,
  },
  {
    question: "14. What is a copy constructor in C++?",
    answer: `A copy constructor creates a new object as a copy of an existing object. 
It takes a reference to an object of the same class as a parameter. 
If not defined, the compiler provides a default copy constructor.`,
  },
  {
    question: "15. What is a default constructor in C++?",
    answer: `A default constructor is a constructor that either has no parameters or all parameters have default values. 
It is called when no arguments are provided during object creation.`,
  },
  {
    question: "16. What is a friend function in C++?",
    answer: `A friend function is not a member of a class but can access its private and protected members. 
It is declared inside the class using the 'friend' keyword.`,
  },
  {
    question: "17. What is a namespace in C++?",
    answer: `Namespaces are used to organize code into logical groups and prevent name conflicts. 
They allow the same name to be used in different namespaces without collision.
Example: \`namespace MyNamespace { int x; }\``,
  },
  {
    question: "18. What is the 'this' pointer in C++?",
    answer: `'this' is a pointer available within any non-static member function of a class that points to the object through which the function was called. 
It is useful for returning the current object or resolving variable name conflicts.`,
  },
  {
    question: "19. What is a static member in C++?",
    answer: `A static member belongs to the class itself rather than any specific object. 
Static variables are shared among all instances of the class, and static functions can only access static members.`,
  },
  {
    question: "20. What is a template in C++?",
    answer: `Templates support generic programming by allowing functions and classes to operate with generic types. 
They enable writing a single function or class that works with different data types.
Example: STL containers like vector and map use templates.`,
  },
  {
    question: "21. What is the Standard Template Library (STL)?",
    answer: `The STL is a library of container classes, algorithms, and iterators. 
It includes common data structures like vectors, lists, maps, sets, and queues, along with sorting and searching algorithms.`,
  },
  {
    question: "22. What is a virtual function in C++?",
    answer: `A virtual function is a member function in a base class that is expected to be overridden in derived classes. 
It enables runtime polymorphism by allowing a base class pointer/reference to call derived class implementation.`,
  },
  {
    question: "23. What is a pure virtual function in C++?",
    answer: `A pure virtual function is a virtual function that has no implementation in the base class. 
It makes the class abstract and forces derived classes to provide an implementation.
Declared as: \`= 0;\``,
  },
  {
    question: "24. What is an abstract class in C++?",
    answer: `An abstract class is a class that contains at least one pure virtual function. 
It cannot be instantiated directly and is meant to serve as a base class for other classes.`,
  },
  {
    question: "25. What is an interface in C++?",
    answer: `C++ does not have a built-in interface keyword. Instead, interfaces are implemented using abstract classes containing only pure virtual functions and no data members.`,
  },
  {
    question: "26. What is function overriding in C++?",
    answer: `Function overriding occurs when a derived class defines a function with the same name, return type, and parameters as a function in its base class. 
This allows derived classes to change behavior inherited from the base class.`,
  },
  {
    question: "27. What is a reference variable in C++?",
    answer: `A reference variable is an alias for an already existing variable. 
It must be initialized when declared and cannot be changed to refer to another variable afterward.
Example: \`int &ref = x;\``,
  },
  {
    question: "28. What is move semantics in C++?",
    answer: `Move semantics allow transferring ownership of resources (like dynamically allocated memory) from one object to another without copying. 
It is implemented using rvalue references (\`T&&\`) and move constructors/move assignment operators.`,
  },
  {
    question: "29. What is RAII in C++?",
    answer: `RAII stands for Resource Acquisition Is Initialization. 
It is a C++ programming technique where resource management (like memory allocation, file handles) is tied to object lifetime. 
Resources are acquired in the constructor and released in the destructor.`,
  },
  {
    question: "30. What is the difference between shallow copy and deep copy?",
    answer: `- Shallow Copy: Copies object bit-by-bit. If the object contains pointers, both copies point to the same memory.
- Deep Copy: Duplicates pointed-to data so each object has its own separate copy.`,
  },
  {
    question: "31. What is a smart pointer in C++?",
    answer: `Smart pointers are objects that act like pointers but manage the memory automatically. 
Examples: unique_ptr, shared_ptr, weak_ptr. They help prevent memory leaks by automatically deallocating memory when no longer needed.`,
  },
  {
    question: "32. What is the difference between unique_ptr and shared_ptr?",
    answer: `- unique_ptr: Owns the object exclusively. Cannot be copied, only moved.
- shared_ptr: Allows multiple pointers to share ownership of the same object. Uses reference counting.`,
  },
  {
    question: "33. What is a lambda expression in C++?",
    answer: `A lambda expression is an anonymous function that can be defined inline. 
It's often used for short snippets of code passed to algorithms or asynchronous functions.
Example: \n\`auto sum = [](int a, int b) { return a + b; };\``,
  },
  {
    question: "34. What is the difference between pass by value and pass by reference in C++?",
    answer: `- Pass by Value: A copy of the variable is passed to the function. Changes made inside the function do not affect the original.
- Pass by Reference: The actual variable is passed. Changes inside the function reflect outside.`,
  },
  {
    question: "35. What is the 'mutable' keyword in C++?",
    answer: `The 'mutable' keyword allows a member variable of a class to be modified even if the object is declared as const. 
Useful for caching or counters in const methods.`,
  },
  {
    question: "36. What is a destructor in C++?",
    answer: `A destructor is a special member function used to destroy objects when they go out of scope or are explicitly deleted. 
It releases resources allocated by the object. It is denoted by ~ followed by the class name.`,
  },
  {
    question: "37. What is a virtual destructor in C++?",
    answer: `A virtual destructor ensures that the correct destructor is called when deleting an object through a base class pointer. 
Always make destructors virtual in base classes if deletion through a base pointer is expected.`,
  },
  {
    question: "38. What is a namespace alias in C++?",
    answer: `A namespace alias gives a shorter alternative name to a long or nested namespace. 
Example: 
\`namespace myns = mycompany::myproject::utilities;\``,
  },
  {
    question: "39. What is the 'explicit' keyword in C++?",
    answer: `The 'explicit' keyword is used with constructors to prevent implicit conversions. 
It ensures that the constructor can only be called explicitly.`,
  },
  {
    question: "40. What is the 'override' keyword in C++?",
    answer: `'override' is used to indicate that a function in a derived class is intended to override a virtual function in the base class. 
It helps catch errors at compile time if the signature doesn't match.`,
  },
  {
    question: "41. What is the 'final' keyword in C++?",
    answer: `'final' prevents a class from being inherited or a virtual function from being overridden. 
Used for security and design control.`,
  },
  {
    question: "42. What is a container in C++ STL?",
    answer: `Containers are data structures that store collections of objects. 
Examples include vector, list, deque, set, map, unordered_map, etc. Each has different performance characteristics.`,
  },
  {
    question: "43. What is the difference between vector and list in C++?",
    answer: `- vector: Dynamic array; supports fast random access.
- list: Doubly linked list; efficient insertions/deletions anywhere.`,
  },
  {
    question: "44. What is the difference between map and unordered_map in C++?",
    answer: `- map: Ordered associative container implemented as a balanced BST. Elements are sorted.
- unordered_map: Hash table-based container. Faster average lookup but elements are not ordered.`,
  },
  {
    question: "45. What is an iterator in C++?",
    answer: `An iterator is an object that enables traversal of containers like arrays, vectors, lists, etc. 
It generalizes the concept of a pointer and provides uniform access to elements.`,
  },
  {
    question: "46. What is the difference between prefix and postfix increment operators in C++?",
    answer: `- ++i (prefix): Increments then returns the new value.
- i++ (postfix): Returns current value then increments.
Postfix usually incurs a slight overhead because it needs to save the old value.`,
  },
  {
    question: "47. What is the difference between 'new/delete' and 'malloc/free' in C++?",
    answer: `- new/delete are C++ operators. new calls constructor, delete calls destructor.
- malloc/free are C functions. They don’t call constructors or destructors.`,
  },
  {
    question: "48. What is a memory leak in C++?",
    answer: `A memory leak occurs when dynamically allocated memory (using new or malloc) is not properly deallocated (using delete or free), leading to wasted memory. 
Smart pointers help prevent such leaks.`,
  },
  {
    question: "49. What is exception handling in C++?",
    answer: `Exception handling allows handling runtime errors gracefully using try, catch, and throw keywords. 
Code that may cause an error is placed in try block, and exceptions are caught in catch block.`,
  },
  {
    question: "50. What is the difference between 'const' and 'constexpr' in C++?",
    answer: `- const: Runtime constant. Value known at runtime.
- constexpr: Compile-time constant. Evaluated at compile time.
constexpr ensures optimization and safety for constants used in contexts like array sizes.`,
  },
];

const Cppint = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   
      <div className="space-y-4">
        {cppQuestions.map((item, index) => (
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
              <pre className="mt-3 whitespace-pre-wrap text-white-700 text-sm">{item.answer}</pre>
            )}
          </div>
        ))}
      </div>

  );
};

export default Cppint;
