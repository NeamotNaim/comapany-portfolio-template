import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'Custom Software Development',
    desc: 'Enterprise-grade solutions built with cutting-edge technologies.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
    link: '/services/custom-software',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps with seamless user experiences.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png',
    link: '/services/mobile-app',
  },
  {
    title: 'Web Application Development',
    desc: 'Modern, responsive web applications with exceptional user interfaces and performance.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    link: '/services/web-app',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure and CI/CD pipelines for optimal performance.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4116/4116544.png',
    link: '/services/cloud-devops',
  },
];

const technologies = [
  // Frontend Technologies
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'Frontend',
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'Frontend',
  },

  // Backend Technologies
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'Backend',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    category: 'Backend',
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    category: 'Backend',
  },

  // Mobile Technologies
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Mobile',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    category: 'Mobile',
  },
  {
    name: 'Swift',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    category: 'Mobile',
  },
  {
    name: 'Kotlin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    category: 'Mobile',
  },

  // Database Technologies
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'Database',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'Database',
  },
  {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    category: 'Database',
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'Cloud',
  },
  {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    category: 'Cloud',
  },
  {
    name: 'Google Cloud',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    category: 'Cloud',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'DevOps',
  },
  {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    category: 'DevOps',
  },
  {
    name: 'Jenkins',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    category: 'DevOps',
  },
];

const clientLogos = [
  'https://picsum.photos/seed/logo1/150/50',
  'https://picsum.photos/seed/logo2/150/50',
  'https://picsum.photos/seed/logo3/150/50',
  'https://picsum.photos/seed/logo4/150/50',
  'https://picsum.photos/seed/logo5/150/50',
  'https://picsum.photos/seed/logo6/150/50',
];

