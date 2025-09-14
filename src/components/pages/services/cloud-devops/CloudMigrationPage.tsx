import React from 'react';
import { Link } from 'react-router-dom';

const CloudMigrationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Cloud Migration</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
              <span className="text-sm font-medium text-white">Cloud Migration Services</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Seamless & Secure</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300">
                Cloud Migration
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Migrate your applications and data to cloud platforms with minimal downtime, enhanced performance, and cost optimization through our proven migration strategies.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-sky-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Migration Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Migration Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cloud Migration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Cloud Migration Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Cloud Migration involves moving applications, data, and infrastructure from on-premises environments to cloud platforms. Our solutions ensure minimal downtime, enhanced performance, and cost optimization while maintaining security and compliance.
              </p>
              <div className="space-y-4">
                {[
                  'Multi-cloud platform expertise (AWS, Azure, Google Cloud)',
                  'Zero-downtime migration strategies and rollback plans',
                  'Application modernization and cloud-native optimization',
                  'Data transfer and synchronization with integrity checks',
                  'Performance optimization and cost reduction analysis',
                  'Security and compliance throughout migration process'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-sky-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Cloud Migration Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Migration Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert migration services across all major cloud platforms and hybrid environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'AWS', icon: '☁️', desc: 'Amazon Web Services migration' },
              { name: 'Microsoft Azure', icon: '🔷', desc: 'Azure cloud platform migration' },
              { name: 'Google Cloud', icon: '🌐', desc: 'GCP migration services' },
              { name: 'Hybrid Cloud', icon: '🔄', desc: 'Multi-cloud & hybrid setups' },
              { name: 'Kubernetes', icon: '⚙️', desc: 'Container orchestration migration' },
              { name: 'Serverless', icon: '⚡', desc: 'Function-as-a-Service migration' },
              { name: 'Database Migration', icon: '🗄️', desc: 'Data platform migration' },
              { name: 'Legacy Modernization', icon: '🔧', desc: 'Application modernization' }
            ].map((platform, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful cloud migrations with minimal risk and downtime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Assessment & Planning',
                description: 'Comprehensive analysis of current infrastructure and migration strategy development',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
                features: ['Infrastructure Audit', 'Cost Analysis', 'Migration Strategy', 'Risk Assessment']
              },
              {
                title: 'Migration Execution',
                description: 'Systematic migration with continuous monitoring and validation',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                features: ['Data Migration', 'Application Transfer', 'Testing & Validation', 'Performance Tuning']
              },
              {
                title: 'Optimization & Support',
                description: 'Post-migration optimization and ongoing support for cloud operations',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Performance Optimization', 'Cost Optimization', 'Monitoring Setup', 'Team Training']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mr-3"></div>
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
              Cloud Migration Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your cloud migration requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Migration',
                price: '$20,000',
                timeline: '2-4 months',
                features: [
                  'Single cloud platform migration',
                  'Basic application migration',
                  'Data transfer & validation',
                  'Performance testing',
                  'Documentation',
                  '6 months support'
                ]
              },
              {
                name: 'Enterprise Migration',
                price: '$45,000',
                timeline: '3-6 months',
                features: [
                  'Everything in Basic',
                  'Multi-cloud migration',
                  'Application modernization',
                  'Advanced security setup',
                  'Cost optimization',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Complete Transformation',
                price: '$85,000',
                timeline: '4-8 months',
                features: [
                  'Everything in Enterprise',
                  'Legacy system modernization',
                  'Cloud-native architecture',
                  'Advanced automation',
                  'Team training & workshops',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-sky-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-sky-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-sky-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
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
      <section className="py-24 bg-gradient-to-r from-sky-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Migrate to the Cloud?</h2>
          <p className="text-xl text-sky-200 mb-8 max-w-2xl mx-auto">
            Transform your infrastructure with seamless cloud migration that enhances performance and reduces costs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-sky-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Migration Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationPage;
