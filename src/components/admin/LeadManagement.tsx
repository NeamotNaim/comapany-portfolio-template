import React, { useState, useEffect } from 'react';
import { leadsAPI, Lead } from '../../services/api';

const LeadManagement: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [stats, setStats] = useState({
    total_leads: 0,
    new_leads: 0,
    in_progress_leads: 0,
    converted_leads: 0,
    conversion_rate: 0,
  });

  // Fetch leads from API
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const params = {
        ...(filterStatus !== 'all' && { status: filterStatus }),
        ...(filterPriority !== 'all' && { priority: filterPriority }),
      };

      const response = await leadsAPI.getAll(params);

      if (response.success && response.data) {
        setLeads(response.data);
      } else {
        setError('Failed to fetch leads');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  // Fetch lead statistics
  const fetchStats = async () => {
    try {
      const response = await leadsAPI.getStats();
      if (response.success && response.data) {
        setStats(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch lead stats:', err);
    }
  };

  // Load data on component mount and when filters change
  useEffect(() => {
    fetchLeads();
  }, [filterStatus, filterPriority]);

  useEffect(() => {
    fetchStats();
  }, []);

  // Handle lead status update
  const updateLeadStatus = async (
    leadId: number,
    newStatus: Lead['status']
  ) => {
    try {
      console.log('Updating lead status:', { leadId, newStatus });

      // Check if user is authenticated
      const token = localStorage.getItem('adminToken');
      if (!token) {
        alert('Please login to update lead status');
        return;
      }

      const response = await leadsAPI.updateStatus(leadId, newStatus);
      console.log('Update response:', response);

      if (response.success) {
        console.log('Lead status updated successfully');
        fetchLeads(); // Refresh the list
        fetchStats(); // Refresh stats
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
        alert(`Lead status updated to ${newStatus}`);
      } else {
        console.error('Update failed:', response);
        alert(
          `Failed to update lead status: ${response.message || 'Unknown error'}`
        );
      }
    } catch (err: any) {
      console.error('Update error:', err);
      alert(`Failed to update lead status: ${err.message || 'Network error'}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <div className="text-red-800">{error}</div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const baseClasses =
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'new':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'contacted':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'qualified':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case 'converted':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'closed':
        return `${baseClasses} bg-gray-100 text-gray-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const baseClasses =
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (priority) {
      case 'high':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'medium':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'low':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage contact form submissions and service inquiries
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">
                  {stats.new_leads}
                </div>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-medium text-gray-500">New Leads</div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-yellow-600">
                  {stats.in_progress_leads}
                </div>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-medium text-gray-500">
                In Progress
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">
                  {stats.converted_leads}
                </div>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-medium text-gray-500">Converted</div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-indigo-600">
                  {stats.conversion_rate}%
                </div>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-sm font-medium text-gray-500">
                Conversion Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="status-filter"
                className="block text-sm font-medium text-gray-700"
              >
                Filter by Status
              </label>
              <select
                id="status-filter"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="priority-filter"
                className="block text-sm font-medium text-gray-700"
              >
                Filter by Priority
              </label>
              <select
                id="priority-filter"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={filterPriority}
                onChange={e => setFilterPriority(e.target.value)}
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {leads.map(lead => (
            <li key={lead.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-medium text-sm">
                          {lead.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">
                          {lead.name}
                        </p>
                        <span className={`ml-2 ${getStatusBadge(lead.status)}`}>
                          {lead.status}
                        </span>
                        <span
                          className={`ml-2 ${getPriorityBadge(lead.priority)}`}
                        >
                          {lead.priority}
                        </span>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        {lead.company && (
                          <p className="text-sm text-gray-500">
                            {lead.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {lead.service_interest || 'General Inquiry'}
                      </p>
                      <p className="text-sm text-gray-500">
                        Submitted {formatDate(lead.created_at)}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {lead.message}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Lead Details
                </h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Contact Information
                  </h4>
                  <div className="mt-1 text-sm text-gray-600">
                    <p>
                      <strong>Name:</strong> {selectedLead.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedLead.email}
                    </p>
                    {selectedLead.company && (
                      <p>
                        <strong>Company:</strong> {selectedLead.company}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Service Interest
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {selectedLead.serviceInterest}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Message</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {selectedLead.message}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={getStatusBadge(selectedLead.status)}>
                    {selectedLead.status}
                  </span>
                  <span className={getPriorityBadge(selectedLead.priority)}>
                    {selectedLead.priority}
                  </span>
                </div>

                <div className="pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Update Status
                  </label>
                  <div className="flex flex-col space-y-2">
                    <select
                      value={selectedLead.status}
                      onChange={e =>
                        updateLeadStatus(
                          selectedLead.id,
                          e.target.value as Lead['status']
                        )
                      }
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="proposal_sent">Proposal Sent</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                      <option value="lost">Lost</option>
                    </select>

                    <div className="flex space-x-2 pt-2">
                      <button
                        onClick={() =>
                          updateLeadStatus(selectedLead.id, 'contacted')
                        }
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() =>
                          updateLeadStatus(selectedLead.id, 'qualified')
                        }
                        className="px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700"
                      >
                        Qualified
                      </button>
                      <button
                        onClick={() =>
                          updateLeadStatus(selectedLead.id, 'converted')
                        }
                        className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                      >
                        Converted
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadManagement;
