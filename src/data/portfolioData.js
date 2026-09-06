// Personalized Portfolio data for Dika Ahmad Imamul Mutakin

export const heroData = {
  name: "Dika Ahmad Imamul Mutakin",
  title: "Frontend Developer",
  subtitle: "Building clean, responsive, and user-friendly web interfaces. Passionate about turning Figma designs into functional, high-performance code.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "dika.ahmad@example.com"
  }
};

export const aboutData = {
  introduction: "I am a Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces. I hold a strong interest in UI/UX design using Figma and love the process of transforming high-fidelity design layouts into functional, interactive websites. By merging aesthetic details with coding principles, I strive to create high-performance applications.",
  learningJourney: "Currently focusing on deepening my expertise in React, Tailwind CSS, JavaScript (ES6+), and modern frontend development techniques, including performance tuning and responsive design architecture.",
  careerGoals: "My immediate goal is to secure a Frontend Developer internship where I can apply my skills, contribute to real-world products, and learn from experienced engineers while pushing my boundaries in web development.",
  timeline: [
    {
      year: "2025 - Present",
      title: "Interactive Web Development & Projects",
      institution: "Self-Directed Learning & Academy",
      description: "Building responsive React applications, implementing interactive seat-selection checkouts, dynamic inventory catalogs, and refining design translation workflows."
    },
    {
      year: "2024 - 2025",
      title: "Frontend Development Bootcamp",
      institution: "Tech Innovation Institute",
      description: "Intensive program covering modern JavaScript framework structures, CSS grids/flexbox, state management, and component architecture."
    },
    {
      year: "2023 - 2024",
      title: "UI/UX Design Course",
      institution: "Creative Arts Academy",
      description: "Focused on user personas, wireframing, high-fidelity interactive prototyping, design systems, and Figma typography."
    }
  ]
};

export const skillsData = {
  frontend: [
    { name: "HTML", iconName: "html", level: 95 },
    { name: "CSS", iconName: "css", level: 90 },
    { name: "JavaScript", iconName: "javascript", level: 88 },
    { name: "React", iconName: "react", level: 82 },
    { name: "Tailwind CSS", iconName: "tailwind", level: 92 }
  ],
  design: [
    { name: "Figma", iconName: "figma", level: 85 }
  ],
  tools: [
    { name: "Git", iconName: "git", level: 45 },
    { name: "GitHub", iconName: "github", level: 40 },
    { name: "VS Code", iconName: "vscode", level: 90 }
  ]
};

export const projectsData = [
  {
    id: "project-motostock",
    title: "MotoStock Spare Parts Platform",
    description: "A fully responsive motorcycle spare parts e-commerce website designed to provide an intuitive catalog browsing experience. It features categories filtering, instantaneous product search, and reactive shopping cart states.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Context API"],
    features: [
      "Interactive Product Catalog with instant grid sorting",
      "Dynamic Search Bar filtering through stock items",
      "Real-time reactive Shopping Cart management",
      "Fully responsive mobile-to-desktop grid systems"
    ],
    imagePath: "/assets/project-motostock.png",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    responsiveness: "Mobile, Tablet, Desktop Optimized"
  },
  {
    id: "project-tickets",
    title: "Concert Ticket Booking Platform",
    description: "A modern, highly engaging event booking experience featuring interactive layouts. Users can choose live listings, drill into seat mappings, proceed through checkout states, and review history.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
    features: [
      "Interactive SVG Seat Selection grid map",
      "Dynamic Checkout UI with secure form checks",
      "Fluid state updates and booking confirmation receipts",
      "Smooth layout slide animations on event click"
    ],
    imagePath: "/assets/project-tickets.png",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    responsiveness: "Fluid Adaptive layout, Mobile-first touch targets"
  }
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Advanced React & Component Design",
    issuer: "Tech Innovation Institute",
    date: "Dec 2025",
    imagePath: ""
  },
  {
    id: "cert-2",
    title: "UI/UX Design Masterclass",
    issuer: "Creative Arts Academy",
    date: "Aug 2025",
    imagePath: ""
  },
  {
    id: "cert-3",
    title: "Responsive Web Design & Web Accessibility",
    issuer: "W3 Consortium Training",
    date: "Mar 2025",
    imagePath: ""
  }
];
