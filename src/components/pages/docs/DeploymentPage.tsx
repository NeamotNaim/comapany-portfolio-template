import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeploymentPage = () => {
  const [activeSection, setActiveSection] = useState('cloud-deployment');
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
    { id: 'cloud-deployment', title: 'Cloud Deployment', icon: '☁️' },
    { id: 'docker', title: 'Docker Configuration', icon: '🐳' },
    { id: 'cicd', title: 'CI/CD Pipeline', icon: '🔄' },
    { id: 'monitoring', title: 'Monitoring & Logging', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Animated Background */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 animate-pulse"
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
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🌐</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Deployment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deploy your RecursionSoft applications to production with
              confidence using modern deployment strategies.
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
                  Deployment Guide
                </h3>
                <nav className="space-y-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-orange-50'
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
              {/* Cloud Deployment Section */}
              {activeSection === 'cloud-deployment' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">☁️</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Cloud Deployment
                      </h2>
                      <p className="text-gray-600">
                        Deploy to major cloud providers with ease
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      RecursionSoft applications can be deployed to any major
                      cloud provider. Here's how to deploy to the most popular
                      platforms.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Deploy to Vercel
                    </h3>
                    <div className="bg-black rounded-2xl p-6 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-black font-bold text-sm">
                            ▲
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          Vercel Deployment
                        </span>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy your application
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_API_URL
vercel env add DATABASE_URL

# Deploy to production
vercel --prod`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Deploy to Netlify
                    </h3>
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-6 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-teal-600 font-bold text-sm">
                            N
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          Netlify Deployment
                        </span>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Build and deploy
netlify deploy --prod

# Or use drag & drop
npm run build
# Upload dist/ folder to netlify.com`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Deploy to AWS
                    </h3>
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-xs">
                            AWS
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          AWS S3 + CloudFront
                        </span>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Build your application
npm run build

# Sync to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \\
  --distribution-id YOUR_DISTRIBUTION_ID \\
  --paths "/*"`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">⚡</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">Vercel</h4>
                        <p className="text-blue-600 text-sm">
                          Zero-config deployments with automatic HTTPS
                        </p>
                      </div>
                      <div className="bg-teal-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🌐</span>
                        </div>
                        <h4 className="font-bold text-teal-800 mb-2">
                          Netlify
                        </h4>
                        <p className="text-teal-600 text-sm">
                          Git-based deployments with form handling
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">☁️</span>
                        </div>
                        <h4 className="font-bold text-orange-800 mb-2">AWS</h4>
                        <p className="text-orange-600 text-sm">
                          Scalable infrastructure with global CDN
                        </p>
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
                            💡 Deployment Tips
                          </h4>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>• Always test in staging before production</li>
                            <li>
                              • Use environment variables for configuration
                            </li>
                            <li>• Enable HTTPS and security headers</li>
                            <li>• Set up monitoring and error tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Docker Configuration Section */}
              {activeSection === 'docker' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🐳</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Docker Configuration
                      </h2>
                      <p className="text-gray-600">
                        Containerize your applications for consistent
                        deployments
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Docker containers ensure your application runs
                      consistently across different environments. Here's how to
                      containerize your RecursionSoft application.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Dockerfile Configuration
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          Dockerfile
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`# Multi-stage build for production
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Docker Compose Setup
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          docker-compose.yml
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`version: '3.8'

services:
  app:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
      - API_URL=http://api:3000
    depends_on:
      - api
      - database
    restart: unless-stopped

  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@database:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - database
      - redis
    restart: unless-stopped

  database:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Docker Commands
                    </h3>

                    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-blue-800 mb-4">
                        🐳 Essential Docker Commands
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white rounded-lg p-3">
                          <code className="text-blue-800">
                            docker build -t myapp .
                          </code>
                          <span className="text-gray-600 ml-4">
                            Build the Docker image
                          </span>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <code className="text-blue-800">
                            docker run -p 80:80 myapp
                          </code>
                          <span className="text-gray-600 ml-4">
                            Run the container
                          </span>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <code className="text-blue-800">
                            docker-compose up -d
                          </code>
                          <span className="text-gray-600 ml-4">
                            Start all services
                          </span>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <code className="text-blue-800">
                            docker-compose logs -f
                          </code>
                          <span className="text-gray-600 ml-4">View logs</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">
                          ✅ Docker Benefits
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm">
                          <li>• Consistent environments</li>
                          <li>• Easy scaling and orchestration</li>
                          <li>• Simplified dependency management</li>
                          <li>• Portable across platforms</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gray-800 mb-3">
                          🔧 Best Practices
                        </h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Use multi-stage builds</li>
                          <li>• Minimize image size</li>
                          <li>• Don't run as root user</li>
                          <li>• Use .dockerignore file</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CI/CD Pipeline Section */}
              {activeSection === 'cicd' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🔄</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        CI/CD Pipeline Setup
                      </h2>
                      <p className="text-gray-600">
                        Automate your deployment process with continuous
                        integration
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Set up automated testing, building, and deployment
                      pipelines to ensure code quality and streamline releases.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      GitHub Actions Workflow
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          .github/workflows/deploy.yml
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linting
        run: npm run lint
      
      - name: Type checking
        run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
        env:
          VITE_API_URL: \${{ secrets.API_URL }}
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files
          path: dist/
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Pipeline Stages
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🧪</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">Test</h4>
                        <p className="text-blue-600 text-sm">
                          Unit tests, integration tests, linting
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🔨</span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-2">Build</h4>
                        <p className="text-green-600 text-sm">
                          Compile, bundle, optimize assets
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🚀</span>
                        </div>
                        <h4 className="font-bold text-purple-800 mb-2">
                          Deploy
                        </h4>
                        <p className="text-purple-600 text-sm">
                          Deploy to staging and production
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📊</span>
                        </div>
                        <h4 className="font-bold text-orange-800 mb-2">
                          Monitor
                        </h4>
                        <p className="text-orange-600 text-sm">
                          Track performance and errors
                        </p>
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-800 mb-2">
                            🔄 CI/CD Best Practices
                          </h4>
                          <ul className="text-purple-700 text-sm space-y-1">
                            <li>• Keep pipelines fast and reliable</li>
                            <li>• Use environment-specific configurations</li>
                            <li>• Implement proper rollback strategies</li>
                            <li>• Monitor deployment success rates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Monitoring & Logging Section */}
              {activeSection === 'monitoring' && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Monitoring & Logging
                      </h2>
                      <p className="text-gray-600">
                        Keep track of your application's health and performance
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-8">
                      Implement comprehensive monitoring and logging to ensure
                      your application runs smoothly and issues are detected
                      early.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Application Monitoring
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          src/utils/monitoring.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`import * as Sentry from '@sentry/react';

// Initialize Sentry for error tracking
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Custom monitoring class
class ApplicationMonitor {
  static trackPageView(page: string) {
    // Google Analytics
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: page,
      page_location: window.location.href
    });
    
    // Custom analytics
    this.sendEvent('page_view', { page });
  }

  static trackUserAction(action: string, data?: any) {
    this.sendEvent('user_action', { action, ...data });
  }

  static trackPerformance(metric: string, value: number) {
    // Send to monitoring service
    this.sendMetric(metric, value);
    
    // Log locally in development
    if (process.env.NODE_ENV === 'development') {
      console.log(\`Performance: \${metric} = \${value}ms\`);
    }
  }

  static trackError(error: Error, context?: any) {
    Sentry.captureException(error, { extra: context });
    this.sendEvent('error', { 
      message: error.message, 
      stack: error.stack,
      ...context 
    });
  }

  private static sendEvent(event: string, data: any) {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, data, timestamp: Date.now() })
    }).catch(console.error);
  }

  private static sendMetric(metric: string, value: number) {
    fetch('/api/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metric, value, timestamp: Date.now() })
    }).catch(console.error);
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Health Check Endpoint
                    </h3>

                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
                      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          api/health.ts
                        </span>
                      </div>
                      <div className="p-6">
                        <pre className="text-green-400 text-sm">
                          <code>{`export async function healthCheck() {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    externalAPIs: await checkExternalAPIs(),
    diskSpace: await checkDiskSpace(),
    memory: checkMemoryUsage()
  };

  const isHealthy = Object.values(checks).every(check => check.status === 'ok');

  return {
    status: isHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION,
    checks
  };
}

async function checkDatabase() {
  try {
    await db.raw('SELECT 1');
    return { status: 'ok', responseTime: Date.now() };
  } catch (error) {
    return { status: 'error', error: error.message };
  }
}

function checkMemoryUsage() {
  const usage = process.memoryUsage();
  const threshold = 500 * 1024 * 1024; // 500MB
  
  return {
    status: usage.heapUsed < threshold ? 'ok' : 'warning',
    heapUsed: usage.heapUsed,
    heapTotal: usage.heapTotal,
    external: usage.external
  };
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-green-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📈</span>
                        </div>
                        <h4 className="font-bold text-green-800 mb-2">
                          Metrics
                        </h4>
                        <p className="text-green-600 text-sm">
                          Performance, usage, and business metrics
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🚨</span>
                        </div>
                        <h4 className="font-bold text-red-800 mb-2">Alerts</h4>
                        <p className="text-red-600 text-sm">
                          Real-time notifications for critical issues
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">📋</span>
                        </div>
                        <h4 className="font-bold text-blue-800 mb-2">Logs</h4>
                        <p className="text-blue-600 text-sm">
                          Structured logging for debugging
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-800 mb-2">
                            📊 Monitoring Tools
                          </h4>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>
                              • <strong>Sentry:</strong> Error tracking and
                              performance monitoring
                            </li>
                            <li>
                              • <strong>DataDog:</strong> Infrastructure and
                              application monitoring
                            </li>
                            <li>
                              • <strong>New Relic:</strong> Full-stack
                              observability platform
                            </li>
                            <li>
                              • <strong>Grafana:</strong> Metrics visualization
                              and dashboards
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

export default DeploymentPage;
