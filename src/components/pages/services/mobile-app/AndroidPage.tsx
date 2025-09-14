import React from 'react';
import { Link } from 'react-router-dom';

const AndroidPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Native Android Apps</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Native Android Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Powerful & Flexible</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">
                Native Android Apps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build robust Android applications with Kotlin and Java, leveraging Material Design principles and Google's powerful ecosystem for exceptional user experiences.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-green-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Android App Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Android Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Native Android Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Native Android App Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Native Android apps are built specifically for Google's Android platform using Kotlin and Java. They provide optimal performance, full access to Android APIs, and seamless integration with Google services and the broader Android ecosystem.
              </p>
              <div className="space-y-4">
                {[
                  'Superior performance with native Kotlin/Java code',
                  'Full access to Android APIs and hardware features',
                  'Material Design for consistent user experience',
                  'Google Play Store optimization and compliance',
                  'Integration with Google services and Firebase',
                  'Support for phones, tablets, Wear OS, and Android TV'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop"
                alt="Native Android App Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Native Android</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Android Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Android Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern Android technologies and frameworks for building exceptional mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Kotlin', icon: '🎯', desc: 'Modern Android programming language' },
              { name: 'Java', icon: '☕', desc: 'Traditional Android development' },
              { name: 'Jetpack Compose', icon: '🎨', desc: 'Modern UI toolkit' },
              { name: 'Room Database', icon: '💾', desc: 'Local data persistence' },
              { name: 'Firebase', icon: '🔥', desc: 'Google cloud services' },
              { name: 'Retrofit', icon: '🌐', desc: 'HTTP client for APIs' },
              { name: 'Dagger/Hilt', icon: '💉', desc: 'Dependency injection' },
              { name: 'WorkManager', icon: '⚙️', desc: 'Background task management' }
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

      {/* Android Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Android App Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced Android features that leverage Google's powerful platform capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Push Notifications',
                description: 'Firebase Cloud Messaging for rich, targeted notifications',
                icon: '🔔'
              },
              {
                title: 'Biometric Authentication',
                description: 'Fingerprint, face unlock, and secure authentication',
                icon: '🔐'
              },
              {
                title: 'Google Assistant',
                description: 'Voice commands and Google Assistant integration',
                icon: '🎤'
              },
              {
                title: 'Google Pay',
                description: 'Seamless payment integration with Google Pay',
                icon: '💳'
              },
              {
                title: 'Location Services',
                description: 'GPS, geofencing, and location-based features',
                icon: '📍'
              },
              {
                title: 'Camera & ML Kit',
                description: 'Advanced camera features with machine learning',
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

      {/* Android Ecosystem Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Android Ecosystem Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build apps that work seamlessly across all Android devices and form factors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                device: 'Android Phones',
                description: 'Optimized for all Android phone sizes and configurations',
                icon: '📱',
                features: ['Material Design', 'Adaptive UI', 'Gesture Navigation', 'Dark Mode']
              },
              {
                device: 'Android Tablets',
                description: 'Large screen optimization with enhanced productivity',
                icon: '📱',
                features: ['Multi-window', 'Drag & Drop', 'Keyboard Support', 'Desktop Mode']
              },
              {
                device: 'Wear OS',
                description: 'Companion smartwatch apps for quick interactions',
                icon: '⌚',
                features: ['Watch Faces', 'Health Tracking', 'Quick Actions', 'Voice Commands']
              },
              {
                device: 'Android TV',
                description: 'Big screen experiences for living room entertainment',
                icon: '📺',
                features: ['Remote Control', 'Voice Search', 'Content Discovery', 'Gaming']
              }
            ].map((platform, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{platform.device}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
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
              Android App Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your Android app development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Android App',
                price: '$22,000',
                timeline: '3-4 months',
                features: [
                  'Native Kotlin development',
                  'Phone optimization',
                  'Material Design UI',
                  'Google Play submission',
                  'Room database',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Android App',
                price: '$35,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'Tablet optimization',
                  'Firebase integration',
                  'Push notifications',
                  'Google Pay integration',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Premium Android App',
                price: '$55,000',
                timeline: '6-8 months',
                features: [
                  'Everything in Advanced',
                  'Wear OS companion app',
                  'Google Assistant integration',
                  'ML Kit features',
                  'Custom animations',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-green-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-green-600 text-white hover:bg-green-700'
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
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Android App?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Create a powerful Android application that reaches billions of users on Google Play Store.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-green-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Android Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AndroidPage;
