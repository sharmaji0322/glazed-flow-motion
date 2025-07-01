
import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';
import { AdminProvider } from '../contexts/AdminContext';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <AdminProvider>
      <div className="min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <AdminPanel />
        <Toaster />
      </div>
    </AdminProvider>
  );
};

export default Index;
