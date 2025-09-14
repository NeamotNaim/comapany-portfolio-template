import React from 'react';
import { Link } from 'react-router-dom';

const PredictiveAnalyticsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Predictive Analytics</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
              <span className="text-sm font-medium text-white">Predictive Analytics Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Data-Driven Future</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300">
                Predictive Analytics
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build intelligent forecasting systems that predict trends, anticipate outcomes, and enable data-driven decision making for business growth and risk management.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-purple-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Analytics Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Analytics Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Predictive Analytics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Predictive Analytics Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Predictive Analytics uses statistical algorithms and machine learning to identify patterns in historical data and forecast future outcomes. Our solutions help businesses anticipate trends, optimize operations, and make proactive decisions.
              </p>
              <div className="space-y-4">
                {[
                  'Time series forecasting and trend analysis',
                  'Demand prediction and inventory optimization',
                  'Risk assessment and fraud detection',
                  'Customer behavior and churn prediction',
                  'Financial forecasting and budget planning',
                  'Maintenance scheduling and failure prediction'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Predictive Analytics Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Analytics Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Predictive Analytics Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced statistical and ML tools for building accurate forecasting and prediction systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Python', icon: '🐍', desc: 'Data science programming' },
              { name: 'R', icon: '📊', desc: 'Statistical computing' },
              { name: 'Pandas', icon: '🐼', desc: 'Data manipulation library' },
              { name: 'Scikit-learn', icon: '🔬', desc: 'Machine learning toolkit' },
              { name: 'Prophet', icon: '🔮', desc: 'Facebook forecasting tool' },
              { name: 'ARIMA', icon: '📈', desc: 'Time series modeling' },
              { name: 'Tableau', icon: '📋', desc: 'Data visualization' },
              { name: 'Apache Spark', icon: '✨', desc: 'Big data processing' }
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

      {/* Predictive Analytics Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Predictive Analytics Applications We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive predictive solutions for different business needs and forecasting requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Forecasting',
                description: 'Sales forecasting, demand planning, and financial prediction for strategic planning',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Sales Forecasting', 'Demand Planning', 'Revenue Prediction', 'Market Analysis']
              },
              {
                title: 'Risk Management',
                description: 'Fraud detection, credit scoring, and risk assessment for financial institutions',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
                features: ['Fraud Detection', 'Credit Scoring', 'Risk Assessment', 'Compliance Monitoring']
              },
              {
                title: 'Operations Optimization',
                description: 'Predictive maintenance, supply chain optimization, and resource planning',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
                features: ['Predictive Maintenance', 'Supply Chain', 'Resource Planning', 'Quality Control']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mr-3"></div>
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
              Predictive Analytics Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your predictive analytics project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Analytics Solution',
                price: '$20,000',
                timeline: '1-2 months',
                features: [
                  'Time series forecasting',
                  'Trend analysis',
                  'Basic visualization',
                  'Model validation',
                  'Documentation',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Analytics Platform',
                price: '$40,000',
                timeline: '2-4 months',
                features: [
                  'Everything in Basic',
                  'Multiple forecasting models',
                  'Interactive dashboards',
                  'Automated reporting',
                  'API integration',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Analytics Suite',
                price: '$65,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Advanced',
                  'Real-time predictions',
                  'Custom algorithms',
                  'Scalable deployment',
                  'Advanced analytics',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-24 bg-gradient-to-r from-purple-900 to-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Predictive Analytics Solution?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Transform historical data into future insights with intelligent predictive analytics solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-purple-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Analytics Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PredictiveAnalyticsPage;
