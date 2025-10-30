import type { Project } from "../../interfaces/interface.ts"; 
import type { Language } from "../../interfaces/interface.ts";
import type { Skill } from "../../interfaces/interface.ts";
import type { LevelScore } from "../../interfaces/interface.ts";
import type { LevelRank } from "../../interfaces/interface.ts";

//EXPORTACIÓN DE PROYECTOS
export const proyectos: Project[] = [
  {
    pageTitle: "Sistema UNAH",
    slug: "/unah",
    titulo: "Sistema de Universidad - UNAH",
    descripcion:
      "Desarrollé un sistema web completo para la gestión académica de la Universidad Nacional Autónoma de Honduras (UNAH), utilizando HTML, CSS, JavaScript, Php y MySQL. Este proyecto abarcó desde el diseño de la interfaz de usuario hasta la implementación del backend y la integración con la base de datos, aplicando principios de desarrollo ágil y mejores prácticas en arquitectura de software.",
      link: "",
      img: "/unah.png"
    
  },
  {
    pageTitle: "Sistema Ebay",
    slug: "/ebay",
    titulo: "Sistema eBay",
    descripcion:
      "Participé en el diseño y desarrollo de una aplicación inspirada en eBay, utilizando HTML, CSS, JavaScript, Node.js y Oracle SQL. Fue un proyecto orientado a comprender la integración entre frontend, backend y bases de datos, aplicando prácticas de colaboración en equipo y control de versiones.",
    link: "https://github.com/RX19/ebay_project.git",
    img: "/EbayInicioSesion.png"
  },

  {
    pageTitle: "Facultad de Odontología",
    slug: "/odontologia",
    titulo: "Sistema para la Facultad de Odontología - UNAH",
    descripcion:
      "Proyecto que ya estaba avanzado cuando me involucré al integrarme en el backend utilizando JavaScript con Node.js, implementando módulos, control de datos y endpoints. Trabajamos con maquetas en Figma y metodología RAD (Rapid Application Development), consolidando buenas prácticas de arquitectura y diseño modular.",
    link: "",
    img: "/odontologia.png"
  },

  {
    pageTitle: "Generador de Currículum",
    slug: "/curriculum",
    titulo: "Generador de Currículum",
    descripcion:
      "Desarrollé una aplicación en Java con JavaFX que automatiza la creación de CVs personalizados. Este proyecto me permitió profundizar en la lógica de programación orientada a objetos, manejo de interfaz gráfica y estructuras de datos.",
    link: "https://github.com/MiltonAlvarado/Tarea2-programacion.git",
    img: "/curriculum.jpg"
  },
  
  {
    pageTitle: "Red Neuronal - Reconocimiento de Rostros",
    slug: "/redneuronal",
    titulo: "Red neuronal para reconocimiento de rostros",
    descripcion:
      "Desarrollé una red neuronal en Python, trabajando desde cero sin el uso de librerías de inteligencia artificial. A través de este proyecto apliqué lógica matemática y pensamiento estructurado para que el sistema alcanzara más del 90 % de precisión en el reconocimiento de rostros. Fue una experiencia que reafirmó mi capacidad para construir soluciones complejas con enfoque claro, manteniendo siempre la eficiencia, la coherencia y el sentido técnico que distinguen mi trabajo.",
    link: "https://github.com/MiltonAlvarado/Reconocimiento-de-rostros.git"  ,
    img: "/ReconocimientoFacial.png"
  },
  {
    pageTitle: "Creación de Lenguaje de Programación",
    slug: "/lenguajeprogramacion",
    titulo: "Creación de Lenguaje de Programación",
    descripcion:
      "Lenguaje de programación desarrollado desde cero, aplicando conceptos fundamentales de compiladores e intérpretes. Este proyecto me permitió profundizar en la teoría de lenguajes formales, sintaxis y semántica, así como en la implementación práctica de un lenguaje funcional y eficiente.",
    link: "https://github.com/D-AlessandroRodriguez/ProyectoCompiladores.git",
    img: "/bnf.jpeg"
  }
];




