import React from "react";

const flaskProjects = [
  {
    title: "Student Attendance Tracker",
    description: "Web app where teachers can manage students and track daily attendance.",
    features: [
      "Add/view/edit/delete students",
      "Mark attendance by date",
      "Filter attendance by date and student",
      "MongoDB or SQLite backend",
    ],
  },
  {
    title: "Library Management System",
    description: "Mini library system to manage books, students, and borrowing operations.",
    features: [
      "CRUD for books and members",
      "Issue/return history",
      "Track due dates",
      "Admin login",
    ],
  },
  {
    title: "Online Quiz Application",
    description: "Timed quiz platform for users with MCQs and scoring system.",
    features: [
      "User login/signup",
      "Create quizzes with questions",
      "Timer and scoring",
      "Leaderboard",
    ],
  },
  {
    title: "Resume Parser using OCR",
    description: "Extract text (name, skills, etc.) from uploaded resume PDFs/images.",
    features: [
      "Upload resumes",
      "Extract and display text using pytesseract",
      "Classify sections (Skills, Education, etc.)",
      "Save parsed data",
    ],
  },
  {
    title: "To-Do List with Authentication",
    description: "Task manager with login/signup to manage personal to-do items.",
    features: [
      "Register/Login",
      "Add/update/delete tasks",
      "Mark as completed",
      "Filter by status",
    ],
  },
  {
    title: "Flask Blog Application",
    description: "Blogging platform where users can write, comment, and interact.",
    features: [
      "User authentication",
      "CRUD for posts",
      "Comment system",
      "Like/dislike functionality",
    ],
  },
  {
    title: "Weather Dashboard using API",
    description: "Get live weather data using OpenWeatherMap API.",
    features: [
      "Search weather by city",
      "Show temp, humidity, forecast",
      "Save favorite cities",
      "Responsive UI",
    ],
  },
  {
    title: "Expense Tracker",
    description: "Track income and expenses, view reports and visualizations.",
    features: [
      "Add/edit/delete records",
      "Monthly summary",
      "Pie charts using Chart.js",
      "User login",
    ],
  },
  {
    title: "Simple E-commerce Store",
    description: "Basic shopping app with product and cart management.",
    features: [
      "Product listing",
      "Add to cart",
      "Checkout simulation",
      "Admin product management",
    ],
  },
  {
    title: "Complaint Management System",
    description: "Students raise complaints, admins resolve them with status updates.",
    features: [
      "Student and admin roles",
      "Raise/view complaints",
      "Status tracking",
      "Email notifications (optional)",
    ],
  },
  {
    title: "Job Application Portal",
    description: "Users can post jobs, apply, and upload resumes.",
    features: [
      "Recruiter/applicant login",
      "Post/view/apply to jobs",
      "Resume upload",
      "Application tracking",
    ],
  },
  {
    title: "Flask Chat Application",
    description: "Real-time chat using Flask-SocketIO.",
    features: [
      "Room-based chat",
      "Realtime messages",
      "User nicknames",
      "Chat history",
    ],
  },
  {
    title: "College Event Management System",
    description: "Manage college events, registrations, and feedback.",
    features: [
      "Create/manage events",
      "Register participants",
      "View participants",
      "Feedback system",
    ],
  },
  {
    title: "Online Polling App",
    description: "Users create polls, vote, and view live results.",
    features: [
      "Create/view polls",
      "One vote per user",
      "Live vote counts",
      "Poll expiration",
    ],
  },
  {
    title: "Health Record Tracker",
    description: "Users can maintain and visualize health data trends.",
    features: [
      "User login",
      "Add/view/edit health records",
      "Graphical trends",
      "Export to PDF",
    ],
  },
];

const FlaskProjects = () => {
  return (
   
      <div className="grid md:grid-cols-2 gap-6">
        {flaskProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-3">{project.description}</p>
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

export default FlaskProjects;
