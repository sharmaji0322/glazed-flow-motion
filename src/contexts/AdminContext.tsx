
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContent {
  hero: {
    name: string;
    title: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  portfolio: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
  }>;
}

interface AdminContextType {
  content: AdminContent;
  updateContent: (section: keyof AdminContent, data: any) => void;
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const defaultContent: AdminContent = {
  hero: {
    name: "Rohit Sharma",
    title: "Full Stack Developer & UI/UX Designer",
    description: "I create beautiful, functional, and user-centered digital experiences that solve real-world problems with clean code and thoughtful design."
  },
  contact: {
    email: "hello@glazedflow.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  services: [
    {
      id: "1",
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "Code"
    },
    {
      id: "2",
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      icon: "Palette"
    },
    {
      id: "3",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "Smartphone"
    }
  ],
  portfolio: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "2",
      title: "Design System",
      description: "Comprehensive design system for enterprise applications",
      image: "/placeholder.svg",
      tags: ["Figma", "React", "Storybook"]
    }
  ]
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<AdminContent>(defaultContent);
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('portfolio-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const updateContent = (section: keyof AdminContent, data: any) => {
    const newContent = {
      ...content,
      [section]: data
    };
    setContent(newContent);
    localStorage.setItem('portfolio-content', JSON.stringify(newContent));
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  return (
    <AdminContext.Provider value={{ content, updateContent, isAdminMode, toggleAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
