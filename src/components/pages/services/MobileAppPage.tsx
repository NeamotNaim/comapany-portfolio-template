import React from 'react';
import { Link } from 'react-router-dom';

const mobileAppTypes = [
  {
    title: 'Native iOS Apps',
    description: 'High-performance iOS applications built with Swift and optimized for Apple devices.',
    features: ['Swift/SwiftUI', 'Core Data', 'Push Notifications', 'App Store Optimization'],
    icon: 'https://cdn-icons-png.flaticon.com/512/179/179309.png',
    platforms: ['iPhone', 'iPad', 'Apple Watch', 'Apple TV'],
    timeline: '3-6 months',
    price: 'Starting from $25,000',
    link: '/services/mobile-app/ios'
  },
  {
    title: 'Native Android Apps',
    description: 'Robust Android applications using Kotlin/Java with Material Design principles.',
    features: ['Kotlin/Java', 'Room Database', 'Firebase Integration', 'Google Play Store'],
    icon: 'https://cdn-icons-png.flaticon.com/512/179/179328.png',
    platforms: ['Android Phones', 'Tablets', 'Wear OS', 'Android TV'],
    timeline: '3-6 months',
    price: 'Starting from $22,000',
    link: '/services/mobile-app/android'
  },
  {
    title: 'Cross-Platform Apps (React Native)',
    description: 'Cost-effective apps that run on both iOS and Android with shared codebase.',
    features: ['React Native', 'Redux/Context', 'Native Modules', 'Code Sharing'],
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
    platforms: ['iOS', 'Android', 'Web (with Expo)'],
    timeline: '2-4 months',
    price: 'Starting from $18,000',
    link: '/services/mobile-app/react-native'
  },
  {
    title: 'Cross-Platform Apps (Flutter)',
    description: 'Beautiful, fast apps with Flutter framework and Dart programming language.',
    features: ['Flutter/Dart', 'Material Design', 'Cupertino Widgets', 'Hot Reload'],
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png',
    platforms: ['iOS', 'Android', 'Web', 'Desktop'],
    timeline: '2-4 months',
    price: 'Starting from $20,000',
    link: '/services/mobile-app/flutter'
  },
  {
    title: 'Progressive Web Apps (PWA)',
    description: 'Web applications that provide native app-like experience across all devices.',
    features: ['Service Workers', 'Offline Support', 'Push Notifications', 'App-like UI'],
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
    platforms: ['Web Browsers', 'Mobile Browsers', 'Desktop'],
    timeline: '1-3 months',
    price: 'Starting from $15,000',
    link: '/services/mobile-app/pwa'
  },
  {
    title: 'Enterprise Mobile Apps',
    description: 'Secure, scalable mobile solutions for enterprise workforce and operations.',
    features: ['MDM Integration', 'SSO Authentication', 'Offline Sync', 'Enterprise Security'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    platforms: ['iOS', 'Android', 'Custom Enterprise Stores'],
    timeline: '4-8 months',
    price: 'Starting from $35,000',
    link: '/services/mobile-app/enterprise'
  }
];

const MobileAppPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Mobile App Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Native & Cross-Platform</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300">
                Mobile Applications
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Create engaging mobile experiences with our comprehensive mobile app development services for iOS, Android, and cross-platform solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-blue-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get App Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View App Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Types Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mobile App Development Types
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From native iOS and Android apps to cross-platform solutions, we build mobile applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileAppTypes.map((app, i) => (
              <Link
                key={i}
                to={app.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-blue-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <img src={app.icon} alt={app.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.platforms.map((platform, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {app.timeline}</span>
                    <span><strong>Price:</strong> {app.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-blue-700 group-hover:text-blue-800 transition-colors">
                    Learn More
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mobile App Development Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              From concept to app store, we follow a proven development methodology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Requirements analysis, user research, and technical planning.' },
              { step: '02', title: 'Design & Prototyping', desc: 'UI/UX design, wireframes, and interactive prototypes.' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and quality assurance.' },
              { step: '04', title: 'Launch & Support', desc: 'App store submission, deployment, and ongoing maintenance.' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's turn your mobile app idea into reality with our expert development team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-blue-900 hover:bg-gray-100 transition-colors"
          >
            Start Your App Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;
