import React from "react";

const frontendProjects = [
  {
    title: "To-Do List App",
    description: "Dynamic to-do list for task management.",
    skills: "DOM manipulation, event handling, localStorage",
    features: [
      "Add/remove tasks",
      "Mark tasks complete",
      "Save in localStorage",
    ],
  },
  {
    title: "Weather App using OpenWeather API",
    description: "Get current weather by city name.",
    skills: "Fetch API, JSON, CSS cards",
    features: [
      "Search by city",
      "Display temperature, humidity, icon",
      "Responsive design",
    ],
  },
  {
    title: "Calculator (Standard or Scientific)",
    description: "Perform basic or scientific math calculations.",
    skills: "JavaScript math functions, CSS grid",
    features: [
      "Basic arithmetic",
      "Square root, sin, cos, tan (optional)",
      "Responsive layout",
    ],
  },
  {
    title: "Portfolio Website",
    description: "Personal site to showcase projects and skills.",
    skills: "HTML5 semantic tags, CSS animations, forms",
    features: [
      "Smooth scrolling",
      "Mobile responsiveness",
      "Contact form (non-functional)",
    ],
  },
  {
    title: "Quiz App",
    description: "Multiple-choice quiz with live scoring.",
    skills: "JavaScript logic, arrays, timers",
    features: [
      "Show one question at a time",
      "Score tracking",
      "Result display",
    ],
  },
  {
    title: "Typing Speed Tester",
    description: "Measure typing speed and accuracy.",
    skills: "Keyboard events, string manipulation, timers",
    features: [
      "Random sentence",
      "Measure time & accuracy",
      "Display WPM",
    ],
  },
  {
    title: "Memory Game (Flip Cards)",
    description: "Flip cards to find matching pairs.",
    skills: "Event handling, CSS transitions, array shuffling",
    features: [
      "Flip animation",
      "Move counter",
      "Timer",
    ],
  },
  {
    title: "Digital Clock",
    description: "Live digital clock with theme toggle.",
    skills: "setInterval, Date object, CSS theming",
    features: [
      "12/24 hour format",
      "Theme toggle (dark/light)",
      "Live updating",
    ],
  },
  {
    title: "BMI Calculator",
    description: "Calculate BMI and show weight category.",
    skills: "Forms, input validation, conditionals",
    features: [
      "BMI display with category",
      "Clear/reset button",
      "Responsive UI",
    ],
  },
  {
    title: "Recipe Finder App",
    description: "Search for recipes using TheMealDB API.",
    skills: "Fetch API, API key usage, CSS cards",
    features: [
      "Search bar",
      "Recipe display",
      "Instructions and images",
    ],
  },
  {
    title: "Music Player UI",
    description: "Simple music player interface.",
    skills: "Audio API, CSS styling, flexbox/grid",
    features: [
      "Play/pause track",
      "Progress bar",
      "Song info display",
    ],
  },
  {
    title: "Image Slider/Carousel",
    description: "Sliding image gallery with controls.",
    skills: "CSS transitions, DOM manipulation",
    features: [
      "Next/previous buttons",
      "Auto-slide with setInterval",
      "Responsive design",
    ],
  },
  {
    title: "Currency Converter App",
    description: "Live currency conversion using exchange rate API.",
    skills: "Fetch API, select elements, math logic",
    features: [
      "Select source and target currencies",
      "Show live conversion",
      "Input amount",
    ],
  },
  {
    title: "Stopwatch App",
    description: "Digital stopwatch with lap tracking.",
    skills: "Timers, button events, time formatting",
    features: [
      "Start/stop/reset",
      "Lap time option (optional)",
      "Digital display",
    ],
  },
  {
    title: "Drag-and-Drop Task Board",
    description: "Kanban-style task board with drag functionality.",
    skills: "dragstart, dragover, drop events, styling",
    features: [
      "Drag tasks between columns",
      "Add new tasks",
      "Save in localStorage (optional)",
    ],
  },
];

const FrontendProjects = () => {
  return (

      <div className="grid md:grid-cols-2 gap-6">
        {frontendProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600 italic mb-2">Skills: {project.skills}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
  );
};

export default FrontendProjects;
