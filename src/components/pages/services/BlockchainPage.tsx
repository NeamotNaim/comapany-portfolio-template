import React from 'react';
import { Link } from 'react-router-dom';

const blockchainSolutionTypes = [
  {
    title: 'Smart Contracts',
    description: 'Self-executing contracts with terms directly written into code, ensuring automated and trustless transactions.',
    features: ['Solidity Development', 'Contract Auditing', 'Gas Optimization', 'Multi-signature Wallets'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099201.png',
    platforms: ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'],
    timeline: '2-4 months',
    price: 'Starting from $25,000',
    link: '/services/blockchain/smart-contracts'
  },
  {
    title: 'DeFi Applications',
    description: 'Decentralized finance solutions including DEXs, lending protocols, and yield farming platforms.',
    features: ['DEX Development', 'Liquidity Pools', 'Yield Farming', 'Governance Tokens'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099235.png',
    platforms: ['Uniswap Protocol', 'PancakeSwap', 'SushiSwap', 'Compound'],
    timeline: '3-6 months',
    price: 'Starting from $45,000',
    link: '/services/blockchain/defi'
  },
  {
    title: 'NFT Marketplaces',
    description: 'Complete NFT ecosystem with minting, trading, and marketplace functionality for digital assets.',
    features: ['NFT Minting', 'Marketplace UI', 'Royalty System', 'Metadata Storage'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099242.png',
    platforms: ['OpenSea Compatible', 'Custom Marketplace', 'IPFS Storage', 'Arweave'],
    timeline: '2-5 months',
    price: 'Starting from $35,000',
    link: '/services/blockchain/nft-marketplace'
  },
  {
    title: 'Cryptocurrency Wallets',
    description: 'Secure digital wallets for storing, sending, and receiving cryptocurrencies with advanced security features.',
    features: ['Multi-currency Support', 'Hardware Integration', 'DApp Browser', 'Staking Features'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099218.png',
    platforms: ['Mobile Apps', 'Web Extensions', 'Desktop Apps', 'Hardware Wallets'],
    timeline: '3-5 months',
    price: 'Starting from $40,000',
    link: '/services/blockchain/crypto-wallet'
  },
  {
    title: 'Blockchain Integration',
    description: 'Integrate blockchain technology into existing systems for enhanced security and transparency.',
    features: ['API Integration', 'Legacy System Bridge', 'Data Migration', 'Security Audits'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099228.png',
    platforms: ['Enterprise Systems', 'Web Applications', 'Mobile Apps', 'IoT Devices'],
    timeline: '2-4 months',
    price: 'Starting from $30,000',
    link: '/services/blockchain/integration'
  },
  {
    title: 'DAO Development',
    description: 'Decentralized Autonomous Organizations with governance tokens and voting mechanisms.',
    features: ['Governance Tokens', 'Voting Systems', 'Treasury Management', 'Proposal System'],
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099254.png',
    platforms: ['Ethereum', 'Polygon', 'Solana', 'Cardano'],
    timeline: '3-6 months',
    price: 'Starting from $50,000',
    link: '/services/blockchain/dao'
  }
];

const BlockchainPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
              <span className="text-sm font-medium text-white">Blockchain Solutions</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Decentralized Applications &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-pink-300">
                Blockchain Solutions
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build secure, transparent, and decentralized applications with our comprehensive blockchain development services for Web3, DeFi, and NFT solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-orange-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Blockchain Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Blockchain Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-orange-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Blockchain Development Services
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From smart contracts to full DeFi ecosystems, we build blockchain solutions that revolutionize how businesses operate and interact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainSolutionTypes.map((solution, i) => (
              <Link
                key={i}
                to={solution.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-orange-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                    <img src={solution.icon} alt={solution.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-4 w-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.platforms.map((platform, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {solution.timeline}</span>
                    <span><strong>Price:</strong> {solution.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-orange-700 group-hover:text-orange-800 transition-colors">
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

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Blockchain Development Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              From concept to mainnet deployment, we follow a secure and tested development methodology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Architecture Design', desc: 'Design blockchain architecture, tokenomics, and smart contract specifications.' },
              { step: '02', title: 'Smart Contract Development', desc: 'Develop, test, and optimize smart contracts with security best practices.' },
              { step: '03', title: 'Security Auditing', desc: 'Comprehensive security audits and penetration testing for vulnerabilities.' },
              { step: '04', title: 'Deployment & Monitoring', desc: 'Mainnet deployment with ongoing monitoring and maintenance support.' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build on Blockchain?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Transform your business with secure, transparent, and decentralized blockchain solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-orange-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Blockchain Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;
