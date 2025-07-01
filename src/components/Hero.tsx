
import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-8 animate-fade-in-scale">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm text-white/80">Welcome to the Future</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
          Glassmorphism
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Design Revolution
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Experience the next generation of web design with stunning glass morphism effects, 
          smooth animations, and cutting-edge visual aesthetics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="group glass-strong rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 glow flex items-center gap-2">
            Explore Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group glass rounded-2xl px-8 py-4 text-white/80 font-semibold text-lg hover:scale-105 transition-all duration-300 hover:text-white flex items-center gap-2">
            <Zap className="w-5 h-5" />
            See Demo
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Projects Completed</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow-blue">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Happy Users</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:glow-pink">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
