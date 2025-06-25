import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-emerald-400/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center text-2xl font-bold text-slate-900">
                  JD
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent animate-fade-in">
            Sankha Subhra Das
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in-delay">
            Full-Stack Developer 
          </p>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-delay-3">
            <button className="bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className="border-2 border-slate-600 px-8 py-3 rounded-full text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300">
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-delay-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;