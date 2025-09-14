import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const APIReferencePage = () => {
  const [activeSection, setActiveSection] = useState('authentication');
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll detection for animations
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const sections = [
    { id: 'authentication', title: 'Authentication', icon: '🔐' },
    { id: 'endpoints', title: 'REST Endpoints', icon: '🌐' },
    { id: 'graphql', title: 'GraphQL Schema', icon: '📊' },
    { id: 'webhooks', title: 'Webhooks & Events', icon: '🔔' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/docs"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Docs
        </Link>
      </nav>

      {/* Header */}
      <header className="relative pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">⚡</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                API Reference
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete API documentation with examples, authentication, and best
              practices.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">API Sections</h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Authentication Section */}
              {activeSection === 'authentication' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔐</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Authentication
                      </h2>
                      <p className="text-gray-600">
                        Secure your API requests with proper authentication
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      RecursionSoft API uses API keys for authentication. All
                      API requests must include a valid API key in the request
                      headers.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Getting Your API Key
                    </h3>
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                      <ol className="space-y-3 text-blue-800">
                        <li>1. Log in to your RecursionSoft dashboard</li>
                        <li>2. Navigate to Settings → API Keys</li>
                        <li>3. Click "Generate New API Key"</li>
                        <li>4. Copy and securely store your key</li>
                      </ol>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Authentication Methods
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-gray-400 text-sm font-mono">
                            API Key Authentication
                          </span>
                        </div>
                        <div className="p-6">
                          <pre className="text-green-400 text-sm">
                            <code>{`// Using fetch
fetch('https://api.recursionsoft.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// Using axios
axios.get('https://api.recursionsoft.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

// Using curl
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.recursionsoft.com/v1/users`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-2xl p-6">
                        <h4 className="font-bold text-green-800 mb-3">
                          ✅ Best Practices
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Store API keys securely</li>
                          <li>• Use environment variables</li>
                          <li>• Rotate keys regularly</li>
                          <li>• Monitor API usage</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-2xl p-6">
                        <h4 className="font-bold text-red-800 mb-3">
                          ❌ Common Mistakes
                        </h4>
                        <ul className="space-y-2 text-red-700 text-sm">
                          <li>• Hardcoding keys in client-side code</li>
                          <li>• Sharing keys in public repositories</li>
                          <li>• Using the same key for all environments</li>
                          <li>• Not handling authentication errors</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Rate Limiting
                    </h3>
                    <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-yellow-800 mb-2">
                            Rate Limits
                          </h4>
                          <p className="text-yellow-700 text-sm mb-3">
                            API requests are limited to prevent abuse and ensure
                            fair usage:
                          </p>
                          <ul className="text-yellow-700 text-sm space-y-1">
                            <li>• Free tier: 1,000 requests per hour</li>
                            <li>• Pro tier: 10,000 requests per hour</li>
                            <li>• Enterprise: Custom limits available</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* REST Endpoints Section */}
              {activeSection === 'endpoints' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        REST Endpoints
                      </h2>
                      <p className="text-gray-600">
                        Complete list of available API endpoints
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Our REST API follows standard HTTP conventions and returns
                      JSON responses.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Base URL
                    </h3>
                    <div className="bg-gray-100 rounded-lg p-4 mb-8">
                      <code className="text-lg font-mono">
                        https://api.recursionsoft.com/v1
                      </code>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Users Endpoints
                    </h3>

                    <div className="space-y-6 mb-8">
                      {/* GET Users */}
                      <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="bg-green-50 px-6 py-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                GET
                              </span>
                              <code className="font-mono text-lg">/users</code>
                            </div>
                            <span className="text-green-700 text-sm">
                              Get all users
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold mb-3">
                            Query Parameters
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <ul className="space-y-2 text-sm">
                              <li>
                                <code>page</code> - Page number (default: 1)
                              </li>
                              <li>
                                <code>limit</code> - Items per page (default:
                                20, max: 100)
                              </li>
                              <li>
                                <code>search</code> - Search by name or email
                              </li>
                            </ul>
                          </div>

                          <h4 className="font-semibold mb-3">
                            Example Response
                          </h4>
                          <div className="bg-gray-900 rounded-lg p-4">
                            <pre className="text-green-400 text-sm">
                              <code>{`{
  "data": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z",
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}`}</code>
                            </pre>
                          </div>
                        </div>
                      </div>

                      {/* POST Users */}
                      <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                POST
                              </span>
                              <code className="font-mono text-lg">/users</code>
                            </div>
                            <span className="text-blue-700 text-sm">
                              Create a new user
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold mb-3">Request Body</h4>
                          <div className="bg-gray-900 rounded-lg p-4 mb-4">
                            <pre className="text-green-400 text-sm">
                              <code>{`{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "secure_password",
  "role": "user"
}`}</code>
                            </pre>
                          </div>

                          <h4 className="font-semibold mb-3">Response</h4>
                          <div className="bg-gray-900 rounded-lg p-4">
                            <pre className="text-green-400 text-sm">
                              <code>{`{
  "data": {
    "id": "user_124",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "user",
    "created_at": "2024-01-15T11:00:00Z",
    "status": "active"
  },
  "message": "User created successfully"
}`}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      HTTP Status Codes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                            200
                          </span>
                          <span className="text-green-800">
                            OK - Request successful
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
                            201
                          </span>
                          <span className="text-blue-800">
                            Created - Resource created
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                            400
                          </span>
                          <span className="text-yellow-800">
                            Bad Request - Invalid input
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                          <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
                            401
                          </span>
                          <span className="text-orange-800">
                            Unauthorized - Invalid API key
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                            404
                          </span>
                          <span className="text-red-800">
                            Not Found - Resource not found
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-bold">
                            500
                          </span>
                          <span className="text-purple-800">
                            Server Error - Internal error
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GraphQL Section */}
              {activeSection === 'graphql' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        GraphQL Schema
                      </h2>
                      <p className="text-gray-600">
                        Flexible queries with GraphQL
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Our GraphQL endpoint provides a flexible way to query
                      exactly the data you need.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      GraphQL Endpoint
                    </h3>
                    <div className="bg-gray-100 rounded-lg p-4 mb-8">
                      <code className="text-lg font-mono">
                        https://api.recursionsoft.com/graphql
                      </code>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Example Queries
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          GraphQL Query
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`query GetUsers($limit: Int, $search: String) {
  users(limit: $limit, search: $search) {
    id
    name
    email
    profile {
      avatar
      bio
    }
    posts {
      id
      title
      createdAt
    }
  }
}

# Variables
{
  "limit": 10,
  "search": "john"
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-pink-50 rounded-2xl p-6">
                        <h4 className="font-bold text-pink-800 mb-3">
                          🎯 GraphQL Benefits
                        </h4>
                        <ul className="space-y-2 text-pink-700 text-sm">
                          <li>• Request exactly the data you need</li>
                          <li>• Single endpoint for all operations</li>
                          <li>• Strong type system</li>
                          <li>• Real-time subscriptions</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          🔧 Tools & Resources
                        </h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• GraphQL Playground for testing</li>
                          <li>• Auto-generated documentation</li>
                          <li>• Schema introspection</li>
                          <li>• Client libraries available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Webhooks Section */}
              {activeSection === 'webhooks' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔔</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Webhooks & Events
                      </h2>
                      <p className="text-gray-600">
                        Real-time notifications for your applications
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Webhooks allow you to receive real-time notifications when
                      events occur in your RecursionSoft account.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Setting Up Webhooks
                    </h3>
                    <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                      <ol className="space-y-3 text-orange-800">
                        <li>1. Go to your dashboard → Webhooks</li>
                        <li>2. Click "Add Webhook Endpoint"</li>
                        <li>3. Enter your endpoint URL</li>
                        <li>4. Select the events you want to receive</li>
                        <li>5. Save and test your webhook</li>
                      </ol>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Webhook Payload Example
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          Webhook Payload
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`{
  "id": "evt_1234567890",
  "type": "user.created",
  "created": 1642678800,
  "data": {
    "object": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  },
  "request": {
    "id": "req_987654321",
    "idempotency_key": null
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Available Events
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="font-semibold text-blue-800">
                            user.created
                          </div>
                          <div className="text-blue-600 text-sm">
                            New user registered
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="font-semibold text-green-800">
                            user.updated
                          </div>
                          <div className="text-green-600 text-sm">
                            User profile updated
                          </div>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <div className="font-semibold text-purple-800">
                            payment.succeeded
                          </div>
                          <div className="text-purple-600 text-sm">
                            Payment completed
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <div className="font-semibold text-yellow-800">
                            subscription.created
                          </div>
                          <div className="text-yellow-600 text-sm">
                            New subscription started
                          </div>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="font-semibold text-red-800">
                            payment.failed
                          </div>
                          <div className="text-red-600 text-sm">
                            Payment failed
                          </div>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <div className="font-semibold text-indigo-800">
                            account.updated
                          </div>
                          <div className="text-indigo-600 text-sm">
                            Account settings changed
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-800 mb-2">
                            🔒 Security Best Practices
                          </h4>
                          <ul className="text-orange-700 text-sm space-y-1">
                            <li>• Verify webhook signatures</li>
                            <li>• Use HTTPS endpoints only</li>
                            <li>• Implement idempotency</li>
                            <li>• Handle retries gracefully</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default APIReferencePage;
