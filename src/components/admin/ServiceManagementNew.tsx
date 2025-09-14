import React, { useState, useEffect } from 'react';
import { servicesAPI, Service, apiClient } from '../../services/api';
import '../../styles/admin.css';

interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  service_count?: number;
}

interface ServiceData {
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  category_id: number;
  status: 'draft' | 'active' | 'archived';
  features: string[];
  technologies: string[];
  pricing_start?: number;
}

const ServiceManagement: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    short_description: '',
    full_description: '',
    category_id: '',
    status: 'draft',
    pricing_start: '',
    features: [''],
    technologies: [''],
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError('');

      console.log('Fetching services...');
      const response = await servicesAPI.getAll();
      console.log('API response:', response);

      if (response.success && response.data) {
        setServices(response.data);
        console.log('Services loaded:', response.data.length);
      } else {
        setError(response.message || 'Failed to fetch services');
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch services';
      setError(errorMessage);
      console.error('Fetch services error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await servicesAPI.getCategories();
      if (response.success && response.data) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle array inputs (features, technologies)
  const handleArrayChange = (
    field: 'features' | 'technologies',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field: 'features' | 'technologies') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeArrayItem = (
    field: 'features' | 'technologies',
    index: number
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // Show notification
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      short_description: '',
      full_description: '',
      category_id: '',
      status: 'draft',
      pricing_start: '',
      features: [''],
      technologies: [''],
    });
    setEditingService(null);
  };

  // Create new service
  const handleCreateService = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title.trim()) {
      showNotification('error', 'Title is required');
      return;
    }
    if (!formData.category_id) {
      showNotification('error', 'Category is required');
      return;
    }

    try {
      const serviceData: ServiceData = {
        title: formData.title.trim(),
        slug:
          formData.slug.trim() ||
          formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
        short_description: formData.short_description.trim(),
        full_description: formData.full_description.trim(),
        category_id: parseInt(formData.category_id),
        status: formData.status as 'draft' | 'active' | 'archived',
        features: formData.features.filter(f => f.trim() !== ''),
        technologies: formData.technologies.filter(t => t.trim() !== ''),
      };

      // Only add pricing if values exist
      if (formData.pricing_start && formData.pricing_start !== '') {
        serviceData.pricing_start = parseInt(formData.pricing_start) * 100;
      }

      const response = await servicesAPI.create(serviceData);

      if (response.success) {
        // Clear cache to ensure fresh data
        apiClient.clearCacheForEndpoint('/services');

        setShowCreateModal(false);
        resetForm();
        fetchServices();
        showNotification('success', 'Service created successfully!');
      } else {
        showNotification(
          'error',
          response.message || 'Failed to create service'
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to create service';
      showNotification('error', errorMessage);
    }
  };

  // Edit service
  const handleEditService = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title || '',
      slug: service.slug || '',
      short_description: service.short_description || '',
      full_description: service.full_description || '',
      category_id: service.category_id?.toString() || '',
      status: service.status || 'draft',
      pricing_start: service.pricing_start
        ? (service.pricing_start / 100).toString()
        : '',
      features:
        service.features && service.features.length > 0
          ? service.features
          : [''],
      technologies:
        service.technologies && service.technologies.length > 0
          ? service.technologies
          : [''],
    });
    setShowEditModal(true);
  };

  // Update service
  const handleUpdateService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    // Basic validation
    if (!formData.title.trim()) {
      showNotification('error', 'Title is required');
      return;
    }
    if (!formData.category_id) {
      showNotification('error', 'Category is required');
      return;
    }

    try {
      const serviceData: ServiceData = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        short_description: formData.short_description.trim(),
        full_description: formData.full_description.trim(),
        category_id: parseInt(formData.category_id),
        status: formData.status as 'draft' | 'active' | 'archived',
        features: formData.features.filter(f => f.trim() !== ''),
        technologies: formData.technologies.filter(t => t.trim() !== ''),
      };

      // Only add pricing if values exist
      if (formData.pricing_start && formData.pricing_start !== '') {
        serviceData.pricing_start = parseInt(formData.pricing_start) * 100;
      }

      const response = await servicesAPI.update(editingService.id, serviceData);

      if (response.success) {
        setShowEditModal(false);
        resetForm();
        fetchServices();
        showNotification('success', 'Service updated successfully!');
      } else {
        showNotification(
          'error',
          response.message || 'Failed to update service'
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to update service';
      showNotification('error', errorMessage);
    }
  };

  // Delete service
  const handleDeleteService = async (service: Service) => {
    if (
      !window.confirm(
        `Are you sure you want to delete "${service.title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      const response = await servicesAPI.delete(service.id);
      if (response.success) {
        fetchServices();
        showNotification(
          'success',
          `Service "${service.title}" deleted successfully!`
        );
      } else {
        showNotification(
          'error',
          response.message || 'Failed to delete service'
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to delete service';
      showNotification('error', errorMessage);
      console.error('Delete service error:', err);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="admin-layout flex items-center justify-center h-64">
        <div className="text-center">
          <div className="admin-loading w-12 h-12 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-layout p-6">
        <div className="admin-card p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Failed to Load Services
          </h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-x-4">
            <button
              onClick={fetchServices}
              className="admin-btn admin-btn-primary"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="admin-btn admin-btn-secondary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout p-6 space-y-8">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
            notification.type === 'success'
              ? 'bg-green-100 border border-green-400 text-green-700'
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {notification.type === 'success' ? (
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setNotification(null)}
                className="inline-flex text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="admin-fade-in">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Service Management
            </h1>
            <p className="mt-2 text-gray-600">Manage all your services</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowCreateModal(true)}
              className="admin-btn admin-btn-primary"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add New Service
            </button>
          </div>
        </div>
      </div>

      <div className="admin-card p-6 admin-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Services ({services.length})
          </h3>
          <div className="text-sm text-gray-500">
            {services.filter(s => s.status === 'active').length} active •{' '}
            {services.filter(s => s.status === 'draft').length} draft
          </div>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
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
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              id="create-title" No services found
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first service.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="admin-btn admin-btn-primary"
            >
              Create Service
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {services.map(service => (
              <div
                key={service.id}
                className="admin-card p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {service.title ? service.title.charAt(0) : 'S'}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-medium text-gray-900">
                          {service.title}
                        </h4>
                        <span
                          className={`admin-badge ${service.status === 'active' ? 'admin-badge-success' : 'admin-badge-warning'}`}
                        >
                          {service.status}
                        </span>
                      </div>
                      {service.short_description && (
                        <p className="text-sm text-gray-600 mt-2 max-w-md">
                          {service.short_description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditService(service)}
                      className="admin-btn admin-btn-secondary text-sm px-3 py-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteService(service)}
                      className="admin-btn admin-btn-danger text-sm px-3 py-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="admin-card p-6 admin-fade-in">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Service Portfolio Summary
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-indigo-600">
              {services.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Total Services</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">
              {services.filter(s => s.status === 'active').length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Active Services</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">
              {services.filter(s => s.status === 'draft').length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Draft Services</div>
          </div>
        </div>
      </div>

      {/* Create Service Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Create New Service
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

            <form onSubmit={handleCreateService} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="admin-form-group">
                  <label htmlFor="create-title" className="admin-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Slug *</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Category *</label>
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="admin-input"
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Starting Price ($)</label>
                  <input
                    type="number"
                    name="pricing_start"
                    value={formData.pricing_start}
                    onChange={handleInputChange}
                    className="admin-input"
                    min="0"
                    placeholder="Enter starting price"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Short Description</label>
                <textarea
                  name="short_description"
                  value={formData.short_description}
                  onChange={handleInputChange}
                  className="admin-input"
                  rows={3}
                  placeholder="Brief description of the service"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Full Description</label>
                <textarea
                  name="full_description"
                  value={formData.full_description}
                  onChange={handleInputChange}
                  className="admin-input"
                  rows={5}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Features</label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={e =>
                        handleArrayChange('features', index, e.target.value)
                      }
                      className="admin-input flex-1"
                      placeholder="Enter feature"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('features', index)}
                        className="admin-btn admin-btn-danger text-sm px-2 py-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('features')}
                  className="admin-btn admin-btn-secondary text-sm"
                >
                  Add Feature
                </button>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Technologies</label>
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={e =>
                        handleArrayChange('technologies', index, e.target.value)
                      }
                      className="admin-input flex-1"
                      placeholder="Enter technology"
                    />
                    {formData.technologies.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('technologies', index)}
                        className="admin-btn admin-btn-danger text-sm px-2 py-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('technologies')}
                  className="admin-btn admin-btn-secondary text-sm"
                >
                  Add Technology
                </button>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    resetForm();
                  }}
                  className="admin-btn admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Create Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Service Modal */}
      {showEditModal && editingService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Edit Service: {editingService.title}
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

            <form onSubmit={handleUpdateService} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="admin-form-group">
                  <label className="admin-label">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Slug *</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Category *</label>
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="admin-input"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="admin-input"
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Starting Price ($)</label>
                  <input
                    type="number"
                    name="pricing_start"
                    value={formData.pricing_start}
                    onChange={handleInputChange}
                    className="admin-input"
                    min="0"
                    placeholder="Enter starting price"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Short Description</label>
                <textarea
                  name="short_description"
                  value={formData.short_description}
                  onChange={handleInputChange}
                  className="admin-input"
                  rows={3}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Full Description</label>
                <textarea
                  name="full_description"
                  value={formData.full_description}
                  onChange={handleInputChange}
                  className="admin-input"
                  rows={5}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Features</label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={e =>
                        handleArrayChange('features', index, e.target.value)
                      }
                      className="admin-input flex-1"
                      placeholder="Enter feature"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('features', index)}
                        className="admin-btn admin-btn-danger text-sm px-2 py-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('features')}
                  className="admin-btn admin-btn-secondary text-sm"
                >
                  Add Feature
                </button>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Technologies</label>
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={e =>
                        handleArrayChange('technologies', index, e.target.value)
                      }
                      className="admin-input flex-1"
                      placeholder="Enter technology"
                    />
                    {formData.technologies.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('technologies', index)}
                        className="admin-btn admin-btn-danger text-sm px-2 py-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('technologies')}
                  className="admin-btn admin-btn-secondary text-sm"
                >
                  Add Technology
                </button>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    resetForm();
                  }}
                  className="admin-btn admin-btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceManagement;