const testimonials = [
  {
    name: 'Sarah Lee',
    position: 'CTO',
    company: 'NovaBank',
    feedback:
      'RecursionSoft transformed our legacy systems into a modern digital platform. Their technical expertise and project management were exceptional.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Carter',
    position: 'Product Director',
    company: 'FitTrack',
    feedback:
      'The team at RecursionSoft delivered our mobile app ahead of schedule with all the features we needed. User adoption exceeded our expectations by 40%.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    position: 'CEO',
    company: 'ShopEase',
    feedback:
      'Working with RecursionSoft gave us a competitive edge in the market. Their strategic approach to e-commerce development drove a 65% increase in conversions.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const projects = [
  {
    name: 'NovaBank',
    desc: 'A secure, scalable digital banking platform with real-time analytics and AI-powered fraud detection.',
    image: 'https://picsum.photos/seed/novabank-home/600/400',
    link: '/case-studies/novabank',
    tags: ['Fintech', 'Cloud Architecture', 'Security'],
  },
  {
    name: 'FitTrack',
    desc: 'Cross-platform fitness application with wearable integration, personalized workout plans, and social features.',
    image: 'https://picsum.photos/seed/fittrack-home/600/400',
    link: '/case-studies/fittrack',
    tags: ['Mobile', 'IoT', 'Machine Learning'],
  },
  {
    name: 'ShopEase',
    desc: 'Enterprise e-commerce solution with inventory management, advanced analytics, and omnichannel capabilities.',
    image: 'https://picsum.photos/seed/shopease-home/600/400',
    link: '/case-studies/shopease',
    tags: ['E-commerce', 'Analytics', 'Microservices'],
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Enterprise Support' },
];

const sliderImages = [
  'https://picsum.photos/seed/dashboard1/800/600',
  'https://picsum.photos/seed/dashboard2/800/600',
  'https://picsum.photos/seed/dashboard3/800/600',
  'https://picsum.photos/seed/dashboard4/800/600',
];

const Homepage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-violet-800 to-indigo-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]">
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-violet-900/90"></div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
            <svg
              className="absolute right-0 top-0 h-full w-1/2"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="125"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="75"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="200"
                  x2="400"
                  y2="200"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="400"
                  stroke="white"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute top-1/4 left-1/3 h-40 w-40 rounded-full bg-pink-500 opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:min-h-screen lg:items-center lg:px-8 lg:py-32">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">
                Innovative Software Solutions
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Transforming Ideas into</span>{' '}
              <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 xl:inline">
                Powerful Software
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 400 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5C150 -1 250 -1 399 5"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="1"
                      y1="3"
                      x2="399"
                      y2="3"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60A5FA" />
                      <stop offset="0.5" stopColor="#A5B4FC" />
                      <stop offset="1" stopColor="#C4B5FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-xl sm:max-w-3xl text-gray-300 leading-relaxed">
              We build enterprise-grade software solutions that drive innovation
              and deliver{' '}
              <span className="font-semibold text-white">
                measurable business results
              </span>{' '}
              for forward-thinking companies worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-indigo-200">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Agile Development</span>
              </div>
              <div className="flex items-center text-indigo-200">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cloud-Native</span>
              </div>
              <div className="flex items-center text-indigo-200">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Enterprise Security</span>
              </div>
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
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                Trusted by industry leaders
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                {clientLogos.slice(0, 3).map((logo, i) => (
                  <div
                    key={i}
                    className="group relative transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute -inset-2 rounded-lg bg-white/5 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
                    <img
                      src={logo}
                      alt="Client Logo"
                      className="relative h-8 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 lg:pl-12">
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-indigo-400 opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-400 opacity-20 blur-2xl"></div>

              {/* MacBook-style frame with image slider */}
              <div className="relative">
                {/* MacBook outer body */}
                <div className="relative mx-auto">
                  {/* MacBook top lid */}
                  <div className="relative z-10 rounded-t-xl bg-gray-800 pt-4 pb-1 px-4">
                    <div className="absolute top-1 left-0 right-0 flex justify-center">
                      <div className="h-1.5 w-10 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-600"></div>

                    {/* Screen with image slider */}
                    <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[16/10] shadow-inner">
                      {/* Image slider */}
                      <div className="relative h-full w-full overflow-hidden">
                        {sliderImages.map((img, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                          >
                            <img
                              src={img}
                              alt={`Dashboard Preview ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}

                        {/* Progress indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                          {sliderImages.map((_, index) => (
                            <div
                              key={index}
                              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-110' : 'bg-gray-500'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MacBook bottom body */}
                  <div className="relative z-0 bg-gray-700 rounded-b-xl h-3 mx-auto">
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* MacBook shadow */}
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">
              Our Expertise
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              End-to-End Software Solutions
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              We deliver comprehensive software development services tailored to
              your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <Link key={i} to={h.link} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:scale-105 cursor-pointer">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-violet-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 transition-colors">
                      <img src={h.icon} alt={h.title} className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{h.desc}</p>
                    <div className="inline-flex items-center text-sm font-medium text-violet-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">
              Technology Stack
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built with Modern Technologies
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              We leverage the latest technologies to build scalable, secure, and
              high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center group hover:scale-110 transition-transform"
              >
                <div className="h-16 w-16 flex items-center justify-center mb-2">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">
              Featured Projects
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Success Stories
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              Explore our portfolio of successful projects across various
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <Link to={project.link} key={i} className="group">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{project.desc}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <span className="inline-flex items-center text-sm font-medium text-violet-700">
                      View Case Study
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center rounded-xl bg-violet-50 px-8 py-3 text-base font-medium text-violet-700 hover:bg-violet-100 transition-colors"
            >
              View All Case Studies
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-violet-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-indigo-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">
              Testimonials
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              Don't just take our word for it — hear from some of our satisfied
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="absolute top-4 right-4 text-violet-200">
                  <svg
                    width="45"
                    height="36"
                    viewBox="0 0 45 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V18C0 8.05887 8.05887 0 18 0H13.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V18C27 8.05887 35.0589 0 45 0H40.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <p className="text-gray-700 mb-6 italic">{t.feedback}</p>
                  <div className="flex items-center">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-600">
                        {t.position}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
