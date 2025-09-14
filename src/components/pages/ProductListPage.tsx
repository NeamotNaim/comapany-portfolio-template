import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'novabank',
    name: 'NovaBank',
    tagline: 'Next-Gen Digital Banking',
    desc: 'Revolutionary digital banking platform with AI-powered financial insights, seamless transactions, and enterprise-grade security.',
    image: 'https://picsum.photos/seed/novabank/600/400',
    category: 'FinTech',
    status: 'Live',
    users: '50K+',
    rating: 4.9,
    technologies: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
    gradient: 'from-blue-600 to-purple-600',
    accentColor: 'blue',
    features: ['AI Financial Insights', 'Real-time Transactions', 'Advanced Security', 'Mobile Banking'],
    link: '/products/novabank'
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    tagline: 'Smart Fitness Companion',
    desc: 'Comprehensive fitness tracking platform with personalized workouts, nutrition planning, and social community features.',
    image: 'https://picsum.photos/seed/fittrack/600/400',
    category: 'Health & Fitness',
    status: 'Live',
    users: '25K+',
    rating: 4.8,
    technologies: ['React Native', 'Python', 'TensorFlow', 'IoT'],
    gradient: 'from-green-500 to-emerald-600',
    accentColor: 'green',
    features: ['Workout Tracking', 'Nutrition Planning', 'Social Features', 'Wearable Integration'],
    link: '/products/fittrack'
  },
  {
    id: 'shopease',
    name: 'ShopEase',
    tagline: 'E-commerce Reimagined',
    desc: 'Modern e-commerce platform with AI-powered recommendations, advanced analytics, and seamless checkout experience.',
    image: 'https://picsum.photos/seed/shopease/600/400',
    category: 'E-commerce',
    status: 'Live',
    users: '100K+',
    rating: 4.7,
    technologies: ['Vue.js', 'Laravel', 'Redis', 'AWS'],
    gradient: 'from-orange-500 to-red-600',
    accentColor: 'orange',
    features: ['AI Recommendations', 'Advanced Analytics', 'Multi-vendor Support', 'Mobile Commerce'],
    link: '/products/shopease'
  },
  {
    id: 'cloudflow',
    name: 'CloudFlow',
    tagline: 'DevOps Automation Suite',
    desc: 'Comprehensive DevOps platform for CI/CD automation, infrastructure management, and team collaboration.',
    image: 'https://picsum.photos/seed/cloudflow/600/400',
    category: 'DevOps',
    status: 'Beta',
    users: '5K+',
    rating: 4.6,
    technologies: ['Docker', 'Kubernetes', 'Go', 'Terraform'],
    gradient: 'from-indigo-500 to-purple-600',
    accentColor: 'indigo',
    features: ['CI/CD Automation', 'Infrastructure as Code', 'Monitoring & Alerts', 'Team Collaboration'],
    link: '/products/cloudflow'
  },
  {
    id: 'datainsight',
    name: 'DataInsight',
    tagline: 'Business Intelligence Platform',
    desc: 'Advanced analytics platform with real-time dashboards, predictive modeling, and automated reporting.',
    image: 'https://picsum.photos/seed/datainsight/600/400',
    category: 'Analytics',
    status: 'Live',
    users: '15K+',
    rating: 4.8,
    technologies: ['Python', 'Apache Spark', 'D3.js', 'PostgreSQL'],
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Automated Reports', 'Data Visualization'],
    link: '/products/datainsight'
  },
  {
    id: 'securevault',
    name: 'SecureVault',
    tagline: 'Enterprise Security Suite',
    desc: 'Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance management.',
    image: 'https://picsum.photos/seed/securevault/600/400',
    category: 'Security',
    status: 'Live',
    users: '30K+',
    rating: 4.9,
    technologies: ['Python', 'Machine Learning', 'Blockchain', 'Kubernetes'],
    gradient: 'from-red-500 to-pink-600',
    accentColor: 'red',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Security Analytics'],
    link: '/products/securevault'
  }
];

const categories = ['All', 'FinTech', 'Health & Fitness', 'E-commerce', 'DevOps', 'Analytics', 'Security'];

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-purple-400/5 rounded-full blur-xl animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-white">Our Product Portfolio</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="block">Innovative</span>
              <span className="block text-blue-300">Digital Products</span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-100 leading-relaxed">
              Discover our cutting-edge software solutions designed to transform businesses and empower users with next-generation technology and exceptional user experiences.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center rounded-full bg-blue-100/20 border border-blue-200/30 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Enterprise Ready
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-100/20 border border-blue-200/30 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                AI-Powered
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-100/20 border border-blue-200/30 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Scalable Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Filter our products by category to find the perfect solution for your needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105 transform'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Live'
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        product.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
                      } animate-pulse`}></div>
                      {product.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Quick Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-3">
                      <Link
                        to={product.link}
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30"
                      >
                        View Details
                      </Link>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-indigo-600 mb-3">{product.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">{product.desc}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{product.users}</div>
                      <div className="text-xs text-gray-500">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{product.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{product.technologies.length}</div>
                      <div className="text-xs text-gray-500">Technologies</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={product.link}
                    className={`block w-full text-center bg-gradient-to-r ${product.gradient} text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    Explore {product.name}
                    <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category to see more products.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Discover how our innovative products can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 text-white px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;