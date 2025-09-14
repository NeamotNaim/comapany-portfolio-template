import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';
import '../../styles/admin.css';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(email, password);

      console.log('Login response:', response); // Debug log

      if (response.success) {
        console.log('Login successful, navigating to dashboard'); // Debug log
        // Force a page refresh to ensure proper navigation
        window.location.href = '/admin/dashboard';
      } else {
        console.log('Login failed:', response.message); // Debug log
        setError(response.message || 'Login failed');
      }
    } catch (err: any) {
      console.error('Login error:', err); // Debug log
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-layout min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Realistic Underwater Scene */}
      <div className="absolute inset-0 overflow-hidden water-background">
        {/* Enhanced ocean waves with multiple layers */}
        <div className="water-wave wave1"></div>
        <div className="water-wave wave2"></div>
        <div className="water-wave wave3"></div>
        <div className="water-wave wave4"></div>
        <div className="water-wave wave5"></div>

        {/* Diverse animated fish */}
        <div className="fish fish1">🐠</div>
        <div className="fish fish2">🐟</div>
        <div className="fish fish3">🦈</div>
        <div className="fish fish4">🐡</div>
        <div className="fish fish5">🐙</div>
        <div className="fish fish6">🪼</div>
        <div className="fish fish7">🦄</div>

        {/* Realistic bubbles */}
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
        <div className="bubble bubble6"></div>
        <div className="bubble bubble7"></div>
        <div className="bubble bubble8"></div>

        {/* Underwater vegetation */}
        <div className="seaweed seaweed1">🌿</div>
        <div className="seaweed seaweed2">🌿</div>

        {/* Coral reef */}
        <div className="coral coral1">🪸</div>
        <div className="coral coral2">🪸</div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo and header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <span className="text-white font-bold text-xl">VS</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Portal
          </h2>
          <p className="text-gray-600">Sign in to manage your portfolio</p>
        </div>

        {/* Crab-shaped Login form */}
        <div className="crab-container admin-fade-in">
          {/* Crab Eyes */}
          <div className="crab-eyes">
            <div className="crab-eye left-eye">👁️</div>
            <div className="crab-eye right-eye">👁️</div>
          </div>

          {/* Left Claws */}
          <div className="crab-claws left-claws">
            <div className="crab-claw claw-1">🦀</div>
            <div className="crab-claw claw-2">🦀</div>
            <div className="crab-claw claw-3">🦀</div>
          </div>

          {/* Right Claws */}
          <div className="crab-claws right-claws">
            <div className="crab-claw claw-4">🦀</div>
            <div className="crab-claw claw-5">🦀</div>
            <div className="crab-claw claw-6">🦀</div>
          </div>

          {/* Crab Body (Main Login Form) */}
          <div className="crab-body admin-card p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="admin-form-group">
                <label htmlFor="email" className="admin-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="admin-input"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="password" className="admin-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="admin-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 admin-fade-in">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
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
                    <span className="text-red-800 text-sm">{error}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="admin-btn admin-btn-primary w-full py-3 text-base font-semibold"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="admin-loading mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo credentials info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-medium text-blue-900 mb-2">
                  Demo Credentials
                </h4>
                <div className="text-xs text-blue-800 space-y-1">
                  <p>
                    <strong>Email:</strong> admin@company.com
                  </p>
                  <p>
                    <strong>Password:</strong> admin123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Crab Legs */}
          <div className="crab-legs">
            <div className="crab-leg leg-1">🦵</div>
            <div className="crab-leg leg-2">🦵</div>
            <div className="crab-leg leg-3">🦵</div>
            <div className="crab-leg leg-4">🦵</div>
            <div className="crab-leg leg-5">🦵</div>
            <div className="crab-leg leg-6">🦵</div>
            <div className="crab-leg leg-7">🦵</div>
            <div className="crab-leg leg-8">🦵</div>
          </div>

          {/* Crab Shell Pattern */}
          <div className="crab-shell-pattern">
            <div className="shell-line line-1"></div>
            <div className="shell-line line-2"></div>
            <div className="shell-line line-3"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 RecursionSoft. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
