
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Alex<span className="text-purple-300">Johnson</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Full-stack developer passionate about creating beautiful, functional web applications. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
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
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((link) => (
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

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>alex@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">
            © 2024 Alex Johnson. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-white/70 text-sm">
            Built with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and modern web technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
