import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { format, subDays, parseISO } from 'date-fns';
import { analyticsAPI } from '../../services/api';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface AnalyticsData {
  overview: any;
  revenue: any;
  traffic: any;
  leads: any;
  services: any;
}

const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    overview: null,
    revenue: null,
    traffic: null,
    leads: null,
    services: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const periods = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'revenue', name: 'Revenue', icon: '💰' },
    { id: 'traffic', name: 'Traffic', icon: '🌐' },
    { id: 'leads', name: 'Leads', icon: '👥' },
    { id: 'services', name: 'Services', icon: '⚙️' },
  ];

  useEffect(() => {
    fetchAnalyticsData();
  }, [selectedPeriod]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use real data endpoint (connects to your actual database)
      console.log('Fetching analytics data from real database...');

      const response = await fetch(
        `http://localhost:5001/api/analytics/real?period=${selectedPeriod}`
      );
      const result = await response.json();

      if (result.success && result.data) {
        setData({
          overview: result.data.overview,
          revenue: result.data.revenue,
          traffic: result.data.traffic,
          leads: result.data.leads,
          services: result.data.services,
        });
        console.log('Analytics data loaded successfully from real database');
        console.log('Real leads data:', result.data.leads);
      } else {
        throw new Error('Failed to fetch real data');
      }
    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
      setError('Failed to load analytics data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async (type: string) => {
    try {
      const response = await analyticsAPI.exportData({
        type: type as any,
        period: selectedPeriod,
        format: 'json',
      });

      // Create download link
      const blob = new Blob([JSON.stringify(response.data, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${type}-analytics-${selectedPeriod}-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value / 100); // Convert from cents
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = (trend: string) => {
    if (trend === 'up') return '↗️';
    if (trend === 'down') return '↘️';
    return '➡️';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Analytics
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchAnalyticsData}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Analytics Dashboard
              </h1>
              <p className="mt-1 text-gray-600">
                Real-time insights and performance metrics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Period Selector */}
              <select
                value={selectedPeriod}
                onChange={e => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>

              {/* Export Button */}
              <button
                onClick={() => handleExport(activeTab)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                <span>📥</span>
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <OverviewTab
            data={data.overview}
            formatCurrency={formatCurrency}
            formatNumber={formatNumber}
            getChangeColor={getChangeColor}
            getChangeIcon={getChangeIcon}
          />
        )}
        {activeTab === 'revenue' && (
          <RevenueTab data={data.revenue} formatCurrency={formatCurrency} />
        )}
        {activeTab === 'traffic' && (
          <TrafficTab data={data.traffic} formatNumber={formatNumber} />
        )}
        {activeTab === 'leads' && (
          <LeadsTab data={data.leads} formatNumber={formatNumber} />
        )}
        {activeTab === 'services' && (
          <ServicesTab
            data={data.services}
            formatCurrency={formatCurrency}
            formatNumber={formatNumber}
          />
        )}
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab: React.FC<{
  data: any;
  formatCurrency: (value: number) => string;
  formatNumber: (value: number) => string;
  getChangeColor: (change: number) => string;
  getChangeIcon: (trend: string) => string;
}> = ({
  data,
  formatCurrency,
  formatNumber,
  getChangeColor,
  getChangeIcon,
}) => {
  if (!data) return <div>Loading overview data...</div>;

  const metrics = data.metrics || {};

  return (
    <div className="space-y-8">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(metrics.total_revenue?.value || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.total_revenue?.change || 0)}`}
            >
              {getChangeIcon(metrics.total_revenue?.trend || 'up')}{' '}
              {Math.abs(metrics.total_revenue?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatNumber(metrics.total_leads?.value || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.total_leads?.change || 0)}`}
            >
              {getChangeIcon(metrics.total_leads?.trend || 'up')}{' '}
              {Math.abs(metrics.total_leads?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Conversion Rate
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {(metrics.conversion_rate?.value || 0).toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.conversion_rate?.change || 0)}`}
            >
              {getChangeIcon(metrics.conversion_rate?.trend || 'up')}{' '}
              {Math.abs(metrics.conversion_rate?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Unique Visitors
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatNumber(metrics.unique_visitors?.value || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👁️</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.unique_visitors?.change || 0)}`}
            >
              {getChangeIcon(metrics.unique_visitors?.trend || 'up')}{' '}
              {Math.abs(metrics.unique_visitors?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatNumber(metrics.page_views?.value || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.page_views?.change || 0)}`}
            >
              {getChangeIcon(metrics.page_views?.trend || 'up')}{' '}
              {Math.abs(metrics.page_views?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Deal Value
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(metrics.avg_deal_value?.value || 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${getChangeColor(metrics.avg_deal_value?.change || 0)}`}
            >
              {getChangeIcon(metrics.avg_deal_value?.trend || 'up')}{' '}
              {Math.abs(metrics.avg_deal_value?.change || 0)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">
              vs previous period
            </span>
          </div>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📊 Quick Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Revenue Growth</span>
              <span
                className={`text-sm font-medium ${getChangeColor(metrics.total_revenue?.change || 0)}`}
              >
                {metrics.total_revenue?.change > 0 ? '+' : ''}
                {metrics.total_revenue?.change || 0}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Lead Generation</span>
              <span
                className={`text-sm font-medium ${getChangeColor(metrics.total_leads?.change || 0)}`}
              >
                {metrics.total_leads?.change > 0 ? '+' : ''}
                {metrics.total_leads?.change || 0}%
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Website Traffic</span>
              <span
                className={`text-sm font-medium ${getChangeColor(metrics.unique_visitors?.change || 0)}`}
              >
                {metrics.unique_visitors?.change > 0 ? '+' : ''}
                {metrics.unique_visitors?.change || 0}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">
                Conversion Performance
              </span>
              <span
                className={`text-sm font-medium ${getChangeColor(metrics.conversion_rate?.change || 0)}`}
              >
                {metrics.conversion_rate?.change > 0 ? '+' : ''}
                {metrics.conversion_rate?.change || 0}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Revenue Tab Component
const RevenueTab: React.FC<{
  data: any;
  formatCurrency: (value: number) => string;
}> = ({ data, formatCurrency }) => {
  console.log('RevenueTab data:', data);

  if (!data) {
    console.log('RevenueTab: No data provided');
    return <div>Loading revenue data...</div>;
  }

  const revenueData = data.revenue_data || [];
  console.log('RevenueTab revenue_data:', revenueData);

  // Prepare chart data
  const chartData = {
    labels: revenueData.map((item: any) =>
      format(parseISO(item.period + 'T00:00:00'), 'MMM dd')
    ),
    datasets: [
      {
        label: 'Revenue',
        data: revenueData.map((item: any) => (item.revenue || 0) / 100),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Conversions',
        data: revenueData.map((item: any) => item.conversions || 0),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Revenue & Conversions Over Time',
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Revenue ($)',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Conversions',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const totalRevenue = revenueData.reduce(
    (sum: number, item: any) => sum + (item.revenue || 0),
    0
  );
  const totalConversions = revenueData.reduce(
    (sum: number, item: any) => sum + (item.conversions || 0),
    0
  );
  const avgDealValue =
    totalConversions > 0 ? totalRevenue / totalConversions : 0;

  return (
    <div className="space-y-8">
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Conversions
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {totalConversions}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Deal Value
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(avgDealValue)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="h-96">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Revenue Breakdown Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📊 Revenue Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Deal Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {revenueData.map((item: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {format(
                      parseISO(item.period + 'T00:00:00'),
                      'MMM dd, yyyy'
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.leads_count || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.conversions || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(item.revenue || 0)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(item.avg_deal_value || 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Traffic Tab Component
const TrafficTab: React.FC<{
  data: any;
  formatNumber: (value: number) => string;
}> = ({ data, formatNumber }) => {
  if (!data) return <div>Loading traffic data...</div>;

  const trafficByDay = data.traffic_by_day || [];
  const topPages = data.top_pages || [];
  const trafficSources = data.traffic_sources || [];

  // Prepare traffic chart data
  const trafficChartData = {
    labels: trafficByDay.map((item: any) =>
      format(parseISO(item.date + 'T00:00:00'), 'MMM dd')
    ),
    datasets: [
      {
        label: 'Page Views',
        data: trafficByDay.map((item: any) => item.page_views || 0),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Unique Visitors',
        data: trafficByDay.map((item: any) => item.unique_visitors || 0),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Prepare traffic sources chart data
  const sourcesChartData = {
    labels: trafficSources.map((item: any) => item.source),
    datasets: [
      {
        data: trafficSources.map((item: any) => item.visits),
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#06B6D4',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Website Traffic Over Time',
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Visits',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Traffic Sources',
      },
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const totalPageViews = trafficByDay.reduce(
    (sum: number, item: any) => sum + (item.page_views || 0),
    0
  );
  const totalUniqueVisitors = trafficByDay.reduce(
    (sum: number, item: any) => sum + (item.unique_visitors || 0),
    0
  );
  const avgPagesPerSession =
    totalUniqueVisitors > 0 ? totalPageViews / totalUniqueVisitors : 0;

  return (
    <div className="space-y-8">
      {/* Traffic Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Page Views
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatNumber(totalPageViews)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Unique Visitors
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatNumber(totalUniqueVisitors)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Pages per Session
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {avgPagesPerSession.toFixed(1)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="h-96">
          <Line data={trafficChartData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="h-80">
            <Doughnut data={sourcesChartData} options={doughnutOptions} />
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🔝 Top Pages
          </h3>
          <div className="space-y-3">
            {topPages.slice(0, 10).map((page: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {page.page_path || '/'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatNumber(page.unique_visitors || 0)} unique visitors
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatNumber(page.page_views || 0)}
                  </p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Leads Tab Component
const LeadsTab: React.FC<{
  data: any;
  formatNumber: (value: number) => string;
}> = ({ data, formatNumber }) => {
  console.log('LeadsTab data:', data);

  if (!data) {
    console.log('LeadsTab: No data provided');
    return <div>Loading leads data...</div>;
  }

  const leadsByStatus = data.leads_by_status || [];
  const leadsBySource = data.leads_by_source || [];
  const leadsByService = data.leads_by_service || [];
  const leadsTimeline = data.leads_timeline || [];

  console.log('LeadsTab parsed data:', {
    leadsByStatus,
    leadsBySource,
    leadsByService,
    leadsTimeline,
  });

  // Prepare leads timeline chart
  const timelineChartData = {
    labels: leadsTimeline.map((item: any) =>
      format(parseISO(item.date + 'T00:00:00'), 'MMM dd')
    ),
    datasets: [
      {
        label: 'New Leads',
        data: leadsTimeline.map((item: any) => item.leads_count || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Conversions',
        data: leadsTimeline.map((item: any) => item.conversions || 0),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  // Prepare status chart
  const statusChartData = {
    labels: leadsByStatus.map((item: any) =>
      item.status.replace('_', ' ').toUpperCase()
    ),
    datasets: [
      {
        data: leadsByStatus.map((item: any) => item.count),
        backgroundColor: [
          '#3B82F6', // new
          '#F59E0B', // contacted
          '#8B5CF6', // qualified
          '#06B6D4', // proposal_sent
          '#10B981', // converted
          '#6B7280', // closed
          '#EF4444', // lost
        ],
        borderWidth: 0,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Leads & Conversions Timeline',
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Leads by Status',
      },
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Leads Timeline Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="h-96">
          <Bar data={timelineChartData} options={barOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leads by Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="h-80">
            <Doughnut data={statusChartData} options={doughnutOptions} />
          </div>
        </div>

        {/* Leads by Source */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📊 Leads by Source
          </h3>
          <div className="space-y-3">
            {leadsBySource.map((source: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {source.source}
                  </p>
                  <p className="text-xs text-gray-500">
                    {source.conversion_rate}% conversion rate
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatNumber(source.count)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {source.conversions} converted
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leads by Service Interest */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          🎯 Top Service Interests
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leadsByService.map((service: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatNumber(service.count)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatNumber(service.conversions)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${((service.avg_value || 0) / 100).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Services Tab Component
const ServicesTab: React.FC<{
  data: any;
  formatCurrency: (value: number) => string;
  formatNumber: (value: number) => string;
}> = ({ data, formatCurrency, formatNumber }) => {
  if (!data) return <div>Loading services data...</div>;

  const servicePerformance = data.service_performance || [];
  const categoryPerformance = data.category_performance || [];

  // Prepare category performance chart
  const categoryChartData = {
    labels: categoryPerformance.map((item: any) => item.category),
    datasets: [
      {
        label: 'Leads',
        data: categoryPerformance.map((item: any) => item.lead_count || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Conversions',
        data: categoryPerformance.map((item: any) => item.conversions || 0),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  const categoryOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Performance by Service Category',
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Service Category',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Category Performance Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="h-96">
          <Bar data={categoryChartData} options={categoryOptions} />
        </div>
      </div>

      {/* Service Performance Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          🏆 Top Performing Services
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leads
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {servicePerformance.map((service: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {service.title}
                    </div>
                    <div className="text-sm text-gray-500">/{service.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatNumber(service.lead_count || 0)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatNumber(service.conversions || 0)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        (service.conversion_rate || 0) >= 5
                          ? 'bg-green-100 text-green-800'
                          : (service.conversion_rate || 0) >= 2
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {(service.conversion_rate || 0).toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(service.revenue || 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryPerformance.slice(0, 6).map((category: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {category.category}
              </h4>
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-lg">⚙️</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Services:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatNumber(category.service_count || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Leads:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatNumber(category.lead_count || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conversions:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatNumber(category.conversions || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Revenue:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatCurrency(category.revenue || 0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
