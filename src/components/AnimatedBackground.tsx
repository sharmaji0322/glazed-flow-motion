
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-gradient-shift bg-[length:400%_400%]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-indigo-500/30 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '4s' }} />
      
      {/* Smaller floating particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-300/60 rounded-full animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-blue-300/50 rounded-full animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-300/70 rounded-full animate-float-slow" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
