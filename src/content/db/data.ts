import type { Project } from "../../interfaces/interface.ts"; 
import type { Language } from "../../interfaces/interface.ts";
import type { Skill } from "../../interfaces/interface.ts";
import type { LevelScore } from "../../interfaces/interface.ts";
import type { LevelRank } from "../../interfaces/interface.ts";

//EXPORTACIÓN DE PROYECTOS
// category: "cybersecurity" | "development"  → define en qué opción aparece cada proyecto
export const proyectos: Project[] = [
  {
    category: "development",
    pageTitle: "UNAH System",
    slug: "/unah",
    titulo: "University System - UNAH",
    descripcion:
      "I developed a complete web system for academic management at the National Autonomous University of Honduras (UNAH), using HTML, CSS, JavaScript, PHP and MySQL. The project covered everything from user interface design to backend implementation and database integration, applying agile development principles and software architecture best practices.",
    link: "",
    img: "/unah.png"
  },
  {
    category: "development",
    pageTitle: "eBay System",
    slug: "/ebay",
    titulo: "eBay System",
    descripcion:
      "I took part in the design and development of an eBay-inspired application using HTML, CSS, JavaScript, Node.js and Oracle SQL. The project focused on understanding how the frontend, backend and database integrate, while applying team collaboration and version control practices.",
    link: "https://github.com/RX19/ebay_project.git",
    img: "/EbayInicioSesion.png"
  },
  {
    category: "development",
    pageTitle: "School of Dentistry",
    slug: "/odontologia",
    titulo: "System for the School of Dentistry - UNAH",
    descripcion:
      "The project was already well underway when I joined, working on the backend with JavaScript and Node.js, implementing modules, data handling and endpoints. We worked from Figma mockups using the RAD (Rapid Application Development) methodology, consolidating good practices in architecture and modular design.",
    link: "",
    img: "/odontologia.png"
  },
  {
    category: "development",
    pageTitle: "CV Generator",
    slug: "/curriculum",
    titulo: "CV Generator",
    descripcion:
      "I developed a Java application with JavaFX that automates the creation of personalized CVs. This project allowed me to deepen my understanding of object-oriented programming logic, graphical user interfaces and data structures.",
    link: "https://github.com/MiltonAlvarado/Tarea2-programacion.git",
    img: "/curriculum.jpg"
  },
  {
    category: "development",
    pageTitle: "Neural Network - Face Recognition",
    slug: "/redneuronal",
    titulo: "Neural Network for Face Recognition",
    descripcion:
      "I developed a neural network in Python from scratch, without using any artificial intelligence libraries. Through this project I applied mathematical logic and structured thinking so the system could reach over 90% accuracy in face recognition. It was an experience that reaffirmed my ability to build complex solutions with a clear focus, always maintaining the efficiency, consistency and technical judgment that set my work apart.",
    link: "https://github.com/MiltonAlvarado/Reconocimiento-de-rostros.git",
    img: "/ReconocimientoFacial1.png"
  },
  {
    category: "development",
    pageTitle: "Building a Programming Language",
    slug: "/lenguajeprogramacion",
    titulo: "Building a Programming Language",
    descripcion:
      "A programming language built from scratch using Python, BNF/EBNF grammars and the Lark parser, creating a complete structure that includes a formal grammar file, a parser, a custom Transformer to traverse and execute the AST, a semantic actions module, regular expression handling and a working interpreter capable of running programs written in the new language. This project allowed me to deepen my knowledge of compiler theory, formal language design and the hands-on construction of my own language.",
    link: "https://github.com/D-AlessandroRodriguez/ProyectoCompiladores.git",
    img: "/bnf.jpeg"
  },
  {
    category: "development",
    pageTitle: "Azure Deployment with Terraform",
    slug: "/terraform",
    titulo: "Azure Deployment with Terraform",
    descripcion:
      "I implemented a complete architecture on Microsoft Azure using Terraform as infrastructure as code, automatically provisioning containerized Web Apps, APIs and Azure SQL Database, Azure Key Vault for secrets management, and a data environment made up of Data Lake Gen2, Azure Databricks and Azure Data Factory, achieving reproducible, scalable and easy-to-maintain deployments in the cloud.",
    link: "https://github.com/MiltonAlvarado/arquitectura_terraform_flota_vehiculos.git",
    img: "/terraform.png"
  },
  {
    category: "development",
    pageTitle: "Pokemon API",
    slug: "/poke",
    titulo: "Pokemon API with Azure and Terraform",
    descripcion:
      "I developed a report generator based on PokeAPI, where users request Pokémon CSV reports and the system processes each request in the background. The architecture uses a Next.js interface on Azure App Service, a FastAPI API that orchestrates the requests, a Python Azure Function connected to Blob Storage to generate and store the files, plus Azure SQL Database and Terraform to define the infrastructure. In this version, the challenge was to extend that foundation to support full report deletion, enrich the CSVs with each Pokémon's stats and abilities, and add an option to choose the number of records, while keeping the system stable and deployed on Azure.",
    link: "https://ui-pokequequepcaiii-dev.azurewebsites.net/",
    img: "/Arquitectura.png"
  },
];




// EXPORTACIÓN DE LevelScore

