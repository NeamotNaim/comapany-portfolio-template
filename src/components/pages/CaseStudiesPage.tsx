import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'NovaBank Digital Platform',
    client: 'NovaBank Financial Services',
    industry: 'FinTech',
    description: 'A secure, scalable digital banking platform with real-time analytics and AI-powered fraud detection that transformed traditional banking operations.',
    results: [
      '300% faster transaction processing',
      '99.9% system uptime achieved',
      '85% reduction in fraud incidents',
      '50% operational cost savings'
    ],
    image: 'https://picsum.photos/seed/novabank-case/600/400',
    duration: '18 months',
    teamSize: '12 developers',
    link: '/case-studies/novabank',
    tags: ['Fintech', 'Cloud Architecture', 'Security'],
    color: 'blue'
  },
  {
    id: 2,
    title: 'FitTrack Mobile App',
    client: 'FitTrack Health Technologies',
    industry: 'Health & Fitness',
    description: 'Cross-platform fitness application with wearable integration, personalized workout plans, and social features that revolutionized personal fitness tracking.',
    results: [
      '500K+ active users acquired',
      '40% higher user engagement',
      '4.8★ app store rating',
      '15+ device integrations'
    ],
    image: 'https://picsum.photos/seed/fittrack-case/600/400',
    duration: '12 months',
    teamSize: '8 developers',
    link: '/case-studies/fittrack',
    tags: ['Mobile', 'IoT', 'Machine Learning'],
    color: 'green'
  },
  {
    id: 3,
    title: 'ShopEase E-commerce Platform',
    client: 'ShopEase Retail Group',
    industry: 'E-commerce',
    description: 'Enterprise e-commerce solution with advanced inventory management, real-time analytics, and omnichannel capabilities that drove exceptional business growth.',
    results: [
      '65% increase in conversions',
      '200% traffic growth achieved',
      '45% faster page load times',
      '30% operational cost reduction'
    ],
    image: 'https://picsum.photos/seed/shopease-case/600/400',
    duration: '15 months',
    teamSize: '10 developers',
    link: '/case-studies/shopease',
    tags: ['E-commerce', 'Analytics', 'Microservices'],
    color: 'purple'
  },
  {
    id: 4,
    title: 'GovPortal Modernization',
    client: 'Department of Digital Services',
    industry: 'Government',
    description: 'Modernized legacy government portal serving 2 million citizens with enhanced security, improved user experience, and streamlined digital services.',
    results: [
      '60% faster service processing',
      '85% citizen satisfaction rate',
      'Zero security breaches',
      '40% operational cost reduction'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    image: 'https://picsum.photos/seed/govportal-case/600/400',
    duration: '12 months',
    teamSize: '12 developers',
    link: '/case-studies/govportal',
    tags: ['Government', 'Security', 'Modernization'],
    color: 'indigo'
  },
  {
    id: 5,
    title: 'MedTech Management System',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    description: 'HIPAA-compliant healthcare management system for clinic networks with patient management, scheduling, and electronic health records.',
    results: [
      'HIPAA compliance achieved',
      '50% faster appointment scheduling',
      '90% improved data accuracy',
      '20+ clinic locations supported'
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'AWS'],
    image: 'https://picsum.photos/seed/medtech-case/600/400',
    duration: '14 months',
    teamSize: '15 developers',
    link: '/case-studies/medtech',
    tags: ['Healthcare', 'HIPAA', 'Security'],
    color: 'teal'
  },
  {
    id: 6,
    title: 'EduTech Learning Platform',
    client: 'EduTech Innovations',
    industry: 'Education',
    description: 'Interactive K-12 learning platform with personalized learning paths, real-time progress tracking, and collaborative tools for enhanced education.',
    results: [
      '75% improved student engagement',
      '30% reduced administrative workload',
      '10,000+ students supported',
      '95% teacher satisfaction rate'
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'WebRTC', 'MongoDB'],
    image: 'https://picsum.photos/seed/edutech-case/600/400',
    duration: '16 months',
    teamSize: '18 developers',
    link: '/case-studies/edutech',
    tags: ['Education', 'AI', 'Collaboration'],
    color: 'orange'
  },
  {
    id: 7,
    title: 'LogiFlow Supply Chain Platform',
    client: 'LogiFlow Logistics',
    industry: 'Logistics',
    description: 'End-to-end supply chain management platform with real-time tracking, predictive analytics, and automated inventory optimization for global operations.',
    results: [
      '40% reduction in delivery times',
      '25% cost savings in operations',
      '99.5% shipment accuracy',
      '500+ warehouses connected'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'IoT', 'Machine Learning'],
    image: 'https://picsum.photos/seed/logiflow-case/600/400',
    duration: '20 months',
    teamSize: '14 developers',
    link: '/case-studies/logiflow',
    tags: ['Logistics', 'IoT', 'Predictive Analytics'],
    color: 'cyan'
  },
  {
    id: 8,
    title: 'PropTech Real Estate Platform',
    client: 'PropTech Solutions',
    industry: 'Real Estate',
    description: 'Comprehensive real estate platform with virtual tours, AI-powered property valuation, and integrated CRM for agents and buyers.',
    results: [
      '60% faster property sales',
      '300% increase in virtual tours',
      '45% more qualified leads',
      '1M+ properties listed'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', '3D Visualization', 'AI'],
    image: 'https://picsum.photos/seed/proptech-case/600/400',
    duration: '14 months',
    teamSize: '12 developers',
    link: '/case-studies/proptech',
    tags: ['Real Estate', '3D Visualization', 'AI Valuation'],
    color: 'emerald'
  },
  {
    id: 9,
    title: 'AgriTech Farm Management System',
    client: 'AgriTech Innovations',
    industry: 'Agriculture',
    description: 'Smart farming platform with IoT sensors, drone integration, weather analytics, and crop optimization for precision agriculture.',
    results: [
      '35% increase in crop yield',
      '50% reduction in water usage',
      '30% decrease in pesticide use',
      '10,000+ acres monitored'
    ],
    technologies: ['React', 'Python', 'IoT', 'Drone APIs', 'Weather APIs', 'Machine Learning'],
    image: 'https://picsum.photos/seed/agritech-case/600/400',
    duration: '18 months',
    teamSize: '16 developers',
    link: '/case-studies/agritech',
    tags: ['Agriculture', 'IoT', 'Drone Technology'],
    color: 'lime'
  },
  {
    id: 10,
    title: 'TravelHub Booking Platform',
    client: 'TravelHub Global',
    industry: 'Travel & Tourism',
    description: 'Multi-service travel platform integrating flights, hotels, car rentals, and experiences with AI-powered recommendations and dynamic pricing.',
    results: [
      '80% increase in bookings',
      '45% higher customer retention',
      '30% improvement in conversion',
      '2M+ travelers served'
    ],
    technologies: ['React', 'Node.js', 'Redis', 'Elasticsearch', 'Payment APIs', 'AI'],
    image: 'https://picsum.photos/seed/travelhub-case/600/400',
    duration: '22 months',
    teamSize: '20 developers',
    link: '/case-studies/travelhub',
    tags: ['Travel', 'AI Recommendations', 'Dynamic Pricing'],
    color: 'sky'
  },
  {
    id: 11,
    title: 'InsureTech Claims Platform',
    client: 'InsureTech Solutions',
    industry: 'Insurance',
    description: 'Digital insurance platform with automated claims processing, fraud detection, and customer self-service portal for streamlined operations.',
    results: [
      '70% faster claims processing',
      '90% reduction in fraud',
      '85% customer satisfaction',
      '$10M+ claims processed'
    ],
    technologies: ['React', 'Java', 'PostgreSQL', 'AI/ML', 'OCR', 'Blockchain'],
    image: 'https://picsum.photos/seed/insuretech-case/600/400',
    duration: '16 months',
    teamSize: '15 developers',
    link: '/case-studies/insuretech',
    tags: ['Insurance', 'Fraud Detection', 'Automation'],
    color: 'rose'
  },
  {
    id: 12,
    title: 'EnergyGrid Smart Utility Platform',
    client: 'EnergyGrid Corporation',
    industry: 'Energy & Utilities',
    description: 'Smart grid management platform with renewable energy integration, demand forecasting, and automated load balancing for sustainable energy distribution.',
    results: [
      '25% reduction in energy waste',
      '40% increase in renewable usage',
      '99.8% grid reliability',
      '5M+ households served'
    ],
    technologies: ['React', 'Python', 'Time Series DB', 'IoT', 'Machine Learning', 'Microservices'],
    image: 'https://picsum.photos/seed/energygrid-case/600/400',
    duration: '24 months',
    teamSize: '22 developers',
    link: '/case-studies/energygrid',
    tags: ['Energy', 'Smart Grid', 'Renewable Integration'],
    color: 'amber'
  },
  {
    id: 13,
    title: 'RetailTech Inventory System',
    client: 'RetailTech Corporation',
    industry: 'Retail',
    description: 'AI-powered inventory management system with demand forecasting, automated reordering, and multi-channel synchronization for retail chains.',
    results: [
      '50% reduction in stockouts',
      '30% decrease in excess inventory',
      '95% forecast accuracy',
      '200+ stores connected'
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'APIs'],
    image: 'https://picsum.photos/seed/retailtech-case/600/400',
    duration: '13 months',
    teamSize: '11 developers',
    link: '/case-studies/retailtech',
    tags: ['Retail', 'AI Forecasting', 'Inventory Management'],
    color: 'violet'
  },
  {
    id: 14,
    title: 'MediaStream Content Platform',
    client: 'MediaStream Entertainment',
    industry: 'Media & Entertainment',
    description: 'Video streaming platform with adaptive bitrate streaming, content recommendation engine, and multi-device synchronization for global audiences.',
    results: [
      '10M+ active subscribers',
      '99.9% streaming uptime',
      '40% increase in engagement',
      '50+ countries served'
    ],
    technologies: ['React', 'Node.js', 'CDN', 'Video Processing', 'Machine Learning', 'Microservices'],
    image: 'https://picsum.photos/seed/mediastream-case/600/400',
    duration: '26 months',
    teamSize: '25 developers',
    link: '/case-studies/mediastream',
    tags: ['Media', 'Video Streaming', 'Content Delivery'],
    color: 'pink'
  }
];

const industries = ['All', 'FinTech', 'Health & Fitness', 'E-commerce', 'Government', 'Healthcare', 'Education', 'Logistics', 'Real Estate', 'Agriculture', 'Travel & Tourism', 'Insurance', 'Energy & Utilities', 'Retail', 'Media & Entertainment'];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'from-blue-900 via-blue-800 to-indigo-900',
    green: 'from-green-900 via-green-800 to-emerald-900',
    purple: 'from-purple-900 via-purple-800 to-indigo-900',
    indigo: 'from-indigo-900 via-indigo-800 to-blue-900',
    teal: 'from-teal-900 via-teal-800 to-cyan-900',
    orange: 'from-orange-900 via-orange-800 to-red-900',
    cyan: 'from-cyan-900 via-cyan-800 to-blue-900',
    emerald: 'from-emerald-900 via-emerald-800 to-green-900',
    lime: 'from-lime-900 via-lime-800 to-green-900',
    sky: 'from-sky-900 via-sky-800 to-blue-900',
    rose: 'from-rose-900 via-rose-800 to-pink-900',
    amber: 'from-amber-900 via-amber-800 to-orange-900',
    violet: 'from-violet-900 via-violet-800 to-purple-900',
    pink: 'from-pink-900 via-pink-800 to-rose-900'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Load the showAll state from localStorage on component mount
  useEffect(() => {
    const savedShowAll = localStorage.getItem('caseStudiesShowAll');
    if (savedShowAll === 'true') {
      setShowAll(true);
    }
  }, []);

  // Save the showAll state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('caseStudiesShowAll', showAll.toString());
  }, [showAll]);

  // Restore scroll position when component mounts
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('caseStudiesScrollPosition');
    if (savedScrollPosition) {
      // Use setTimeout to ensure the DOM is fully rendered before scrolling
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        // Clear the saved position after restoring
        localStorage.removeItem('caseStudiesScrollPosition');
      }, 100);
    }
  }, [showAll]); // Depend on showAll to ensure content is loaded before scrolling

  // Save scroll position before navigating to case study
  const handleCaseStudyClick = (link: string) => {
    localStorage.setItem('caseStudiesScrollPosition', window.scrollY.toString());
    // Navigate using React Router
    navigate(link);
  };

  const filteredCases = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedIndustry);

  const displayedCases = showAll ? filteredCases : filteredCases.slice(0, 8);

  // Handle industry filter change - reset showAll only when changing industry
  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    // Only reset showAll if we're changing to a different industry
    if (industry !== selectedIndustry) {
      setShowAll(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-violet-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">Our Work</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Case Studies & Success Stories
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-violet-100">
              Discover how we've helped businesses across various industries achieve their digital transformation goals and drive measurable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filter by industry to see how we've solved unique challenges across different sectors
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => handleIndustryChange(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-violet-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 shadow-md hover:shadow-lg'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {displayedCases.map(caseStudy => (
              <div key={caseStudy.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(caseStudy.color)} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <p className="text-white/90 text-sm">{caseStudy.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {caseStudy.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <span>{caseStudy.duration}</span>
                    <span>{caseStudy.teamSize}</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleCaseStudyClick(caseStudy.link)}
                    className="inline-flex items-center justify-center w-full rounded-xl bg-violet-600 px-6 py-3 text-base font-medium text-white hover:bg-violet-700 transition-colors"
                  >
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredCases.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center rounded-xl border-2 border-violet-600 bg-white px-8 py-3 text-base font-medium text-violet-600 hover:bg-violet-50 transition-colors"
              >
                {showAll ? 'Show Less' : 'Load More Case Studies'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-violet-100 mb-12 max-w-2xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-violet-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-violet-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-violet-100">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-violet-100">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results. Our team is ready to understand your challenges and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-3 text-base font-medium text-white hover:bg-violet-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 px-8 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
