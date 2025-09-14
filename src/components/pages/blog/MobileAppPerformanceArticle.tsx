import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileAppPerformanceArticle = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/blog"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
        {/* Mobile Device Shapes */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r from-orange-400/15 to-pink-400/15 ${isScrolling ? '' : 'animate-float'}`}
            style={{
              width: `${40 + Math.random() * 30}px`,
              height: `${80 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
              borderRadius: '20px',
            }}
          />
        ))}

        {/* Performance Icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute text-orange-300/20 text-xl ${isScrolling ? '' : 'animate-code-drift'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          >
            {
              ['📱', '⚡', '🚀', '⏱️', '📊', '🔧', '💾', '🎯'][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Article Header */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-red-600/10 to-pink-600/10"></div>

        {/* Mobile Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="mobile-grid"
                width="15"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="5"
                  y="5"
                  width="5"
                  height="15"
                  rx="2"
                  fill="currentColor"
                  className="text-orange-300/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mobile-grid)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <div className="mb-8 inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-orange-700 border border-white/20 shadow-xl">
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Mobile Performance
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">Optimizing</span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Mobile App
              </span>
              <span className="block text-gray-900">Performance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Master the techniques and strategies to make your mobile
              applications lightning-fast, responsive, and delightful for users.
            </p>

            {/* Author Info Card */}
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-md opacity-30"></div>
                  <div className="relative w-16 h-16 rounded-full border-2 border-white shadow-lg bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MG</span>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Maria Gomez</h3>
                  <p className="text-gray-600 text-sm">
                    UI/UX Designer & Mobile Expert
                  </p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">9</div>
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
                  In today's mobile-first world, performance isn't just a
                  nice-to-have—it's essential. Users expect apps to load
                  instantly, respond immediately, and run smoothly. Let's
                  explore the techniques that separate great mobile apps from
                  mediocre ones.
                </p>
              </div>

              {/* Performance Fundamentals Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Performance Fundamentals
                    </span>
                  </h2>
                </div>

                {/* Core Metrics */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* App Launch Time */}
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-4">
                        App Launch Optimization
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        First impressions matter. Optimize your app's cold start
                        time to keep users engaged from the very first tap.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-orange-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-orange-800 mb-4 text-center">
                        🎯 Launch Time Targets
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">
                            &lt;1s
                          </div>
                          <div className="text-orange-700 text-sm font-medium">
                            Cold Start (Ideal)
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">
                            &lt;0.5s
                          </div>
                          <div className="text-orange-700 text-sm font-medium">
                            Warm Start
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">
                            &lt;0.1s
                          </div>
                          <div className="text-orange-700 text-sm font-medium">
                            Hot Start
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Memory Management */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
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
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-4">
                        Memory Management
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Efficient memory usage prevents crashes, reduces battery
                        drain, and ensures smooth performance across all
                        devices.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-pink-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-pink-800 mb-4 text-center">
                        💾 Memory Best Practices
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Implement proper object lifecycle management
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Use memory-efficient data structures
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Optimize image loading and caching
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Monitor and prevent memory leaks
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Network Optimization */}
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
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                        Network Optimization
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Minimize network requests, optimize data transfer, and
                        handle offline scenarios gracefully.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-emerald-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-emerald-800 mb-4 text-center">
                        🌐 Network Strategies
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Request Batching
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Data Compression
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Caching Strategies
                          </div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 text-center">
                          <div className="font-semibold text-emerald-700 text-sm">
                            Offline Support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UI Responsiveness */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
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
                            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-4">
                        UI Responsiveness
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Keep your UI smooth and responsive with efficient
                        rendering and animation techniques.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-white/80 to-blue-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                      <h4 className="font-bold text-blue-800 mb-4 text-center">
                        ⚡ Performance Tips
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Use efficient list rendering techniques
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Optimize animations for 60fps
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Implement lazy loading for content
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Minimize main thread blocking
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Techniques Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Advanced Optimization Techniques
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Take your mobile app performance to the next level with
                    these advanced strategies and cutting-edge techniques.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-violet-800 mb-6">
                      Code Optimization
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-violet-600 mb-1">
                          50%
                        </div>
                        <div className="text-violet-700 font-medium">
                          Bundle Size Reduction
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-violet-600 mb-1">
                          3x
                        </div>
                        <div className="text-violet-700 font-medium">
                          Faster Execution
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-violet-600 mb-1">
                          30%
                        </div>
                        <div className="text-violet-700 font-medium">
                          Less Memory Usage
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
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
                    <h3 className="text-2xl font-bold text-cyan-800 mb-6">
                      Performance Monitoring
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-cyan-700 font-medium">
                          Real-time performance tracking
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-cyan-700 font-medium">
                          Automated performance testing
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-cyan-700 font-medium">
                          User experience analytics
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="text-cyan-700 font-medium">
                          Performance regression detection
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Examples Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Implementation Examples
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Practical code examples and implementation strategies you
                    can apply immediately to improve your mobile app's
                    performance.
                  </p>
                </div>

                {/* React Native Example */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">
                      React Native List Optimization
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Optimize large lists with FlatList and proper item
                      rendering to maintain 60fps scrolling performance.
                    </p>
                  </div>

                  <div className="relative mb-6 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          OptimizedList.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`// Optimized FlatList implementation
import React, { memo, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';

const ListItem = memo(({ item, onPress }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
  </View>
));

const OptimizedList = ({ data }) => {
  const renderItem = useCallback(({ item }) => (
    <ListItem item={item} onPress={handleItemPress} />
  ), []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
      windowSize={10}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
    />
  );
};`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6">
                    <h4 className="font-bold text-blue-800 mb-4">
                      🎯 Key Optimizations Explained
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              memo() wrapper
                            </div>
                            <div className="text-blue-600 text-xs">
                              Prevents unnecessary re-renders
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              useCallback hooks
                            </div>
                            <div className="text-blue-600 text-xs">
                              Stable function references
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              removeClippedSubviews
                            </div>
                            <div className="text-blue-600 text-xs">
                              Removes off-screen views
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              getItemLayout
                            </div>
                            <div className="text-blue-600 text-xs">
                              Enables efficient scrolling
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              windowSize optimization
                            </div>
                            <div className="text-blue-600 text-xs">
                              Controls render window
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-blue-700 text-sm">
                              Batching controls
                            </div>
                            <div className="text-blue-600 text-xs">
                              Optimizes render cycles
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Optimization Example */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-8">
                  <div className="text-center mb-6">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      Smart Image Loading & Caching
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Implement progressive image loading with caching to reduce
                      memory usage and improve perceived performance.
                    </p>
                  </div>

                  <div className="relative mb-6 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          SmartImage.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`// Smart image component with progressive loading
import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';

const SmartImage = ({
  source,
  placeholder,
  style,
  resizeMode = 'cover'
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);
  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <View style={[style, { position: 'relative' }]}>
      <FastImage
        source={{
          uri: source,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        style={style}
        resizeMode={FastImage.resizeMode[resizeMode]}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="small" color="#666" />
        </View>
      )}

      {error && placeholder && (
        <Image source={placeholder} style={style} />
      )}
    </View>
  );
};

// Usage with different image sizes
const ImageGallery = ({ images }) => (
  <ScrollView>
    {images.map((image, index) => (
      <SmartImage
        key={index}
        source={image.url + '?w=400&h=300&q=80'}
        placeholder={require('./placeholder.png')}
        style={styles.galleryImage}
      />
    ))}
  </ScrollView>
);`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                    <h4 className="font-bold text-purple-800 mb-4">
                      📸 Image Optimization Strategies
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/60 rounded-xl p-4 text-center">
                        <div className="font-semibold text-purple-700 mb-2">
                          Progressive Loading
                        </div>
                        <div className="text-purple-600 text-sm">
                          Load low-res first, then high-res
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-4 text-center">
                        <div className="font-semibold text-purple-700 mb-2">
                          Smart Caching
                        </div>
                        <div className="text-purple-600 text-sm">
                          Cache with immutable strategy
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-4 text-center">
                        <div className="font-semibold text-purple-700 mb-2">
                          Error Handling
                        </div>
                        <div className="text-purple-600 text-sm">
                          Graceful fallback to placeholders
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Monitoring Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Performance Monitoring & Analytics
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Implement comprehensive monitoring to track performance
                    metrics, identify bottlenecks, and measure the impact of
                    your optimizations.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                      Performance Metrics Dashboard
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Track key performance indicators and set up automated
                      alerts for performance regressions.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">
                        1.2s
                      </div>
                      <div className="text-cyan-700 font-medium text-sm">
                        Avg Launch Time
                      </div>
                      <div className="text-green-500 text-xs mt-1">
                        ↓ 15% this week
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">
                        58fps
                      </div>
                      <div className="text-cyan-700 font-medium text-sm">
                        Avg Frame Rate
                      </div>
                      <div className="text-green-500 text-xs mt-1">
                        ↑ 8% this week
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">
                        145MB
                      </div>
                      <div className="text-cyan-700 font-medium text-sm">
                        Memory Usage
                      </div>
                      <div className="text-green-500 text-xs mt-1">
                        ↓ 12% this week
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">
                        2.1s
                      </div>
                      <div className="text-cyan-700 font-medium text-sm">
                        API Response
                      </div>
                      <div className="text-red-500 text-xs mt-1">
                        ↑ 5% this week
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-6 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          PerformanceMonitor.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`// Performance monitoring implementation
import { Performance } from 'react-native-performance';
import Analytics from '@react-native-firebase/analytics';

class PerformanceMonitor {
  static startTrace(traceName) {
    return Performance.startTrace(traceName);
  }

  static async stopTrace(trace, metadata = {}) {
    await trace.stop();

    // Log to analytics
    Analytics().logEvent('performance_metric', {
      trace_name: trace.identifier,
      duration: trace.duration,
      ...metadata
    });
  }

  static measureAppLaunch() {
    const launchTrace = this.startTrace('app_launch');

    // Measure different launch phases
    const phases = {
      js_bundle_load: performance.now(),
      first_render: null,
      interactive: null
    };

    return {
      markFirstRender() {
        phases.first_render = performance.now();
      },

      markInteractive() {
        phases.interactive = performance.now();

        // Calculate metrics
        const metrics = {
          total_launch_time: phases.interactive - phases.js_bundle_load,
          time_to_first_render: phases.first_render - phases.js_bundle_load,
          time_to_interactive: phases.interactive - phases.first_render
        };

        this.stopTrace(launchTrace, metrics);
      }
    };
  }

  static measureScreenTransition(screenName) {
    const trace = this.startTrace(\`screen_\${screenName}\`);

    return {
      complete() {
        this.stopTrace(trace, { screen: screenName });
      }
    };
  }

  static trackMemoryUsage() {
    if (__DEV__) {
      const memoryInfo = performance.memory;
      console.log('Memory Usage:', {
        used: \`\${(memoryInfo.usedJSHeapSize / 1048576).toFixed(2)}MB\`,
        total: \`\${(memoryInfo.totalJSHeapSize / 1048576).toFixed(2)}MB\`,
        limit: \`\${(memoryInfo.jsHeapSizeLimit / 1048576).toFixed(2)}MB\`
      });
    }
  }
}

// Usage in components
const HomeScreen = () => {
  useEffect(() => {
    const transition = PerformanceMonitor.measureScreenTransition('home');

    // Simulate screen load completion
    setTimeout(() => {
      transition.complete();
    }, 100);

    return () => {
      PerformanceMonitor.trackMemoryUsage();
    };
  }, []);

  return <View>{/* Screen content */}</View>;
};`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform-Specific Tips */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Platform-Specific Optimizations
                    </span>
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-10 mb-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      iOS & Android Best Practices
                    </h3>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                      Each platform has unique characteristics and optimization
                      opportunities. Leverage platform-specific features for
                      maximum performance.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white/80 rounded-2xl p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">
                            iOS
                          </span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-3">
                          iOS Optimizations
                        </h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Leverage Metal for graphics performance
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Use Core Data efficiently
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Optimize for different device capabilities
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Implement proper background processing
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-2xl p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-xs">
                            ANDROID
                          </span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-3">
                          Android Optimizations
                        </h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Optimize for different screen densities
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Use Android Jetpack components
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Implement proper lifecycle management
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">
                            Optimize APK size and loading
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Techniques Deep Dive */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Advanced Performance Techniques
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Master these advanced techniques to achieve exceptional
                    performance that sets your app apart from the competition.
                  </p>
                </div>

                {/* Bundle Splitting & Code Splitting */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
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
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-800 mb-4">
                      Bundle Optimization & Code Splitting
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Reduce initial bundle size and implement dynamic imports
                      to load code only when needed.
                    </p>
                  </div>

                  <div className="relative mb-6 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          BundleOptimization.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`// Dynamic imports and code splitting
import React, { Suspense, lazy } from 'react';
import { View, ActivityIndicator } from 'react-native';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
const CameraModule = lazy(() => import('./components/CameraModule'));

// Bundle analyzer configuration (metro.config.js)
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true, // Reduces bundle size
      },
    }),
  },
  resolver: {
    alias: {
      // Tree shaking for lodash
      'lodash': 'lodash-es',
    },
  },
};

