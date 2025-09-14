import React from 'react';
import { Link } from 'react-router-dom';

const customSoftwareTypes = [
  {
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Comprehensive business management solutions that integrate all core business processes.',
    features: ['Financial Management', 'Supply Chain', 'Human Resources', 'Customer Relations'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'SAP'],
    timeline: '6-12 months',
    price: 'Starting from $50,000',
    link: '/services/custom-software/erp'
  },
  {
    title: 'Customer Relationship Management (CRM)',
    description: 'Powerful tools to manage customer interactions and drive sales growth.',
    features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Marketing Automation'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Salesforce API'],
    timeline: '3-6 months',
    price: 'Starting from $25,000',
    link: '/services/custom-software/crm'
  },
  {
    title: 'Business Intelligence (BI) Systems',
    description: 'Data-driven insights and analytics platforms for informed decision making.',
    features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Report Generation'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    technologies: ['Python', 'Power BI', 'Tableau', 'Apache Spark'],
    timeline: '4-8 months',
    price: 'Starting from $35,000',
    link: '/services/custom-software/business-intelligence'
  },
  {
    title: 'Workflow Management Systems',
    description: 'Streamline business processes with automated workflow solutions.',
    features: ['Process Automation', 'Task Management', 'Approval Workflows', 'Integration APIs'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
    timeline: '2-4 months',
    price: 'Starting from $20,000',
    link: '/services/custom-software/workflow-management'
  },
  {
    title: 'E-commerce Platforms',
    description: 'Custom online stores with advanced features and seamless user experience.',
    features: ['Product Catalog', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    technologies: ['React', 'Stripe', 'AWS', 'Shopify Plus'],
    timeline: '3-5 months',
    price: 'Starting from $30,000',
    link: '/services/custom-software/ecommerce'
  },
  {
    title: 'Healthcare Management Systems',
    description: 'HIPAA-compliant solutions for healthcare providers and medical facilities.',
    features: ['Patient Records', 'Appointment Scheduling', 'Billing Integration', 'Telemedicine'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135844.png',
    technologies: ['React', 'FHIR', 'AWS HIPAA', 'HL7'],
    timeline: '6-10 months',
    price: 'Starting from $60,000',
    link: '/services/custom-software/healthcare'
  }
];

const CustomSoftwarePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-violet-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Custom Software Development</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Enterprise-Grade</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                Software Solutions
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Transform your business with custom software solutions designed to meet your unique requirements and drive operational efficiency.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-violet-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Custom Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Custom Software Types
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              Explore our comprehensive range of custom software development services tailored to your industry needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSoftwareTypes.map((service, i) => (
              <Link
                key={i}
                to={service.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-violet-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-violet-50 group-hover:bg-violet-100 transition-colors">
                    <img src={service.icon} alt={service.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {service.timeline}</span>
                    <span><strong>Price:</strong> {service.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-violet-700 group-hover:text-violet-800 transition-colors">
                    Learn More
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a tailored software solution that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-violet-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwarePage;
