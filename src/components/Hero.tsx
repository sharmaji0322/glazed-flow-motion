
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Hero = () => {
  const { content } = useAdmin();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 glow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-white">
              {content.hero.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {content.hero.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/80 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {content.hero.title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {content.hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="glass-strong rounded-2xl px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 glow">
            View My Work
          </button>
          <button className="glass rounded-2xl px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 border border-white/20">
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="glass p-4 rounded-2xl text-white/70 hover:text-white hover:scale-110 transition-all duration-300 hover:glow"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/50" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
