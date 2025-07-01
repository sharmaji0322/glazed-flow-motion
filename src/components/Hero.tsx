
import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-8 animate-fade-in-scale">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-white/80">Available for work</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Rohit Sharma
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer & UI/UX Designer
        </p>

        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          I create beautiful, functional web applications with modern technologies. 
          Passionate about clean code, stunning design, and seamless user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="group glass-strong rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 glow flex items-center gap-2">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group glass rounded-2xl px-8 py-4 text-white/80 font-semibold text-lg hover:scale-105 transition-all duration-300 hover:text-white flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button className="glass p-3 rounded-2xl hover:scale-110 transition-all duration-300 text-white/70 hover:text-white hover:glow">
            <Github className="w-6 h-6" />
          </button>
          <button className="glass p-3 rounded-2xl hover:scale-110 transition-all duration-300 text-white/70 hover:text-white hover:glow-blue">
            <Linkedin className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Years Experience</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow-blue">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Projects Completed</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow-pink">
            <div className="text-3xl font-bold text-white mb-2">20+</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
