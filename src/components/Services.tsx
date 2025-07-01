
import React from 'react';
import { Palette, Code, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning visual designs with glassmorphism aesthetics and modern user experiences.',
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and smooth animations.',
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive designs that look perfect on all devices with fluid interactions.',
      color: 'pink'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Optimized for worldwide audiences with fast loading times and accessibility.',
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast websites with optimized code and efficient resource management.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security measures to protect your data and user privacy.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'group-hover:glow text-purple-300',
      blue: 'group-hover:glow-blue text-blue-300',
      pink: 'group-hover:text-pink-300',
      indigo: 'group-hover:text-indigo-300',
      yellow: 'group-hover:text-yellow-300',
      green: 'group-hover:text-green-300'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our comprehensive range of services designed to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl glass-strong mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                  <Icon className={`w-8 h-8 transition-all duration-300 ${getColorClasses(service.color)}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="glass-strong rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 glow">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
