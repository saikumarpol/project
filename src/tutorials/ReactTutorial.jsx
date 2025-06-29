import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { FaLaptopCode } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ReactTutorial = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Learn React: From Scratch to Advanced
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly React tutorial! You’ll learn React from the ground up, build a Product Landing Page, and master concepts from components to advanced state management. Think of React as building with LEGO blocks: each component is a reusable piece, and you’ll combine them to create something amazing!
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is React?</h2>
        <p className="mb-4">
          React is a JavaScript library for building user interfaces, especially single-page applications. It uses <strong>components</strong> to create reusable UI pieces and manages updates efficiently with a virtual DOM.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic HTML, CSS, and JavaScript knowledge.</li>
          <li>
            Node.js installed (<a href="https://nodejs.org/" className="text-blue-600 hover:underline">Download Node.js</a>).
          </li>
          <li>A text editor (e.g., VS Code).</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">React Rendering Flow</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Component] --> B[Render JSX];
              B --> C[Virtual DOM];
              C --> D[Update Real DOM];
              D --> E[Display UI];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 1: Setting Up React
        </h2>
        <p className="mb-4">
          Let’s set up a React project using Create React App, like assembling the foundation for your LEGO structure.
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npx create-react-app my-app
cd my-app
npm start`}
        </pre>
        <p className="mb-4">This starts a React app at <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a>.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 2: Components and JSX
        </h2>
        <p className="mb-4">
          Components are like LEGO blocks: reusable pieces of UI. JSX is a syntax that looks like HTML but works in JavaScript.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a component.</p>
    </div>
  );
}

export default Welcome;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a component.</p>
    </div>
  );
}

export default Welcome;`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 3: Props
        </h2>
        <p className="mb-4">
          Props are like passing instructions to a LEGO block, letting you customize components.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}

export default App;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}

export default App;`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 4: State and useState
        </h2>
        <p className="mb-4">
          State is like a light switch: it tracks data that changes, and React updates the UI when it flips. The <strong>useState</strong> hook manages state.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">State Update Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Action] --> B[Update State];
              B --> C[Re-render Component];
              C --> D[Update DOM];
              D --> E[Display UI];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 5: useEffect for Side Effects
        </h2>
        <p className="mb-4">
          The <strong>useEffect</strong> hook is like a timer that runs code (e.g., fetching data) when a component loads or updates.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}

export default Timer;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}

export default Timer;`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 6: Context API for State Management
        </h2>
        <p className="mb-4">
          The <strong>Context API</strong> is like a shared toolbox, letting you pass data (e.g., theme settings) to all components without props.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'bg-white' : 'bg-gray-800'}>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

export default App;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'bg-white' : 'bg-gray-800'}>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

export default App;`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 7: React Router for Navigation
        </h2>
        <p className="mb-4">
          <strong>React Router</strong> is like a navigation map, letting users switch between pages (e.g., Home, About) without reloading.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Routing Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Clicks Link] --> B[Update URL];
              B --> C[Match Route];
              C --> D[Render Component];
              D --> E[Display Page];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 8: Custom Hooks
        </h2>
        <p className="mb-4">
          Custom hooks are like reusable tools, letting you extract logic (e.g., form handling) into functions.
        </p>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { values, handleChange };
}

function Form() {
  const { values, handleChange } = useForm();

  return (
    <form>
      <input
        type="text"
        name="username"
        value={values.username || ''}
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </form>
  );
}

export default Form;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { values, handleChange };
}

function Form() {
  const { values, handleChange } = useForm();

  return (
    <form>
      <input
        type="text"
        name="username"
        value={values.username || ''}
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </form>
  );
}

export default Form;`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 9: Project - Product Landing Page
        </h2>
        <p className="mb-4">
          Let’s build a Product Landing Page for a fictional “SmartLight” product. It includes navigation, a hero section, features, and a contact form, using React Router, Context, hooks, and Tailwind CSS.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Directory Structure</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Features.js
