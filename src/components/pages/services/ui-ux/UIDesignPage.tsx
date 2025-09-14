import React from 'react';
import { Link } from 'react-router-dom';

const UIDesignPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/ui-ux" className="hover:text-white transition-colors">UI/UX Design</Link>
              <span>/</span>
              <span className="text-white">UI Design</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-indigo-400"></span>
              <span className="text-sm font-medium text-white">User Interface Design</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Beautiful & Modern</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300">
                UI Design
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Create stunning, modern interface designs that align with your brand and enhance user engagement through beautiful visuals and intuitive interactions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-indigo-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get UI Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View UI Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is UI Design Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                User Interface Design Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                User Interface (UI) Design focuses on the visual elements and interactive components that users engage with. Our UI solutions create beautiful, consistent, and brand-aligned interfaces that enhance user engagement and drive conversions.
              </p>
              <div className="space-y-4">
                {[
                  'Modern visual design and brand integration',
                  'Comprehensive component libraries and design systems',
                  'Responsive design for all screen sizes',
                  'Interactive animations and micro-interactions',
                  'Accessibility-compliant color schemes and typography',
                  'Cross-platform design consistency'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop"
                alt="UI Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Brand Aligned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              UI Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional design tools and platforms for creating stunning user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Figma', icon: '🎨', desc: 'Interface design & collaboration' },
              { name: 'Adobe XD', icon: '🔷', desc: 'UI/UX design platform' },
              { name: 'Sketch', icon: '💎', desc: 'Vector-based design tool' },
              { name: 'Framer', icon: '⚡', desc: 'Interactive design & prototyping' },
              { name: 'Adobe Illustrator', icon: '🎭', desc: 'Vector graphics & icons' },
              { name: 'Adobe Photoshop', icon: '🖼️', desc: 'Image editing & manipulation' },
              { name: 'Principle', icon: '🔄', desc: 'Animation & interaction design' },
              { name: 'Zeplin', icon: '📐', desc: 'Design handoff & specs' }
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

      {/* UI Design Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              UI Design Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive UI design solutions for different platforms and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Interface Design',
                description: 'Modern, responsive web interfaces that work beautifully across all devices',
                image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
                features: ['Responsive Layouts', 'Modern Typography', 'Color Systems', 'Interactive Elements']
              },
              {
                title: 'Mobile UI Design',
                description: 'Native iOS and Android interfaces following platform design guidelines',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
                features: ['Platform Guidelines', 'Touch Interactions', 'Mobile Patterns', 'App Store Assets']
              },
              {
                title: 'Dashboard Design',
                description: 'Data-rich dashboards and admin interfaces for complex applications',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                features: ['Data Visualization', 'Information Hierarchy', 'Complex Layouts', 'User Controls']
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-3"></div>
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
              UI Design Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your UI design requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic UI Design',
                price: '$12,000',
                timeline: '1-2 months',
                features: [
                  'Visual design concepts',
                  'Key screen designs',
                  'Basic component library',
                  'Style guide',
                  'Responsive layouts',
                  '3 months support'
                ]
              },
              {
                name: 'Complete UI Solution',
                price: '$22,000',
                timeline: '2-4 months',
                features: [
                  'Everything in Basic UI',
                  'Comprehensive screen designs',
                  'Advanced component library',
                  'Interactive prototypes',
                  'Brand integration',
                  '6 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise UI System',
                price: '$40,000',
                timeline: '3-6 months',
                features: [
                  'Everything in Complete UI',
                  'Multi-platform designs',
                  'Advanced design system',
                  'Animation & interactions',
                  'Developer handoff',
                  '12 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-indigo-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Create Beautiful Interfaces?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Design stunning, modern interfaces that align with your brand and enhance user engagement.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-indigo-900 hover:bg-gray-100 transition-colors"
          >
            Start Your UI Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIDesignPage;
