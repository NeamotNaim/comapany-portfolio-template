import React from 'react';
import { Link } from 'react-router-dom';

const webAppTypes = [
  {
    title: 'Single Page Applications (SPA)',
    description: 'Fast, responsive web apps that load once and dynamically update content.',
    features: ['React/Vue/Angular', 'Client-side Routing', 'State Management', 'API Integration'],
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
    technologies: ['React', 'Vue.js', 'Angular', 'TypeScript'],
    timeline: '2-4 months',
    price: 'Starting from $15,000',
    link: '/services/web-app/spa'
  },
  {
    title: 'Progressive Web Apps (PWA)',
    description: 'Web applications that provide native app-like experience with offline capabilities.',
    features: ['Service Workers', 'Offline Support', 'Push Notifications', 'App Install'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    technologies: ['React', 'Service Workers', 'Workbox', 'Web App Manifest'],
    timeline: '2-5 months',
    price: 'Starting from $18,000',
    link: '/services/web-app/pwa'
  },
  {
    title: 'E-commerce Web Applications',
    description: 'Full-featured online stores with payment processing and inventory management.',
    features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    technologies: ['Next.js', 'Stripe', 'Shopify', 'WooCommerce'],
    timeline: '3-6 months',
    price: 'Starting from $25,000',
    link: '/services/web-app/ecommerce'
  },
  {
    title: 'Content Management Systems',
    description: 'Custom CMS solutions for easy content creation and management.',
    features: ['Content Editor', 'Media Management', 'User Roles', 'SEO Optimization'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    technologies: ['Strapi', 'Sanity', 'WordPress', 'Custom CMS'],
    timeline: '2-4 months',
    price: 'Starting from $20,000',
    link: '/services/web-app/cms'
  },
  {
    title: 'Real-time Web Applications',
    description: 'Interactive applications with live updates and real-time communication.',
    features: ['WebSocket Integration', 'Live Chat', 'Real-time Updates', 'Collaborative Features'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    technologies: ['Socket.io', 'WebRTC', 'Firebase', 'WebSockets'],
    timeline: '3-5 months',
    price: 'Starting from $22,000',
    link: '/services/web-app/realtime'
  },
  {
    title: 'Enterprise Web Portals',
    description: 'Comprehensive business portals with advanced features, integrations, and security.',
    features: ['Single Sign-On', 'Role-based Access', 'API Integrations', 'Advanced Analytics'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    timeline: '4-8 months',
    price: 'Starting from $45,000',
    link: '/services/web-app/enterprise-portal'
  }
];

const WebAppPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Web Application Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Modern & Responsive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                Web Applications
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build powerful, scalable web applications with cutting-edge technologies and exceptional user interfaces that drive business growth.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-emerald-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Web App Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Web Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web App Types Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Web Application Types
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From single-page applications to complex enterprise portals, we create web solutions that deliver exceptional performance and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webAppTypes.map((app, i) => (
              <Link
                key={i}
                to={app.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-emerald-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <img src={app.icon} alt={app.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {app.timeline}</span>
                    <span><strong>Price:</strong> {app.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors">
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

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We leverage the latest web technologies to build fast, secure, and scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
              { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="h-16 w-16 flex items-center justify-center mb-2">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Web Application?</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
            Let's create a powerful web application that drives your business forward with modern technologies and best practices.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-emerald-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Web Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebAppPage;
