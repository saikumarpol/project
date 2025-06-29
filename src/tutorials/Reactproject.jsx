import React from "react";

const advancedReactProjects = [
  {
    title: "E-commerce Product Dashboard",
    description:
      "A shopping dashboard with product listings, filters, sorting, and a cart.",
    skills: "useState, useEffect, React Router, localStorage, Context API",
    features: [
      "Filter by category and price",
      "Cart management with localStorage",
      "Routing between Home, Products, and Cart",
    ],
  },
  {
    title: "Crypto Price Tracker",
    description: "Track real-time cryptocurrency prices and trends.",
    skills: "Fetch API, useEffect, Chart.js or Recharts",
    features: [
      "Live coin price list",
      "7-day line chart for selected coin",
      "Search and sort by name/market cap",
    ],
  },
  {
    title: "Job Board UI (Glassdoor clone)",
    description: "Interactive job board with filters and saved jobs.",
    skills: "Routing, state management, reusable components",
    features: [
      "Filter by location and type",
      "Bookmark/save jobs",
      "Responsive design layout",
    ],
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Track your expenses and income visually with graphs and filters.",
    skills: "useReducer, Context API, charts",
    features: [
      "Add/delete transactions",
      "Pie/bar chart visualizations",
      "Filter by date and category",
    ],
  },
  {
    title: "Netflix Clone (UI only)",
    description:
      "Replicate the Netflix homepage UI using static or dynamic movie data.",
    skills: "Component design, modals, sliders",
    features: [
      "Hero banner",
      "Category sliders",
      "Movie detail modal",
    ],
  },
  {
    title: "Portfolio Website with Animations",
    description:
      "Animated personal portfolio with scroll effects and interactive sections.",
    skills: "Framer Motion, React Router, react-scroll",
    features: [
      "Animated transitions",
      "About, Projects, Contact pages",
      "Scrollspy and smooth scrolling",
    ],
  },
  {
    title: "Travel Booking UI",
    description:
      "Flight/hotel search with filters, dynamic form handling, and summary view.",
    skills: "Controlled inputs, conditional rendering",
    features: [
      "Date pickers and dropdowns",
      "Price and rating filters",
      "Booking summary UI",
    ],
  },
  {
    title: "Weather App (Styled UI)",
    description: "Real-time weather UI with animations and error handling.",
    skills: "Custom hooks, Fetch API, loading animations",
    features: [
      "City search with live weather",
      "Weather icons and temperature UI",
      "Error/loading states",
    ],
  },
  {
    title: "Admin Dashboard",
    description: "Professional dashboard with stats, charts, and tables.",
    skills: "Chart.js, routing, reusable components",
    features: [
      "Stat cards and widgets",
      "Bar and pie charts",
      "Tables with pagination/filtering",
    ],
  },
  {
    title: "Online Resume Builder",
    description: "Form-based UI for building and exporting resumes.",
    skills: "Form handling, jsPDF/html2pdf",
    features: [
      "Live preview of resume",
      "Form inputs for skills, education, etc.",
      "Export to downloadable PDF",
    ],
  },
  {
    title: "Productivity Pomodoro Timer",
    description:
      "Pomodoro timer to boost productivity with logging and customization.",
    skills: "useEffect, setInterval, useRef",
    features: [
      "Start/pause/reset timer",
      "Custom work/break duration",
      "Task logging history",
    ],
  },
  {
    title: "Multi-step Form (Wizard UI)",
    description: "Step-by-step form with validations and progress tracker.",
    skills: "Form validation, useState, Yup",
    features: [
      "Step-wise navigation",
      "Validation per step",
      "Progress indicator",
    ],
  },
  {
    title: "Chat UI (Static/Mocked)",
    description:
      "A chat interface styled like WhatsApp with mock data and animations.",
    skills: "Styled components, conditional rendering",
    features: [
      "Chat bubbles and status",
      "Typing animation",
      "Sidebar with contacts",
    ],
  },
  {
    title: "Blog Reader (Markdown Viewer)",
    description: "Read and style blog content from Markdown files.",
    skills: "Markdown parser, React Router",
    features: [
      "Blog list and detail pages",
      "Render markdown into styled HTML",
      "Search functionality",
    ],
  },
  {
    title: "Kanban Task Board",
    description:
      "Drag-and-drop task board similar to Trello with task grouping.",
    skills: "react-beautiful-dnd, state management",
    features: [
      "To Do / Doing / Done columns",
      "Drag and drop tasks",
      "Add/edit task details",
    ],
  },
];

const AdvancedReactProjects = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        ⚛️ Advanced React.js Project Ideas
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {advancedReactProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600 italic mb-2">
              Skills: {project.skills}
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedReactProjects;
