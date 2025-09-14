import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopEaseProduct: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const demoScreens = [
    { 
      title: 'AI-Powered Storefront', 
      image: 'https://picsum.photos/seed/shopease-storefront/800/600',
      description: 'Beautiful, responsive storefront with intelligent product recommendations'
    },
    { 
      title: 'Advanced Analytics', 
      image: 'https://picsum.photos/seed/shopease-analytics/800/600',
      description: 'Comprehensive dashboard with real-time sales insights and customer behavior'
    },
    { 
      title: 'Mobile Commerce', 
      image: 'https://picsum.photos/seed/shopease-mobile/800/600',
      description: 'Native mobile experience with seamless checkout and push notifications'
    }
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI Recommendations',
      description: 'Increase sales by 35% with personalized product suggestions',
      color: 'from-orange-500 to-red-600',
      stats: '35% conversion boost'
    },
    {
      icon: '🏪',
      title: 'Multi-Vendor Support',
      description: 'Manage unlimited vendors with automated commission tracking',
      color: 'from-blue-500 to-indigo-600',
      stats: '5K+ active vendors'
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Optimized for mobile with 65% of traffic from mobile devices',
      color: 'from-green-500 to-emerald-600',
      stats: '65% mobile traffic'
    },
    {
      icon: '💳',
      title: 'Smart Checkout',
      description: 'Reduce cart abandonment by 45% with optimized checkout',
      color: 'from-purple-500 to-pink-600',
      stats: '45% less abandonment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shopping cart icons */}
          <div className="absolute top-20 left-20 text-white/10 animate-bounce">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 text-white/10 animate-pulse">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Floating product boxes */}
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-white/10 rounded-lg animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-orange-400/20 rounded-lg animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-red-400/20 rounded-lg animate-bounce"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <svg className="w-5 h-5 mr-2 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm font-medium text-white">E-commerce Reimagined</span>
              </div>
              
              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">ShopEase</span>
                <span className="block text-orange-300">Sell Smarter</span>
              </h1>
              
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Build your dream online store with AI-powered recommendations, multi-vendor support, and advanced analytics. Transform browsers into buyers with our intelligent e-commerce platform.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100K+</div>
                  <div className="text-sm text-orange-200">Active Stores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
                  <div className="text-sm text-orange-200">Sales Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.7★</div>
                  <div className="text-sm text-orange-200">User Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-white text-orange-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Selling Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <button className="group border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Live Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - E-commerce Dashboard */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Demo Carousel */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        {demoScreens[activeDemo].title}
                      </h3>
                      <div className="flex space-x-2">
                        {demoScreens.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveDemo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              activeDemo === index ? 'bg-orange-500' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={demoScreens[activeDemo].image} 
                      alt={demoScreens[activeDemo].title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm leading-relaxed">
                        {demoScreens[activeDemo].description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Sales Notification */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">New Sale!</div>
                      <div className="text-xs opacity-90">$247.99</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Analytics */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center space-x-3 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">+35% Sales</div>
                      <div className="text-xs opacity-90">This Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Powerful E-commerce Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, manage, and grow your online business with cutting-edge technology and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 ${
                    hoveredFeature === index 
                      ? `bg-gradient-to-br ${feature.color} text-white shadow-lg` 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-white/20 text-orange-600' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered E-commerce Intelligence */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">AI-Powered E-commerce Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to boost your sales, understand your customers, and optimize your store performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* AI Recommendations Engine */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  🤖
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Smart Product Recommendations</h3>
                  <p className="text-lg text-orange-600 font-medium">35% Higher Conversion Rates</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our AI analyzes customer behavior, purchase history, and browsing patterns to deliver hyper-personalized product recommendations that increase sales and customer satisfaction.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time behavioral analysis and personalization
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cross-selling and upselling optimization
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Seasonal and trending product suggestions
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  A/B testing for recommendation strategies
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Performance Metrics:</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">92%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">35%</div>
                    <div className="text-sm text-gray-600">Conv. Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">85K+</div>
                    <div className="text-sm text-gray-600">Stores</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">AI Recommendation Engine</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live AI</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Customer: Sarah M.</span>
                      <span className="text-sm text-orange-600 font-medium">High Intent</span>
                    </div>
                    <div className="text-sm text-gray-600">Viewing: Wireless Headphones → Recommended: Phone Cases</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                        <span className="font-medium">Premium Phone Case</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">+87% likely</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                        <span className="font-medium">Wireless Charger</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">+72% likely</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                        <span className="font-medium">Screen Protector</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">+65% likely</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-3 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold">AI Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Dashboard */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">Sales Analytics Dashboard</h4>
                  <div className="text-sm text-gray-500">Real-time</div>
                </div>

                {/* Revenue Chart */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
                    <span className="text-sm text-green-600 font-medium">↗ +23.5%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-end justify-between p-4">
                    <div className="w-8 bg-orange-400 rounded-t" style={{height: '60%'}}></div>
                    <div className="w-8 bg-orange-500 rounded-t" style={{height: '75%'}}></div>
                    <div className="w-8 bg-red-400 rounded-t" style={{height: '45%'}}></div>
                    <div className="w-8 bg-red-500 rounded-t" style={{height: '90%'}}></div>
                    <div className="w-8 bg-orange-600 rounded-t" style={{height: '100%'}}></div>
                    <div className="w-8 bg-red-600 rounded-t" style={{height: '85%'}}></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">$47.2K</div>
                    <div className="text-xs text-gray-600">This Month</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,247</div>
                    <div className="text-xs text-gray-600">Orders</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3.2%</div>
                    <div className="text-xs text-gray-600">Conversion</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">$38</div>
                    <div className="text-xs text-gray-600">Avg Order</div>
                  </div>
                </div>

                {/* Top Products */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900">Top Selling Products</h5>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">📱</div>
                      <span className="font-medium">iPhone 15 Case</span>
                    </div>
                    <span className="text-sm text-gray-600">247 sold</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">🎧</div>
                      <span className="font-medium">Wireless Earbuds</span>
                    </div>
                    <span className="text-sm text-gray-600">189 sold</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  📊
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-lg text-blue-600 font-medium">Real-time Business Intelligence</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Get deep insights into your business performance with comprehensive analytics, customer behavior tracking, and predictive forecasting to make data-driven decisions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      📈
                    </div>
                    <h4 className="font-semibold text-gray-900">Sales Forecasting</h4>
                  </div>
                  <p className="text-gray-600 text-sm">AI-powered predictions for future sales trends and inventory needs</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      👥
                    </div>
                    <h4 className="font-semibold text-gray-900">Customer Insights</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Detailed customer segmentation and lifetime value analysis</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      🎯
                    </div>
                    <h4 className="font-semibold text-gray-900">Marketing ROI</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Track campaign performance and optimize marketing spend</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      📋
                    </div>
                    <h4 className="font-semibold text-gray-900">Custom Reports</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Build custom dashboards and automated reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Vendor Marketplace */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Multi-Vendor Marketplace</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scale your business by enabling multiple vendors to sell through your platform with automated management and commission tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Vendor Management */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                🏪
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vendor Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Streamlined vendor onboarding, product approval workflows, and performance monitoring.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Active Vendors</span>
                  <span className="text-sm text-green-600 font-medium">5,247</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Pending Approval</span>
                  <span className="text-sm text-blue-600 font-medium">127</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Products Listed</span>
                  <span className="text-sm text-purple-600 font-medium">847K</span>
                </div>
              </div>
            </div>

            {/* Commission Tracking */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Commissions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Flexible commission structures with automated calculations and instant payouts.
              </p>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">$2.4M</div>
                    <div className="text-sm text-gray-600">Total Commissions</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">95%</div>
                    <div className="text-xs text-gray-600">Automation</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">&lt;24h</div>
                    <div className="text-xs text-gray-600">Payout Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplace Analytics */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                📈
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketplace Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive insights into vendor performance, sales trends, and marketplace health.
              </p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">📊</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Top Vendor: TechStore</div>
                    <div className="text-xs text-gray-500">$47K this month</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">🏆</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Best Category: Electronics</div>
                    <div className="text-xs text-gray-500">35% of total sales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-orange-100 mb-12 leading-relaxed">
              Join 100,000+ successful online stores powered by ShopEase. Start selling smarter today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-orange-900 px-12 py-5 text-lg font-bold hover:bg-orange-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Launch Your Store
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

export default ShopEaseProduct;