// Conditional loading based on platform/device
const ConditionalComponent = () => {
  const [shouldLoadHeavyFeature, setShouldLoadHeavyFeature] = useState(false);

  useEffect(() => {
    // Only load on high-end devices
    DeviceInfo.getTotalMemory().then(memory => {
      if (memory > 4000000000) { // 4GB+
        setShouldLoadHeavyFeature(true);
      }
    });
  }, []);

  return (
    <View>
      {shouldLoadHeavyFeature ? (
        <Suspense fallback={<ActivityIndicator />}>
          <HeavyChart />
        </Suspense>
      ) : (
        <LightweightAlternative />
      )}
    </View>
  );
};

// Tree shaking example
import { debounce } from 'lodash'; // ❌ Imports entire lodash
import debounce from 'lodash/debounce'; // ✅ Imports only debounce

// Bundle size analysis
const BundleAnalyzer = {
  analyzeBundle() {
    if (__DEV__) {
      console.log('Bundle analysis:', {
        totalSize: require('react-native-bundle-visualizer'),
        duplicates: this.findDuplicates(),
        unusedModules: this.findUnusedModules()
      });
    }
  },

  findDuplicates() {
    // Implementation to find duplicate dependencies
    return [];
  },

  findUnusedModules() {
    // Implementation to find unused modules
    return [];
  }
};`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        -60%
                      </div>
                      <div className="text-red-700 font-medium text-sm">
                        Initial Bundle Size
                      </div>
                      <div className="text-gray-600 text-xs mt-1">
                        With code splitting
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        -40%
                      </div>
                      <div className="text-red-700 font-medium text-sm">
                        App Launch Time
                      </div>
                      <div className="text-gray-600 text-xs mt-1">
                        Faster cold starts
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        +25%
                      </div>
                      <div className="text-red-700 font-medium text-sm">
                        User Retention
                      </div>
                      <div className="text-gray-600 text-xs mt-1">
                        Better first impression
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Processing */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-4">
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
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-4">
                      Background Processing & Threading
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Offload heavy computations to background threads to keep
                      the UI responsive and smooth.
                    </p>
                  </div>

                  <div className="relative mb-6 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          BackgroundProcessing.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{`// Background processing with Web Workers (React Native)
