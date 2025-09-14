import React from 'react';
import { Link } from 'react-router-dom';

const DAOPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <Link to="/services/blockchain" className="hover:text-white transition-colors">Blockchain</Link>
              <span>/</span>
              <span className="text-white">DAO Development</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-violet-400"></span>
              <span className="text-sm font-medium text-white">DAO Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Decentralized Autonomous</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300">
                Organization (DAO)
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build decentralized governance systems with token-based voting, treasury management, and automated decision-making for community-driven organizations.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-violet-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get DAO Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View DAO Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is DAO Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                DAO Development Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Decentralized Autonomous Organizations (DAOs) are blockchain-based entities governed by smart contracts and community voting. Our solutions enable transparent, democratic decision-making and automated governance for modern organizations.
              </p>
              <div className="space-y-4">
                {[
                  'Governance token design and distribution',
                  'Voting mechanisms and proposal systems',
                  'Treasury management and fund allocation',
                  'Multi-signature wallet integration',
                  'Delegation and representative voting',
                  'Cross-chain DAO compatibility'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-violet-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
                alt="DAO Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-violet-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Decentralized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              DAO Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced governance frameworks and tools for building decentralized autonomous organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Aragon', icon: '🏛️', desc: 'DAO creation platform' },
              { name: 'Compound Governor', icon: '🗳️', desc: 'Governance framework' },
              { name: 'OpenZeppelin Governor', icon: '🛡️', desc: 'Governance contracts' },
              { name: 'Snapshot', icon: '📸', desc: 'Off-chain voting' },
              { name: 'Gnosis Safe', icon: '🔐', desc: 'Multi-signature treasury' },
              { name: 'Tally', icon: '📊', desc: 'Governance dashboard' },
              { name: 'Boardroom', icon: '🏢', desc: 'Governance analytics' },
              { name: 'Colony', icon: '🐝', desc: 'Reputation-based governance' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAO Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              DAO Features We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive DAO solutions for different governance models and organizational structures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Investment DAOs',
                description: 'Collective investment vehicles with democratic fund allocation and portfolio management',
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
                features: ['Investment Proposals', 'Fund Allocation', 'Portfolio Tracking', 'Member Rewards']
              },
              {
                title: 'Protocol DAOs',
                description: 'Governance systems for DeFi protocols and blockchain infrastructure projects',
                image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
                features: ['Protocol Upgrades', 'Parameter Changes', 'Fee Distribution', 'Validator Selection']
              },
              {
                title: 'Social DAOs',
                description: 'Community-driven organizations for social causes, creator economies, and membership clubs',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
                features: ['Membership Management', 'Event Organization', 'Content Curation', 'Reward Systems']
              }
            ].map((dao, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dao.image}
                    alt={dao.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {dao.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {dao.description}
                  </p>
                  <div className="space-y-2">
                    {dao.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-3"></div>
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
              DAO Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your DAO development requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic DAO',
                price: '$50,000',
                timeline: '3-4 months',
                features: [
                  'Simple governance token',
                  'Basic voting system',
                  'Proposal mechanism',
                  'Treasury management',
                  'Member dashboard',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced DAO Platform',
                price: '$85,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'Delegation system',
                  'Multi-signature treasury',
                  'Advanced voting mechanisms',
                  'Analytics dashboard',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise DAO Suite',
                price: '$150,000',
                timeline: '6-9 months',
                features: [
                  'Everything in Advanced',
                  'Custom governance models',
                  'Cross-chain compatibility',
                  'Advanced treasury features',
                  'White-label solution',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-violet-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-violet-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-violet-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-violet-600 text-white hover:bg-violet-700'
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
      <section className="py-24 bg-gradient-to-r from-violet-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your DAO?</h2>
          <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
            Create a decentralized autonomous organization that empowers community governance and democratic decision-making.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-violet-900 hover:bg-gray-100 transition-colors"
          >
            Start Your DAO Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DAOPage;
