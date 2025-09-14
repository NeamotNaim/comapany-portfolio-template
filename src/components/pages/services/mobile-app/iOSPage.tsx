import React from 'react';
import { Link } from 'react-router-dom';

const iOSPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Native iOS Apps</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              <span className="text-sm font-medium text-white">Native iOS Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Premium Quality</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                Native iOS Apps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build high-performance iOS applications with Swift and SwiftUI, optimized for iPhone, iPad, Apple Watch, and Apple TV with seamless App Store integration.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-blue-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get iOS App Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View iOS Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Native iOS Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Native iOS App Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Native iOS apps are built specifically for Apple's ecosystem using Swift and SwiftUI. They provide the best performance, user experience, and access to all iOS features and capabilities, ensuring your app feels truly native to Apple users.
              </p>
              <div className="space-y-4">
                {[
                  'Optimal performance with native Swift/SwiftUI code',
                  'Full access to iOS APIs and hardware features',
                  'Seamless integration with Apple ecosystem',
                  'Superior user experience with native UI components',
                  'App Store optimization and compliance',
                  'Support for iPhone, iPad, Apple Watch, and Apple TV'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Native iOS App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Native Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              iOS Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern Apple technologies and frameworks for building exceptional iOS applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Swift', icon: '🦉', desc: 'Modern, safe programming language' },
              { name: 'SwiftUI', icon: '🎨', desc: 'Declarative UI framework' },
              { name: 'UIKit', icon: '📱', desc: 'Traditional iOS UI framework' },
              { name: 'Core Data', icon: '💾', desc: 'Data persistence framework' },
              { name: 'CloudKit', icon: '☁️', desc: 'Apple cloud services' },
              { name: 'ARKit', icon: '🥽', desc: 'Augmented reality framework' },
              { name: 'Core ML', icon: '🧠', desc: 'Machine learning framework' },
              { name: 'HealthKit', icon: '❤️', desc: 'Health data integration' }
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

      {/* iOS Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              iOS App Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced iOS features that make your app stand out in the App Store
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Push Notifications',
                description: 'Engage users with rich, interactive push notifications',
                icon: '🔔'
              },
              {
                title: 'Face ID / Touch ID',
                description: 'Secure biometric authentication for enhanced security',
                icon: '🔐'
              },
              {
                title: 'Siri Integration',
                description: 'Voice commands and Siri Shortcuts for hands-free interaction',
                icon: '🎤'
              },
              {
                title: 'Apple Pay',
                description: 'Seamless and secure payment processing',
                icon: '💳'
              },
              {
                title: 'Core Location',
                description: 'GPS, geofencing, and location-based services',
                icon: '📍'
              },
              {
                title: 'Camera & Photos',
                description: 'Advanced camera features and photo library integration',
                icon: '📸'
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

      {/* Apple Ecosystem Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Apple Ecosystem Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build apps that work seamlessly across all Apple devices and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                device: 'iPhone',
                description: 'Optimized for all iPhone models with responsive design',
                icon: '📱',
                features: ['Touch Interface', 'Face ID/Touch ID', 'Camera Integration', 'GPS & Sensors']
              },
              {
                device: 'iPad',
                description: 'Enhanced tablet experience with larger screen optimization',
                icon: '📱',
                features: ['Split View', 'Slide Over', 'Apple Pencil', 'Keyboard Support']
              },
              {
                device: 'Apple Watch',
                description: 'Companion watchOS apps for quick interactions',
                icon: '⌚',
                features: ['Complications', 'Digital Crown', 'Health Tracking', 'Quick Actions']
              },
              {
                device: 'Apple TV',
                description: 'Big screen experiences with tvOS applications',
                icon: '📺',
                features: ['Remote Control', 'Focus Engine', 'Top Shelf', 'Siri Remote']
              }
            ].map((platform, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{platform.device}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
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
              iOS App Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your iOS app development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic iOS App',
                price: '$25,000',
                timeline: '3-4 months',
                features: [
                  'Native Swift development',
                  'iPhone optimization',
                  'Basic iOS features',
                  'App Store submission',
                  'Core Data integration',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced iOS App',
                price: '$40,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'iPad optimization',
                  'Advanced iOS features',
                  'Push notifications',
                  'Apple Pay integration',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Premium iOS App',
                price: '$65,000',
                timeline: '6-8 months',
                features: [
                  'Everything in Advanced',
                  'Apple Watch app',
                  'Siri integration',
                  'AR/ML features',
                  'Custom animations',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your iOS App?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Create a premium iOS application that delights Apple users and stands out in the App Store.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-blue-900 hover:bg-gray-100 transition-colors"
          >
            Start Your iOS Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default iOSPage;
