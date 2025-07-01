
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Glazed<span className="text-purple-300">Flow</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Creating beautiful, modern web experiences with glassmorphism design and cutting-edge animations.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <button
                  key={social}
                  className="glass p-2 rounded-xl hover:scale-110 transition-all duration-300 text-white/70 hover:text-white text-sm"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {['UI/UX Design', 'Web Development', 'Mobile Apps', 'Consulting'].map((service) => (
                <div
                  key={service}
                  className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">
            © 2024 GlazedFlow. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-white/70 text-sm">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by GlazedFlow Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
