import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 85 },
         { name: 'SCSS', level: 85 },
          { name: 'Next.js', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: [
        { name: 'OracleSQL', level: 87 },
        { name: 'MongoDB', level: 84 },
        { name: 'Docker', level: 81 },
        { name: 'OAuth', level: 81 },
        { name: 'OIDC', level: 81 },
         { name: 'Firebase', level: 81 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 89 },
        { name: 'CI/CD', level: 87 },
        { name: 'Git/GitHub', level: 94 },
        { name: 'ngroc', level: 83 },
      ],
    },
  ];

  const tools = [
    { name: 'React', color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', color: 'from-green-500 to-green-400' },
    { name: 'JavaScript', color: 'from-yellow-500 to-blue-500' },
    { name: 'Java', color: 'from-orange-500 to-yellow-500' },
    { name: 'Docker', color: 'from-blue-500 to-blue-600' },
    { name: 'OracleSQL', color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', color: 'from-green-600 to-green-400' },
    { name: 'CI/CD', color: 'from-pink-500 to-purple-500' },
    { name: 'Tailwind', color: 'from-cyan-500 to-blue-500' },
    { name: 'REST APIS', color: 'from-purple-500 to-pink-500' },
    { name: 'Git', color: 'from-red-500 to-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks, 
              constantly evolving with industry trends and best practices.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-700/30 rounded-xl p-8 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <div className={`px-6 py-3 bg-gradient-to-r ${tool.color} rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
         
        </div>
      </div>
    </section>
  );
};

export default Skills;