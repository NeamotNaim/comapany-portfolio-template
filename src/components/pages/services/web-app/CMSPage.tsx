import React from 'react';
import { Link } from 'react-router-dom';

const CMSPage: React.FC = () => {
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
              <Link to="/services/web-app" className="hover:text-white transition-colors">Web Applications</Link>
              <span>/</span>
              <span className="text-white">Content Management Systems</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium text-white">Content Management Systems</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Powerful Content &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-red-300">
                Management Systems
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build custom CMS solutions that empower your team to create, manage, and publish content effortlessly with intuitive interfaces and powerful features.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-amber-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get CMS Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View CMS Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMS Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Custom Content Management Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our Content Management Systems empower your team to create, edit, and publish content without technical knowledge. From simple blogs to complex enterprise content workflows, we build CMS solutions tailored to your specific needs.
              </p>
              <div className="space-y-4">
                {[
                  'Intuitive drag-and-drop content editor',
                  'Multi-user collaboration with role-based permissions',
                  'SEO optimization tools built-in',
                  'Media library with advanced organization',
                  'Version control and content scheduling',
                  'Multi-language and multi-site support'
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
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
                alt="Content Management System Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Easy</div>
                <div className="text-sm">Content Editing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Core CMS Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that make content management efficient and powerful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Content Editor',
                description: 'Rich WYSIWYG editor with drag-and-drop functionality and live preview',
                icon: '✏️'
              },
              {
                title: 'Media Management',
                description: 'Advanced media library with image optimization and CDN integration',
                icon: '🖼️'
              },
              {
                title: 'User Roles',
                description: 'Granular permission system with custom roles and access controls',
                icon: '👥'
              },
              {
                title: 'SEO Tools',
                description: 'Built-in SEO optimization with meta tags, sitemaps, and analytics',
                icon: '🔍'
              },
              {
                title: 'Version Control',
                description: 'Content versioning with rollback capabilities and change tracking',
                icon: '📝'
              },
              {
                title: 'Workflow Management',
                description: 'Content approval workflows with review and publishing controls',
                icon: '⚡'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              CMS Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern platforms and frameworks for building flexible content management systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Strapi', icon: '🚀', desc: 'Headless CMS with API-first approach' },
              { name: 'Sanity', icon: '⚡', desc: 'Real-time collaborative CMS' },
              { name: 'WordPress', icon: '📝', desc: 'Popular CMS with custom themes' },
              { name: 'Contentful', icon: '☁️', desc: 'Cloud-based headless CMS' },
              { name: 'Ghost', icon: '👻', desc: 'Modern publishing platform' },
              { name: 'Drupal', icon: '💧', desc: 'Enterprise-grade CMS solution' },
              { name: 'Craft CMS', icon: '🛠️', desc: 'Flexible content-first CMS' },
              { name: 'Custom CMS', icon: '⚙️', desc: 'Tailored solutions for unique needs' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              CMS Solutions We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized content management systems for different use cases and industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Traditional CMS',
                description: 'Full-featured CMS with integrated frontend and backend for complete website management',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Integrated Frontend', 'Theme System', 'Plugin Architecture', 'User Management']
              },
              {
                title: 'Headless CMS',
                description: 'API-first CMS that delivers content to any frontend via APIs for maximum flexibility',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                features: ['API-First Approach', 'Multi-Channel Publishing', 'Developer Friendly', 'Scalable Architecture']
              },
              {
                title: 'Enterprise CMS',
                description: 'Large-scale content management with advanced workflows, permissions, and integrations',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                features: ['Advanced Workflows', 'Enterprise Security', 'Custom Integrations', 'Multi-Site Management']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              CMS Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your content management requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic CMS',
                price: '$20,000',
                timeline: '2-3 months',
                features: [
                  'Custom content types',
                  'WYSIWYG editor',
                  'Media management',
                  'User roles & permissions',
                  'SEO optimization',
                  '6 months support'
                ]
              },
              {
                name: 'Professional CMS',
                price: '$35,000',
                timeline: '3-5 months',
                features: [
                  'Everything in Basic',
                  'Advanced workflows',
                  'Multi-language support',
                  'API integration',
                  'Custom dashboard',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise CMS',
                price: '$55,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Professional',
                  'Multi-site management',
                  'Advanced analytics',
                  'Custom integrations',
                  'Enterprise security',
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your CMS?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Create a powerful content management system that empowers your team and grows with your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-amber-900 hover:bg-gray-100 transition-colors"
          >
            Start Your CMS Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CMSPage;
