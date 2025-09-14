import React from 'react';
import { Link } from 'react-router-dom';

const NFTMarketplacePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-rose-800 to-red-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <Link to="/services/blockchain" className="hover:text-white transition-colors">Blockchain</Link>
              <span>/</span>
              <span className="text-white">NFT Marketplaces</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-pink-400"></span>
              <span className="text-sm font-medium text-white">NFT Marketplace Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Digital Asset</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-red-300">
                NFT Marketplaces
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build comprehensive NFT ecosystems with minting, trading, and marketplace functionality for digital art, collectibles, and unique digital assets.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-pink-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get NFT Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View NFT Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What are NFT Marketplaces Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                NFT Marketplace Development
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                NFT marketplaces are platforms where users can mint, buy, sell, and trade non-fungible tokens representing unique digital assets. Our solutions provide complete ecosystems for digital art, collectibles, and creative content.
              </p>
              <div className="space-y-4">
                {[
                  'ERC-721 and ERC-1155 token standards',
                  'Custom NFT minting and lazy minting',
                  'Marketplace UI with advanced filtering',
                  'Royalty distribution systems',
                  'IPFS and Arweave metadata storage',
                  'Multi-chain NFT support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&h=400&fit=crop"
                alt="NFT Marketplace Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm">Unique Assets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              NFT Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced NFT standards and storage solutions for building comprehensive digital asset marketplaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'ERC-721', icon: '🎨', desc: 'Non-fungible token standard' },
              { name: 'ERC-1155', icon: '🎭', desc: 'Multi-token standard' },
              { name: 'IPFS', icon: '🌐', desc: 'Decentralized storage' },
              { name: 'Arweave', icon: '📦', desc: 'Permanent storage' },
              { name: 'OpenSea SDK', icon: '🌊', desc: 'Marketplace integration' },
              { name: 'Moralis', icon: '⚡', desc: 'Web3 development platform' },
              { name: 'The Graph', icon: '📊', desc: 'Blockchain indexing' },
              { name: 'Pinata', icon: '📌', desc: 'IPFS pinning service' }
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

      {/* NFT Marketplace Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              NFT Marketplace Features We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive NFT marketplace solutions for different digital asset types and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Art & Collectibles Marketplace',
                description: 'Digital art platforms with artist profiles, collections, and auction functionality',
                image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&h=300&fit=crop',
                features: ['Artist Profiles', 'Collection Management', 'Auction System', 'Rarity Rankings']
              },
              {
                title: 'Gaming NFT Platform',
                description: 'Gaming asset marketplaces for in-game items, characters, and virtual land',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
                features: ['Game Integration', 'Asset Metadata', 'Cross-game Compatibility', 'Player Profiles']
              },
              {
                title: 'Utility NFT Marketplace',
                description: 'Functional NFTs including memberships, tickets, and access tokens',
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
                features: ['Membership Tokens', 'Event Tickets', 'Access Control', 'Utility Verification']
              }
            ].map((feature, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-3"></div>
                        {item}
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
              NFT Marketplace Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your NFT marketplace requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic NFT Marketplace',
                price: '$35,000',
                timeline: '2-3 months',
                features: [
                  'Simple NFT minting',
                  'Basic marketplace UI',
                  'Buy/sell functionality',
                  'IPFS storage',
                  'Wallet integration',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced NFT Platform',
                price: '$65,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Auction system',
                  'Royalty distribution',
                  'Collection management',
                  'Advanced filtering',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise NFT Ecosystem',
                price: '$120,000',
                timeline: '4-7 months',
                features: [
                  'Everything in Advanced',
                  'Multi-chain support',
                  'Custom token standards',
                  'White-label solution',
                  'Advanced analytics',
                  '18 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-pink-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
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
      <section className="py-24 bg-gradient-to-r from-pink-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your NFT Marketplace?</h2>
          <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
            Create a comprehensive NFT ecosystem that empowers creators and collectors in the digital asset economy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-pink-900 hover:bg-gray-100 transition-colors"
          >
            Start Your NFT Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NFTMarketplacePage;
