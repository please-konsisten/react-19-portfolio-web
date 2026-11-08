/**
 * Semua konten portfolio ada di file ini — edit di sini, halaman ikut berubah.
 * Bagian bertanda "EDIT" berisi placeholder yang perlu kamu ganti dengan data asli.
 */

export const profile = {
  name: "Athalla Cahyo Nugroho",
  firstName: "Athalla",
  lastName: "Cahyo Nugroho",
  roles: ["Fullstack Developer", "Frontend Engineer", "Backend Developer", "Deep Learning Enthusiast"],
  intro:
    "I am a Fullstack Developer with experience as both a Frontend and Backend Developer, building responsive web interfaces and reliable server-side applications. I take responsibility seriously and always welcome new challenges. Currently, I am deepening my skills in data analysis using Python and Excel, driven by a constant desire to learn and to deliver meaningful contributions to every project I take part in.",
  education: "Informatics Engineering, Universitas Negeri Semarang",
  gpa: "3.75",
  location: "Indonesia",
  cv: "/cv.pdf",
};

// EDIT: ganti dengan tautan asli kamu
export const socials = [
  { label: "Email", href: "mailto:you@example.com", icon: "mail" as const },
  { label: "GitHub", href: "https://github.com/your-username", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" as const },
];

export const stats = [
  { value: "3.75", label: "GPA, Informatics Engineering" },
  { value: "99.9%", label: "Accuracy on thesis model" },
  { value: "9K+", label: "Images in the thesis dataset" },
  { value: "4", label: "Core stacks: React, Vue, Express, Laravel" },
];

export type ProjectCategory = "Web" | "AI / ML" | "Data";

export interface Project {
  title: string;
  category: ProjectCategory;
  summary: string;
  highlights: string[];
  tags: string[];
  icon: "brain" | "chart" | "cart" | "briefcase";
  gradient: string; // tailwind gradient classes
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Grapevine Leaf Disease Classifier",
    category: "AI / ML",
    summary:
      "Undergraduate thesis: a deep learning classifier that detects grapevine leaf diseases from photos, deployed as an interactive Streamlit web app.",
    highlights: [
      "Fine-tuned EfficientNetB0 with a CBAM attention module",
      "Two-stage freeze / fine-tune training strategy",
      "≈99.94% accuracy on 4 classes (9,027-image dataset)",
    ],
    tags: ["Python", "EfficientNetB0", "CBAM", "Streamlit", "Deep Learning"],
    icon: "brain",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    featured: true,
  },
  {
    title: "Career Recommendation with Generative AI",
    category: "Web",
    summary:
      "Final capstone at Maxy Academy: a web application that recommends career paths using generative AI, built from the frontend side.",
    highlights: [
      "Responsive interface and clean user flow",
      "Integrated generative AI responses into the UI",
      "Collaborated in a cross-functional capstone team",
    ],
    tags: ["React", "Generative AI", "REST API", "Tailwind CSS"],
    icon: "briefcase",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    featured: true,
  },
  {
    title: "Tetouan City Power Consumption Forecast",
    category: "Data",
    summary:
      "Predictive analytics project forecasting electricity consumption in Tetouan City, comparing tree-based regression models.",
    highlights: [
      "Random Forest and LightGBM regressors",
      "Error analysis on out-of-distribution periods",
      "Submission for the Dicoding Machine Learning class",
    ],
    tags: ["Python", "Random Forest", "LightGBM", "Pandas", "scikit-learn"],
    icon: "chart",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    featured: true,
  },
  {
    title: "E-Shop Fullstack Starter",
    category: "Web",
    summary:
      "An e-commerce starter wired end to end: React front end, Express API and MongoDB, packaged with Docker Compose.",
    highlights: [
      "React + Express + MongoDB architecture",
      "Containerised with Docker Compose",
      "Ready base for catalog, cart and auth features",
    ],
    tags: ["React", "Express", "MongoDB", "Docker"],
    icon: "cart",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
];

export type ExperienceType = "Work" | "Education" | "Research";

export interface Experience {
  type: ExperienceType;
  role: string;
  org: string;
  period: string;
  description: string;
  points?: string[];
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    type: "Research",
    role: "Thesis Author & Journal Contributor",
    org: "Universitas Negeri Semarang",
    period: "2025 — 2026",
    description:
      "Researched deep learning-based grapevine leaf disease classification and prepared the work as a journal article for Recursive Journal of Informatics (RJI).",
    points: [
      "Fine-tuned EfficientNetB0 with CBAM, evaluated at ≈99.94% accuracy",
      "Deployed the model as a Streamlit web application",
      "Wrote the article with a co-author in English and Indonesian",
    ],
    tags: ["Deep Learning", "Python", "Academic Writing"],
  },
  {
    type: "Work",
    role: "Frontend Developer",
    org: "Maxy Academy",
    period: "Sep 2024 — Dec 2024",
    description:
      "Developed a Career Recommendation application using Generative AI for the Final Capstone Project.",
    points: [
      "Built responsive screens and the main recommendation flow",
      "Worked with teammates across frontend, backend and AI",
    ],
    tags: ["React", "Generative AI", "Teamwork"],
  },
  {
    type: "Education",
    role: "B.Sc. Informatics Engineering",
    org: "Universitas Negeri Semarang — FMIPA",
    period: "2022 — Aug 2026",
    description:
      "Graduated on 26 August 2026 with a GPA of 3.75, focusing on software development, machine learning and data analysis.",
    tags: ["GPA 3.75", "Class of 2022"],
  },
];

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: "monitor" | "server" | "brain" | "wrench";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Fast, accessible, responsive interfaces.",
    icon: "monitor",
    items: ["React JS", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "HTML & CSS"],
  },
  {
    title: "Backend",
    blurb: "Reliable APIs and data layers.",
    icon: "server",
    items: ["Express", "Laravel", "Node.js", "REST API", "MongoDB", "Authentication"],
  },
  {
    title: "Data & AI",
    blurb: "From messy data to working models.",
    icon: "brain",
    items: ["Python", "Deep Learning", "EfficientNet", "scikit-learn", "LightGBM", "Streamlit", "Excel"],
  },
  {
    title: "Tools & Workflow",
    blurb: "Shipping habits that keep projects healthy.",
    icon: "wrench",
    items: ["Git & GitHub", "Docker", "Nginx", "ESLint", "AI-assisted development"],
  },
];

export const learning = ["Data analysis with Python", "Advanced Excel", "Machine learning in production"];

// Marquee di Home
export const marqueeSkills = [
  "React JS", "Vue", "TypeScript", "Tailwind CSS", "Express", "Laravel", "MongoDB",
  "Python", "Deep Learning", "Streamlit", "Docker", "Git",
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  skills: string[];
}

// EDIT: ganti / tambahkan sertifikat asli kamu (url = tautan verifikasi kredensial)
export const certificates: Certificate[] = [
  {
    title: "Frontend Developer — Final Capstone Project",
    issuer: "Maxy Academy",
    date: "Dec 2024",
    skills: ["React", "Generative AI"],
  },
  {
    title: "Machine Learning Class",
    issuer: "Dicoding Indonesia",
    date: "2026",
    skills: ["Predictive Analytics", "scikit-learn"],
  },
  {
    title: "Your Next Certificate",
    issuer: "Issuer name",
    date: "Year",
    credentialId: "ID-0000",
    url: "#",
    skills: ["Skill"],
  },
];
