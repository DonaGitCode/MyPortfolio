import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold">DONA</span>
          <div className="flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}