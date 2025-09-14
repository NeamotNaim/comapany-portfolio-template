import React from 'react';
import { Link } from 'react-router-dom';

const MobileDesignPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
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
              <span className="text-white">Mobile App Design</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
              <span className="text-sm font-medium text-white">Mobile App Design</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Native & Intuitive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300">
                Mobile App Design
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Create stunning native iOS and Android app designs that follow platform-specific guidelines and deliver exceptional mobile user experiences.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-purple-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Mobile Design Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Mobile Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mobile App Design Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Mobile App Design Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Mobile App Design focuses on creating intuitive, platform-specific interfaces for iOS and Android devices. Our solutions follow native design guidelines while delivering exceptional user experiences optimized for touch interactions and mobile contexts.
              </p>
              <div className="space-y-4">
                {[
                  'Native iOS and Android design guidelines',
                  'Touch-optimized interactions and gestures',
                  'App store-ready assets and icon design',
                  'Responsive design for multiple screen sizes',
                  'Platform-specific UI patterns and components',
                  'Accessibility compliance for mobile devices'
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Mobile App Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-sm">App Store Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Design Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Mobile Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional mobile design tools and platforms for creating native app experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Figma', icon: '🎨', desc: 'Mobile UI design & prototyping' },
              { name: 'Sketch', icon: '💎', desc: 'iOS app design specialist' },
              { name: 'Adobe XD', icon: '🔷', desc: 'Cross-platform mobile design' },
              { name: 'Principle', icon: '🔄', desc: 'Mobile interaction design' },
              { name: 'Framer', icon: '⚡', desc: 'Advanced mobile prototyping' },
              { name: 'Zeplin', icon: '📐', desc: 'Design handoff for developers' },
              { name: 'Marvel', icon: '🦸', desc: 'Mobile app prototyping' },
              { name: 'InVision', icon: '💎', desc: 'Mobile design collaboration' }
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

      {/* Mobile Design Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Mobile Design Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform-specific mobile design solutions for different app types and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'iOS App Design',
                description: 'Native iOS designs following Apple Human Interface Guidelines',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
                features: ['iOS Design System', 'SF Symbols Integration', 'Dynamic Type Support', 'Dark Mode Design']
              },
              {
                title: 'Android App Design',
                description: 'Material Design-compliant Android interfaces with modern patterns',
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
                features: ['Material Design 3', 'Adaptive Icons', 'Motion & Transitions', 'Theming System']
              },
              {
                title: 'Cross-Platform Design',
                description: 'Unified design systems that work beautifully across both platforms',
                image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
                features: ['Design System Unity', 'Platform Adaptations', 'Shared Components', 'Brand Consistency']
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
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mr-3"></div>
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
              Mobile App Design Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your mobile app design requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Single Platform Design',
                price: '$18,000',
                timeline: '2-3 months',
                features: [
                  'iOS or Android design',
                  'Key screen designs',
                  'App icon & assets',
                  'Style guide',
                  'Interactive prototype',
                  '6 months support'
                ]
              },
              {
                name: 'Cross-Platform Design',
                price: '$32,000',
                timeline: '3-5 months',
                features: [
                  'iOS & Android designs',
                  'Comprehensive screen set',
                  'Platform-specific adaptations',
                  'App store assets',
                  'Design system',
                  '9 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Mobile Suite',
                price: '$55,000',
                timeline: '4-7 months',
                features: [
                  'Everything in Cross-Platform',
                  'Tablet & watch designs',
                  'Advanced interactions',
                  'Accessibility compliance',
                  'Developer handoff',
                  '12 months support'
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
      <section className="py-24 bg-gradient-to-r from-purple-900 to-violet-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Design Your Mobile App?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Create stunning native mobile app designs that deliver exceptional user experiences on iOS and Android.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-purple-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Mobile Design Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileDesignPage;
