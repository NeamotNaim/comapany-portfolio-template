import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataInsightProduct: React.FC = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [analyticsData, setAnalyticsData] = useState({
    insights: 0,
    accuracy: 0,
    predictions: 0,
  });
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  // Animate analytics stats on mount
  useEffect(() => {
    const targets = { insights: 1000000, accuracy: 94, predictions: 500000 };
    const duration = 2500;
    const steps = 60;
    const increment = {
      insights: targets.insights / steps,
      accuracy: targets.accuracy / steps,
      predictions: targets.predictions / steps,
    };

    const current = { insights: 0, accuracy: 0, predictions: 0 };
    const timer = setInterval(() => {
      current.insights = Math.min(
        current.insights + increment.insights,
        targets.insights
      );
      current.accuracy = Math.min(
        current.accuracy + increment.accuracy,
        targets.accuracy
      );
      current.predictions = Math.min(
        current.predictions + increment.predictions,
        targets.predictions
      );

      setAnalyticsData({
        insights: Math.floor(current.insights),
        accuracy: Math.round(current.accuracy * 10) / 10,
        predictions: Math.floor(current.predictions),
      });

      if (current.insights >= targets.insights) {
        clearInterval(timer);
        setIsAnimating(false);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Generate dynamic data points for charts
  useEffect(() => {
    const generateDataPoints = () => {
      const points = Array.from(
        { length: 12 },
        () => Math.floor(Math.random() * 100) + 20
      );
      setDataPoints(points);
    };

    generateDataPoints();
    const interval = setInterval(generateDataPoints, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartTypes = [
    {
      name: 'Revenue Trends',
      icon: '📈',
      color: 'from-cyan-500 to-blue-600',
      active: true,
    },
    {
      name: 'Customer Analytics',
      icon: '👥',
      color: 'from-green-500 to-emerald-600',
      active: false,
    },
    {
      name: 'Predictive Models',
      icon: '🔮',
      color: 'from-purple-500 to-violet-600',
      active: false,
    },
    {
      name: 'Performance KPIs',
      icon: '🎯',
      color: 'from-orange-500 to-red-600',
      active: false,
    },
  ];

  const kpiMetrics = [
    {
      label: 'Revenue Growth',
      value: '+23.5%',
      trend: 'up',
      color: 'text-green-600',
    },
    {
      label: 'Customer Acquisition',
      value: '+18.2%',
      trend: 'up',
      color: 'text-blue-600',
    },
    {
      label: 'Churn Rate',
      value: '-12.8%',
      trend: 'down',
      color: 'text-green-600',
    },
    {
      label: 'Avg Order Value',
      value: '+8.7%',
      trend: 'up',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Creative Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Data Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Animated Chart Bars */}
          <div className="absolute top-20 left-20 text-white/10">
            <div className="flex items-end space-x-1 h-16">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-white/20 rounded-t animate-pulse"
                  style={{
                    height: `${30 + Math.random() * 70}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Analytics Icons */}
          <div className="absolute top-1/3 right-1/4 text-white/10 animate-bounce">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Pulsing Data Rings */}
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-4 border-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border-4 border-cyan-400/20 rounded-full animate-pulse"></div>

          {/* Animated Network Connections */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
              </linearGradient>
            </defs>
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 mr-2 text-cyan-200"
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
                <span className="text-sm font-medium text-white/90">
                  Business Intelligence Platform
                </span>
              </div>

              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">DataInsight</span>
                <span className="block text-cyan-300">Analytics Unleashed</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform raw data into actionable business intelligence with
                advanced analytics, real-time dashboards, and AI-powered
                predictive modeling. Make data-driven decisions with confidence.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {(analyticsData.insights / 1000000).toFixed(1)}M+
                  </div>
                  <div className="text-sm text-white/80">Data Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {analyticsData.accuracy}%
                  </div>
                  <div className="text-sm text-white/80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {(analyticsData.predictions / 1000).toFixed(0)}K+
                  </div>
                  <div className="text-sm text-white/80">Predictions</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-white text-cyan-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-2xl">
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
                    Unlock Your Data
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Live Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Analytics Dashboard */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>

                {/* Main Analytics Dashboard */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Analytics Dashboard
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Real-time</span>
                    </div>
                  </div>

                  {/* Chart Types */}
                  <div className="grid grid-cols-4 gap-2 mb-8">
                    {chartTypes.map((chart, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveChart(index)}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          activeChart === index
                            ? `bg-gradient-to-br ${chart.color} text-white shadow-lg scale-105`
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-lg mb-1">{chart.icon}</div>
                        <div className="text-xs font-medium">
                          {chart.name.split(' ')[0]}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Interactive Chart Area with Dynamic Data */}
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 mb-6 relative overflow-hidden">
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                        {Array.from({ length: 96 }).map((_, i) => (
                          <div key={i} className="border border-cyan-200"></div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="h-32 flex items-end justify-between space-x-2">
                        {(dataPoints.length > 0
                          ? dataPoints.slice(0, 7)
                          : [60, 85, 45, 95, 100, 75, 88]
                        ).map((height, index) => (
                          <div
                            key={index}
                            className={`w-8 rounded-t transition-all duration-1000 hover:scale-110 cursor-pointer ${
                              index % 2 === 0
                                ? 'bg-gradient-to-t from-cyan-400 to-cyan-500'
                                : 'bg-gradient-to-t from-blue-400 to-blue-500'
                            } ${isAnimating ? 'animate-pulse' : ''}`}
                            style={{
                              height: `${height}%`,
                              animationDelay: `${index * 0.1}s`,
                              boxShadow:
                                hoveredMetric === index
                                  ? '0 0 20px rgba(6, 182, 212, 0.5)'
                                  : 'none',
                            }}
                            onMouseEnter={() => setHoveredMetric(index)}
                            onMouseLeave={() => setHoveredMetric(null)}
                          >
                            {/* Floating Value on Hover */}
                            {hoveredMetric === index && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs animate-fadeIn">
                                ${(height * 10).toFixed(0)}K
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Animated Trend Line */}
                      <svg className="absolute top-6 left-6 right-6 h-24 pointer-events-none">
                        <polyline
                          points={`${(dataPoints.length > 0
                            ? dataPoints.slice(0, 7)
                            : [60, 85, 45, 95, 100, 75, 88]
                          )
                            .map(
                              (height, index) =>
                                `${index * 40 + 16},${96 - height * 0.8}`
                            )
                            .join(' ')}`}
                          fill="none"
                          stroke="rgba(6, 182, 212, 0.8)"
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                      </svg>

                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced KPI Metrics with Animations */}
                  <div className="grid grid-cols-2 gap-4">
                    {kpiMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="group relative p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
                      >
                        {/* Animated Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 transition-all duration-300"></div>

                        {/* Floating Particles on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${20 + i * 20}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                              {metric.label}
                            </span>
                            <div className="flex items-center">
                              <span
                                className={`text-lg font-bold ${metric.color} group-hover:scale-110 transition-transform duration-200`}
                              >
                                {metric.value}
                              </span>
                              <svg
                                className={`w-4 h-4 ml-2 ${metric.color} ${metric.trend === 'down' ? 'rotate-180' : ''} group-hover:scale-125 transition-transform duration-200`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Progress Bar Animation */}
                          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                            <div
                              className={`h-1 rounded-full transition-all duration-1000 ${
                                metric.color.includes('green')
                                  ? 'bg-gradient-to-r from-green-400 to-green-600'
                                  : metric.color.includes('blue')
                                    ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                                    : metric.color.includes('purple')
                                      ? 'bg-gradient-to-r from-purple-400 to-purple-600'
                                      : 'bg-gradient-to-r from-cyan-400 to-cyan-600'
                              }`}
                              style={{
                                width: `${Math.abs(parseFloat(metric.value))}%`,
                                animationDelay: `${index * 0.2}s`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating AI Insights Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">AI Insight!</div>
                      <div className="text-xs opacity-90">Revenue +23%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Dashboards Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Real-time Business Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create stunning, interactive dashboards that update in real-time
              and provide instant insights into your business performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Dashboard Builder */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  📊
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Interactive Dashboard Builder
                  </h3>
                  <p className="text-lg text-cyan-600 font-medium">
                    Drag & Drop Visualization
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Build professional dashboards in minutes with our intuitive
                drag-and-drop interface. Choose from 50+ chart types, customize
                colors and layouts, and connect to any data source.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  50+ chart types and visualization options
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time data updates every second
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mobile-responsive design for all devices
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom branding and white-label options
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Dashboard Performance:
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">10K+</div>
                    <div className="text-sm text-gray-600">Dashboards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">1sec</div>
                    <div className="text-sm text-gray-600">Refresh Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">50+</div>
                    <div className="text-sm text-gray-600">Chart Types</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    Sales Performance Dashboard
                  </h4>
                  <div className="text-sm text-gray-500">Live Data</div>
                </div>

                {/* Revenue Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">
                      Monthly Revenue
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      ↗ +23.5%
                    </span>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-end justify-between p-3">
                    <div
                      className="w-6 bg-cyan-400 rounded-t animate-pulse"
                      style={{ height: '70%' }}
                    ></div>
                    <div
                      className="w-6 bg-cyan-500 rounded-t animate-pulse"
                      style={{ height: '85%' }}
                    ></div>
                    <div
                      className="w-6 bg-blue-400 rounded-t animate-pulse"
                      style={{ height: '60%' }}
                    ></div>
                    <div
                      className="w-6 bg-blue-500 rounded-t animate-pulse"
                      style={{ height: '95%' }}
                    ></div>
                    <div
                      className="w-6 bg-cyan-600 rounded-t animate-pulse"
                      style={{ height: '100%' }}
                    ></div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">
                      $247K
                    </div>
                    <div className="text-xs text-gray-600">Total Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      1,847
                    </div>
                    <div className="text-xs text-gray-600">New Customers</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      94.2%
                    </div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      3.8%
                    </div>
                    <div className="text-xs text-gray-600">Churn Rate</div>
                  </div>
                </div>

                {/* Top Products */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900">
                    Top Performing Products
                  </h5>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                        📱
                      </div>
                      <span className="font-medium">Premium Analytics</span>
                    </div>
                    <span className="text-sm text-gray-600">$47K revenue</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        📊
                      </div>
                      <span className="font-medium">Business Intelligence</span>
                    </div>
                    <span className="text-sm text-gray-600">$32K revenue</span>
                  </div>
                </div>
              </div>

              {/* Floating Real-time Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-3 shadow-xl animate-pulse">
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <span className="text-sm font-bold">Live Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Data Visualization Showcase */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Data Streams */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-data-flow"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Data Visualization
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience data like never before with immersive 3D
              visualizations, interactive heatmaps, and real-time data
              storytelling.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 3D Chart Visualization */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-pulse-glow">
                    📊
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    3D Data Cubes
                  </h3>
                  <p className="text-white/70 text-sm">
                    Multi-dimensional data exploration
                  </p>
                </div>

                {/* 3D-like Chart Effect */}
                <div className="relative h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-xl transform rotate-3 scale-95"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-xl transform -rotate-1 scale-98"></div>
                  <div className="relative bg-gradient-to-br from-cyan-400/40 to-blue-600/40 rounded-xl h-full flex items-end justify-center space-x-2 p-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 bg-gradient-to-t from-cyan-400 to-cyan-200 rounded-t animate-chart-grow"
                        style={{
                          height: `${40 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 animate-number-count">
                    847K
                  </div>
                  <div className="text-xs text-white/60">
                    Data Points Analyzed
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Heatmap */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-pulse-glow">
                    🔥
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Heat Maps
                  </h3>
                  <p className="text-white/70 text-sm">
                    Interactive intensity visualization
                  </p>
                </div>

                {/* Heatmap Grid */}
                <div className="grid grid-cols-8 gap-1 mb-6">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-sm transition-all duration-300 hover:scale-125 cursor-pointer"
                      style={{
                        backgroundColor: `rgba(${Math.random() > 0.5 ? '168, 85, 247' : '236, 72, 153'}, ${0.2 + Math.random() * 0.8})`,
                        animationDelay: `${i * 0.01}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 animate-number-count">
                    92.4%
                  </div>
                  <div className="text-xs text-white/60">
                    Pattern Recognition
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Data Stream */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-pulse-glow">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Live Streams
                  </h3>
                  <p className="text-white/70 text-sm">
                    Real-time data processing
                  </p>
                </div>

                {/* Data Stream Visualization */}
                <div className="relative h-32 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 rounded-full animate-particle-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}

                  {/* Flowing Data Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M0,64 Q80,20 160,64 T320,64"
                      fill="none"
                      stroke="rgba(34, 197, 94, 0.6)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <path
                      d="M0,80 Q80,40 160,80 T320,80"
                      fill="none"
                      stroke="rgba(16, 185, 129, 0.4)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 animate-number-count">
                    1.2M/s
                  </div>
                  <div className="text-xs text-white/60">Events Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Analytics Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    AI Predictions
                  </h4>
                  <div className="text-sm text-gray-500">Next 30 Days</div>
                </div>

                {/* Prediction Chart */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      Revenue Forecast
                    </span>
                    <span className="text-sm text-purple-600 font-medium">
                      94% Confidence
                    </span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl relative overflow-hidden">
                    {/* Historical Data */}
                    <div className="absolute left-0 top-0 w-1/2 h-full flex items-end justify-between p-3">
                      <div
                        className="w-4 bg-gray-400 rounded-t"
                        style={{ height: '60%' }}
                      ></div>
                      <div
                        className="w-4 bg-gray-500 rounded-t"
                        style={{ height: '75%' }}
                      ></div>
                      <div
                        className="w-4 bg-gray-400 rounded-t"
                        style={{ height: '55%' }}
                      ></div>
                      <div
                        className="w-4 bg-gray-600 rounded-t"
                        style={{ height: '85%' }}
                      ></div>
                    </div>
                    {/* Predicted Data */}
                    <div className="absolute right-0 top-0 w-1/2 h-full flex items-end justify-between p-3">
                      <div
                        className="w-4 bg-purple-400 rounded-t opacity-80 animate-pulse"
                        style={{ height: '90%' }}
                      ></div>
                      <div
                        className="w-4 bg-purple-500 rounded-t opacity-80 animate-pulse"
                        style={{ height: '95%' }}
                      ></div>
                      <div
                        className="w-4 bg-indigo-400 rounded-t opacity-80 animate-pulse"
                        style={{ height: '88%' }}
                      ></div>
                      <div
                        className="w-4 bg-indigo-500 rounded-t opacity-80 animate-pulse"
                        style={{ height: '100%' }}
                      ></div>
                    </div>
                    {/* Divider Line */}
                    <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 transform -translate-x-px"></div>
                    <div className="absolute left-1/2 top-2 bg-white px-2 py-1 rounded text-xs text-gray-600 transform -translate-x-1/2">
                      Today
                    </div>
                  </div>
                </div>

                {/* Prediction Insights */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">
                      +28%
                    </div>
                    <div className="text-xs text-gray-600">
                      Predicted Growth
                    </div>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="text-lg font-bold text-indigo-600">
                      $315K
                    </div>
                    <div className="text-xs text-gray-600">
                      Forecasted Revenue
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900">
                    AI Recommendations
                  </h5>
                  <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Increase Marketing Spend
                      </div>
                      <div className="text-xs text-gray-600">
                        Optimal time for customer acquisition
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Monitor Churn Risk
                      </div>
                      <div className="text-xs text-gray-600">
                        3 customers showing early warning signs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  🔮
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Predictive Analytics
                  </h3>
                  <p className="text-lg text-purple-600 font-medium">
                    AI-Powered Forecasting
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Leverage advanced machine learning algorithms to predict future
                trends, identify opportunities, and make proactive business
                decisions with confidence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      📈
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Revenue Forecasting
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Predict future revenue with 94% accuracy using historical
                    data and market trends
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      👥
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Customer Behavior
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Identify churn risk and predict customer lifetime value with
                    behavioral analysis
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      📦
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Demand Planning
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Optimize inventory and resource allocation with demand
                    forecasting models
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      🎯
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Market Opportunities
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Discover new market opportunities and optimize pricing
                    strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-cyan-100 mb-12 leading-relaxed">
              Join 15,000+ businesses who have transformed their decision-making
              with DataInsight's powerful analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-cyan-900 px-12 py-5 text-lg font-bold hover:bg-cyan-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Start Analytics Journey
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

export default DataInsightProduct;
