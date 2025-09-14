import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Documentation data structure
const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    description: 'Quick start guide to begin your journey with RecursionSoft',
    color: 'from-blue-500 to-cyan-500',
    articles: [
      { title: 'Installation & Setup', time: '5 min', difficulty: 'Beginner' },
      { title: 'Your First Project', time: '10 min', difficulty: 'Beginner' },
      {
        title: 'Configuration Guide',
        time: '8 min',
        difficulty: 'Intermediate',
      },
      {
        title: 'Environment Setup',
        time: '12 min',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: '⚡',
    description: 'Complete API documentation with examples and best practices',
    color: 'from-purple-500 to-pink-500',
    articles: [
      { title: 'Authentication', time: '7 min', difficulty: 'Intermediate' },
      { title: 'REST API Endpoints', time: '15 min', difficulty: 'Advanced' },
      { title: 'GraphQL Schema', time: '12 min', difficulty: 'Advanced' },
      {
        title: 'Webhooks & Events',
        time: '10 min',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    icon: '📚',
    description: 'Step-by-step tutorials for common use cases and workflows',
    color: 'from-green-500 to-emerald-500',
    articles: [
      {
        title: 'Building Your First App',
        time: '25 min',
        difficulty: 'Beginner',
      },
      {
        title: 'Advanced Integrations',
        time: '30 min',
        difficulty: 'Advanced',
      },
      {
        title: 'Performance Optimization',
        time: '20 min',
        difficulty: 'Intermediate',
      },
      {
        title: 'Security Best Practices',
        time: '18 min',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: '🌐',
    description: 'Deploy your applications with confidence using our guides',
    color: 'from-orange-500 to-red-500',
    articles: [
      { title: 'Cloud Deployment', time: '15 min', difficulty: 'Intermediate' },
      { title: 'Docker Configuration', time: '12 min', difficulty: 'Advanced' },
      { title: 'CI/CD Pipeline Setup', time: '20 min', difficulty: 'Advanced' },
      {
        title: 'Monitoring & Logging',
        time: '14 min',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: '🔧',
    description:
      'Common issues and solutions to keep your projects running smoothly',
    color: 'from-indigo-500 to-purple-500',
    articles: [
      { title: 'Common Error Messages', time: '8 min', difficulty: 'Beginner' },
      {
        title: 'Performance Issues',
        time: '12 min',
        difficulty: 'Intermediate',
      },
      { title: 'Debug Mode Guide', time: '10 min', difficulty: 'Intermediate' },
      { title: 'Support Resources', time: '5 min', difficulty: 'Beginner' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    icon: '🎯',
    description: 'Deep dive into advanced features and customization options',
    color: 'from-teal-500 to-cyan-500',
    articles: [
      { title: 'Custom Plugins', time: '25 min', difficulty: 'Expert' },
      { title: 'Architecture Patterns', time: '30 min', difficulty: 'Expert' },
      { title: 'Scaling Strategies', time: '22 min', difficulty: 'Advanced' },
      { title: 'Enterprise Features', time: '18 min', difficulty: 'Advanced' },
    ],
  },
];

const popularArticles = [
  {
    title: 'Quick Start Guide',
    category: 'Getting Started',
    views: '12.5k',
    time: '5 min',
  },
  {
    title: 'API Authentication',
    category: 'API Reference',
    views: '8.2k',
    time: '7 min',
  },
  {
    title: 'Building Your First App',
    category: 'Tutorials',
    views: '15.3k',
    time: '25 min',
  },
  {
    title: 'Cloud Deployment',
    category: 'Deployment',
    views: '6.8k',
    time: '15 min',
  },
  {
    title: 'Common Error Messages',
    category: 'Troubleshooting',
    views: '9.1k',
    time: '8 min',
  },
];

const faqs = [
  {
    question: 'How do I get started with RecursionSoft?',
    answer:
      'Getting started is easy! First, sign up for a free account, then follow our Quick Start Guide to set up your first project. Our onboarding process will walk you through the essential features and help you build your first application in under 30 minutes.',
    category: 'Getting Started',
  },
  {
    question: 'What programming languages do you support?',
    answer:
      'We support a wide range of programming languages including JavaScript/TypeScript, Python, Java, C#, PHP, Ruby, and Go. Our platform is designed to be language-agnostic, allowing you to use your preferred technology stack.',
    category: 'Technical',
  },
  {
    question: 'Is RecursionSoft GDPR compliant?',
    answer:
      'Yes, we are fully GDPR compliant. We implement strict data protection measures, provide data portability options, and ensure that all personal data is processed lawfully and transparently. You have full control over your data at all times.',
    category: 'Security',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer multiple support channels including 24/7 chat support, email support, comprehensive documentation, video tutorials, and community forums. Enterprise customers also get dedicated support representatives and priority response times.',
    category: 'Support',
  },
  {
    question: 'Can I integrate with third-party services?',
    answer:
      'Absolutely! Our platform supports hundreds of integrations with popular services like AWS, Google Cloud, Azure, Stripe, PayPal, Slack, and many more. We also provide a robust API for custom integrations.',
    category: 'Integrations',
  },
  {
    question: 'What are your pricing plans?',
    answer:
      'We offer flexible pricing plans to suit different needs: a free tier for getting started, professional plans for growing teams, and enterprise solutions for large organizations. All plans include core features with varying limits and additional capabilities.',
    category: 'Pricing',
  },
];

const DocsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Floating animation elements
  useEffect(() => {
    const interval = setInterval(() => {
      // Add some dynamic behavior if needed
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqCategories = ['All', ...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Documentation Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div className="text-4xl">
              {['📚', '⚡', '🚀', '🔧', '🎯', '🌐', '💡', '📖'][i]}
            </div>
          </div>
        ))}

        {/* Geometric Shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-blue-700 border border-white/20 shadow-xl">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Documentation
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">Developer</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build amazing applications with
              RecursionSoft. From quick start guides to advanced tutorials.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center p-4">
                    <svg
                      className="w-6 h-6 text-gray-400 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search documentation, guides, and FAQs..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none text-lg"
                    />
                    <div className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium">
                      Search
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600 text-sm">Documentation Pages</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600 text-sm">Code Examples</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Popular Articles Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Popular Articles
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most viewed and helpful documentation articles to get you started
              quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={`/docs/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-sm text-blue-600 font-medium mb-2">
                          {article.category}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-sm text-gray-500">
                          {article.views} views
                        </div>
                        <div className="text-sm text-gray-500">
                          {article.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {article.time} read
                      </div>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                        Read more
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Documentation Sections
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides organized by topic to help you master every
              aspect of our platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <div key={section.id} className="group">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${section.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Section Header */}
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-2xl mr-4 shadow-lg`}
                      >
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    </div>

                    {/* Articles List */}
                    <div className="space-y-3">
                      {section.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          to={`/docs/${section.id}`}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/60 transition-colors cursor-pointer group/article"
                        >
                          <div className="flex items-center flex-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3"></div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 group-hover/article:text-blue-600 transition-colors">
                                {article.title}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center gap-3">
                                <span className="flex items-center">
                                  <svg
                                    className="w-3 h-3 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {article.time}
                                </span>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    article.difficulty === 'Beginner'
                                      ? 'bg-green-100 text-green-700'
                                      : article.difficulty === 'Intermediate'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : article.difficulty === 'Advanced'
                                          ? 'bg-orange-100 text-orange-700'
                                          : 'bg-red-100 text-red-700'
                                  }`}
                                >
                                  {article.difficulty}
                                </span>
                              </div>
                            </div>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover/article:text-blue-600 group-hover/article:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link
                        to={`/docs/${section.id}`}
                        className={`block w-full py-3 px-4 bg-gradient-to-r ${section.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center`}
                      >
                        View All {section.title} Articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and
              services.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {faqCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left hover:bg-white/60 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full mr-3">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                        <div
                          className={`ml-4 transform transition-transform duration-300 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </section>

        {/* Support Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to
                help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get instant help from our support team
                </p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Start Chat
                </button>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us a detailed message
                </p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Send Email
                </button>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Connect with other developers
                </p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  Join Forum
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Jump to the most important resources and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'API Keys',
                description: 'Manage your API credentials',
                icon: '🔑',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Status Page',
                description: 'Check system status',
                icon: '📊',
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Changelog',
                description: 'Latest updates and features',
                icon: '📝',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Roadmap',
                description: 'Upcoming features',
                icon: '🗺️',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((link, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl`}
                    >
                      {link.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocsPage;
