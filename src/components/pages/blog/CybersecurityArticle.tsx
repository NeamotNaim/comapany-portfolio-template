import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CybersecurityArticle = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-600 transition-all duration-300 shadow-lg"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <nav className="fixed top-4 left-4 z-40">
        <Link
          to="/blog"
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-red-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </nav>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Security Shield Pattern */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-sm"></div>
          </div>
        ))}

        {/* Security Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-red-300/30 text-lg animate-code-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {
              ['🔒', '🛡️', '🔐', '🔑', '⚡', '🚨', '🔍', '🛠️'][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      <header className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cybersecurity Best Practices for 2024
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                  alt="Sarah Chen"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm">Security Engineer</div>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-300"></div>

              <div className="text-sm">
                <div>July 10, 2024</div>
                <div>12 min read</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop"
                alt="Cybersecurity Best Practices"
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl blur-3xl"></div>
            <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="max-w-4xl mx-auto">
                {/* Introduction Section */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      The Evolving Cybersecurity Landscape
                    </span>
                  </h2>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-10 border border-red-100 max-w-4xl mx-auto">
                    <p className="text-xl leading-relaxed text-gray-700 text-center">
                      As cyber threats become more sophisticated, organizations
                      must adopt comprehensive security strategies that go
                      beyond traditional perimeter defense. In 2024, the focus
                      has shifted to zero-trust architectures, AI-powered threat
                      detection, and proactive security measures.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-600 mt-8 max-w-3xl mx-auto text-center">
                    The cybersecurity landscape is constantly evolving, with new
                    threats emerging daily. From ransomware attacks targeting
                    critical infrastructure to sophisticated phishing campaigns,
                    organizations face an unprecedented level of cyber risk.
                  </p>
                </div>

                <h2>Essential Security Practices</h2>

                <h3>1. Zero-Trust Architecture</h3>
                <p>
                  Implement a "never trust, always verify" approach where every
                  user and device must be authenticated and authorized before
                  accessing resources, regardless of their location.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
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
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Critical:</strong> Traditional perimeter-based
                        security is no longer sufficient. Zero-trust assumes
                        that threats exist both inside and outside the network.
                      </p>
                    </div>
                  </div>
                </div>

                <h3>2. Multi-Factor Authentication (MFA)</h3>
                <p>
                  Deploy MFA across all systems and applications to add an extra
                  layer of security beyond passwords. Use hardware tokens,
                  biometrics, or authenticator apps.
                </p>

                <h3>3. Regular Security Audits</h3>
                <p>
                  Conduct comprehensive security assessments to identify
                  vulnerabilities and ensure compliance with industry standards
                  like SOC 2, ISO 27001, and GDPR.
                </p>

                <h3>4. Employee Training</h3>
                <p>
                  Educate staff about phishing attacks, social engineering, and
                  other common threat vectors. Human error remains one of the
                  biggest security risks.
                </p>

                <h2>DevSecOps Integration</h2>
                <p>
                  Security should be integrated into every stage of the
                  development lifecycle, not treated as an afterthought:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Development Phase
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Secure coding practices</li>
                      <li>• Static code analysis</li>
                      <li>• Dependency scanning</li>
                      <li>• Code reviews with security focus</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Deployment Phase
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Container security scanning</li>
                      <li>• Infrastructure as code security</li>
                      <li>• Runtime protection (RASP)</li>
                      <li>• Continuous monitoring</li>
                    </ul>
                  </div>
                </div>

                <h2>Threat Detection and Response</h2>
                <p>
                  Modern threat detection requires a combination of automated
                  tools and human expertise:
                </p>

                <h3>AI-Powered Security</h3>
                <ul>
                  <li>Machine learning algorithms for anomaly detection</li>
                  <li>Behavioral analysis to identify insider threats</li>
                  <li>Automated incident response and containment</li>
                  <li>Predictive threat intelligence</li>
                </ul>

                <h3>Security Information and Event Management (SIEM)</h3>
                <ul>
                  <li>Centralized log collection and analysis</li>
                  <li>Real-time threat detection and alerting</li>
                  <li>Compliance reporting and audit trails</li>
                  <li>Integration with threat intelligence feeds</li>
                </ul>

                <h2>Cloud Security Considerations</h2>
                <p>
                  As organizations migrate to the cloud, new security challenges
                  emerge:
                </p>

                <h3>Shared Responsibility Model</h3>
                <p>
                  Understand what security responsibilities belong to the cloud
                  provider versus your organization. This varies by service
                  model (IaaS, PaaS, SaaS).
                </p>

                <h3>Cloud-Native Security Tools</h3>
                <ul>
                  <li>Cloud Security Posture Management (CSPM)</li>
                  <li>Cloud Workload Protection Platforms (CWPP)</li>
                  <li>Container and Kubernetes security</li>
                  <li>Serverless security monitoring</li>
                </ul>

                <h2>Incident Response Planning</h2>
                <p>
                  Develop and regularly test incident response procedures to
                  minimize the impact of security breaches:
                </p>

                <h3>Response Team Structure</h3>
                <ul>
                  <li>
                    <strong>Incident Commander:</strong> Overall response
                    coordination
                  </li>
                  <li>
                    <strong>Technical Lead:</strong> Technical investigation and
                    remediation
                  </li>
                  <li>
                    <strong>Communications Lead:</strong> Internal and external
                    communications
                  </li>
                  <li>
                    <strong>Legal/Compliance:</strong> Regulatory and legal
                    considerations
                  </li>
                </ul>

                <h3>Response Phases</h3>
                <div className="bg-gray-900 rounded-lg p-6 my-8">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`1. Preparation    → Policies, procedures, training
2. Identification → Detect and analyze incidents  
3. Containment    → Limit damage and prevent spread
4. Eradication    → Remove threats from environment
5. Recovery       → Restore systems and operations
6. Lessons Learned → Post-incident analysis and improvement`}</code>
                  </pre>
                </div>

                <h2>Compliance and Regulations</h2>
                <p>Stay current with evolving regulatory requirements:</p>

                <ul>
                  <li>
                    <strong>GDPR:</strong> European data protection regulation
                  </li>
                  <li>
                    <strong>CCPA:</strong> California Consumer Privacy Act
                  </li>
                  <li>
                    <strong>SOX:</strong> Sarbanes-Oxley Act for financial
                    reporting
                  </li>
                  <li>
                    <strong>HIPAA:</strong> Healthcare data protection
                  </li>
                  <li>
                    <strong>PCI DSS:</strong> Payment card industry standards
                  </li>
                </ul>

                <h2>Emerging Threats and Trends</h2>

                <h3>AI-Powered Attacks</h3>
                <p>
                  Cybercriminals are using AI to create more sophisticated
                  attacks, including deepfake social engineering and automated
                  vulnerability discovery.
                </p>

                <h3>Supply Chain Attacks</h3>
                <p>
                  Attacks targeting software supply chains have increased
                  dramatically. Implement software bill of materials (SBOM) and
                  vendor risk assessments.
                </p>

                <h3>Quantum Computing Threats</h3>
                <p>
                  Prepare for the eventual threat quantum computing poses to
                  current encryption methods by implementing quantum-resistant
                  cryptography.
                </p>

                <h2>Security Metrics and KPIs</h2>
                <p>Measure security effectiveness with key metrics:</p>

                <ul>
                  <li>Mean Time to Detection (MTTD)</li>
                  <li>Mean Time to Response (MTTR)</li>
                  <li>Number of security incidents</li>
                  <li>Vulnerability remediation time</li>
                  <li>Security awareness training completion rates</li>
                  <li>Compliance audit results</li>
                </ul>

                <h2>Building a Security Culture</h2>
                <p>
                  Security is everyone's responsibility. Foster a culture where:
                </p>

                <ul>
                  <li>Security is considered in all business decisions</li>
                  <li>
                    Employees feel comfortable reporting security concerns
                  </li>
                  <li>Regular security training is provided and valued</li>
                  <li>
                    Security teams collaborate closely with other departments
                  </li>
                  <li>
                    Lessons learned from incidents are shared organization-wide
                  </li>
                </ul>

                <h2>Looking Ahead</h2>
                <p>
                  The future of cybersecurity will be shaped by artificial
                  intelligence, quantum computing, and the continued expansion
                  of IoT devices. Organizations must stay agile and continuously
                  adapt their security strategies.
                </p>

                <p>
                  Success in cybersecurity requires a holistic approach that
                  combines technology, processes, and people. By implementing
                  these best practices and staying informed about emerging
                  threats, organizations can build resilient defenses against
                  cyber attacks.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 my-12 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Strengthen Your Security Posture
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Implement these cybersecurity best practices to protect your
                    organization from evolving threats.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog"
                      className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      More Security Articles
                    </Link>
                    <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Share Article
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                alt="Sarah Chen"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sarah Chen
                </h3>
                <p className="text-gray-600 mb-4">
                  Security Engineer at RecursionSoft with 10+ years of
                  experience in cybersecurity and DevSecOps. Specialized in
                  threat detection, incident response, and building secure
                  development practices.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityArticle;
