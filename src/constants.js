// Skills Section Logos

// Frontend
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import zustandLogo from "./assets/tech_logo/zustand.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import shadcnLogo from "./assets/tech_logo/ShadCN.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";

// Backend
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/expressjs.webp";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import sequelizeLogo from "./assets/tech_logo/sequelize.webp";
import mongodbLogo from "./assets/tech_logo/mongodb.webp";
import mongooseLogo from "./assets/tech_logo/mongoose.webp";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import supabaseLogo from "./assets/tech_logo/Supabase.jpg";
import inngestLogo from "./assets/tech_logo/Inngest.png";
import firestoreLogo from "./assets/tech_logo/Firestore.jpeg";
import postgreLogo from "./assets/tech_logo/postgre.png";
import prismaLogo from "./assets/tech_logo/Prisma.png";

// Languages
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

// Tools
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import viteLogo from "./assets/tech_logo/vite.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import renderLogo from "./assets/tech_logo/render.webp";

// Experience Logos
import zyvaLogo from "./assets/company_logo/Zyva.jpeg";
import apanaLogo from "./assets/company_logo/apana.jpeg";
import sharpenerLogo from "./assets/company_logo/Sharpener.png";
import cognizantLogo from "./assets/company_logo/Cognizant.png";
import varconsLogo from "./assets/company_logo/Varcons.png";
import aqmenzLogo from "./assets/company_logo/Aqmenz.webp";

// Education Logos
import internationalLogo from "./assets/education_logo/InternationalSchool.png";
import smvitLogo from "./assets/education_logo/SMVIT.png";

// Project Logos
import expenseWiseLogo from "./assets/work_logo/LandingPage.png";
import foodrushLogo from "./assets/work_logo/FoodRush.png";
import mailmateLogo from "./assets/work_logo/MailMate.png";
import chatverseLogo from "./assets/work_logo/ChatVerse.png";
import mobilemartLogo from "./assets/work_logo/MobileMart.png";
import welthLogo from "./assets/work_logo/Welth.png";

// Skills Data
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Zustand", logo: zustandLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "ShadCN", logo: shadcnLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Sequelize", logo: sequelizeLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Mongoose", logo: mongooseLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Supabase", logo: supabaseLogo },
      { name: "Inngest", logo: inngestLogo },
      { name: "Firestore", logo: firestoreLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Prisma", logo: prismaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Vite", logo: viteLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

// Experience Data
export const experiences = [
  {
    id: 0,
    img: zyvaLogo,
    role: "Full Stack Developer",
    company: "Zyva Chime PVT LTD",
    date: "January 2026 – Present",
    desc: "1. AttendEase: Enterprise Workforce Management System:\n• Built production-ready HRMS with geo-fenced attendance (100m radius validation)\n• Automated workforce logic using Cron Jobs (auto-absent marking, session logouts)\n• Implemented 4-tier RBAC system with dynamic UI rendering and API protection\n• Developed intelligent analytics with custom calendar grid engine\n• Created advanced approval workflows with document governance for auditing.\n\n2. NvaraMedia: Digital Agency Platform:\n• Rebuilt WordPress site into high-conversion custom engine\n• Built NvaraAI Chatbot with lead qualification scoring system\n• Developed pro-grade blog engine with ReactQuill live preview\n• Created Pinterest-style portfolio with smart pagination\n• Implemented lead-to-CRM pipeline replacing expensive third-party tools\n• Achieved performance-first architecture reducing load times significantly",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Postman",
      "Docker",
      "Jest",
      "Supertest",
      "React Testing Library",
      "Playwright",
    ],
  },
  {
    id: 1,
    img: apanaLogo,
    role: "Frontend Developer",
    company: "Apana Time",
    date: "September 2025 – December 2025",
    desc: "1. Gym Management SaaS Platform:\n• Developed responsive frontend for multi-tenant gym management system\n• Implemented member dashboard with attendance tracking and class bookings\n• Built trainer management interface with scheduling and client tracking\n• Created billing module with subscription management\n• Integrated RESTful APIs for real-time data synchronization\n\n2. E-Commerce Platform with Admin Panel:\n• Built complete e-commerce frontend with product catalog and filtering\n• Implemented shopping cart, checkout flow, and payment integration\n• Created Admin Panel with product management and inventory tracking\n• Developed analytics dashboard with sales metrics and reporting\n• Delivered responsive business website with modern UI/UX",
    skills: [
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "Redux",
      "Next JS",
      "REST APIs",
      "Postman",
      "GitHub",
    ],
  },
  {
    id: 2,
    img: sharpenerLogo,
    role: "Full Stack Developer Apprentice",
    company: "Sharpener",
    date: "June 2024 – August 2025",
    desc: "Full-Stack Development Apprenticeship:\n• Built scalable, real-world applications with component-based architecture\n• Implemented RESTful API integration and state management\n• Worked with Node.js, Express, and databases on backend\n• Collaborated via GitHub workflows and implemented authentication\n• Optimized performance and deployed projects using Vercel and Render",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "React JS",
      "Redux",
      "Next JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Postman",
      "GitHub",
      "Vercel",
      "Render",
    ],
  },
  {
    id: 3,
    img: cognizantLogo,
    role: "React Developer",
    company: "Cognizant Technology Solutions",
    date: "October 2023 – April 2024",
    desc: "React Developer Training:\n• Trained in modern frontend technologies and best practices\n• Worked with React.js, Redux, and Zustand for state management\n• Implemented dynamic routing and optimized component rendering\n• Built reusable UI patterns using Tailwind CSS",
    skills: [
      "HTML",
      "CSS",
      "React JS",
      "Redux",
      "Zustand",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    img: varconsLogo,
    role: "Fullstack Developer Intern",
    company: "Varcons Technologies",
    date: "July 2022 – October 2022",
    desc: "Fullstack Development Projects:\n• Contributed to projects using React.js frontend and Django backend\n• Designed and implemented responsive user interfaces\n• Integrated REST APIs and developed CRUD functionalities\n• Collaborated in UI/UX design using Figma\n• Followed agile development workflows",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Figma"],
  },
  {
    id: 5,
    img: aqmenzLogo,
    role: "AI/ML Intern",
    company: "Aqmenz Automation",
    date: "Apr 2022 – July 2022",
    desc: "AI/ML Project - COVID-19 Data Analysis:\n• Analyzed and modeled COVID-19 data using statistical methods\n• Applied machine learning algorithms to predict case trends\n• Evaluated intervention impacts with time series forecasting\n• Performed EDA and built classification models for health analytics",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Machine Learning",
      "Data Analysis",
    ],
  },
];

// Education Data
export const education = [
  {
    id: 0,
    img: smvitLogo,
    school: "Sir M Visvesvaraya Institute of Technology, Bengaluru",
    date: "Sept 2019 - July 2023",
    grade: "8.5 CGPA",
    desc: "Strong foundation in electronics, signal systems, and software. Parallel self-learning in web development and real-world projects shaped my tech career.",
    degree: "Bachelor of Engineering - BE",
  },
  {
    id: 1,
    img: internationalLogo,
    school: "International School, Patna",
    date: "May 2016 - Apr 2018",
    grade: "75.4%",
    desc: "Core PCM curriculum with Computer Science using C++. Learned OOP, data structures and foundational programming concepts.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: internationalLogo,
    school: "International School, Patna",
    date: "Apr 2015 - March 2016",
    grade: "90.2%",
    desc: "Learned Java programming fundamentals and built logic-building skills during high school, forming the base of my dev journey.",
    degree: "ICSE (X) - Science with Computer Applications",
  },
];

