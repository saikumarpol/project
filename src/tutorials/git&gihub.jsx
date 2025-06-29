import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const Git = () => {
  // Initialize Mermaid for flowcharts
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Beginner's Guide to Git and GitHub
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Table of Contents
        </h2>
        <ul className="list-disc pl-5 mb-6">
          <li>
            <a href="#introduction" className="text-blue-600 hover:underline">
              Introduction to Version Control
            </a>
          </li>
          <li>
            <a href="#what-is-git" className="text-blue-600 hover:underline">
              What is Git?
            </a>
          </li>
          <li>
            <a href="#what-is-github" className="text-blue-600 hover:underline">
              What is GitHub?
            </a>
          </li>
          <li>
            <a href="#installing-git" className="text-blue-600 hover:underline">
              Installing Git
            </a>
          </li>
          <li>
            <a href="#basic-git-commands" className="text-blue-600 hover:underline">
              Basic Git Commands
            </a>
          </li>
          <li>
            <a href="#working-with-repositories" className="text-blue-600 hover:underline">
              Working with Repositories
            </a>
          </li>
          <li>
            <a href="#branching-and-merging" className="text-blue-600 hover:underline">
              Branching and Merging
            </a>
          </li>
          <li>
            <a href="#resolving-merge-conflicts" className="text-blue-600 hover:underline">
              Resolving Merge Conflicts
            </a>
          </li>
          <li>
            <a href="#collaborating-on-github" className="text-blue-600 hover:underline">
              Collaborating on GitHub
            </a>
          </li>
          <li>
            <a href="#tips-and-best-practices" className="text-blue-600 hover:underline">
              Additional Tips and Best Practices
            </a>
          </li>
        </ul>

        <h2 id="introduction" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Introduction to Version Control
        </h2>
        <p className="font-bold mb-2">What is Version Control?</p>
        <p className="mb-4">
          Version control is a system that helps track changes in files over time. It allows multiple people to
          collaborate on a project without overwriting each other's work. Version control systems (VCS) like Git help
          you:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Track changes to your code.</li>
          <li>Revert to previous versions if something goes wrong.</li>
          <li>Collaborate with others efficiently.</li>
        </ul>
        <p className="font-bold mb-2">Why Use Version Control?</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Avoid losing work due to mistakes.</li>
          <li>Keep a history of all changes.</li>
          <li>Work on different features simultaneously without conflicts.</li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Start] --> B[Make Changes to Files];
              B --> C[Track Changes Using Git];
              C --> D[Commit Changes];
              D --> E[Push to Remote Repository (GitHub)];`}
          </div>
        </div>

        <h2 id="what-is-git" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          What is Git?
        </h2>
        <p className="mb-4">
          Git is a distributed version control system. It allows you to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Track changes locally on your computer.</li>
          <li>Share your work with others using remote repositories like GitHub.</li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Local Machine] --> B[Initialize Git Repository];
              B --> C[Make Changes];
              C --> D[Stage Changes];
              D --> E[Commit Changes];
              E --> F[Sync with Remote Repository];`}
          </div>
        </div>

        <h2 id="what-is-github" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          What is GitHub?
        </h2>
        <p className="mb-4">
          GitHub is a web-based platform that hosts Git repositories. It provides additional features such as:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Collaboration tools (issues, pull requests).</li>
          <li>Hosting for open-source projects.</li>
          <li>Integration with CI/CD pipelines.</li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="mermaid">
            {`graph TD;
              A[Local Repository] --> B[Push Changes to GitHub];
              B --> C[Collaborators Pull Changes];
              C --> D[Review Changes];
              D --> E[Merge Changes into Main Repository];`}
          </div>
        </div>

        <h2 id="installing-git" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Installing Git
        </h2>
        <p className="mb-4">
          Download and install Git from{' '}
          <a href="https://git-scm.com/" className="text-blue-600 hover:underline">
            https://git-scm.com/
          </a>.
        </p>
        <p className="mb-2">Verify installation:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">git --version</pre>

        <h2 id="basic-git-commands" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Basic Git Commands
        </h2>
        <p className="mb-2">Configure your username and email:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}
        </pre>
        <p className="mb-2">Initialize a repository:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`mkdir my-project
cd my-project
git init`}
        </pre>

        <h2 id="working-with-repositories" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Working with Repositories
        </h2>
        <p className="mb-2">Clone a repository:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          git clone https://github.com/username/repository-name.git
        </pre>
        <p className="mb-2">Push changes:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">git push origin main</pre>

        <h2 id="branching-and-merging" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Branching and Merging
        </h2>
        <p className="mb-2">Create and merge branches:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`git branch feature-branch
git checkout feature-branch
git checkout main
git merge feature-branch`}
        </pre>

        <h2 id="resolving-merge-conflicts" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Resolving Merge Conflicts
        </h2>
        <p className="mb-2">Resolve conflicts manually:</p>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
          {`git add filename.txt
git commit`}
        </pre>

        <h2 id="collaborating-on-github" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Collaborating on GitHub
        </h2>
        <p className="mb-4">Fork a repository and create pull requests.</p>

        <h2 id="tips-and-best-practices" className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Additional Tips and Best Practices
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Write clear and concise commit messages.</li>
          <li>Use descriptive branch names.</li>
          <li>Commit small changes frequently.</li>
          <li>Use a <code>.gitignore</code> file to exclude unnecessary files.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Resources for Further Learning
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <a href="https://git-scm.com/book/en/v2" className="text-blue-600 hover:underline">
              Pro Git Book
            </a>
          </li>
          <li>
            <a href="https://docs.github.com/" className="text-blue-600 hover:underline">
              GitHub Docs
            </a>
          </li>
          <li>Online tutorials and courses on platforms like Udemy or Coursera.</li>
        </ul>
      </div>
    </div>
  );
};

export default Git;