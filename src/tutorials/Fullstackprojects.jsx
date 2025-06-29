import React from "react";

const mernProjects = [
  {
    title: "Student Management System",
    description:
      "Manage students, subjects, attendance, and grades from an admin dashboard.",
    features: [
      "Admin login",
      "CRUD for students and subjects",
      "Track grades and attendance",
      "Role-based access (Admin/Teacher)",
    ],
  },
  {
    title: "Job Portal",
    description:
      "Users can post, apply for jobs, and upload resumes with recruiter/applicant roles.",
    features: [
      "JWT-based authentication",
      "Job CRUD & application submission",
      "Resume upload with Multer",
      "Saved jobs feature",
    ],
  },
  {
    title: "E-commerce Web App",
    description:
      "Online store with products, cart, checkout, and order management.",
    features: [
      "User registration/login",
      "Product management for admin",
      "Cart and order flow",
      "Order history tracking",
    ],
  },
  {
    title: "Blog Platform",
    description:
      "Multi-user blogging platform with markdown editor and commenting system.",
    features: [
      "Post & comment CRUD",
      "JWT auth + protected routes",
      "Rich text/Markdown support",
      "Like/dislike posts",
    ],
  },
  {
    title: "Online Course Portal",
    description:
      "Instructors upload courses, students enroll and learn with progress tracking.",
    features: [
      "Instructor & student roles",
      "Video upload & course creation",
      "Enrollment tracking",
      "Ratings and feedback",
    ],
  },
  {
    title: "Expense Tracker",
    description:
      "Track your daily expenses and incomes with graphs and authentication.",
    features: [
      "User auth with JWT",
      "Add/edit/delete expenses",
      "Monthly summary with Chart.js",
      "Dark/light theme toggle",
    ],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Private and group chat system using Socket.IO and MongoDB.",
    features: [
      "JWT-based login",
      "Private and group messaging",
      "Typing indicators",
      "Message history and online status",
    ],
  },
  {
    title: "Hospital Management System",
    description:
      "Manage doctors, patients, appointments, and prescriptions securely.",
    features: [
      "Role-based dashboards (Doctor/Receptionist/Admin)",
      "Appointment scheduling",
      "Medical history logs",
      "Secure login with session/jwt",
    ],
  },
  {
    title: "Portfolio CMS",
    description:
      "Edit your portfolio content from a dashboard and update frontend in real-time.",
    features: [
      "Admin login",
      "Manage bio, skills, projects",
      "Live preview feature",
      "Custom themes and layout switching",
    ],
  },
  {
    title: "Task Management / Kanban App",
    description:
      "Drag-and-drop task manager like Trello with comments and boards.",
    features: [
      "JWT-based login",
      "Boards, task lists, and comments",
      "Drag and drop tasks with DnD",
      "Assign users to tasks",
    ],
  },
  {
    title: "Social Media Platform",
    description:
      "A simple social media app with profiles, posts, and follower system.",
    features: [
      "Follow/unfollow users",
      "Post feed and user profile",
      "Like posts",
      "Optional: real-time notifications",
    ],
  },
  {
    title: "Resume Builder",
    description:
      "Users input data to generate resumes and export as downloadable PDFs.",
    features: [
      "Live resume preview",
      "Form input for personal info",
      "PDF generation with jsPDF",
      "Resume storage in MongoDB",
    ],
  },
  {
    title: "Online Voting System",
    description:
      "Secure platform to vote in elections or surveys with OTP/email validation.",
    features: [
      "Login with email/OTP",
      "Create and vote on polls",
      "Real-time vote count",
      "One vote per user restriction",
    ],
  },
  {
    title: "Food Ordering System",
    description:
      "Browse menu, place orders, and track status with admin control panel.",
    features: [
      "User login/signup",
      "Cart and checkout flow",
      "Order tracking UI",
      "Admin dashboard for kitchen staff",
    ],
  },
  {
    title: "Event Booking Platform",
    description:
      "Users discover and book events with filter, booking history, and admin controls.",
    features: [
      "Create/manage events (admin)",
      "Book/reserve seats",
      "Search and filter events",
      "User booking history",
    ],
  },
];

const MernProjects = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        🌐 MERN Full Stack Project Ideas
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Tech: <strong>MongoDB</strong> + <strong>Express.js</strong> +{" "}
        <strong>React.js</strong> + <strong>Node.js</strong> with JWT, Multer, Socket.IO, and more.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {mernProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white border shadow-md p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MernProjects;
