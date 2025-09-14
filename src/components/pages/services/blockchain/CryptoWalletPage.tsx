import React from 'react';
import { Link } from 'react-router-dom';

const CryptoWalletPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Cryptocurrency Wallets</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              <span className="text-sm font-medium text-white">Crypto Wallet Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Secure Digital</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                Cryptocurrency Wallets
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build secure, user-friendly cryptocurrency wallets with multi-currency support, DApp integration, and advanced security features for safe digital asset management.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-blue-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Wallet Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Wallet Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What are Crypto Wallets Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Cryptocurrency Wallet Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Cryptocurrency wallets are secure digital applications that store private keys and enable users to send, receive, and manage their digital assets. Our solutions provide bank-level security with intuitive user experiences.
              </p>
              <div className="space-y-4">
                {[
                  'Multi-currency and multi-blockchain support',
                  'Hardware wallet integration (Ledger, Trezor)',
                  'Built-in DApp browser and Web3 connectivity',
                  'Advanced security with biometric authentication',
                  'Staking and yield farming integration',
                  'Cross-platform mobile and desktop apps'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                alt="Cryptocurrency Wallet Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">🔒</div>
                <div className="text-sm">Bank-Level Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Wallet Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced security frameworks and blockchain libraries for building secure cryptocurrency wallets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React Native', icon: '📱', desc: 'Cross-platform mobile apps' },
              { name: 'Electron', icon: '💻', desc: 'Desktop wallet applications' },
              { name: 'Web3.js', icon: '🌐', desc: 'Ethereum blockchain interaction' },
              { name: 'WalletConnect', icon: '🔗', desc: 'DApp connection protocol' },
              { name: 'Ledger SDK', icon: '🔐', desc: 'Hardware wallet integration' },
              { name: 'MetaMask SDK', icon: '🦊', desc: 'Browser wallet integration' },
              { name: 'Trust Wallet Core', icon: '🛡️', desc: 'Multi-blockchain library' },
              { name: 'Firebase', icon: '🔥', desc: 'Backend and authentication' }
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

      {/* Wallet Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Types of Crypto Wallets We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive wallet solutions for different user needs and security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mobile Crypto Wallets',
                description: 'Native mobile apps with biometric security and seamless user experience',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                features: ['Biometric Authentication', 'Push Notifications', 'QR Code Scanning', 'Offline Storage']
              },
              {
                title: 'Web Browser Extensions',
                description: 'Browser-based wallets with DApp integration and Web3 connectivity',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                features: ['DApp Browser', 'Web3 Integration', 'Cross-site Scripting Protection', 'Auto-lock Features']
              },
              {
                title: 'Desktop Applications',
                description: 'Full-featured desktop wallets with advanced portfolio management',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Portfolio Tracking', 'Advanced Charts', 'Multi-account Management', 'Hardware Integration']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
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
              Crypto Wallet Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your cryptocurrency wallet requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Crypto Wallet',
                price: '$40,000',
                timeline: '3-4 months',
                features: [
                  'Single platform (mobile/web)',
                  'Multi-currency support',
                  'Basic security features',
                  'Send/receive functionality',
                  'Transaction history',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Wallet Platform',
                price: '$70,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'Cross-platform deployment',
                  'DApp browser integration',
                  'Hardware wallet support',
                  'Staking features',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Wallet Suite',
                price: '$120,000',
                timeline: '5-8 months',
                features: [
                  'Everything in Advanced',
                  'White-label solution',
                  'Advanced analytics',
                  'Multi-signature support',
                  'Institutional features',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Crypto Wallet?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Create secure, user-friendly cryptocurrency wallets that provide safe and convenient digital asset management.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-blue-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Wallet Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CryptoWalletPage;
