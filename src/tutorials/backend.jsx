import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { FaLaptopCode } from 'react-icons/fa';

const BackendTutorial = () => {
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

  // Simulate API interactions
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
          <FaLaptopCode className="mr-2 text-blue-600" /> Backend Development with Node.js, Express, and MongoDB
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly tutorial on backend development! You’ll learn to build a server using Node.js, Express, and MongoDB, and create a Task API. Think of the backend as a restaurant: Node.js is the kitchen, Express is the waiter, and MongoDB is the pantry storing ingredients!
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is Backend Development?</h2>
        <p className="mb-4">
          Backend development is about creating the server-side of an app, handling data, and responding to user requests. We’ll use:
          <ul className="list-disc pl-5">
            <li><strong>Node.js</strong>: Runs JavaScript on the server.</li>
            <li><strong>Express</strong>: Simplifies building APIs.</li>
            <li><strong>MongoDB</strong>: Stores data like tasks or users.</li>
          </ul>
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic JavaScript knowledge (e.g., functions, objects).</li>
          <li>
            Node.js installed (<a href="https://nodejs.org/" className="text-blue-600 hover:underline">Download Node.js</a>).
          </li>
          <li>A text editor (e.g., VS Code).</li>
          <li>
            MongoDB Atlas account (<a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">Sign up</a>).
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Backend Request Flow</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Client Request] --> B[Express Server];
              B --> C[Route Handler];
              C --> D[MongoDB Database];
              D --> E[Response to Client];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 1: Setting Up Node.js
        </h2>
        <p className="mb-4">
          Node.js is like a kitchen that runs JavaScript to cook up server responses. Let’s create a basic server.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create a Project</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`mkdir task-api
cd task-api
npm init -y`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create index.js</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Run the Server</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`node index.js`}
        </pre>
        <p className="mb-4">
          Visit <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a> to see “Hello, World!”.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 2: Adding Express
        </h2>
        <p className="mb-4">
          Express is like a waiter, making it easy to handle requests and send responses. Let’s set up an Express server.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Install Express</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install express`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update index.js</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Run the Server</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`node index.js`}
        </pre>
        <p className="mb-4">
          Visit <a href="http://localhost:3000" className="text-blue-600 hover:underline">http://localhost:3000</a> to see the welcome message.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 3: Connecting to MongoDB
        </h2>
        <p className="mb-4">
          MongoDB is like a pantry, storing data (e.g., tasks) in a flexible way. We’ll use <strong>Mongoose</strong> to connect to MongoDB Atlas.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Install Mongoose</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install mongoose`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Up MongoDB Atlas</h3>
        <p className="mb-4">
          Sign up at <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</a>, create a cluster, and get your connection string.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update index.js</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">MongoDB Interaction Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[API Request] --> B[Connect to MongoDB];
              B --> C[Query Database];
              C --> D[Return Data];
              D --> E[Send Response];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Step 4: Project - Task API
        </h2>
        <p className="mb-4">
          Let’s build a Task API with CRUD operations (Create, Read, Update, Delete) to manage tasks. We’ll use Express for routes and MongoDB for storage.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Directory Structure</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`task-api/
├── index.js
├── models/
│   └── Task.js
└── package.json`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create models/Task.js</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update index.js</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Install CORS and Nodemon</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm install cors
npm install --save-dev nodemon`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update package.json</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Run the Server</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`npm start`}
        </pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Test the API</h3>
        <p className="mb-4">
          Use a tool like <a href="https://www.postman.com/" className="text-blue-600 hover:underline">Postman</a> or <strong>curl</strong> to test:
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

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaLaptopCode className="mr-2 text-blue-600" /> Interactive Example: Task API Demo
        </h2>
        <p className="mb-4">Try adding and deleting tasks to simulate the Task API:</p>
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Task API Demo</h3>
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

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Keep learning backend development with:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Add user authentication (e.g., JWT).</li>
          <li>Connect the Task API to a frontend (e.g., React).</li>
          <li>Deploy the API to Heroku or Render.</li>
          <li>Explore advanced MongoDB queries.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://nodejs.org/en/docs/" className="text-blue-600 hover:underline">Node.js Docs</a>
          </li>
          <li>
            <a href="https://expressjs.com/" className="text-blue-600 hover:underline">Express Docs</a>
          </li>
          <li>
            <a href="https://mongoosejs.com/docs/" className="text-blue-600 hover:underline">Mongoose Docs</a>
          </li>
          <li>
            <a href="https://www.mongodb.com/docs/" className="text-blue-600 hover:underline">MongoDB Docs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackendTutorial;