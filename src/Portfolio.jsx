import { useState } from 'react';
import Profile from './assets/Mee.jpg'

// Icon components
const SunIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm5-2.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z"/>
  </svg>
);


const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };



const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // path inside public/
  link.download = "Javid Ibrahim's Resume.pdf"; // optional: custom file name
  link.click();
};


const skills = {
  Frontend: [
    { name: 'React', image: '/react-logo.png' },
    { name: 'TypeScript', image: '/typescript.png' },
    { name: 'Tailwind CSS', image: '/tailwindcss.png' },
    { name: 'Next.js', image: '/nextjs.png' },
    { name: 'JavaScript', image: '/js.png' },
    { name: 'Redux', image: '/redux.png' },
  ],
  Backend: [
    { name: 'Node.js', image: '/nodejs.png' },
    { name: 'Express', image: '/express-js.png' },
    { name: 'MongoDB', image: '/mongodb.png' },
  ],
  Tools: [
    { name: 'Git', image: '/git.png' },
    { name: 'Figma', image: '/figma.png' },
    { name: 'GraphQL', image: '/graphql.png' },
    { name: 'Postman', image: '/postman.png' },
  ],
};


  const projects = [
    {
      title: 'Employee Portal',
      image: '/trivo.png',
      description: 'Developed an Employee Portal as part of a team project, focusing on designing the database and backend APIs, which streamlined employee management and improved collaboration across the organization.',
      github: 'https://github.com/Javidcp/trivo_client',
      demo: 'https://trivo-solution.vercel.app/'
    },
    {
      title: 'Musical App',
      image: '/spotify.png',
      description: 'Developed a music app with features like music streaming, playlist management, and user authentication, providing an interactive and seamless audio experience.',
      github: 'https://github.com/Javidcp/spotify-clone-project ',
      demo: 'https://spotify-clone-project-zeta.vercel.app/'
    },
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Javid Ibrahim
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? (darkMode ? 'text-blue-400' : 'text-blue-600')
                      : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                  }`}
                >
                  {section === 'home' ? 'Home' : section}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleResumeDownload}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } shadow-sm hover:shadow-md`}
              >
                <DownloadIcon />
                <span>Resume</span>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-10">
            <div className="mb-8">
              <div className="w-40 h-40 overflow-hidden mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-xl">
                  <img src={Profile} alt="Profile" className='object-cover object =-center w-full h-full rounded-full' />
              </div>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Javid Ibrahim</span>
            </h1>
            
            <h2 className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer Specializing in Modern Web Applications
            </h2>
            
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate about creating exceptional digital experiences through clean code and innovative design. 
              I bring ideas to life with modern technologies and a keen eye for user experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I'm a self-taught developer with a passion for building modern web
                  applications. My journey started after high school, where I began
                  exploring HTML, CSS, and JavaScript, and quickly fell in love with
                  creating interactive user experiences.
                </p>

                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I specialize in React, Next.js, Node.js, and MongoDB, and I enjoy
                  working on both frontend and backend development. From designing
                  responsive UIs with Tailwind CSS to creating REST APIs with Express,
                  I’m constantly learning and improving my skills through hands-on
                  projects.
                </p>

                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Outside of coding, I love exploring new technologies, solving coding
                  challenges, and contributing to small open-source projects. I’m eager
                  to grow as a developer and contribute to real-world applications with
                  creativity and dedication.
                </p>
              </div>

              <div
                className={`p-8 rounded-2xl shadow-xl ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Facts
                </h3>
                <ul className="space-y-4">
                  {[
                    "🎓 12th Grade Graduate",
                    "💻 Self-Taught Developer",
                    "🚀 Built Multiple Projects",
                    "🌱 Always Learning New Tech",
                    "☕ Coffee & Code Enthusiast",
                  ].map((fact, index) => (
                    <li
                      key={index}
                      className={`text-lg ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills
          </h2>
          
          <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl text-center transition-all duration-200 hover:scale-105 ${
                        darkMode
                          ? 'bg-gray-800 hover:bg-gray-700 text-white'
                          : 'bg-white hover:bg-gray-50 text-gray-900'
                      } shadow-sm hover:shadow-md`}
                    >
                      <div className="w-12 h-12 mx-auto mb-3  bg-gray-100 rounded-lg flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <p className="font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center w-fit">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </h2>
          
          <div className={`grid gap-8 max-w-220 mx-auto ${projects.length === 1 ? "grid-cols-1" : ""} ${projects.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""} ${projects.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 ${ darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className="h-58 overflow-hidden flex items-center justify-center">
                  <img src={project.image} alt="" />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        darkMode
                          ? 'bg-gray-600 hover:bg-gray-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLinkIcon />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            
            
            <div className=" flex justify-center space-x-6">
              {[
                { icon: GitHubIcon, url: 'https://github.com/javidcp  ', label: 'GitHub' },
                { icon: LinkedInIcon, url: 'https://linkedin.com/in/javid-ibrahim-cp', label: 'LinkedIn' },
              ].map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-700'
                  } shadow-md hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Javid Ibrahim
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}