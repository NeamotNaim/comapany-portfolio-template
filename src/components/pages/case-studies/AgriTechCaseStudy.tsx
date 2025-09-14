import React from 'react';
import { Link } from 'react-router-dom';

const AgriTechCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-lime-900 via-green-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-lime-900/10 to-green-900/10 opacity-20"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2 text-lime-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white">Smart Agriculture Case Study</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="block">AgriTech Farm</span>
              <span className="block text-lime-300">Management System</span>
            </h1>
            <p className="mt-8 max-w-4xl mx-auto text-xl text-lime-100 leading-relaxed">
              Revolutionary smart farming platform combining IoT sensors, drone technology, and AI-powered analytics to transform traditional agriculture into precision farming, increasing yields while reducing environmental impact.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center rounded-full bg-lime-100/20 border border-lime-200/30 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Precision Agriculture
              </span>
              <span className="inline-flex items-center rounded-full bg-lime-100/20 border border-lime-200/30 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                IoT & Drone Integration
              </span>
              <span className="inline-flex items-center rounded-full bg-lime-100/20 border border-lime-200/30 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Sustainable Farming
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-lime-50 to-green-50 border-b border-lime-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-lime-600 mb-2 group-hover:scale-110 transition-transform">10,000+</div>
              <div className="text-sm text-gray-600 font-medium">Acres Monitored</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">35%</div>
              <div className="text-sm text-gray-600 font-medium">Yield Increase</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">50%</div>
              <div className="text-sm text-gray-600 font-medium">Water Savings</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform">30%</div>
              <div className="text-sm text-gray-600 font-medium">Pesticide Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-800 mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                The Challenge
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Traditional Farming Meets Modern Problems</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  AgriTech Innovations came to us with a critical challenge: their network of farms was struggling with unpredictable weather patterns, rising costs, and decreasing yields. Traditional farming methods were no longer sustainable in the face of climate change and increasing global food demand.
                </p>
                <p>
                  The farmers were making decisions based on intuition and limited data, leading to overwatering, excessive pesticide use, and suboptimal planting schedules. They needed a data-driven approach to transform their operations.
                </p>
              </div>
              
              <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Critical Issues</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul className="list-disc list-inside space-y-1">
                        <li>25% crop loss due to unpredictable weather</li>
                        <li>40% water waste from inefficient irrigation</li>
                        <li>Rising pesticide costs and environmental concerns</li>
                        <li>Labor-intensive manual monitoring processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/agritech-problem/800/600"
                  alt="Traditional farming challenges"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Before: Traditional Methods</h3>
                  <p className="text-sm opacity-90">Manual processes leading to inefficiencies and crop losses</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-red-600">-25%</div>
                <div className="text-xs text-gray-600">Crop Loss</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-red-600">+40%</div>
                <div className="text-xs text-gray-600">Water Waste</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Our Smart Solution
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Precision Agriculture Revolution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We developed an integrated IoT ecosystem that transforms farming from guesswork into data-driven precision agriculture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* IoT Sensors */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-lime-200 hover:border-lime-300">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart IoT Sensors</h3>
              <p className="text-gray-600 mb-6">Network of soil moisture, temperature, pH, and nutrient sensors providing real-time field conditions.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time soil monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather station integration
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated alerts system
                </li>
              </ul>
            </div>

            {/* Drone Technology */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-lime-200 hover:border-lime-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drone Surveillance</h3>
              <p className="text-gray-600 mb-6">Autonomous drones with multispectral cameras for crop health monitoring and precision spraying.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Crop health imaging
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Precision spraying
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated flight paths
                </li>
              </ul>
            </div>

            {/* AI Analytics */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-lime-200 hover:border-lime-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-600 mb-6">Machine learning algorithms that predict optimal planting, watering, and harvesting schedules.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Predictive modeling
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Yield optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Resource planning
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-lime-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-bold text-blue-600">R</span>
                </div>
                <div className="text-sm font-medium text-gray-700">React</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl font-bold text-yellow-600">Py</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Python</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl font-bold text-purple-600">IoT</span>
                </div>
                <div className="text-sm font-medium text-gray-700">IoT Sensors</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl font-bold text-green-600">🚁</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Drone APIs</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl font-bold text-indigo-600">🌤️</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Weather APIs</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl font-bold text-red-600">ML</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Machine Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our smart farming platform transforms agricultural operations with real-time data and intelligent automation.
            </p>
          </div>

          {/* Main Dashboard Screenshot */}
          <div className="mb-16 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-lime-100 to-green-100 p-2">
              <img
                src="https://picsum.photos/seed/agritech-dashboard/1400/800"
                alt="AgriTech Smart Farming Dashboard"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-3">Smart Farm Command Center</h3>
                <p className="text-lg opacity-90 max-w-2xl">Real-time monitoring of 10,000+ acres with IoT sensors, drone surveillance, and AI-powered insights for optimal crop management.</p>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Data Stream</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Showcase Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soil Monitoring */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://picsum.photos/seed/agritech-soil/600/400"
                alt="Soil Monitoring System"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium uppercase tracking-wide">Real-time Monitoring</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Soil Health Analytics</h4>
                <p className="text-sm opacity-90">IoT sensors track moisture, pH, nutrients, and temperature across all field zones.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">24/7 Active</span>
              </div>
            </div>

            {/* Drone Surveillance */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://picsum.photos/seed/agritech-drone/600/400"
                alt="Drone Crop Monitoring"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium uppercase tracking-wide">Autonomous Flight</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Aerial Crop Analysis</h4>
                <p className="text-sm opacity-90">Multispectral imaging detects crop stress, disease, and growth patterns.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">AI Powered</span>
              </div>
            </div>

            {/* Weather Integration */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://picsum.photos/seed/agritech-weather/600/400"
                alt="Weather Analytics"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-medium uppercase tracking-wide">Predictive Analytics</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Weather Intelligence</h4>
                <p className="text-sm opacity-90">Advanced forecasting helps optimize irrigation and protect crops from weather events.</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">7-Day Forecast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-teal-900/10 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transformational Results</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our smart farming platform delivered measurable improvements across all key agricultural metrics, proving the power of precision agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-lime-300 mb-2">35%</div>
              <div className="text-green-100 font-medium">Increase in Crop Yield</div>
              <div className="text-sm text-green-200 mt-2">Optimized growing conditions</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-300 mb-2">50%</div>
              <div className="text-green-100 font-medium">Reduction in Water Usage</div>
              <div className="text-sm text-green-200 mt-2">Smart irrigation systems</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-emerald-300 mb-2">30%</div>
              <div className="text-green-100 font-medium">Decrease in Pesticide Use</div>
              <div className="text-sm text-green-200 mt-2">Targeted application</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">10,000+</div>
              <div className="text-green-100 font-medium">Acres Monitored</div>
              <div className="text-sm text-green-200 mt-2">Comprehensive coverage</div>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://randomuser.me/api/portraits/men/58.jpg"
                    alt="Farm Manager"
                    className="w-16 h-16 rounded-full border-4 border-white/20 mr-4"
                  />
                  <div>
                    <div className="text-xl font-bold text-white">Robert Martinez</div>
                    <div className="text-green-200">Farm Operations Manager</div>
                    <div className="text-green-300 text-sm">AgriTech Innovations</div>
                  </div>
                </div>
                <blockquote className="text-lg text-white leading-relaxed">
                  "The transformation has been incredible. We went from guessing when to water our crops to having precise, data-driven irrigation schedules. The drone monitoring caught a pest outbreak early, saving us an entire harvest. Our yields are up 35% while using half the water."
                </blockquote>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/agritech-success/600/400"
                  alt="Successful harvest"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">After Implementation</div>
                  <div className="text-xs opacity-75">Record-breaking harvest season</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Farm?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the precision agriculture revolution. Let's build smart farming solutions that increase yields, reduce costs, and protect the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-500 to-green-600 px-10 py-4 text-lg font-medium text-white hover:from-lime-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Your Smart Farm Project
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-10 py-4 text-lg font-medium text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriTechCaseStudy;
