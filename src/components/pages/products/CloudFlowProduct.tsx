import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CloudFlowProduct: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState(0);
  const [deploymentStats, setDeploymentStats] = useState({
    deployments: 0,
    success: 0,
    time: 0,
  });

  // Animate deployment stats on mount
  useEffect(() => {
    const targets = { deployments: 10000, success: 99.2, time: 87 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      deployments: targets.deployments / steps,
      success: targets.success / steps,
      time: targets.time / steps,
    };

    const current = { deployments: 0, success: 0, time: 0 };
    const timer = setInterval(() => {
      current.deployments = Math.min(
        current.deployments + increment.deployments,
        targets.deployments
      );
      current.success = Math.min(
        current.success + increment.success,
        targets.success
      );
      current.time = Math.min(current.time + increment.time, targets.time);

      setDeploymentStats({
        deployments: Math.floor(current.deployments),
        success: Math.round(current.success * 10) / 10,
        time: Math.floor(current.time),
      });

      if (current.deployments >= targets.deployments) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const pipelineStages = [
    { name: 'Source', status: 'completed', icon: '📝', time: '2s' },
    { name: 'Build', status: 'completed', icon: '🔨', time: '45s' },
    { name: 'Test', status: 'running', icon: '🧪', time: '12s' },
    { name: 'Deploy', status: 'pending', icon: '🚀', time: '-' },
    { name: 'Monitor', status: 'pending', icon: '📊', time: '-' },
  ];

  const infrastructureMetrics = [
    {
      label: 'CPU Usage',
      value: '67%',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      label: 'Memory',
      value: '45%',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      label: 'Storage',
      value: '23%',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      label: 'Network',
      value: '89%',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating DevOps icons */}
          <div className="absolute top-20 left-20 text-white/10 animate-bounce">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 text-white/10 animate-pulse">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Animated pipeline flow */}
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-4 border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border-4 border-indigo-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 mr-2 text-indigo-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-white/90">
                  DevOps Automation Suite
                </span>
              </div>

              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">CloudFlow</span>
                <span className="block text-indigo-300">DevOps Mastery</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Streamline your development lifecycle with intelligent CI/CD
                pipelines, infrastructure as code, and comprehensive monitoring.
                Deploy faster, monitor smarter, scale effortlessly.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {deploymentStats.deployments.toLocaleString()}+
                  </div>
                  <div className="text-sm text-white/80">Deployments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {deploymentStats.success}%
                  </div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {deploymentStats.time}%
                  </div>
                  <div className="text-sm text-white/80">Time Saved</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-white text-indigo-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Start DevOps Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <button className="group border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Try Beta Free
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - DevOps Pipeline */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-3xl blur-3xl"></div>

                {/* Main Pipeline Dashboard */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      CI/CD Pipeline
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Running</span>
                    </div>
                  </div>

                  {/* Pipeline Stages */}
                  <div className="space-y-4 mb-8">
                    {pipelineStages.map((stage, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 rounded-xl bg-gray-50 border-l-4 border-indigo-500"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                            stage.status === 'completed'
                              ? 'bg-green-100 text-green-600'
                              : stage.status === 'running'
                                ? 'bg-blue-100 text-blue-600 animate-pulse'
                                : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {stage.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              {stage.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {stage.time}
                            </span>
                          </div>
                          <div
                            className={`text-xs capitalize ${
                              stage.status === 'completed'
                                ? 'text-green-600'
                                : stage.status === 'running'
                                  ? 'text-blue-600'
                                  : 'text-gray-400'
                            }`}
                          >
                            {stage.status}
                          </div>
                        </div>
                        {stage.status === 'completed' && (
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Infrastructure Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {infrastructureMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${metric.bg}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            {metric.label}
                          </span>
                          <span className={`text-sm font-bold ${metric.color}`}>
                            {metric.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Success Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">Deploy Success!</div>
                      <div className="text-xs opacity-90">Build #247</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Automation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Intelligent CI/CD Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Streamline your development workflow with advanced automation that
              learns from your patterns and optimizes deployment strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Pipeline Builder */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  🚀
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Visual Pipeline Builder
                  </h3>
                  <p className="text-lg text-indigo-600 font-medium">
                    Drag & Drop Simplicity
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Create complex CI/CD pipelines with our intuitive visual
                builder. No YAML configuration needed - just drag, drop, and
                deploy with intelligent automation and parallel processing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Parallel processing for faster builds
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Automated rollback on failure detection
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Multi-environment deployment strategies
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Integration with 50+ tools and services
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Pipeline Performance:
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      99.2%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      75%
                    </div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      5K+
                    </div>
                    <div className="text-sm text-gray-600">Teams</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    Pipeline Configuration
                  </h4>
                  <div className="text-sm text-gray-500">Build #247</div>
                </div>

                <div className="space-y-4">
                  {/* Pipeline Flow */}
                  <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        Source Control
                      </div>
                      <div className="text-sm text-gray-600">
                        GitHub • main branch
                      </div>
                    </div>
                    <div className="text-green-500">✓</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        Build & Test
                      </div>
                      <div className="text-sm text-gray-600">
                        Docker • Jest • ESLint
                      </div>
                    </div>
                    <div className="text-green-500">✓</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        Security Scan
                      </div>
                      <div className="text-sm text-gray-600">
                        SAST • Dependency Check
                      </div>
                    </div>
                    <div className="text-blue-500 animate-spin">⟳</div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl opacity-60">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        Deploy to Staging
                      </div>
                      <div className="text-sm text-gray-600">
                        Kubernetes • AWS EKS
                      </div>
                    </div>
                    <div className="text-gray-400">⏳</div>
                  </div>
                </div>

                {/* Build Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">
                      2m 34s
                    </div>
                    <div className="text-xs text-gray-600">Build Time</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">847</div>
                    <div className="text-xs text-gray-600">Tests Passed</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">0</div>
                    <div className="text-xs text-gray-600">Vulnerabilities</div>
                  </div>
                </div>
              </div>

              {/* Floating Build Status */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-3 shadow-xl animate-pulse">
                <div className="flex items-center space-x-2 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-bold">Building...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure as Code Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    Infrastructure Dashboard
                  </h4>
                  <div className="text-sm text-gray-500">Live</div>
                </div>

                {/* Resource Overview */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      Resource Utilization
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Healthy
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Compute Instances
                      </span>
                      <span className="text-sm font-medium">12/15 active</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Environment Status */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Production
                      </span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-600">
                      3 instances • 99.9% uptime
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Staging
                      </span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-600">
                      2 instances • Active
                    </div>
                  </div>
                </div>

                {/* Recent Deployments */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900">
                    Recent Deployments
                  </h5>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        🚀
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          API Service v2.1.4
                        </div>
                        <div className="text-xs text-gray-500">
                          2 minutes ago
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 font-medium">
                      Success
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        🔄
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          Frontend v1.8.2
                        </div>
                        <div className="text-xs text-gray-500">
                          15 minutes ago
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">
                      Deployed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  ☁️
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Infrastructure as Code
                  </h3>
                  <p className="text-lg text-purple-600 font-medium">
                    Version-Controlled Infrastructure
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Manage your entire infrastructure through code with Terraform
                integration, automated provisioning, and state management across
                multiple cloud providers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      📝
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Declarative Config
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Define infrastructure using simple, version-controlled
                    configuration files
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      🔄
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Auto Provisioning
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Automated resource creation and management across cloud
                    providers
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      🌐
                    </div>
                    <h4 className="font-semibold text-gray-900">Multi-Cloud</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Support for AWS, Azure, GCP, and hybrid cloud environments
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      🔒
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      State Management
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Secure state storage with locking and team collaboration
                    features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Accelerate Your DevOps?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
              Join 5,000+ development teams who have transformed their
              deployment process with CloudFlow's intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-indigo-900 px-12 py-5 text-lg font-bold hover:bg-indigo-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
                Start DevOps Transformation
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-12 py-5 text-lg font-bold text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudFlowProduct;
