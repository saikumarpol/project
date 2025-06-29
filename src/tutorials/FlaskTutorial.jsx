import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

const FlaskTutorial = () => {
  const [showOutput, setShowOutput] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans relative">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Flask Tutorial for Beginners
        </h1>
        <p className="mb-4">
          Welcome to this beginner-friendly tutorial on Flask! By the end, you'll build a simple web application and learn advanced features like forms, MongoDB integration, and deployment.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is Flask?</h2>
        <p className="mb-4">
          Flask is a lightweight Python web framework for building web applications quickly. Its minimalistic and flexible design makes it ideal for beginners and small projects.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Basic knowledge of Python programming.</li>
          <li>
            Python installed (<a href="https://www.python.org/downloads/" className="text-blue-600 hover:underline">Download Python</a>).
          </li>
          <li>A text editor or IDE (e.g., VS Code, PyCharm).</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Flask Request Lifecycle</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Client Request] --> B[Flask Routes];
              B --> C[View Function];
              C --> D[Template Rendering];
              D --> E[Response to Client];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 1: Install Flask</h2>
        <p className="mb-2">Run in your terminal:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">pip install flask</pre>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 2: Create a Simple Flask App</h2>
        <p className="mb-4">Build a basic Flask app that displays "Hello, World!"</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Directory Structure</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`flask-app/
├── app.py
└── templates/
    └── index.html`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">app.py</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Run the Application</h3>
        <p className="mb-2">Navigate to the project directory and run:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">python app.py</pre>
        <p className="mb-4">
          Visit <a href="http://127.0.0.1:5000/" className="text-blue-600 hover:underline">http://127.0.0.1:5000/</a> to see "Hello, World!".
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 3: Add an HTML Template</h2>
        <p className="mb-4">Render an HTML template instead of plain text.</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create templates/index.html</h3>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <p>This page is rendered using an HTML template.</p>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <p>This page is rendered using an HTML template.</p>
</body>
</html>`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update app.py</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`@app.route('/')
def home():
    return render_template('index.html')`}
        </pre>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 4: Test the Updated Application</h2>
        <p className="mb-4">Restart the server and refresh your browser to see the HTML page.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 5: Handling Forms with Flask-WTF</h2>
        <p className="mb-4">Add a form to collect user input using Flask-WTF.</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Install Flask-WTF</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">pip install flask-wtf</pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update app.py</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

class NameForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def home():
    form = NameForm()
    if form.validate_on_submit():
        return f"Hello, {form.name.data}!"
    return render_template('index.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

class NameForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def home():
    form = NameForm()
    if form.validate_on_submit():
        return f"Hello, {form.name.data}!"
    return render_template('index.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update templates/index.html</h3>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <form method="POST">
    {{ form.hidden_tag() }}
    {{ form.name.label }} {{ form.name() }}
    {{ form.submit() }}
  </form>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <form method="POST">
    {{ form.hidden_tag() }}
    {{ form.name.label }} {{ form.name() }}
    {{ form.submit() }}
  </form>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Form Handling Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[User Submits Form] --> B[Flask Validates Form];
              B -->|Valid| C[Process Data];
              B -->|Invalid| D[Re-render Form with Errors];
              C --> E[Return Response];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 6: Database Integration with MongoDB</h2>
        <p className="mb-4">Store data using MongoDB with PyMongo.</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Install PyMongo</h3>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">pip install pymongo</pre>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Up MongoDB</h3>
        <p className="mb-4">
          Create a free MongoDB Atlas account at <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</a>. Set up a cluster, create a database user, and get your connection string.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update app.py</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
from flask import Flask, render_template
from pymongo import MongoClient

app = Flask(__name__)

# Replace with your MongoDB Atlas connection string
client = MongoClient('mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority')
db = client['flask_db']
users_collection = db['users']

@app.route('/')
def home():
    users = users_collection.find()
    return render_template('index.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`from flask import Flask, render_template
from pymongo import MongoClient

app = Flask(__name__)

# Replace with your MongoDB Atlas connection string
client = MongoClient('mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority')
db = client['flask_db']
users_collection = db['users']

@app.route('/')
def home():
    users = users_collection.find()
    return render_template('index.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Update templates/index.html</h3>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <h2>Users</h2>
  <ul>
    {% for user in users %}
      <li>{{ user.name }}</li>
    {% endfor %}
  </ul>
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
  <title>Flask App</title>
</head>
<body>
  <h1>Welcome to Flask!</h1>
  <h2>Users</h2>
  <ul>
    {% for user in users %}
      <li>{{ user.name }}</li>
    {% endfor %}
  </ul>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">MongoDB Interaction Flowchart</h3>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Route Request] --> B[Connect to MongoDB];
              B --> C[Query Collection];
              C --> D[Fetch Documents];
              D --> E[Render Template with Data];
              E --> F[Response to Client];`}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 7: Error Handling</h2>
        <p className="mb-4">Create custom error pages for better user experience.</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Add to app.py</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500
              `)
            }
          >
            Copy Code
          </button>
          <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
            {`@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500`}
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create templates/404.html</h3>
        <div className="relative mb-4">
          <button
            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={() =>
              copyCode(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 - Page Not Found</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
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
  <title>404 - Page Not Found</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
</body>
</html>`}
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Step 8: Deploying to Heroku</h2>
        <p className="mb-4">Deploy your Flask app to Heroku for public access.</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Steps</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Create a Heroku account and install the Heroku CLI.</li>
          <li>Add a <code>Procfile</code>: <code>web: gunicorn app:app</code></li>
          <li>Add <code>requirements.txt</code> with <code>pip freeze  requirements.txt</code>.</li>
          <li>Run:
            <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
              {`heroku create
git push heroku main`}
            </pre>
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Interactive Example</h2>
        <p className="mb-4">Click to simulate the Flask app output:</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
          onClick={() => setShowOutput(true)}
        >
          Run Flask App
        </button>
        {showOutput && (
          <div className="bg-white p-4 border border-gray-300 rounded-lg mb-4">
            <h1 className="text-2xl font-bold">Welcome to Flask!</h1>
            <p>This page is rendered using an HTML template.</p>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Next Steps</h2>
        <p className="mb-4">Expand your Flask app with:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Additional routes (e.g., <code>/about</code>, <code>/contact</code>).</li>
          <li>User authentication with Flask-Login.</li>
          <li>RESTful APIs with Flask-RESTful.</li>
          <li>Advanced deployment with Docker.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://flask.palletsprojects.com/" className="text-blue-600 hover:underline">Official Flask Documentation</a>
          </li>
          <li>
            <a href="https://realpython.com/flask-by-example-part-1-project-setup/" className="text-blue-600 hover:underline">Real Python: Flask by Example</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/python/python_flask.asp" className="text-blue-600 hover:underline">W3Schools Flask Tutorial</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlaskTutorial;