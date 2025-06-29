// src/components/PythonInterviewQuestions.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const PythonInterviewQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: 'What Is Python?', a: 'Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility, supporting multiple paradigms like OOP and functional programming.' },
    { q: 'What Are Python\'s Key Features?', a: 'Python features include simplicity, dynamic typing, extensive standard library, cross-platform compatibility, and support for object-oriented, procedural, and functional programming.' },
    { q: 'What Are Python\'s Data Types?', a: 'Python’s data types include integers, floats, strings, booleans, lists, tuples, dictionaries, sets, and NoneType, with mutable (e.g., lists) and immutable (e.g., tuples) types.' },
    { q: 'Explain The Difference Between List And Tuple.', a: 'Lists are mutable, allowing modifications like adding or removing elements, while tuples are immutable, meaning their contents cannot be changed after creation.' },
    { q: 'What Is PEP 8?', a: 'PEP 8 is Python’s style guide, providing conventions for writing readable code, such as indentation, naming, and maximum line length.' },
    { q: 'How Is Memory Managed In Python?', a: 'Python uses automatic memory management with a private heap, reference counting for garbage collection, and a cyclic garbage collector for handling reference cycles.' },
    { q: 'What Is The Difference Between Is And ==?', a: '`is` checks for identity (same memory location), while `==` checks for equality (same value), e.g., `[1,2] == [1,2]` is True, but `is` is False.' },
    { q: 'What Are Python Literals?', a: 'Literals are raw data values in code, such as numbers (e.g., `42`, `3.14`), strings (e.g., `"hello"`), booleans (e.g., `True`), and `None`.' },
    { q: 'What Is Type Casting In Python?', a: 'Type casting converts a value from one data type to another, e.g., `int("123")` converts a string to an integer or `float(5)` to a float.' },
    { q: 'What Are *args And **kwargs?', a: '`*args` collects positional arguments as a tuple, and `**kwargs` collects keyword arguments as a dictionary, allowing flexible function parameter handling.' },
    { q: 'What Are Python\'s Conditional Statements?', a: 'Python’s conditional statements are `if`, `elif`, and `else`, used to execute code blocks based on boolean conditions.' },
    { q: 'Difference Between For And While Loop?', a: 'A `for` loop iterates over a sequence (e.g., list, range), while a `while` loop runs as long as a condition is True.' },
    { q: 'What Is The Use Of Break, Continue, And Pass?', a: '`break` exits a loop, `continue` skips to the next iteration, and `pass` is a no-op placeholder for empty code blocks.' },
    { q: 'Can We Use An Else Block With Loops?', a: 'Yes, an `else` block with a loop executes when the loop completes normally (without `break`), e.g., after a `for` or `while` loop.' },
    { q: 'What Is List Comprehension?', a: 'List comprehension is a concise way to create lists, e.g., `[x*2 for x in range(5)]` produces `[0, 2, 4, 6, 8]`.' },
    { q: 'What Is A Ternary Operator?', a: 'A ternary operator is a one-line conditional expression, e.g., `x = a if condition else b`, assigning `a` or `b` based on the condition.' },
    { q: 'How Does Range() Work In Python?', a: '`range(start, stop, step)` generates a sequence of numbers from `start` to `stop-1` with a `step` increment, e.g., `range(0, 5)` yields 0, 1, 2, 3, 4.' },
    { q: 'What Is A Generator Expression?', a: 'A generator expression creates a generator object for lazy evaluation, e.g., `(x*2 for x in range(5))`, yielding values one at a time.' },
    { q: 'What Is The Difference Between Iterator And Iterable?', a: 'An iterable is an object that can be looped over (e.g., list), while an iterator is an object with `__next__()` to fetch the next value.' },
    { q: 'Explain Map(), Filter(), And Reduce().', a: '`map()` applies a function to each item in an iterable, `filter()` selects items based on a function’s boolean result, and `reduce()` (from `functools`) combines items via a function.' },
    { q: 'What Is The Difference Between A Function And A Method?', a: 'A function is a standalone procedure, while a method is a function defined within a class, bound to an object, and called with `self`.' },
    { q: 'How Do You Create A Function In Python?', a: 'Define a function using `def function_name(parameters):`, e.g., `def add(a, b): return a + b`.' },
    { q: 'What Is Recursion?', a: 'Recursion is when a function calls itself to solve a problem, e.g., calculating factorial with `def factorial(n): return n * factorial(n-1)`.' },
    { q: 'What Is A Lambda Function?', a: 'A lambda function is an anonymous, one-line function defined with `lambda arguments: expression`, e.g., `lambda x: x*2`.' },
    { q: 'What Is The Difference Between Local And Global Variables?', a: 'Local variables are defined within a function and scoped to it, while global variables are defined outside and accessible everywhere unless shadowed.' },
    { q: 'What Is The Use Of The Global Keyword?', a: 'The `global` keyword allows modifying a global variable inside a function, e.g., `global x; x = 10`.' },
    { q: 'What Is A Decorator?', a: 'A decorator is a function that wraps another function to extend its behavior, defined with `@decorator_name`, e.g., for logging or timing.' },
    { q: 'What Are Closures In Python?', a: 'A closure is a nested function that retains access to variables from its enclosing scope, even after the outer function has finished executing.' },
    { q: 'What Is A Docstring?', a: 'A docstring is a string literal (often triple-quoted) placed under a function, class, or module to document its purpose, e.g., `"""This function does X."""`.' },
    { q: 'How Is The Scope Of A Variable Defined?', a: 'Python uses LEGB (Local, Enclosing, Global, Built-in) scope rules to determine where a variable is accessible, resolved in that order.' },
    { q: 'What Is OOP?', a: 'Object-Oriented Programming (OOP) is a paradigm based on objects and classes, emphasizing modularity, encapsulation, inheritance, and polymorphism.' },
    { q: 'How Is OOP Implemented In Python?', a: 'Python implements OOP with classes, objects, methods, inheritance, polymorphism, encapsulation, and abstraction, using `class` and `self`.' },
    { q: 'What Are Classes And Objects?', a: 'A class is a blueprint for creating objects (instances), which are specific entities with attributes and methods defined by the class.' },
    { q: 'What Is Self In Python?', a: '`self` refers to the instance of a class in a method, allowing access to its attributes and methods, e.g., `self.name`.' },
    { q: 'What Is __init__()?', a: '`__init__()` is a special method (constructor) called when an object is created, used to initialize instance attributes, e.g., `def __init__(self, name): self.name = name`.' },
    { q: 'What Is Inheritance?', a: 'Inheritance allows a class (child) to inherit attributes and methods from another class (parent), promoting code reuse, e.g., `class Dog(Animal):`.' },
    { q: 'What Is Polymorphism?', a: 'Polymorphism allows different classes to share the same method name with different implementations, e.g., `bark()` in `Dog` and `Cat` classes.' },
    { q: 'What Are Classmethods And Staticmethods?', a: '`@classmethod` operates on the class itself (uses `cls`), while `@staticmethod` is a utility function not tied to class or instance state.' },
    { q: 'What Is Encapsulation?', a: 'Encapsulation restricts access to an object’s internal state, using private attributes (e.g., `_name` or `__name`) and public methods.' },
    { q: 'What Is Abstraction In Python?', a: 'Abstraction hides complex implementation details, exposing only essential features, often achieved with abstract base classes (ABC) from the `abc` module.' },
    { q: 'What Are Modules And Packages In Python?', a: 'A module is a single `.py` file containing code, while a package is a directory of modules with an `__init__.py` file.' },
    { q: 'How Do You Import A Module?', a: 'Import a module using `import module_name`, e.g., `import math`, or specific items with `from module_name import item`.' },
    { q: 'What Is __name__ == "__main__"?', a: 'It checks if a module is run directly (`__name__` is `"__main__"`) or imported, allowing conditional execution of code.' },
    { q: 'How To Create A Custom Module?', a: 'Create a `.py` file with functions, classes, or variables, save it, and import it in another file using `import my_module`.' },
    { q: 'What Is The Python Standard Library?', a: 'The Python Standard Library is a collection of built-in modules (e.g., `math`, `os`, `datetime`) providing reusable functionality.' },
    { q: 'How Do You Install External Packages?', a: 'Install external packages using `pip install package_name`, e.g., `pip install requests`, typically in a virtual environment.' },
    { q: 'What Is Pip?', a: 'Pip is Python’s package installer, used to install, upgrade, or remove packages from PyPI, e.g., `pip install numpy`.' },
    { q: 'Difference Between Import And From-Import?', a: '`import module` imports the entire module, while `from module import item` imports specific items, reducing namespace clutter.' },
    { q: 'How To Handle Module Not Found Error?', a: 'Handle `ModuleNotFoundError` with `try-except`, ensure the module is installed (`pip install`), or check the file path for custom modules.' },
    { q: 'How Do You Reload A Module In Python?', a: 'Reload a module using `importlib.reload(module_name)` after importing `importlib`, useful for development changes.' },
    { q: 'What Is An Exception?', a: 'An exception is an event that disrupts program execution, like `ZeroDivisionError`, caught to prevent crashes.' },
    { q: 'What Are Try-Except Blocks?', a: '`try-except` blocks handle exceptions, executing code in `try` and catching errors in `except`, e.g., `try: x/0 except ZeroDivisionError: pass`.' },
    { q: 'What Is Finally Used For?', a: '`finally` runs code after `try-except`, regardless of an exception, e.g., for cleanup like closing files.' },
    { q: 'How To Raise An Exception?', a: 'Raise an exception with `raise Exception("message")`, e.g., `if x < 0: raise ValueError("Negative value")`.' },
    { q: 'What Is The Difference Between SyntaxError And Exception?', a: '`SyntaxError` occurs from invalid code syntax (e.g., missing colon), while `Exception` is a base class for runtime errors like `ValueError`.' },
    { q: 'What Is Custom Exception?', a: 'A custom exception is a user-defined exception class, e.g., `class MyError(Exception): pass`, raised for specific conditions.' },
    { q: 'How To Handle Multiple Exceptions?', a: 'Handle multiple exceptions with multiple `except` blocks or a tuple, e.g., `try: x/0 except (ZeroDivisionError, TypeError): pass`.' },
    { q: 'What Is The Use Of Assert?', a: '`assert condition, message` raises `AssertionError` if the condition is False, used for debugging, e.g., `assert x > 0, "x must be positive"`.' },
    { q: 'What Are Built-In Exceptions?', a: 'Built-in exceptions are predefined error classes like `ValueError`, `TypeError`, `FileNotFoundError`, inherited from `Exception`.' },
    { q: 'What\'s The Difference Between Errors And Exceptions?', a: 'Errors include syntax errors (non-executable code), while exceptions are runtime errors (e.g., `ZeroDivisionError`) that can be caught.' },
    { q: 'How To Open A File In Python?', a: 'Open a file with `open("file.txt", "r")`, specifying the file path and mode (e.g., `r` for read, `w` for write).' },
    { q: 'What Are The Modes Of File Opening?', a: 'File modes include `r` (read), `w` (write), `a` (append), `b` (binary), `t` (text, default), and `+` (read/write), e.g., `rb` for binary read.' },
    { q: 'What Is The Use Of With Statement In File Handling?', a: 'The `with` statement ensures proper resource management, automatically closing files, e.g., `with open("file.txt") as f: f.read()`.' },
    { q: 'How To Read/Write A File?', a: 'Read with `f.read()`, `f.readline()`, or `f.readlines()`; write with `f.write("text")` or `f.writelines(["line1", "line2"])`.' },
    { q: 'How To Delete A File In Python?', a: 'Delete a file using `os.remove("file.txt")` from the `os` module, or `pathlib.Path("file.txt").unlink()`.' },
    { q: 'What Are File Pointers?', a: 'File pointers track the current position in a file for reading/writing, moved with `f.seek(offset)` or checked with `f.tell()`.' },
    { q: 'What Is The Difference Between read(), readline(), And readlines()?', a: '`read()` reads the entire file, `readline()` reads one line, and `readlines()` reads all lines into a list of strings.' },
    { q: 'How To Check If A File Exists?', a: 'Check file existence with `os.path.exists("file.txt")` or `pathlib.Path("file.txt").exists()`.' },
    { q: 'What Is The Difference Between Binary And Text Mode?', a: 'Text mode (`t`) handles files as strings with encoding, while binary mode (`b`) handles raw bytes, e.g., for images or executables.' },
    { q: 'How Do You Append To An Existing File?', a: 'Append to a file using `open("file.txt", "a")` and `f.write("new text")`, adding content at the end.' },
    { q: 'What Are Iterators And Generators?', a: 'Iterators are objects with `__next__()` for sequential access; generators are iterators created with `yield`, computing values lazily.' },
    { q: 'What Is The Difference Between Yield And Return?', a: '`yield` produces a value and pauses a generator, allowing resumption, while `return` exits a function with a final value.' },
    { q: 'What Is Context Manager In Python?', a: 'A context manager handles setup/teardown (e.g., file opening/closing) using `with`, implemented via `__enter__` and `__exit__`.' },
    { q: 'Explain Python\'s Memory Management.', a: 'Python uses a private heap, reference counting for immediate cleanup, and a cyclic garbage collector for detecting reference cycles.' },
    { q: 'What Are Metaclasses?', a: 'Metaclasses are classes of classes, defining how classes are created, e.g., `type` or custom classes with `__new__` or `__init__`.' },
    { q: 'What Is Monkey Patching?', a: 'Monkey patching is dynamically modifying a module, class, or object at runtime, e.g., replacing a method with a new one.' },
    { q: 'What Are Coroutines?', a: 'Coroutines are functions using `async def` and `await` for asynchronous programming, enabling non-blocking I/O operations.' },
    { q: 'What Is The Difference Between Deep Copy And Shallow Copy?', a: 'Shallow copy (`copy.copy()`) duplicates the top-level object but shares nested objects; deep copy (`copy.deepcopy()`) duplicates everything.' },
    { q: 'What Is GIL (Global Interpreter Lock)?', a: 'The GIL is a mutex in CPython that prevents multiple threads from executing Python bytecode simultaneously, limiting multithreading performance.' },
    { q: 'What Is The Use Of Functools Module?', a: 'The `functools` module provides tools for higher-order functions, like `partial()`, `reduce()`, and decorators such as `lru_cache`.' },
    { q: 'What Is NumPy And Why Is It Used?', a: 'NumPy is a library for numerical computations, offering efficient arrays and mathematical functions, used in data science and machine learning.' },
    { q: 'What Are Pandas DataFrames?', a: 'Pandas DataFrames are 2D, tabular data structures with labeled rows and columns, ideal for data manipulation and analysis.' },
    { q: 'Difference Between Series And DataFrame?', a: 'A Pandas Series is a 1D array with an index, while a DataFrame is a 2D table with multiple columns, each a Series.' },
    { q: 'What Is The Use Of Matplotlib?', a: 'Matplotlib is a plotting library for creating visualizations like line plots, bar charts, and scatter plots in Python.' },
    { q: 'What Is Flask And Django?', a: 'Flask is a lightweight web framework for building simple APIs and apps; Django is a full-stack framework with ORM, admin panel, and more.' },
    { q: 'Difference Between Flask And Django?', a: 'Flask is minimal and flexible, requiring manual setup; Django is batteries-included, with built-in features like ORM and authentication.' },
    { q: 'What Is TensorFlow Used For?', a: 'TensorFlow is an open-source library for machine learning, used for building and training neural networks and deep learning models.' },
    { q: 'What Is The Role Of Requests Library?', a: 'The `requests` library simplifies HTTP requests (e.g., GET, POST) for API calls or web scraping, e.g., `requests.get("url")`.' },
    { q: 'How To Perform API Calls Using Python?', a: 'Use `requests.get("api_url")` or `requests.post("api_url", data=payload)` to call APIs, handling responses with `.json()` or `.status_code`.' },
    { q: 'How Do You Scrape A Website Using BeautifulSoup?', a: 'Use `requests.get("url")` to fetch HTML, then parse with `BeautifulSoup(html, "html.parser")` to extract data via tags or classes.' },
    { q: 'What Are Virtual Environments In Python?', a: 'Virtual environments isolate project dependencies, created with `python -m venv env` and activated with `source env/bin/activate`.' },
    { q: 'How To Debug Python Code?', a: 'Debug with `print()`, logging, `pdb` (e.g., `import pdb; pdb.set_trace()`), or IDE tools like VS Code’s debugger.' },
    { q: 'How To Write Unit Tests In Python?', a: 'Write unit tests using `unittest` or `pytest`, defining test cases with assertions, e.g., `assert my_function(2) == 4`.' },
    { q: 'What Is The Difference Between Unittest And Pytest?', a: '`unittest` is Python’s built-in testing framework with verbose syntax; `pytest` is simpler, supports plugins, and auto-discovers tests.' },
    { q: 'What Is Logging In Python?', a: 'Logging records program events (info, warnings, errors) using the `logging` module, e.g., `logging.info("Message")`, for debugging and monitoring.' },
    { q: 'How To Connect Python With A Database?', a: 'Connect to databases using libraries like `sqlite3` for SQLite or `psycopg2` for PostgreSQL, executing SQL queries with a cursor.' },
    { q: 'What Are Python\'s Limitations?', a: 'Python’s limitations include slower execution speed, high memory usage, and the GIL, which hinders multithreading performance.' },
    { q: 'What Are Some Real-World Applications Of Python?', a: 'Python is used in web development (Django, Flask), data science (Pandas, NumPy), AI/ML (TensorFlow), automation, and scripting.' },
    { q: 'What Are Python Interview Mistakes To Avoid?', a: 'Avoid neglecting basics, overcomplicating solutions, ignoring error handling, or failing to explain code clearly during interviews.' },
    { q: 'How To Prepare Effectively For A Python Interview?', a: 'Master Python fundamentals, practice coding problems, study data structures/algorithms, build projects, and mock interview with peers.' },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="prose max-w-none text-gray-800">
      <h2 className="text-2xl font-bold text-primary mb-4">Top 100 Python Interview Questions</h2>
      <p className="text-gray-600 mb-6">
        Prepare for your interviews with these essential Python questions and answers, covering fundamentals, data structures, OOP, file handling, libraries, and more.
      </p>
      <div className="space-y-2">
        {questions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.01, 0.5) }}
            className="bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex items-center justify-between p-4 text-left text-gray-800 hover:bg-gray-50 transition"
              aria-expanded={openIndex === index}
              aria-controls={`answer-${index}`}
            >
              <div className="flex items-start space-x-2">
                <span className="text-primary font-semibold">{index + 1}.</span>
                <span className="text-base font-medium">{item.q}</span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-gray-600 text-sm">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PythonInterviewQuestions;