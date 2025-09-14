import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImageSlider } from '@/hooks';
import { CLIENT_LOGOS, SLIDER_IMAGES } from '@/constants/content';

const HeroSection: React.FC = () => {
  const { currentImage, currentIndex } = useImageSlider({
    images: SLIDER_IMAGES,
    autoSlide: true,
    interval: 3000,
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-violet-800 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]">
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-violet-900/90"></div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
              <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="200" r="125" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="200" r="75" stroke="white" strokeWidth="1" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="1" />
            </g>
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/3 h-40 w-40 rounded-full bg-pink-500 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:min-h-screen lg:items-center lg:px-8 lg:py-32">
        <motion.div 
          className="lg:w-1/2 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            <span className="text-sm font-medium text-white">Innovative Software Solutions</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Transforming Ideas into</span>{' '}
            <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 xl:inline">
              Powerful Software
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 400 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C150 -1 250 -1 399 5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="1" y1="3" x2="399" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60A5FA" />
                    <stop offset="0.5" stopColor="#A5B4FC" />
                    <stop offset="1" stopColor="#C4B5FD" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="mt-6 max-w-lg text-xl sm:max-w-3xl text-gray-300 leading-relaxed">
            We build enterprise-grade software solutions that drive innovation and deliver <span className="font-semibold text-white">measurable business results</span> for forward-thinking companies worldwide.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            {['Agile Development', 'Cloud-Native', 'Enterprise Security'].map((feature, index) => (
              <div key={feature} className="flex items-center text-indigo-200">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-violet-900 transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-900"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-violet-100 to-blue-100 transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
            <Link
              to="/case-studies"
              className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-900"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Case Studies
                <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Trusted by industry leaders</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              {CLIENT_LOGOS.slice(0, 3).map((logo, i) => (
                <div key={i} className="group relative transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-2 rounded-lg bg-white/5 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
                  <img src={logo} alt="Client Logo" className="relative h-8 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden lg:block lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-indigo-400 opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-400 opacity-20 blur-2xl"></div>
            
            {/* MacBook-style frame with image slider */}
            <div className="relative">
              <div className="relative mx-auto">
                <div className="relative z-10 rounded-t-xl bg-gray-800 pt-4 pb-1 px-4">
                  <div className="absolute top-1 left-0 right-0 flex justify-center">
                    <div className="h-1.5 w-10 rounded-full bg-gray-700"></div>
                  </div>
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                  
                  <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[16/10] shadow-inner">
                    <div className="relative h-full w-full overflow-hidden">
                      {SLIDER_IMAGES.map((img, index) => (
                        <div 
                          key={index}
                          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                          <img 
                            src={img} 
                            alt={`Dashboard Preview ${index + 1}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                        {SLIDER_IMAGES.map((_, index) => (
                          <div 
                            key={index} 
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-110' : 'bg-gray-500'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-0 bg-gray-700 rounded-b-xl h-3 mx-auto">
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-gray-600 rounded-full"></div>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-md rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-12 -left-6 rotate-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 p-1 shadow-lg">
                <div className="rounded bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                  <div className="flex items-center">
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                    <span>99.9% Uptime</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-6 -rotate-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg">
                <div className="rounded bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                  <div className="flex items-center">
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    <span>Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
