import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NovaBankProduct: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const features = [
    {
      icon: '🤖',
      title: 'AI Financial Insights',
      description: 'Advanced machine learning algorithms analyze your spending patterns and provide personalized financial recommendations.',
      details: 'Our proprietary AI engine processes over 10 million data points daily to deliver hyper-personalized financial insights.',
      metrics: { accuracy: '94%', users: '45K+', savings: '$2.3M' },
      color: 'from-blue-600 to-indigo-700',
      textColor: 'text-white',
      accentColor: 'bg-blue-500/20'
    },
    {
      icon: '⚡',
      title: 'Instant Transactions',
      description: 'Lightning-fast money transfers and payments with real-time processing and confirmation.',
      details: 'Experience sub-second transaction processing with our globally distributed infrastructure.',
      metrics: { speed: '&lt;500ms', uptime: '99.99%', countries: '150+' },
      color: 'from-emerald-600 to-teal-700',
      textColor: 'text-white',
      accentColor: 'bg-emerald-500/20'
    },
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      description: 'Multi-layered security with biometric authentication and blockchain technology.',
      details: 'Military-grade encryption, advanced fraud detection, and 24/7 security monitoring.',
      metrics: { encryption: 'AES-256', breaches: '0', coverage: '$1M' },
      color: 'from-red-600 to-rose-700',
      textColor: 'text-white',
      accentColor: 'bg-red-500/20'
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Intuitive mobile app with seamless cross-platform synchronization.',
      details: 'Native iOS and Android applications with offline capabilities and voice commands.',
      metrics: { rating: '4.8/5', downloads: '500K+', platforms: '4' },
      color: 'from-violet-600 to-purple-700',
      textColor: 'text-white',
      accentColor: 'bg-violet-500/20'
    }
  ];

  const screenshots = [
    { url: 'https://picsum.photos/seed/novabank-dashboard/1200/800', title: 'AI-Powered Dashboard', category: 'Dashboard' },
    { url: 'https://picsum.photos/seed/novabank-mobile/1200/800', title: 'Mobile Banking App', category: 'Mobile' },
    { url: 'https://picsum.photos/seed/novabank-analytics/1200/800', title: 'Advanced Analytics', category: 'Analytics' },
    { url: 'https://picsum.photos/seed/novabank-security/1200/800', title: 'Security Center', category: 'Security' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-purple-400/5 rounded-full blur-xl animate-ping"></div>
          
          {/* Floating Banking Icons */}
          <div className="absolute top-1/4 left-1/4 text-white/10 animate-float">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-1/4 text-white/10 animate-float-delayed">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-sm font-medium text-white/90">Next-Gen Digital Banking</span>
              </div>
              
              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">NovaBank</span>
                <span className="block text-blue-300">Revolution</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the future of banking with AI-powered financial insights, instant transactions, and bank-grade security. Transform your financial life with intelligent automation and personalized recommendations.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                  <div className="text-sm text-white/80">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$25M</div>
                  <div className="text-sm text-white/80">Series A</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <button className="group border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Visual */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://picsum.photos/seed/novabank-hero-main/700/500" 
                  alt="NovaBank Platform"
                  className="relative rounded-3xl shadow-2xl border border-white/20"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">$2,847.50</div>
                      <div className="text-xs text-gray-500">Available Balance</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-delayed">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Instant Transfer</div>
                      <div className="text-xs text-gray-500">&lt; 500ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Revolutionary Banking Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how NovaBank's cutting-edge technology transforms your financial experience with intelligent automation and personalized insights.
            </p>
          </div>

          {/* Feature Cards - Clean White Design */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl p-8 bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-100"
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                      }}
                    >
                      <span className="text-white">{feature.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                      {feature.details}
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(feature.metrics).map(([key, value], idx) => (
                        <div
                          key={idx}
                          className="text-center rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-200 hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}08, ${feature.color.split(' ')[3]}08)`,
                            borderColor: `${feature.color.split(' ')[1]}30`
                          }}
                        >
                          <div
                            className={`text-2xl font-extrabold mb-2 ${
                              index === 0 ? 'text-blue-600' :
                              index === 1 ? 'text-emerald-600' :
                              index === 2 ? 'text-red-600' :
                              'text-violet-600'
                            }`}
                            dangerouslySetInnerHTML={{ __html: value }}
                          ></div>
                          <div className="text-sm text-gray-700 capitalize font-semibold tracking-wide">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient Border on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}20, ${feature.color.split(' ')[3]}20)`,
                    padding: '2px'
                  }}
                >
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Experience Banking Reimagined</h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join 50,000+ users who have transformed their financial lives with NovaBank's intelligent platform.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Save 23% more with AI insights</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Transfer money in under 500ms</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Zero security breaches to date</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://picsum.photos/seed/novabank-feature/600/400"
                  alt="NovaBank Features"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See NovaBank in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our intuitive interface designed for modern banking experiences.
            </p>
          </div>

          {/* Main Screenshot */}
          <div className="mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <img
                src={screenshots[selectedScreenshot].url}
                alt={screenshots[selectedScreenshot].title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {screenshots[selectedScreenshot].title}
                </h3>
                <span className="text-sm text-blue-600 font-medium">
                  {screenshots[selectedScreenshot].category}
                </span>
              </div>
            </div>
          </div>

          {/* Screenshot Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setSelectedScreenshot(index)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  selectedScreenshot === index
                    ? 'ring-4 ring-blue-500 scale-105 shadow-xl'
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white text-sm font-medium truncate">
                    {screenshot.title}
                  </div>
                </div>
                {selectedScreenshot === index && (
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Banking?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join 50,000+ users who have revolutionized their financial lives with NovaBank's intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-blue-900 px-12 py-5 text-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Start Banking Revolution
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-12 py-5 text-lg font-bold text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovaBankProduct;
