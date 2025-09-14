import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('#footer');
    if (footerElement) observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: `scale(${isVisible ? 1 : 0})`,
          }}
        ></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite',
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
          }
          50% {
            box-shadow:
              0 0 40px rgba(20, 184, 166, 0.8),
              0 0 60px rgba(20, 184, 166, 0.3);
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center space-x-3 mb-4 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                RecursionSoft
              </span>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming ideas into exceptional digital experiences with
              innovative software solutions.
            </p>

            {/* Social Media - Compact */}
            <div className="flex space-x-3">
              {[
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com/company/recursionsoft',
                  icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                  color: 'from-blue-600 to-blue-700',
                },
                {
                  name: 'Twitter',
                  href: 'https://twitter.com/recursionsoft',
                  icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
                  color: 'from-sky-500 to-blue-500',
                },
                {
                  name: 'GitHub',
                  href: 'https://github.com/recursionsoft',
                  icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                  color: 'from-gray-700 to-gray-800',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={social.name}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-r ${social.color} p-2 rounded-lg hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              <span className="relative z-10">Services</span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
            </h3>
            <ul className="space-y-2">
              {[
                {
                  name: 'Web Application Development',
                  to: '/services/web-app',
                },
                { name: 'Mobile App Development', to: '/services/mobile-app' },
                { name: 'AI & Machine Learning', to: '/services/ai-ml' },
                { name: 'Blockchain Solutions', to: '/services/blockchain' },
                { name: 'Cloud & DevOps', to: '/services/cloud-devops' },
                { name: 'UI/UX Design', to: '/services/ui-ux' },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              <span className="relative z-10">Products</span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400"></div>
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'NovaBank Platform', to: '/products/novabank' },
                { name: 'FitTrack App', to: '/products/fittrack' },
                { name: 'ShopEase E-commerce', to: '/products/shopease' },
                { name: 'Budget Management', to: '/products' },
                { name: 'Library System', to: '/products' },
                { name: 'HR Platform', to: '/products' },
              ].map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.to}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              <span className="relative z-10">Company</span>
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                { name: 'About Us', to: '/about' },
                { name: 'Careers', to: '/career' },
                { name: 'Case Studies', to: '/case-studies' },
                { name: 'Blog', to: '/blog' },
                { name: 'Contact', to: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info - Compact */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Get in Touch
              </h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>hello@recursionsoft.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024{' '}
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text font-semibold">
                  RecursionSoft Software Solutions
                </span>
                . All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
                <span>Crafted with</span>
                <span className="text-red-400">❤️</span>
                <span>in New York</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { name: 'Privacy Policy', to: '/privacy' },
                { name: 'Terms of Service', to: '/terms' },
                { name: 'Cookie Policy', to: '/cookies' },
                { name: 'Sitemap', to: '/sitemap' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Version Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">
                  Online
                </span>
              </div>
              <div className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/30 rounded-full">
                <span className="text-teal-400 text-xs font-medium">
                  v2.1.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
