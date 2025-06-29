import React from "react";

const backendProjects = [
  {
    title: "Student Management API",
    description: "RESTful API to manage students and their courses.",
    features: [
      "Create/read/update/delete students",
      "Assign/unassign courses",
      "Get students by course",
    ],
  },
  {
    title: "Task Manager API",
    description: "API to manage tasks for users with authentication.",
    features: [
      "User registration/login (JWT)",
      "CRUD operations on tasks",
      "Filter by status or due date",
    ],
  },
  {
    title: "Library System API",
    description: "Manage books, authors, and borrowing activity.",
    features: [
      "CRUD for books and authors",
      "Track borrowed/returned books",
      "Show availability status",
    ],
  },
  {
    title: "Blog Platform API",
    description: "Create and manage blog posts and comments.",
    features: [
      "CRUD for blog posts",
      "Comment on posts",
      "Authentication for authors",
    ],
  },
  {
    title: "Online Store Backend",
    description: "E-commerce backend with users, products, and orders.",
    features: [
      "User authentication (JWT)",
      "Product CRUD",
      "Cart management & order creation",
    ],
  },
  {
    title: "Hospital Patient Record System",
    description: "Manage patients, appointments, and doctors.",
    features: [
      "CRUD for patients and doctors",
      "Schedule/view appointments",
      "Search patients by name or doctor",
    ],
  },
  {
    title: "Issue Tracker System",
    description: "GitHub-style issue tracking system backend.",
    features: [
      "CRUD for issues",
      "Assign issues to users",
      "Track status: open, closed, in-progress",
    ],
  },
  {
    title: "Event Booking API",
    description: "Manage events and attendee registrations.",
    features: [
      "Create/manage events",
      "Register users for events",
      "View participation list",
    ],
  },
  {
    title: "Inventory Management API",
    description: "Manage products, stock, and suppliers.",
    features: [
      "Product & supplier CRUD",
      "Track quantity levels",
      "Alert on low stock",
    ],
  },
  {
    title: "Job Portal Backend",
    description: "API for posting and applying to jobs.",
    features: [
      "CRUD for job listings",
      "Apply with resume link",
      "Admin management access",
    ],
  },
  {
    title: "URL Shortener API",
    description: "Create and manage short URLs like bit.ly.",
    features: [
      "POST long URL → get short code",
      "Redirect with short URL",
      "Track click count",
    ],
  },
  {
    title: "Book Review API",
    description: "API for book reviews and ratings.",
    features: [
      "Books CRUD",
      "Submit review and rating",
      "Calculate average rating",
    ],
  },
  {
    title: "Banking System API",
    description: "Simulate banking operations with transactions.",
    features: [
      "User registration/login",
      "Deposit/withdraw/transfer",
      "Transaction history",
    ],
  },
  {
    title: "Chat System Backend",
    description: "Store and retrieve user messages (no real-time).",
    features: [
      "Users and chat rooms",
      "Send messages to rooms",
      "Fetch chat history",
    ],
  },
  {
    title: "Food Ordering System API",
    description: "Backend for restaurant ordering system.",
    features: [
      "Menu item CRUD",
      "Order placing and status tracking",
      "User roles: admin, customer",
    ],
  },
];

const BackendProjects = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">🧠 Backend Project Ideas (Node.js + Express + MongoDB)</h1>
      <p className="text-center text-gray-500 mb-6 text-sm italic">
        These projects are pure backend. Use Postman or Swagger for testing.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {backendProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border shadow-md p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
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

export default BackendProjects;
