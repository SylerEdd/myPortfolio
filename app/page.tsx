"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Layout,
  Terminal,
  GraduationCap,
  Briefcase,
  User,
  X,
  Menu,
  FileUser,
} from "lucide-react";
import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiQt,
  SiGradle,
  SiApachemaven,
  SiMysql,
  SiApache,
  SiGit,
  SiHibernate,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { link } from "fs";
import { IconType } from "react-icons";
import { div, image } from "framer-motion/client";

// Added interface to get autocompletion and make data structures predictable.
interface Skill {
  name: string;
  color: string;
  icon: IconType;
}

interface SkillCategory {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const projectsRef = useRef<HTMLDivElement>(null);
  const [openImage, setOpenImage] = useState<string | null>(null);

  //Scroll animation for timeline bar
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  //Objects with key values that hold an arraylist of strings
  const skills: SkillCategory = {
    languages: [
      { name: "Java", color: "text-orange-400", icon: FaJava },
      {
        name: "Python",
        color: "text-blue-400",
        icon: SiPython,
      },
      {
        name: "PHP",
        color: "text-purple-400",
        icon: SiPhp,
      },
      {
        name: "JavaScript",
        color: "text-yellow-400",
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        color: "text-orange-500",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        color: "text-blue-500",
        icon: SiCss3,
      },
    ],
    frameworks: [
      {
        name: "ReactJS",
        color: "text-cyan-400",
        icon: SiReact,
      },
      {
        name: "NextJS",
        color: "text-white",
        icon: SiNextdotjs,
      },
      {
        name: "PyQt5/6",
        color: "text-green-400",
        icon: SiQt,
      },
      {
        name: "Tailwind",
        color: "text-blue-400",
        icon: SiTailwindcss,
      },
      {
        name: "LibGDX",
        color: "text-red-400",
        icon: Code2,
      },
      {
        name: "Gradle",
        color: "text-teal-400",
        icon: SiGradle,
      },
      {
        name: "Maven",
        color: "text-pink-400",
        icon: SiApachemaven,
      },
    ],

    databases: [
      {
        name: "MySQL",
        color: "text-blue-400",
        icon: SiMysql,
      },
      {
        name: "SQL Server",
        color: "text-red-400",
        icon: FaDatabase,
      },
      {
        name: "Apache",
        color: "text-purple-400",
        icon: SiApache,
      },
      {
        name: "MongoDB",
        color: "text-green-400",
        icon: SiMongodb,
      },
    ],
    tools: [
      {
        name: "Git",
        color: "text-orange-500",
        icon: SiGit,
      },
      {
        name: "JUnit",
        color: "text-green-500",
        icon: FaJava,
      },
      {
        name: "Pytest",
        color: "text-blue-500",
        icon: SiPython,
      },
      {
        name: "REST APIs",
        color: "text-indigo-400",
        icon: Code2,
      },
      {
        name: "Hibernate",
        color: "text-yellow-500",
        icon: SiHibernate,
      },
    ],
  };
  //Array of objects, each with key values with array of strings or just string
  const projects = [
    {
      title: "Portfolio Site",
      type: "Self Project",
      technologies: ["NextJS", "Tailwind CSS"],
      description:
        "Built a modern personal portfolio website to showcase my projects, skills and experience. Designed with a responsive layout, smooth animation and an interactive UI for a professional look.",
      highlights: [
        "Developed a fully responsive UI with modern design",
        "Implemented smooth animations using Framer Motion",
        "Deployed the website with optimized performance and SEO",
      ],
      link: "https://github.com/SylerEdd/myPortfolio",
      image: "/images/portfolio.png",
    },
    {
      title: "2D Platformer Game",
      type: "Group Project",
      technologies: ["Java", "LibGDX", "Gradle"],
      description:
        "Made the game core (maps, physics, character mechanics) using LibGDX and enhanced character development with level-up progression.",
      highlights: [
        "Developed core game mechanics and physics engine",
        "Implemented level progression system",
        "Learned Gradle and LibGDX framework in depth",
      ],
      link: "https://github.com/SylerEdd/PlatformGame",
      image: "/images/platformer.png",
    },
    {
      title: "Pictionary Game",
      type: "Self Project",
      technologies: ["Python", "PyQt6", "Pytest"],
      description:
        "Created a GUI-based Pictionary game that allows multiplayer drawing and guessing.",
      highlights: [
        "Applied OOP principle and unit testing",
        "Built multiplayer functionality",
        "Designed interactive GUI with PyQt6",
      ],
      link: "https://github.com/SylerEdd/Pictionary-in-Python",
      image: "/images/pictionary.png",
    },
    {
      title: "Habit Tracker Website",
      type: "Self Project",
      technologies: ["PHP", "MySQL", "CSS"],
      description:
        "A full-stack web app with user sessions, cookie handling, and password hashing",
      highlights: [
        "Implemented secure authentication system",
        "Database integration with validation",
        "User session and cookie management",
      ],
      link: "https://github.com/SylerEdd/Habit-Tracker-website-with-backend-PHP-",
      image: "/images/habit.png",
    },
    {
      title: "Stock Trade Calculator",
      type: "College Project",
      technologies: ["Python", "PyQt6"],
      description:
        "GUI application that calculates trade profits/losses using dataset-driven logic and API integration",
      highlights: [
        "Integrated external API for stock data",
        "Implemented calculation algorithms",
        "Built user-friendly GUI interface",
      ],
      link: "https://github.com/SylerEdd/StockTradeCalculator",
      image: "/images/stock.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm z-50 border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg text-white"
            >
              Eddie Idersaikhan
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400 "
                      : "text-gray-300  hover:text-white "
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button*/}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm text-gray-300 hover:text-white "
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MjM0OTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Coding workspace"
            className="w-full h-full object-cover opacity-5 "
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h1 className="mb-2 text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hi, I'm{" "}
              <span className="text-purple-400 ">Eddie Idersaikhan</span>
            </h1>
            <h2 className="mb-4 text-gray-200">
              Software Engineering Student | Full-Stack Developer
            </h2>
            <p className="text-sm max-w-2xl mb-8 text-gray-300 ">
              Third-year Computer Science student at Griffith College Dublin
              with a passion for building applications and websites. Experienced
              in Java, Python, and React.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                View my Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="bg-gradient-to-r border-purple-400 text-purple-400 hover:bg-purple-950"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r border-purple-400 text-purple-400 hover:bg-purple-950"
                asChild
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 "
                >
                  <FileUser className="w-4 h-4" />
                  View Resume
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-600">
              <a
                href="https://github.com/SylerEdd"
                target="_blank"
                rel="noopener noreferre"
                className="flex items-center text-gray-400 gap-2 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eddie-idersaikhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 gap-2 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href="mailto:eddie.idersaikhan@gmail.com"
                className="flex items-center text-gray-400 gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <User className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-gray-300 ">
                  I am a third-year Computer Science student at Griffith College
                  Dublin with strong skills in Java, Python, Web Development,
                  and Databases. I've built multiple real-world applications
                  including a Java-based platformer game and Python GUI tools.
                </p>
                <p className="text-gray-300 ">
                  I am eager to contribute to a software development team
                  through an internship or entry-level position to build
                  scalable solutions and grow my engineering skills.
                </p>
              </div>

              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <h3 className="mb-4 text-white">Core Competencies</h3>
                <ul className="space-y-2 text-gray-300 ">
                  <li className="flex items-start gap-2">
                    <Code2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>
                      Full-Stack web development using modern frameworks and
                      databases
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layout className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>
                      GUI application development with Python and PyQt6
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Terminal className="w-5 h-5 text-purple-400 mt-1" />
                    <span>
                      Game Development using Java and LibGDX framework
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>
                      Database design and management with MySQL and SQL Server
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">Skills & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-6 h-6 text-purple-400" />
                  <h3 className="text-white">Languages</h3>
                </div>
                <div className="space-y-2">
                  {skills.languages.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                        <span className={`text-sm ${skill.color}`}>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Layout className="w-6 h-6 text-purple-400" />
                  <h3 className="text-white">Frameworks & Libraries</h3>
                </div>
                <div className="space-y-2">
                  {skills.frameworks.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                        <span className={`text-sm ${skill.color}`}>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-white">Databases</h3>
                </div>
                <div className="space-y-2">
                  {skills.databases.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                        <span className={`text-sm ${skill.color}`}>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-white">Tools</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                        <span className={`text-sm ${skill.color}`}>
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 bg-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">Featured Projects</h2>
            </div>

            {/* Timeline Container */}
            <div className="relative" ref={projectsRef}>
              {/* Vertical Timeline Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-900/30 h-full hidden md:block">
                <motion.div
                  className="w-full bg-gradient-to-b from-purple-500 to-pink-500 origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>

              {/* Projects */}
              <div className="space-y-16">
                {projects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="relative"
                    >
                      <div
                        className={`flex flex-col md:flex-row gap-8 items-center ${
                          !isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              onClick={() => setOpenImage(project.image)}
                              className="relative rounded-lg w-full h-64 object-cover border-2 border-purple-500/30"
                            />
                          </div>
                        </div>

                        {/* Middle Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"
                          />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2">
                          <ProjectCard {...project} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          {openImage && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center"
              onClick={() => setOpenImage(null)}
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setOpenImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-purple-300 transition"
                >
                  <X className="w-8 h-8" />
                </button>

                <img
                  src={openImage}
                  className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-lg"
                  alt="Preview"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">Education</h2>
            </div>

            <Card className="p-6 bg-slate-800/80 border-purple-800/30">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-white">BSc (Hons): Computer Science</h3>
                  <p className="text-gray-400 ">Griffith College - Dublin</p>
                </div>
                <Badge
                  variant="outline"
                  className="border-purple-400 text-purple-400"
                >
                  Third Year
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-purple-400 mb-2">Key Modules:</h4>
                  <ul className="text-sm text-gray-300  space-y-1">
                    <li>• Object Oriented Programming</li>
                    <li>• Data Structures and Algorithms</li>
                    <li>• Relational Databases</li>
                    <li>• Client and Server Side Web Development</li>
                    <li>• System Analysis and Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-2 opacity-1">More:</h4>
                  <ul className="text-sm text-gray-300  space-y-1">
                    <li>• Software Development</li>
                    <li>• Operating System Design</li>
                    <li>• Network and Data Communications</li>
                    <li>• HCI & GUI Programming</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">Experience</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-white">Supervisor</h3>
                    <p className="text-gray-300 ">
                      The Morehampton - Dublin, Ireland
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-400"
                  >
                    10/2024 - 07/2025
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 ">
                  Lead a team of 10+ staff during peak hours for 150+ guests.
                  Supervise, mentor, and train team on customer service
                  standards, POS systems, and health and safety protocols.
                </p>
              </Card>
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-white">Bartender</h3>
                    <p className="text-gray-300 ">
                      The Mary's Bar and Hardware - Dublin, Ireland
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-400"
                  >
                    01/2022 - 10/2024
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 ">
                  Handled up to 200 customers per shift while ensuring service
                  accuracy and quality. Maintained cash/POS transactions and
                  optimized shift transitions.
                </p>
              </Card>
              <Card className="p-6 bg-slate-800/80 border-purple-800/30">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-white">
                      Volunteer Cameraman & Video Editor
                    </h3>
                    <p className="text-gray-300 ">
                      Living Word Christian Church - Ulaanbaatar, Mongolia
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-400"
                  >
                    08/2017 - 12/2021
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 ">
                  Filmed and edited event videos using Adobe Premiere Pro &
                  Photoshop. Manageed camera gear, video planning, and design of
                  Sunday Mass brochures.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-purple-400" />
              <h2 className="text-white">Get In Touch</h2>
            </div>
            <Card className="p-8 max-w-3xl mx-auto bg-slate-800/80 border-purple-800/30">
              <p className="text-center mb-8 text-gray-300 ">
                I'm currently looking for internship and entry-level
                opportunities. Feel free to reach out if you'd like to discuss
                potential collaborations or opportunities!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <a
                    href="mailto:eddie.idersaikhan@gmail.com"
                    className="flex items-center gap-3 text-gray-300  hover:text-purple-400 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <span>eddie.idersaikhan@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300 ">
                    <MapPin className="w-6 h-6" />
                    <span>Dublin, Ireland</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/SylerEdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300  hover:text-purple-400  transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eddie-idersaikhan-865755291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300  hover:text-purple-400  transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300  hover:text-purple-400  transition-colors"
                  >
                    <FileUser className="w-6 h-6" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-purple-800/30 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 hover:from-green-400 text-white"
                >
                  <a
                    href="mailto:eddie.idersaikhan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-slate-800/50 border-t border-purple-800/30 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400 ">
          <p>
            © 2025 Enkhbaatar Idersaikhan. Built with NextJS and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
