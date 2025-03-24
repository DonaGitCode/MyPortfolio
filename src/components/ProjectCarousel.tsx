import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Group projects into sets of 3
  const projectGroups = projects.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(curr);
    return acc;
  }, [] as Project[][]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projectGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="grid grid-cols-3 gap-8">
                {group.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: selectedIndex === groupIndex ? 1 : 0.3,
                      y: 0,
                      scale: selectedIndex === groupIndex ? 1 : 0.95
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {projectGroups.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index 
                ? 'bg-[var(--primary)] w-8' 
                : 'bg-[var(--text)]/20 hover:bg-[var(--text)]/40'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--background)] shadow-lg flex items-center justify-center text-[var(--text)] hover:bg-[var(--accent)] transition-colors z-10"
        aria-label="Previous projects"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--background)] shadow-lg flex items-center justify-center text-[var(--text)] hover:bg-[var(--accent)] transition-colors z-10"
        aria-label="Next projects"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}