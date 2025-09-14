import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UIUXTrendsArticle = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/blog"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
        {/* Floating Design Elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`absolute ${isScrolling ? '' : 'animate-float'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400/15 to-purple-400/15 blur-sm"></div>
          </div>
        ))}

        {/* Design Icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute text-pink-300/20 text-lg ${isScrolling ? '' : 'animate-code-drift'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
              animationPlayState: isScrolling ? 'paused' : 'running',
            }}
          >
            {
              ['🎨', '✨', '🎯', '💫', '🌟', '🎪', '🎭', '🎨'][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Article Header */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-rose-600/10 to-purple-600/10"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <div className="mb-8 inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-pink-700 border border-white/20 shadow-xl">
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  Design
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                UI/UX Trends
              </span>
              <span className="block text-gray-900">for 2024</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge design trends that will shape user
              experiences and define digital aesthetics this year.
            </p>

            {/* Author Info Card */}
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-md opacity-30"></div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-white shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MG</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    Maria Gomez
                  </div>
                  <div className="text-pink-600 font-medium">
                    UI/UX Designer
                  </div>
                </div>
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

              <div className="text-left">
                <div className="text-gray-900 font-semibold">July 20, 2024</div>
                <div className="text-gray-600">6 min read</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop"
                alt="UI/UX Design Trends 2024"
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
            <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="max-w-4xl mx-auto">
                {/* Introduction Section */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      The Evolution of Design
                    </span>
                  </h2>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-10 border border-pink-100 max-w-4xl mx-auto">
                    <p className="text-xl leading-relaxed text-gray-700 text-center">
                      As we move into 2024, design trends continue to evolve,
                      driven by new technologies and changing user expectations.
                      The focus has shifted towards more immersive, accessible,
                      and sustainable design practices.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600 mt-8 max-w-3xl mx-auto text-center">
                    The digital landscape is constantly changing, and with it,
                    the way we approach user interface and user experience
                    design. This year brings exciting developments that promise
                    to reshape how users interact with digital products.
                  </p>
                </div>

                {/* Key Trends Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                        Key Trends to Watch
                      </span>
                    </h2>
                  </div>

                  {/* Trends Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Glassmorphism 2.0 */}
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-4">
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
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-pink-800 mb-4">
                          Glassmorphism 2.0
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          The evolution of glassmorphism brings more
                          sophisticated transparency effects and better
                          accessibility considerations. This trend combines
                          frosted glass aesthetics with improved usability.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-white/80 to-pink-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <h4 className="font-bold text-pink-800 mb-4 text-center">
                          ✨ Best Practices
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              Ensure sufficient contrast for text readability
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              Use subtle blur effects to avoid overwhelming
                              content
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              Test across different backgrounds and devices
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              Consider performance implications of blur effects
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI-Assisted Design */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4">
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
                          AI-Assisted Design
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Artificial intelligence is revolutionizing how we
                          approach design, from automated layout generation to
                          personalized user experiences. AI tools are becoming
                          essential for modern designers.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-white/80 to-purple-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-4 text-center">
                          🤖 AI Tools
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-purple-700 text-sm">
                              Figma AI Features
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-purple-700 text-sm">
                              Adobe Sensei
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-purple-700 text-sm">
                              AI Design Platforms
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sustainable UX */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
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
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800 mb-4">
                          Sustainable UX
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Environmental consciousness is driving design
                          decisions, focusing on energy-efficient interfaces and
                          reduced digital carbon footprints.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
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
                          <h4 className="font-bold text-green-800 mb-3">
                            🌱 Sustainable Design Tip
                          </h4>
                          <p className="text-green-700 text-sm leading-relaxed">
                            Every design decision should consider its
                            environmental impact. Lighter interfaces consume
                            less energy and provide better user experiences.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Voice & Gesture Interfaces */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
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
                              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                          Voice & Gesture Interfaces
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Beyond traditional touch interfaces, we're seeing more
                          integration of voice commands and gesture controls for
                          accessibility and hands-free interactions.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-white/80 to-blue-100/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-4 text-center">
                          🎯 Key Benefits
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-blue-700 text-sm">
                              Enhanced Accessibility
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-blue-700 text-sm">
                              Hands-Free Interaction
                            </div>
                          </div>
                          <div className="bg-white/60 rounded-xl p-3 text-center">
                            <div className="font-semibold text-blue-700 text-sm">
                              Natural User Experience
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Color Trends for 2024</h2>
                <p>
                  This year's color palette emphasizes warmth, sustainability,
                  and digital wellness:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  <div className="text-center">
                    <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Warm Sunset</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Natural Green</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Digital Blue</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Creative Purple</p>
                  </div>
                </div>

                <h2>Typography Trends</h2>
                <p>
                  Typography in 2024 focuses on readability, personality, and
                  accessibility:
                </p>

                <ul>
                  <li>
                    <strong>Variable Fonts:</strong> More flexible and
                    performant typography options
                  </li>
                  <li>
                    <strong>Large, Bold Headlines:</strong> Making strong first
                    impressions
                  </li>
                  <li>
                    <strong>Improved Readability:</strong> Better contrast and
                    spacing for accessibility
                  </li>
                  <li>
                    <strong>Custom Typography:</strong> Brands investing in
                    unique typefaces
                  </li>
                </ul>

                <h2>Implementation Tips</h2>
                <p>
                  Adopting these trends requires careful consideration of your
                  users and brand identity. Here are some practical tips:
                </p>

                <h3>Research First</h3>
                <ul>
                  <li>
                    Start with user research to understand your audience's needs
                    and preferences
                  </li>
                  <li>
                    Analyze your current design performance and identify areas
                    for improvement
                  </li>
                  <li>
                    Study your competitors and industry leaders for inspiration
                  </li>
                </ul>

                <h3>Gradual Implementation</h3>
                <ul>
                  <li>
                    Implement trends gradually and test their impact on user
                    behavior
                  </li>
                  <li>A/B test new design elements before full rollout</li>
                  <li>
                    Monitor analytics to measure the success of design changes
                  </li>
                </ul>

                <h3>Brand Consistency</h3>
                <ul>
                  <li>
                    Maintain consistency with your brand guidelines while
                    incorporating new trends
                  </li>
                  <li>
                    Ensure new design elements align with your brand personality
                  </li>
                  <li>Create design systems that can evolve with trends</li>
                </ul>

                <h3>Accessibility Priority</h3>
                <ul>
                  <li>Prioritize accessibility in all design decisions</li>
                  <li>
                    Test with real users, including those with disabilities
                  </li>
                  <li>Follow WCAG guidelines and best practices</li>
                </ul>

                <h2>Tools and Resources</h2>
                <p>
                  Stay updated with the latest design trends using these tools
                  and resources:
                </p>

                <ul>
                  <li>
                    <strong>Design Tools:</strong> Figma, Adobe XD, Sketch,
                    Framer
                  </li>
                  <li>
                    <strong>Inspiration:</strong> Dribbble, Behance, Awwwards,
                    Mobbin
                  </li>
                  <li>
                    <strong>Learning:</strong> Design courses, webinars, and
                    conferences
                  </li>
                  <li>
                    <strong>Communities:</strong> Designer Hangout, Mixed
                    Methods, IxDA
                  </li>
                </ul>

                <h2>Looking Ahead</h2>
                <p>
                  The future of UI/UX design is exciting, with emerging
                  technologies like AR/VR, brain-computer interfaces, and
                  advanced AI on the horizon. As designers, we must stay
                  curious, keep experimenting, and always put users at the
                  center of our design decisions.
                </p>

                <p>
                  Remember that trends should enhance user experience, not
                  overshadow it. The best designs are those that seamlessly
                  blend current trends with timeless usability principles.
                </p>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 my-12 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Stay Ahead of Design Trends
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Keep your designs fresh and user-focused with the latest
                    UI/UX insights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog"
                      className="inline-flex items-center justify-center bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                    >
                      More Design Articles
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">MG</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Maria Gomez
                </h3>
                <p className="text-gray-600 mb-4">
                  UI/UX Designer at RecursionSoft with 6+ years of experience
                  creating user-centered designs. Passionate about
                  accessibility, design systems, and the intersection of
                  psychology and design.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Dribbble
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 hover:text-pink-700 font-medium"
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

export default UIUXTrendsArticle;
