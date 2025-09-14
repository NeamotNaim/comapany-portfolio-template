import React from 'react';
import { Link } from 'react-router-dom';

const PWAPage: React.FC = () => {
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
              <Link to="/services/web-app" className="hover:text-white transition-colors">Web Applications</Link>
              <span>/</span>
              <span className="text-white">Progressive Web Apps</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
              <span className="text-sm font-medium text-white">Progressive Web Apps</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Native App Experience</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300">
                Progressive Web Apps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build web applications that feel like native mobile apps with offline capabilities, push notifications, and app-like experiences across all devices.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-purple-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get PWA Quote</span>
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

      {/* What is PWA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                What are Progressive Web Apps?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver app-like experiences to users. They work offline, send push notifications, and can be installed on devices like native apps.
              </p>
              <div className="space-y-4">
                {[
                  'Works offline with cached content and data',
                  'Installable on home screen without app stores',
                  'Push notifications for user engagement',
                  'Fast loading with service worker caching',
                  'Responsive design for all screen sizes',
                  'Secure HTTPS connection required'
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
                alt="Progressive Web App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Offline Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PWA Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Core PWA Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that make Progressive Web Apps powerful and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Service Workers',
                description: 'Background scripts that enable offline functionality and caching',
                icon: '⚙️'
              },
              {
                title: 'Web App Manifest',
                description: 'JSON file that makes your app installable on devices',
                icon: '📱'
              },
              {
                title: 'Offline Support',
                description: 'Continue using the app even without internet connection',
                icon: '📶'
              },
              {
                title: 'Push Notifications',
                description: 'Engage users with timely notifications and updates',
                icon: '🔔'
              },
              {
                title: 'App Shell Architecture',
                description: 'Fast loading UI shell that works offline',
                icon: '🏗️'
              },
              {
                title: 'Background Sync',
                description: 'Sync data when connection is restored',
                icon: '🔄'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              PWA Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern tools and frameworks for building high-performance Progressive Web Apps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️', desc: 'Component-based UI development' },
              { name: 'Service Workers', icon: '⚙️', desc: 'Background processing & caching' },
              { name: 'Workbox', icon: '🧰', desc: 'PWA libraries by Google' },
              { name: 'Web Push', icon: '📨', desc: 'Push notification service' },
              { name: 'IndexedDB', icon: '🗄️', desc: 'Client-side database storage' },
              { name: 'Lighthouse', icon: '🔍', desc: 'PWA auditing and optimization' },
              { name: 'Webpack', icon: '📦', desc: 'Module bundling for PWAs' },
              { name: 'Firebase', icon: '🔥', desc: 'Backend services for PWAs' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              PWA Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industries and applications where PWAs deliver exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce & Retail',
                description: 'Offline browsing, push notifications for deals, fast checkout experiences',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                benefits: ['Offline Product Browsing', 'Push Sale Notifications', 'Fast Mobile Checkout']
              },
              {
                title: 'News & Media',
                description: 'Offline reading, breaking news notifications, fast content loading',
                image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
                benefits: ['Offline Article Reading', 'Breaking News Alerts', 'Fast Content Loading']
              },
              {
                title: 'Social & Communication',
                description: 'Offline messaging, real-time notifications, app-like experience',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
                benefits: ['Offline Message Access', 'Real-time Notifications', 'Native App Feel']
              }
            ].map((useCase, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
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
              PWA Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your Progressive Web App needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic PWA',
                price: '$18,000',
                timeline: '2-3 months',
                features: [
                  'Service Worker setup',
                  'Web App Manifest',
                  'Basic offline functionality',
                  'Installable app',
                  'Responsive design',
                  '3 months support'
                ]
              },
              {
                name: 'Advanced PWA',
                price: '$28,000',
                timeline: '3-4 months',
                features: [
                  'Everything in Basic',
                  'Push notifications',
                  'Background sync',
                  'Advanced caching strategies',
                  'Performance optimization',
                  '6 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise PWA',
                price: '$45,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Advanced',
                  'Custom offline strategies',
                  'Advanced analytics',
                  'Multi-platform optimization',
                  'Enterprise security',
                  '12 months support'
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your PWA?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Create a Progressive Web App that delivers native app experiences across all devices.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-purple-900 hover:bg-gray-100 transition-colors"
          >
            Start Your PWA Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PWAPage;
