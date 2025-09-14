import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';
import L from 'leaflet';
import { leadsAPI } from '../../services/api';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons for different offices
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        background: linear-gradient(135deg, ${color}, ${color}dd);
        border: 3px solid white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service_interest: '',
    message: '',
    phone: '',
    budget_range: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState('');

  // Scroll detection for animations
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Map form data to API format
      const leadData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        service_interest: formData.service_interest || 'General Inquiry',
        message: formData.message,
        phone: formData.phone || undefined,
        budget_range: formData.budget_range || undefined,
        timeline: formData.timeline || undefined,
      };

      const response = await leadsAPI.create(leadData);

      if (response.success) {
        setShowSuccessMessage(true);
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service_interest: '',
            message: '',
            phone: '',
            budget_range: '',
            timeline: '',
          });
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        setError(
          response.message || 'Failed to send message. Please try again.'
        );
      }
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours",
      contact: 'hello@recursionsoft.com',
      action: 'mailto:hello@recursionsoft.com',
      color: 'blue',
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'green',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant support through our live chat system',
      contact: 'Available 24/7',
      action: '#',
      color: 'purple',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come visit our office for in-person meetings',
      contact: '123 Tech Street, San Francisco, CA',
      action: '#',
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Animated Background Elements */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-100'}`}
      >
        {/* Floating Contact Icons */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="text-4xl">
              {['📧', '📞', '💬', '📍', '🌟', '💡', '🚀', '⭐', '🎯', '💎'][i]}
            </div>
          </div>
        ))}

        {/* Geometric Shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-full h-full rounded-full bg-gradient-to-r ${
                [
                  'from-teal-400/5 to-cyan-400/5',
                  'from-blue-400/5 to-indigo-400/5',
                  'from-cyan-400/5 to-teal-400/5',
                ][i % 3]
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Header Section */}
      <header className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-lg opacity-30"></div>
                <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-teal-700 border border-white/20 shadow-xl">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get In Touch
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900">Let's Start a</span>
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Questions about our services? We'd love to
              hear from you. Let's discuss how we can help bring your ideas to
              life.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  &lt;24h
                </div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Live Chat</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">Global Offices</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      method.color === 'blue'
                        ? 'from-blue-500 to-cyan-500'
                        : method.color === 'green'
                          ? 'from-green-500 to-emerald-500'
                          : method.color === 'purple'
                            ? 'from-purple-500 to-pink-500'
                            : 'from-orange-500 to-red-500'
                    } rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 text-center">
                    <div className="text-5xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div
                      className={`text-sm font-medium mb-4 ${
                        method.color === 'blue'
                          ? 'text-blue-600'
                          : method.color === 'green'
                            ? 'text-green-600'
                            : method.color === 'purple'
                              ? 'text-purple-600'
                              : 'text-orange-600'
                      }`}
                    >
                      {method.contact}
                    </div>
                    <a
                      href={method.action}
                      className={`inline-flex items-center px-4 py-2 rounded-xl text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                        method.color === 'blue'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : method.color === 'green'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                            : method.color === 'purple'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                              : 'bg-gradient-to-r from-orange-500 to-red-500'
                      }`}
                    >
                      Contact Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                {showSuccessMessage ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="p-8 pb-0">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                      </p>
                    </div>
                    <div className="px-8 pb-8">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={e =>
                                handleInputChange('name', e.target.value)
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={e =>
                                handleInputChange('email', e.target.value)
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={e =>
                              handleInputChange('company', e.target.value)
                            }
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            placeholder="Your company name"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={e =>
                                handleInputChange('phone', e.target.value)
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Service Interest{' '}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              value={formData.service_interest}
                              onChange={e =>
                                handleInputChange(
                                  'service_interest',
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                              required
                            >
                              <option value="">Select a service</option>
                              <option value="AI & Machine Learning">
                                AI & Machine Learning
                              </option>
                              <option value="Custom Software Development">
                                Custom Software Development
                              </option>
                              <option value="Web Development">
                                Web Development
                              </option>
                              <option value="Mobile App Development">
                                Mobile App Development
                              </option>
                              <option value="Blockchain Solutions">
                                Blockchain Solutions
                              </option>
                              <option value="Cloud Infrastructure">
                                Cloud Infrastructure
                              </option>
                              <option value="UI/UX Design">UI/UX Design</option>
                              <option value="Cybersecurity & IT Consulting">
                                Cybersecurity & IT Consulting
                              </option>
                              <option value="General Inquiry">
                                General Inquiry
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Budget Range
                            </label>
                            <select
                              value={formData.budget_range}
                              onChange={e =>
                                handleInputChange(
                                  'budget_range',
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            >
                              <option value="">Select budget range</option>
                              <option value="Under $10K">Under $10K</option>
                              <option value="$10K - $25K">$10K - $25K</option>
                              <option value="$25K - $50K">$25K - $50K</option>
                              <option value="$50K - $100K">$50K - $100K</option>
                              <option value="$100K+">$100K+</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Timeline
                            </label>
                            <select
                              value={formData.timeline}
                              onChange={e =>
                                handleInputChange('timeline', e.target.value)
                              }
                              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            >
                              <option value="">Select timeline</option>
                              <option value="ASAP">ASAP</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="3-6 months">3-6 months</option>
                              <option value="6+ months">6+ months</option>
                              <option value="Just exploring">
                                Just exploring
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={5}
                            value={formData.message}
                            onChange={e =>
                              handleInputChange('message', e.target.value)
                            }
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                            placeholder="Tell us about your project or inquiry..."
                            required
                          ></textarea>
                        </div>

                        {/* Show error message if any */}
                        {error && (
                          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
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
                              <span className="text-red-800 text-sm">
                                {error}
                              </span>
                            </div>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
              {/* FAQ Section - Moved to Left */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'How quickly do you respond to inquiries?',
                      answer:
                        'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
                    },
                    {
                      question: 'Do you offer free consultations?',
                      answer:
                        'Yes! We offer free 30-minute consultations to discuss your project needs and how we can help you achieve your goals.',
                    },
                    {
                      question:
                        'What information should I include in my message?',
                      answer:
                        'Please include details about your project, timeline, budget range, and any specific requirements. The more information you provide, the better we can assist you.',
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      city: 'San Francisco',
                      address: '123 Tech Street, Suite 100',
                      zipCode: 'San Francisco, CA 94105',
                      phone: '+1 (555) 123-4567',
                      hours: 'Mon-Fri: 9AM-6PM PST',
                      flag: '🇺🇸',
                    },
                    {
                      city: 'New York',
                      address: '456 Innovation Ave, Floor 15',
                      zipCode: 'New York, NY 10001',
                      phone: '+1 (555) 987-6543',
                      hours: 'Mon-Fri: 9AM-6PM EST',
                      flag: '🇺🇸',
                    },
                    {
                      city: 'London',
                      address: '789 Digital Lane, Level 8',
                      zipCode: 'London, UK EC1A 1BB',
                      phone: '+44 20 1234 5678',
                      hours: 'Mon-Fri: 9AM-5PM GMT',
                      flag: '🇬🇧',
                    },
                  ].map((office, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl"
                    >
                      <div className="text-2xl">{office.flag}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {office.city}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          {office.address}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          {office.zipCode}
                        </p>
                        <p className="text-teal-600 text-sm font-medium mb-1">
                          {office.phone}
                        </p>
                        <p className="text-gray-500 text-xs">{office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Real Map */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us on the Map
                </h3>
                <div className="h-80 rounded-xl overflow-hidden shadow-lg">
                  <MapContainer
                    center={[40.7128, -74.006]} // Centered on New York
                    zoom={2}
                    style={{ height: '100%', width: '100%' }}
                    className="rounded-xl"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* San Francisco Marker */}
                    <Marker
                      position={[37.7749, -122.4194]}
                      icon={createCustomIcon('#ef4444')}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            🇺🇸 San Francisco Office
                          </h4>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              📍 123 Tech Street, Suite 100
                            </p>
                            <p className="text-gray-700">
                              San Francisco, CA 94105
                            </p>
                            <p className="text-teal-600 font-medium">
                              📞 +1 (555) 123-4567
                            </p>
                            <p className="text-gray-500 text-xs">
                              ⏰ Mon-Fri: 9AM-6PM PST
                            </p>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <a
                              href="https://maps.google.com/?q=37.7749,-122.4194"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transition-colors"
                            >
                              Get Directions
                            </a>
                            <button className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors">
                              Schedule Visit
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>

                    {/* New York Marker */}
                    <Marker
                      position={[40.7128, -74.006]}
                      icon={createCustomIcon('#3b82f6')}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            🇺🇸 New York Office
                          </h4>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              📍 456 Innovation Ave, Floor 15
                            </p>
                            <p className="text-gray-700">New York, NY 10001</p>
                            <p className="text-teal-600 font-medium">
                              📞 +1 (555) 987-6543
                            </p>
                            <p className="text-gray-500 text-xs">
                              ⏰ Mon-Fri: 9AM-6PM EST
                            </p>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <a
                              href="https://maps.google.com/?q=40.7128,-74.0060"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transition-colors"
                            >
                              Get Directions
                            </a>
                            <button className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors">
                              Schedule Visit
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>

                    {/* London Marker */}
                    <Marker
                      position={[51.5074, -0.1278]}
                      icon={createCustomIcon('#10b981')}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            🇬🇧 London Office
                          </h4>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              📍 789 Digital Lane, Level 8
                            </p>
                            <p className="text-gray-700">London, UK EC1A 1BB</p>
                            <p className="text-teal-600 font-medium">
                              📞 +44 20 1234 5678
                            </p>
                            <p className="text-gray-500 text-xs">
                              ⏰ Mon-Fri: 9AM-5PM GMT
                            </p>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <a
                              href="https://maps.google.com/?q=51.5074,-0.1278"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transition-colors"
                            >
                              Get Directions
                            </a>
                            <button className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors">
                              Schedule Visit
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                {/* Map Footer */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Click on any marker to see office details and get directions
                  </p>
                  <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        San Francisco
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">New York</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">London</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us Section - Moved to Right */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4">
                  {[
                    {
                      name: 'LinkedIn',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      color: 'bg-blue-700 hover:bg-blue-800 text-white',
                      url: 'https://linkedin.com/company/recursionsoft',
                    },
                    {
                      name: 'Facebook',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      ),
                      color: 'bg-blue-600 hover:bg-blue-700 text-white',
                      url: 'https://facebook.com/recursionsoft',
                    },
                    {
                      name: 'Twitter',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      ),
                      color: 'bg-blue-500 hover:bg-blue-600 text-white',
                      url: 'https://twitter.com/recursionsoft',
                    },
                    {
                      name: 'GitHub',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                      color: 'bg-gray-800 hover:bg-gray-900 text-white',
                      url: 'https://github.com/recursionsoft',
                    },
                    {
                      name: 'Medium',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                      ),
                      color: 'bg-gray-900 hover:bg-black text-white',
                      url: 'https://medium.com/@recursionsoft',
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">
                  Stay updated with our latest news, projects, and insights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and see how we can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@recursionsoft.com"
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Send Email
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all hover:-translate-y-0.5"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