import { Worker } from 'react-native-workers';

class BackgroundProcessor {
  constructor() {
    this.worker = new Worker('./workers/dataProcessor.js');
    this.setupWorkerListeners();
  }

  setupWorkerListeners() {
    this.worker.onmessage = (event) => {
      const { type, data, id } = event.data;

      switch (type) {
        case 'PROCESSING_COMPLETE':
          this.handleProcessingComplete(data, id);
          break;
        case 'PROGRESS_UPDATE':
          this.handleProgressUpdate(data, id);
          break;
        case 'ERROR':
          this.handleError(data, id);
          break;
      }
    };
  }

  processLargeDataset(data, options = {}) {
    const taskId = Date.now().toString();

    return new Promise((resolve, reject) => {
      this.pendingTasks.set(taskId, { resolve, reject });

      this.worker.postMessage({
        type: 'PROCESS_DATA',
        data,
        options,
        id: taskId
      });
    });
  }

  // Image processing in background
  async processImages(images) {
    const chunks = this.chunkArray(images, 5); // Process 5 at a time
    const results = [];

    for (const chunk of chunks) {
      const chunkResults = await Promise.all(
        chunk.map(image => this.processImageInBackground(image))
      );
      results.push(...chunkResults);

      // Yield control back to main thread
      await this.sleep(10);
    }

    return results;
  }

