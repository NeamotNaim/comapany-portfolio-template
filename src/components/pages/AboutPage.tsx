import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [typedText, setTypedText] = useState('');

  // Generate dynamic code lines
  useEffect(() => {
    const techStack = [
      'const innovation = () => { return "cutting-edge solutions"; }',
      'class TeamWork extends Collaboration { build() { return success; } }',
      'function createImpact() { return technology + creativity; }',
      'const mission = "Transforming ideas into digital reality";',
      'let passion = developers + designers + strategists;',
      'async function deliverExcellence() { await innovation(); }',
    ];
    setCodeLines(techStack);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const text = 'Building the future, one line of code at a time...';
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: '🚀' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🛠️' },
  ];

  const values = [
    {
      title: 'Innovation First',
      description:
        'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
      icon: '💡',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Quality Driven',
      description:
        'Every line of code, every pixel, every interaction is crafted with meticulous attention to detail.',
      icon: '⚡',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Client Focused',
      description:
        'Your success is our success. We build lasting partnerships through transparent communication.',
      icon: '🎯',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Future Ready',
      description:
        'We stay ahead of technology trends to ensure your solutions remain competitive and scalable.',
      icon: '🔮',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Icons */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 animate-tech-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            >
              {
                ['⚛️', '🔧', '💻', '🌐', '📱', '⚡', '🚀', '💡'][
                  Math.floor(Math.random() * 8)
                ]
              }
            </div>
          ))}

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.02}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Code Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="absolute text-green-400 font-mono text-xs animate-code-fall"
                style={{
                  left: `${(i * 15) % 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 backdrop-blur-sm">
            <svg
              className="w-5 h-5 mr-2 text-purple-400"
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
            <span className="text-sm font-medium text-purple-300">
              Innovation Driven Technology
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-white">About</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              RecursionSoft
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are a team of passionate innovators, crafting digital experiences
            that push the boundaries of what's possible. Where creativity meets
            technology, magic happens.
          </p>

          {/* Typing Animation */}
          <div className="mb-12">
            <div className="inline-block bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <span className="text-green-400 font-mono text-lg">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2 animate-number-count">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Mission & Vision
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driven by purpose, guided by innovation, and committed to
              excellence in every digital solution we create.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg animate-pulse-glow">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Our Mission
                    </h3>
                    <p className="text-purple-300 font-medium">
                      Empowering Digital Transformation
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  To empower businesses and startups with cutting-edge digital
                  solutions that drive growth, innovation, and lasting success.
                  We believe technology should be accessible, powerful, and
                  transformative.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Deliver innovative software solutions
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Foster long-term partnerships
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Drive measurable business impact
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg animate-pulse-glow">
                    🔮
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Our Vision
                    </h3>
                    <p className="text-cyan-300 font-medium">
                      Shaping Tomorrow's Technology
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  To be the leading force in digital innovation, creating
                  technologies that not only solve today's challenges but
                  anticipate and shape the future of how businesses and people
                  interact with technology.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pioneer emerging technologies
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Create sustainable digital ecosystems
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Inspire global innovation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision, every line of code, and
              every client interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                ></div>
                <div
                  className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${activeSection === index ? 'scale-105 border-white/40' : ''}`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg animate-pulse-glow`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="mt-6 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div
                      className={`h-1 rounded-full bg-gradient-to-r ${value.color} transition-all duration-1000 ${activeSection === index ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Tech Circuit Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="1"
                  fill="currentColor"
                  className="text-purple-400"
                />
                <path
                  d="M2,2 L18,2 M2,2 L2,18"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-purple-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technologies and frameworks that power our innovative
              solutions.
            </p>
          </div>

          {/* Interactive Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
              {
                name: 'Node.js',
                icon: '🟢',
                color: 'from-green-400 to-emerald-500',
              },
              {
                name: 'Python',
                icon: '🐍',
                color: 'from-yellow-400 to-orange-500',
              },
              {
                name: 'TypeScript',
                icon: '📘',
                color: 'from-blue-500 to-indigo-600',
              },
              { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-500' },
              {
                name: 'Docker',
                icon: '🐳',
                color: 'from-cyan-400 to-blue-500',
              },
              {
                name: 'GraphQL',
                icon: '🔗',
                color: 'from-pink-400 to-purple-500',
              },
              {
                name: 'MongoDB',
                icon: '🍃',
                color: 'from-green-500 to-teal-600',
              },
              {
                name: 'Next.js',
                icon: '▲',
                color: 'from-gray-400 to-gray-600',
              },
              {
                name: 'Flutter',
                icon: '💙',
                color: 'from-blue-400 to-cyan-400',
              },
              {
                name: 'Firebase',
                icon: '🔥',
                color: 'from-yellow-400 to-red-500',
              },
              {
                name: 'Kubernetes',
                icon: '⚙️',
                color: 'from-blue-500 to-purple-600',
              },
            ].map((tech, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                ></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 text-center">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <div className="text-sm font-medium text-white">
                    {tech.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Let's collaborate and turn your vision into a digital reality that
              exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-2xl transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Start a Conversation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="group border-2 border-purple-400/30 bg-purple-400/10 text-purple-300 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400/20 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  View Our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
