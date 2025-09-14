import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdvancedTopicsPage = () => {
  const [activeSection, setActiveSection] = useState('custom-plugins');
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
    { id: 'custom-plugins', title: 'Custom Plugins', icon: '🔌' },
    { id: 'architecture', title: 'Architecture Patterns', icon: '🏗️' },
    { id: 'scaling', title: 'Scaling Strategies', icon: '📈' },
    { id: 'enterprise', title: 'Enterprise Features', icon: '🏢' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400/10 to-cyan-400/10 animate-pulse"
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
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🎯</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Advanced Topics
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master advanced concepts and enterprise-level features to build
              scalable, production-ready applications.
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
                  Advanced Topics
                </h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-teal-50'
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
              {/* Custom Plugins Section */}
              {activeSection === 'custom-plugins' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔌</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Custom Plugins
                      </h2>
                      <p className="text-gray-600">
                        Extend RecursionSoft with custom functionality
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Create powerful custom plugins to extend RecursionSoft's
                      functionality and integrate with your specific business
                      requirements.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Plugin Architecture
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/plugins/BasePlugin.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Base plugin interface
export interface IPlugin {
  name: string;
  version: string;
  description: string;
  dependencies?: string[];
  
  // Lifecycle hooks
  onInstall?(): Promise<void>;
  onUninstall?(): Promise<void>;
  onActivate?(): Promise<void>;
  onDeactivate?(): Promise<void>;
  
  // Core methods
  initialize(context: PluginContext): Promise<void>;
  execute(action: string, params?: any): Promise<any>;
}

// Plugin context interface
export interface PluginContext {
  app: Application;
  config: PluginConfig;
  logger: Logger;
  storage: Storage;
  events: EventEmitter;
}

// Base plugin class
export abstract class BasePlugin implements IPlugin {
  abstract name: string;
  abstract version: string;
  abstract description: string;
  
  protected context: PluginContext;
  protected isActive = false;

  async initialize(context: PluginContext): Promise<void> {
    this.context = context;
    this.context.logger.info(\`Initializing plugin: \${this.name}\`);
    
    // Register event listeners
    this.registerEventListeners();
    
    // Setup plugin-specific initialization
    await this.setup();
  }

  protected abstract setup(): Promise<void>;
  
  protected registerEventListeners(): void {
    // Override in subclasses to register specific events
  }

  async activate(): Promise<void> {
    if (this.isActive) return;
    
    await this.onActivate?.();
    this.isActive = true;
    
    this.context.events.emit('plugin:activated', {
      name: this.name,
      version: this.version
    });
  }

  async deactivate(): Promise<void> {
    if (!this.isActive) return;
    
    await this.onDeactivate?.();
    this.isActive = false;
    
    this.context.events.emit('plugin:deactivated', {
      name: this.name
    });
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Example Custom Plugin
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/plugins/AnalyticsPlugin.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import { BasePlugin, PluginContext } from './BasePlugin';

export class AnalyticsPlugin extends BasePlugin {
  name = 'analytics-plugin';
  version = '1.0.0';
  description = 'Advanced analytics and tracking plugin';
  
  private analytics: AnalyticsService;
  private trackingQueue: TrackingEvent[] = [];

  protected async setup(): Promise<void> {
    // Initialize analytics service
    this.analytics = new AnalyticsService({
      apiKey: this.context.config.get('analytics.apiKey'),
      endpoint: this.context.config.get('analytics.endpoint'),
      batchSize: 50,
      flushInterval: 30000
    });

    // Start background processing
    this.startBackgroundProcessing();
  }

  protected registerEventListeners(): void {
    // Track user actions
    this.context.events.on('user:action', (event) => {
      this.trackEvent('user_action', event);
    });

    // Track page views
    this.context.events.on('page:view', (event) => {
      this.trackEvent('page_view', event);
    });

    // Track errors
    this.context.events.on('error', (event) => {
      this.trackEvent('error', event);
    });
  }

  async execute(action: string, params?: any): Promise<any> {
    switch (action) {
      case 'track':
        return this.trackEvent(params.event, params.data);
      
      case 'identify':
        return this.identifyUser(params.userId, params.traits);
      
      case 'getMetrics':
        return this.getMetrics(params.timeRange);
      
      default:
        throw new Error(\`Unknown action: \${action}\`);
    }
  }

  private trackEvent(event: string, data: any): void {
    const trackingEvent: TrackingEvent = {
      event,
      data,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getCurrentUserId()
    };

    this.trackingQueue.push(trackingEvent);
    
    // Flush if queue is full
    if (this.trackingQueue.length >= 50) {
      this.flushEvents();
    }
  }

  private async flushEvents(): Promise<void> {
    if (this.trackingQueue.length === 0) return;

    const events = [...this.trackingQueue];
    this.trackingQueue = [];

    try {
      await this.analytics.sendBatch(events);
      this.context.logger.debug(\`Flushed \${events.length} analytics events\`);
    } catch (error) {
      this.context.logger.error('Failed to flush analytics events:', error);
      // Re-queue events for retry
      this.trackingQueue.unshift(...events);
    }
  }

  private startBackgroundProcessing(): void {
    setInterval(() => {
      this.flushEvents();
    }, 30000); // Flush every 30 seconds
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          🔌 Plugin Benefits
                        </h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Modular architecture</li>
                          <li>• Hot-swappable functionality</li>
                          <li>• Isolated dependencies</li>
                          <li>• Easy testing and debugging</li>
                        </ul>
                      </div>
                      <div className="bg-pink-50 rounded-2xl p-6">
                        <h4 className="font-bold text-pink-800 mb-3">
                          🎯 Use Cases
                        </h4>
                        <ul className="space-y-2 text-pink-700 text-sm">
                          <li>• Custom authentication providers</li>
                          <li>• Third-party integrations</li>
                          <li>• Business-specific workflows</li>
                          <li>• Advanced analytics and reporting</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                          <h4 className="font-bold text-purple-800 mb-2">
                            💡 Plugin Development Tips
                          </h4>
                          <ul className="text-purple-700 text-sm space-y-1">
                            <li>
                              • Follow the single responsibility principle
                            </li>
                            <li>
                              • Implement proper error handling and logging
                            </li>
                            <li>
                              • Use dependency injection for better testability
                            </li>
                            <li>
                              • Document your plugin's API and configuration
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture Patterns Section */}
              {activeSection === 'architecture' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🏗️</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Architecture Patterns
                      </h2>
                      <p className="text-gray-600">
                        Design scalable and maintainable applications
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Learn advanced architectural patterns that help you build
                      robust, scalable, and maintainable applications with
                      RecursionSoft.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Microservices Architecture
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/architecture/ServiceMesh.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Service mesh implementation
export class ServiceMesh {
  private services = new Map<string, ServiceInstance>();
  private loadBalancer: LoadBalancer;
  private circuitBreaker: CircuitBreaker;
  private serviceDiscovery: ServiceDiscovery;

  constructor(config: ServiceMeshConfig) {
    this.loadBalancer = new LoadBalancer(config.loadBalancing);
    this.circuitBreaker = new CircuitBreaker(config.circuitBreaker);
    this.serviceDiscovery = new ServiceDiscovery(config.discovery);
  }

  async registerService(service: ServiceDefinition): Promise<void> {
    const instance = new ServiceInstance(service);
    
    // Register with service discovery
    await this.serviceDiscovery.register(service.name, {
      id: service.id,
      address: service.address,
      port: service.port,
      health: service.healthCheck,
      metadata: service.metadata
    });

    this.services.set(service.name, instance);
    
    // Start health monitoring
    this.startHealthMonitoring(service.name);
  }

  async callService<T>(
    serviceName: string, 
    method: string, 
    params: any
  ): Promise<T> {
    // Get available instances
    const instances = await this.serviceDiscovery.getInstances(serviceName);
    
    if (instances.length === 0) {
      throw new Error(\`No healthy instances found for service: \${serviceName}\`);
    }

    // Load balancing
    const instance = this.loadBalancer.selectInstance(instances);
    
    // Circuit breaker pattern
    return this.circuitBreaker.execute(
      \`\${serviceName}:\${method}\`,
      async () => {
        const client = this.createServiceClient(instance);
        return await client.call(method, params);
      }
    );
  }

  private async startHealthMonitoring(serviceName: string): Promise<void> {
    const service = this.services.get(serviceName);
    if (!service) return;

    setInterval(async () => {
      try {
        const isHealthy = await service.healthCheck();
        
        if (!isHealthy) {
          await this.serviceDiscovery.deregister(serviceName);
          this.services.delete(serviceName);
        }
      } catch (error) {
        console.error(\`Health check failed for \${serviceName}:\`, error);
      }
    }, 30000); // Check every 30 seconds
  }
}

// Event-driven architecture
export class EventBus {
  private handlers = new Map<string, EventHandler[]>();
  private middleware: EventMiddleware[] = [];

  use(middleware: EventMiddleware): void {
    this.middleware.push(middleware);
  }

  on<T>(event: string, handler: EventHandler<T>): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }
    this.handlers.get(event)!.push(handler);
  }

  async emit<T>(event: string, data: T): Promise<void> {
    const handlers = this.handlers.get(event) || [];
    
    // Apply middleware
    let processedData = data;
    for (const middleware of this.middleware) {
      processedData = await middleware(event, processedData);
    }

    // Execute handlers
    await Promise.all(
      handlers.map(handler => handler(processedData))
    );
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      CQRS and Event Sourcing
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/architecture/CQRS.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// CQRS implementation
export abstract class Command {
  abstract readonly type: string;
  readonly timestamp = Date.now();
  readonly id = generateId();
}

export abstract class Query {
  abstract readonly type: string;
}

export class CommandBus {
  private handlers = new Map<string, CommandHandler>();

  register<T extends Command>(
    commandType: string, 
    handler: CommandHandler<T>
  ): void {
    this.handlers.set(commandType, handler);
  }

  async execute<T extends Command>(command: T): Promise<void> {
    const handler = this.handlers.get(command.type);
    
    if (!handler) {
      throw new Error(\`No handler registered for command: \${command.type}\`);
    }

    // Validate command
    await this.validateCommand(command);
    
    // Execute command
    await handler.handle(command);
    
    // Publish events
    const events = handler.getEvents();
    await this.publishEvents(events);
  }
}

export class QueryBus {
  private handlers = new Map<string, QueryHandler>();

  register<T extends Query, R>(
    queryType: string, 
    handler: QueryHandler<T, R>
  ): void {
    this.handlers.set(queryType, handler);
  }

  async execute<T extends Query, R>(query: T): Promise<R> {
    const handler = this.handlers.get(query.type);
    
    if (!handler) {
      throw new Error(\`No handler registered for query: \${query.type}\`);
    }

    return await handler.handle(query);
  }
}

// Event sourcing
export class EventStore {
  private events: DomainEvent[] = [];
  private snapshots = new Map<string, Snapshot>();

  async appendEvents(
    aggregateId: string, 
    events: DomainEvent[], 
    expectedVersion: number
  ): Promise<void> {
    // Optimistic concurrency control
    const currentVersion = await this.getVersion(aggregateId);
    
    if (currentVersion !== expectedVersion) {
      throw new ConcurrencyError('Aggregate version mismatch');
    }

    // Append events
    for (const event of events) {
      event.aggregateId = aggregateId;
      event.version = currentVersion + 1;
      this.events.push(event);
    }
  }

  async getEvents(
    aggregateId: string, 
    fromVersion = 0
  ): Promise<DomainEvent[]> {
    return this.events.filter(
      event => event.aggregateId === aggregateId && 
               event.version > fromVersion
    );
  }

  async createSnapshot(
    aggregateId: string, 
    aggregate: any, 
    version: number
  ): Promise<void> {
    this.snapshots.set(aggregateId, {
      aggregateId,
      data: aggregate,
      version,
      timestamp: Date.now()
    });
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🏗️</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">
                          Microservices
                        </h4>
                        <p className="text-blue-600 text-sm">
                          Distributed, scalable service architecture
                        </p>
                      </div>
                      <div className="bg-indigo-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🔄</span>
                        </div>
                        <h4 className="font-bold text-indigo-800 mb-2">CQRS</h4>
                        <p className="text-indigo-600 text-sm">
                          Separate read and write operations
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📚</span>
                        </div>
                        <h4 className="font-bold text-purple-800 mb-2">
                          Event Sourcing
                        </h4>
                        <p className="text-purple-600 text-sm">
                          Store events as the source of truth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Scaling Strategies Section */}
              {activeSection === 'scaling' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Scaling Strategies
                      </h2>
                      <p className="text-gray-600">
                        Handle growth and high traffic efficiently
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Learn how to scale your RecursionSoft applications to
                      handle millions of users and massive amounts of data.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Horizontal vs Vertical Scaling
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-2xl p-6">
                        <h4 className="font-bold text-green-800 mb-4">
                          📈 Horizontal Scaling (Scale Out)
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm mb-4">
                          <li>• Add more servers/instances</li>
                          <li>• Distribute load across multiple nodes</li>
                          <li>• Better fault tolerance</li>
                          <li>• Linear cost scaling</li>
                        </ul>
                        <div className="bg-green-100 rounded-lg p-3">
                          <strong className="text-green-800">Best for:</strong>
                          <p className="text-green-700 text-sm mt-1">
                            Web applications, microservices, stateless workloads
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-4">
                          📊 Vertical Scaling (Scale Up)
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm mb-4">
                          <li>• Increase server resources (CPU, RAM)</li>
                          <li>• Simpler architecture</li>
                          <li>• No distributed system complexity</li>
                          <li>• Hardware limitations</li>
                        </ul>
                        <div className="bg-blue-100 rounded-lg p-3">
                          <strong className="text-blue-800">Best for:</strong>
                          <p className="text-blue-700 text-sm mt-1">
                            Databases, legacy applications, single-threaded
                            workloads
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Auto-Scaling Implementation
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/scaling/AutoScaler.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Auto-scaling implementation
export class AutoScaler {
  private metrics: MetricsCollector;
  private orchestrator: ContainerOrchestrator;
  private config: AutoScalingConfig;

  constructor(config: AutoScalingConfig) {
    this.config = config;
    this.metrics = new MetricsCollector();
    this.orchestrator = new ContainerOrchestrator();
  }

  async start(): Promise<void> {
    // Monitor metrics every 30 seconds
    setInterval(async () => {
      await this.evaluateScaling();
    }, 30000);
  }

  private async evaluateScaling(): Promise<void> {
    const currentMetrics = await this.metrics.collect();
    const currentInstances = await this.orchestrator.getInstanceCount();

    // Calculate scaling decision
    const decision = this.calculateScalingDecision(
      currentMetrics, 
      currentInstances
    );

    if (decision.action === 'scale-out') {
      await this.scaleOut(decision.targetInstances);
    } else if (decision.action === 'scale-in') {
      await this.scaleIn(decision.targetInstances);
    }
  }

  private calculateScalingDecision(
    metrics: SystemMetrics, 
    currentInstances: number
  ): ScalingDecision {
    const { cpu, memory, requestRate, responseTime } = metrics;

    // Scale out conditions
    if (
      cpu > this.config.scaleOutThresholds.cpu ||
      memory > this.config.scaleOutThresholds.memory ||
      responseTime > this.config.scaleOutThresholds.responseTime
    ) {
      const targetInstances = Math.min(
        currentInstances * 2,
        this.config.maxInstances
      );
      
      return {
        action: 'scale-out',
        targetInstances,
        reason: 'High resource utilization'
      };
    }

    // Scale in conditions
    if (
      cpu < this.config.scaleInThresholds.cpu &&
      memory < this.config.scaleInThresholds.memory &&
      responseTime < this.config.scaleInThresholds.responseTime &&
      currentInstances > this.config.minInstances
    ) {
      const targetInstances = Math.max(
        Math.ceil(currentInstances / 2),
        this.config.minInstances
      );
      
      return {
        action: 'scale-in',
        targetInstances,
        reason: 'Low resource utilization'
      };
    }

    return { action: 'no-change', targetInstances: currentInstances };
  }

  private async scaleOut(targetInstances: number): Promise<void> {
    console.log(\`Scaling out to \${targetInstances} instances\`);
    
    await this.orchestrator.scaleToInstances(targetInstances);
    
    // Wait for instances to be ready
    await this.waitForHealthyInstances(targetInstances);
    
    // Update load balancer
    await this.updateLoadBalancer();
  }

  private async scaleIn(targetInstances: number): Promise<void> {
    console.log(\`Scaling in to \${targetInstances} instances\`);
    
    // Graceful shutdown of excess instances
    await this.orchestrator.gracefulScaleDown(targetInstances);
    
    // Update load balancer
    await this.updateLoadBalancer();
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Database Scaling Strategies
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-purple-50 rounded-2xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">
                          🔄 Read Replicas
                        </h4>
                        <p className="text-purple-700 text-sm mb-3">
                          Distribute read operations across multiple database
                          replicas to reduce load on the primary database.
                        </p>
                        <div className="bg-purple-100 rounded-lg p-3">
                          <strong className="text-purple-800">Benefits:</strong>
                          <ul className="text-purple-700 text-xs mt-1 space-y-1">
                            <li>• Improved read performance</li>
                            <li>• Geographic distribution</li>
                            <li>• High availability</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-2xl p-6">
                        <h4 className="font-bold text-orange-800 mb-3">
                          🗂️ Database Sharding
                        </h4>
                        <p className="text-orange-700 text-sm mb-3">
                          Partition data across multiple databases to distribute
                          both read and write operations.
                        </p>
                        <div className="bg-orange-100 rounded-lg p-3">
                          <strong className="text-orange-800">Benefits:</strong>
                          <ul className="text-orange-700 text-xs mt-1 space-y-1">
                            <li>• Horizontal write scaling</li>
                            <li>• Reduced query complexity</li>
                            <li>• Fault isolation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6">
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
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-800 mb-2">
                            📈 Scaling Best Practices
                          </h4>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>• Monitor key metrics continuously</li>
                            <li>
                              • Implement gradual scaling to avoid thundering
                              herd
                            </li>
                            <li>
                              • Use circuit breakers to prevent cascade failures
                            </li>
                            <li>
                              • Plan for both scale-up and scale-down scenarios
                            </li>
                            <li>
                              • Test scaling scenarios in staging environments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enterprise Features Section */}
              {activeSection === 'enterprise' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🏢</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Enterprise Features
                      </h2>
                      <p className="text-gray-600">
                        Advanced features for large-scale deployments
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Explore enterprise-grade features designed for large
                      organizations with complex requirements and compliance
                      needs.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Multi-Tenancy Architecture
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/enterprise/MultiTenancy.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`// Multi-tenant architecture implementation
export class TenantManager {
  private tenants = new Map<string, TenantConfig>();
  private isolationStrategy: IsolationStrategy;

  constructor(strategy: IsolationStrategy) {
    this.isolationStrategy = strategy;
  }

  async createTenant(config: TenantConfig): Promise<Tenant> {
    // Validate tenant configuration
    await this.validateTenantConfig(config);

    // Create tenant-specific resources
    const tenant = await this.isolationStrategy.createTenant(config);

    // Setup tenant database
    await this.setupTenantDatabase(tenant);

    // Configure tenant-specific settings
    await this.configureTenantSettings(tenant);

    this.tenants.set(tenant.id, config);
    
    return tenant;
  }

  async getTenantContext(request: Request): Promise<TenantContext> {
    // Extract tenant identifier from request
    const tenantId = this.extractTenantId(request);
    
    if (!tenantId) {
      throw new Error('Tenant identifier not found');
    }

    const config = this.tenants.get(tenantId);
    if (!config) {
      throw new Error(\`Tenant not found: \${tenantId}\`);
    }

    return {
      tenantId,
      config,
      database: this.getTenantDatabase(tenantId),
      storage: this.getTenantStorage(tenantId),
      cache: this.getTenantCache(tenantId)
    };
  }

  private extractTenantId(request: Request): string | null {
    // Strategy 1: Subdomain-based
    const subdomain = this.extractSubdomain(request.hostname);
    if (subdomain && this.tenants.has(subdomain)) {
      return subdomain;
    }

    // Strategy 2: Header-based
    const headerTenant = request.headers['x-tenant-id'];
    if (headerTenant && this.tenants.has(headerTenant)) {
      return headerTenant;
    }

    // Strategy 3: Path-based
    const pathTenant = this.extractFromPath(request.path);
    if (pathTenant && this.tenants.has(pathTenant)) {
      return pathTenant;
    }

    return null;
  }
}

// Role-based access control
export class RBACManager {
  private roles = new Map<string, Role>();
  private permissions = new Map<string, Permission>();

  async createRole(roleDefinition: RoleDefinition): Promise<Role> {
    const role = new Role(roleDefinition);
    
    // Validate permissions
    for (const permissionId of roleDefinition.permissions) {
      if (!this.permissions.has(permissionId)) {
        throw new Error(\`Permission not found: \${permissionId}\`);
      }
    }

    this.roles.set(role.id, role);
    return role;
  }

  async checkPermission(
    userId: string, 
    resource: string, 
    action: string,
    context?: any
  ): Promise<boolean> {
    const userRoles = await this.getUserRoles(userId);
    
    for (const role of userRoles) {
      const hasPermission = await this.roleHasPermission(
        role, 
        resource, 
        action, 
        context
      );
      
      if (hasPermission) {
        return true;
      }
    }

    return false;
  }

  private async roleHasPermission(
    role: Role, 
    resource: string, 
    action: string,
    context?: any
  ): Promise<boolean> {
    for (const permissionId of role.permissions) {
      const permission = this.permissions.get(permissionId);
      
      if (permission && permission.matches(resource, action)) {
        // Check conditions if any
        if (permission.conditions) {
          return await this.evaluateConditions(
            permission.conditions, 
            context
          );
        }
        return true;
      }
    }

    return false;
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Enterprise Security Features
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-red-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🔐</span>
                        </div>
                        <h4 className="font-bold text-red-800 mb-2">
                          SSO Integration
                        </h4>
                        <p className="text-red-600 text-sm">
                          SAML, OAuth, LDAP integration
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🛡️</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">
                          Data Encryption
                        </h4>
                        <p className="text-blue-600 text-sm">
                          End-to-end encryption at rest and in transit
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📋</span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-2">
                          Audit Logging
                        </h4>
                        <p className="text-green-600 text-sm">
                          Comprehensive activity tracking
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🏢</span>
                        </div>
                        <h4 className="font-bold text-purple-800 mb-2">
                          Multi-Tenancy
                        </h4>
                        <p className="text-purple-600 text-sm">
                          Isolated tenant environments
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">⚖️</span>
                        </div>
                        <h4 className="font-bold text-orange-800 mb-2">
                          Compliance
                        </h4>
                        <p className="text-orange-600 text-sm">
                          GDPR, HIPAA, SOC2 compliance
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📊</span>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          Analytics
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Advanced reporting and insights
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Compliance & Governance
                    </h3>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-blue-800 mb-4">
                        📋 Compliance Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2">
                            Data Protection
                          </h5>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Data anonymization and pseudonymization</li>
                            <li>• Right to be forgotten implementation</li>
                            <li>• Data portability features</li>
                            <li>• Consent management system</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2">
                            Audit & Reporting
                          </h5>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Comprehensive audit trails</li>
                            <li>• Automated compliance reporting</li>
                            <li>• Data lineage tracking</li>
                            <li>• Risk assessment tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">
                            🏢 Enterprise Support
                          </h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>
                              • Dedicated support team with SLA guarantees
                            </li>
                            <li>• Priority bug fixes and feature requests</li>
                            <li>• Custom training and onboarding programs</li>
                            <li>
                              • Architecture review and consulting services
                            </li>
                            <li>• 24/7 monitoring and incident response</li>
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

export default AdvancedTopicsPage;
