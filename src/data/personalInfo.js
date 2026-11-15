export const personalInfo = {
  name: "Mujahid Hussain",
  title: "AI/CV Research Engineer & CS Instructor",
  tagline: "MSc CS (CSC Scholar, GPA 3.91) | Medical Image Super-Resolution · Generative Models · PyTorch | 5+ years teaching & research",
  email: "hussainmujahid@stu.ouc.edu.cn",
  phone: "+86 19854251625",
  location: "Qingdao, China",
  wechat: "Jalbanee",
  whatsapp: "+92 3073108577",

  // Social
  github: "https://github.com/hussainmujahid",
  linkedin: "https://linkedin.com/in/hussainmujahid",
  orcid: "https://orcid.org/0009-0002-4980-7967",
  twitter: "", // leave empty if not active

  // About (used in About.jsx)
  about: "I build deep learning systems for medical image super-resolution and restoration, focusing on training-free and single-step generative approaches (Rectified Flow, Flow Matching, geometric priors). My work achieves zero-shot cross-modality generalization (e.g., trained on CT to zero-shot to MRI) with SOTA PSNR/SSIM. I also have 5+ years of experience teaching CS/AI courses including Python, ML, Computer Vision, and Software Engineering.",

  // Education
  education: [
    {
      degree: "Masters in Computer Technology (EQF Level 7)",
      institution: "Ocean University of China",
      location: "Qingdao, China",
      period: "Sep 2024 – Jul 2027 (expected)",
      researchArea: "Image Super-Resolution using Deep Learning (Medical Imaging)",
      achievements: [
        "Chinese Government Scholarship (CSC) — Full scholarship",
        "GPA: 3.91/4.00",
        "First-author of 2 JCR Q1 manuscripts (ESWA, Pattern Recognition)",
      ],
    },
    {
      degree: "B.S. in Software Engineering (EQF Level 6)",
      institution: "University of Sindh",
      location: "Jamshoro, Pakistan",
      period: "Jan 2015 – March 2019",
      achievements: [
        "Silver Medalist",
        "Final Year Second Best Project Award (Student Attendance System)",
      ],
    },
  ],

  // Experience
  experience: [
    {
      position: "Subject Specialist — Computer Science",
      company: "IBA Community College, Khairpur",
      period: "Oct 2019 – Aug 2024",
      description: "Taught software engineering and programming courses; developed curriculum and mentored students.",
      achievements: [
        "Designed engaging lesson plans for Python, ML, and Software Engineering",
        "Conducted one-on-one sessions and maintained a positive classroom environment",
        "Participated in professional development workshops on CS education",
      ],
    },
    {
      position: "Lab Instructor",
      company: "Newtech Learning Institute, Pakistan",
      period: "Apr 2019 – Oct 2019",
      description: "Taught programming languages and computer operator courses.",
      achievements: [
        "Delivered hands-on lab sessions for multiple programming languages",
      ],
    },
    {
      position: "Front-End Developer (Remote)",
      company: "Precise Technology, Canada",
      period: "Jan 2023 – Aug 2023",
      description: "Developed responsive SPAs using React.js, TypeScript, and modern frontend tooling.",
      achievements: [
        "Built reusable UI components with hooks and custom contexts",
        "Optimized performance via React.memo, lazy loading, and state management",
        "Collaborated in Agile workflows integrating RESTful APIs/GraphQL",
      ],
    },
  ],

  // Projects (only what's in your CV + real portfolio links)
  projects: [
    {
      id: 1,
      name: "GeoSR: Geometric Super-Resolution",
      description: "Training-free medical image SR using SE(2) Sub-Riemannian geometry. Zero-shot cross-modality generalization (CT to MRI). Under review at Pattern Recognition (JCR Q1).",
      technologies: ["PyTorch", "Python", "SimpleITK", "Medical Imaging", "Geometric Deep Learning"],
      image: "/assets/geosr.png", // add a result comparison image
      github: "https://github.com/hussainmujahid/geosr-demo",
      demo: "https://github.com/hussainmujahid/geosr-demo",
      featured: true,
    },
    {
      id: 2,
      name: "MedRF-SR: Rectified Flow for MRI SR",
      description: "Single-step 2.5D residual rectified flow for medical MRI super-resolution. Major revision at ESWA (JCR Q1, IF 9.4).",
      technologies: ["PyTorch", "Rectified Flow", "Diffusion Models", "MRI"],
      image: "/assets/medrf-sr.png",
      github: "https://github.com/hussainmujahid/medrf-sr",
      demo: "https://github.com/hussainmujahid/medrf-sr",
      featured: true,
    },
    {
      id: 3,
      name: "SafeAging AI",
      description: "AI-based elderly safety monitoring system using computer vision and deep learning. Third Prize, 7th China Graduate AI Innovation Competition (Huawei Cup).",
      technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      image: "/assets/safeaging-ai.png",
      github: "https://github.com/hussainmujahid/safeaging-ai",
      demo: "https://github.com/hussainmujahid/safeaging-ai",
      featured: true,
    },
    {
      id: 4,
      name: "Duly Noted Designs",
      description: "Collaborative team project. I served as Frontend Developer, building responsive UI components.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "/assets/duly-noted-design.png",
      github: "https://duly-noted-designs.vercel.app/",
      demo: "https://duly-noted-designs.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      name: "Sterne Doc (React)",
      description: "React-based document management application. Collaborative project — I implemented UI components and API integration.",
      technologies: ["React", "REST API", "JavaScript"],
      image: "/assets/sterne-doc.png",
      github: "https://github.com/umairtahiri/sterne-doc-react",
      demo: "https://github.com/umairtahiri/sterne-doc-react",
      featured: false,
    },
    {
      id: 6,
      name: "Reactrix",
      description: "React component marketplace with premium copy-paste components. Built with Next.js, Tailwind CSS, and Framer Motion.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
      image: "/assets/reactrix.png",
      github: "https://reactrix-sage.vercel.app/",
      demo: "https://reactrix-sage.vercel.app/",
      featured: false,
    },
    {
      id: 7,
      name: "Student Attendance System (SAS)",
      description: "Web-based attendance system. Best Project Award, University of Sindh. Built with PHP, MySQL, Bootstrap.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "/assets/sas.png",
      github: "https://github.com/hussainmujahid/sas",
      demo: "https://github.com/hussainmujahid/sas",
      featured: false,
    },
  ],

  // Skills (from CV)
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
    backend: ["PHP", "RESTful APIs", "GraphQL"],
    database: ["MySQL", "MongoDB"],
    tools: ["PyTorch", "Python", "Linux", "OpenCV", "SimpleITK", "Git", "LaTeX", "Gradio", "Streamlit"],
  },

  // Achievements
  achievements: [
    {
      title: "7th China Graduate AI Innovation Competition (Huawei Cup)",
      award: "Third Prize (International Group)",
      institution: "Huawei Cup",
      date: "2025",
      project: "SafeAging AI: Intelligent Monitoring for Elderly Safety",
      certificateNumber: "2025GJ010",
      team: "International Group",
      supervisor: "Prof. Li Yuezun (OUC)",
    },
    {
      title: "University of Sindh",
      award: "Silver Medalist — B.S. Software Engineering",
      institution: "University of Sindh",
      date: "2019",
    },
    {
      title: "University of Sindh",
      award: "Final Year Second Best Project Award (SAS)",
      institution: "University of Sindh",
      date: "2018",
    },
    {
      title: "Chinese Government Scholarship (CSC)",
      award: "Full Scholarship for Master's Studies",
      institution: "China Scholarship Council",
      date: "2024–2027",
    },
  ],

  // Languages
  languages: [
    { name: "English", level: "C2", proficiency: "Proficient" },
    { name: "Urdu", level: "Native", proficiency: "Native Speaker" },
    { name: "Chinese", level: "A1", proficiency: "Basic" },
  ],
};