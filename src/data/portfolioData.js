// Data Portofolio - Dika Ahmad Imamul Mutakin

export const heroData = {
  name: "Dika Ahmad Imamul Mutakin",
  title: "Frontend Developer",
  description: "Saya sedang belajar dan mengembangkan website menggunakan teknologi frontend seperti React, Vite, dan Tailwind CSS.",
  avatar: "/assets/avatar.jpg",
  socials: {
    github: "https://github.com/Dikasu-shi",
    linkedin: "https://www.linkedin.com/in/dika-ahmad-imamul-mutakin-646319421/",
    instagram: "https://www.instagram.com/dikkkaaasu/",
    email: "dikaim104@gmail.com"
  }
};

export const aboutData = {
  description: "Saya adalah mahasiswa yang sedang belajar di bidang frontend development. Saya tertarik membuat website dengan tampilan yang sederhana, rapi, dan mudah digunakan. Portfolio ini berisi beberapa project yang saya buat selama proses belajar dan mengembangkan kemampuan frontend saya."
};

export const techStackData = {
  languagesAndFrameworks: [
    { name: "HTML", iconName: "html" },
    { name: "CSS", iconName: "css" },
    { name: "JavaScript", iconName: "javascript" },
    { name: "React", iconName: "react" },
    { name: "Tailwind CSS", iconName: "tailwind" }
  ],
  tools: [
    { name: "Vite", iconName: "vite" },
    { name: "Git", iconName: "git" },
    { name: "GitHub", iconName: "github" },
    { name: "VS Code", iconName: "vscode" },
    { name: "Figma", iconName: "figma" }
  ]
};

export const projectsData = [
  {
    id: "motostock",
    title: "MotoStock",
    description: "MotoStock adalah website untuk pengelolaan dan penjualan spare part sepeda motor. Project ini memiliki beberapa role pengguna seperti Admin, Kasir, dan Customer.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    imagePath: "/assets/project-motostock.png",
    demoUrl: "https://motostock-dikasu.up.railway.app/",
    githubUrl: "https://github.com/Dikasu-shi"
  },
  {
    id: "tiketkonser",
    title: "TiketKonser",
    description: "TiketKonser adalah website frontend untuk melihat event konser, memilih tiket, dan melakukan proses pemesanan hingga checkout.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
    imagePath: "/assets/project-tickets.png",
    demoUrl: "https://tiketkonser-dika.vercel.app/",
    githubUrl: "https://github.com/Dikasu-shi"
  },
  {
    id: "cineverse",
    title: "Cineverse",
    description: "Cineverse adalah website movie discovery untuk mencari dan melihat informasi film. Pengguna dapat mencari film, melihat detail, menemukan film serupa, dan menyimpan film ke watchlist.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "TMDB API"],
    imagePath: "/assets/project-cineverse.jpg",
    demoUrl: "https://cineverse-dikasu.vercel.app/",
    githubUrl: "https://github.com/Dikasu-shi/Cineverse"
  }
];
