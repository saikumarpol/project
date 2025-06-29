import React, { useState } from "react";

const javaQuestions = [
  {
    question: "1. What is Java?",
    answer: `Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). 
It follows the “Write Once, Run Anywhere” (WORA) principle, as Java code is compiled into platform-independent bytecode. 
Java is widely used in enterprise, web, mobile, and embedded systems development.`,
  },
  {
    question: "2. What are the features of Java?",
    answer: `Key features of Java include:
- Platform independence via JVM.
- Object-oriented, robust, and secure.
- Automatic memory management using garbage collection.`,
  },
  {
    question: "3. What is the JVM?",
    answer: `The Java Virtual Machine (JVM) is a part of the Java Runtime Environment (JRE) that runs Java bytecode. 
It abstracts the underlying operating system and hardware, enabling platform independence. 
JVM performs tasks like memory management, garbage collection, and security enforcement.`,
  },
  {
    question: "4. What is the difference between JDK, JRE, and JVM?",
    answer: `- **JDK (Java Development Kit)**: Tools + compiler + JRE for developing Java apps.
- **JRE (Java Runtime Environment)**: JVM + libraries required to run Java apps.
- **JVM**: The engine that runs compiled Java bytecode.`,
  },
  {
    question: "5. What is the difference between a class and an object in Java?",
    answer: `A class is a blueprint or template for creating objects. 
An object is an instance of a class and represents a real-world entity with state (fields) and behavior (methods). 
Multiple objects can be created from a single class.`,
  },
  {
    question: "6. What is OOP? How is it supported in Java?",
    answer: `OOP stands for Object-Oriented Programming. It is based on four pillars:
- **Encapsulation**
- **Abstraction**
- **Inheritance**
- **Polymorphism**
Java supports all these through classes, interfaces, access modifiers, method overloading/overriding, etc.`,
  },
  {
    question: "7. What is method overloading in Java?",
    answer: `Method overloading allows multiple methods in the same class to have the same name but different parameters (number, type, or order). 
It improves code readability and reusability. Return type does not affect overloading.`,
  },
  {
    question: "8. What is method overriding in Java?",
    answer: `Method overriding occurs when a subclass provides a specific implementation of a method already defined in its superclass. 
The method must have the same name, return type, and parameters. Used to achieve runtime polymorphism.`,
  },
  {
    question: "9. What is inheritance in Java?",
    answer: `Inheritance allows one class (child class) to inherit fields and methods from another class (parent class). 
It promotes code reuse and establishes hierarchical relationships between classes. 
Java supports single, multilevel, and hierarchical inheritance.`,
  },
  {
    question: "10. What is an interface in Java?",
    answer: `An interface is a reference type in Java that contains only constants and abstract methods. 
From Java 8 onward, it can also contain default and static methods. 
Interfaces are used to achieve abstraction and multiple inheritance.`,
  },
  {
    question: "11. What is an abstract class in Java?",
    answer: `An abstract class cannot be instantiated. It may contain abstract methods (without body) and concrete methods (with body). 
Abstract classes are used to provide a common definition of a base class that multiple derived classes can share.`,
  },
  {
    question: "12. What is the difference between abstract class and interface?",
    answer: `- Abstract class can have both abstract and non-abstract methods; interface (before Java 8) had only abstract methods.
- A class can implement multiple interfaces but extend only one abstract class.
- Interface supports multiple inheritance; abstract class does not.`,
  },
  {
    question: "13. What is encapsulation in Java?",
    answer: `Encapsulation binds data (variables) and code (methods) together and protects them from outside interference. 
Variables are made private and accessed/mutated via public getter and setter methods.`,
  },
  {
    question: "14. What is polymorphism in Java?",
    answer: `Polymorphism means "many forms". In Java, it allows objects to be treated as objects of their parent class. 
There are two types:
- Compile-time (method overloading)
- Runtime (method overriding)`,
  },
  {
    question: "15. What is constructor in Java?",
    answer: `A constructor is a special method used to initialize objects. 
It has the same name as the class and no return type. 
Java provides a default constructor if none is defined.`,
  },
  {
    question: "16. What is the 'this' keyword in Java?",
    answer: `'this' refers to the current object in a method or constructor. 
It is often used to differentiate between class attributes and parameters with the same name.`,
  },
  {
    question: "17. What is the 'super' keyword in Java?",
    answer: `'super' refers to the immediate parent class of the current class. 
It is used to call parent class constructors or access overridden methods.`,
  },
  {
    question: "18. What is garbage collection in Java?",
    answer: `Garbage collection (GC) is the automatic process of reclaiming memory occupied by unused objects. 
Developers don't need to manually delete objects; the JVM handles memory deallocation.`,
  },
  {
    question: "19. What is the difference between == and equals() in Java?",
    answer: `- == compares references (memory addresses).
- equals() compares content (values), especially for strings and other objects.`,
  },
  {
    question: "20. What is String Pool in Java?",
    answer: `String Pool is a special storage area in the heap memory where string literals are stored. 
When a new string literal is created, Java checks the pool first to avoid duplicates and optimize memory usage.`,
  },
  {
    question: "21. What is the difference between String, StringBuilder, and StringBuffer?",
    answer: `- **String**: Immutable.
- **StringBuilder**: Mutable and NOT thread-safe (faster).
- **StringBuffer**: Mutable and thread-safe (slower).`,
  },
  {
    question: "22. What is exception handling in Java?",
    answer: `Exception handling is done using try-catch-finally blocks. 
try holds risky code, catch handles exceptions, and finally executes cleanup code regardless of exceptions. 
Exceptions can be checked or unchecked.`,
  },
  {
    question: "23. What is the difference between checked and unchecked exceptions?",
    answer: `- Checked exceptions are checked at compile time (e.g., IOException).
- Unchecked exceptions are checked at runtime (e.g., NullPointerException, ArrayIndexOutOfBoundsException).`,
  },
  {
    question: "24. What is a final keyword in Java?",
    answer: `final can be applied to:
- Variables → value cannot change.
- Methods → cannot be overridden.
- Classes → cannot be inherited.`,
  },
  {
    question: "25. What is a package in Java?",
    answer: `A package groups related classes and interfaces for better organization and avoids naming conflicts. 
Packages can be built-in (like java.util) or user-defined.`,
  },
  {
    question: "26. What is a static keyword in Java?",
    answer: `static belongs to the class rather than any object. Static variables and methods can be accessed without creating an instance of the class.`,
  },
  {
    question: "27. What is the difference between static and instance methods?",
    answer: `- Static methods belong to the class and can’t access instance variables directly.
- Instance methods belong to an object and can access both static and instance members.`,
  },
  {
    question: "28. What is the main method in Java?",
    answer: `public static void main(String[] args) is the entry point of any Java application. 
It is called by the JVM when the program starts. It must be declared exactly as shown.`,
  },
  {
    question: "29. What is a thread in Java?",
    answer: `A thread is the smallest unit of execution within a process. Java supports multithreading, allowing concurrent execution of two or more parts of a program.`,
  },
  {
    question: "30. What is multithreading in Java?",
    answer: `Multithreading allows simultaneous execution of multiple threads to maximize CPU utilization. Threads can be created by extending Thread class or implementing Runnable.`,
  },
  {
    question: "31. What is synchronization in Java?",
    answer: `Synchronization ensures that only one thread accesses a resource at a time to prevent race conditions. 
It can be applied to methods or blocks using the synchronized keyword.`,
  },
  {
    question: "32. What is a deadlock in Java?",
    answer: `Deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by the other. 
It is a common problem in multithreaded applications.`,
  },
  {
    question: "33. What is the difference between ArrayList and LinkedList?",
    answer: `- **ArrayList**: Uses dynamic array internally, good for random access.
- **LinkedList**: Uses doubly linked list, good for frequent insertions/deletions.`,
  },
  {
    question: "34. What is the difference between HashMap and HashTable?",
    answer: `- **HashMap**: Not synchronized, allows null keys/values.
- **HashTable**: Synchronized, doesn’t allow null keys/values.`,
  },
  {
    question: "35. What is the Collection Framework in Java?",
    answer: `Java Collection Framework is a unified architecture for representing and manipulating collections. 
It includes interfaces like List, Set, Map, and classes like ArrayList, HashSet, HashMap.`,
  },
  {
    question: "36. What is the difference between List and Set?",
    answer: `- **List**: Ordered, allows duplicates.
- **Set**: Unordered, does not allow duplicates.`,
  },
  {
    question: "37. What is the difference between Iterator and ListIterator?",
    answer: `- **Iterator**: Can traverse forward only.
- **ListIterator**: Can traverse both forward and backward, and is only for lists.`,
  },
  {
    question: "38. What is the difference between Comparable and Comparator interfaces?",
    answer: `- **Comparable**: Defines natural ordering via compareTo().
- **Comparator**: Defines custom ordering via compare(), useful for sorting without modifying class.`,
  },
  {
    question: "39. What is autoboxing and unboxing in Java?",
    answer: `- Autoboxing: Automatic conversion of primitive types to corresponding wrapper classes.
- Unboxing: Conversion of wrapper classes back to primitives.`,
  },
  {
    question: "40. What is the use of the transient keyword in Java?",
    answer: `transient is used during serialization to indicate that a field should not be serialized. 
Its value will be set to default upon deserialization.`,
  },
  {
    question: "41. What is serialization in Java?",
    answer: `Serialization is the process of converting an object into a byte stream so it can be saved to a file or sent over a network. 
The class must implement Serializable interface.`,
  },
  {
    question: "42. What is the difference between throw and throws?",
    answer: `- **throw**: Used to explicitly throw an exception.
- **throws**: Declares exceptions that a method might throw.`,
  },
  {
    question: "43. What is a lambda expression in Java?",
    answer: `Lambda expressions allow functions to be passed as parameters. Introduced in Java 8, they simplify working with functional interfaces.`,
  },
  {
    question: "44. What is a stream API in Java?",
    answer: `Stream API (introduced in Java 8) allows processing of collections declaratively. 
It supports operations like filter, map, reduce, sorted, etc.`,
  },
  {
    question: "45. What is Optional class in Java?",
    answer: `Optional is a container object which may or may not contain a non-null value. 
Used to avoid NullPointerException in a clean way.`,
  },
  {
    question: "46. What is the difference between fail-fast and fail-safe iterators?",
    answer: `- **Fail-fast**: Throw ConcurrentModificationException if the collection is modified structurally during iteration (e.g., HashMap).
- **Fail-safe**: Work on a copy of the collection, so modifications do not affect iteration (e.g., ConcurrentHashMap).`,
  },
  {
    question: "47. What is the difference between shallow copy and deep copy?",
    answer: `- Shallow Copy: Copies object bit-by-bit. If object contains references, those are copied too (shared references).
- Deep Copy: Recursively copies referenced objects, ensuring original and copy are independent.`,
  },
  {
    question: "48. What is the difference between == and equals() in String class?",
    answer: `- == compares references.
- equals() compares actual content (characters).
Use equals() for comparing values of String objects.`,
  },
  {
    question: "49. What is the use of finalize() method in Java?",
    answer: `finalize() is called by garbage collector before reclaiming memory. 
It gives last chance to perform cleanup operations before object is destroyed.`,
  },
  {
    question: "50. What are access modifiers in Java?",
    answer: `Access modifiers control the visibility of classes, methods, and variables:
- **private**: Accessible only within the class.
- **default (no keyword)**: Accessible within package.
- **protected**: Within package and subclasses.
- **public**: Accessible everywhere.`,
  },
];

const Javaint = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  
    
      <div className="space-y-4">
        {javaQuestions.map((item, index) => (
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

export default Javaint;
