import React from 'react';
import { Link } from 'react-router-dom';

const InfrastructureAsCodePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Infrastructure as Code</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium text-white">Infrastructure as Code</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Consistent & Repeatable</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-red-300">
                Infrastructure as Code
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Manage and provision infrastructure through code for consistency, scalability, and version control with Terraform, Ansible, and CloudFormation automation.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-amber-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get IaC Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View IaC Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Infrastructure as Code Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Infrastructure as Code Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Infrastructure as Code (IaC) enables you to manage and provision computing infrastructure through machine-readable definition files. Our solutions ensure consistency, repeatability, and version control for your infrastructure deployments.
              </p>
              <div className="space-y-4">
                {[
                  'Terraform scripts for multi-cloud provisioning',
                  'Ansible playbooks for configuration management',
                  'CloudFormation templates for AWS resources',
                  'Version control and collaborative workflows',
                  'Automated testing and validation',
                  'Disaster recovery and environment replication'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
                alt="Infrastructure as Code Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm">Faster Provisioning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IaC Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Infrastructure as Code Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern IaC tools and platforms for automated infrastructure management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Terraform', icon: '🏗️', desc: 'Multi-cloud infrastructure provisioning' },
              { name: 'Ansible', icon: '🔧', desc: 'Configuration management & automation' },
              { name: 'CloudFormation', icon: '☁️', desc: 'AWS infrastructure templates' },
              { name: 'Pulumi', icon: '⚡', desc: 'Modern infrastructure as code' },
              { name: 'Chef', icon: '👨‍🍳', desc: 'Infrastructure automation platform' },
              { name: 'Puppet', icon: '🎭', desc: 'Configuration management tool' },
              { name: 'ARM Templates', icon: '🔷', desc: 'Azure Resource Manager templates' },
              { name: 'CDK', icon: '🛠️', desc: 'Cloud Development Kit' }
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

      {/* IaC Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Infrastructure as Code Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key advantages of implementing Infrastructure as Code in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Consistency & Repeatability',
                description: 'Ensure identical infrastructure deployments across environments',
                image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
                features: ['Environment Parity', 'Standardized Deployments', 'Reduced Configuration Drift', 'Predictable Outcomes']
              },
              {
                title: 'Version Control & Collaboration',
                description: 'Track changes and collaborate on infrastructure modifications',
                image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
                features: ['Git-based Workflows', 'Change Tracking', 'Code Reviews', 'Rollback Capabilities']
              },
              {
                title: 'Automation & Efficiency',
                description: 'Automate infrastructure provisioning and reduce manual errors',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Automated Provisioning', 'Reduced Manual Errors', 'Faster Deployments', 'Cost Optimization']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
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
              Infrastructure as Code Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your Infrastructure as Code requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic IaC Setup',
                price: '$18,000',
                timeline: '1-2 months',
                features: [
                  'Terraform or Ansible setup',
                  'Basic infrastructure templates',
                  'Version control integration',
                  'Documentation',
                  'Basic training',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced IaC Solution',
                price: '$35,000',
                timeline: '2-4 months',
                features: [
                  'Everything in Basic',
                  'Multi-cloud templates',
                  'Automated testing',
                  'CI/CD integration',
                  'Advanced workflows',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise IaC Platform',
                price: '$65,000',
                timeline: '3-6 months',
                features: [
                  'Everything in Advanced',
                  'Custom modules & libraries',
                  'Governance & compliance',
                  'Team training & workshops',
                  'Ongoing optimization',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-amber-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-amber-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
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
      <section className="py-24 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Codify Your Infrastructure?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Transform your infrastructure management with code-based automation that ensures consistency and scalability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-amber-900 hover:bg-gray-100 transition-colors"
          >
            Start Your IaC Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureAsCodePage;
