import React from 'react';
import { Link } from 'react-router-dom';

const DeFiPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">DeFi Applications</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              <span className="text-sm font-medium text-white">DeFi Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Decentralized Finance</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                DeFi Applications
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build revolutionary DeFi protocols including DEXs, lending platforms, yield farming, and liquidity mining solutions that democratize financial services.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-emerald-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get DeFi Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View DeFi Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is DeFi Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                DeFi Application Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Decentralized Finance (DeFi) applications eliminate traditional financial intermediaries by using smart contracts to create open, permissionless financial services accessible to anyone with an internet connection.
              </p>
              <div className="space-y-4">
                {[
                  'Decentralized Exchange (DEX) development',
                  'Automated Market Maker (AMM) protocols',
                  'Lending and borrowing platforms',
                  'Yield farming and liquidity mining',
                  'Governance token implementation',
                  'Cross-chain DeFi integration'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop"
                alt="DeFi Application Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Global Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              DeFi Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced DeFi protocols and frameworks for building decentralized financial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Uniswap V3', icon: '🦄', desc: 'DEX protocol framework' },
              { name: 'Compound', icon: '🏦', desc: 'Lending protocol' },
              { name: 'Aave', icon: '👻', desc: 'DeFi lending platform' },
              { name: 'Curve Finance', icon: '📈', desc: 'Stablecoin exchange' },
              { name: 'Balancer', icon: '⚖️', desc: 'Automated portfolio manager' },
              { name: 'Yearn Finance', icon: '🌾', desc: 'Yield optimization' },
              { name: 'Chainlink', icon: '🔗', desc: 'Oracle network' },
              { name: '1inch', icon: '1️⃣', desc: 'DEX aggregator' }
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

      {/* DeFi Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              DeFi Applications We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive DeFi solutions for different financial services and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Decentralized Exchanges',
                description: 'AMM-based DEXs with liquidity pools, swapping, and yield farming capabilities',
                image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
                features: ['Automated Market Making', 'Liquidity Pools', 'Token Swapping', 'Fee Distribution']
              },
              {
                title: 'Lending Protocols',
                description: 'Decentralized lending and borrowing platforms with collateralized loans',
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
                features: ['Collateralized Lending', 'Interest Rate Models', 'Liquidation Mechanisms', 'Flash Loans']
              },
              {
                title: 'Yield Farming Platforms',
                description: 'Yield optimization protocols with automated strategies and reward distribution',
                image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&h=300&fit=crop',
                features: ['Yield Optimization', 'Reward Distribution', 'Strategy Automation', 'Risk Management']
              }
            ].map((app, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
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
              DeFi Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your DeFi application requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic DeFi Protocol',
                price: '$45,000',
                timeline: '3-4 months',
                features: [
                  'Simple DEX or lending protocol',
                  'Basic smart contracts',
                  'Frontend interface',
                  'Security audit',
                  'Testnet deployment',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced DeFi Platform',
                price: '$80,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'Complex DeFi mechanics',
                  'Governance token integration',
                  'Multi-chain deployment',
                  'Advanced UI/UX',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise DeFi Suite',
                price: '$150,000',
                timeline: '6-9 months',
                features: [
                  'Everything in Advanced',
                  'Custom DeFi innovations',
                  'Institutional features',
                  'Advanced analytics',
                  'White-label solution',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-emerald-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-emerald-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
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
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your DeFi Application?</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
            Create revolutionary decentralized finance protocols that democratize access to financial services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-emerald-900 hover:bg-gray-100 transition-colors"
          >
            Start Your DeFi Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DeFiPage;
