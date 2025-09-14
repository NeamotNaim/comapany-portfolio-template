import React from 'react';
import { Link } from 'react-router-dom';

const RecommendationSystemsPage: React.FC = () => {
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
              <Link to="/services/ai-ml" className="hover:text-white transition-colors">AI & ML</Link>
              <span>/</span>
              <span className="text-white">Recommendation Systems</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-teal-400"></span>
              <span className="text-sm font-medium text-white">Recommendation Systems Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Personalized AI</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300">
                Recommendation Systems
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build intelligent recommendation engines that personalize user experiences, increase engagement, and drive conversions through advanced machine learning algorithms.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-teal-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Recommendation Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Recommendation Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Recommendation Systems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                AI-Powered Recommendation Systems
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Recommendation systems use machine learning to analyze user behavior, preferences, and patterns to suggest relevant products, content, or services. Our solutions increase user engagement, boost sales, and enhance customer satisfaction.
              </p>
              <div className="space-y-4">
                {[
                  'Collaborative filtering for user-based recommendations',
                  'Content-based filtering for item similarity',
                  'Hybrid systems combining multiple approaches',
                  'Real-time personalization and dynamic updates',
                  'A/B testing and performance optimization',
                  'Scalable architecture for millions of users'
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Recommendation Systems Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">35%</div>
                <div className="text-sm">Engagement Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Recommendation Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced ML frameworks and tools for building intelligent recommendation engines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'TensorFlow', icon: '🧠', desc: 'Deep learning recommendations' },
              { name: 'Apache Spark', icon: '✨', desc: 'Large-scale data processing' },
              { name: 'Surprise', icon: '🎯', desc: 'Python recommendation library' },
              { name: 'LightFM', icon: '💡', desc: 'Hybrid recommendation models' },
              { name: 'Matrix Factorization', icon: '🔢', desc: 'Collaborative filtering' },
              { name: 'Deep Learning', icon: '🤖', desc: 'Neural collaborative filtering' },
              { name: 'Redis', icon: '🗄️', desc: 'Real-time caching' },
              { name: 'Elasticsearch', icon: '🔍', desc: 'Content-based search' }
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

      {/* Recommendation Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Types of Recommendation Systems We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive recommendation approaches for different business needs and user scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Recommendations',
                description: 'Product recommendations for online stores to increase sales and customer satisfaction',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                features: ['Product Suggestions', 'Cross-selling', 'Upselling', 'Personalized Catalogs']
              },
              {
                title: 'Content Recommendations',
                description: 'Media and content suggestions for streaming platforms and news websites',
                image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
                features: ['Movie/Music Suggestions', 'Article Recommendations', 'Video Playlists', 'Content Discovery']
              },
              {
                title: 'Social Recommendations',
                description: 'Friend suggestions, group recommendations, and social content personalization',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
                features: ['Friend Suggestions', 'Group Recommendations', 'Social Feed', 'Interest Matching']
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
              Recommendation Systems Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your recommendation system requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Recommendation Engine',
                price: '$28,000',
                timeline: '2-3 months',
                features: [
                  'Collaborative filtering',
                  'Basic personalization',
                  'API integration',
                  'Performance metrics',
                  'Documentation',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Recommendation Platform',
                price: '$50,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Hybrid recommendation',
                  'Real-time updates',
                  'A/B testing framework',
                  'Analytics dashboard',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Recommendation Suite',
                price: '$80,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Advanced',
                  'Deep learning models',
                  'Multi-domain recommendations',
                  'Scalable infrastructure',
                  'Advanced analytics',
                  '18 months support'
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Recommendation System?</h2>
          <p className="text-xl text-teal-200 mb-8 max-w-2xl mx-auto">
            Create personalized experiences that engage users and drive business growth with intelligent recommendations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-teal-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Recommendation Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RecommendationSystemsPage;
