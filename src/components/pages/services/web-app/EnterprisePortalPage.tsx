import React from 'react';
import { Link } from 'react-router-dom';

const EnterprisePortalPage: React.FC = () => {
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
              <Link to="/services/web-app" className="hover:text-white transition-colors">Web Applications</Link>
              <span>/</span>
              <span className="text-white">Enterprise Web Portals</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-slate-400"></span>
              <span className="text-sm font-medium text-white">Enterprise Web Portals</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Comprehensive Business</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300">
                Enterprise Portals
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build powerful enterprise web portals that centralize business operations, integrate systems, and provide secure access to critical information and tools.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-slate-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Enterprise Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Portal Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Enterprise Portal Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Enterprise Web Portals
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Enterprise web portals serve as centralized digital hubs that integrate multiple business systems, applications, and data sources into a unified interface. They provide secure, role-based access to information and tools that employees, partners, and customers need to be productive.
              </p>
              <div className="space-y-4">
                {[
                  'Single Sign-On (SSO) integration with existing systems',
                  'Role-based access control and security permissions',
                  'Integration with ERP, CRM, and legacy systems',
                  'Advanced analytics and business intelligence',
                  'Customizable dashboards and workflows',
                  'Enterprise-grade security and compliance'
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Enterprise Web Portal Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Secure</div>
                <div className="text-sm">Enterprise Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Portal Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Core Enterprise Portal Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that power enterprise-grade web portals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Single Sign-On (SSO)',
                description: 'Seamless authentication across all integrated systems and applications',
                icon: '🔐'
              },
              {
                title: 'Role-based Access',
                description: 'Granular permissions and access control based on user roles and departments',
                icon: '👥'
              },
              {
                title: 'System Integration',
                description: 'Connect with ERP, CRM, HR systems, and legacy applications',
                icon: '🔗'
              },
              {
                title: 'Business Intelligence',
                description: 'Advanced analytics, reporting, and data visualization tools',
                icon: '📊'
              },
              {
                title: 'Workflow Automation',
                description: 'Automated business processes and approval workflows',
                icon: '⚙️'
              },
              {
                title: 'Document Management',
                description: 'Centralized document storage, versioning, and collaboration',
                icon: '📁'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Enterprise Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade technologies and frameworks for building scalable portals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️', desc: 'Modern frontend framework' },
              { name: 'Node.js', icon: '🟢', desc: 'Scalable backend runtime' },
              { name: 'PostgreSQL', icon: '🐘', desc: 'Enterprise database solution' },
              { name: 'Redis', icon: '🗄️', desc: 'High-performance caching' },
              { name: 'Docker', icon: '🐳', desc: 'Containerization platform' },
              { name: 'Kubernetes', icon: '☸️', desc: 'Container orchestration' },
              { name: 'OAuth 2.0', icon: '🔑', desc: 'Secure authentication' },
              { name: 'GraphQL', icon: '📡', desc: 'Efficient data querying' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Enterprise Portal Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized portal solutions for different enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Employee Portals',
                description: 'Internal portals for HR, payroll, benefits, training, and company resources',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                features: ['HR Self-Service', 'Payroll Access', 'Training Modules', 'Company Directory']
              },
              {
                title: 'Customer Portals',
                description: 'External portals for customer support, account management, and service access',
                image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
                features: ['Account Management', 'Support Tickets', 'Service Requests', 'Knowledge Base']
              },
              {
                title: 'Partner Portals',
                description: 'B2B portals for partners, vendors, and suppliers with specialized access',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
                features: ['Partner Resources', 'Order Management', 'Commission Tracking', 'Marketing Materials']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Enterprise Portal Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your enterprise portal requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard Portal',
                price: '$45,000',
                timeline: '4-6 months',
                features: [
                  'SSO integration',
                  'Role-based access control',
                  'Basic system integrations',
                  'Custom dashboards',
                  'Document management',
                  '12 months support'
                ]
              },
              {
                name: 'Advanced Portal',
                price: '$75,000',
                timeline: '6-8 months',
                features: [
                  'Everything in Standard',
                  'Advanced analytics',
                  'Workflow automation',
                  'Multi-system integration',
                  'Mobile applications',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Portal',
                price: '$120,000',
                timeline: '8-12 months',
                features: [
                  'Everything in Advanced',
                  'Custom integrations',
                  'High availability setup',
                  'Advanced security features',
                  'Multi-tenant architecture',
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Enterprise Portal?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Create a powerful enterprise portal that centralizes your business operations and enhances productivity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-slate-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Enterprise Portal Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePortalPage;
