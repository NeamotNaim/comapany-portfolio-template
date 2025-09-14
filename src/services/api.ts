/* eslint-disable @typescript-eslint/no-explicit-any */
// API Service Layer for Admin Dashboard
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Types
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface AuthResponse {
  success: boolean;
  data?: {
    token: string;
    user: User;
  };
  message?: string;
}

export interface Service {
  id: number;
  category_id: number;
  title: string;
  slug: string;
  short_description?: string;
  full_description?: string;
  features?: string[];
  technologies?: string[];
  pricing_start?: number;
  pricing_packages?: any;
  timeline_min?: number;
  timeline_max?: number;
  status: 'active' | 'draft' | 'archived';
  category_name?: string;
  category_slug?: string;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  budget_range?: string;
  timeline?: string;
  message?: string;
  status:
    | 'new'
    | 'contacted'
    | 'qualified'
    | 'proposal_sent'
    | 'converted'
    | 'closed'
    | 'lost';
  priority: 'low' | 'medium' | 'high';
  source?: string;
  assigned_to?: number;
  assigned_first_name?: string;
  assigned_last_name?: string;
  last_contact_date?: string;
  next_follow_up?: string;
  conversion_value?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// API Client Class
class ApiClient {
  private baseURL: string;
  private token: string | null;
  private requestCache: Map<string, { data: any; timestamp: number }> =
    new Map();
  private pendingRequests: Map<string, Promise<any>> = new Map();
  private readonly CACHE_DURATION = 30000; // 30 seconds

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('adminToken');
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    return headers;
  }

  private getCacheKey(endpoint: string, options: RequestInit): string {
    const method = options.method || 'GET';
    const body = options.body || '';
    return `${method}:${endpoint}:${body}`;
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.CACHE_DURATION;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      // Always get fresh token from localStorage
      this.token = localStorage.getItem('adminToken');

      const cacheKey = this.getCacheKey(endpoint, options);
      const method = options.method || 'GET';

      // Only cache GET requests
      if (method === 'GET') {
        // Check cache first
        const cached = this.requestCache.get(cacheKey);
        if (cached && this.isCacheValid(cached.timestamp)) {
          console.log('Returning cached response for:', endpoint);
          return cached.data;
        }

        // Check if request is already pending
        const pendingRequest = this.pendingRequests.get(cacheKey);
        if (pendingRequest) {
          console.log('Waiting for pending request:', endpoint);
          return await pendingRequest;
        }
      }

      const url = `${this.baseURL}${endpoint}`;
      const config: RequestInit = {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      };

      // Create the request promise
      const requestPromise = this.executeRequest<T>(url, config);

      // Store pending request for GET requests
      if (method === 'GET') {
        this.pendingRequests.set(cacheKey, requestPromise);
      }

      const result = await requestPromise;

      // Cache successful GET responses
      if (method === 'GET' && result.success) {
        this.requestCache.set(cacheKey, {
          data: result,
          timestamp: Date.now(),
        });
      }

      // Remove from pending requests
      if (method === 'GET') {
        this.pendingRequests.delete(cacheKey);
      }

      return result;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  private async executeRequest<T>(
    url: string,
    config: RequestInit
  ): Promise<ApiResponse<T>> {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  }

  // Authentication methods
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await this.request<{ token: string; user: User }>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.success && response.data) {
      this.token = response.data.token;
      localStorage.setItem('adminToken', this.token);
    }

