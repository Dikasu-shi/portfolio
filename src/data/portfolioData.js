// Portfolio data for Dika Ahmad Imamul Mutakin - Frontend Developer

export const heroData = {
  name: "Dika Ahmad Imamul Mutakin",
  title: "Frontend Developer",
  subtitle: "Undergraduate student passionate about building clean, responsive, and user-friendly web interfaces. Focused on turning Figma designs into functional, accessible frontend code.",
  socials: {
    github: "https://github.com/Dikasu-shi",
    linkedin: "https://www.linkedin.com/in/dika-ahmad-imamul-mutakin-646319421/",
    instagram: "https://www.instagram.com/dikkkaaasu/",
    email: "dikaim104@gmail.com"
  }
};

export const aboutData = {
  introduction: "I am an aspiring Frontend Developer with a strong interest in UI/UX implementation and modern web design. I enjoy crafting clean, intuitive, and responsive interfaces that prioritize user experience. My passion lies in bridging the gap between design prototypes in Figma and functional, high-performance web components in React.",
  learningJourney: "Currently deepening my understanding of React, Tailwind CSS, JavaScript (ES6+), component-driven architecture, and responsive web optimization through hands-on practice and personal projects.",
  coreValues: [
    {
      title: "Clean & Component-Driven",
      description: "Writing structured, reusable components with maintainable CSS and clear state logic."
    },
    {
      title: "Responsive & Adaptive",
      description: "Ensuring smooth and consistent user experiences across mobile, tablet, and desktop screens."
    },
    {
      title: "Design Fidelity",
      description: "Respecting spacing, typography hierarchy, and UI details designed in Figma."
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
    title: "MotoStock",
    tagline: "Spare Parts Catalog & Inventory Interface",
    description: "A responsive motorcycle spare parts web interface designed for an intuitive catalog browsing experience. Features category filtering, dynamic product search, and reactive shopping cart states.",
    technologies: ["JavaScript", "Tailwind CSS", "HTML5", "Responsive UI"],
    features: [
      "Interactive Product Catalog with instant category filtering",
      "Dynamic Search Bar for quick item lookup",
      "Reactive shopping cart state updates",
      "Mobile-friendly touch targets and flexible grid layout"
    ],
    imagePath: "/assets/project-motostock.png",
    githubUrl: "https://github.com/Dikasu-shi",
    demoUrl: "",
    responsiveness: "Mobile, Tablet & Desktop Optimized"
  },
  {
    id: "project-tickets",
    title: "TiketKonser",
    tagline: "Concert Ticket Booking Interface",
    description: "A modern concert ticket booking web interface featuring event listings, event detail overviews, interactive seat selection grid UI, and structured checkout flow.",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    features: [
      "Interactive SVG-based seat selection grid",
      "Structured checkout UI with clear step progression",
      "Dynamic state management for ticket selections",
      "Smooth layout transitions and responsive viewports"
    ],
    imagePath: "/assets/project-tickets.png",
    githubUrl: "https://github.com/Dikasu-shi",
    demoUrl: "",
    responsiveness: "Fluid Adaptive Layout"
  }
];
