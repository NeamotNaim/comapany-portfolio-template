import React from 'react';
import { Link } from 'react-router-dom';

const SecurityAssessmentPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Security Assessment</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-indigo-400"></span>
              <span className="text-sm font-medium text-white">Security Assessments & Audits</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Comprehensive & Thorough</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300">
                Security Assessments
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Identify vulnerabilities and strengthen your security posture with comprehensive security assessments that evaluate your entire IT infrastructure and provide actionable recommendations.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-indigo-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Security Assessment</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Assessment Reports</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Security Assessment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Security Assessment Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Security Assessments provide comprehensive evaluations of your IT infrastructure, identifying vulnerabilities, compliance gaps, and security risks. Our assessments deliver actionable insights to strengthen your security posture and protect against cyber threats.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive vulnerability scanning and analysis',
                  'Network security architecture review',
                  'Application security assessment',
                  'Compliance gap analysis and recommendations',
                  'Risk prioritization and remediation roadmap',
                  'Executive summary with actionable insights'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Security Assessment Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Assessments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Security Assessment Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security evaluations across all aspects of your IT infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Vulnerability Assessment', icon: '🔍', desc: 'Identify security weaknesses' },
              { name: 'Risk Analysis', icon: '⚠️', desc: 'Evaluate threat impact' },
              { name: 'Compliance Audit', icon: '📋', desc: 'Regulatory compliance review' },
              { name: 'Network Security', icon: '🌐', desc: 'Network infrastructure analysis' },
              { name: 'Application Security', icon: '💻', desc: 'Software security evaluation' },
              { name: 'Physical Security', icon: '🏢', desc: 'Physical access controls' },
              { name: 'Data Protection', icon: '🛡️', desc: 'Data security assessment' },
              { name: 'Policy Review', icon: '📄', desc: 'Security policy evaluation' }
            ].map((type, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systematic approach to identifying and addressing security vulnerabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Discovery & Planning',
                description: 'Comprehensive inventory and assessment planning phase',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                features: ['Asset Discovery', 'Scope Definition', 'Risk Assessment', 'Timeline Planning']
              },
              {
                title: 'Testing & Analysis',
                description: 'Thorough security testing and vulnerability analysis',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
                features: ['Vulnerability Scanning', 'Manual Testing', 'Configuration Review', 'Threat Modeling']
              },
              {
                title: 'Reporting & Remediation',
                description: 'Detailed findings report with prioritized remediation plan',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Executive Summary', 'Technical Findings', 'Risk Prioritization', 'Action Plan']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
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
              Security Assessment Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the assessment package that fits your security evaluation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Assessment',
                price: '$8,000',
                timeline: '2-3 weeks',
                features: [
                  'Vulnerability scanning',
                  'Network security review',
                  'Basic compliance check',
                  'Executive summary',
                  'Remediation recommendations',
                  '30 days support'
                ]
              },
              {
                name: 'Comprehensive Assessment',
                price: '$15,000',
                timeline: '3-4 weeks',
                features: [
                  'Everything in Basic',
                  'Application security testing',
                  'Detailed risk analysis',
                  'Policy review',
                  'Compliance gap analysis',
                  '60 days support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Assessment',
                price: '$25,000',
                timeline: '4-6 weeks',
                features: [
                  'Everything in Comprehensive',
                  'Advanced threat modeling',
                  'Physical security review',
                  'Custom compliance frameworks',
                  'Ongoing monitoring setup',
                  '90 days support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-indigo-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Assess Your Security Posture?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Get a comprehensive security assessment that identifies vulnerabilities and provides actionable recommendations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-indigo-900 hover:bg-gray-100 transition-colors"
          >
            Start Security Assessment
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityAssessmentPage;
