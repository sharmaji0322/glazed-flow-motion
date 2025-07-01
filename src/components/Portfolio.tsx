import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      category: 'Web App',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'Personal dashboard for tracking investments and financial goals with interactive charts and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'API Integration', 'Charts'],
      category: 'Dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features built with React Native.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Mobile UI', 'Health API'],
      category: 'Mobile',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search, virtual tours, and booking system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Prisma', 'Maps API', 'CMS'],
      category: 'Web Platform',
      featured: true
    },
    {
      id: 6,
      title: 'AI Chat Interface',
      description: 'Modern chat interface for AI conversations with message history, file uploads, and customizable themes.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
      tags: ['React', 'AI Integration', 'WebSocket', 'UI/UX'],
      category: 'AI/ML',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A showcase of my recent work - from concept to deployment
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass-strong px-3 py-1 rounded-full text-sm text-white/90">
                    {project.category}
                  </span>
                </div>
                
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

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="glass-strong p-2 rounded-full text-white hover:scale-110 transition-transform duration-200">
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button className="glass-strong p-2 rounded-full text-white hover:scale-110 transition-transform duration-200">
                    <Github className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/60">{project.category}</span>
                </div>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {project.description.substring(0, 100)}...
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="glass-strong px-2 py-1 rounded-full text-xs text-white/80 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="glass-strong rounded-2xl px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 glow-blue">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
