import React from 'react';
import { Link } from 'react-router-dom';

const UXDesignPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-900 via-pink-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">UX Design</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-rose-400"></span>
              <span className="text-sm font-medium text-white">User Experience Design</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">User-Centered</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300">
                UX Design
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Create intuitive, user-centered digital experiences through comprehensive UX research, journey mapping, and usability testing that drives engagement and conversions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-rose-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get UX Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View UX Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is UX Design Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                User Experience Design Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                User Experience (UX) Design focuses on creating meaningful and relevant experiences for users by understanding their needs, behaviors, and pain points. Our UX solutions ensure your digital products are intuitive, accessible, and delightful to use.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive user research and persona development',
                  'User journey mapping and experience optimization',
                  'Information architecture and wireframing',
                  'Usability testing and iterative improvements',
                  'Accessibility compliance and inclusive design',
                  'Conversion rate optimization strategies'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-rose-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop"
                alt="UX Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              UX Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading UX tools and methodologies for creating exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Figma', icon: '🎨', desc: 'Design and prototyping' },
              { name: 'Miro', icon: '🗺️', desc: 'User journey mapping' },
              { name: 'Hotjar', icon: '🔥', desc: 'User behavior analytics' },
              { name: 'Maze', icon: '🧩', desc: 'Usability testing' },
              { name: 'UserTesting', icon: '👥', desc: 'User research platform' },
              { name: 'Optimal Workshop', icon: '🔬', desc: 'Information architecture' },
              { name: 'Google Analytics', icon: '📊', desc: 'User data analysis' },
              { name: 'Axure RP', icon: '⚡', desc: 'Advanced prototyping' }
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

      {/* UX Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our UX Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to creating user-centered designs that solve real problems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research & Discovery',
                description: 'Deep dive into user needs, market analysis, and competitive research',
                image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
                features: ['User Interviews', 'Surveys & Analytics', 'Competitive Analysis', 'Persona Development']
              },
              {
                title: 'Design & Prototype',
                description: 'Create wireframes, user flows, and interactive prototypes',
                image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
                features: ['Information Architecture', 'Wireframing', 'User Flows', 'Interactive Prototypes']
              },
              {
                title: 'Test & Iterate',
                description: 'Validate designs through testing and continuous improvement',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                features: ['Usability Testing', 'A/B Testing', 'User Feedback', 'Design Iterations']
              }
            ].map((process, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mr-3"></div>
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
              UX Design Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your UX design requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'UX Audit & Strategy',
                price: '$15,000',
                timeline: '2-3 months',
                features: [
                  'UX audit of existing product',
                  'User research & personas',
                  'Journey mapping',
                  'Recommendations report',
                  'Wireframes & user flows',
                  '3 months support'
                ]
              },
              {
                name: 'Complete UX Design',
                price: '$25,000',
                timeline: '3-5 months',
                features: [
                  'Everything in UX Audit',
                  'Comprehensive user testing',
                  'Interactive prototypes',
                  'Usability testing sessions',
                  'Design system foundation',
                  '6 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise UX Solution',
                price: '$45,000',
                timeline: '4-7 months',
                features: [
                  'Everything in Complete UX',
                  'Multi-platform UX design',
                  'Advanced user research',
                  'Accessibility compliance',
                  'Ongoing UX optimization',
                  '12 months support'
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 ${pkg.popular ? 'border-rose-500' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-rose-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.timeline}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-rose-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-rose-600 text-white hover:bg-rose-700'
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
      <section className="py-24 bg-gradient-to-r from-rose-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Improve Your User Experience?</h2>
          <p className="text-xl text-rose-200 mb-8 max-w-2xl mx-auto">
            Create user-centered designs that drive engagement, satisfaction, and business success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-rose-900 hover:bg-gray-100 transition-colors"
          >
            Start Your UX Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UXDesignPage;
