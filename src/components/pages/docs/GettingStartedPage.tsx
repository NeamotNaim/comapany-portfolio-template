import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GettingStartedPage = () => {
  const [activeSection, setActiveSection] = useState('installation');
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
    { id: 'installation', title: 'Installation & Setup', icon: '⚙️' },
    { id: 'first-project', title: 'Your First Project', icon: '🚀' },
    { id: 'configuration', title: 'Configuration', icon: '🔧' },
    { id: 'environment', title: 'Environment Setup', icon: '🌍' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse"
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
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Getting Started
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know to get up and running with
              RecursionSoft in minutes.
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
                <h3 className="font-bold text-gray-900 mb-4">On This Page</h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-blue-50'
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
              {/* Installation Section */}
              {activeSection === 'installation' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">⚙️</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Installation & Setup
                      </h2>
                      <p className="text-gray-600">
                        Get RecursionSoft installed and configured
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Prerequisites
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Before installing RecursionSoft, make sure you have the
                      following requirements:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">
                          System Requirements
                        </h4>
                        <ul className="space-y-2 text-blue-700">
                          <li>• Node.js 16.0 or higher</li>
                          <li>• npm 7.0 or yarn 1.22+</li>
                          <li>• Git for version control</li>
                          <li>• Modern web browser</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          Optional Tools
                        </h4>
                        <ul className="space-y-2 text-purple-700">
                          <li>• VS Code with extensions</li>
                          <li>• Docker for containerization</li>
                          <li>• Postman for API testing</li>
                          <li>• Database client (optional)</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Installation Steps
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          Terminal
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Install Vamper Soft CLI globally
npm install -g @recursionsoft/cli

# Verify installation
recursionsoft --version

# Create a new project
recursionsoft create my-awesome-project

# Navigate to project directory
cd my-awesome-project

# Install dependencies
npm install

# Start development server
npm run dev`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-800 mb-2">
                            ✅ Success!
                          </h4>
                          <p className="text-green-700">
                            If everything went well, you should see your
                            development server running at
                            <code className="bg-green-200 px-2 py-1 rounded ml-1">
                              http://localhost:3000
                            </code>
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Troubleshooting
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-yellow-800">
                          Permission Issues
                        </h4>
                        <p className="text-yellow-700 text-sm mt-1">
                          If you encounter permission errors, try using{' '}
                          <code>sudo</code> or configure npm to use a different
                          directory.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-red-800">
                          Port Already in Use
                        </h4>
                        <p className="text-red-700 text-sm mt-1">
                          If port 3000 is busy, the CLI will automatically find
                          an available port or you can specify one with{' '}
                          <code>--port 3001</code>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* First Project Section */}
              {activeSection === 'first-project' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Your First Project
                      </h2>
                      <p className="text-gray-600">
                        Build your first application step by step
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Now that you have RecursionSoft installed, let's create
                      your first project and explore the key features.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Project Structure
                    </h3>
                    <p className="text-gray-700 mb-6">
                      When you create a new project, you'll get a well-organized
                      structure:
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                      <pre className="text-sm text-gray-800">
                        {`my-awesome-project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── services/      # API and business logic
│   ├── utils/         # Helper functions
│   └── styles/        # CSS and styling
├── public/            # Static assets
├── tests/             # Test files
├── docs/              # Documentation
└── package.json       # Project configuration`}
                      </pre>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Creating Your First Component
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/components/Welcome.tsx
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import React from 'react';

interface WelcomeProps {
  name: string;
  message?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ 
  name, 
  message = "Welcome to RecursionSoft!" 
}) => {
  return (
    <div className="welcome-container">
      <h1>{message}</h1>
      <p>Hello, {name}! Ready to build something amazing?</p>
      <button 
        onClick={() => alert('Let\\'s get started!')}
        className="btn-primary"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">
                          🎯 Best Practices
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm">
                          <li>• Use TypeScript for better type safety</li>
                          <li>• Follow consistent naming conventions</li>
                          <li>• Keep components small and focused</li>
                          <li>• Write tests for your components</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          ⚡ Pro Tips
                        </h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Use the built-in component generator</li>
                          <li>
                            • Leverage hot reloading for faster development
                          </li>
                          <li>• Organize components by feature</li>
                          <li>• Document your component props</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Next Steps
                    </h3>
                    <div className="space-y-4">
                      <Link
                        to="/docs/api-reference"
                        className="block p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-blue-800 group-hover:text-purple-800">
                              Explore the API
                            </h4>
                            <p className="text-blue-600 text-sm">
                              Learn about authentication and endpoints
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
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
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Configuration Section */}
              {activeSection === 'configuration' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔧</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Configuration Guide
                      </h2>
                      <p className="text-gray-600">
                        Customize RecursionSoft to fit your needs
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      RecursionSoft is highly configurable. Here's how to
                      customize it for your specific requirements.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Configuration File
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          recursionsoft.config.js
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`module.exports = {
  // Development server configuration
  server: {
    port: 3000,
    host: 'localhost',
    https: false
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true
  },
  
  // API configuration
  api: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost:8000',
    timeout: 10000,
    retries: 3
  },
  
  // Feature flags
  features: {
    analytics: true,
    darkMode: true,
    i18n: false
  }
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-orange-50 rounded-2xl p-6">
                        <h4 className="font-bold text-orange-800 mb-3">
                          🔧 Common Settings
                        </h4>
                        <ul className="space-y-2 text-orange-700 text-sm">
                          <li>• Server port and host configuration</li>
                          <li>• Build output directory</li>
                          <li>• API endpoint URLs</li>
                          <li>• Feature toggles</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 rounded-2xl p-6">
                        <h4 className="font-bold text-red-800 mb-3">
                          ⚠️ Important Notes
                        </h4>
                        <ul className="space-y-2 text-red-700 text-sm">
                          <li>• Restart server after config changes</li>
                          <li>• Use environment variables for secrets</li>
                          <li>• Validate configuration on startup</li>
                          <li>• Keep sensitive data secure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Environment Section */}
              {activeSection === 'environment' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Environment Setup
                      </h2>
                      <p className="text-gray-600">
                        Configure different environments for your project
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Set up different environments (development, staging,
                      production) for your RecursionSoft applications.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Environment Variables
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          .env.example
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Application Configuration
NODE_ENV=development
PORT=3000
HOST=localhost

# API Configuration
API_BASE_URL=http://localhost:8000
API_KEY=your-api-key-here
API_TIMEOUT=10000

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
REDIS_URL=redis://localhost:6379

# Third-party Services
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
SENDGRID_API_KEY=SG...

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_DEBUG_MODE=false`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <h4 className="font-bold text-teal-800 mb-2">
                            🔒 Security Best Practices
                          </h4>
                          <ul className="text-teal-700 text-sm space-y-1">
                            <li>
                              • Never commit .env files to version control
                            </li>
                            <li>
                              • Use different keys for different environments
                            </li>
                            <li>• Rotate API keys regularly</li>
                            <li>
                              • Use a secrets management service in production
                            </li>
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

export default GettingStartedPage;