// EXPORTACIÓN DE LevelScore

export const levelScore: LevelScore = {
  "Entusiasta": 20,
  "Bajo": 25,
  "Medio": 40,
  "Alto": 58,
  "Avanzado": 72,
  "Experto": 90,
  "Nativo": 100
};


//Exportacion de MiVida

export const vision =
  "Me estoy preparando para especializarme en el área de ciberseguridad, con enfoque en buenas prácticas, estándares y hardening."+  
  "He obtenido certificaciones complementarias en ciberseguridad, que me han permitido fortalecer mi comprensión sobre la defensa digital y el diseño de sistemas más seguros.";

export const education =
  "Actualmente, curso la carrera de Ingeniería en Sistemas en la Universidad Nacional Autónoma de Honduras (UNAH), próxima a concluir. Durante este proceso, he mantenido un rendimiento sobresaliente, reflejo de mi interés genuino por aprender, mejorar y aplicar mis conocimientos en proyectos con impacto real.";

export const hobbies =
  "Fuera del ámbito profesional, disfruto mantenerme activo y disciplinado. Practico boxeo con entrenamiento exigente, complementado con sesiones de running y entrenamiento de gimnasio, lo que me permite fortalecer tanto la mente como el cuerpo. Sigo una dieta estricta y equilibrada libre de azúcar, refrescos, pan y sal, con el propósito de mejorar mi rendimiento físico y mantener una mentalidad enfocada en la excelencia y la constancia.";

export const emprendimiento =
  "Además de mi carrera en el desarrollo web, soy emprendedor y actualmente dirijo una pequeña iniciativa dedicada a la venta de laptops ejecutivas de alto rendimiento, ofreciendo equipos a precios altamente competitivos y accesibles." +
  " Este proyecto nació de mi interés por acercar la tecnología a más personas y, en el futuro, planeo implementar un sistema de sorteos de laptops gratuitas para apoyar a estudiantes universitarios, especialmente dentro de la UNAH, y a cualquier persona que necesite una herramienta para impulsar su aprendizaje o su trabajo.";



// EXPORTACIÓN DE LevelRank

export const levelRank: LevelRank = {
  "Experto": 6,
  "Avanzado": 5,
  "Alto": 4,
  "Medio": 3,
  "Entusiasta": 2,
  "Bajo": 1,
  "Nativo": 7 
};


// EXPORTACION DE LENGUAJES

export const languages: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
  { name: "Francés", level: "Entusiasta" }
];



// EXPORTACIÓN DE HABILIDADES
export const skills: Skill[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", level: "Avanzado" },
      { name: "CSS", level: "Avanzado" },
      { name: "JavaScript", level: "Alto" },
      { name: "Figma", level: "Alto" },
      { name: "Draw.io", level: "Alto" },
      { name: "Tailwind CSS", level: "Entusiasta" },
      { name: "Astro", level: "Entusiasta" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Java", level: "Avanzado" },
      { name: "Node.js", level: "Medio" },
      { name: "C++", level: "Medio" },
      { name: "PHP", level: "Entusiasta" }
    ]
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "SQL (Oracle)", level: "Alto" },
      { name: "MySQL", level: "Medio" }
    ]
  },
  {
    title: "Ciencia de Datos / IA / Analytics",
    items: [
      { name: "Pandas", level: "Alto" },
      { name: "Scikit-learn", level: "Alto" },
      { name: "NumPy", level: "Medio" },
      { name: "Matplotlib", level: "Medio" },
      { name: "Power BI", level: "Bajo" }
    ]
  },
  {
    title: "Herramientas y Control de Versiones",
    items: [
      { name: "VS Code", level: "Avanzado" },
      { name: "Git / GitHub", level: "Alto" },
      { name: "Code::Blocks", level: "Medio" }
    ]
  }
];