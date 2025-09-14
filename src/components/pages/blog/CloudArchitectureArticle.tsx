import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CloudArchitectureArticle = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Reading progress tracker with scroll detection
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Set scrolling state
      setIsScrolling(true);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/blog"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </nav>

      {/* Animated Background Elements */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {/* Floating Cloud Elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-sky-400/15 to-blue-400/15 ${isScrolling ? '' : 'animate-float'}`}
            style={{
              width: `${100 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
              borderRadius: '50% 40% 60% 30%',
            }}
          />
        ))}

        {/* Cloud Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute text-sky-300/20 text-2xl ${isScrolling ? '' : 'animate-code-drift'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          >
            {
              ['☁️', '⚡', '🌐', '🔒', '📊', '🚀', '⚙️', '💾'][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Article Header */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 via-blue-600/10 to-indigo-600/10"></div>

        {/* Cloud Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="cloud-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="1"
                  fill="currentColor"
                  className="text-sky-300/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cloud-grid)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <div className="mb-8 inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-sky-700 border border-white/20 shadow-xl">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  Cloud Architecture
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">Modern Cloud</span>
              <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Architecture
              </span>
              <span className="block text-gray-900">Patterns</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge patterns and practices that power
              today's most scalable and resilient cloud applications.
            </p>

            {/* Author Info Card */}
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-md opacity-30"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    alt="Michael Chen"
                    className="relative w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Michael Chen</h3>
                  <p className="text-gray-600 text-sm">
                    Cloud Solutions Architect
                  </p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">12</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Min Read
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <article className="prose prose-lg max-w-none p-8 md:p-12">
              <div className="text-center mb-12">
                <p className="text-lg leading-relaxed text-gray-600 mt-8 max-w-3xl mx-auto text-center">
                  The cloud computing landscape has evolved dramatically,
                  bringing forth sophisticated architectural patterns that
                  enable unprecedented scalability, reliability, and efficiency.
                  Let's explore the patterns that are shaping the future of
                  cloud applications.
                </p>
              </div>

              {/* Architecture Patterns Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      Essential Architecture Patterns
                    </span>
                  </h2>
                </div>

                {/* Patterns Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* Microservices Pattern */}
                  <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14-7H5m14 14H5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-sky-800 mb-4">
                        Microservices Architecture
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Break down monolithic applications into small,
                        independent services that communicate through
                        well-defined APIs, enabling better scalability and
                        maintainability.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-sky-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-sky-800 mb-4 text-center">
                        🎯 Key Benefits
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Independent deployment and scaling
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Technology diversity and flexibility
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Fault isolation and resilience
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Team autonomy and faster development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Serverless Pattern */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                        Serverless Computing
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Execute code without managing servers, automatically
                        scaling based on demand while paying only for actual
                        compute time used.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-indigo-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-indigo-800 mb-4 text-center">
                        ⚡ Advantages
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-indigo-700 text-sm">
                            Zero Server Management
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-indigo-700 text-sm">
                            Automatic Scaling
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-indigo-700 text-sm">
                            Pay-per-Use Model
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-indigo-700 text-sm">
                            Built-in High Availability
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Event-Driven Architecture */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-5 5v-5zM4.828 7l2.828 2.828M9 11a3 3 0 113 3m-3-3l-6-6 3-3m6 6l6.5 6.5-1.5 1.5L12 16l-3-3z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                        Event-Driven Architecture
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Build loosely coupled systems where components
                        communicate through events, enabling real-time
                        processing and better system responsiveness.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-emerald-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-emerald-800 mb-4 text-center">
                        🔄 Core Components
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Event Producers
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Event Consumers
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Event Brokers
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Event Stores
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Container Orchestration */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14-7H5m14 14H5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-4">
                        Container Orchestration
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Manage containerized applications at scale with
                        automated deployment, scaling, and operations using
                        platforms like Kubernetes.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-orange-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-orange-800 mb-4 text-center">
                        🚀 Orchestration Features
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Automated deployment and rollbacks
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Service discovery and load balancing
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Health monitoring and self-healing
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Resource optimization and scaling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud-Native Principles Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Cloud-Native Principles
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The fundamental principles that guide the design and
                    implementation of modern cloud applications for maximum
                    efficiency and resilience.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-6">
                      Resilience & Reliability
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-teal-600 mb-1">
                          99.9%
                        </div>
                        <div className="text-teal-700 font-medium">
                          Uptime Target
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-teal-600 mb-1">
                          &lt;100ms
                        </div>
                        <div className="text-teal-700 font-medium">
                          Response Time
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-teal-600 mb-1">
                          Auto
                        </div>
                        <div className="text-teal-700 font-medium">
                          Recovery
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-violet-800 mb-6">
                      Scalability & Performance
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-violet-700 font-medium">
                          Horizontal scaling capabilities
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-violet-700 font-medium">
                          Load balancing strategies
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-violet-700 font-medium">
                          Caching and optimization
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-violet-700 font-medium">
                          Resource efficiency
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Strategies */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Implementation Strategies
                    </span>
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-10 mb-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      Best Practices for Success
                    </h3>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                      Follow these proven strategies to implement cloud
                      architecture patterns effectively and avoid common
                      pitfalls.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Start Small
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Begin with pilot projects and gradually expand your
                        cloud-native adoption
                      </p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Team Training
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Invest in upskilling your team on cloud-native
                        technologies and practices
                      </p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Monitor & Measure
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Implement comprehensive monitoring and establish clear
                        success metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    Ready to Transform Your Architecture?
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-3xl p-10 border border-sky-100 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-gray-700 text-center mb-6">
                    Modern cloud architecture patterns are not just
                    trends—they're the foundation of tomorrow's digital
                    infrastructure. Start your cloud-native journey today and
                    build applications that scale with your success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog"
                      className="inline-flex items-center justify-center bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                    >
                      More Architecture Articles
                    </Link>
                    <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Share Article
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Author Bio */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Michael Chen"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Michael Chen
                </h3>
                <p className="text-gray-600 mb-4">
                  Senior Cloud Solutions Architect at RecursionSoft with over 10
                  years of experience designing and implementing large-scale
                  cloud infrastructures. Passionate about cloud-native
                  technologies, DevOps practices, and helping organizations
                  modernize their architecture.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudArchitectureArticle;
