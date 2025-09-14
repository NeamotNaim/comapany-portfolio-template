import React from 'react';
import { Link } from 'react-router-dom';

const WorkflowManagementPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Workflow Management</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
              <span className="text-sm font-medium text-white">Workflow Management Systems</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Automated & Streamlined</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300">
                Workflow Management
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Streamline business processes with intelligent workflow automation that reduces manual tasks, improves efficiency, and ensures consistent execution across your organization.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-orange-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Workflow Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Workflow Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Workflow Management Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Workflow Management Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Workflow Management Systems automate and optimize business processes by defining, executing, and monitoring workflows. Our solutions eliminate bottlenecks, reduce errors, and provide complete visibility into your business operations.
              </p>
              <div className="space-y-4">
                {[
                  'Process automation and task orchestration',
                  'Approval workflows and routing systems',
                  'Real-time process monitoring and tracking',
                  'Integration with existing business systems',
                  'Custom forms and data collection',
                  'Performance analytics and optimization'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Workflow Management Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Workflow System Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features for complete workflow automation and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Process Designer', icon: '🎨', desc: 'Visual workflow builder' },
              { name: 'Task Management', icon: '✅', desc: 'Automated task assignment' },
              { name: 'Approval Routing', icon: '🔄', desc: 'Multi-level approvals' },
              { name: 'Form Builder', icon: '📝', desc: 'Custom data collection' },
              { name: 'Notifications', icon: '🔔', desc: 'Real-time alerts' },
              { name: 'Analytics', icon: '📊', desc: 'Process performance metrics' },
              { name: 'Integration APIs', icon: '🔗', desc: 'System connectivity' },
              { name: 'Mobile Access', icon: '📱', desc: 'Workflow on-the-go' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Workflow Management Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Workflow solutions for different business processes and departments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Document Management',
                description: 'Automate document approval, review, and publishing processes',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Document Approval', 'Version Control', 'Review Workflows', 'Publishing Automation']
              },
              {
                title: 'HR Process Automation',
                description: 'Streamline hiring, onboarding, and employee management workflows',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
                features: ['Recruitment Process', 'Employee Onboarding', 'Leave Management', 'Performance Reviews']
              },
              {
                title: 'Financial Approvals',
                description: 'Automate expense approvals, purchase orders, and budget workflows',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
                features: ['Expense Approval', 'Purchase Orders', 'Budget Workflows', 'Financial Reporting']
              }
            ].map((type, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3"></div>
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
              Workflow Management Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the workflow solution that fits your process automation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Workflow',
                price: '$20,000',
                timeline: '2-3 months',
                features: [
                  'Simple workflow automation',
                  'Basic approval processes',
                  'Task management',
                  'Email notifications',
                  'Up to 5 workflows',
                  '12 months support'
                ]
              },
              {
                name: 'Professional Workflow',
                price: '$40,000',
                timeline: '3-4 months',
                features: [
                  'Everything in Basic',
                  'Advanced process designer',
                  'Custom forms & fields',
                  'Integration capabilities',
                  'Up to 20 workflows',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Workflow',
                price: '$75,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Professional',
                  'Complex workflow logic',
                  'Advanced analytics',
                  'Unlimited workflows',
                  'Dedicated support',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-orange-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
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
      <section className="py-24 bg-gradient-to-r from-orange-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Streamline your business processes with intelligent workflow automation that saves time and reduces errors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-orange-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Workflow Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkflowManagementPage;
