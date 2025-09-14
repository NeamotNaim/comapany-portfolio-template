import React from 'react';
import { Link } from 'react-router-dom';

const MobilePWAPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Mobile PWAs</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
              <span className="text-sm font-medium text-white">Mobile Progressive Web Apps</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">App-Like Experience</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300">
                Mobile PWAs
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build progressive web applications that deliver native app experiences through mobile browsers, with offline capabilities, push notifications, and home screen installation.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-purple-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Mobile PWA Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View PWA Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mobile PWA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Mobile Progressive Web Apps
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Mobile PWAs combine the best of web and mobile apps, delivering app-like experiences through mobile browsers. They work offline, send push notifications, and can be installed on home screens without app store approval.
              </p>
              <div className="space-y-4">
                {[
                  'No app store approval required for deployment',
                  'Instant updates without user intervention',
                  'Works across all mobile browsers and devices',
                  'Offline functionality with service workers',
                  'Push notifications for user engagement',
                  'Home screen installation for easy access'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Mobile Progressive Web App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">0s</div>
                <div className="text-sm">Install Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile PWA Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Mobile PWA Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern web technologies optimized for mobile PWA development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Service Workers', icon: '⚙️', desc: 'Offline functionality and caching' },
              { name: 'Web App Manifest', icon: '📱', desc: 'Home screen installation' },
              { name: 'Push API', icon: '🔔', desc: 'Mobile push notifications' },
              { name: 'Cache API', icon: '💾', desc: 'Offline data storage' },
              { name: 'Responsive Design', icon: '📐', desc: 'Mobile-first layouts' },
              { name: 'Touch Gestures', icon: '👆', desc: 'Native touch interactions' },
              { name: 'Web Share API', icon: '📤', desc: 'Native sharing capabilities' },
              { name: 'Geolocation API', icon: '📍', desc: 'Location-based features' }
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

      {/* Mobile PWA Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Mobile PWA Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that make mobile PWAs feel like native apps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Offline-First Design',
                description: 'App works seamlessly without internet connection',
                icon: '📶'
              },
              {
                title: 'Add to Home Screen',
                description: 'One-tap installation directly from browser',
                icon: '🏠'
              },
              {
                title: 'Push Notifications',
                description: 'Engage users with timely mobile notifications',
                icon: '🔔'
              },
              {
                title: 'App-Like Navigation',
                description: 'Smooth transitions and native-feeling navigation',
                icon: '🧭'
              },
              {
                title: 'Touch Optimized',
                description: 'Gesture-based interactions for mobile devices',
                icon: '👆'
              },
              {
                title: 'Fast Loading',
                description: 'Instant loading with smart caching strategies',
                icon: '⚡'
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

      {/* Mobile PWA Advantages Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why Choose Mobile PWAs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advantages of Progressive Web Apps for mobile experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'No App Store Hassles',
                description: 'Skip app store approval process and fees',
                icon: '🚫',
                stats: '0% app store fees'
              },
              {
                title: 'Instant Updates',
                description: 'Updates deploy immediately to all users',
                icon: '🔄',
                stats: 'Real-time deployment'
              },
              {
                title: 'Universal Compatibility',
                description: 'Works on any device with a modern browser',
                icon: '🌐',
                stats: '100% device coverage'
              },
              {
                title: 'Lower Development Cost',
                description: 'Single codebase for all mobile platforms',
                icon: '💰',
                stats: 'Up to 60% cost savings'
              },
              {
                title: 'Better Discoverability',
                description: 'SEO-friendly and searchable by search engines',
                icon: '🔍',
                stats: 'Full SEO benefits'
              },
              {
                title: 'Faster Time-to-Market',
                description: 'No waiting for app store approval',
                icon: '⚡',
                stats: 'Instant deployment'
              }
            ].map((advantage, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 mb-4">{advantage.description}</p>
                <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                  {advantage.stats}
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
              Mobile PWA Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your mobile PWA development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Mobile PWA',
                price: '$15,000',
                timeline: '1-3 months',
                features: [
                  'Mobile-optimized design',
                  'Basic offline functionality',
                  'Home screen installation',
                  'Responsive layouts',
                  'Basic push notifications',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Mobile PWA',
                price: '$25,000',
                timeline: '2-4 months',
                features: [
                  'Everything in Basic',
                  'Advanced offline features',
                  'Background sync',
                  'Rich push notifications',
                  'App-like animations',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Premium Mobile PWA',
                price: '$40,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Advanced',
                  'Complex offline strategies',
                  'Advanced integrations',
                  'Performance optimization',
                  'Custom features',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-24 bg-gradient-to-r from-purple-900 to-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Mobile PWA?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Create an app-like mobile experience that works everywhere without app store limitations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-purple-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Mobile PWA Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobilePWAPage;
