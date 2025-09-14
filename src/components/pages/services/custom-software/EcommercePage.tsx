import React from 'react';
import { Link } from 'react-router-dom';

const EcommercePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <Link to="/services/custom-software" className="hover:text-white transition-colors">Custom Software</Link>
              <span>/</span>
              <span className="text-white">E-commerce Platforms</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
              <span className="text-sm font-medium text-white">E-commerce Platforms</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Scalable & Converting</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300">
                E-commerce Platforms
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build powerful online stores with custom e-commerce platforms that drive sales, manage inventory, and provide exceptional shopping experiences across all devices.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-purple-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get E-commerce Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Store Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is E-commerce Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                E-commerce Platform Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Custom E-commerce Platforms provide complete online selling solutions with advanced features for product management, payment processing, and customer engagement. Our platforms are built for scalability and conversion optimization.
              </p>
              <div className="space-y-4">
                {[
                  'Advanced product catalog and inventory management',
                  'Secure payment processing and checkout optimization',
                  'Multi-channel selling and marketplace integration',
                  'Customer account management and loyalty programs',
                  'Order management and fulfillment automation',
                  'Analytics and sales performance tracking'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="E-commerce Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">3x</div>
                <div className="text-sm">Sales Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              E-commerce Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features for complete online selling and store management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Product Catalog', icon: '📦', desc: 'Advanced product management' },
              { name: 'Shopping Cart', icon: '🛒', desc: 'Optimized checkout process' },
              { name: 'Payment Gateway', icon: '💳', desc: 'Secure payment processing' },
              { name: 'Inventory Management', icon: '📊', desc: 'Real-time stock tracking' },
              { name: 'Order Management', icon: '📋', desc: 'Complete order lifecycle' },
              { name: 'Customer Accounts', icon: '👤', desc: 'User registration & profiles' },
              { name: 'Marketing Tools', icon: '📢', desc: 'Promotions & campaigns' },
              { name: 'Analytics', icon: '📈', desc: 'Sales & performance insights' }
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

      {/* E-commerce Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              E-commerce Platform Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored e-commerce solutions for different business models and industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'B2C Online Stores',
                description: 'Consumer-focused e-commerce with optimized shopping experiences',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                features: ['Product Catalogs', 'Shopping Cart', 'Customer Reviews', 'Wishlist & Favorites']
              },
              {
                title: 'B2B Marketplaces',
                description: 'Business-to-business platforms with bulk ordering and pricing',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                features: ['Bulk Pricing', 'Quote Requests', 'Account Management', 'Custom Catalogs']
              },
              {
                title: 'Multi-vendor Platforms',
                description: 'Marketplace solutions supporting multiple sellers and vendors',
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
                features: ['Vendor Management', 'Commission Tracking', 'Multi-store Support', 'Seller Analytics']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
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
              E-commerce Platform Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the e-commerce solution that fits your online selling requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Store',
                price: '$30,000',
                timeline: '3-4 months',
                features: [
                  'Basic product catalog',
                  'Shopping cart & checkout',
                  'Payment gateway integration',
                  'Order management',
                  'Up to 1,000 products',
                  '12 months support'
                ]
              },
              {
                name: 'Professional Store',
                price: '$55,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Starter',
                  'Advanced inventory management',
                  'Customer accounts & loyalty',
                  'Marketing & promotions',
                  'Up to 10,000 products',
                  '18 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Marketplace',
                price: '$95,000',
                timeline: '6-8 months',
                features: [
                  'Everything in Professional',
                  'Multi-vendor support',
                  'Advanced analytics',
                  'Unlimited products',
                  'Custom integrations',
                  '24 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Build a powerful e-commerce platform that drives sales and provides exceptional shopping experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-purple-900 hover:bg-gray-100 transition-colors"
          >
            Start Your E-commerce Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
