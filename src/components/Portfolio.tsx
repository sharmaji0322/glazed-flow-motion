
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Glassmorphism Dashboard',
      description: 'A modern admin dashboard with beautiful glass effects and data visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind'],
      color: 'purple'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking interface with smooth animations.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tags: ['React Native', 'UI/UX', 'Animation'],
      color: 'blue'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Modern shopping experience with glassmorphism product cards and checkout.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Commerce', 'Design'],
      color: 'pink'
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'Beautiful weather app with animated backgrounds and glass interface.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'API', 'Animation'],
      color: 'indigo'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Angular', 'Analytics', 'Real-time'],
      color: 'green'
    },
    {
      id: 6,
      title: 'Creative Portfolio',
      description: 'Artist portfolio website with immersive galleries and smooth transitions.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop',
      tags: ['Portfolio', 'Creative', 'Interactive'],
      color: 'yellow'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our latest projects showcasing innovative design and cutting-edge technology
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="glass-strong p-2 rounded-full text-white hover:scale-110 transition-transform duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="glass-strong p-2 rounded-full text-white hover:scale-110 transition-transform duration-200">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-strong px-3 py-1 rounded-full text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="glass-strong rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 glow-blue">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
