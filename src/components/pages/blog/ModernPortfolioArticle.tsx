import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ModernPortfolioArticle = () => {
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
      }, 150); // Resume animations 150ms after scrolling stops
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/blog"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
        {/* Floating Orbs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 ${isScrolling ? '' : 'animate-float'}`}
            style={{
              width: `${80 + Math.random() * 60}px`,
              height: `${80 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          />
        ))}

        {/* Code Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute text-blue-300/20 font-mono text-xs ${isScrolling ? '' : 'animate-code-drift'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          >
            {
              ['</>', '{}', '[]', '()', '=>', '&&', '||', '??'][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Article Header */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-blue-300/20"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <div className="mb-8 inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-blue-700 border border-white/20 shadow-xl">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Development
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">How to Build a</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Portfolio
              </span>
              <span className="block text-gray-900">with React</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Master the art of creating stunning, professional portfolios that
              showcase your skills and attract opportunities.
            </p>

            {/* Author Info Card */}
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-30"></div>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Alex Kim"
                    className="relative w-14 h-14 rounded-full border-2 border-white shadow-lg"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    Alex Kim
                  </div>
                  <div className="text-blue-600 font-medium">
                    Lead Developer
                  </div>
                </div>
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              <div className="text-left">
                <div className="text-gray-900 font-semibold">July 25, 2024</div>
                <div className="text-gray-600">8 min read</div>
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              {/* Social Share */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop"
                alt="Modern React Portfolio"
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
            <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="max-w-4xl mx-auto">
                {/* Introduction Section */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Introduction
                    </span>
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100 max-w-4xl mx-auto">
                    <p className="text-xl leading-relaxed text-gray-700 text-center">
                      Building a modern portfolio is essential for any developer
                      looking to showcase their skills and attract potential
                      employers or clients. In this comprehensive guide, we'll
                      walk through creating a stunning React portfolio that
                      stands out from the crowd.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600 mt-8 max-w-3xl mx-auto text-center">
                    Your portfolio is often the first impression you make on
                    potential employers or clients. It's your digital business
                    card, your showcase of skills, and your opportunity to
                    demonstrate not just what you can build, but how you think
                    about problems and solutions.
                  </p>
                </div>

                {/* Getting Started Section */}
                <div className="mb-16">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Getting Started with React
                      </span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                      First, let's set up a new React project using Create React
                      App. We'll also integrate Tailwind CSS for modern styling
                      and Framer Motion for smooth animations.
                    </p>
                  </div>

                  {/* Code Block */}
                  <div className="relative mb-10 max-w-3xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          Terminal
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto text-center">
                          <code>{`npx create-react-app my-portfolio
cd my-portfolio
npm install tailwindcss framer-motion
npm install @heroicons/react`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Pro Tip */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-amber-800 mb-4">
                        💡 Pro Tip
                      </h4>
                      <p className="text-amber-700 leading-relaxed max-w-2xl mx-auto">
                        Once you have your basic setup, configure Tailwind CSS
                        by creating a{' '}
                        <code className="bg-amber-200 px-2 py-1 rounded text-amber-900 font-mono">
                          tailwind.config.js
                        </code>{' '}
                        file and set up your content paths to ensure Tailwind
                        can purge unused styles in production.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Design Section */}
                <div className="mb-16">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Designing the Perfect Layout
                      </span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                      A clean, modern design is crucial for making a good first
                      impression. Your portfolio should be visually appealing
                      while remaining functional and easy to navigate.
                    </p>
                  </div>

                  {/* Essential Sections */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-10 mb-10">
                    <h3 className="text-2xl font-bold text-center text-purple-800 mb-8">
                      Essential Portfolio Sections
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">
                            Hero Section
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          A compelling introduction with your name, title, and a
                          brief description of what you do
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">About</h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          A more detailed overview of your background, skills,
                          and what drives you as a developer
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">
                            Projects
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Showcase of your best work with descriptions,
                          technologies used, and links to live demos
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">Skills</h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Technical skills organized by category (languages,
                          frameworks, tools)
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">
                            Experience
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Professional experience and education timeline
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <h4 className="font-bold text-purple-800">Contact</h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Multiple ways for people to reach out to you
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Design Principles */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-10">
                    <h3 className="text-2xl font-bold text-center text-indigo-800 mb-8">
                      Design Principles
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-800 mb-2">
                          Simplicity
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Clean, uncluttered design that focuses attention on
                          your work
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-indigo-800 mb-2">
                          Consistency
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Consistent typography, colors, and spacing throughout
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-indigo-800 mb-2">
                          Responsiveness
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Looks great on all devices and screen sizes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Key Takeaways
                      </span>
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-6">
                        Essential Elements
                      </h3>
                      <div className="space-y-4 text-left">
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-orange-700 mb-2">
                            Modern Tech Stack
                          </div>
                          <div className="text-orange-600 text-sm">
                            React + Tailwind CSS + Framer Motion
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-orange-700 mb-2">
                            Performance First
                          </div>
                          <div className="text-orange-600 text-sm">
                            Optimized images, lazy loading, code splitting
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-orange-700 mb-2">
                            SEO & Accessibility
                          </div>
                          <div className="text-orange-600 text-sm">
                            Semantic HTML, meta tags, ARIA labels
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
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
                      <h3 className="text-2xl font-bold text-green-800 mb-6">
                        Best Practices
                      </h3>
                      <div className="space-y-4 text-left">
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-green-700 mb-2">
                            Clean Design
                          </div>
                          <div className="text-green-600 text-sm">
                            Minimalist, consistent, responsive layout
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-green-700 mb-2">
                            Smooth Animations
                          </div>
                          <div className="text-green-600 text-sm">
                            Purposeful, performance-optimized effects
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-2xl p-4">
                          <div className="font-semibold text-green-700 mb-2">
                            Regular Updates
                          </div>
                          <div className="text-green-600 text-sm">
                            Keep content fresh and relevant
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion Section */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      Ready to Build Your Portfolio?
                    </span>
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100 max-w-4xl mx-auto">
                    <p className="text-xl leading-relaxed text-gray-700 text-center mb-6">
                      Start building your modern React portfolio today and
                      showcase your skills to the world. Remember, your
                      portfolio is a living document that should evolve as you
                      grow as a developer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/blog"
                        className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        More Articles
                      </Link>
                      <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Share Article
                      </button>
                    </div>
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
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Alex Kim"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Alex Kim
                </h3>
                <p className="text-gray-600 mb-4">
                  Lead Developer at RecursionSoft with over 8 years of
                  experience building modern web applications. Passionate about
                  React, clean code, and helping developers grow their skills.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    LinkedIn
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

export default ModernPortfolioArticle;
