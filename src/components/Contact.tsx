
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Get In <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow transition-all duration-300">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Email</div>
                  <div className="text-white font-medium">hello@glazedflow.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow-blue transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Phone</div>
                  <div className="text-white font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow-pink transition-all duration-300">
                  <MapPin className="w-6 h-6 text-pink-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Location</div>
                  <div className="text-white font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                  <button
                    key={social}
                    className="glass p-3 rounded-2xl hover:scale-110 transition-all duration-300 text-white/70 hover:text-white hover:glow"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full glass-strong rounded-xl px-6 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 glow flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
