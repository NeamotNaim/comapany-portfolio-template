import React from 'react';
import { Link } from 'react-router-dom';

const ReactNativePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">React Native Apps</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
              <span className="text-sm font-medium text-white">React Native Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Cross-Platform Excellence</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
                React Native Apps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build cost-effective mobile applications that run natively on both iOS and Android with a single codebase, leveraging React's powerful ecosystem and JavaScript expertise.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-cyan-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get React Native Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View React Native Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is React Native Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                React Native App Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                React Native enables building truly native mobile apps using JavaScript and React. With a single codebase, you can deploy to both iOS and Android platforms while maintaining native performance and user experience across devices.
              </p>
              <div className="space-y-4">
                {[
                  'Single codebase for iOS and Android platforms',
                  'Native performance with JavaScript flexibility',
                  'Faster development and time-to-market',
                  'Cost-effective solution with shared resources',
                  'Hot reloading for rapid development cycles',
                  'Access to native APIs and third-party libraries'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="React Native App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2x</div>
                <div className="text-sm">Faster Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React Native Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              React Native Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern React Native ecosystem and tools for building exceptional cross-platform apps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React Native', icon: '⚛️', desc: 'Cross-platform mobile framework' },
              { name: 'TypeScript', icon: '📘', desc: 'Type-safe JavaScript development' },
              { name: 'Redux/Zustand', icon: '🔄', desc: 'State management solutions' },
              { name: 'React Navigation', icon: '🧭', desc: 'Navigation and routing' },
              { name: 'Expo', icon: '🚀', desc: 'Development platform and tools' },
              { name: 'Firebase', icon: '🔥', desc: 'Backend services and analytics' },
              { name: 'AsyncStorage', icon: '💾', desc: 'Local data persistence' },
              { name: 'React Query', icon: '🔍', desc: 'Data fetching and caching' }
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

      {/* React Native Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              React Native App Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cross-platform features that work seamlessly on both iOS and Android
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Push Notifications',
                description: 'Cross-platform push notifications with Firebase and native modules',
                icon: '🔔'
              },
              {
                title: 'Native Modules',
                description: 'Access to platform-specific APIs and native functionality',
                icon: '🔗'
              },
              {
                title: 'Offline Support',
                description: 'Offline-first architecture with data synchronization',
                icon: '📶'
              },
              {
                title: 'Camera & Media',
                description: 'Camera access, image processing, and media handling',
                icon: '📸'
              },
              {
                title: 'Geolocation',
                description: 'GPS tracking, maps integration, and location services',
                icon: '📍'
              },
              {
                title: 'Biometric Auth',
                description: 'Fingerprint and face recognition authentication',
                icon: '🔐'
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

      {/* Cross-Platform Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Cross-Platform Development Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why React Native is the smart choice for modern mobile app development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Develop once, deploy everywhere. Reduce development costs by up to 50%',
                icon: '💰',
                stats: 'Up to 50% cost savings'
              },
              {
                title: 'Faster Time-to-Market',
                description: 'Launch on both platforms simultaneously with shared codebase',
                icon: '⚡',
                stats: '2x faster development'
              },
              {
                title: 'Consistent UX',
                description: 'Maintain consistent user experience across iOS and Android',
                icon: '🎨',
                stats: '95% code sharing'
              },
              {
                title: 'Easy Maintenance',
                description: 'Update both apps simultaneously with single codebase changes',
                icon: '🔧',
                stats: 'Single maintenance cycle'
              },
              {
                title: 'Large Community',
                description: 'Benefit from React Native\'s massive developer community',
                icon: '👥',
                stats: '2M+ developers'
              },
              {
                title: 'Proven Success',
                description: 'Used by Facebook, Instagram, Airbnb, and many Fortune 500 companies',
                icon: '🏆',
                stats: 'Fortune 500 trusted'
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">
                  {benefit.stats}
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
              React Native Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your cross-platform app development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic React Native App',
                price: '$18,000',
                timeline: '2-3 months',
                features: [
                  'Cross-platform development',
                  'Basic UI components',
                  'API integration',
                  'App store deployment',
                  'Basic navigation',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced React Native App',
                price: '$30,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Custom native modules',
                  'Push notifications',
                  'Offline functionality',
                  'Advanced animations',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Premium React Native App',
                price: '$45,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Advanced',
                  'Complex integrations',
                  'Performance optimization',
                  'Custom UI components',
                  'Advanced security',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-cyan-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
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
      <section className="py-24 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your React Native App?</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Create a cost-effective cross-platform mobile application that reaches users on both iOS and Android.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-cyan-900 hover:bg-gray-100 transition-colors"
          >
            Start Your React Native Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReactNativePage;
