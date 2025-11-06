"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";

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
    frameworks: [
      "ReactJS",
      "NextJS",
      "PyQt5/6",
      "Tailwind",
      "LibGDX",
      "Gradle",
      "Maven",
    ],
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
      type: "Self Project",
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
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            Eddie Idersaikhan
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
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <Card className="p-6">
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
            </Card>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2>Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3>Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3>Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3>Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3>Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Project Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2>Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2>Education</h2>
          </div>

          <Card className="p-6">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 className="mb-2">BSc (Hons): Computing Science</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Griffith College - Dublin
                </p>
              </div>
              <Badge variant="secondary" className="border border-gray-400">
                Third Year
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="text-sm mb-3">Key Modules:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Object Oriented Programming</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Relational Databases</li>
                  <li>• Client and Server Side Web Development</li>
                  <li>• System Analysis and Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm mb-3 opacity-0">More:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Software Development</li>
                  <li>• Operating System Design</li>
                  <li>• Network and Data Communications</li>
                  <li>• HCI & GUI Programming</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2>Experience</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <div>
                  <h3>Supervisor</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Morehampton - Dublin, Ireland
                  </p>
                </div>
                <Badge variant="outline">10/2024 - 07/2025</Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lead a team of 10+ staff during peak hours for 150+ guests.
                Supervise, mentor, and train team on customer service standards,
                POS systems, and health and safety protocols.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <div>
                  <h3>Bartender</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Mary's Bar and Hardware - Dublin, Ireland
                  </p>
                </div>
                <Badge variant="outline">01/2022 - 10/2024</Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Handled up to 200 customers per shift while ensuring service
                accuracy and quality. Maintained cash/POS transactions and
                optimized shift transitions.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <div>
                  <h3>Voluneteer Cameraman & Video Editor</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Living Word Christian Church - Ulaanbaatar, Mongolia
                  </p>
                </div>
                <Badge variant="outline">08/2017 - 12/2021</Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Filmed and edited event videos using Adobe Premiere Pro &
                Photoshop. Manageed camera gear, video planning, and design of
                Sunday Mass brochures.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2>Get In Touch With Me</h2>
          </div>
          <Card className="p-8 max-w-3xl mx-auto">
            <p className="text-center mb-8 text-gray-700 dark:text-gray-300">
              I'm currently looking for internship and entry-level
              opportunities. Feel free to reach out if you'd like to discuss
              potential collaborations or opportunities!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a
                  href="mailto:eddie.idersaikhan@gmail.com"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors"
                >
                  eddie.idersaikhan@gmail.com
                </a>
                <a
                  href="tel: +353892151195"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +353 89 215 1195
                </a>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  Dublin 6, Ireland
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="https://github.com/SylerEdd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/eddie-idersaikhan-865755291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
              <a href="mailto:eddie.idersaikhan@gmail.com">Send Me an Email</a>
            </div>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            © 2025 Enkhbaatar Idersaikhan.Built with NextJS and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
