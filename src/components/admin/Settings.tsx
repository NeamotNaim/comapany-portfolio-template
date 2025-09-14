import React, { useState, useEffect } from 'react';
import { settingsAPI } from '../../services/api';

interface SettingsData {
  profile: {
    name: string;
    email: string;
    avatar: string;
    phone: string;
    role: string;
  };
  application: {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    contactPhone: string;
    theme: 'light' | 'dark' | 'auto';
    language: string;
    timezone: string;
  };
  security: {
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    maxLoginAttempts: number;
    passwordExpiry: number;
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    leadAlerts: boolean;
    analyticsReports: boolean;
    systemAlerts: boolean;
    leadThreshold: number;
    revenueThreshold: number;
  };
  system: {
    maintenanceMode: boolean;
    autoBackup: boolean;
    backupFrequency: string;
    cacheEnabled: boolean;
    debugMode: boolean;
  };
  integrations: {
    googleAnalytics: string;
    facebookPixel: string;
    mailchimp: string;
    stripe: string;
    webhookUrl: string;
  };
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [settings, setSettings] = useState<SettingsData>({
    profile: {
      name: '',
      email: '',
      avatar: '',
      phone: '',
      role: 'admin',
    },
    application: {
      siteName: 'Company Portfolio',
      siteDescription: 'Professional software development services',
      contactEmail: 'contact@company.com',
      contactPhone: '+1 (555) 123-4567',
      theme: 'light',
      language: 'en',
      timezone: 'UTC',
    },
    security: {
      twoFactorEnabled: false,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      passwordExpiry: 90,
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      leadAlerts: true,
      analyticsReports: true,
      systemAlerts: true,
      leadThreshold: 10,
      revenueThreshold: 1000,
    },
    system: {
      maintenanceMode: false,
      autoBackup: true,
      backupFrequency: 'daily',
      cacheEnabled: true,
      debugMode: false,
    },
    integrations: {
      googleAnalytics: '',
      facebookPixel: '',
      mailchimp: '',
      stripe: '',
      webhookUrl: '',
    },
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'application', name: 'Application', icon: '⚙️' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'system', name: 'System', icon: '🖥️' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' },
  ];

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      // For now, we'll use default settings
      // In a real app, this would fetch from the API
      console.log('Settings loaded');
    } catch (err) {
      setError('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async (section: keyof SettingsData, data: any) => {
    try {
      setSaving(true);
      setError(null);

      // Update local state
      setSettings(prev => ({
        ...prev,
        [section]: { ...prev[section], ...data },
      }));

      // In a real app, this would save to the API
      console.log('Saving settings:', section, data);

      setSuccess('Settings saved successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    if (type === 'success') {
      setSuccess(message);
      setTimeout(() => setSuccess(null), 3000);
    } else {
      setError(message);
      setTimeout(() => setError(null), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your account, application, and system settings
        </p>
      </div>

      {/* Notifications */}
      {success && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-green-400">✅</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{success}</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-red-400">❌</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'profile' && (
            <ProfileSettings
              data={settings.profile}
              onSave={data => saveSettings('profile', data)}
              saving={saving}
              showNotification={showNotification}
            />
          )}
          {activeTab === 'application' && (
            <ApplicationSettings
              data={settings.application}
              onSave={data => saveSettings('application', data)}
              saving={saving}
            />
          )}
          {activeTab === 'security' && (
            <SecuritySettings
              data={settings.security}
              onSave={data => saveSettings('security', data)}
              saving={saving}
              showNotification={showNotification}
            />
          )}
          {activeTab === 'notifications' && (
            <NotificationSettings
              data={settings.notifications}
              onSave={data => saveSettings('notifications', data)}
              saving={saving}
            />
          )}
          {activeTab === 'system' && (
            <SystemSettings
              data={settings.system}
              onSave={data => saveSettings('system', data)}
              saving={saving}
              showNotification={showNotification}
            />
          )}
          {activeTab === 'integrations' && (
            <IntegrationSettings
              data={settings.integrations}
              onSave={data => saveSettings('integrations', data)}
              saving={saving}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Settings Component
const ProfileSettings: React.FC<{
  data: SettingsData['profile'];
  onSave: (data: any) => void;
  saving: boolean;
  showNotification: (type: 'success' | 'error', message: string) => void;
}> = ({ data, onSave, saving, showNotification }) => {
  const [formData, setFormData] = useState(data);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(data.avatar);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        showNotification('error', 'File size must be less than 5MB');
        return;
      }

      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = e => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      showNotification('error', 'Name is required');
      return;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      showNotification('error', 'Valid email is required');
      return;
    }

    const updatedData = { ...formData };
    if (avatarPreview !== data.avatar) {
      updatedData.avatar = avatarPreview;
    }

    onSave(updatedData);
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!passwordData.currentPassword) {
      showNotification('error', 'Current password is required');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      showNotification('error', 'New password must be at least 8 characters');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showNotification('error', 'Passwords do not match');
      return;
    }

    // In a real app, this would call a password change API
    console.log('Changing password...');
    showNotification('success', 'Password changed successfully');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="space-y-8">
      {/* Profile Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Profile Information
        </h3>
        <form onSubmit={handleProfileSave} className="space-y-6">
          {/* Avatar Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-2xl">👤</span>
                  </div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <label
                  htmlFor="avatar"
                  className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change Photo
                </label>
                <p className="mt-1 text-xs text-gray-500">JPG, PNG up to 5MB</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                disabled
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {saving && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              <span>Save Profile</span>
            </button>
          </div>
        </form>
      </div>

      {/* Change Password */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Change Password
        </h3>
        <form onSubmit={handlePasswordSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password *
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password *
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                required
                minLength={8}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {saving && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              <span>Change Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Application Settings Component
const ApplicationSettings: React.FC<{
  data: SettingsData['application'];
  onSave: (data: any) => void;
  saving: boolean;
}> = ({ data, onSave, saving }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const timezones = [
    'UTC',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney',
    'Pacific/Auckland',
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Application Settings
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Site Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name *
            </label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleInputChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Email *
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Description
          </label>
          <textarea
            name="siteDescription"
            value={formData.siteDescription}
            onChange={handleInputChange}
            rows={3}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Phone
          </label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Theme and Localization */}
        <div className="border-t pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-4">
            Appearance & Localization
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {timezones.map(tz => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {saving && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};

// Security Settings Component
const SecuritySettings: React.FC<{
  data: SettingsData['security'];
  onSave: (data: any) => void;
  saving: boolean;
  showNotification: (type: 'success' | 'error', message: string) => void;
}> = ({ data, onSave, saving, showNotification }) => {
  const [formData, setFormData] = useState(data);
  const [activeSessions] = useState([
    {
      id: 1,
      device: 'Chrome on Windows',
      location: 'New York, US',
      lastActive: '2 minutes ago',
      current: true,
    },
    {
      id: 2,
      device: 'Safari on iPhone',
      location: 'New York, US',
      lastActive: '1 hour ago',
      current: false,
    },
    {
      id: 3,
      device: 'Firefox on Mac',
      location: 'San Francisco, US',
      lastActive: '2 days ago',
      current: false,
    },
  ]);
  const [loginHistory] = useState([
    {
      id: 1,
      timestamp: '2024-01-10 14:30:00',
      ip: '192.168.1.100',
      device: 'Chrome on Windows',
      status: 'Success',
    },
    {
      id: 2,
      timestamp: '2024-01-10 09:15:00',
      ip: '192.168.1.100',
      device: 'Safari on iPhone',
      status: 'Success',
    },
    {
      id: 3,
      timestamp: '2024-01-09 18:45:00',
      ip: '10.0.0.50',
      device: 'Firefox on Mac',
      status: 'Failed',
    },
    {
      id: 4,
      timestamp: '2024-01-09 16:20:00',
      ip: '192.168.1.100',
      device: 'Chrome on Windows',
      status: 'Success',
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleEnable2FA = () => {
    // In a real app, this would initiate 2FA setup
    showNotification(
      'success',
      '2FA setup initiated. Check your email for instructions.'
    );
  };

  const handleDisable2FA = () => {
    // In a real app, this would disable 2FA
    setFormData(prev => ({ ...prev, twoFactorEnabled: false }));
    showNotification('success', '2FA has been disabled.');
  };

  const handleLogoutSession = (sessionId: number) => {
    // In a real app, this would logout the specific session
    showNotification('success', 'Session terminated successfully.');
  };

  const handleLogoutAllSessions = () => {
    // In a real app, this would logout all other sessions
    showNotification('success', 'All other sessions have been terminated.');
  };

  return (
    <div className="space-y-8">
      {/* Two-Factor Authentication */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {formData.twoFactorEnabled ? '2FA Enabled' : '2FA Disabled'}
              </h4>
              <p className="text-sm text-gray-600">
                {formData.twoFactorEnabled
                  ? 'Your account is protected with two-factor authentication'
                  : 'Add an extra layer of security to your account'}
              </p>
            </div>
            <div>
              {formData.twoFactorEnabled ? (
                <button
                  onClick={handleDisable2FA}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm"
                >
                  Disable 2FA
                </button>
              ) : (
                <button
                  onClick={handleEnable2FA}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
                >
                  Enable 2FA
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings Form */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Security Preferences
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                name="sessionTimeout"
                value={formData.sessionTimeout}
                onChange={handleInputChange}
                min="5"
                max="480"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Login Attempts
              </label>
              <input
                type="number"
                name="maxLoginAttempts"
                value={formData.maxLoginAttempts}
                onChange={handleInputChange}
                min="3"
                max="10"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password Expiry (days)
              </label>
              <input
                type="number"
                name="passwordExpiry"
                value={formData.passwordExpiry}
                onChange={handleInputChange}
                min="30"
                max="365"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {saving && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              <span>Save Security Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* Active Sessions */}
      <div className="border-t pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
          <button
            onClick={handleLogoutAllSessions}
            className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 text-sm"
          >
            Logout All Other Sessions
          </button>
        </div>
        <div className="space-y-3">
          {activeSessions.map(session => (
            <div key={session.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      {session.device}
                    </h4>
                    {session.current && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{session.location}</p>
                  <p className="text-xs text-gray-500">
                    Last active: {session.lastActive}
                  </p>
                </div>
                {!session.current && (
                  <button
                    onClick={() => handleLogoutSession(session.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Terminate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Login History */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Login History
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loginHistory.map(entry => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.ip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.device}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        entry.status === 'Success'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {entry.status}
                    </span>
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

// Notification Settings Component
const NotificationSettings: React.FC<{
  data: SettingsData['notifications'];
  onSave: (data: any) => void;
  saving: boolean;
}> = ({ data, onSave, saving }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'number'
            ? parseInt(value)
            : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Notification Preferences
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Notifications */}
        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">
            General Notifications
          </h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Email Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={formData.pushNotifications}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Push Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="systemAlerts"
                checked={formData.systemAlerts}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                System Alerts
              </label>
            </div>
          </div>
        </div>

        {/* Business Notifications */}
        <div className="border-t pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-4">
            Business Notifications
          </h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="leadAlerts"
                checked={formData.leadAlerts}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                New Lead Alerts
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="analyticsReports"
                checked={formData.analyticsReports}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Weekly Analytics Reports
              </label>
            </div>
          </div>
        </div>

        {/* Alert Thresholds */}
        <div className="border-t pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-4">
            Alert Thresholds
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Lead Threshold
              </label>
              <input
                type="number"
                name="leadThreshold"
                value={formData.leadThreshold}
                onChange={handleInputChange}
                min="1"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Get notified when daily leads exceed this number
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Revenue Threshold ($)
              </label>
              <input
                type="number"
                name="revenueThreshold"
                value={formData.revenueThreshold}
                onChange={handleInputChange}
                min="100"
                step="100"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Get notified when daily revenue exceeds this amount
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {saving && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            <span>Save Notification Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};

// System Settings Component
const SystemSettings: React.FC<{
  data: SettingsData['system'];
  onSave: (data: any) => void;
  saving: boolean;
  showNotification: (type: 'success' | 'error', message: string) => void;
}> = ({ data, onSave, saving, showNotification }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleBackupNow = () => {
    showNotification(
      'success',
      'Database backup initiated. You will receive an email when complete.'
    );
  };

  const handleClearCache = () => {
    showNotification('success', 'Cache cleared successfully.');
  };

  const handleExportData = () => {
    showNotification(
      'success',
      'Data export initiated. Download will start shortly.'
    );
  };

  return (
    <div className="space-y-8">
      {/* System Status */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          System Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✅</span>
              <div>
                <h4 className="text-sm font-medium text-green-800">Database</h4>
                <p className="text-xs text-green-600">Connected</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✅</span>
              <div>
                <h4 className="text-sm font-medium text-green-800">API</h4>
                <p className="text-xs text-green-600">Operational</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✅</span>
              <div>
                <h4 className="text-sm font-medium text-green-800">Cache</h4>
                <p className="text-xs text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Settings Form */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          System Configuration
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={formData.maintenanceMode}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Maintenance Mode
              </label>
              <p className="ml-2 text-xs text-gray-500">
                (Temporarily disable public access)
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="autoBackup"
                checked={formData.autoBackup}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Automatic Backups
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="cacheEnabled"
                checked={formData.cacheEnabled}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">
                Enable Caching
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="debugMode"
                checked={formData.debugMode}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-gray-700">Debug Mode</label>
              <p className="ml-2 text-xs text-gray-500">
                (Enable detailed logging)
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Backup Frequency
            </label>
            <select
              name="backupFrequency"
              value={formData.backupFrequency}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {saving && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              <span>Save System Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* System Actions */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          System Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleBackupNow}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            🗄️ Backup Now
          </button>

          <button
            onClick={handleClearCache}
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 text-sm"
          >
            🧹 Clear Cache
          </button>

          <button
            onClick={handleExportData}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
          >
            📥 Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

// Integration Settings Component
const IntegrationSettings: React.FC<{
  data: SettingsData['integrations'];
  onSave: (data: any) => void;
  saving: boolean;
}> = ({ data, onSave, saving }) => {
  const [formData, setFormData] = useState(data);
  const [apiKeys] = useState([
    {
      id: 1,
      name: 'Analytics API',
      key: 'ak_live_...7x9z',
      created: '2024-01-01',
      lastUsed: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'Webhook API',
      key: 'ak_live_...3m8n',
      created: '2024-01-05',
      lastUsed: '1 day ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mobile App',
      key: 'ak_live_...5k2p',
      created: '2024-01-10',
      lastUsed: 'Never',
      status: 'inactive',
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleTestConnection = (service: string) => {
    // In a real app, this would test the API connection
    console.log(`Testing ${service} connection...`);
  };

  const handleGenerateApiKey = () => {
    // In a real app, this would generate a new API key
    console.log('Generating new API key...');
  };

  const handleRevokeApiKey = (keyId: number) => {
    // In a real app, this would revoke the API key
    console.log(`Revoking API key ${keyId}...`);
  };

  return (
    <div className="space-y-8">
      {/* Third-party Integrations */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Third-party Integrations
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Google Analytics ID
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="googleAnalytics"
                  value={formData.googleAnalytics}
                  onChange={handleInputChange}
                  placeholder="GA-XXXXXXXXX-X"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => handleTestConnection('Google Analytics')}
                  className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600 hover:bg-gray-200"
                >
                  Test
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook Pixel ID
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="facebookPixel"
                  value={formData.facebookPixel}
                  onChange={handleInputChange}
                  placeholder="123456789012345"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => handleTestConnection('Facebook Pixel')}
                  className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600 hover:bg-gray-200"
                >
                  Test
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mailchimp API Key
              </label>
              <div className="flex">
                <input
                  type="password"
                  name="mailchimp"
                  value={formData.mailchimp}
                  onChange={handleInputChange}
                  placeholder="Enter API key"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => handleTestConnection('Mailchimp')}
                  className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600 hover:bg-gray-200"
                >
                  Test
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stripe API Key
              </label>
              <div className="flex">
                <input
                  type="password"
                  name="stripe"
                  value={formData.stripe}
                  onChange={handleInputChange}
                  placeholder="sk_live_..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => handleTestConnection('Stripe')}
                  className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600 hover:bg-gray-200"
                >
                  Test
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Webhook URL
            </label>
            <input
              type="url"
              name="webhookUrl"
              value={formData.webhookUrl}
              onChange={handleInputChange}
              placeholder="https://your-app.com/webhook"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              URL to receive webhook notifications for lead updates and system
              events
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {saving && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              <span>Save Integration Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* API Key Management */}
      <div className="border-t pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            API Key Management
          </h3>
          <button
            onClick={handleGenerateApiKey}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 text-sm"
          >
            Generate New Key
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Used
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {apiKeys.map(key => (
                <tr key={key.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {key.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    {key.key}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {key.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {key.lastUsed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        key.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {key.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => handleRevokeApiKey(key.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Revoke
                    </button>
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

export default Settings;
