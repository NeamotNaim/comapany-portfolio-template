import React from 'react';
import { Link } from 'react-router-dom';

const HealthcarePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Healthcare Systems</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-teal-400"></span>
              <span className="text-sm font-medium text-white">Healthcare Management Systems</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">HIPAA-Compliant & Secure</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300">
                Healthcare Systems
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build secure, HIPAA-compliant healthcare management systems that improve patient care, streamline operations, and ensure regulatory compliance for medical facilities.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-teal-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Healthcare Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Healthcare Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Healthcare Management Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Healthcare Management Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Healthcare Management Systems provide comprehensive solutions for medical facilities, ensuring HIPAA compliance, patient data security, and streamlined healthcare operations. Our systems improve patient care while reducing administrative burden.
              </p>
              <div className="space-y-4">
                {[
                  'HIPAA-compliant patient data management',
                  'Electronic Health Records (EHR) integration',
                  'Appointment scheduling and patient portal',
                  'Medical billing and insurance processing',
                  'Telemedicine and remote consultation',
                  'Clinical decision support and reporting'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Healthcare Management System"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">HIPAA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Healthcare System Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features for complete healthcare facility management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Patient Records', icon: '📋', desc: 'Electronic health records' },
              { name: 'Appointment Scheduling', icon: '📅', desc: 'Online booking system' },
              { name: 'Medical Billing', icon: '💰', desc: 'Insurance & payment processing' },
              { name: 'Prescription Management', icon: '💊', desc: 'E-prescribing system' },
              { name: 'Lab Integration', icon: '🧪', desc: 'Laboratory results management' },
              { name: 'Telemedicine', icon: '💻', desc: 'Remote consultation platform' },
              { name: 'Reporting & Analytics', icon: '📊', desc: 'Clinical & operational reports' },
              { name: 'Patient Portal', icon: '🏥', desc: 'Patient self-service access' }
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

      {/* Healthcare Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Healthcare System Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized healthcare solutions for different medical facilities and practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hospital Management',
                description: 'Comprehensive systems for large healthcare facilities and hospitals',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
                features: ['Patient Management', 'Bed Management', 'Staff Scheduling', 'Inventory Control']
              },
              {
                title: 'Clinic Management',
                description: 'Streamlined solutions for small to medium-sized medical practices',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
                features: ['Appointment Booking', 'Patient Records', 'Billing Integration', 'Practice Analytics']
              },
              {
                title: 'Specialty Practice',
                description: 'Customized systems for specialized medical practices and clinics',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
                features: ['Specialty Workflows', 'Custom Forms', 'Specialized Reporting', 'Equipment Integration']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></div>
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
              Healthcare System Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the healthcare solution that fits your medical facility requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Clinic Management',
                price: '$60,000',
                timeline: '6-8 months',
                features: [
                  'Patient records & EHR',
                  'Appointment scheduling',
                  'Basic billing integration',
                  'Patient portal',
                  'Up to 5 providers',
                  '12 months support'
                ]
              },
              {
                name: 'Advanced Practice',
                price: '$120,000',
                timeline: '8-12 months',
                features: [
                  'Everything in Clinic',
                  'Telemedicine platform',
                  'Advanced billing & insurance',
                  'Lab integration',
                  'Up to 20 providers',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Hospital Enterprise',
                price: '$250,000',
                timeline: '12-18 months',
                features: [
                  'Everything in Advanced',
                  'Multi-department support',
                  'Bed & resource management',
                  'Advanced analytics',
                  'Unlimited providers',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-teal-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
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
      <section className="py-24 bg-gradient-to-r from-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Modernize Your Healthcare Practice?</h2>
          <p className="text-xl text-teal-200 mb-8 max-w-2xl mx-auto">
            Implement secure, HIPAA-compliant healthcare management systems that improve patient care and operational efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-teal-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Healthcare Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;
