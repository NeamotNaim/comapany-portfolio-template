import React from 'react';
import { Link } from 'react-router-dom';

const SecurityCompliancePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-rose-800 to-pink-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-rose-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/cloud-devops" className="hover:text-white transition-colors">Cloud & DevOps</Link>
              <span>/</span>
              <span className="text-white">Security & Compliance</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-red-400"></span>
              <span className="text-sm font-medium text-white">Security & Compliance</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Secure & Compliant</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-300 to-pink-300">
                Security & Compliance
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Implement robust security best practices and compliance frameworks to protect your cloud infrastructure and meet regulatory requirements with comprehensive security solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-red-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Security Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Security Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Security & Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Security & Compliance Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Security & Compliance ensures your cloud infrastructure meets industry standards and regulatory requirements. Our solutions implement comprehensive security controls, vulnerability management, and compliance frameworks to protect your data and applications.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive security assessments and audits',
                  'Identity and access management (IAM) implementation',
                  'Data encryption and key management',
                  'Vulnerability scanning and penetration testing',
                  'Compliance framework implementation (SOC2, HIPAA, PCI-DSS)',
                  'Security incident response and monitoring'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                alt="Security & Compliance Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Security & Compliance Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security tools and platforms for comprehensive protection and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'AWS Security Hub', icon: '🛡️', desc: 'Centralized security findings' },
              { name: 'Azure Security Center', icon: '🔒', desc: 'Cloud security posture management' },
              { name: 'HashiCorp Vault', icon: '🔐', desc: 'Secrets management platform' },
              { name: 'Qualys', icon: '🔍', desc: 'Vulnerability management' },
              { name: 'Splunk SIEM', icon: '👁️', desc: 'Security information & event management' },
              { name: 'CrowdStrike', icon: '🦅', desc: 'Endpoint detection & response' },
              { name: 'Okta', icon: '🎯', desc: 'Identity & access management' },
              { name: 'Tenable', icon: '🔬', desc: 'Cyber exposure platform' }
            ].map((tool, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Compliance Frameworks We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive compliance implementation for major industry standards and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'SOC 2 Compliance',
                description: 'Service Organization Control 2 framework for security and availability',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                features: ['Security Controls', 'Availability Monitoring', 'Processing Integrity', 'Confidentiality Measures']
              },
              {
                title: 'HIPAA Compliance',
                description: 'Health Insurance Portability and Accountability Act for healthcare data',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
                features: ['PHI Protection', 'Access Controls', 'Audit Logging', 'Risk Assessments']
              },
              {
                title: 'PCI-DSS Compliance',
                description: 'Payment Card Industry Data Security Standard for payment processing',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                features: ['Cardholder Data Protection', 'Network Security', 'Vulnerability Management', 'Access Monitoring']
              }
            ].map((framework, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={framework.image}
                    alt={framework.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {framework.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {framework.description}
                  </p>
                  <div className="space-y-2">
                    {framework.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mr-3"></div>
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
              Security & Compliance Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your security and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Security Setup',
                price: '$22,000',
                timeline: '2-3 months',
                features: [
                  'Security assessment',
                  'Basic IAM implementation',
                  'Vulnerability scanning',
                  'Security monitoring',
                  'Documentation',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Compliance Solution',
                price: '$45,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Compliance framework implementation',
                  'Advanced security controls',
                  'Penetration testing',
                  'Incident response plan',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Security Platform',
                price: '$85,000',
                timeline: '4-8 months',
                features: [
                  'Everything in Advanced',
                  'Multi-framework compliance',
                  'Advanced threat detection',
                  'Security team training',
                  'Ongoing security management',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-red-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-red-600 text-white hover:bg-red-700'
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
      <section className="py-24 bg-gradient-to-r from-red-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Secure Your Infrastructure?</h2>
          <p className="text-xl text-red-200 mb-8 max-w-2xl mx-auto">
            Implement comprehensive security controls and compliance frameworks to protect your cloud infrastructure and meet regulatory requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-red-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Security Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityCompliancePage;
