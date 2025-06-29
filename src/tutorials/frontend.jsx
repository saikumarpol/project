import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { FaLaptopCode } from 'react-icons/fa';

const FrontendTutorial = () => {
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

  // Handle Task List interactions
  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => [...prev, { id: Date.now(), title: newTask }]);
      setNewTask('');
    }
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Frontend Development with HTML, CSS, and JavaScript
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly tutorial on frontend development! You’ll learn to build web pages using HTML, CSS, and JavaScript, and create a Task List app. Think of building a website like constructing a house: HTML is the structure, CSS is the paint, and JavaScript adds the electricity!
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is Frontend Development?</h2>
        <p className="mb-4">
          Frontend development is about creating the part of a website users see and interact with. It involves:
          <ul className="list-disc pl-5">
            <li><strong>HTML</strong>: Defines the structure (e.g., headings, buttons).</li>
            <li><strong>CSS</strong>: Styles the appearance (e.g., colors, layouts).</li>
            <li><strong>JavaScript</strong>: Adds interactivity (e.g., button clicks).</li>
          </ul>
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic computer skills.</li>
          <li>A text editor (e.g., VS Code).</li>
          <li>A web browser (e.g., Chrome, Firefox).</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Frontend Workflow</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Write HTML Structure];
              B --> C[Apply CSS Styles];
              C --> D[Add JavaScript Interactivity];
              D --> E[Render Page];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 1: HTML - Building the Structure
        </h2>
        <p className="mb-4">
          HTML (HyperText Markup Language) is like the framework of a house. It uses <strong>tags</strong> to create elements like headings, inputs, and lists.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create index.html</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
</head>
<body>
  <h1>Task List</h1>
  <div>
    <input type="text" id="taskInput" placeholder="Add a task">
    <button onclick="addTask()">Add Task</button>
  </div>
  <ul id="taskList"></ul>
</body>
</html>
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
</head>
<body>
  <h1>Task List</h1>
  <div>
    <input type="text" id="taskInput" placeholder="Add a task">
    <button onclick="addTask()">Add Task</button>
  </div>
  <ul id="taskList"></ul>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Test It</h3>
        <p className="mb-4">
          Open `index.html` in a browser to see the basic structure (no styles or interactivity yet).
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 2: CSS - Styling the Page
        </h2>
        <p className="mb-4">
          CSS (Cascading Style Sheets) is like painting and decorating the house. We’ll use <strong>Tailwind CSS</strong> via a CDN for easy styling.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update index.html</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
</body>
</html>
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Test It</h3>
        <p className="mb-4">
          Refresh `index.html` in the browser to see the styled layout (still no interactivity).
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 3: JavaScript - Adding Interactivity
        </h2>
        <p className="mb-4">
          JavaScript is like adding electricity to the house, making buttons work and updating the page dynamically. We’ll add functionality to add and remove tasks.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create script.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center mb-2';
    li.innerHTML = \`
      \${taskText}
      <button class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">Remove</button>
    \`;
    taskList.appendChild(li);
    input.value = '';
  }
}
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center mb-2';
    li.innerHTML = \`
      \${taskText}
      <button class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">Remove</button>
    \`;
    taskList.appendChild(li);
    input.value = '';
  }
}`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update index.html to Include script.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Handling Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Action] --> B[Trigger Event];
              B --> C[Execute JavaScript Function];
              C --> D[Update DOM];
              D --> E[End];`}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Test It</h3>
        <p className="mb-4">
          Refresh `index.html` to add and remove tasks interactively.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 4: Project - Task List App
        </h2>
        <p className="mb-4">
          You’ve already built the Task List app! Let’s review the complete project, combining HTML, CSS, and JavaScript.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Directory Structure</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`task-list/
├── index.html
└── script.js`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">index.html</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4">
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-600 mb-4">Task List</h1>
    <div class="flex mb-4">
      <input
        type="text"
        id="taskInput"
        class="flex-1 p-2 border border-gray-300 rounded-l"
        placeholder="Add a task"
      >
      <button
        onclick="addTask()"
        class="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Add Task
      </button>
    </div>
    <ul id="taskList" class="list-disc pl-5"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">script.js</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center mb-2';
    li.innerHTML = \`
      \${taskText}
      <button class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">Remove</button>
    \`;
    taskList.appendChild(li);
    input.value = '';
  }
}
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center mb-2';
    li.innerHTML = \`
      \${taskText}
      <button class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">Remove</button>
    \`;
    taskList.appendChild(li);
    input.value = '';
  }
}`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Test the Project</h3>
        <p className="mb-4">
          Open `index.html` in a browser or use a local server (e.g., VS Code Live Server) to interact with the Task List app.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Interactive Example: Task List Demo
        </h2>
        <p className="mb-4">Try adding and removing tasks below to see the app in action:</p>
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Task List Demo</h3>
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
              <li key={task.id} className="flex justify-between items-center mb-2">
                {task.title}
                <button
                  onClick={() => removeTask(task.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Keep learning frontend development with:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Add features to the Task List (e.g., mark tasks as complete, save to local storage).</li>
          <li>Learn a framework like React or Vue.js.</li>
          <li>Explore CSS animations or other frameworks (e.g., Bootstrap).</li>
          <li>Build another project, like a calculator or quiz app.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://www.w3schools.com/html/" className="text-blue-600 hover:underline">W3Schools: HTML</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/" className="text-blue-600 hover:underline">W3Schools: CSS</a>
          </li>
          <li>
            <a href="https://javascript.info/" className="text-blue-600 hover:underline">JavaScript.Info</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs" className="text-blue-600 hover:underline">Tailwind CSS Docs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontendTutorial;