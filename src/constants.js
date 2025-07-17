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

// BaaS
import firebaseLogo from "./assets/tech_logo/firebase.png";
import supabaseLogo from "./assets/tech_logo/Supabase.jpg";
import inngestLogo from "./assets/tech_logo/Inngest.png";
import prismaLogo from "./assets/tech_logo/Prisma.png";
import clerkLogo from "./assets/tech_logo/Clerk.png";
import firestoreLogo from "./assets/tech_logo/Firestore.jpeg";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import cronjobLogo from "./assets/tech_logo/CronHub.webp";
import arcjetLogo from "./assets/tech_logo/Arcjet.webp";

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

// Experience Logos
import sharpenerLogo from "./assets/company_logo/Sharpener.png";
import cognizantLogo from "./assets/company_logo/Cognizant.png";
import varconsLogo from "./assets/company_logo/Varcons.png";
import aqmenzLogo from "./assets/company_logo/Aqmenz.webp";

// Education Logos
import internationalLogo from "./assets/education_logo/InternationalSchool.png";
import smvitLogo from "./assets/education_logo/SMVIT.png";

// Project Logos
import welthLogo from "./assets/work_logo/Welth.png";
import foodrushLogo from "./assets/work_logo/FoodRush.png";
import mailmateLogo from "./assets/work_logo/MailMate.png";
import chatverseLogo from "./assets/work_logo/ChatVerse.png";
import mobilemartLogo from "./assets/work_logo/MobileMart.png";
import expensetrackerLogo from "./assets/work_logo/ExpenseTracker.png";

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
      { name: "Firebase", logo: firebaseLogo },
      { name: "Supabase", logo: supabaseLogo },
      { name: "Inngest", logo: inngestLogo },
      { name: "Prisma", logo: prismaLogo },
      { name: "Clerk", logo: clerkLogo },
      { name: "Firestore", logo: firestoreLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Cron", logo: cronjobLogo },
      { name: "Arcjet", logo: arcjetLogo },
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
    ],
  },
];

// Experience Data
export const experiences = [
  {
    id: 0,
    img: sharpenerLogo,
    role: "Frontend Developer Apprentice",
    company: "Sharpener",
    date: "June 2024 – Present",
    desc: "Currently undergoing an intensive frontend development apprenticeship focused on building scalable, real-world projects using JavaScript, React, and Redux. Gained hands-on experience with component-based architecture, RESTful API integration, state management, and responsive UI development, while collaborating via GitHub workflows.",
    skills: [
      "HTML",
      "CSS",
      "Postman",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "React JS",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 1,
    img: cognizantLogo,
    role: "React Developer",
    company: "Cognizant Technology Solutions",
    date: "October 2023 – April 2024",
    desc: "Trained in modern frontend technologies and best practices for scalable web applications. Worked with React.js, Redux, and Zustand for state management, implementing dynamic routing, optimized component rendering, and reusable UI patterns using Tailwind CSS.",
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
    id: 2,
    img: varconsLogo,
    role: "Fullstack Developer Intern",
    company: "Varcons Technologies",
    date: "July 2022 – October 2022",
    desc: "Contributed to fullstack development projects using React.js for the frontend and Django for the backend. Designed and implemented responsive user interfaces, integrated REST APIs, and developed CRUD functionalities. Collaborated in UI/UX design using Figma and followed agile development workflows.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Figma"],
  },
  {
    id: 3,
    img: aqmenzLogo,
    role: "AI/ML Intern",
    company: "Aqmenz Automation",
    date: "Apr 2022 – July 2022",
    desc: "Worked on a data-driven AI/ML project analyzing and modeling COVID-19 data. Applied statistical methods and machine learning algorithms to predict case trends and evaluate intervention impacts. Focused on time series forecasting, EDA and classification models for real-world health analytics applications.",
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
    description: "MobileMart is a fully responsive e-commerce web app for buying smartphones, built with React, Vite, Firebase Authentication, and CrudCrud API. It features user authentication, cart and wishlist management, a contact form, and a mobile-first design — offering users a smooth and secure shopping experience across devices.",
    image: mobilemartLogo,
    tags: ["React JS", "Context API", "CSS Modules", "Bootstrap", "Firebase", "Crud-Crud"],
    github: "https://github.com/MdAbdullahAnwar/E-Commerce-Site",
    webapp: "https://e-commerce-site-opal-tau.vercel.app/",
  },
  {
    id: 5,
    title: "Expense Tracker - Budget App",
    description: "Expense Tracker is a modern React app with Firebase for real-time data and auth. Users can sign up, manage profiles, categorize expenses, and unlock premium features like dark mode and CSV export — built using Context API and tested with React Testing Library and Jest.",
    image: expensetrackerLogo,
    tags: ["React JS", "Redux", "CSS", "Firebase", "Jest"],
    github: "https://github.com/MdAbdullahAnwar/Expense-Tracker-Site",
    webapp: "https://expense-tracker-site-xi.vercel.app/",
  },
];
