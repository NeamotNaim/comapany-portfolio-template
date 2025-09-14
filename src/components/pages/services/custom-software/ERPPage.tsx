import React from 'react';
import { Link } from 'react-router-dom';

const ERPPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-800 to-zinc-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-slate-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">ERP Systems</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-slate-400"></span>
              <span className="text-sm font-medium text-white">Enterprise Resource Planning</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Comprehensive & Integrated</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300">
                ERP Systems
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Transform your business operations with comprehensive Enterprise Resource Planning systems that integrate all core business processes into a unified platform.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-slate-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get ERP Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View ERP Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ERP Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Enterprise Resource Planning Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Enterprise Resource Planning (ERP) systems integrate all core business processes into a single, unified platform. Our custom ERP solutions streamline operations, improve efficiency, and provide real-time visibility across your entire organization.
              </p>
              <div className="space-y-4">
                {[
                  'Integrated financial management and accounting',
                  'Supply chain and inventory optimization',
                  'Human resources and payroll management',
                  'Customer relationship management integration',
                  'Real-time reporting and business intelligence',
                  'Scalable architecture for growing businesses'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="ERP System Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">360°</div>
                <div className="text-sm">Business View</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              ERP System Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules that cover all aspects of your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Financial Management', icon: '💰', desc: 'Accounting, budgeting & reporting' },
              { name: 'Supply Chain', icon: '🚚', desc: 'Procurement & inventory management' },
              { name: 'Human Resources', icon: '👥', desc: 'HR management & payroll' },
              { name: 'Sales & CRM', icon: '📈', desc: 'Customer relationship management' },
              { name: 'Manufacturing', icon: '🏭', desc: 'Production planning & control' },
              { name: 'Project Management', icon: '📋', desc: 'Resource allocation & tracking' },
              { name: 'Business Intelligence', icon: '📊', desc: 'Analytics & reporting' },
              { name: 'Quality Management', icon: '✅', desc: 'Quality control & compliance' }
            ].map((module, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              ERP Implementation Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business operations with measurable improvements across all departments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Operational Efficiency',
                description: 'Streamline processes and eliminate redundancies across departments',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Process Automation', 'Workflow Optimization', 'Resource Allocation', 'Cost Reduction']
              },
              {
                title: 'Real-Time Visibility',
                description: 'Get instant access to critical business data and performance metrics',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                features: ['Live Dashboards', 'Performance Metrics', 'Predictive Analytics', 'Custom Reports']
              },
              {
                title: 'Scalable Growth',
                description: 'Support business expansion with flexible and scalable architecture',
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
                features: ['Modular Design', 'Multi-Location Support', 'User Scalability', 'Integration Ready']
              }
            ].map((benefit, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full mr-3"></div>
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
              ERP System Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the ERP solution that fits your business size and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Small Business ERP',
                price: '$50,000',
                timeline: '6-8 months',
                features: [
                  'Core financial modules',
                  'Basic inventory management',
                  'HR & payroll integration',
                  'Standard reporting',
                  'Up to 25 users',
                  '12 months support'
                ]
              },
              {
                name: 'Enterprise ERP',
                price: '$150,000',
                timeline: '8-12 months',
                features: [
                  'All Small Business features',
                  'Advanced supply chain',
                  'Manufacturing modules',
                  'Business intelligence',
                  'Up to 100 users',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Custom ERP Solution',
                price: '$300,000+',
                timeline: '12-18 months',
                features: [
                  'Fully customized solution',
                  'Industry-specific modules',
                  'Advanced integrations',
                  'Unlimited users',
                  'Dedicated support team',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-slate-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-slate-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-slate-600 text-white hover:bg-slate-700'
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
      <section className="py-24 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Transform Your Business Operations?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Implement a comprehensive ERP system that integrates all your business processes and drives operational excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-slate-900 hover:bg-gray-100 transition-colors"
          >
            Start Your ERP Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ERPPage;
