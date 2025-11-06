"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
  const skills = {
    Languages: ["Java", "Python", "PHP", "JavaScript", "HTML5,", "CSS3"],
    frameworks: ["ReactJS", "NextJS", "PyQt5/6", "LibGDX", "Gradle", "Maven"],
    databases: ["MySQL", "SQL Server", "Apache"],
    tools: ["Git", "JUnit", "Pytest", "RESTful APIs", "Hibernate"],
  };
  //Array of objects, each with key values with array of strings or just string
  const projects = [
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
    },
    {
      title: "Habit Tracker Website",
      type: "Client Project",
      technologies: ["PHP", "MySQL", "CSS"],
      description:
        "A full-stack web app with user sessions, cookie handling, and password hashing",
      highlights: [
        "Implemented secure authentication system",
        "Database integration with validation",
        "User session and cookie management",
      ],
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
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <nav>
        Eddie Idersaikhan
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            )
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div>
          <h1 className="mb-4">Hi, I'm Enkhbaatar Idersaikhan</h1>
          <h2>Software Engineering Student | Full-Stack Developer</h2>
          <p>
            Third-year Computer Science student at Griffith College Dublin with
            a passion for building real-world applications. Experienced in Java,
            Python, and Web Development.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => scrollToSection("projects")}
            >
              View my Work
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="https://github.com/SylerEdd">GitHub</a>
            <a href="https://www.linkedin.com/in/eddie-idersaikhan-865755291/">
              LinkedIn
            </a>
            <a href="mailto:eddie.idersaikhan@gmail.com">Email</a>
          </div>
        </div>
      </section>
      {/* About section */}
      <section>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h2>About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                I am a third-year Computer Science student at Griffith College
                Dublin with strong skills in Java, Python, Web Development, and
                Databases. I've built multiple real-world applications including
                a Java-based platformer game and Python GUI tools.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I am eager to contribute to a software development team through
                an internship or entry-level position to build scalable
                solutions and grow my engineering skills.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Core Competencies</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Clear communication of technical concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Problem solving & critical thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Adaptability to new technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Teamwork & collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Leadership experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
    </div>
  );
}
