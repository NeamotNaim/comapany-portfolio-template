import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TroubleshootingPage = () => {
  const [activeSection, setActiveSection] = useState('common-errors');
  const [isScrolling, setIsScrolling] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    { id: 'common-errors', title: 'Common Error Messages', icon: '❌' },
    { id: 'performance', title: 'Performance Issues', icon: '🐌' },
    { id: 'debug', title: 'Debug Mode Guide', icon: '🔍' },
    { id: 'support', title: 'Support Resources', icon: '🆘' },
  ];

  const commonIssues = [
    {
      category: 'Installation',
      title: 'npm install fails with permission errors',
      solution:
        'Use npm config set prefix ~/.npm-global or run with sudo (not recommended)',
      code: 'npm config set prefix ~/.npm-global\nexport PATH=~/.npm-global/bin:$PATH',
    },
    {
      category: 'Build',
      title: 'Build fails with "out of memory" error',
      solution: 'Increase Node.js memory limit or optimize build process',
      code: 'NODE_OPTIONS="--max-old-space-size=4096" npm run build',
    },
    {
      category: 'Runtime',
      title: 'API requests failing with CORS errors',
      solution: 'Configure CORS properly on your backend or use a proxy',
      code: 'app.use(cors({\n  origin: ["http://localhost:3000"],\n  credentials: true\n}));',
    },
    {
      category: 'Deployment',
      title: 'Environment variables not loading',
      solution:
        'Ensure .env files are properly configured and not in .gitignore',
      code: 'VITE_API_URL=https://api.example.com\nVITE_APP_NAME=MyApp',
    },
  ];

  const filteredIssues = commonIssues.filter(
    issue =>
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-400/10 animate-pulse"
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
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🔧</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Troubleshooting
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find solutions to common issues and learn how to debug your
              RecursionSoft applications effectively.
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
                <h3 className="font-bold text-gray-900 mb-4">
                  Troubleshooting
                </h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-indigo-50'
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
              {/* Common Errors Section */}
              {activeSection === 'common-errors' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">❌</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Common Error Messages
                      </h2>
                      <p className="text-gray-600">
                        Solutions to frequently encountered errors
                      </p>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                      </div>
                      <input
                        type="text"
                        placeholder="Search for errors or issues..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6">
                      {filteredIssues.map((issue, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                          <div className="bg-red-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                  {issue.category}
                                </span>
                                <h3 className="font-semibold text-red-800">
                                  {issue.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Solution:
                              </h4>
                              <p className="text-gray-700">{issue.solution}</p>
                            </div>

                            {issue.code && (
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                  Code Example:
                                </h4>
                                <div className="bg-gray-900 rounded-lg p-4">
                                  <pre className="text-green-400 text-sm">
                                    <code>{issue.code}</code>
                                  </pre>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {filteredIssues.length === 0 && (
                      <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          No results found
                        </h3>
                        <p className="text-gray-600">
                          Try adjusting your search terms or browse all
                          categories.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Performance Issues Section */}
              {activeSection === 'performance' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🐌</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Performance Issues
                      </h2>
                      <p className="text-gray-600">
                        Diagnose and fix performance bottlenecks
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Performance issues can significantly impact user
                      experience. Here's how to identify and resolve common
                      performance problems.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Performance Diagnostic Tools
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          Performance Profiler
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Performance monitoring utility
class PerformanceProfiler {
  static measureRenderTime(componentName: string) {
    const startTime = performance.now();
    
    return {
      end: () => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(\`\${componentName} render time: \${duration.toFixed(2)}ms\`);
        
        // Send to monitoring service
        if (duration > 100) {
          console.warn(\`Slow render detected: \${componentName}\`);
        }
        
        return duration;
      }
    };
  }

  static measureAPICall(endpoint: string) {
    const startTime = performance.now();
    
    return {
      end: (success: boolean) => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(\`API \${endpoint}: \${duration.toFixed(2)}ms (\${success ? 'success' : 'failed'})\`);
        
        return duration;
      }
    };
  }

  static checkMemoryUsage() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: \`\${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB\`,
        total: \`\${(memory.totalJSHeapSize / 1048576).toFixed(2)}MB\`,
        limit: \`\${(memory.jsHeapSizeLimit / 1048576).toFixed(2)}MB\`
      });
    }
  }
}

// Usage example
const ProfiledComponent = () => {
  useEffect(() => {
    const profiler = PerformanceProfiler.measureRenderTime('ProfiledComponent');
    
    return () => {
      profiler.end();
    };
  }, []);

  return <div>Component content</div>;
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Common Performance Issues
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-yellow-50 rounded-2xl p-6">
                        <h4 className="font-bold text-yellow-800 mb-3">
                          🐌 Slow Initial Load
                        </h4>
                        <ul className="space-y-2 text-yellow-700 text-sm">
                          <li>• Large bundle size</li>
                          <li>• Unoptimized images</li>
                          <li>• Blocking JavaScript</li>
                          <li>• Too many HTTP requests</li>
                        </ul>
                        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                          <strong className="text-yellow-800">Solution:</strong>
                          <p className="text-yellow-700 text-sm mt-1">
                            Implement code splitting, optimize images, and use
                            lazy loading.
                          </p>
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-2xl p-6">
                        <h4 className="font-bold text-orange-800 mb-3">
                          🔄 Slow Re-renders
                        </h4>
                        <ul className="space-y-2 text-orange-700 text-sm">
                          <li>• Unnecessary re-renders</li>
                          <li>• Heavy computations in render</li>
                          <li>• Large component trees</li>
                          <li>• Missing memoization</li>
                        </ul>
                        <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                          <strong className="text-orange-800">Solution:</strong>
                          <p className="text-orange-700 text-sm mt-1">
                            Use React.memo, useMemo, and useCallback
                            appropriately.
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 rounded-2xl p-6">
                        <h4 className="font-bold text-red-800 mb-3">
                          💾 Memory Leaks
                        </h4>
                        <ul className="space-y-2 text-red-700 text-sm">
                          <li>• Event listeners not cleaned up</li>
                          <li>• Timers not cleared</li>
                          <li>• Circular references</li>
                          <li>• Large objects in closures</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-100 rounded-lg">
                          <strong className="text-red-800">Solution:</strong>
                          <p className="text-red-700 text-sm mt-1">
                            Proper cleanup in useEffect and component
                            unmounting.
                          </p>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          🌐 Network Issues
                        </h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Slow API responses</li>
                          <li>• Too many API calls</li>
                          <li>• Large payloads</li>
                          <li>• No request caching</li>
                        </ul>
                        <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                          <strong className="text-purple-800">Solution:</strong>
                          <p className="text-purple-700 text-sm mt-1">
                            Implement caching, request batching, and pagination.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-yellow-800 mb-2">
                            ⚡ Performance Tips
                          </h4>
                          <ul className="text-yellow-700 text-sm space-y-1">
                            <li>
                              • Use Chrome DevTools Performance tab for
                              profiling
                            </li>
                            <li>• Monitor Core Web Vitals (LCP, FID, CLS)</li>
                            <li>• Implement performance budgets in CI/CD</li>
                            <li>
                              • Use React DevTools Profiler for component
                              analysis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Debug Mode Section */}
              {activeSection === 'debug' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔍</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Debug Mode Guide
                      </h2>
                      <p className="text-gray-600">
                        Advanced debugging techniques and tools
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Effective debugging is crucial for maintaining and
                      improving your applications. Learn how to use debugging
                      tools and techniques effectively.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Debug Configuration
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/utils/debug.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Debug utility class
class Debug {
  private static isEnabled = process.env.NODE_ENV === 'development';
  
  static log(message: string, data?: any) {
    if (this.isEnabled) {
      console.log(\`[DEBUG] \${message}\`, data || '');
    }
  }

  static error(message: string, error?: Error) {
    if (this.isEnabled) {
      console.error(\`[ERROR] \${message}\`, error || '');
    }
  }

  static warn(message: string, data?: any) {
    if (this.isEnabled) {
      console.warn(\`[WARN] \${message}\`, data || '');
    }
  }

  static table(data: any[]) {
    if (this.isEnabled) {
      console.table(data);
    }
  }

  static group(label: string, callback: () => void) {
    if (this.isEnabled) {
      console.group(label);
      callback();
      console.groupEnd();
    }
  }

  static time(label: string) {
    if (this.isEnabled) {
      console.time(label);
    }
  }

  static timeEnd(label: string) {
    if (this.isEnabled) {
      console.timeEnd(label);
    }
  }

  static trace(message: string) {
    if (this.isEnabled) {
      console.trace(message);
    }
  }
}

// React debugging hooks
export const useDebugValue = (value: any, formatter?: (value: any) => any) => {
  React.useDebugValue(value, formatter);
};

export const useWhyDidYouUpdate = (name: string, props: Record<string, any>) => {
  const previous = useRef<Record<string, any>>();
  
  useEffect(() => {
    if (previous.current) {
      const allKeys = Object.keys({ ...previous.current, ...props });
      const changedProps: Record<string, any> = {};
      
      allKeys.forEach(key => {
        if (previous.current![key] !== props[key]) {
          changedProps[key] = {
            from: previous.current![key],
            to: props[key]
          };
        }
      });
      
      if (Object.keys(changedProps).length) {
        Debug.log(\`[WHY-DID-YOU-UPDATE] \${name}\`, changedProps);
      }
    }
    
    previous.current = props;
  });
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Browser DevTools Tips
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">
                          🔍 Console Debugging
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm">
                          <li>
                            • Use <code>console.table()</code> for
                            arrays/objects
                          </li>
                          <li>
                            • Group related logs with{' '}
                            <code>console.group()</code>
                          </li>
                          <li>
                            • Time operations with <code>console.time()</code>
                          </li>
                          <li>
                            • Use <code>console.trace()</code> for stack traces
                          </li>
                        </ul>
                      </div>

                      <div className="bg-cyan-50 rounded-2xl p-6">
                        <h4 className="font-bold text-cyan-800 mb-3">
                          🎯 Breakpoint Strategies
                        </h4>
                        <ul className="space-y-2 text-cyan-700 text-sm">
                          <li>• Conditional breakpoints for specific cases</li>
                          <li>• Logpoints for non-intrusive debugging</li>
                          <li>• DOM breakpoints for element changes</li>
                          <li>• Network breakpoints for API issues</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-2xl p-6">
                        <h4 className="font-bold text-green-800 mb-3">
                          ⚛️ React DevTools
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Component tree inspection</li>
                          <li>• Props and state debugging</li>
                          <li>• Performance profiling</li>
                          <li>• Hook debugging and inspection</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          🌐 Network Debugging
                        </h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Request/response inspection</li>
                          <li>• Network throttling simulation</li>
                          <li>• CORS and security issue diagnosis</li>
                          <li>• WebSocket connection monitoring</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">
                            💡 Pro Debugging Tips
                          </h4>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>
                              • Use debugger; statement for programmatic
                              breakpoints
                            </li>
                            <li>
                              • Enable "Pause on exceptions" for error debugging
                            </li>
                            <li>• Use Source Maps for production debugging</li>
                            <li>
                              • Leverage browser extensions for
                              framework-specific debugging
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Support Resources Section */}
              {activeSection === 'support' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🆘</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Support Resources
                      </h2>
                      <p className="text-gray-600">
                        Get help when you need it most
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      When you can't find the solution in our documentation,
                      here are the best places to get help from our community
                      and support team.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-blue-800 mb-2">
                          Live Chat
                        </h4>
                        <p className="text-blue-600 text-sm mb-4">
                          Get instant help from our support team
                        </p>
                        <div className="text-xs text-blue-500">
                          Available 24/7
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-purple-800 mb-2">
                          Community Forum
                        </h4>
                        <p className="text-purple-600 text-sm mb-4">
                          Connect with other developers
                        </p>
                        <div className="text-xs text-purple-500">
                          10k+ active members
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-green-800 mb-2">
                          Email Support
                        </h4>
                        <p className="text-green-600 text-sm mb-4">
                          Detailed technical assistance
                        </p>
                        <div className="text-xs text-green-500">
                          Response within 24h
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-orange-800 mb-2">
                          Documentation
                        </h4>
                        <p className="text-orange-600 text-sm mb-4">
                          Comprehensive guides and tutorials
                        </p>
                        <div className="text-xs text-orange-500">
                          Always up-to-date
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          GitHub Issues
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Report bugs and request features
                        </p>
                        <div className="text-xs text-gray-500">
                          Open source collaboration
                        </div>
                      </div>

                      <div className="bg-yellow-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-bold text-yellow-800 mb-2">
                          Video Tutorials
                        </h4>
                        <p className="text-yellow-600 text-sm mb-4">
                          Step-by-step video guides
                        </p>
                        <div className="text-xs text-yellow-500">
                          100+ tutorials
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Before Contacting Support
                    </h3>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-green-800 mb-4">
                        📋 Support Checklist
                      </h4>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600"
                          />
                          <span className="text-green-700">
                            Searched the documentation and FAQ
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600"
                          />
                          <span className="text-green-700">
                            Checked for similar issues in the community forum
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600"
                          />
                          <span className="text-green-700">
                            Tried the suggested troubleshooting steps
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600"
                          />
                          <span className="text-green-700">
                            Prepared error messages and reproduction steps
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-600"
                          />
                          <span className="text-green-700">
                            Gathered system information and versions
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">
                            💡 Getting Better Support
                          </h4>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>
                              • Provide clear, detailed descriptions of the
                              issue
                            </li>
                            <li>
                              • Include error messages, stack traces, and logs
                            </li>
                            <li>
                              • Share minimal reproduction examples when
                              possible
                            </li>
                            <li>
                              • Mention your environment (OS, browser, versions)
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

export default TroubleshootingPage;
