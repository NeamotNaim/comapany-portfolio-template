import React from 'react';
import { Link } from 'react-router-dom';

const EnergyGridCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated energy patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-amber-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-orange-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-14 h-14 bg-yellow-300/25 rounded-full animate-ping"></div>
          {/* Energy grid lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-white">Smart Energy Case Study</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="block">EnergyGrid</span>
              <span className="block text-amber-300">Smart Utility Platform</span>
            </h1>
            
            <p className="mt-8 max-w-4xl mx-auto text-xl text-amber-100 leading-relaxed">
              Revolutionary smart grid management platform integrating renewable energy sources, AI-powered demand forecasting, and automated load balancing to serve over 5 million households with 99.8% reliability while reducing energy waste by 25%.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center rounded-full bg-amber-100/20 border border-amber-200/30 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Smart Grid Technology
              </div>
              <div className="inline-flex items-center rounded-full bg-amber-100/20 border border-amber-200/30 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Renewable Integration
              </div>
              <div className="inline-flex items-center rounded-full bg-amber-100/20 border border-amber-200/30 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                AI Load Balancing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors">25%</div>
              <div className="text-sm text-gray-600 font-medium">Energy Waste Reduction</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">40%</div>
              <div className="text-sm text-gray-600 font-medium">Renewable Energy Usage</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors">99.8%</div>
              <div className="text-sm text-gray-600 font-medium">Grid Reliability</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:text-amber-700 transition-colors">5M+</div>
              <div className="text-sm text-gray-600 font-medium">Households Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Energy Challenge Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/energygrid-problem/900/700" 
                    alt="Traditional energy grid challenges" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Before: Outdated Grid Infrastructure</h3>
                    <p className="text-lg opacity-90">Inefficient energy distribution, massive waste, poor renewable integration</p>
                  </div>
                </div>
                
                {/* Problem indicators with energy theme */}
                <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold">35%</div>
                    <div className="text-xs">Energy Waste</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15%</div>
                    <div className="text-xs">Renewable Mix</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-yellow-500 text-white rounded-2xl p-3 shadow-xl animate-ping">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                The Energy Crisis
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">When the Grid Can't Keep Up</h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  EnergyGrid Corporation was struggling with an aging electrical infrastructure that couldn't efficiently integrate renewable energy sources or adapt to modern demand patterns. Their traditional grid was wasting massive amounts of energy while failing to meet sustainability goals.
                </p>
                <p>
                  The energy sector was facing unprecedented challenges: increasing renewable energy adoption, fluctuating demand patterns, and the need for real-time grid optimization. Traditional systems simply couldn't handle the complexity of modern energy distribution.
                </p>
              </div>
              
              {/* Critical Energy Issues */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-red-800">35% Energy Waste</h3>
                    <p className="text-red-700 text-sm mt-1">Inefficient distribution and poor load balancing causing massive energy losses</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-orange-800">Poor Renewable Integration</h3>
                    <p className="text-orange-700 text-sm mt-1">Only 15% renewable energy mix due to grid instability and storage issues</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-yellow-800">Frequent Outages</h3>
                    <p className="text-yellow-700 text-sm mt-1">Grid reliability at only 94% causing business disruptions and customer complaints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Grid Solution */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-green-100 px-6 py-3 text-sm font-medium text-green-800 mb-8">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Our Smart Grid Revolution
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Intelligent Energy Management</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We engineered a comprehensive smart grid platform that seamlessly integrates renewable energy, predicts demand patterns, and automatically optimizes energy distribution for maximum efficiency and sustainability.
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Smart Grid Management */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-amber-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Grid Control</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Real-time monitoring and control of energy distribution with automated load balancing and fault detection.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time grid monitoring
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automated load balancing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Predictive fault detection
                  </li>
                </ul>
              </div>
            </div>

            {/* Renewable Integration */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Renewable Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamless integration of solar, wind, and other renewable sources with intelligent energy storage management.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Solar & wind integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Battery storage optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Weather-based forecasting
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Demand Forecasting */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-yellow-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Demand Forecasting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Machine learning algorithms predict energy demand patterns and optimize distribution for maximum efficiency.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Predictive demand modeling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dynamic pricing optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Peak load management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-amber-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Energy Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">R</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">React</div>
                <div className="text-xs text-gray-500 mt-1">Dashboard</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-yellow-600">Py</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Python</div>
                <div className="text-xs text-gray-500 mt-1">Analytics</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-green-600">TS</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Time Series DB</div>
                <div className="text-xs text-gray-500 mt-1">Data Storage</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">IoT</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">IoT Sensors</div>
                <div className="text-xs text-gray-500 mt-1">Grid Monitoring</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-indigo-600">ML</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Machine Learning</div>
                <div className="text-xs text-gray-500 mt-1">Forecasting</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">μS</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Microservices</div>
                <div className="text-xs text-gray-500 mt-1">Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Smart Grid in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how our intelligent energy platform transforms grid management with real-time optimization and renewable integration.
            </p>
          </div>

          {/* Main Platform Screenshot */}
          <div className="mb-20 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-3">
              <img
                src="https://picsum.photos/seed/energygrid-platform/1400/900"
                alt="EnergyGrid Smart Platform"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-3">Smart Grid Command Center</h3>
                <p className="text-lg opacity-90 max-w-2xl">Real-time monitoring and control of energy distribution across 5M+ households with AI-powered optimization.</p>
              </div>

              {/* Live grid indicators */}
              <div className="absolute top-6 right-6 flex space-x-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Grid Stable</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">40% Renewable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grid Monitoring */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/energygrid-monitoring/600/400"
                alt="Real-time Grid Monitoring"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Real-time Control</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Grid Monitoring</h4>
                <p className="text-sm opacity-90">IoT sensors provide instant visibility into grid performance and energy flow patterns.</p>
              </div>
            </div>

            {/* Renewable Integration */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/energygrid-renewable/600/400"
                alt="Renewable Energy Integration"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Green Energy</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Renewable Integration</h4>
                <p className="text-sm opacity-90">Seamless solar and wind integration with intelligent storage management systems.</p>
              </div>
            </div>

            {/* AI Forecasting */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/energygrid-ai/600/400"
                alt="AI Demand Forecasting"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">AI Intelligence</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Smart Forecasting</h4>
                <p className="text-sm opacity-90">Machine learning predicts demand patterns and optimizes energy distribution automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-yellow-900/10 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Transformational Energy Results</h2>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
              Our smart grid platform didn't just improve efficiency - it revolutionized energy distribution, sustainability, and reliability for millions of households.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-amber-300 mb-3">25%</div>
              <div className="text-amber-100 font-semibold text-lg mb-2">Energy Waste Reduction</div>
              <div className="text-sm text-amber-200">Saving 2.5 TWh annually</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-orange-300 mb-3">40%</div>
              <div className="text-amber-100 font-semibold text-lg mb-2">Renewable Energy Mix</div>
              <div className="text-sm text-amber-200">Up from 15% renewable sources</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-yellow-300 mb-3">99.8%</div>
              <div className="text-amber-100 font-semibold text-lg mb-2">Grid Reliability</div>
              <div className="text-sm text-amber-200">Up from 94% uptime</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-amber-300 mb-3">5M+</div>
              <div className="text-amber-100 font-semibold text-lg mb-2">Households Served</div>
              <div className="text-sm text-amber-200">Across metropolitan regions</div>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <img
                    src="https://randomuser.me/api/portraits/women/35.jpg"
                    alt="Chief Energy Officer"
                    className="w-20 h-20 rounded-full border-4 border-white/20 mr-6"
                  />
                  <div>
                    <div className="text-2xl font-bold text-white">Dr. Sarah Mitchell</div>
                    <div className="text-amber-200 text-lg">Chief Energy Officer</div>
                    <div className="text-amber-300 text-sm">EnergyGrid Corporation</div>
                  </div>
                </div>
                <blockquote className="text-xl text-white leading-relaxed">
                  "This smart grid platform has been transformational for our entire energy ecosystem. We've achieved a 40% renewable energy mix while maintaining 99.8% reliability. The AI-powered demand forecasting has reduced energy waste by 25%, saving us millions while advancing our sustainability goals. It's the future of energy management."
                </blockquote>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/energygrid-success/700/500"
                  alt="Smart grid control room"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">Smart Grid Excellence</div>
                  <div className="text-sm opacity-75">Industry Innovation Award 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Ready to Revolutionize Energy?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the smart grid revolution. Let's build intelligent energy platforms that optimize distribution, integrate renewables, and create a sustainable energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-12 py-5 text-lg font-semibold text-white hover:from-amber-600 hover:to-orange-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Build Your Smart Grid
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-12 py-5 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore More Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyGridCaseStudy;
