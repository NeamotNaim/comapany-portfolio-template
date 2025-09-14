import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { TECHNOLOGIES } from '@/constants/content';

const TechnologySection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Technology Stack</h2>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Built with Modern Technologies
          </h3>
          <p className="mt-4 text-xl text-gray-500">
            We leverage the latest technologies to build scalable, secure, and high-performance applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
