import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard3D from '../ui/ServiceCard3D';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      icon: '💻',
      shortDesc: 'Enterprise-grade custom solutions',
      fullDesc:
        'Transform your business with custom software solutions designed to meet your unique requirements. We build ERP systems, CRM platforms, and specialized business applications.',
      features: [
        'ERP Systems',
        'CRM Platforms',
        'Business Intelligence',
        'Workflow Management',
        'Healthcare Systems',
        'E-commerce Solutions',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'Node.js',
        'Python',
        'Oracle',
      ],
      gradient: 'from-violet-500 to-indigo-500',
      bgGradient: 'from-violet-500/10 to-indigo-500/10',
      link: '/services/custom-software',
    },
    {
      id: 2,
      title: 'Web Development',
      icon: '🌐',
      shortDesc: 'Modern, responsive web applications',
      fullDesc:
        'We create cutting-edge web applications using the latest technologies like React, Next.js, and TypeScript. Our solutions are scalable, secure, and optimized for performance.',
      features: [
        'React & Next.js',
        'TypeScript',
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Progressive Web Apps',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      link: '/services/web-app',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      icon: '📱',
      shortDesc: 'Native iOS & Android applications',
      fullDesc:
        'Build powerful mobile applications for iOS and Android platforms. We use React Native and Flutter to deliver cross-platform solutions that provide native performance.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Updates',
      ],
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'Redux',
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      link: '/services/mobile-app',
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      icon: '🤖',
      shortDesc: 'Intelligent automation solutions',
      fullDesc:
        'Harness the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications that learn and adapt.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Data Analysis',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'OpenAI',
        'Scikit-learn',
        'Pandas',
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      link: '/services/ai-ml',
    },
    {
      id: 5,
      title: 'Blockchain Solutions',
      icon: '⛓️',
      shortDesc: 'Decentralized applications & smart contracts',
      fullDesc:
        'Develop secure blockchain applications, smart contracts, and decentralized solutions. We work with Ethereum, Solana, and other leading blockchain platforms.',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Cryptocurrency Wallets',
        'Blockchain Integration',
        'Security Audits',
      ],
      technologies: [
        'Solidity',
        'Web3.js',
        'Ethereum',
        'Solana',
        'IPFS',
        'MetaMask',
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      link: '/services/blockchain',
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      icon: '☁️',
      shortDesc: 'Scalable cloud solutions',
      fullDesc:
        'Design and implement robust cloud infrastructure that scales with your business. We provide DevOps, CI/CD, and cloud migration services.',
      features: [
        'Cloud Migration',
        'DevOps & CI/CD',
        'Container Orchestration',
        'Microservices Architecture',
        'Auto-scaling',
        'Monitoring & Analytics',
      ],
      technologies: [
        'AWS',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Jenkins',
      ],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      link: '/services/cloud-devops',
    },
    {
      id: 7,
      title: 'UI/UX Design',
      icon: '🎨',
      shortDesc: 'Beautiful user experiences',
      fullDesc:
        'Create stunning user interfaces and exceptional user experiences. Our design process focuses on usability, accessibility, and modern design principles.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Accessibility Compliance',
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Sketch',
        'Principle',
        'InVision',
        'Framer',
      ],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      link: '/services/ui-ux',
    },
    {
      id: 8,
      title: 'Cybersecurity & IT Consulting',
      icon: '🔒',
      shortDesc: 'Comprehensive security & IT solutions',
      fullDesc:
        'Protect your business with advanced cybersecurity solutions and strategic IT consulting. We provide security assessments, compliance management, and comprehensive IT infrastructure planning.',
      features: [
        'Security Assessments',
        'Penetration Testing',
        'Compliance Management',
        'IT Strategy Consulting',
        'Network Security',
        'Incident Response',
      ],
      technologies: [
        'SIEM Tools',
        'Vulnerability Scanners',
        'Firewalls',
        'Azure Security',
        'AWS Security',
        'Compliance Frameworks',
      ],
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-500/10 to-orange-500/10',
      link: '/services/cybersecurity-it',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions to transform your business and
              drive innovation
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { number: '150+', label: 'Projects Delivered', icon: '🚀' },
                { number: '6', label: 'Core Services', icon: '⚡' },
                { number: '50+', label: 'Happy Clients', icon: '😊' },
                { number: '24/7', label: 'Support', icon: '🛟' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end solutions
              tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={service.id} to={service.link} className="group">
                <ServiceCard3D
                  className="cursor-pointer"
                  rotateDepth={12}
                  translateDepth={8}
                >
                  <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl transition-all duration-500">
                    {/* Background Gradient - More subtle */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      {/* Service Header */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Service Description */}
                      <p className="text-gray-700 group-hover:text-gray-800 mb-6 leading-relaxed transition-colors duration-300">
                        {service.fullDesc}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 mb-3 transition-colors duration-300">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-2 group-hover:scale-125 transition-transform duration-300`}
                              ></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-medium rounded-full group-hover:scale-105 transition-transform duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6">
                        <div
                          className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group-hover:shadow-xl`}
                        >
                          <span className="flex items-center justify-center gap-2">
                            Learn More
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ServiceCard3D>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We analyze your requirements, understand your goals, and define the project scope.',
                icon: '🔍',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'Create detailed project roadmap, select technologies, and plan the architecture.',
                icon: '📋',
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'Build your solution using agile methodology with regular updates and feedback.',
                icon: '⚡',
                color: 'from-green-500 to-emerald-500',
              },
              {
                step: '04',
                title: 'Delivery',
                description:
                  'Deploy, test, and launch your solution with ongoing support and maintenance.',
                icon: '🚀',
                color: 'from-orange-500 to-red-500',
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                >
                  {process.icon}
                </div>
                <div
                  className={`text-6xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-4 opacity-20`}
                >
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-300 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Elegant */}
      <section className="py-20 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50"></div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-teal-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-cyan-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            {/* Header Section */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Start Your
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  {' '}
                  Project?
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help transform your ideas into reality.
                Get a free consultation and project estimate today.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Consultation
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
              </Link>

              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-teal-400 hover:text-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>hello@recursionsoft.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
