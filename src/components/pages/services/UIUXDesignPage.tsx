import React from 'react';
import { Link } from 'react-router-dom';

const uiuxServiceTypes = [
  {
    title: 'User Experience (UX) Design',
    description: 'Comprehensive UX research and design to create intuitive, user-centered digital experiences.',
    features: ['User Research', 'Journey Mapping', 'Wireframing', 'Usability Testing'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    platforms: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'SaaS Platforms'],
    timeline: '2-4 months',
    price: 'Starting from $15,000',
    link: '/services/ui-ux/ux-design'
  },
  {
    title: 'User Interface (UI) Design',
    description: 'Beautiful, modern interface designs that align with your brand and enhance user engagement.',
    features: ['Visual Design', 'Component Libraries', 'Responsive Design', 'Brand Integration'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    platforms: ['Web Interfaces', 'Mobile UI', 'Dashboard Design', 'E-commerce'],
    timeline: '1-3 months',
    price: 'Starting from $12,000',
    link: '/services/ui-ux/ui-design'
  },
  {
    title: 'Design Systems',
    description: 'Scalable design systems with reusable components, style guides, and design tokens.',
    features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    platforms: ['Figma Systems', 'Storybook', 'Design Libraries', 'Brand Guidelines'],
    timeline: '2-5 months',
    price: 'Starting from $25,000',
    link: '/services/ui-ux/design-systems'
  },
  {
    title: 'Prototyping & Testing',
    description: 'Interactive prototypes and comprehensive usability testing to validate design decisions.',
    features: ['Interactive Prototypes', 'A/B Testing', 'User Testing', 'Analytics Integration'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    platforms: ['Figma Prototypes', 'InVision', 'Principle', 'Framer'],
    timeline: '1-2 months',
    price: 'Starting from $8,000',
    link: '/services/ui-ux/prototyping'
  },
  {
    title: 'Mobile App Design',
    description: 'Native iOS and Android app designs following platform-specific design guidelines.',
    features: ['iOS Design', 'Android Design', 'App Store Assets', 'Icon Design'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    platforms: ['iOS Apps', 'Android Apps', 'Cross-platform', 'Tablet Design'],
    timeline: '2-4 months',
    price: 'Starting from $18,000',
    link: '/services/ui-ux/mobile-design'
  },
  {
    title: 'Web Design & Development',
    description: 'Complete web design solutions from concept to responsive, pixel-perfect implementation.',
    features: ['Responsive Design', 'Frontend Development', 'CMS Integration', 'SEO Optimization'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135844.png',
    platforms: ['Corporate Websites', 'E-commerce', 'Landing Pages', 'Web Apps'],
    timeline: '2-6 months',
    price: 'Starting from $20,000',
    link: '/services/ui-ux/web-design'
  }
];

const UIUXDesignPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-purple-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-pink-400"></span>
              <span className="text-sm font-medium text-white">UI/UX Design</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Beautiful Interfaces &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                User Experiences
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Create stunning user interfaces and exceptional user experiences that delight users and drive business results through human-centered design.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-pink-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Design Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Design Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-pink-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              UI/UX Design Services
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From user research to pixel-perfect designs, we create digital experiences that users love and businesses need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiuxServiceTypes.map((service, i) => (
              <Link
                key={i}
                to={service.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-pink-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-pink-50 group-hover:bg-pink-100 transition-colors">
                    <img src={service.icon} alt={service.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-4 w-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-pink-50 px-2.5 py-0.5 text-xs font-medium text-pink-700">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {service.timeline}</span>
                    <span><strong>Price:</strong> {service.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-pink-700 group-hover:text-pink-800 transition-colors">
                    Learn More
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Design Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              From research to implementation, we follow a human-centered design methodology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research & Discovery', desc: 'User research, competitive analysis, and stakeholder interviews to understand needs.' },
              { step: '02', title: 'Design & Ideation', desc: 'Wireframing, prototyping, and visual design creation with iterative feedback.' },
              { step: '03', title: 'Testing & Validation', desc: 'Usability testing, A/B testing, and design validation with real users.' },
              { step: '04', title: 'Implementation & Support', desc: 'Design handoff, developer collaboration, and ongoing design support.' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Create Amazing User Experiences?</h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            Let's design digital experiences that users love and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-pink-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Design Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
