import React, { useState, useEffect } from 'react';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('overview');
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, revenue-details, user-details, performance-details, geographic-details, activity-details
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for demonstration
  const metricsData = {
    totalRevenue: { value: 2847392, change: 12.5, trend: 'up' },
    activeUsers: { value: 45678, change: -2.3, trend: 'down' },
    conversionRate: { value: 3.24, change: 8.7, trend: 'up' },
    avgSessionTime: { value: 342, change: 15.2, trend: 'up' }
  };

  const timeRanges = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  // Navigation functions
  const handleViewDetails = (section) => {
    setCurrentView(section);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedCountry(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCurrentView('geographic-details');
  };

  const handleExportData = (dataType) => {
    // Simulate data export
    const data = {
      revenue: 'Revenue data exported successfully',
      users: 'User data exported successfully',
      performance: 'Performance data exported successfully'
    };
    alert(data[dataType] || 'Data exported successfully');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Analytics Icons */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="text-3xl">
              {['📊', '📈', '📉', '💹', '🎯', '⚡', '🔥', '💎', '🚀', '⭐', '💰', '📱'][i]}
            </div>
          </div>
        ))}
        
        {/* Geometric Data Visualization Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${
              ['from-blue-400/5 to-purple-400/5', 'from-green-400/5 to-teal-400/5', 
               'from-orange-400/5 to-red-400/5', 'from-purple-400/5 to-pink-400/5'][i % 4]
            }`}></div>
          </div>
        ))}
      </div>

      {/* Header Section */}
      <header className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-blue-700 border border-white/20 shadow-xl">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Analytics Dashboard
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">Data-Driven</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our comprehensive analytics platform.
            </p>

            {/* Time Range Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    timeRange === range.value
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-white/20'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Key Metrics Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Revenue Card */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metricsData.totalRevenue.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <svg className={`w-4 h-4 mr-1 ${metricsData.totalRevenue.trend === 'up' ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      {metricsData.totalRevenue.change}%
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${metricsData.totalRevenue.value.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm">Total Revenue</div>
                </div>
              </div>
            </div>

            {/* Active Users Card */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metricsData.activeUsers.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <svg className={`w-4 h-4 mr-1 ${metricsData.activeUsers.trend === 'up' ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      {Math.abs(metricsData.activeUsers.change)}%
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metricsData.activeUsers.value.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm">Active Users</div>
                </div>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metricsData.conversionRate.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <svg className={`w-4 h-4 mr-1 ${metricsData.conversionRate.trend === 'up' ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      {metricsData.conversionRate.change}%
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metricsData.conversionRate.value}%
                  </div>
                  <div className="text-gray-600 text-sm">Conversion Rate</div>
                </div>
              </div>
            </div>

            {/* Average Session Time Card */}
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      metricsData.avgSessionTime.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <svg className={`w-4 h-4 mr-1 ${metricsData.avgSessionTime.trend === 'up' ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                      {metricsData.avgSessionTime.change}%
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {Math.floor(metricsData.avgSessionTime.value / 60)}m {metricsData.avgSessionTime.value % 60}s
                  </div>
                  <div className="text-gray-600 text-sm">Avg Session Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <span className="ml-4 text-lg text-gray-600">Loading analytics data...</span>
          </div>
        )}

        {/* Revenue Analytics Chart */}
        {!isLoading && (
          <section className="mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Revenue Analytics</h2>
                  <p className="text-gray-600">Track your revenue growth over time</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleExportData('revenue')}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Export Data
                  </button>
                  <button
                    onClick={() => handleViewDetails('revenue-details')}
                    className="px-4 py-2 bg-white/60 text-gray-700 rounded-xl font-medium hover:bg-white/80 transition-all hover:-translate-y-0.5"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Revenue Chart Visualization */}
              <div className="relative h-80 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"></div>
                <div className="relative h-full flex items-end justify-between px-8 py-6">
                  {/* Mock Chart Bars */}
                  {[65, 78, 82, 45, 92, 88, 95, 73, 86, 91, 97, 89].map((height, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="relative mb-2">
                        <div
                          className="w-8 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all duration-500 hover:from-green-600 hover:to-emerald-500 group-hover:scale-110"
                          style={{ height: `${height * 2.5}px` }}
                        ></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ${(height * 1000).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Insights */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-800">$97K</div>
                      <div className="text-green-600 text-sm">Highest Month</div>
                    </div>
                  </div>
                  <div className="text-green-700 text-sm">November 2024 achieved the highest revenue this year</div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-800">78.5%</div>
                      <div className="text-blue-600 text-sm">Growth Rate</div>
                    </div>
                  </div>
                  <div className="text-blue-700 text-sm">Average monthly growth compared to last year</div>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-800">$1.2M</div>
                      <div className="text-purple-600 text-sm">Projected</div>
                    </div>
                  </div>
                  <div className="text-purple-700 text-sm">Expected revenue for next quarter</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* User Engagement Analytics */}
        {!isLoading && (
          <section className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* User Activity Heatmap */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">User Activity Heatmap</h3>
                    <p className="text-gray-600 text-sm">Activity patterns throughout the week</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Heatmap Grid */}
                <div className="space-y-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                    <div key={day} className="flex items-center gap-2">
                      <div className="w-8 text-xs text-gray-600 font-medium">{day}</div>
                      <div className="flex gap-1">
                        {Array.from({ length: 24 }).map((_, hour) => {
                          const intensity = Math.random();
                          return (
                            <div
                              key={hour}
                              className={`w-3 h-3 rounded-sm cursor-pointer transition-all hover:scale-125 ${
                                intensity > 0.8 ? 'bg-blue-600' :
                                intensity > 0.6 ? 'bg-blue-500' :
                                intensity > 0.4 ? 'bg-blue-400' :
                                intensity > 0.2 ? 'bg-blue-300' :
                                'bg-blue-100'
                              }`}
                              title={`${day} ${hour}:00 - Activity: ${Math.round(intensity * 100)}%`}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Less</div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div key={level} className={`w-3 h-3 rounded-sm bg-blue-${level * 100 + 100}`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">More</div>
                </div>
              </div>

              {/* Top Pages Performance */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Top Performing Pages</h3>
                    <p className="text-gray-600 text-sm">Most visited pages this week</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { page: '/dashboard', views: 12543, change: 12.5, color: 'green' },
                    { page: '/analytics', views: 8932, change: 8.3, color: 'blue' },
                    { page: '/products', views: 7621, change: -2.1, color: 'red' },
                    { page: '/settings', views: 5234, change: 15.7, color: 'green' },
                    { page: '/docs', views: 4567, change: 22.4, color: 'green' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.page}</div>
                          <div className="text-sm text-gray-600">{item.views.toLocaleString()} views</div>
                        </div>
                      </div>
                      <div className={`flex items-center text-sm font-medium ${
                        item.color === 'green' ? 'text-green-600' :
                        item.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                      }`}>
                        <svg className={`w-4 h-4 mr-1 ${item.change < 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                        {Math.abs(item.change)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Geographic Analytics & Performance Monitoring */}
        {!isLoading && (
          <section className="mb-12">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Geographic Distribution */}
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Geographic Distribution</h3>
                    <p className="text-gray-600 text-sm">User locations worldwide</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* World Map Visualization */}
                <div className="relative h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🌍</div>
                  </div>

                  {/* Simulated Data Points */}
                  {[
                    { top: '25%', left: '20%', size: 'large', users: '12.5K' },
                    { top: '35%', left: '50%', size: 'medium', users: '8.2K' },
                    { top: '45%', left: '75%', size: 'small', users: '3.1K' },
                    { top: '60%', left: '15%', size: 'medium', users: '6.7K' },
                    { top: '30%', left: '85%', size: 'large', users: '15.3K' }
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="absolute group cursor-pointer"
                      style={{ top: point.top, left: point.left }}
                    >
                      <div className={`rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse ${
                        point.size === 'large' ? 'w-6 h-6' :
                        point.size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'
                      }`}></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {point.users} users
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Countries */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { country: 'United States', users: '15.3K', flag: '🇺🇸', percentage: 34 },
                    { country: 'United Kingdom', users: '12.5K', flag: '🇬🇧', percentage: 28 },
                    { country: 'Germany', users: '8.2K', flag: '🇩🇪', percentage: 18 },
                    { country: 'Canada', users: '6.7K', flag: '🇨🇦', percentage: 15 }
                  ].map((country, index) => (
                    <div
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                      className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{country.flag}</span>
                        <span className="font-medium text-gray-900 text-sm">{country.country}</span>
                      </div>
                      <div className="text-lg font-bold text-indigo-600 mb-1">{country.users}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Monitoring */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
                    <p className="text-gray-600 text-sm">System health metrics</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Server Response Time */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <span className="text-sm font-bold text-green-600">142ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Excellent</div>
                  </div>

                  {/* Uptime */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Uptime</span>
                      <span className="text-sm font-bold text-green-600">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">30 days</div>
                  </div>

                  {/* Error Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Error Rate</span>
                      <span className="text-sm font-bold text-yellow-600">0.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Very Low</div>
                  </div>

                  {/* CPU Usage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">CPU Usage</span>
                      <span className="text-sm font-bold text-blue-600">34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '34%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Normal</div>
                  </div>

                  {/* Memory Usage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Memory</span>
                      <span className="text-sm font-bold text-purple-600">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">8.2GB / 12GB</div>
                  </div>
                </div>

                {/* System Status */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
                  </div>
                  <div className="text-xs text-gray-500">Last updated: 2 minutes ago</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Real-time Activity Feed */}
        {!isLoading && (
          <section className="mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Activity</h3>
                  <p className="text-gray-600 text-sm">Live user interactions and system events</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                  <button
                    onClick={() => handleViewDetails('activity-details')}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    View All
                  </button>
                </div>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                {[
                  { type: 'user', action: 'New user registration', user: 'john.doe@example.com', time: '2 minutes ago', icon: '👤', color: 'green' },
                  { type: 'purchase', action: 'Purchase completed', user: 'sarah.wilson@example.com', time: '5 minutes ago', icon: '💰', color: 'blue' },
                  { type: 'error', action: 'API error resolved', user: 'System', time: '8 minutes ago', icon: '⚠️', color: 'yellow' },
                  { type: 'user', action: 'User logged in', user: 'mike.johnson@example.com', time: '12 minutes ago', icon: '🔐', color: 'green' },
                  { type: 'system', action: 'Database backup completed', user: 'System', time: '15 minutes ago', icon: '💾', color: 'purple' },
                  { type: 'purchase', action: 'Subscription upgraded', user: 'emma.davis@example.com', time: '18 minutes ago', icon: '⬆️', color: 'blue' },
                  { type: 'user', action: 'Password reset requested', user: 'alex.brown@example.com', time: '22 minutes ago', icon: '🔑', color: 'orange' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                      activity.color === 'green' ? 'bg-green-100' :
                      activity.color === 'blue' ? 'bg-blue-100' :
                      activity.color === 'yellow' ? 'bg-yellow-100' :
                      activity.color === 'purple' ? 'bg-purple-100' :
                      'bg-orange-100'
                    }`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{activity.action}</div>
                      <div className="text-sm text-gray-600">{activity.user}</div>
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Detailed Views Modal/Overlay */}
      {currentView !== 'dashboard' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-y-auto">

            {/* Header with Back Button */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBackToDashboard}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentView === 'revenue-details' && 'Revenue Analytics Details'}
                      {currentView === 'geographic-details' && `${selectedCountry?.country || 'Geographic'} Details`}
                      {currentView === 'activity-details' && 'Activity Feed Details'}
                    </h2>
                    <p className="text-gray-600">
                      {currentView === 'revenue-details' && 'Comprehensive revenue analysis and insights'}
                      {currentView === 'geographic-details' && 'Detailed geographic analytics and user distribution'}
                      {currentView === 'activity-details' && 'Complete activity log and user interactions'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleBackToDashboard}
                  className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">

              {/* Revenue Details View */}
              {currentView === 'revenue-details' && (
                <div className="space-y-8">

                  {/* Revenue Breakdown */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-green-800">Subscription Revenue</h3>
                          <p className="text-green-600 text-sm">Monthly recurring revenue</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-800 mb-2">$1,847,392</div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        +18.5% from last month
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-blue-800">One-time Sales</h3>
                          <p className="text-blue-600 text-sm">Product and service sales</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-blue-800 mb-2">$1,000,000</div>
                      <div className="flex items-center text-sm text-blue-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        +8.2% from last month
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-purple-800">Other Revenue</h3>
                          <p className="text-purple-600 text-sm">Partnerships and licensing</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-purple-800 mb-2">$0</div>
                      <div className="flex items-center text-sm text-purple-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        No change
                      </div>
                    </div>
                  </div>

                  {/* Detailed Revenue Chart */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Revenue Trend</h3>
                    <div className="h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📈</div>
                        <h4 className="text-xl font-bold text-gray-700 mb-2">Advanced Chart View</h4>
                        <p className="text-gray-600">Interactive revenue analytics with drill-down capabilities</p>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Insights */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Revenue Insights</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Peak revenue month: November 2024</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Average monthly growth: 12.3%</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Q4 target achievement: 108%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Forecasting</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Next Month</span>
                          <span className="text-sm font-bold text-green-600">$3.2M (+12%)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Next Quarter</span>
                          <span className="text-sm font-bold text-blue-600">$9.8M (+15%)</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Next Year</span>
                          <span className="text-sm font-bold text-purple-600">$42M (+18%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Geographic Details View */}
              {currentView === 'geographic-details' && selectedCountry && (
                <div className="space-y-8">

                  {/* Country Overview */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-6xl">{selectedCountry.flag}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-indigo-800 mb-2">{selectedCountry.country}</h3>
                        <p className="text-indigo-600">Detailed analytics for this region</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-800">{selectedCountry.users}</div>
                        <div className="text-indigo-600 text-sm">Total Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-800">{selectedCountry.percentage}%</div>
                        <div className="text-indigo-600 text-sm">Market Share</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-800">$2.4M</div>
                        <div className="text-indigo-600 text-sm">Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-800">4.2%</div>
                        <div className="text-indigo-600 text-sm">Conversion Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* City Breakdown */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Top Cities</h4>
                    <div className="space-y-4">
                      {[
                        { city: 'New York', users: '4.2K', percentage: 28 },
                        { city: 'Los Angeles', users: '3.8K', percentage: 25 },
                        { city: 'Chicago', users: '2.9K', percentage: 19 },
                        { city: 'Houston', users: '2.1K', percentage: 14 },
                        { city: 'Phoenix', users: '1.8K', percentage: 12 }
                      ].map((city, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{city.city}</div>
                              <div className="text-sm text-gray-600">{city.users} users</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-indigo-600">{city.percentage}%</div>
                            <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                              <div
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                                style={{ width: `${city.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Details View */}
              {currentView === 'activity-details' && (
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Complete Activity Log</h4>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {Array.from({ length: 20 }).map((_, index) => {
                        const activities = [
                          { type: 'user', action: 'New user registration', user: 'john.doe@example.com', icon: '👤', color: 'green' },
                          { type: 'purchase', action: 'Purchase completed', user: 'sarah.wilson@example.com', icon: '💰', color: 'blue' },
                          { type: 'error', action: 'API error resolved', user: 'System', icon: '⚠️', color: 'yellow' },
                          { type: 'user', action: 'User logged in', user: 'mike.johnson@example.com', icon: '🔐', color: 'green' },
                          { type: 'system', action: 'Database backup completed', user: 'System', icon: '💾', color: 'purple' }
                        ];
                        const activity = activities[index % activities.length];
                        return (
                          <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                              activity.color === 'green' ? 'bg-green-100' :
                              activity.color === 'blue' ? 'bg-blue-100' :
                              activity.color === 'yellow' ? 'bg-yellow-100' :
                              activity.color === 'purple' ? 'bg-purple-100' :
                              'bg-orange-100'
                            }`}>
                              {activity.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{activity.action}</div>
                              <div className="text-sm text-gray-600">{activity.user}</div>
                            </div>
                            <div className="text-xs text-gray-500">{index + 1} minutes ago</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPage;