// Projects Data
export const projects = [
  {
    id: 0,
    title: "ExpenseWise - Smart Expense Tracker with Premium Features",
    description:
      "ExpenseWise is a full-stack expense management platform with dual interfaces. Users can track expenses/income, set budgets, manage bank accounts, scan receipts with AI, and analyze spending patterns. Premium features include advanced analytics, category breakdowns, leaderboards, and PDF exports. Admin capabilities include Razorpay payment integration, Gemini AI-powered insights, monthly email reports, and Arcjet rate limiting for security.",
    image: expenseWiseLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "JWT Auth",
      "Razorpay",
      "Gemini AI",
      "Arcjet",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    github:
      "https://github.com/MdAbdullahAnwar/ExpenseWise-Smart_Expense_Tracker",
    webapp: "https://expense-wise-smart-expense-tracker.vercel.app/",
  },
  {
    id: 1,
    title: "FoodRush - Food Ordering Platform with Admin Panel",
    description:
      "FoodRush is a modern food ordering platform with two apps. The user-facing app lets customer where users can browse dishes, add items to the cart, apply promo codes, place orders using RazorPay , manage their profile and Live Chat with Admin. The admin dashboard allows product and order management, secured with Clerk Auth and integrated with Tawk.To for live customer support.",
    image: foodrushLogo,
    tags: [
      "React JS",
      "CSS",
      "Firebase Auth",
      "Firestore DB",
      "Clerk",
      "Razorpay",
      "Tawk.To",
    ],
    github: "https://github.com/MdAbdullahAnwar/FoodRush",
    webapp: "https://food-rush-customer-psks.vercel.app/",
  },
  {
    id: 2,
    title: "MailMate - Mail Box Client App",
    description:
      "MailMate is a sleek email client built with modern web tech. It features rich-text composing, folder management (Inbox, Starred, Sent, Trash), real-time sync, user authentication, and a polished UI with Toast notifications and Lucide icons.",
    image: mailmateLogo,
    tags: [
      "React JS",
      "Redux Toolkit",
      "Firestore DB",
      "Clerk",
      "ShadCN UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/MdAbdullahAnwar/MailMate",
    webapp: "https://mail-mate-bay.vercel.app/",
  },
  {
    id: 3,
    title: "ChatVerse - Real-time Chat App",
    description:
      "ChatVerse is a sleek real-time chat app built with React, Firebase, and Zustand. It offers image sharing, voice notes, emoji support, profile editing, and block/unblock features — all within a modern 3-panel interface (Chat List, Chat and Details) for an intuitive and engaging chat experience.",
    image: chatverseLogo,
    tags: ["React JS", "Firebase Auth", "Firestore DB", "Zustand"],
    github: "https://github.com/MdAbdullahAnwar/ChatVerse_Chat-App",
    webapp: "https://chat-verse-chat-app.vercel.app/",
  },
  {
    id: 4,
    title: "MobileMart - E-Commerce Store",
    description:
      "MobileMart is a fully responsive e-commerce web app for buying smartphones, built with React, Vite, Firebase Authentication, and CrudCrud API. It features user authentication, cart and wishlist management, a contact form, and a mobile-first design — offering users a smooth and secure shopping experience across devices.",
    image: mobilemartLogo,
    tags: [
      "React JS",
      "Context API",
      "CSS Modules",
      "Bootstrap",
      "Firebase",
      "Crud-Crud",
    ],
    github: "https://github.com/MdAbdullahAnwar/E-Commerce-Site",
    webapp: "https://e-commerce-site-opal-tau.vercel.app/",
  },
  {
    id: 5,
    title: "Welth - AI Finance Manager",
    description:
      "Wealth is a full-stack AI-powered finance management platform built using Next.js, Prisma, React Hook Form, Zod, Clerk, ShadCN UI and Inngest. It empowers users to track income and expenses, scan receipts using AI, analyze spending patterns and receive smart financial insights via email — Wealth offers a fully responsive, secure and visually stunning financial management experience.",
    image: welthLogo,
    tags: [
      "Next JS",
      "Clerk",
      "Supabase",
      "Inngest",
      "Prisma",
      "CronJob",
      "Arcjet",
      "Gemini AI",
      "ShadCN UI",
      "Resend",
      "React-Email",
      "Recharts",
    ],
    github: "https://github.com/MdAbdullahAnwar/Welth-AI_Finance_Platform",
    webapp: "https://welth-ai-finance-platform-pi.vercel.app/",
  },
];
