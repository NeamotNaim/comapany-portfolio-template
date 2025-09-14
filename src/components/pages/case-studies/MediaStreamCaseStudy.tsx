import React from 'react';
import { Link } from 'react-router-dom';

const MediaStreamCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Animated media patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Streaming waves */}
          <div className="absolute top-20 left-20 w-16 h-2 bg-gradient-to-r from-red-400/30 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute top-24 left-16 w-20 h-2 bg-gradient-to-r from-blue-400/25 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute top-28 left-24 w-12 h-2 bg-gradient-to-r from-green-400/20 to-transparent rounded-full animate-pulse"></div>
          
          {/* Media icons floating */}
          <div className="absolute top-40 right-32 w-8 h-8 text-red-300/30 animate-bounce">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-40 w-6 h-6 text-blue-300/25 animate-ping">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 w-7 h-7 text-green-300/20 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776l-4.375-3.5A1 1 0 014 13h-1a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 01.008-.004L9.383 3.076zM15 8a2 2 0 012 2v0a2 2 0 01-2 2V8zM17 6a4 4 0 014 4v0a4 4 0 01-4 4V6z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Streaming grid */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/10 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-white">Media Streaming Case Study</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="block">MediaStream</span>
              <span className="block text-red-300">Content Platform</span>
            </h1>
            
            <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-100 leading-relaxed">
              Next-generation streaming platform delivering ultra-low latency content to 50M+ global users with AI-powered content recommendations, adaptive bitrate streaming, and comprehensive analytics serving 10PB+ of content monthly with 99.99% uptime.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center rounded-full bg-red-100/20 border border-red-200/30 px-4 py-2 text-sm font-medium text-red-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ultra-Low Latency Streaming
              </div>
              <div className="inline-flex items-center rounded-full bg-red-100/20 border border-red-200/30 px-4 py-2 text-sm font-medium text-red-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AI Content Recommendations
              </div>
              <div className="inline-flex items-center rounded-full bg-red-100/20 border border-red-200/30 px-4 py-2 text-sm font-medium text-red-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                </svg>
                Global CDN Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors">50M+</div>
              <div className="text-sm text-gray-600 font-medium">Global Users</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">50ms</div>
              <div className="text-sm text-gray-600 font-medium">Average Latency</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors">99.99%</div>
              <div className="text-sm text-gray-600 font-medium">Uptime</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors">10PB+</div>
              <div className="text-sm text-gray-600 font-medium">Monthly Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Streaming Challenge Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/mediastream-problem/900/700" 
                    alt="Traditional streaming challenges" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Before: Streaming Struggles</h3>
                    <p className="text-lg opacity-90">High latency, poor quality, limited scalability, frustrated users</p>
                  </div>
                </div>
                
                {/* Problem indicators with streaming theme */}
                <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5s</div>
                    <div className="text-xs">Buffer Time</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="text-center">
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-xs">Churn Rate</div>
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
                The Streaming Crisis
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">When Content Delivery Fails</h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  MediaStream Entertainment was struggling with their legacy streaming infrastructure that couldn't handle growing user demands. High latency, frequent buffering, and poor content discovery were driving users away to competitors.
                </p>
                <p>
                  The streaming industry was evolving rapidly with user expectations for instant, high-quality content delivery. Traditional CDNs and basic recommendation systems simply couldn't compete with modern streaming demands and personalization requirements.
                </p>
              </div>
              
              {/* Critical Streaming Issues */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-red-800">5-Second Buffer Times</h3>
                    <p className="text-red-700 text-sm mt-1">Excessive loading times causing 40% user abandonment rate</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-orange-800">Poor Content Discovery</h3>
                    <p className="text-orange-700 text-sm mt-1">Generic recommendations leading to low engagement and content consumption</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-yellow-800">Scalability Limitations</h3>
                    <p className="text-yellow-700 text-sm mt-1">Infrastructure couldn't handle peak traffic, causing frequent outages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Streaming Solution */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-green-100 px-6 py-3 text-sm font-medium text-green-800 mb-8">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Our Streaming Revolution
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Ultra-Modern Content Platform</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We engineered a cutting-edge streaming platform that combines ultra-low latency delivery, AI-powered personalization, and global CDN optimization to deliver exceptional viewing experiences at massive scale.
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Ultra-Low Latency Streaming */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-red-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultra-Low Latency</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced streaming protocols and edge computing deliver content with sub-50ms latency globally.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    WebRTC streaming protocol
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Edge computing nodes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Adaptive bitrate streaming
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Content Recommendations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Recommendations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced machine learning algorithms provide personalized content discovery and viewing recommendations.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Deep learning models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Behavioral analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time personalization
                  </li>
                </ul>
              </div>
            </div>

            {/* Global CDN Network */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-green-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global CDN Network</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Worldwide content delivery network with intelligent caching and geographic optimization for maximum performance.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    200+ global edge servers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Intelligent caching algorithms
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Auto-scaling infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Streaming Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">R</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">React</div>
                <div className="text-xs text-gray-500 mt-1">Frontend</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-green-600">Go</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Golang</div>
                <div className="text-xs text-gray-500 mt-1">Backend</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-red-600">R</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Redis</div>
                <div className="text-xs text-gray-500 mt-1">Caching</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">K8s</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Kubernetes</div>
                <div className="text-xs text-gray-500 mt-1">Orchestration</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-yellow-600">📡</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">WebRTC</div>
                <div className="text-xs text-gray-500 mt-1">Streaming</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-indigo-600">ML</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">TensorFlow</div>
                <div className="text-xs text-gray-500 mt-1">AI/ML</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Streaming Platform in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how our next-generation streaming platform delivers ultra-low latency content to 50M+ users worldwide with AI-powered personalization.
            </p>
          </div>

          {/* Main Platform Screenshot */}
          <div className="mb-20 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-gray-100 p-3">
              <img
                src="https://picsum.photos/seed/mediastream-platform/1400/900"
                alt="MediaStream Content Platform"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-3">Ultra-Modern Streaming Platform</h3>
                <p className="text-lg opacity-90 max-w-2xl">AI-powered content delivery serving 50M+ users with sub-50ms latency and personalized recommendations.</p>
              </div>

              {/* Live streaming indicators */}
              <div className="absolute top-6 right-6 flex space-x-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live: 50M Users</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">50ms Latency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ultra-Low Latency */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/mediastream-latency/600/400"
                alt="Ultra-Low Latency Streaming"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Lightning Fast</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Ultra-Low Latency</h4>
                <p className="text-sm opacity-90">WebRTC and edge computing deliver content with sub-50ms latency globally.</p>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/mediastream-ai/600/400"
                alt="AI Content Recommendations"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Smart Discovery</span>
                </div>
                <h4 className="text-xl font-bold mb-2">AI Recommendations</h4>
                <p className="text-sm opacity-90">Deep learning algorithms provide personalized content discovery and viewing suggestions.</p>
              </div>
            </div>

            {/* Global CDN */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/mediastream-cdn/600/400"
                alt="Global CDN Network"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Global Network</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Worldwide CDN</h4>
                <p className="text-sm opacity-90">200+ edge servers with intelligent caching deliver content optimally worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-zinc-900/10 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Streaming Revolution Results</h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Our next-generation streaming platform didn't just improve performance - it revolutionized the entire entertainment experience for 50M+ users worldwide.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-red-300 mb-3">50M+</div>
              <div className="text-gray-100 font-semibold text-lg mb-2">Global Users</div>
              <div className="text-sm text-gray-200">Across 150+ countries</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-blue-300 mb-3">50ms</div>
              <div className="text-gray-100 font-semibold text-lg mb-2">Average Latency</div>
              <div className="text-sm text-gray-200">Down from 5-second buffer times</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-green-300 mb-3">99.99%</div>
              <div className="text-gray-100 font-semibold text-lg mb-2">Platform Uptime</div>
              <div className="text-sm text-gray-200">Industry-leading reliability</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-purple-300 mb-3">10PB+</div>
              <div className="text-gray-100 font-semibold text-lg mb-2">Monthly Content</div>
              <div className="text-sm text-gray-200">Delivered globally</div>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <img
                    src="https://randomuser.me/api/portraits/women/22.jpg"
                    alt="Chief Technology Officer"
                    className="w-20 h-20 rounded-full border-4 border-white/20 mr-6"
                  />
                  <div>
                    <div className="text-2xl font-bold text-white">Elena Rodriguez</div>
                    <div className="text-gray-200 text-lg">Chief Technology Officer</div>
                    <div className="text-gray-300 text-sm">MediaStream Entertainment</div>
                  </div>
                </div>
                <blockquote className="text-xl text-white leading-relaxed">
                  "This platform has completely transformed our streaming capabilities. We've gone from 5-second buffer times to sub-50ms latency, serving 50M+ users globally. The AI-powered recommendations have increased user engagement by 300%. It's not just technology - it's the future of entertainment."
                </blockquote>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/mediastream-success/700/500"
                  alt="Modern streaming control center"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">Streaming Innovation Leader</div>
                  <div className="text-sm opacity-75">Technology Excellence Award 2023</div>
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
            <h2 className="text-5xl font-bold mb-8">Ready to Revolutionize Streaming?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the streaming revolution. Let's build next-generation platforms that deliver ultra-low latency content, AI-powered personalization, and exceptional user experiences at global scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 px-12 py-5 text-lg font-semibold text-white hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Build Your Streaming Platform
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

export default MediaStreamCaseStudy;
