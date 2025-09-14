import React from 'react';
import { Link } from 'react-router-dom';

const PenetrationTestingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-pink-800 to-rose-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Penetration Testing</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-red-400"></span>
              <span className="text-sm font-medium text-white">Penetration Testing Services</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Ethical Hacking &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-pink-300 to-rose-300">
                Penetration Testing
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Test your defenses against real-world attack scenarios with professional penetration testing services that identify vulnerabilities before malicious actors do.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-red-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Penetration Test</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Test Results</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Penetration Testing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Penetration Testing Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Penetration Testing simulates real-world cyber attacks to identify security vulnerabilities in your systems. Our ethical hackers use the same techniques as malicious actors to test your defenses and provide actionable security improvements.
              </p>
              <div className="space-y-4">
                {[
                  'Simulated real-world attack scenarios',
                  'Network and application penetration testing',
                  'Social engineering and phishing tests',
                  'Wireless network security assessment',
                  'Detailed vulnerability exploitation reports',
                  'Remediation guidance and retesting'
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
                alt="Penetration Testing Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Vulnerabilities Found</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penetration Testing Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Penetration Testing Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing approaches to evaluate all aspects of your security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Network Penetration', icon: '🌐', desc: 'Network infrastructure testing' },
              { name: 'Web Application', icon: '💻', desc: 'Web app security testing' },
              { name: 'Mobile Application', icon: '📱', desc: 'Mobile app security testing' },
              { name: 'Wireless Security', icon: '📡', desc: 'WiFi & wireless testing' },
              { name: 'Social Engineering', icon: '👥', desc: 'Human factor testing' },
              { name: 'Physical Security', icon: '🏢', desc: 'Physical access testing' },
              { name: 'Cloud Security', icon: '☁️', desc: 'Cloud infrastructure testing' },
              { name: 'API Security', icon: '🔗', desc: 'API endpoint testing' }
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

      {/* Testing Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Testing Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systematic approach following industry-standard penetration testing frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reconnaissance & Planning',
                description: 'Information gathering and attack vector identification',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
                features: ['Target Reconnaissance', 'Threat Modeling', 'Attack Planning', 'Scope Definition']
              },
              {
                title: 'Exploitation & Testing',
                description: 'Active testing and vulnerability exploitation attempts',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                features: ['Vulnerability Exploitation', 'Privilege Escalation', 'Lateral Movement', 'Data Exfiltration']
              },
              {
                title: 'Analysis & Reporting',
                description: 'Comprehensive analysis and detailed reporting of findings',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Risk Assessment', 'Impact Analysis', 'Remediation Plan', 'Executive Summary']
              }
            ].map((methodology, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={methodology.image}
                    alt={methodology.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {methodology.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {methodology.description}
                  </p>
                  <div className="space-y-2">
                    {methodology.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3"></div>
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
              Penetration Testing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the penetration testing package that fits your security testing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Penetration Test',
                price: '$12,000',
                timeline: '1-2 weeks',
                features: [
                  'Network penetration testing',
                  'Basic web app testing',
                  'Vulnerability exploitation',
                  'Technical report',
                  'Remediation guidance',
                  '30 days support'
                ]
              },
              {
                name: 'Advanced Penetration Test',
                price: '$20,000',
                timeline: '2-3 weeks',
                features: [
                  'Everything in Basic',
                  'Social engineering testing',
                  'Wireless security testing',
                  'Advanced exploitation',
                  'Executive summary',
                  '60 days support'
                ],
                popular: true
              },
              {
                name: 'Comprehensive Red Team',
                price: '$35,000',
                timeline: '3-4 weeks',
                features: [
                  'Everything in Advanced',
                  'Physical security testing',
                  'Multi-vector attacks',
                  'Continuous testing',
                  'Detailed remediation plan',
                  '90 days support'
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
      <section className="py-24 bg-gradient-to-r from-red-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Test Your Defenses?</h2>
          <p className="text-xl text-red-200 mb-8 max-w-2xl mx-auto">
            Discover vulnerabilities before attackers do with professional penetration testing services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-red-900 hover:bg-gray-100 transition-colors"
          >
            Start Penetration Test
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PenetrationTestingPage;