    return response;
  }

  async logout(): Promise<void> {
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.token = null;
      localStorage.removeItem('adminToken');
    }
  }

  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    return this.request<{ user: User }>('/auth/me');
  }

  async refreshToken(): Promise<AuthResponse> {
    const response = await this.request<{ token: string; user: User }>(
      '/auth/refresh',
      {
        method: 'POST',
      }
    );

    if (response.success && response.data) {
      this.token = response.data.token;
      localStorage.setItem('adminToken', this.token);
    }

    return response;
  }

  // Generic HTTP methods
  async get<T>(
    endpoint: string,
    options?: { params?: any }
  ): Promise<ApiResponse<T>> {
    let url = endpoint;
    if (options?.params) {
      const searchParams = new URLSearchParams();
      Object.keys(options.params).forEach(key => {
        if (options.params[key] !== undefined && options.params[key] !== null) {
          searchParams.append(key, options.params[key].toString());
        }
      });
      const queryString = searchParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }
    return this.request<T>(url, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Service methods
  async getServices(params?: {
    page?: number;
    limit?: number;
    category_id?: number;
    status?: string;
    search?: string;
  }): Promise<ApiResponse<Service[]>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.append(key, value.toString());
        }
      });
    }

    const endpoint = `/services${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return this.request<Service[]>(endpoint);
  }

  async getService(id: number): Promise<ApiResponse<Service>> {
    return this.request<Service>(`/services/${id}`);
  }

  async createService(
    serviceData: Partial<Service>
  ): Promise<ApiResponse<Service>> {
    return this.request<Service>('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(
    id: number,
    serviceData: Partial<Service>
  ): Promise<ApiResponse<Service>> {
    return this.request<Service>(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  async getServiceCategories(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('/services/categories');
  }

  async getServiceStats(): Promise<ApiResponse<any>> {
    return this.request<any>('/services/stats/summary');
  }

  // Lead methods
  async getLeads(params?: {
    page?: number;
    limit?: number;
    status?: string;
    priority?: string;
    assigned_to?: number;
    search?: string;
    date_from?: string;
    date_to?: string;
  }): Promise<ApiResponse<Lead[]>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.append(key, value.toString());
        }
      });
    }

    const endpoint = `/leads${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return this.request<Lead[]>(endpoint);
  }

  async getLead(id: number): Promise<ApiResponse<Lead>> {
    return this.request<Lead>(`/leads/${id}`);
  }

  async createLead(leadData: Partial<Lead>): Promise<ApiResponse<Lead>> {
    return this.request<Lead>('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  }

  async updateLead(
    id: number,
    leadData: Partial<Lead>
  ): Promise<ApiResponse<Lead>> {
    return this.request<Lead>(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(leadData),
    });
  }

  async updateLeadStatus(
    id: number,
    status: Lead['status']
  ): Promise<ApiResponse<Lead>> {
    return this.request<Lead>(`/leads/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async deleteLead(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/leads/${id}`, {
      method: 'DELETE',
    });
  }

  async getLeadStats(): Promise<ApiResponse<any>> {
    return this.request<any>('/leads/stats');
  }

  async addLeadActivity(
    leadId: number,
    activity: {
      activity_type: string;
      description: string;
      metadata?: any;
    }
  ): Promise<ApiResponse<any>> {
    return this.request<any>(`/leads/${leadId}/activities`, {
      method: 'POST',
      body: JSON.stringify(activity),
    });
  }

  // Utility methods
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('adminToken', token);
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem('adminToken');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  clearCache(): void {
    this.requestCache.clear();
    this.pendingRequests.clear();
  }

  clearCacheForEndpoint(endpoint: string): void {
    const keysToDelete: string[] = [];
    for (const [key] of this.requestCache) {
      if (key.includes(endpoint)) {
        keysToDelete.push(key);
      }
    }
    keysToDelete.forEach(key => {
      this.requestCache.delete(key);
      this.pendingRequests.delete(key);
    });
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export individual API functions for convenience
export const authAPI = {
  login: (email: string, password: string) => apiClient.login(email, password),
  logout: () => apiClient.logout(),
  getCurrentUser: () => apiClient.getCurrentUser(),
  refreshToken: () => apiClient.refreshToken(),
};

export const servicesAPI = {
  getAll: (params?: any) => apiClient.getServices(params),
  getById: (id: number) => apiClient.getService(id),
  create: (data: Partial<Service>) => apiClient.createService(data),
  update: (id: number, data: Partial<Service>) =>
    apiClient.updateService(id, data),
  delete: (id: number) => apiClient.deleteService(id),
  getCategories: () => apiClient.getServiceCategories(),
  getStats: () => apiClient.getServiceStats(),
};

export const leadsAPI = {
  getAll: (params?: any) => apiClient.getLeads(params),
  getById: (id: number) => apiClient.getLead(id),
  create: (data: Partial<Lead>) => apiClient.createLead(data),
  update: (id: number, data: Partial<Lead>) => apiClient.updateLead(id, data),
  updateStatus: (id: number, status: Lead['status']) =>
    apiClient.updateLeadStatus(id, status),
  delete: (id: number) => apiClient.deleteLead(id),
  getStats: () => apiClient.getLeadStats(),
  addActivity: (leadId: number, activity: any) =>
    apiClient.addLeadActivity(leadId, activity),
};

export const analyticsAPI = {
  getOverview: (params?: {
    period?: string;
    start_date?: string;
    end_date?: string;
  }) => apiClient.get('/analytics/overview', { params }),
  getRevenue: (params?: { period?: string; granularity?: string }) =>
    apiClient.get('/analytics/revenue', { params }),
  getTraffic: (params?: { period?: string }) =>
    apiClient.get('/analytics/traffic', { params }),
  getLeads: (params?: { period?: string }) =>
    apiClient.get('/analytics/leads', { params }),
  getServices: () => apiClient.get('/analytics/services'),
  trackEvent: (data: {
    event_type: string;
    page_path?: string;
    session_id?: string;
    metadata?: any;
  }) => apiClient.post('/analytics/track', data),
  exportData: (params: {
    type: 'overview' | 'revenue' | 'traffic' | 'leads' | 'services';
    period?: string;
    format?: 'json' | 'csv';
  }) => apiClient.get('/analytics/export', { params }),
};

// Settings API methods
export const settingsAPI = {
  getAll: () => apiClient.get<any>('/settings'),
  getSection: (section: string) => apiClient.get<any>(`/settings/${section}`),
  updateSection: (section: string, data: any) =>
    apiClient.put<any>(`/settings/${section}`, data),
  uploadAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return apiClient.post<any>('/settings/avatar', formData);
  },
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    apiClient.post<any>('/settings/password', data),
  enable2FA: () => apiClient.post<any>('/settings/2fa/enable', {}),
  disable2FA: () => apiClient.post<any>('/settings/2fa/disable', {}),
  getActiveSessions: () => apiClient.get<any>('/settings/sessions'),
  terminateSession: (sessionId: string) =>
    apiClient.delete<any>(`/settings/sessions/${sessionId}`),
  terminateAllSessions: () =>
    apiClient.post<any>('/settings/sessions/terminate-all', {}),
  getLoginHistory: () => apiClient.get<any>('/settings/login-history'),
  generateApiKey: (name: string) =>
    apiClient.post<any>('/settings/api-keys', { name }),
  revokeApiKey: (keyId: string) =>
    apiClient.delete<any>(`/settings/api-keys/${keyId}`),
  testIntegration: (service: string, config: any) =>
    apiClient.post<any>(`/settings/integrations/${service}/test`, config),
  backupDatabase: () => apiClient.post<any>('/settings/backup', {}),
  exportData: (type: string) => apiClient.get<any>(`/settings/export/${type}`),
  clearCache: () => apiClient.post<any>('/settings/cache/clear', {}),
};

export default apiClient;
