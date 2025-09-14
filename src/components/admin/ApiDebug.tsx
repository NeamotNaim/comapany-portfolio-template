import React, { useState } from 'react';
import { servicesAPI, leadsAPI, authAPI } from '../../services/api';

const ApiDebug: React.FC = () => {
  const [results, setResults] = useState<any>({});
  const [loading, setLoading] = useState<string>('');

  const testEndpoint = async (name: string, apiCall: () => Promise<any>) => {
    setLoading(name);
    try {
      const result = await apiCall();
      setResults(prev => ({
        ...prev,
        [name]: { success: true, data: result },
      }));
      console.log(`${name} result:`, result);
    } catch (error) {
      setResults(prev => ({
        ...prev,
        [name]: { success: false, error: error.message },
      }));
      console.error(`${name} error:`, error);
    } finally {
      setLoading('');
    }
  };

  const tests = [
    {
      name: 'Health Check',
      test: () => fetch('http://localhost:5001/health').then(r => r.json()),
    },
    {
      name: 'Auth Check',
      test: () => authAPI.getCurrentUser(),
    },
    {
      name: 'Services API',
      test: () => servicesAPI.getAll(),
    },
    {
      name: 'Categories API',
      test: () => servicesAPI.getCategories(),
    },
    {
      name: 'Leads API',
      test: () => leadsAPI.getAll(),
    },
    {
      name: 'Service Stats',
      test: () => servicesAPI.getStats(),
    },
  ];

  return (
    <div className="admin-layout p-6">
      <div className="admin-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          API Debug Panel
        </h2>

        <div className="space-y-4">
          {tests.map(({ name, test }) => (
            <div
              key={name}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{name}</h3>
                {results[name] && (
                  <div className="mt-2">
                    {results[name].success ? (
                      <div className="text-green-600 text-sm">
                        ✅ Success:{' '}
                        {JSON.stringify(results[name].data, null, 2).substring(
                          0,
                          100
                        )}
                        ...
                      </div>
                    ) : (
                      <div className="text-red-600 text-sm">
                        ❌ Error: {results[name].error}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button
                onClick={() => testEndpoint(name, test)}
                disabled={loading === name}
                className="admin-btn admin-btn-primary ml-4"
              >
                {loading === name ? 'Testing...' : 'Test'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Configuration
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700">
              {JSON.stringify(
                {
                  API_BASE_URL:
                    import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
                  TOKEN: localStorage.getItem('adminToken')
                    ? 'Present'
                    : 'Missing',
                  CURRENT_URL: window.location.href,
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDebug;
