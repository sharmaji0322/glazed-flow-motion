
import React from 'react';
import { Code, Palette, Smartphone, Database, Zap, Globe } from 'lucide-react';

const Services = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, and modern JavaScript frameworks for building responsive web applications.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express, and database design for robust server-side applications and APIs.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approach with modern aesthetics and seamless user experiences.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      color: 'pink'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using React Native and progressive web app technologies.',
      technologies: ['React Native', 'PWA', 'Mobile UI', 'App Store'],
      color: 'indigo'
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimization techniques for fast-loading, SEO-friendly, and accessible web applications.',
      technologies: ['SEO', 'Performance', 'Accessibility', 'Analytics'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, cloud deployment, and modern development workflow automation.',
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'Vercel'],
      color: 'yellow'
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Here's what I bring to the table - a comprehensive skill set for modern web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl glass-strong mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                  <Icon className={`w-8 h-8 transition-all duration-300 ${getColorClasses(skill.color)}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-strong px-3 py-1 rounded-full text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
