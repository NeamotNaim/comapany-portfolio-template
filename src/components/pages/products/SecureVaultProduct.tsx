import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SecureVaultProduct: React.FC = () => {
  const [activeShield, setActiveShield] = useState(0);
  const [securityMetrics, setSecurityMetrics] = useState({
    threats: 0,
    uptime: 0,
    encryption: 0,
  });
  const [threatDetections, setThreatDetections] = useState<
    Array<{ id: number; type: string; status: string; time: string }>
  >([]);
  const [isScanning, setIsScanning] = useState(true);
  const [matrixRain, setMatrixRain] = useState<
    Array<{ id: number; x: number; speed: number; chars: string[] }>
  >([]);

  // Animate security stats on mount
  useEffect(() => {
    const targets = { threats: 50000, uptime: 99.99, encryption: 256 };
    const duration = 3000;
    const steps = 60;
    const increment = {
      threats: targets.threats / steps,
      uptime: targets.uptime / steps,
      encryption: targets.encryption / steps,
    };

    const current = { threats: 0, uptime: 0, encryption: 0 };
    const timer = setInterval(() => {
      current.threats = Math.min(
        current.threats + increment.threats,
        targets.threats
      );
      current.uptime = Math.min(
        current.uptime + increment.uptime,
        targets.uptime
      );
      current.encryption = Math.min(
        current.encryption + increment.encryption,
        targets.encryption
      );

      setSecurityMetrics({
        threats: Math.floor(current.threats),
        uptime: Math.round(current.uptime * 100) / 100,
        encryption: Math.floor(current.encryption),
      });

      if (current.threats >= targets.threats) {
        clearInterval(timer);
        setIsScanning(false);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Generate matrix rain effect
  useEffect(() => {
    const chars = [
      '0',
      '1',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      '!',
      '@',
      '#',
      '$',
      '%',
    ];
    const columns = 20;

    const generateMatrix = () => {
      const newMatrix = Array.from({ length: columns }, (_, i) => ({
        id: i,
        x: (i * 100) / columns,
        speed: 1 + Math.random() * 3,
        chars: Array.from(
          { length: 10 },
          () => chars[Math.floor(Math.random() * chars.length)]
        ),
      }));
      setMatrixRain(newMatrix);
    };

    generateMatrix();
    const interval = setInterval(generateMatrix, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generate threat detections
  useEffect(() => {
    const threatTypes = [
      'Malware',
      'Phishing',
      'DDoS',
      'Intrusion',
      'Ransomware',
    ];
    const statuses = ['Blocked', 'Quarantined', 'Neutralized'];

    const generateThreat = () => {
      const newThreat = {
        id: Date.now(),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        time: new Date().toLocaleTimeString(),
      };

      setThreatDetections(prev => [newThreat, ...prev.slice(0, 4)]);
    };

    const interval = setInterval(generateThreat, 2000);
    return () => clearInterval(interval);
  }, []);

  const securityLayers = [
    { name: 'Firewall', icon: '🛡️', status: 'Active', strength: 98 },
    { name: 'Encryption', icon: '🔐', status: 'Secured', strength: 100 },
    { name: 'Monitoring', icon: '👁️', status: 'Watching', strength: 95 },
    { name: 'Authentication', icon: '🔑', status: 'Verified', strength: 99 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Matrix Rain Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {matrixRain.map(column => (
            <div
              key={column.id}
              className="absolute top-0 text-green-400 font-mono text-xs animate-matrix-fall"
              style={{
                left: `${column.x}%`,
                animationDuration: `${column.speed}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {column.chars.map((char, i) => (
                <div
                  key={i}
                  className="opacity-80"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Animated Security Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className="border border-green-500/20 animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400/20 animate-security-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            >
              {['🔒', '🛡️', '🔐', '⚡', '🔑'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm font-medium text-green-300">
                  Enterprise Security Suite
                </span>
              </div>

              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">SecureVault</span>
                <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Fortress Protection
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Military-grade cybersecurity that adapts, learns, and evolves.
                Protect your digital assets with AI-powered threat detection,
                zero-trust architecture, and quantum-resistant encryption.
              </p>

              {/* Animated Security Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-number-count">
                    {securityMetrics.threats.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-400">Threats Blocked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-number-count">
                    {securityMetrics.uptime}%
                  </div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-number-count">
                    AES-{securityMetrics.encryption}
                  </div>
                  <div className="text-sm text-gray-400">Encryption</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Secure Your Assets
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="group border-2 border-green-500/30 bg-green-500/10 text-green-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-500/20 transition-all duration-300 backdrop-blur-sm">
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
                    Security Audit
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Security Dashboard */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse-glow"></div>

                {/* Main Security Dashboard */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      Security Command Center
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${isScanning ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}
                      ></div>
                      <span className="text-sm text-gray-400">
                        {isScanning ? 'Scanning...' : 'Secure'}
                      </span>
                    </div>
                  </div>

                  {/* Security Layers */}
                  <div className="space-y-4 mb-8">
                    {securityLayers.map((layer, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                          <span className="text-lg">{layer.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-white">
                              {layer.name}
                            </span>
                            <span className="text-sm text-green-400">
                              {layer.status}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${layer.strength}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-green-400 ml-4">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Threat Detection Feed */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-white mb-4">
                      Recent Threat Detections
                    </h4>
                    {threatDetections.map(threat => (
                      <div
                        key={threat.id}
                        className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/30 animate-slideIn"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {threat.type} Attack
                            </div>
                            <div className="text-xs text-gray-400">
                              {threat.time}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-green-400 font-medium bg-green-500/20 px-2 py-1 rounded">
                          {threat.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Security Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl animate-security-pulse">
                  <div className="flex items-center space-x-3 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">Protected</div>
                      <div className="text-xs opacity-90">24/7 Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Threat Detection */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan-line"></div>
          <div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Threat Detection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced machine learning algorithms that learn, adapt, and evolve
              to protect against emerging cyber threats in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* AI Threat Analysis */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg animate-shield-glow">
                  🤖
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Neural Threat Analysis
                  </h3>
                  <p className="text-lg text-green-400 font-medium">
                    99.7% Detection Accuracy
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Our AI engine processes over 100 million threat indicators
                daily, using deep learning to identify zero-day attacks,
                advanced persistent threats, and sophisticated malware before
                they can cause damage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time behavioral analysis and anomaly detection
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Zero-day exploit prediction and prevention
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Automated incident response and containment
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continuous learning from global threat intelligence
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 border border-red-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">
                  AI Performance Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">99.7%</div>
                    <div className="text-sm text-gray-400">Detection Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">
                      &lt;1ms
                    </div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">100M+</div>
                    <div className="text-sm text-gray-400">Daily Scans</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-500/30">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-white">
                    AI Threat Radar
                  </h4>
                  <div className="text-sm text-gray-400">
                    Neural Network Active
                  </div>
                </div>

                {/* Radar Visualization */}
                <div className="relative h-64 mb-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl overflow-hidden">
                  {/* Radar Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-green-500/30 rounded-full animate-ping"></div>
                    <div className="absolute w-32 h-32 border-2 border-green-500/50 rounded-full animate-pulse"></div>
                    <div className="absolute w-16 h-16 border-2 border-green-500/70 rounded-full"></div>
                  </div>

                  {/* Radar Sweep */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 relative">
                      <div
                        className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-green-400 to-transparent origin-bottom animate-spin"
                        style={{ animationDuration: '3s' }}
                      ></div>
                    </div>
                  </div>

                  {/* Threat Indicators */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{
                        left: `${30 + Math.random() * 40}%`,
                        top: `${30 + Math.random() * 40}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* AI Analysis Results */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">
                        Network Perimeter: Secure
                      </span>
                    </div>
                    <span className="text-xs text-green-400">✓ Clear</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">
                        Suspicious Activity: Monitoring
                      </span>
                    </div>
                    <span className="text-xs text-yellow-400">⚠ Watch</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">
                        Malware Detected: Quarantined
                      </span>
                    </div>
                    <span className="text-xs text-red-400">🛡️ Blocked</span>
                  </div>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-3 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold">AI Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Trust Architecture */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Zero-Trust Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Never trust, always verify. Our zero-trust model ensures every
              user, device, and connection is authenticated and authorized
              before accessing your resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Identity Verification */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-shield-glow">
                    🔐
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Multi-Factor Authentication
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Biometric + Token + Behavioral Analysis
                  </p>
                </div>

                {/* Authentication Flow */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center p-3 bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Identity Verified
                      </div>
                      <div className="text-xs text-gray-400">
                        Biometric scan complete
                      </div>
                    </div>
                    <div className="text-green-400">✓</div>
                  </div>

                  <div className="flex items-center p-3 bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">📱</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Device Authenticated
                      </div>
                      <div className="text-xs text-gray-400">
                        Hardware token validated
                      </div>
                    </div>
                    <div className="text-green-400">✓</div>
                  </div>

                  <div className="flex items-center p-3 bg-blue-900/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">🧠</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Behavior Analyzed
                      </div>
                      <div className="text-xs text-gray-400">
                        Pattern recognition passed
                      </div>
                    </div>
                    <div className="text-green-400">✓</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.99%</div>
                  <div className="text-xs text-gray-400">
                    Authentication Accuracy
                  </div>
                </div>
              </div>
            </div>

            {/* Network Segmentation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-shield-glow">
                    🌐
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Micro-Segmentation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Isolated Network Zones
                  </p>
                </div>

                {/* Network Visualization */}
                <div className="relative h-32 mb-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl overflow-hidden">
                  {/* Network Nodes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-green-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient
                        id="networkGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                        <stop
                          offset="100%"
                          stopColor="rgba(16, 185, 129, 0.6)"
                        />
                      </linearGradient>
                    </defs>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <line
                        key={i}
                        x1={`${20 + (i % 3) * 30}%`}
                        y1={`${30 + Math.floor(i / 3) * 40}%`}
                        x2={`${50 + (i % 2) * 20}%`}
                        y2={`${50 + (i % 2) * 20}%`}
                        stroke="url(#networkGradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    ))}
                  </svg>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-xs text-gray-400">Lateral Movement</div>
                </div>
              </div>
            </div>

            {/* Continuous Monitoring */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-shield-glow">
                    👁️
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    24/7 Monitoring
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Real-time Threat Intelligence
                  </p>
                </div>

                {/* Monitoring Dashboard */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-2 bg-purple-900/20 rounded-lg">
                    <span className="text-sm text-white">Active Sessions</span>
                    <span className="text-sm text-purple-400 font-bold">
                      2,847
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-900/20 rounded-lg">
                    <span className="text-sm text-white">Events/Second</span>
                    <span className="text-sm text-purple-400 font-bold">
                      15.2K
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-900/20 rounded-lg">
                    <span className="text-sm text-white">Risk Score</span>
                    <span className="text-sm text-green-400 font-bold">
                      Low
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-gray-400">
                    Network Visibility
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Fortify Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join 25,000+ organizations who trust SecureVault to protect their
              most valuable data and systems from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 text-white px-12 py-5 text-lg font-bold hover:from-green-400 hover:to-cyan-400 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Secure Your Enterprise
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-green-500/30 bg-green-500/10 px-12 py-5 text-lg font-bold text-green-400 hover:bg-green-500/20 transition-all duration-200 backdrop-blur-sm"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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

export default SecureVaultProduct;
