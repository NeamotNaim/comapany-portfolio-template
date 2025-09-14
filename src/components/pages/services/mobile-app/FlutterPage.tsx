import React from 'react';
import { Link } from 'react-router-dom';

const FlutterPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-sky-800 to-cyan-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/mobile-app" className="hover:text-white transition-colors">Mobile Apps</Link>
              <span>/</span>
              <span className="text-white">Flutter Apps</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
              <span className="text-sm font-medium text-white">Flutter Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Beautiful & Fast</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300">
                Flutter Apps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build stunning, natively compiled applications for mobile, web, and desktop from a single codebase using Google's Flutter framework and Dart programming language.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-blue-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Flutter App Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Flutter Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Flutter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Flutter App Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. With its fast development cycle and expressive UI, Flutter delivers exceptional user experiences across all platforms.
              </p>
              <div className="space-y-4">
                {[
                  'Single codebase for mobile, web, and desktop',
                  'Native performance with compiled Dart code',
                  'Beautiful Material Design and Cupertino widgets',
                  'Hot reload for instant development feedback',
                  'Rich ecosystem of packages and plugins',
                  'Backed by Google with strong community support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-sky-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Flutter App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">60fps</div>
                <div className="text-sm">Smooth Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flutter Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Flutter Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern Flutter ecosystem and tools for building exceptional multi-platform applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Flutter', icon: '🦋', desc: 'Google\'s UI toolkit framework' },
              { name: 'Dart', icon: '🎯', desc: 'Modern programming language' },
              { name: 'Material Design', icon: '🎨', desc: 'Google\'s design system' },
              { name: 'Cupertino', icon: '🍎', desc: 'iOS-style design widgets' },
              { name: 'Firebase', icon: '🔥', desc: 'Backend services integration' },
              { name: 'Provider/Riverpod', icon: '🔄', desc: 'State management solutions' },
              { name: 'Dio', icon: '🌐', desc: 'HTTP client for API calls' },
              { name: 'Hive/SQLite', icon: '💾', desc: 'Local data storage' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flutter Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Flutter App Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced Flutter features that create beautiful and performant applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Animations',
                description: 'Smooth, 60fps animations with Flutter\'s animation framework',
                icon: '✨'
              },
              {
                title: 'Adaptive UI',
                description: 'Platform-aware UI that adapts to iOS and Android design guidelines',
                icon: '📱'
              },
              {
                title: 'Hot Reload',
                description: 'Instant code changes reflection for rapid development cycles',
                icon: '⚡'
              },
              {
                title: 'Native Performance',
                description: 'Compiled to native ARM code for optimal performance',
                icon: '🚀'
              },
              {
                title: 'Rich Widgets',
                description: 'Extensive widget library for building complex UIs',
                icon: '🧩'
              },
              {
                title: 'Platform Integration',
                description: 'Access to native APIs and platform-specific features',
                icon: '🔗'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Platform Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Multi-Platform Development with Flutter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build for multiple platforms with a single codebase and consistent user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: 'Mobile Apps',
                description: 'Native iOS and Android apps with platform-specific optimizations',
                icon: '📱',
                features: ['60fps Performance', 'Platform Widgets', 'Native APIs', 'App Store Ready']
              },
              {
                platform: 'Web Applications',
                description: 'Progressive web apps that run in modern browsers',
                icon: '🌐',
                features: ['Responsive Design', 'PWA Support', 'SEO Friendly', 'Fast Loading']
              },
              {
                platform: 'Desktop Apps',
                description: 'Native desktop applications for Windows, macOS, and Linux',
                icon: '💻',
                features: ['Native Look', 'File System Access', 'Multi-window', 'OS Integration']
              },
              {
                platform: 'Embedded Systems',
                description: 'Flutter for embedded devices and IoT applications',
                icon: '🔧',
                features: ['Low Resource Usage', 'Custom Hardware', 'Real-time Updates', 'Embedded UI']
              }
            ].map((platform, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{platform.platform}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Flutter Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your Flutter app development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Flutter App',
                price: '$20,000',
                timeline: '2-4 months',
                features: [
                  'Mobile app (iOS & Android)',
                  'Material Design UI',
                  'Basic state management',
                  'API integration',
                  'App store deployment',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Flutter App',
                price: '$35,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Web application included',
                  'Custom animations',
                  'Advanced state management',
                  'Push notifications',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Premium Flutter App',
                price: '$55,000',
                timeline: '4-7 months',
                features: [
                  'Everything in Advanced',
                  'Desktop applications',
                  'Complex integrations',
                  'Performance optimization',
                  'Custom plugins',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-sky-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-sky-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-sky-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Flutter App?</h2>
          <p className="text-xl text-sky-200 mb-8 max-w-2xl mx-auto">
            Create beautiful, fast applications that work seamlessly across mobile, web, and desktop platforms.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-blue-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Flutter Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FlutterPage;
