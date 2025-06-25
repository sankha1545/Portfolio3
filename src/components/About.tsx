import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, user-centered interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate developer  creating digital solutions 
              that make a difference. I love turning complex problems into simple, elegant designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Building the Future, One Line at a Time
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                I'm a full-stack developer based in San Francisco, specializing in React, 
                Node.js, and modern web technologies. My journey started with a curiosity 
                about how websites work, and it's evolved into a passion for creating 
                seamless digital experiences.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or mentoring aspiring developers. I believe in the 
                power of clean code and thoughtful design to solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Docker', 'MongoDB','MySQL','React-Native','TailwindCSS','Linux'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-700/50 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;