  processImageInBackground(image) {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        // Simulate heavy image processing
        const processed = this.applyFilters(image);
        resolve(processed);
      });
    });
  }

  // Debounced search with background processing
  debouncedSearch = debounce(async (query) => {
    if (query.length < 3) return;

    try {
      const results = await this.processLargeDataset(
        this.searchData,
        {
          query,
          fuzzySearch: true,
          maxResults: 100
        }
      );

      this.updateSearchResults(results);
    } catch (error) {
      console.error('Search processing failed:', error);
    }
  }, 300);

  // Utility methods
  chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Worker file (workers/dataProcessor.js)
self.onmessage = function(event) {
  const { type, data, options, id } = event.data;

  switch (type) {
    case 'PROCESS_DATA':
      processData(data, options, id);
      break;
  }
};

function processData(data, options, taskId) {
  try {
    const total = data.length;
    let processed = 0;

    const results = data.map((item, index) => {
      // Heavy processing logic here
      const result = performComplexCalculation(item, options);

      processed++;

      // Send progress updates
      if (processed % 100 === 0) {
        self.postMessage({
          type: 'PROGRESS_UPDATE',
          data: { progress: (processed / total) * 100 },
          id: taskId
        });
      }

      return result;
    });

    self.postMessage({
      type: 'PROCESSING_COMPLETE',
      data: results,
      id: taskId
    });
  } catch (error) {
    self.postMessage({
      type: 'ERROR',
      data: error.message,
      id: taskId
    });
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6">
                    <h4 className="font-bold text-teal-800 mb-4 text-center">
                      🔄 Background Processing Benefits
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Non-blocking UI operations
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Parallel processing capabilities
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Progress tracking and cancellation
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Better battery life
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Improved user experience
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            Scalable architecture
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-World Case Studies */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      Real-World Case Studies
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Learn from actual performance optimization projects and see
                    the measurable impact of these techniques.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* E-commerce App Case Study */}
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-4">
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
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-violet-800 mb-4">
                        E-commerce App Optimization
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        How we improved a major e-commerce app's performance,
                        resulting in 40% higher conversion rates.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-violet-700">
                            App Launch Time
                          </span>
                          <span className="text-green-600 font-bold">-65%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          From 4.2s to 1.5s cold start
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-violet-700">
                            Product List Scrolling
                          </span>
                          <span className="text-green-600 font-bold">
                            +45fps
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Consistent 60fps with FlatList optimization
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-violet-700">
                            Image Loading
                          </span>
                          <span className="text-green-600 font-bold">-80%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Progressive loading + WebP format
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-violet-700">
                            Conversion Rate
                          </span>
                          <span className="text-green-600 font-bold">+40%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Better UX led to more purchases
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media App Case Study */}
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
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                        Social Media Feed Optimization
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Optimizing infinite scroll feeds to handle millions of
                        posts with smooth performance.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-emerald-700">
                            Memory Usage
                          </span>
                          <span className="text-green-600 font-bold">-70%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Virtual scrolling + item recycling
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-emerald-700">
                            Video Playback
                          </span>
                          <span className="text-green-600 font-bold">+90%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Smooth playback with preloading
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-emerald-700">
                            Network Requests
                          </span>
                          <span className="text-green-600 font-bold">-85%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Smart caching + request batching
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-emerald-700">
                            User Engagement
                          </span>
                          <span className="text-green-600 font-bold">+60%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Faster, smoother experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Checklist */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      Performance Optimization Checklist
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A comprehensive checklist to ensure you've covered all the
                    essential performance optimization areas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-amber-800 mb-6">
                        🚀 Launch & Loading
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Optimize app bundle size
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Implement code splitting
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Add splash screen optimization
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Minimize initial render time
                          </span>
                        </label>
                      </div>

                      <h3 className="text-xl font-bold text-amber-800 mb-6 mt-8">
                        💾 Memory Management
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Implement proper cleanup
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Optimize image memory usage
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Monitor memory leaks
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Use efficient data structures
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-amber-800 mb-6">
                        🎨 UI & Animations
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Optimize list rendering
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Achieve 60fps animations
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Implement lazy loading
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Minimize re-renders
                          </span>
                        </label>
                      </div>

                      <h3 className="text-xl font-bold text-amber-800 mb-6 mt-8">
                        🌐 Network & Data
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Implement smart caching
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Optimize API requests
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Add offline support
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700">
                            Compress data transfers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Ready to Optimize Your Mobile App?
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-10 border border-orange-100 max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-gray-700 text-center mb-6">
                    Mobile app performance is a journey, not a destination.
                    Start implementing these techniques today and watch your
                    app's user experience transform. Remember, every millisecond
                    counts in mobile.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog"
                      className="inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      More Mobile Articles
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">MG</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Maria Gomez
                </h3>
                <p className="text-gray-600 mb-4">
                  UI/UX Designer and Mobile Performance Expert at RecursionSoft
                  with over 8 years of experience creating high-performance
                  mobile applications. Passionate about user experience
                  optimization, mobile design patterns, and performance
                  engineering.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Dribbble
                  </a>
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-medium"
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

export default MobileAppPerformanceArticle;
