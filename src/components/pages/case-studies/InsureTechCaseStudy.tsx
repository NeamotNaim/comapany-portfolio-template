import React from 'react';
import { Link } from 'react-router-dom';

const InsureTechCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated security patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-full animate-spin"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-rose-300/20 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 border-2 border-pink-300/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-red-300/20 rounded-lg rotate-12 animate-ping"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-white">Insurance Technology Case Study</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="block">InsureTech</span>
              <span className="block text-rose-300">Claims Platform</span>
            </h1>
            
            <p className="mt-8 max-w-4xl mx-auto text-xl text-rose-100 leading-relaxed">
              Revolutionary digital insurance platform featuring automated claims processing, AI-powered fraud detection, and comprehensive customer self-service portal that transformed traditional insurance operations and processed over $10M in claims.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center rounded-full bg-rose-100/20 border border-rose-200/30 px-4 py-2 text-sm font-medium text-rose-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Automated Processing
              </div>
              <div className="inline-flex items-center rounded-full bg-rose-100/20 border border-rose-200/30 px-4 py-2 text-sm font-medium text-rose-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fraud Detection AI
              </div>
              <div className="inline-flex items-center rounded-full bg-rose-100/20 border border-rose-200/30 px-4 py-2 text-sm font-medium text-rose-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Customer Self-Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <section className="py-16 bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-b border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition-colors">70%</div>
              <div className="text-sm text-gray-600 font-medium">Faster Claims Processing</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors">90%</div>
              <div className="text-sm text-gray-600 font-medium">Reduction in Fraud</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors">85%</div>
              <div className="text-sm text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition-colors">$10M+</div>
              <div className="text-sm text-gray-600 font-medium">Claims Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Insurance Challenge Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/insuretech-problem/900/700" 
                    alt="Traditional insurance claims processing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Before: Manual Chaos</h3>
                    <p className="text-lg opacity-90">Paper forms, weeks of processing, rampant fraud</p>
                  </div>
                </div>
                
                {/* Problem indicators with animations */}
                <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-xs">Days Average</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-xs">Fraud Rate</div>
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
                The Insurance Industry Crisis
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">When Claims Processing Becomes a Nightmare</h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  InsureTech Solutions was drowning in a sea of paper claims, manual processes, and fraudulent submissions. Their traditional approach was costing millions in operational overhead while customers waited weeks for claim resolutions.
                </p>
                <p>
                  The insurance industry was ripe for disruption. Customers expected instant digital experiences, but insurance companies were stuck in the past with outdated systems that couldn't detect fraud, automate processing, or provide real-time updates.
                </p>
              </div>
              
              {/* Critical Issues */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-red-800">45-Day Processing Times</h3>
                    <p className="text-red-700 text-sm mt-1">Manual review processes causing massive delays and customer frustration</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-orange-800">$2M Annual Fraud Losses</h3>
                    <p className="text-orange-700 text-sm mt-1">No automated fraud detection leading to massive financial losses</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-yellow-800">40% Customer Churn</h3>
                    <p className="text-yellow-700 text-sm mt-1">Customers leaving due to poor claims experience and lack of transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Solution */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-green-100 px-6 py-3 text-sm font-medium text-green-800 mb-8">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Our AI-Powered Solution
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Intelligent Insurance Revolution</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We built a comprehensive digital insurance platform that combines automated processing, AI fraud detection, and customer self-service to transform the entire claims experience.
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Automated Processing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-rose-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Claims Processing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intelligent document processing with OCR technology and automated decision-making for standard claims.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    OCR document scanning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automated decision engine
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time status updates
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Fraud Detection */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-pink-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Fraud Detection</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced machine learning algorithms analyze patterns and detect fraudulent claims with 95% accuracy.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pattern recognition ML
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Risk scoring algorithms
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automated flagging system
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer Portal */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-red-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-Service Portal</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive customer portal for claim submission, tracking, and communication with instant updates.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile-first design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Document upload & tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Live chat integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-rose-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">R</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">React</div>
                <div className="text-xs text-gray-500 mt-1">Frontend</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-orange-600">J</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Java</div>
                <div className="text-xs text-gray-500 mt-1">Backend</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-indigo-600">P</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">PostgreSQL</div>
                <div className="text-xs text-gray-500 mt-1">Database</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-green-600">AI</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">AI/ML</div>
                <div className="text-xs text-gray-500 mt-1">Intelligence</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">📄</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">OCR</div>
                <div className="text-xs text-gray-500 mt-1">Document Processing</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-yellow-600">⛓️</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">Blockchain</div>
                <div className="text-xs text-gray-500 mt-1">Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our intelligent insurance platform transforms claims processing from weeks to minutes with AI-powered automation.
            </p>
          </div>

          {/* Main Platform Screenshot */}
          <div className="mb-20 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 to-pink-100 p-3">
              <img
                src="https://picsum.photos/seed/insuretech-platform/1400/900"
                alt="InsureTech Claims Platform"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-3">Intelligent Claims Dashboard</h3>
                <p className="text-lg opacity-90 max-w-2xl">AI-powered platform processing claims automatically with fraud detection and customer self-service capabilities.</p>
              </div>

              {/* Live processing indicators */}
              <div className="absolute top-6 right-6 flex space-x-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Processing Claims</span>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Fraud Detection Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automated Processing */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/insuretech-automation/600/400"
                alt="Automated Claims Processing"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Automation</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Instant Processing</h4>
                <p className="text-sm opacity-90">OCR technology and AI decision-making process claims in under 5 minutes.</p>
              </div>
            </div>

            {/* Fraud Detection */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/insuretech-fraud/600/400"
                alt="AI Fraud Detection"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">AI Security</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Smart Fraud Detection</h4>
                <p className="text-sm opacity-90">Machine learning algorithms identify suspicious patterns with 95% accuracy.</p>
              </div>
            </div>

            {/* Customer Portal */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://picsum.photos/seed/insuretech-portal/600/400"
                alt="Customer Self-Service Portal"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide opacity-75">Self-Service</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Customer Portal</h4>
                <p className="text-sm opacity-90">Complete self-service experience with real-time updates and document management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-red-900/10 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Revolutionary Results</h2>
            <p className="text-xl text-rose-100 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered insurance platform didn't just improve efficiency - it completely transformed the industry standard for claims processing and fraud prevention.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-rose-300 mb-3">70%</div>
              <div className="text-rose-100 font-semibold text-lg mb-2">Faster Claims Processing</div>
              <div className="text-sm text-rose-200">From 45 days to 3 days average</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-pink-300 mb-3">90%</div>
              <div className="text-rose-100 font-semibold text-lg mb-2">Reduction in Fraud</div>
              <div className="text-sm text-rose-200">AI detection saves $1.8M annually</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-red-300 mb-3">85%</div>
              <div className="text-rose-100 font-semibold text-lg mb-2">Customer Satisfaction</div>
              <div className="text-sm text-rose-200">Up from 45% satisfaction rate</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-rose-300 mb-3">$10M+</div>
              <div className="text-rose-100 font-semibold text-lg mb-2">Claims Processed</div>
              <div className="text-sm text-rose-200">With 99.5% accuracy rate</div>
            </div>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <img
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="CTO"
                    className="w-20 h-20 rounded-full border-4 border-white/20 mr-6"
                  />
                  <div>
                    <div className="text-2xl font-bold text-white">David Thompson</div>
                    <div className="text-rose-200 text-lg">Chief Technology Officer</div>
                    <div className="text-rose-300 text-sm">InsureTech Solutions</div>
                  </div>
                </div>
                <blockquote className="text-xl text-white leading-relaxed">
                  "This platform has been a game-changer for our industry. We've gone from processing claims in 6-8 weeks to under 3 days. Our fraud detection AI has saved us over $1.8 million in the first year alone. Most importantly, our customers are finally happy with their insurance experience."
                </blockquote>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/insuretech-success/700/500"
                  alt="InsureTech team celebrating success"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">Industry Recognition</div>
                  <div className="text-sm opacity-75">InsureTech Innovation Award 2023</div>
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
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Insurance?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the insurance revolution. Let's build intelligent platforms that automate claims processing, detect fraud, and create exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 px-12 py-5 text-lg font-semibold text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Build Your Insurance Platform
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

export default InsureTechCaseStudy;
