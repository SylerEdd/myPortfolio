"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
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
import { link } from "fs";

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
      link: "https://github.com/SylerEdd/PlatformGame",
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
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90  backdrop-blur-sm z-50 border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg"
            >
              Eddie Idersaikhan
            </motion.div>
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
                      ? "text-blue-600 "
                      : "text-gray-600  hover:text-gray-900 "
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button*/}
            <button
              className="md:hidden"
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
                  className="block w-full text-left py-2 text-sm text-gray-600 hover:text-gray-900 "
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
            className="w-full h-full object-cover opacity-10 "
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h1 className="mb-4">
              Hi, I'm{" "}
              <span className="text-blue-600 ">Enkhbaatar Idersaikhan</span>
            </h1>
            <h2 className="mb-6 text-gray-600 ">
              Software Engineering Student | Full-Stack Developer
            </h2>
            <p className="text-lg max-w-2xl mb-8 text-gray-600 ">
              Third-year Computer Science student at Griffith College Dublin
              with a passion for building real-world applications. Experienced
              in Java, Python, and Web Development.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={() => scrollToSection("projects")} size="lg">
                View my Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 ">
              <a
                href="https://github.com/SylerEdd"
                target="_blank"
                rel="noopener noreferre"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eddie-idersaikhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:eddie.idersaikhan@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 transition color"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition color"
              >
                <FileUser className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About section */}
      <section id="about" className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <User className="w-8 h-8 text-blue-600" />
              <h2>About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-gray-700 ">
                  I am a third-year Computer Science student at Griffith College
                  Dublin with strong skills in Java, Python, Web Development,
                  and Databases. I've built multiple real-world applications
                  including a Java-based platformer game and Python GUI tools.
                </p>
                <p className="text-gray-700 ">
                  I am eager to contribute to a software development team
                  through an internship or entry-level position to build
                  scalable solutions and grow my engineering skills.
                </p>
              </div>

              <Card className="p-6">
                <h3 className="mb-4">Core Competencies</h3>
                <ul className="space-y-2 text-gray-700 ">
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
              <Code2 className="w-8 h-8 text-blue-600" />
              <h2>Skills & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-6 h-6 text-blue-600" />
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
                  <Layout className="w-6 h-6 text-blue-600" />
                  <h3>Frameworks & Libraries</h3>
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
                  <Database className="w-6 h-6 text-blue-600" />
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
                  <Code2 className="w-6 h-6 text-blue-600" />
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
          </motion.div>
        </div>
      </section>
      {/* Project Section */}
      <section id="projects" className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-8 h-8 text-blue-600" />
              <h2>Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2>Education</h2>
            </div>

            <Card className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="mb-2">BSc (Hons): Computing Science</h3>
                  <p className="text-gray-600 ">Griffith College - Dublin</p>
                </div>
                <Badge variant="secondary">Third Year</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="text-sm mb-3">Key Modules:</h4>
                  <ul className="text-sm text-gray-600  space-y-1">
                    <li>• Object Oriented Programming</li>
                    <li>• Data Structures and Algorithms</li>
                    <li>• Relational Databases</li>
                    <li>• Client and Server Side Web Development</li>
                    <li>• System Analysis and Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-3 opacity-1">More:</h4>
                  <ul className="text-sm text-gray-600  space-y-1">
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
      <section id="experience" className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2>Experience</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3>Supervisor</h3>
                    <p className="text-gray-600 ">
                      The Morehampton - Dublin, Ireland
                    </p>
                  </div>
                  <Badge variant="outline">10/2024 - 07/2025</Badge>
                </div>
                <p className="text-sm text-gray-600 ">
                  Lead a team of 10+ staff during peak hours for 150+ guests.
                  Supervise, mentor, and train team on customer service
                  standards, POS systems, and health and safety protocols.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3>Bartender</h3>
                    <p className="text-gray-600 ">
                      The Mary's Bar and Hardware - Dublin, Ireland
                    </p>
                  </div>
                  <Badge variant="outline">01/2022 - 10/2024</Badge>
                </div>
                <p className="text-sm text-gray-600 ">
                  Handled up to 200 customers per shift while ensuring service
                  accuracy and quality. Maintained cash/POS transactions and
                  optimized shift transitions.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <div>
                    <h3>Voluneteer Cameraman & Video Editor</h3>
                    <p className="text-gray-600 ">
                      Living Word Christian Church - Ulaanbaatar, Mongolia
                    </p>
                  </div>
                  <Badge variant="outline">08/2017 - 12/2021</Badge>
                </div>
                <p className="text-sm text-gray-600 ">
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
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2>Get In Touch</h2>
            </div>
            <Card className="p-8 max-w-3xl mx-auto">
              <p className="text-center mb-8 text-gray-700 ">
                I'm currently looking for internship and entry-level
                opportunities. Feel free to reach out if you'd like to discuss
                potential collaborations or opportunities!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <a
                    href="mailto:eddie.idersaikhan@gmail.com"
                    className="flex items-center gap-3 text-gray-700  hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>eddie.idersaikhan@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700 ">
                    <MapPin className="w-5 h-5" />
                    <span>Dublin, Ireland</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700  hover:text-blue-400 transition-colors"
                  >
                    <FileUser className="w-5 h-5" />
                    <span>Resume</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700 ">
                    <MapPin className="w-5 h-5" />
                    <span>Dublin, Ireland</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://github.com/SylerEdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700  hover:text-blue-600  transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eddie-idersaikhan-865755291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700  hover:text-blue-600  transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200  text-center">
                <Button asChild size="lg">
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
      <footer className="py-8 bg-gray-50  border-t border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 ">
          <p>
            © 2025 Enkhbaatar Idersaikhan. Built with NextJS and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
