import React from 'react';
import { Link } from 'react-router-dom';

const RealtimePage: React.FC = () => {
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
              <Link to="/services/web-app" className="hover:text-white transition-colors">Web Applications</Link>
              <span>/</span>
              <span className="text-white">Real-time Applications</span>
            </nav>

            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-rose-400"></span>
              <span className="text-sm font-medium text-white">Real-time Web Applications</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Live & Interactive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300">
                Real-time Applications
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Build dynamic web applications with instant updates, live communication, and collaborative features that keep users engaged and connected in real-time.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-rose-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Real-time Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Real-time Examples</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Real-time Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Real-time Web Applications
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Real-time web applications provide instant, bidirectional communication between users and servers. From live chat systems to collaborative tools, these applications deliver immediate updates and seamless user experiences without page refreshes.
              </p>
              <div className="space-y-4">
                {[
                  'Instant messaging and live chat functionality',
                  'Real-time collaboration and document editing',
                  'Live notifications and activity feeds',
                  'WebSocket connections for low-latency communication',
                  'Synchronized data across multiple users',
                  'Scalable architecture for high concurrent users'
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
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                alt="Real-time Web Application Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Live</div>
                <div className="text-sm">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Core Real-time Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that power real-time communication and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'WebSocket Integration',
                description: 'Persistent connections for instant bidirectional communication',
                icon: '🔌'
              },
              {
                title: 'Live Chat',
                description: 'Real-time messaging with typing indicators and read receipts',
                icon: '💬'
              },
              {
                title: 'Real-time Updates',
                description: 'Instant data synchronization across all connected clients',
                icon: '🔄'
              },
              {
                title: 'Collaborative Features',
                description: 'Multi-user editing and collaboration tools with conflict resolution',
                icon: '👥'
              },
              {
                title: 'Live Notifications',
                description: 'Push notifications and activity feeds with real-time delivery',
                icon: '🔔'
              },
              {
                title: 'Presence Indicators',
                description: 'Show online status and user activity in real-time',
                icon: '🟢'
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
              Real-time Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern tools and frameworks for building high-performance real-time applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Socket.io', icon: '⚡', desc: 'Real-time bidirectional communication' },
              { name: 'WebRTC', icon: '📹', desc: 'Peer-to-peer video/audio communication' },
              { name: 'Firebase', icon: '🔥', desc: 'Real-time database and messaging' },
              { name: 'WebSockets', icon: '🔌', desc: 'Native WebSocket implementation' },
              { name: 'Redis', icon: '🗄️', desc: 'In-memory data store for caching' },
              { name: 'Node.js', icon: '🟢', desc: 'Server-side JavaScript runtime' },
              { name: 'GraphQL Subscriptions', icon: '📡', desc: 'Real-time GraphQL updates' },
              { name: 'Pusher', icon: '📤', desc: 'Hosted real-time messaging service' }
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

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Real-time Application Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industries and applications where real-time functionality drives engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Collaboration Tools',
                description: 'Real-time document editing, project management, and team communication platforms',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                features: ['Document Collaboration', 'Team Chat', 'Project Updates', 'File Sharing']
              },
              {
                title: 'Live Streaming & Gaming',
                description: 'Interactive streaming platforms, multiplayer games, and live event applications',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
                features: ['Live Video Streaming', 'Real-time Gaming', 'Interactive Chat', 'Live Events']
              },
              {
                title: 'Financial Trading',
                description: 'Real-time trading platforms, market data feeds, and financial dashboards',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
                features: ['Live Market Data', 'Trading Alerts', 'Portfolio Updates', 'Price Notifications']
              }
            ].map((useCase, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Real-time Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your real-time application requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Real-time',
                price: '$22,000',
                timeline: '3-4 months',
                features: [
                  'WebSocket integration',
                  'Live chat functionality',
                  'Real-time notifications',
                  'Basic presence indicators',
                  'Mobile responsive',
                  '6 months support'
                ]
              },
              {
                name: 'Advanced Real-time',
                price: '$38,000',
                timeline: '4-6 months',
                features: [
                  'Everything in Basic',
                  'Collaborative features',
                  'File sharing & media',
                  'Advanced user management',
                  'Analytics & monitoring',
                  '12 months support'
                ],
                popular: true
              },
              {
                name: 'Enterprise Real-time',
                price: '$60,000',
                timeline: '5-8 months',
                features: [
                  'Everything in Advanced',
                  'Custom integrations',
                  'Scalable architecture',
                  'Advanced security',
                  'Multi-region deployment',
                  '18 months support'
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Real-time Features?</h2>
          <p className="text-xl text-rose-200 mb-8 max-w-2xl mx-auto">
            Create engaging real-time applications that keep users connected and actively engaged.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-rose-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Real-time Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RealtimePage;