│   ├── Contact.js
│   └── ThemeContext.js
├── App.js
└── index.js`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">ThemeContext.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Navbar.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className={\`p-4 \${
      theme === 'light' ? 'bg-blue-600' : 'bg-gray-800'
    } text-white\`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SmartLight</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/features" className="mr-4 hover:underline">Features</Link>
          <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className={\`p-4 \${
      theme === 'light' ? 'bg-blue-600' : 'bg-gray-800'
    } text-white\`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SmartLight</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/features" className="mr-4 hover:underline">Features</Link>
          <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hero.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { useTheme } from './ThemeContext';

function Hero() {
  const { theme } = useTheme();

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    } text-center\`}>
      <div className="container mx-auto">
        <h1 className={\`text-4xl font-bold mb-4 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>SmartLight: Illuminate Your World</h1>
        <p className={\`text-lg mb-6 \${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }\`}>Discover the future of smart lighting with energy efficiency.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { useTheme } from './ThemeContext';

function Hero() {
  const { theme } = useTheme();

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    } text-center\`}>
      <div className="container mx-auto">
        <h1 className={\`text-4xl font-bold mb-4 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>SmartLight: Illuminate Your World</h1>
        <p className={\`text-lg mb-6 \${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }\`}>Discover the future of smart lighting with energy efficiency.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Features.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { useTheme } from './ThemeContext';

function Features() {
  const { theme } = useTheme();

  const features = [
    { title: 'Energy Efficient', description: 'Save up to 70% on energy.' },
    { title: 'Smart Control', description: 'Control lights via app.' },
    { title: 'Customizable', description: 'Choose colors and brightness.' },
  ];

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-white' : 'bg-gray-800'
    }\`}>
      <div className="container mx-auto">
        <h2 className={\`text-3xl font-bold text-center mb-8 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>Why Choose SmartLight?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { useTheme } from './ThemeContext';

function Features() {
  const { theme } = useTheme();

  const features = [
    { title: 'Energy Efficient', description: 'Save up to 70% on energy.' },
    { title: 'Smart Control', description: 'Control lights via app.' },
    { title: 'Customizable', description: 'Choose colors and brightness.' },
  ];

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-white' : 'bg-gray-800'
    }\`}>
      <div className="container mx-auto">
        <h2 className={\`text-3xl font-bold text-center mb-8 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>Why Choose SmartLight?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { useState } from 'react';
import { useTheme } from './ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    }\`}>
      <div className="container mx-auto max-w-md">
        <h2 className={\`text-3xl font-bold text-center mb-8 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>Contact Us</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { useState } from 'react';
import { useTheme } from './ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <section className={\`py-16 \${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    }\`}>
      <div className="container mx-auto max-w-md">
        <h2 className={\`text-3xl font-bold text-center mb-8 \${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }\`}>Contact Us</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">App.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Features /></>} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Features /></>} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Run the Project</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm start`}
        </pre>
        <p className="mb-4">
          Visit <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a> to see the landing page.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Project Output
        </h2>
        <p className="mb-4">
          The Product Landing Page for “SmartLight” has a modern, responsive design:
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Navigation Bar</strong>: Sticky at the top, blue (`bg-blue-600`) in light mode, dark gray (`bg-gray-800`) in dark mode. Includes “SmartLight” logo and links to Home, Features, Contact, plus a theme toggle button.
            </li>
            <li>
              <strong>Home Page</strong>:
              <ul className="list-disc pl-5">
                <li>
                  <strong>Hero Section</strong>: Centered text with a large heading (“SmartLight: Illuminate Your World”), a subheading, and a blue “Learn More” button. Light mode: gray background (`bg-gray-100`); dark mode: dark gray (`bg-gray-900`).
                </li>
                <li>
                  <strong>Features Section</strong>: Three cards in a grid (1 column on mobile, 3 on desktop) with titles (e.g., “Energy Efficient”) and descriptions. Cards have a light gray background (`bg-gray-100`) and shadow.
                </li>
              </ul>
            </li>
            <li>
              <strong>Features Page</strong>: Same as the Features section above, accessible via navigation.
            </li>
            <li>
              <strong>Contact Page</strong>: A centered form with name and email inputs, a blue submit button, and a success message on submission. Responsive, max-width 448px (`max-w-md`).
            </li>
            <li>
              <strong>Responsiveness</strong>:
              <ul className="list-disc pl-5">
                <li><strong>Mobile</strong>: Stacked layout, smaller fonts (e.g., `text-2xl` for headings), navigation links stack vertically on click.</li>
                <li><strong>Tablet</strong>: Grid layouts adjust (e.g., 2-column features), larger padding (`sm:p-6`).</li>
                <li><strong>Desktop</strong>: Full grid (3-column features), centered content (`max-w-4xl` for main container).</li>
              </ul>
            </li>
            <li>
              <strong>Theme Toggle</strong>: Switches between light (white/gray) and dark (gray/black) modes, affecting backgrounds and text colors across all sections.
            </li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Visual Description</strong>: The page feels clean and professional, with a blue accent color (`bg-blue-600`) for buttons and headers. The hero section grabs attention with bold text, the features section is organized in a grid for clarity, and the contact form is simple yet functional. The theme toggle adds interactivity, making the UI feel dynamic.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Interactive Example: Contact Form Demo
        </h2>
        <p className="mb-4">Try the contact form from the landing page below:</p>
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Contact Form Demo</h3>
          {formSubmitted ? (
            <p className="text-green-600 text-center">Thank you for your message!</p>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Keep learning React with:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Add backend integration (e.g., Node.js API for the contact form).</li>
          <li>Explore state management libraries (e.g., Redux, Zustand).</li>
          <li>Learn React Query or SWR for data fetching.</li>
          <li>Build another project, like an e-commerce site or dashboard.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://reactjs.org/docs/getting-started.html" className="text-blue-600 hover:underline">React Docs</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs" className="text-blue-600 hover:underline">Tailwind CSS Docs</a>
          </li>
          <li>
            <a href="https://reactrouter.com/" className="text-blue-600 hover:underline">React Router Docs</a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn" className="text-blue-600 hover:underline">freeCodeCamp: React</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReactTutorial;