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

const JavaTutorial = () => {
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
        Comprehensive Java Tutorial
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
        title="Introduction to Java"
        theory="Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is platform-independent due to its 'Write Once, Run Anywhere' (WORA) philosophy."
        code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      />

      <Section
        title="Basic Syntax and Variables"
        theory="Java variables must be declared with a specific data type before use. Common types include int, double, boolean, and String."
        code={`public class Variables {
    public static void main(String[] args) {
        int age = 25;
        String name = "Alice";
        double height = 5.6;
        boolean isStudent = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`}
      />

      <Section
        title="Data Types"
        theory="Java supports two categories of data types: Primitive (e.g., int, float, char) and Reference (e.g., String, Arrays, Objects). Primitive types store simple values, while reference types store memory addresses pointing to objects."
        mermaidCode={`
graph TD;
    A[Data Types] --> B[Primitive Types];
    A --> C[Reference Types];
    B --> D[int];
    B --> E[float];
    B --> F[char];
    B --> G[boolean];
    C --> H[String];
    C --> I[Array];
    C --> J[Object];
`}
        code={`public class DataTypesExample {
    public static void main(String[] args) {
        // Primitive Data Types
        int number = 10;
        double decimal = 3.14;
        char character = 'A';
        boolean flag = true;
        // Reference Data Types
        String text = "Hello, Java!";
        int[] numbers = {1, 2, 3, 4, 5};
        // Output
        System.out.println("Primitive Types:");
        System.out.println("Number: " + number);
        System.out.println("Decimal: " + decimal);
        System.out.println("Character: " + character);
        System.out.println("Boolean: " + flag);
        System.out.println("\\nReference Types:");
        System.out.println("Text: " + text);
        System.out.println("Numbers Array: " + Arrays.toString(numbers));
    }
}`}
      />

      <Section
        title="Control Flow"
        theory="Control flow statements (if, else, switch) allow decision-making in Java. Loops (for, while, do-while) enable repetitive execution."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Block];
    B -- False --> D[Skip Block];
    C --> E[End];
    D --> E;
`}
        code={`public class ControlFlow {
    public static void main(String[] args) {
        int x = 10;
        if (x > 5) {
            System.out.println("x is greater than 5");
        } else {
            System.out.println("x is less than or equal to 5");
        }
    }
}`}
      />

      <Section
        title="Loops"
        theory="Java provides for, while, and do-while loops for iteration. Loops are used to repeat a block of code multiple times."
        mermaidCode={`
graph TD;
    A[Start] --> B{Condition};
    B -- True --> C[Execute Loop Body];
    C --> D[Increment Counter];
    D --> B;
    B -- False --> E[End];
`}
        code={`public class Loops {
    public static void main(String[] args) {
        // For loop
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
        // While loop
        int count = 0;
        while (count < 5) {
            System.out.println("While Count: " + count);
            count++;
        }
    }
}`}
      />

      <Section
        title="Arrays"
        theory="Arrays store multiple values of the same type in a single variable. They are fixed in size once created."
        code={`public class ArraysExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("First number: " + numbers[0]);
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}`}
      />

      {/* INTERMEDIATE SECTION */}
      <h2 id="intermediate" className="text-2xl font-semibold mt-10 mb-4">
        Intermediate Level
      </h2>

      <Section
        title="Object-Oriented Programming (OOP) in Java"
        theory="Java is an object-oriented programming language, which means everything in Java is treated as an object. The main concepts include classes, objects, inheritance, polymorphism, encapsulation, and abstraction."
        mermaidCode={`
graph LR;
    A[Class] --> B[Object];
    B --> C[Method];
    C --> D[Constructor];
    B --> E[Inheritance];
    E --> F[Subclass];
    E --> G[SuperClass];
    G --> H[Method Overriding];
    F --> I[Polymorphism];
`}
        code={`class Person {
    String name;
    int age;
    // Constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // Method to display info
    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        p1.displayInfo();
    }
}`}
      />

      <Section
        title="Inheritance"
        theory="Inheritance allows a new class to inherit properties and methods from an existing class, promoting reusability."
        mermaidCode={`
graph TD;
    A[Base Class] --> B[Derived Class];
    B --> C[Inherits Properties];
    B --> D[Inherits Methods];
`}
        code={`class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}`}
      />

      <Section
        title="Polymorphism"
        theory="Polymorphism allows objects of different classes to be treated as objects of a common superclass, typically using method overriding or method overloading."
        mermaidCode={`
graph TD;
    A[Superclass] --> B[Subclass 1];
    A --> C[Subclass 2];
    B --> D[Override Method];
    C --> E[Override Method];
