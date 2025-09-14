import React from 'react';
import { Link } from 'react-router-dom';

const PropTechCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Case Study</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              PropTech Real Estate Platform
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-emerald-100">
              Comprehensive real estate platform with virtual tours, AI-powered property valuation, and integrated CRM for agents and buyers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Real Estate</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">3D Visualization</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">AI Valuation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  PropTech Solutions needed a revolutionary real estate platform that could transform how properties are bought, sold, and managed. The challenge was creating an immersive experience that combines cutting-edge 3D visualization, AI-powered valuations, and comprehensive CRM functionality.
                </p>
                <p>
                  Our team developed an innovative platform that enables virtual property tours, provides accurate AI-driven property valuations, and streamlines the entire real estate transaction process for agents, buyers, and sellers.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Client</dt>
                    <dd className="text-sm text-gray-900">PropTech Solutions</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Duration</dt>
                    <dd className="text-sm text-gray-900">14 months</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Team Size</dt>
                    <dd className="text-sm text-gray-900">12 developers</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                    <dd className="text-sm text-gray-900">React, Node.js, MongoDB, AWS, 3D Visualization, AI</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Limited Property Viewing</h3>
                    <p className="text-gray-600">Traditional property viewing requires physical visits, limiting reach and slowing down the sales process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Inaccurate Valuations</h3>
                    <p className="text-gray-600">Manual property valuations are time-consuming, subjective, and often inaccurate, affecting pricing decisions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Fragmented Workflow</h3>
                    <p className="text-gray-600">Agents using multiple disconnected tools for listings, client management, and transaction processing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Immersive Virtual Tours</h3>
                    <p className="text-gray-600">3D visualization technology enabling realistic virtual property tours accessible from anywhere in the world.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">AI-Powered Valuations</h3>
                    <p className="text-gray-600">Machine learning algorithms analyzing market data, property features, and trends for accurate automated valuations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Integrated CRM Platform</h3>
                    <p className="text-gray-600">Comprehensive customer relationship management with lead tracking, automated follow-ups, and transaction management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots & Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Platform Screenshots</h2>
            <p className="mt-4 text-xl text-gray-600">Experience the future of real estate technology</p>
          </div>
          
          {/* Main Dashboard Screenshot */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/proptech-dashboard/1200/700" 
                alt="PropTech Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Real Estate Management Dashboard</h3>
                <p className="text-lg opacity-90">Comprehensive property management with virtual tours and AI valuations</p>
              </div>
            </div>
          </div>

          {/* Feature Screenshots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/proptech-virtual/600/400" 
                  alt="Virtual Tours" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">3D Virtual Tours</h4>
                  <p className="text-sm">Immersive property experiences</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/proptech-valuation/600/400" 
                  alt="AI Valuation" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">AI Valuation Engine</h4>
                  <p className="text-sm">Automated property pricing</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/proptech-crm/600/400" 
                  alt="CRM System" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">Integrated CRM</h4>
                  <p className="text-sm">Complete client management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://randomuser.me/api/portraits/women/52.jpg" 
                alt="Client" 
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <div className="text-4xl text-emerald-200 mb-4">"</div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                "The PropTech platform has revolutionized our real estate business. Virtual tours increased our reach by 300%, and the AI valuation system has improved our pricing accuracy significantly. We're closing deals 60% faster than before."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Lisa Thompson</div>
                <div className="text-gray-600">CEO, PropTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Results & Impact</h2>
            <p className="mt-4 text-xl text-gray-600">Transforming the real estate industry with technology</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Property Sales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">300%</div>
              <div className="text-gray-600">Increase in Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
              <div className="text-gray-600">More Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1M+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Real Estate?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's build innovative PropTech solutions that transform property buying and selling experiences.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 px-8 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropTechCaseStudy;
