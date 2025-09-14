import React from 'react';
import { Link } from 'react-router-dom';

const ComplianceManagementPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/cybersecurity-it" className="hover:text-white transition-colors">Cybersecurity & IT</Link>
              <span>/</span>
              <span className="text-white">Compliance Management</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Compliance Management Services</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Regulatory & Standards</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">
                Compliance Management
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Ensure regulatory compliance and maintain industry standards with comprehensive compliance management services that protect your business and build customer trust.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-green-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Compliance Assessment</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Compliance Cases</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Compliance Management Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Compliance Management Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Compliance Management ensures your organization meets regulatory requirements and industry standards. Our comprehensive approach helps you achieve and maintain compliance while reducing risk and building stakeholder confidence.
              </p>
              <div className="space-y-4">
                {[
                  'Regulatory compliance assessment and gap analysis',
                  'Policy development and implementation',
                  'Compliance monitoring and reporting',
                  'Audit preparation and support',
                  'Risk management and mitigation strategies',
                  'Ongoing compliance maintenance and updates'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Compliance Management Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for major regulatory and industry compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'GDPR', icon: '🇪🇺', desc: 'EU data protection regulation' },
              { name: 'HIPAA', icon: '🏥', desc: 'Healthcare data protection' },
              { name: 'SOC 2', icon: '🔒', desc: 'Service organization controls' },
              { name: 'ISO 27001', icon: '📋', desc: 'Information security standard' },
              { name: 'PCI DSS', icon: '💳', desc: 'Payment card data security' },
              { name: 'SOX', icon: '📊', desc: 'Financial reporting compliance' },
              { name: 'NIST', icon: '🛡️', desc: 'Cybersecurity framework' },
              { name: 'CCPA', icon: '🌎', desc: 'California privacy act' }
            ].map((framework, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{framework.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-gray-600 text-sm">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systematic approach to achieving and maintaining regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Assessment & Gap Analysis',
                description: 'Comprehensive evaluation of current compliance status',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                features: ['Current State Analysis', 'Gap Identification', 'Risk Assessment', 'Compliance Roadmap']
              },
              {
                title: 'Implementation & Training',
                description: 'Policy development and staff training for compliance',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
                features: ['Policy Development', 'Process Implementation', 'Staff Training', 'Documentation']
              },
              {
                title: 'Monitoring & Maintenance',
                description: 'Ongoing compliance monitoring and continuous improvement',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Continuous Monitoring', 'Regular Audits', 'Compliance Reporting', 'Updates & Improvements']
              }
            ].map((process, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
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
              Compliance Management Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the compliance package that fits your regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Compliance Assessment',
                price: '$25,000',
                timeline: '3-4 months',
                features: [
                  'Gap analysis',
                  'Risk assessment',
                  'Compliance roadmap',
                  'Policy recommendations',
                  'Single framework focus',
                  '6 months support'
                ]
              },
              {
                name: 'Full Compliance Program',
                price: '$45,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Assessment',
                  'Policy development',
                  'Implementation support',
                  'Staff training',
                  'Multiple frameworks',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Compliance',
                price: '$75,000',
                timeline: '6-12 months',
                features: [
                  'Everything in Full Program',
                  'Ongoing monitoring',
                  'Regular audits',
                  'Compliance automation',
                  'Dedicated compliance officer',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-green-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-green-600 text-white hover:bg-green-700'
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
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Achieve Compliance?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Ensure regulatory compliance and build stakeholder trust with comprehensive compliance management services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-green-900 hover:bg-gray-100 transition-colors"
          >
            Start Compliance Program
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComplianceManagementPage;