`}
        code={`class Shape {
    void draw() {
        System.out.println("Drawing shape");
    }
}
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing circle");
    }
    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw(); // Circle's draw method is called
    }
}`}
      />

      <Section
        title="Abstract Classes and Interfaces"
        theory="Abstract classes are classes that cannot be instantiated on their own. Interfaces define a contract that implementing classes must follow."
        code={`abstract class Animal {
    abstract void sound();
    void eat() {
        System.out.println("Eating");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
    public static void main(String[] args) {
        Animal dog = new Dog();
        dog.sound();
        dog.eat();
    }
}`}
      />

      {/* ADVANCED SECTION */}
      <h2 id="advanced" className="text-2xl font-semibold mt-10 mb-4">
        Advanced Level
      </h2>

      <Section
        title="Generics"
        theory="Generics provide type safety by allowing classes and methods to operate on any data type without casting."
        code={`class Box<T> {
    private T item;
    public void setItem(T item) {
        this.item = item;
    }
    public T getItem() {
        return item;
    }
}
public class GenericsExample {
    public static void main(String[] args) {
        Box<String> box = new Box<>();
        box.setItem("Hello");
        System.out.println(box.getItem());
    }
}`}
      />

      <Section
        title="Lambda Expressions"
        theory="Lambda expressions enable a clear and concise way to represent one-method interfaces using an expression."
        mermaidCode={`
graph TD;
    A[Lambda Expression] --> B[Single Abstract Method];
    B --> C[Functional Interface];
`}
        code={`import java.util.Arrays;
import java.util.List;
public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.forEach(name -> System.out.println(name)); // Lambda expression
    }
}`}
      />

      <Section
        title="Streams API"
        theory="Streams allow functional-style operations on collections of data, such as filtering, mapping, and reducing."
        mermaidCode={`
graph TD;
    A[Input Collection] --> B[Filter];
    B --> C[Map];
    C --> D[Reduce];
    D --> E[Output];
`}
        code={`import java.util.Arrays;
import java.util.List;
public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println); // Output: 2, 4
    }
}`}
      />

      <Section
        title="Concurrency and Multithreading"
        theory="Java provides concurrency support through threads, allowing multiple tasks to run concurrently for better performance."
        mermaidCode={`
graph TD;
    A[Main Thread] --> B[Create New Thread];
    B --> C[Start Thread];
    C --> D[Run Task];
    D --> E[Complete Task];
`}
        code={`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // Start a new thread
    }
}`}
      />

      <Section
        title="Design Patterns"
        theory="Design patterns are reusable solutions to common problems in software design. Examples include Singleton, Factory, and Observer patterns."
        code={`// Singleton Pattern Example
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

// Factory Pattern Example
interface Shape {
    void draw();
}
class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}
class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}
class ShapeFactory {
    public Shape getShape(String shapeType) {
        if (shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        }
        return null;
    }
}`}
      />

      <Section
        title="Spring Framework"
        theory="Spring is a popular framework for building enterprise-level Java applications. It simplifies dependency injection, AOP, and web development."
        code={`// Dependency Injection Example
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class AppConfig {
    @Bean
    public MyService myService() {
        return new MyServiceImpl();
    }
}

interface MyService {
    void performTask();
}

class MyServiceImpl implements MyService {
    public void performTask() {
        System.out.println("Task performed by MyService");
    }
}

public class SpringExample {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyService service = context.getBean(MyService.class);
        service.performTask();
    }
}`}
      />

      <Section
        title="Hibernate ORM"
        theory="Hibernate is an Object-Relational Mapping (ORM) tool that maps Java objects to database tables and vice versa."
        code={`// Hibernate Example
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

class Student {
    private int id;
    private String name;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

public class HibernateExample {
    public static void main(String[] args) {
        Session session = new Configuration().configure().buildSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Student student = new Student();
        student.setName("Alice");

        session.save(student);
        tx.commit();
        session.close();
    }
}`}
      />

      {/* Free Resources */}
      <h2 id="resources" className="text-2xl font-semibold mt-10 mb-4">
        Free Resources
      </h2>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="https://docs.oracle.com/javase/tutorial/"
            className="text-blue-600"
          >
            Oracle Java Docs
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/java/" className="text-blue-600">
            W3Schools Java Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java/" className="text-blue-600">
            GeeksforGeeks Java
          </a>
        </li>
        <li>
          <a
            href="https://www.javatpoint.com/java-tutorial"
            className="text-blue-600"
          >
            Javatpoint Java Tutorial
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

export default JavaTutorial;