export const levelScore: LevelScore = {
  "Enthusiast": 20,
  "Basic": 25,
  "Intermediate": 40,
  "Proficient": 58,
  "Advanced": 72,
  "Expert": 90,
  "Native": 100
};


//Exportacion de MiVida

export const vision =
  "I am preparing to specialize in cybersecurity, with a focus on best practices, standards and hardening. " +
  "I have earned complementary cybersecurity certifications, which have allowed me to strengthen my understanding of digital defense and the design of more secure systems.";

export const education =
  "I am currently studying Systems Engineering at the National Autonomous University of Honduras (UNAH) and am close to graduating. Throughout this process, I have maintained outstanding academic performance, a reflection of my genuine interest in learning, improving and applying my knowledge to projects with real impact.";

export const hobbies =
  "Outside of work, I enjoy staying active and disciplined. I practice boxing with demanding training, complemented by running sessions and gym workouts, which help me strengthen both mind and body. I follow a strict, balanced diet free of sugar, soft drinks, bread and salt, with the goal of improving my physical performance and keeping a mindset focused on excellence and consistency.";

export const emprendimiento =
  "Alongside my career in web development, I am an entrepreneur and currently run a small venture selling high-performance business laptops, offering equipment at highly competitive and affordable prices." +
  " This project grew out of my interest in bringing technology closer to more people, and in the future I plan to launch a free laptop giveaway program to support university students, especially at UNAH, and anyone who needs a tool to boost their learning or work.";



// EXPORTACIÓN DE LevelRank

export const levelRank: LevelRank = {
  "Expert": 6,
  "Advanced": 5,
  "Proficient": 4,
  "Intermediate": 3,
  "Enthusiast": 2,
  "Basic": 1,
  "Native": 7 
};


// EXPORTACION DE LENGUAJES

export const languages: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Enthusiast" }
];



// EXPORTACIÓN DE HABILIDADES
export const skills: Skill[] = [
  {
    title: "Cibersecurity",
    items: [
      { name: "SOC Monitoring and SIEM", level: "Proficient" },
      { name: "Threat Detection & Log Analysis", level: "Proficient" },
      { name: "Vulnerability Assessment", level: "Proficient" },
      { name: "Network Security Analysis", level: "Proficient" },
      { name: "Incident Triage & Response", level: "Intermediate" },
      { name: "Endpoint Security & Monitoring", level: "Intermediate" },
      { name: "Threat Intelligence & Hunting", level: "Intermediate" },
      { name: "Offensive Security / Penetration Testing", level: "Enthusiast" }
    ]
  },
  {
    "title": "Networking",
    "items": [
      { "name": "Routing & Switching", "level": "Advanced" },
      { "name": "Network Configuration & Troubleshooting", "level": "Advanced" },
      { "name": "VLANs & Network Segmentation", "level": "Advanced" },
      { "name": "Subnetting & IP Addressing", "level": "Advanced" },
      { "name": "TCP/IP & Network Protocols", "level": "Advanced" },
      { "name": "Dynamic Routing (OSPF, EIGRP, BGP)", "level": "Proficient" },
      { "name": "ACLs & Traffic Filtering", "level": "Proficient" },
      { "name": "DHCP & Network Services", "level": "Proficient" },
      { "name": "NAT / PAT", "level": "Intermediate" },
      { "name": "Packet Analysis & Network Diagnostics", "level": "Enthusiast" }
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Active Directory Domain Services", level: "Advanced" },
      { name: "Domain Name System (DNS)", level: "Advanced" },
      { name: "Internet Information Services", level: "Proficient" },
      { name: "Windows Server", level: "Advanced" },
      { name: "Group Policy (GPO)", level: "Advanced" },
      { name: "Linux Administration", level: "Proficient" },
      { name: "Terraform", level: "Enthusiast" }
    ]
  },
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Enthusiast" },
      { name: "Astro", level: "Intermediate" },
      { name: "ASP.NET Web Forms", level: "Advanced" }
    ]
  },
  {
    title: "Backend Development",
    items: [
      { name: "Java", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "PHP", level: "Enthusiast" },
      { name: "VB.NET", level: "Advanced" },
      { name: ".NET Framework", level: "Intermediate" },
    ]
  },
  {
    title: "Database",
    items: [
      { name: "PL/SQL (Oracle)", level: "Proficient" },
      { name: "MySQL", level: "Intermediate" }
    ]
  },
  {
    title: "Data Science / AI / Analytics",
    items: [
      { name: "Pandas", level: "Proficient" },
      { name: "Scikit-learn", level: "Proficient" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "Power BI", level: "Enthusiast" }
    ]
  },
  {
    title: "Tools & Version Control",
    items: [
      { name: "Wazuh", level: "Proficient" },
      { name: "Metasploit", level: "Proficient" },
      { name: "Visual Studio Code", level: "Advanced" },
      { name: "Visual Studio", level: "Advanced" },
      { name: "Oracle SQL Developer", level: "Intermediate" },
      { name: "Git / GitHub", level: "Proficient" },
      { name: "Code::Blocks", level: "Intermediate" },
      { name: "Anaconda", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "Draw.io", level: "Intermediate" }
    ]
  }
];