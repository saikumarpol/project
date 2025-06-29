import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { FaLaptopCode } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const FullStackTutorial = () => {
  // Frontend form state
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Backend task state
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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

  // Frontend form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  // Backend task handlers
  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => [...prev, { title: newTask, _id: Date.now() }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Full-Stack Development: React, Node.js, Express, and MongoDB
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly full-stack development tutorial! Learn to build a complete web app with a React frontend and a Node.js/Express/MongoDB backend. Think of it as building a house: the frontend (React) is the interior design, and the backend (Node.js, Express, MongoDB) is the foundation and plumbing. We’ll create a Product Landing Page and a Task API, connecting them for a full-stack experience.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is Full-Stack Development?</h2>
        <p className="mb-4">
          Full-stack development involves building both the frontend (user interface) and backend (server, database) of an app. This tutorial covers:
          <ul className="list-disc pl-5">
            <li><strong>Frontend</strong>: React for interactive UIs.</li>
            <li><strong>Backend</strong>: Node.js/Express for server logic, MongoDB for data storage.</li>
          </ul>
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic HTML, CSS, and JavaScript knowledge.</li>
          <li>
            Node.js installed (<a href="https://nodejs.org/" className="text-blue-600 hover:underline">Download Node.js</a>).
          </li>
          <li>
            MongoDB Atlas account (<a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">Sign up</a>).
          </li>
          <li>A text editor (e.g., VS Code).</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Full-Stack Architecture</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Client (React)] -->|HTTP Request| B[Express Server];
              B --> C[Route Handler];
              C --> D[MongoDB Database];
              D -->|Data| C;
              C -->|Response| B;
              B -->|Render UI| A;`}
          </div>
        </div>

        {/* Frontend Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Part 1: Frontend with React
        </h2>
        <p className="mb-4">
          React is a JavaScript library for building user interfaces using components and a virtual DOM. We’ll build a Product Landing Page for a fictional “SmartLight” product.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">React Rendering Flow</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Component] --> B[Render JSX];
              B --> C[Virtual DOM];
              C --> D[Update Real DOM];
              D --> E[Display UI];`}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Setting Up React</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npx create-react-app my-app
cd my-app
npm start`}
        </pre>
        <p className="mb-4">
          This starts a React app at <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a>.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Components and JSX</h3>
        <p className="mb-4">
          Components are reusable UI pieces. JSX combines HTML-like syntax with JavaScript.
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Props</h3>
        <p className="mb-4">Props customize components, like passing parameters to a function.</p>
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: State and useState</h3>
        <p className="mb-4">
          The <strong>useState</strong> hook manages dynamic data, triggering UI updates.
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
        <h4 className="text-lg font-semibold text-gray-800 mb-2">State Update Flowchart</h4>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Action] --> B[Update State];
              B --> C[Re-render Component];
              C --> D[Update DOM];
              D --> E[Display UI];`}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 5: useEffect for Side Effects</h3>
        <p className="mb-4">
          The <strong>useEffect</strong> hook handles side effects like timers or data fetching.
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 6: Context API for State Management</h3>
        <p className="mb-4">
          The <strong>Context API</strong> shares data (e.g., theme) across components.
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 7: React Router for Navigation</h3>
        <p className="mb-4">
          <strong>React Router</strong> enables page navigation without reloading.
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
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Routing Flowchart</h4>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Clicks Link] --> B[Update URL];
              B --> C[Match Route];
              C --> D[Render Component];
              D --> E[Display Page];`}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 8: Custom Hooks</h3>
        <p className="mb-4">Custom hooks extract reusable logic, like form handling.</p>
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 9: Frontend Project - Product Landing Page</h3>
        <p className="mb-4">
          Build a Product Landing Page for “SmartLight” with navigation, a hero section, features, and a contact form using React Router, Context, hooks, and Tailwind CSS.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Directory Structure</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">ThemeContext.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">Navbar.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">Hero.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">Features.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">App.js</h4>
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

        <h4 className="text-lg font-semibold text-gray-800 mb-2">Run the Project</h4>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm start`}
        </pre>
        <p className="mb-4">
          Visit <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a> to see the landing page.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Frontend Project Output</h3>
        <p className="mb-4">
          The Product Landing Page for “SmartLight” includes:
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Navigation Bar</strong>: Sticky, with theme toggle (blue in light mode, dark gray in dark mode).</li>
            <li><strong>Home Page</strong>: Hero section with bold text and a “Learn More” button, followed by a 3-column features grid.</li>
            <li><strong>Features Page</strong>: Grid of feature cards.</li>
            <li><strong>Contact Page</strong>: Centered form with name/email inputs and a success message.</li>
            <li><strong>Responsiveness</strong>: Mobile (stacked), tablet (2-column), desktop (3-column).</li>
            <li><strong>Theme Toggle</strong>: Switches between light and dark modes.</li>
          </ul>
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Example: Contact Form Demo</h3>
        <p className="mb-4">Try the contact form from the landing page:</p>
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-4">
          <h4 className="text-lg font-bold text-blue-600 mb-4">Contact Form Demo</h4>
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

        {/* Backend Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Part 2: Backend with Node.js, Express, and MongoDB
        </h2>
        <p className="mb-4">
          The backend handles data and server logic. We’ll use Node.js, Express, and MongoDB to build a Task API with CRUD operations.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend Request Flow</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Client Request] --> B[Express Server];
              B --> C[Route Handler];
              C --> D[MongoDB Database];
              D --> E[Response to Client];`}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Setting Up Node.js</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`mkdir task-api
cd task-api
npm init -y`}
        </pre>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Create index.js</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
          </pre>
        </div>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`node index.js`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Adding Express</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install express`}
        </pre>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Update index.js</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Task API!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Task API!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
          </pre>
        </div>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`node index.js`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Connecting to MongoDB</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install mongoose`}
        </pre>
        <p className="mb-4">
          Sign up at <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</a> and get your connection string.
        </p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Update index.js</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Connected to MongoDB!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Connected to MongoDB!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
          </pre>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">MongoDB Interaction Flowchart</h4>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[API Request] --> B[Connect to MongoDB];
              B --> C[Query Database];
              C --> D[Return Data];
              D --> E[Send Response];`}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: Backend Project - Task API</h3>
        <p className="mb-4">Build a Task API with CRUD operations to manage tasks.</p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Directory Structure</h4>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`task-api/
├── index.js
├── models/
│   └── Task.js
└── package.json`}
        </pre>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Create models/Task.js</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);`}
          </pre>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Update index.js</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a task
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a task
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
          </pre>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Install CORS and Nodemon</h4>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install cors
npm install --save-dev nodemon`}
        </pre>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Update package.json</h4>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
"scripts": {
  "start": "nodemon index.js"
}
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`"scripts": {
  "start": "nodemon index.js"
}`}
          </pre>
        </div>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm start`}
        </pre>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Test the API</h4>
        <p className="mb-4">
          Use <a href="https://www.postman.com/" className="text-blue-600 hover:underline">Postman</a> or <strong>curl</strong>:
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`# Create a task
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Learn Node.js"}'

# Get all tasks
curl http://localhost:3000/tasks

# Update a task (replace <id> with task ID)
curl -X PUT http://localhost:3000/tasks/<id> -H "Content-Type: application/json" -d '{"title":"Learn Express","completed":true}'

# Delete a task (replace <id> with task ID)
curl -X DELETE http://localhost:3000/tasks/<id>`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Example: Task API Demo</h3>
        <p className="mb-4">Try adding and deleting tasks to simulate the Task API:</p>
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-4">
          <h4 className="text-lg font-bold text-blue-600 mb-4">Task API Demo</h4>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-l"
              placeholder="Add a task"
            />
            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-4 py-2 rounded-r"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5">
            {tasks.map((task) => (
              <li key={task._id} className="flex justify-between items-center mb-2">
                {task.title}
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connecting Frontend and Backend */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Part 3: Connecting Frontend and Backend
        </h2>
        <p className="mb-4">
          To make the React frontend interact with the Task API, use the <strong>fetch</strong> API or libraries like Axios to send HTTP requests.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update Contact.js to Send Form Data to API</h3>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      try {
        const response = await fetch('http://localhost:3000/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '' });
        }
      } catch (err) {
        console.error('Error submitting form:', err);
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      try {
        const response = await fetch('http://localhost:3000/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '' });
        }
      } catch (err) {
        console.error('Error submitting form:', err);
      }
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

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update Backend index.js for Contact Endpoint</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
const Contact = mongoose.model('Contact', contactSchema);

// Contact endpoint
app.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact({ name: req.body.name, email: req.body.email });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Task endpoints (same as before)
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
const Contact = mongoose.model('Contact', contactSchema);

// Contact endpoint
app.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact({ name: req.body.name, email: req.body.email });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Task endpoints (same as before)
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Continue your full-stack journey with:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Connect the Task API to the React frontend (e.g., display tasks on a new page).</li>
          <li>Add user authentication with JWT.</li>
          <li>Deploy the frontend (Netlify) and backend (Heroku/Render).</li>
          <li>Explore state management (Redux, Zustand) and data fetching (React Query, SWR).</li>
          <li>Build a larger project, like an e-commerce site or todo app.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li><a href="https://reactjs.org/docs/getting-started.html" className="text-blue-600 hover:underline">React Docs</a></li>
          <li><a href="https://tailwindcss.com/docs" className="text-blue-600 hover:underline">Tailwind CSS Docs</a></li>
          <li><a href="https://reactrouter.com/" className="text-blue-600 hover:underline">React Router Docs</a></li>
          <li><a href="https://nodejs.org/en/docs/" className="text-blue-600 hover:underline">Node.js Docs</a></li>
          <li><a href="https://expressjs.com/" className="text-blue-600 hover:underline">Express Docs</a></li>
          <li><a href="https://mongoosejs.com/docs/" className="text-blue-600 hover:underline">Mongoose Docs</a></li>
          <li><a href="https://www.mongodb.com/docs/" className="text-blue-600 hover:underline">MongoDB Docs</a></li>
          <li><a href="https://www.freecodecamp.org/learn" className="text-blue-600 hover:underline">freeCodeCamp</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FullStackTutorial;