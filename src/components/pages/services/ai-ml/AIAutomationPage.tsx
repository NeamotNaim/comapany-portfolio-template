import React from 'react';
import { Link } from 'react-router-dom';

const AIAutomationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/ai-ml" className="hover:text-white transition-colors">AI & ML</Link>
              <span>/</span>
              <span className="text-white">AI Automation Solutions</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium text-white">AI Automation Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Intelligent Process</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-red-300">
                AI Automation
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build intelligent automation systems that streamline operations, reduce manual work, and optimize business processes using advanced AI and machine learning technologies.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-amber-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Automation Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Automation Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Automation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                AI-Powered Automation Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                AI Automation combines artificial intelligence with process automation to create intelligent systems that can learn, adapt, and make decisions. Our solutions help businesses eliminate repetitive tasks, reduce errors, and optimize workflows.
              </p>
              <div className="space-y-4">
                {[
                  'Intelligent document processing and OCR',
                  'Robotic Process Automation (RPA) with AI',
                  'Workflow optimization and decision automation',
                  'Smart data extraction and validation',
                  'Automated quality control and testing',
                  'Intelligent scheduling and resource allocation'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
                alt="AI Automation Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm">Time Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              AI Automation Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI and automation tools for building intelligent process automation systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'UiPath', icon: '🤖', desc: 'RPA platform with AI' },
              { name: 'Blue Prism', icon: '🔵', desc: 'Intelligent automation' },
              { name: 'Automation Anywhere', icon: '⚙️', desc: 'Bot marketplace platform' },
              { name: 'TensorFlow', icon: '🧠', desc: 'AI model integration' },
              { name: 'Apache Airflow', icon: '🌊', desc: 'Workflow orchestration' },
              { name: 'Selenium', icon: '🕷️', desc: 'Web automation testing' },
              { name: 'Zapier', icon: '⚡', desc: 'App integration automation' },
              { name: 'Microsoft Power Automate', icon: '🔄', desc: 'Business process flows' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              AI Automation Applications We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automation solutions for different business processes and industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Document Processing',
                description: 'Intelligent document analysis, data extraction, and automated processing workflows',
                image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
                features: ['OCR & Text Extraction', 'Data Validation', 'Document Classification', 'Automated Filing']
              },
              {
                title: 'Business Process Automation',
                description: 'End-to-end automation of complex business workflows and decision processes',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Workflow Automation', 'Decision Trees', 'Process Optimization', 'Exception Handling']
              },
              {
                title: 'Customer Service Automation',
                description: 'AI-powered customer support with chatbots, ticket routing, and response automation',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
                features: ['Chatbot Integration', 'Ticket Routing', 'Response Automation', 'Sentiment Analysis']
              }
            ].map((app, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
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
              AI Automation Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your AI automation project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Automation Solution',
                price: '$40,000',
                timeline: '3-4 months',
                features: [
                  'Process analysis',
                  'Basic RPA implementation',
                  'Document automation',
                  'Simple workflows',
                  'Training & documentation',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Automation Platform',
                price: '$70,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'AI-powered decision making',
                  'Complex workflow automation',
                  'Integration with existing systems',
                  'Performance monitoring',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Automation Suite',
                price: '$120,000',
                timeline: '6-9 months',
                features: [
                  'Everything in Advanced',
                  'Custom AI model development',
                  'Enterprise-wide automation',
                  'Advanced analytics dashboard',
                  'Scalable infrastructure',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-amber-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-amber-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
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
      <section className="py-24 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your AI Automation Solution?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Transform your business processes with intelligent automation that learns, adapts, and optimizes operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-amber-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Automation Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
