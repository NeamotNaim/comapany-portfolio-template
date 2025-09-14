import React from 'react';
import { Link } from 'react-router-dom';

const LogiFlowCaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-cyan-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Case Study</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              LogiFlow Supply Chain Platform
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-cyan-100">
              End-to-end supply chain management platform with real-time tracking, predictive analytics, and automated inventory optimization for global operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">Logistics</span>
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">IoT</span>
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">Predictive Analytics</span>
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
                  LogiFlow Logistics faced the challenge of managing complex supply chains across 500+ warehouses globally. Their existing systems lacked real-time visibility, predictive capabilities, and automated optimization, leading to inefficiencies and increased costs.
                </p>
                <p>
                  Our team developed a comprehensive supply chain platform that integrates IoT sensors, machine learning algorithms, and real-time analytics to create an intelligent logistics ecosystem that optimizes operations automatically.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Client</dt>
                    <dd className="text-sm text-gray-900">LogiFlow Logistics</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Duration</dt>
                    <dd className="text-sm text-gray-900">20 months</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Team Size</dt>
                    <dd className="text-sm text-gray-900">14 developers</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                    <dd className="text-sm text-gray-900">React, Node.js, PostgreSQL, AWS, IoT, Machine Learning</dd>
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
                    <h3 className="text-lg font-medium text-gray-900">Lack of Real-Time Visibility</h3>
                    <p className="text-gray-600">No real-time tracking across 500+ warehouses, leading to delayed responses and poor customer service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Inefficient Inventory Management</h3>
                    <p className="text-gray-600">Manual inventory processes causing stockouts, overstocking, and increased operational costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Reactive Operations</h3>
                    <p className="text-gray-600">No predictive capabilities to anticipate demand fluctuations and optimize routes proactively.</p>
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
                    <h3 className="text-lg font-medium text-gray-900">IoT-Enabled Tracking</h3>
                    <p className="text-gray-600">Deployed IoT sensors across all warehouses for real-time inventory and shipment tracking with GPS integration.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Predictive Analytics</h3>
                    <p className="text-gray-600">Machine learning algorithms that predict demand patterns and optimize inventory levels automatically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Automated Optimization</h3>
                    <p className="text-gray-600">Smart routing algorithms and automated reordering systems that optimize operations in real-time.</p>
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
            <p className="mt-4 text-xl text-gray-600">See the supply chain platform in action</p>
          </div>
          
          {/* Main Dashboard Screenshot */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/logiflow-dashboard/1200/700" 
                alt="LogiFlow Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Supply Chain Command Center</h3>
                <p className="text-lg opacity-90">Real-time visibility across 500+ warehouses with predictive analytics</p>
              </div>
            </div>
          </div>

          {/* Feature Screenshots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/logiflow-tracking/600/400" 
                  alt="Real-time Tracking" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">Real-time Tracking</h4>
                  <p className="text-sm">GPS and IoT sensor integration</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/logiflow-analytics/600/400" 
                  alt="Predictive Analytics" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">Predictive Analytics</h4>
                  <p className="text-sm">ML-powered demand forecasting</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="https://picsum.photos/seed/logiflow-optimization/600/400" 
                  alt="Route Optimization" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-semibold">Route Optimization</h4>
                  <p className="text-sm">Automated delivery planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://randomuser.me/api/portraits/men/45.jpg" 
                alt="Client" 
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <div className="text-4xl text-cyan-200 mb-4">"</div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                "The LogiFlow platform has transformed our operations completely. We've achieved 40% faster delivery times and 25% cost savings while maintaining 99.5% shipment accuracy. The predictive analytics help us stay ahead of demand fluctuations."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">James Rodriguez</div>
                <div className="text-gray-600">COO, LogiFlow Logistics</div>
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
            <p className="mt-4 text-xl text-gray-600">Optimizing global supply chain operations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Delivery Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">25%</div>
              <div className="text-gray-600">Cost Savings in Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">99.5%</div>
              <div className="text-gray-600">Shipment Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">500+</div>
              <div className="text-gray-600">Warehouses Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's build intelligent logistics solutions that reduce costs and improve efficiency.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 transition-colors"
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

export default LogiFlowCaseStudy;
