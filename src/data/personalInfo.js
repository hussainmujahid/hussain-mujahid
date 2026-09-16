// src/data/personalInfo.js (Complete Updated Version)

export const personalInfo = {
  name: "Mujahid Hussain",
  title: "Front-End Developer & Computer Science Lecturer",
  tagline: "6.5+ years of experience in React.js, JavaScript, TypeScript, and academic instruction",
  email: "hosain.mujahid@gmail.com",
  phone: "+86 19854251625",
  location: "Qingdao, China",
  wechat: "Jalbane",
  whatsapp: "+923073108577",
  nationality: "Pakistani",
  github: "https://github.com/mujahidhussain",
  linkedin: "https://linkedin.com/in/mujahidhussain",
  
  // Current Education - Master's Degree
  currentEducation: {
    degree: "Master of Science in Computer Science and Technology",
    institution: "Ocean University of China",
    location: "Qingdao, China",
    period: "08/2024 - Present",
    researchArea: "Image Super-Resolution",
    thesis: "Advanced Deep Learning Methods for Image Super-Resolution",
    supervisor: "Professor Wang Xiaodong"
  },
  
  about: `Dynamic Computer Science professional with 6.5+ years of experience in both Software Engineering and Academic Instruction. Currently pursuing Master's degree in Computer Science and Technology at Ocean University of China, specializing in Image Super-Resolution research. Combines strong technical skills in Front-end Development (React.js, JavaScript, TypeScript) with a passion for teaching and mentoring future technologists. Proven ability to simplify complex concepts through engaging, hands-on approaches while developing scalable web applications. Committed to fostering student success through innovative teaching methods and real-world technical expertise.`,
  
  researchInterests: [
    "Image Super-Resolution",
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
    "Medical Image Processing"
  ],
  
  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Ant Design", "Electron.js"],
    backend: ["Python", "PHP", "REST APIs", "GraphQL"],
    database: ["MySQL", "MongoDB", "MySQLite3", "SQLite"],
    research: ["Deep Learning", "Computer Vision", "Image Processing", "PyTorch", "TensorFlow", "OpenCV"],
    tools: ["Git", "Postman", "Figma", "Jira", "VS Code", "Docker", "Agile/Scrum"],
  },
  
  achievements: [
    {
      title: "Huawei Cup - 7th China Graduate AI Innovation Competition",
      award: "Third Prize - International Group",
      project: "SafeAgingAI: Intelligent Monitoring for Elderly Safety",
      team: "Hussain Mujahid, Esa Muhammad, Meghwar Manesh",
      supervisor: "Professor Yuezun Li",
      date: "2025",
      certificateNumber: "2025GJ010"
    },
    {
      title: "Silver Medalist",
      award: "Bachelor of Science in Software Engineering",
      institution: "University of Sindh",
      date: "2018"
    },
    {
      title: "Final Year Second Best Project Award",
      institution: "University of Sindh",
      date: "2018"
    }
  ],
  
  experience: [
    {
      company: "Government Junior School",
      position: "School Teacher",
      period: "01/2023 - Present",
      location: "Canada (Remote)",
      description: "Developed responsive single-page applications (SPAs) using React.js, JavaScript (ES6+), and TypeScript.",
      achievements: [
        "Developed responsive SPAs using React.js, JavaScript (ES6+), and TypeScript, ensuring seamless performance across web and mobile platforms",
        "Leveraged component-based architecture to build reusable UI components (hooks, custom contexts), reducing code redundancy by 40%",
        "Optimized front-end performance through React.memo, lazy loading, and efficient state management (Context API/Redux)",
        "Ensured cross-browser compatibility and accessibility compliance (WCAG) using modern CSS-in-JS libraries",
        "Collaborated in Agile workflows to integrate RESTful APIs/GraphQL endpoints, enhancing dynamic data rendering"
      ]
    },
    {
      company: "Precise Technology - Canada (Remote)",
      position: "Front-End Developer",
      period: "01/2023 - 05/2023",
      location: "Canada (Remote)",
      description: "Developed responsive single-page applications (SPAs) using React.js, JavaScript (ES6+), and TypeScript.",
      achievements: [
        "Developed responsive SPAs using React.js, JavaScript (ES6+), and TypeScript, ensuring seamless performance across web and mobile platforms",
        "Leveraged component-based architecture to build reusable UI components (hooks, custom contexts), reducing code redundancy by 40%",
        "Optimized front-end performance through React.memo, lazy loading, and efficient state management (Context API/Redux)",
        "Ensured cross-browser compatibility and accessibility compliance (WCAG) using modern CSS-in-JS libraries",
        "Collaborated in Agile workflows to integrate RESTful APIs/GraphQL endpoints, enhancing dynamic data rendering"
      ]
    },
    {
      company: "IBA Community College - Sukkur",
      position: "Lecturer - Computer Science",
      period: "10/2019 - 12/2022",
      location: "Khairpur, Pakistan",
      description: "Taught computer science courses and mentored students in software development.",
      achievements: [
        "Met with students outside of class to answer questions, explain difficult concepts and address individual concerns",
        "Developed accurate course descriptions and selected high-quality learning materials for course consistency",
        "Designed engaging lesson plans and interactive activities to foster student software development concepts",
        "Maintained a positive classroom environment encouraging critical thinking, creativity, and teamwork",
        "Participated in professional development workshops to stay updated with latest advancements",
        "Implemented innovative teaching methodologies that improved student engagement by 35%"
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Computer Science and Technology",
      institution: "Ocean University of China",
      location: "Qingdao, China",
      period: "08/2024 - Present",
      researchArea: "Image Super-Resolution",
      achievements: [
        "Research focus: Deep Learning based Image Super-Resolution techniques",
        "Huawei Cup 3rd Prize Winner - AI Innovation Competition",
        "Working on advanced neural networks for image enhancement"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Sindh",
      location: "Jamshoro, Pakistan",
      period: "01/2015 - 12/2018",
      achievements: [
        "Silver Medalist - Academic Excellence Award",
        "Recipient of Final Year Second Best Project Award"
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "Nexus E-commerce Marketplace",
      description: "Complete multi-vendor e-commerce platform with real-time CRUD, store management, payment processing, and customer dashboard. Supports multiple stores, product management, order tracking, and admin analytics.",
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
      demo: "https://nexus-marketplace.vercel.app",
      github: "https://github.com/mujahidhussain/nexus-marketplace",
      featured: true,
      keyFeatures: [
        "Multi-store support with separate admin dashboards",
        "Real-time CRUD operations with WebSocket",
        "Product management with image upload (up to 6 images)",
        "Shopping cart and secure checkout process",
        "Order tracking and payment management",
        "Super admin dashboard for platform management",
        "Customer registration and order history",
        "Dark/light mode with theme persistence"
      ]
    },
    {
      id: 2,
      name: "Cloth Inventory Shop - Desktop Application",
      description: "Desktop inventory management system for cloth shops built with Electron.js. Features include product management, stock tracking, sales recording, customer management, and comprehensive reporting.",
      technologies: ["Electron.js", "React.js", "SQLite", "Tailwind CSS", "Chart.js", "PDF generation"],
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600",
      demo: "https://github.com/mujahidhussain/cloth-inventory-desktop",
      github: "https://github.com/mujahidhussain/cloth-inventory-desktop",
      featured: true,
      keyFeatures: [
        "Cross-platform desktop application (Windows/Mac/Linux)",
        "Complete inventory management (add, edit, delete products)",
        "Real-time stock tracking and low stock alerts",
        "Sales recording with invoice generation",
        "Customer management and purchase history",
        "Daily, monthly, and yearly sales reports",
        "PDF invoice generation and printing",
        "User authentication with role-based access",
        "Data backup and restore functionality",
        "Dark mode support with system preference detection"
      ]
    },
    {
      id: 3,
      name: "SafeAgingAI - Elderly Safety Monitoring",
      description: "AI-powered intelligent monitoring system for elderly safety. Awarded 3rd Prize in Huawei Cup - 7th China Graduate AI Innovation Competition (International Group).",
      technologies: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
      demo: "#",
      github: "https://github.com/mujahidhussain/safeaging-ai",
      featured: true,
      award: "Huawei Cup - 3rd Prize (International Group)",
      certificateNumber: "2025GJ010",
      keyFeatures: [
        "Real-time elderly activity monitoring",
        "Fall detection and emergency alerts",
        "Behavior pattern analysis",
        "Health parameter tracking",
        "AI-powered anomaly detection",
        "Caregiver notification system"
      ]
    },
    {
      id: 4,
      name: "Image Super-Resolution Research",
      description: "Advanced deep learning research project focused on enhancing image resolution using state-of-the-art neural network architectures. Part of Master's thesis at Ocean University of China.",
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "CNN", "GANs", "Transformer"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
      demo: "#",
      github: "https://github.com/mujahidhussain/image-super-resolution",
      featured: true,
      keyFeatures: [
        "SRCNN, VDSR, EDSR, SRGAN implementations",
        "Attention mechanisms for better reconstruction",
        "Perceptual loss and adversarial training",
        "Benchmark testing on Set5, Set14, BSD100",
        "Quantitative metrics (PSNR, SSIM)",
        "Real-world image enhancement"
      ]
    },
    {
      id: 5,
      name: "Student Attendance System",
      description: "Comprehensive student attendance system with real-time tracking, reporting, and multi-device accessibility.",
      technologies: ["PHP", "Bootstrap", "JavaScript", "MySQL", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
      demo: "https://attendance-system.demo",
      github: "https://github.com/mujahidhussain/attendance-system",
      featured: false,
      keyFeatures: [
        "Real-time attendance marking",
        "Student and course management",
        "Automated report generation",
        "Parent/guardian notifications",
        "Multiple report formats (PDF/Excel)",
        "Dashboard with analytics"
      ]
    },
    {
      id: 6,
      name: "TaskFlow Pro",
      description: "Project management tool with Kanban boards, real-time updates, and team collaboration features.",
      technologies: ["React.js", "Node.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      demo: "https://taskflow-pro.vercel.app",
      github: "https://github.com/mujahidhussain/taskflow",
      featured: false,
      keyFeatures: [
        "Drag-and-drop Kanban boards",
        "Real-time task updates",
        "Team collaboration tools",
        "Task assignments and due dates",
        "Activity logging",
        "File attachments"
      ]
    }
  ],
  
  languages: [
    { name: "Urdu", level: "Native", proficiency: "Mother tongue" },
    { name: "English", level: "C2 Proficient", proficiency: "Listening, Reading, Writing, Speaking - All C2" },
    { name: "Chinese", level: "HSK 3", proficiency: "Intermediate - Conversational" }
  ],
  
  certifications: [
    "Huawei Cup - 3rd Prize, China Graduate AI Innovation Competition (2025)",
    "Silver Medalist - University of Sindh (2018)",
    "Final Year Second Best Project Award (2018)",
    "Professional Development Workshops in CS Education"
  ]
};