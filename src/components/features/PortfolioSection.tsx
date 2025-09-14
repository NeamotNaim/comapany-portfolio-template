import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { PROJECTS } from '@/constants/content';

const PortfolioSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Featured Projects</h2>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Success Stories
          </h3>
          <p className="mt-4 text-xl text-gray-500">
            Explore our portfolio of successful projects across various industries.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {PROJECTS.filter(project => project.featured).map((project, i) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link to={project.link} className="group block">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status badge */}
                    {project.status && (
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : project.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : 
                           project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-700 transition-colors duration-300 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{project.desc}</p>
                  </div>
                  
                  <div className="p-6 pt-0">
                    <span className="inline-flex items-center text-sm font-medium text-violet-700 group-hover:text-violet-800 transition-colors duration-300">
                      View Case Study
                      <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center rounded-xl bg-violet-50 px-8 py-3 text-base font-medium text-violet-700 hover:bg-violet-100 transition-colors duration-300 group"
          >
            View All Case Studies
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
