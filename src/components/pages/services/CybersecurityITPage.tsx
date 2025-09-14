import React from 'react';
import { Link } from 'react-router-dom';

const cybersecurityServices = [
  {
    title: 'Security Assessments & Audits',
    description: 'Comprehensive security evaluations to identify vulnerabilities and compliance gaps.',
    features: ['Vulnerability Assessment', 'Security Audits', 'Risk Analysis', 'Compliance Review'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    technologies: ['Nessus', 'OpenVAS', 'Qualys', 'Rapid7'],
    timeline: '2-4 weeks',
    price: 'Starting from $8,000',
    link: '/services/cybersecurity-it/security-assessment'
  },
  {
    title: 'Penetration Testing',
    description: 'Ethical hacking services to test your systems against real-world attack scenarios.',
    features: ['Network Penetration Testing', 'Web Application Testing', 'Social Engineering', 'Wireless Security Testing'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    technologies: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark'],
    timeline: '1-3 weeks',
    price: 'Starting from $12,000',
    link: '/services/cybersecurity-it/penetration-testing'
  },
  {
    title: 'Compliance Management',
    description: 'Ensure regulatory compliance with industry standards and frameworks.',
    features: ['GDPR Compliance', 'SOC 2 Implementation', 'ISO 27001 Certification', 'HIPAA Compliance'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    technologies: ['GRC Platforms', 'Compliance Tools', 'Audit Management', 'Risk Frameworks'],
    timeline: '3-6 months',
    price: 'Starting from $25,000',
    link: '/services/cybersecurity-it/compliance-management'
  },
  {
    title: 'IT Strategy Consulting',
    description: 'Strategic IT planning and digital transformation consulting services.',
    features: ['IT Roadmap Planning', 'Technology Assessment', 'Digital Transformation', 'Vendor Selection'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    technologies: ['Enterprise Architecture', 'ITIL Framework', 'COBIT', 'Strategic Planning Tools'],
    timeline: '2-4 months',
    price: 'Starting from $15,000',
    link: '/services/cybersecurity-it/it-strategy'
  },
  {
    title: 'Network Security Solutions',
    description: 'Comprehensive network security design and implementation services.',
    features: ['Firewall Configuration', 'Network Monitoring', 'Intrusion Detection', 'VPN Solutions'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    technologies: ['Cisco Security', 'Palo Alto', 'Fortinet', 'pfSense'],
    timeline: '1-3 months',
    price: 'Starting from $18,000',
    link: '/services/cybersecurity-it/network-security'
  },
  {
    title: 'Incident Response & Recovery',
    description: 'Rapid response services for security incidents and disaster recovery planning.',
    features: ['Incident Response Planning', 'Forensic Analysis', 'Disaster Recovery', 'Business Continuity'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135844.png',
    technologies: ['SIEM Tools', 'Forensic Software', 'Backup Solutions', 'Recovery Tools'],
    timeline: '2-6 weeks',
    price: 'Starting from $20,000',
    link: '/services/cybersecurity-it/incident-response'
  }
];

const CybersecurityITPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-400 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400 opacity-30 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-red-300"></span>
              <span className="text-sm font-medium text-white">Cybersecurity & IT Consulting</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Secure & Strategic</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-orange-100">
                IT Solutions
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-red-100 leading-relaxed">
              Protect your business with comprehensive cybersecurity solutions and strategic IT consulting that ensures security, compliance, and operational excellence.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-red-600 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Security Assessment</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Security Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Comprehensive Cybersecurity & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your business with our full spectrum of cybersecurity and IT consulting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cybersecurityServices.map((service, i) => (
              <Link 
                key={i} 
                to={service.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-red-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors">
                    <img src={service.icon} alt={service.title} className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">{service.title}</h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {service.timeline}</span>
                    <span><strong>Price:</strong> {service.price}</span>
                  </div>
                  
                  <div className="inline-flex items-center text-sm font-medium text-red-700 group-hover:text-red-800 transition-colors">
                    Learn More
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Security Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Why Choose Our Cybersecurity & IT Services?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                In today's digital landscape, cybersecurity and strategic IT planning are critical for business success. Our expert team provides comprehensive solutions to protect your assets and optimize your technology infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  'Certified security professionals with industry expertise',
                  'Comprehensive risk assessment and mitigation strategies',
                  'Compliance with major regulatory frameworks',
                  'Proactive threat detection and incident response',
                  '24/7 security monitoring and support',
                  'Strategic IT planning for digital transformation'
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
                alt="Cybersecurity Operations"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Threat Detection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Security by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record of protecting businesses and ensuring compliance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Security Assessments', icon: '🔍' },
              { number: '99.9%', label: 'Threat Detection Rate', icon: '🛡️' },
              { number: '24/7', label: 'Security Monitoring', icon: '👁️' },
              { number: '100%', label: 'Compliance Success', icon: '✅' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Get a comprehensive security assessment and strategic IT consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Get Free Security Assessment
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityITPage;
