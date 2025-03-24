import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export function ProjectCard({ title, description, image, technologies, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="project-content">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-white/80 mb-4 text-balance">{description}</p>
          </div>
          <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/20 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}