import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TutorialsPage = () => {
  const [activeSection, setActiveSection] = useState('first-app');
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
    { id: 'first-app', title: 'Building Your First App', icon: '🏗️' },
    { id: 'integrations', title: 'Advanced Integrations', icon: '🔗' },
    { id: 'performance', title: 'Performance Optimization', icon: '⚡' },
    { id: 'security', title: 'Security Best Practices', icon: '🛡️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-400/10 to-emerald-400/10 animate-pulse"
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
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-green-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step-by-step tutorials to help you master RecursionSoft and build
              amazing applications.
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
                <h3 className="font-bold text-gray-900 mb-4">Tutorials</h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-green-50'
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
              {/* Building Your First App */}
              {activeSection === 'first-app' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🏗️</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Building Your First App
                      </h2>
                      <p className="text-gray-600">
                        Create a complete application from scratch
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      In this tutorial, we'll build a complete task management
                      application using RecursionSoft. You'll learn the
                      fundamentals while creating something useful.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      What We'll Build
                    </h3>
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-blue-800 mb-3">
                        📋 Task Manager Features
                      </h4>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Create, edit, and delete tasks</li>
                        <li>• Mark tasks as complete</li>
                        <li>• Filter tasks by status</li>
                        <li>• Real-time updates</li>
                        <li>• User authentication</li>
                        <li>• Responsive design</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Step 1: Project Setup
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
                          <code>{`# Create a new project
vamper create task-manager --template=react

# Navigate to the project
cd task-manager

# Install additional dependencies
npm install @recursionsoft/ui @recursionsoft/auth

# Start the development server
npm run dev`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Step 2: Create the Task Component
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/components/Task.tsx
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import React from 'react';
import { Button, Checkbox } from '@recursionsoft/ui';

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ 
  id, 
  title, 
  completed, 
  onToggle, 
  onDelete 
}) => {
  return (
    <div className="task-item">
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
        label={title}
        className={completed ? 'completed' : ''}
      />
      <Button
        variant="danger"
        size="small"
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Task;`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Step 3: Add State Management
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/hooks/useTasks.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import { useState, useEffect } from 'react';
import { api } from '@recursionsoft/api';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      const response = await api.post('/tasks', { title });
      setTasks(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      const response = await api.patch(\`/tasks/\${id}\`, {
        completed: !task.completed
      });

      setTasks(prev => 
        prev.map(t => t.id === id ? response.data : t)
      );
    } catch (error) {
      console.error('Failed to toggle task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(\`/tasks/\${id}\`);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return {
    tasks,
    loading,
    addTask,
    toggleTask,
    deleteTask
  };
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-2xl p-6">
                        <h4 className="font-bold text-green-800 mb-3">
                          ✅ What You've Learned
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Component creation and props</li>
                          <li>• Custom hooks for state management</li>
                          <li>• API integration with error handling</li>
                          <li>• TypeScript interfaces</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">
                          🚀 Next Steps
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm">
                          <li>• Add user authentication</li>
                          <li>• Implement real-time updates</li>
                          <li>• Add task categories</li>
                          <li>• Deploy to production</li>
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
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-800 mb-2">
                            💡 Pro Tip
                          </h4>
                          <p className="text-blue-700 text-sm">
                            Use the RecursionSoft CLI to generate components,
                            hooks, and API endpoints automatically. Run{' '}
                            <code className="bg-blue-200 px-2 py-1 rounded">
                              recursionsoft generate component Task
                            </code>{' '}
                            to scaffold new components quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced Integrations */}
              {activeSection === 'integrations' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔗</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Advanced Integrations
                      </h2>
                      <p className="text-gray-600">
                        Connect with third-party services and APIs
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Learn how to integrate your RecursionSoft applications
                      with popular third-party services like payment processors,
                      email services, and cloud storage.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Payment Integration with Stripe
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/services/payments.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import { loadStripe } from '@stripe/stripe-js';
import { api } from '@recursionsoft/api';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);

export class PaymentService {
  static async createPaymentIntent(amount: number, currency = 'usd') {
    try {
      const response = await api.post('/payments/create-intent', {
        amount,
        currency
      });
      
      return response.data;
    } catch (error) {
      throw new Error('Failed to create payment intent');
    }
  }

  static async processPayment(paymentIntentId: string, paymentMethod: any) {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    const result = await stripe.confirmCardPayment(paymentIntentId, {
      payment_method: paymentMethod
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return result.paymentIntent;
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Email Integration with SendGrid
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/services/email.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import { api } from '@recursionsoft/api';

interface EmailOptions {
  to: string;
  subject: string;
  template: string;
  data?: Record<string, any>;
}

export class EmailService {
  static async sendEmail(options: EmailOptions) {
    try {
      const response = await api.post('/emails/send', {
        to: options.to,
        subject: options.subject,
        template: options.template,
        templateData: options.data
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }

  static async sendWelcomeEmail(userEmail: string, userName: string) {
    return this.sendEmail({
      to: userEmail,
      subject: 'Welcome to RecursionSoft!',
      template: 'welcome',
      data: { name: userName }
    });
  }

  static async sendPasswordReset(userEmail: string, resetToken: string) {
    return this.sendEmail({
      to: userEmail,
      subject: 'Reset Your Password',
      template: 'password-reset',
      data: { resetToken }
    });
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-purple-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">💳</span>
                        </div>
                        <h4 className="font-bold text-purple-800 mb-2">
                          Payments
                        </h4>
                        <p className="text-purple-600 text-sm">
                          Stripe, PayPal, Square
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📧</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">Email</h4>
                        <p className="text-blue-600 text-sm">
                          SendGrid, Mailgun, SES
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">☁️</span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-2">
                          Storage
                        </h4>
                        <p className="text-green-600 text-sm">
                          AWS S3, Cloudinary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Optimization */}
              {activeSection === 'performance' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Performance Optimization
                      </h2>
                      <p className="text-gray-600">
                        Make your applications lightning fast
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Learn advanced techniques to optimize your RecursionSoft
                      applications for maximum performance and user experience.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Code Splitting and Lazy Loading
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/App.tsx
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@recursionsoft/ui';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Caching Strategies
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/utils/cache.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`class CacheManager {
  private cache = new Map<string, { data: any; expiry: number }>();

  set(key: string, data: any, ttl = 300000) { // 5 minutes default
    const expiry = Date.now() + ttl;
    this.cache.set(key, { data, expiry });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear() {
    this.cache.clear();
  }
}

export const cache = new CacheManager();

// Usage in API calls
export const fetchWithCache = async (url: string, ttl?: number) => {
  const cached = cache.get(url);
  if (cached) return cached;

  const response = await fetch(url);
  const data = await response.json();
  
  cache.set(url, data, ttl);
  return data;
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-yellow-50 rounded-2xl p-6">
                        <h4 className="font-bold text-yellow-800 mb-3">
                          ⚡ Performance Tips
                        </h4>
                        <ul className="space-y-2 text-yellow-700 text-sm">
                          <li>• Use React.memo for expensive components</li>
                          <li>• Implement virtual scrolling for large lists</li>
                          <li>• Optimize images with WebP format</li>
                          <li>• Use service workers for caching</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-6">
                        <h4 className="font-bold text-orange-800 mb-3">
                          📊 Monitoring
                        </h4>
                        <ul className="space-y-2 text-orange-700 text-sm">
                          <li>• Set up performance monitoring</li>
                          <li>• Track Core Web Vitals</li>
                          <li>• Monitor bundle size</li>
                          <li>• Use lighthouse for audits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Best Practices */}
              {activeSection === 'security' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Security Best Practices
                      </h2>
                      <p className="text-gray-600">
                        Protect your applications and users
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Security is paramount in modern web applications. Learn
                      how to implement robust security measures in your
                      RecursionSoft projects.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Authentication & Authorization
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/middleware/auth.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    
    req.user = user;
    next();
  });
};

export const requireRole = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Input Validation & Sanitization
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/utils/validation.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import { z } from 'zod';
import DOMPurify from 'dompurify';

// Schema validation
export const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
  age: z.number().min(13).max(120)
});

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

// Rate limiting
const attempts = new Map<string, { count: number; resetTime: number }>();

export const rateLimit = (ip: string, maxAttempts = 5, windowMs = 900000) => {
  const now = Date.now();
  const userAttempts = attempts.get(ip);

  if (!userAttempts || now > userAttempts.resetTime) {
    attempts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userAttempts.count >= maxAttempts) {
    return false;
  }

  userAttempts.count++;
  return true;
};`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 rounded-2xl p-6">
                        <h4 className="font-bold text-red-800 mb-3">
                          🔒 Security Checklist
                        </h4>
                        <ul className="space-y-2 text-red-700 text-sm">
                          <li>• Use HTTPS everywhere</li>
                          <li>• Implement proper authentication</li>
                          <li>• Validate all user inputs</li>
                          <li>• Use parameterized queries</li>
                          <li>• Set security headers</li>
                          <li>• Regular security audits</li>
                        </ul>
                      </div>
                      <div className="bg-pink-50 rounded-2xl p-6">
                        <h4 className="font-bold text-pink-800 mb-3">
                          ⚠️ Common Vulnerabilities
                        </h4>
                        <ul className="space-y-2 text-pink-700 text-sm">
                          <li>• SQL Injection</li>
                          <li>• Cross-Site Scripting (XSS)</li>
                          <li>• Cross-Site Request Forgery</li>
                          <li>• Insecure Direct Object References</li>
                          <li>• Security Misconfiguration</li>
                          <li>• Sensitive Data Exposure</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <h4 className="font-bold text-red-800 mb-2">
                            🚨 Security Alert
                          </h4>
                          <p className="text-red-700 text-sm">
                            Never store sensitive information like passwords,
                            API keys, or personal data in plain text. Always use
                            encryption and follow the principle of least
                            privilege when designing your security model.
                          </p>
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

export default TutorialsPage;
