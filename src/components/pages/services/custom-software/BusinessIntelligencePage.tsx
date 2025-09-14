import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIntelligencePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/custom-software" className="hover:text-white transition-colors">Custom Software</Link>
              <span>/</span>
              <span className="text-white">Business Intelligence</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              <span className="text-sm font-medium text-white">Business Intelligence Systems</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Data-Driven & Insightful</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300">
                Business Intelligence
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Transform raw data into actionable insights with custom Business Intelligence solutions that provide real-time analytics, predictive modeling, and comprehensive reporting.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-emerald-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get BI Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View BI Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is BI Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Business Intelligence Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Business Intelligence (BI) systems transform raw data into meaningful insights that drive strategic decision-making. Our custom BI solutions provide real-time dashboards, predictive analytics, and comprehensive reporting capabilities.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time data visualization and dashboards',
                  'Predictive analytics and machine learning',
                  'Automated reporting and data alerts',
                  'Data integration from multiple sources',
                  'Self-service analytics for business users',
                  'Mobile-responsive analytics platform'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Business Intelligence Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5x</div>
                <div className="text-sm">Faster Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BI Components Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              BI System Components
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive components for complete business intelligence solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Data Warehousing', icon: '🏢', desc: 'Centralized data storage' },
              { name: 'ETL Processes', icon: '🔄', desc: 'Extract, transform, load data' },
              { name: 'Analytics Engine', icon: '⚙️', desc: 'Advanced data processing' },
              { name: 'Visualization', icon: '📊', desc: 'Interactive charts & graphs' },
              { name: 'Reporting', icon: '📋', desc: 'Automated report generation' },
              { name: 'Dashboards', icon: '📺', desc: 'Real-time KPI monitoring' },
              { name: 'Data Mining', icon: '⛏️', desc: 'Pattern discovery & insights' },
              { name: 'Predictive Analytics', icon: '🔮', desc: 'Future trend forecasting' }
            ].map((component, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.name}</h3>
                <p className="text-gray-600 text-sm">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              BI Application Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Business Intelligence solutions for different departments and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sales & Marketing Analytics',
                description: 'Track sales performance, customer behavior, and marketing ROI',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                features: ['Sales Performance', 'Customer Segmentation', 'Campaign Analytics', 'Lead Scoring']
              },
              {
                title: 'Financial Intelligence',
                description: 'Monitor financial KPIs, budgets, and profitability analysis',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Financial Reporting', 'Budget Analysis', 'Profitability Tracking', 'Risk Assessment']
              },
              {
                title: 'Operational Analytics',
                description: 'Optimize operations with supply chain and performance insights',
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
                features: ['Supply Chain Analytics', 'Performance Metrics', 'Quality Control', 'Resource Optimization']
              }
            ].map((application, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={application.image}
                    alt={application.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {application.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {application.description}
                  </p>
                  <div className="space-y-2">
                    {application.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Business Intelligence Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the BI solution that fits your data analytics requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential BI',
                price: '$35,000',
                timeline: '4-6 months',
                features: [
                  'Basic dashboards',
                  'Standard reporting',
                  'Data visualization',
                  'ETL processes',
                  'Up to 5 data sources',
                  '12 months support'
                ]
              },
              {
                name: 'Advanced BI Platform',
                price: '$65,000',
                timeline: '6-8 months',
                features: [
                  'Everything in Essential',
                  'Predictive analytics',
                  'Self-service analytics',
                  'Advanced visualizations',
                  'Unlimited data sources',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise BI Suite',
                price: '$120,000',
                timeline: '8-12 months',
                features: [
                  'Everything in Advanced',
                  'Machine learning models',
                  'Real-time streaming',
                  'Custom integrations',
                  'Dedicated support team',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-emerald-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
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
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights with powerful Business Intelligence solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-emerald-900 hover:bg-gray-100 transition-colors"
          >
            Start Your BI Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;
