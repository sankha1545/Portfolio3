import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'MedicoX',
      description: 'A full-stack medical appointment with React, Node.js, and razorpay integration. Features include user authentication , user management and analytics, role based access control , secure payment . This website includes all of my skills',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full-Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'An advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      tech: ['Python', 'React', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies 
              and user-centered design principles.
            </p>
          </div>

          {/* Featured Project Carousel */}
          <div className="relative mb-16">
            <div className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-3">
                      {projects[currentProject].category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={projects[currentProject].liveUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={projects[currentProject].githubUrl}
                      className="flex items-center space-x-2 border-2 border-slate-600 px-6 py-3 rounded-full text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-500'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;