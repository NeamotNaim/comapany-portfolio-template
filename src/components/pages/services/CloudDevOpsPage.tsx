import React from 'react';
import { Link } from 'react-router-dom';

const cloudDevOpsServices = [
  {
    title: 'Cloud Migration Services',
    description: 'Seamlessly migrate your applications and data to cloud platforms with minimal downtime.',
    features: ['AWS/Azure/GCP Migration', 'Data Transfer', 'Application Modernization', 'Performance Optimization'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4116/4116544.png',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform'],
    timeline: '2-6 months',
    price: 'Starting from $20,000',
    link: '/services/cloud-devops/cloud-migration'
  },
  {
    title: 'CI/CD Pipeline Setup',
    description: 'Automated deployment pipelines for faster, more reliable software delivery.',
    features: ['Automated Testing', 'Code Quality Gates', 'Deployment Automation', 'Rollback Strategies'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'],
    timeline: '1-3 months',
    price: 'Starting from $15,000',
    link: '/services/cloud-devops/cicd-pipeline'
  },
  {
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes and Docker.',
    features: ['Docker Containerization', 'Kubernetes Clusters', 'Service Mesh', 'Auto-scaling'],
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    technologies: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
    timeline: '2-4 months',
    price: 'Starting from $25,000',
    link: '/services/cloud-devops/container-orchestration'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Manage and provision infrastructure through code for consistency and scalability.',
    features: ['Terraform Scripts', 'CloudFormation', 'Ansible Playbooks', 'Version Control'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135807.png',
    technologies: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
    timeline: '1-3 months',
    price: 'Starting from $18,000',
    link: '/services/cloud-devops/infrastructure-as-code'
  },
  {
    title: 'Monitoring & Observability',
    description: 'Comprehensive monitoring solutions for application performance and infrastructure health.',
    features: ['Application Monitoring', 'Log Aggregation', 'Alerting Systems', 'Performance Metrics'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'],
    timeline: '1-2 months',
    price: 'Starting from $12,000',
    link: '/services/cloud-devops/monitoring'
  },
  {
    title: 'Security & Compliance',
    description: 'Implement security best practices and compliance frameworks in your cloud infrastructure.',
    features: ['Security Scanning', 'Compliance Audits', 'Access Management', 'Encryption'],
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    technologies: ['AWS Security Hub', 'Azure Security Center', 'Vault', 'SIEM'],
    timeline: '2-4 months',
    price: 'Starting from $22,000',
    link: '/services/cloud-devops/security-compliance'
  }
];

const CloudDevOpsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">Cloud & DevOps Services</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Scalable Cloud</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-pink-300">
                Infrastructure & DevOps
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Accelerate your development lifecycle with modern cloud infrastructure, automated CI/CD pipelines, and DevOps best practices.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-orange-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get Cloud Quote</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View Infrastructure</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-orange-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cloud & DevOps Services
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From cloud migration to automated deployments, we provide comprehensive DevOps solutions that scale with your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudDevOpsServices.map((service, i) => (
              <Link
                key={i}
                to={service.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-orange-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                    <img src={service.icon} alt={service.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">{service.title}</h3>
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
                        <span key={idx} className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {service.timeline}</span>
                    <span><strong>Price:</strong> {service.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-orange-700 group-hover:text-orange-800 transition-colors">
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

      {/* Cloud Providers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Platforms We Work With
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We're certified experts in major cloud platforms and DevOps tools.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
              { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
              { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
              { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
              { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
              { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
              { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' }
            ].map((platform, i) => (
              <div key={i} className="flex flex-col items-center group hover:scale-110 transition-transform">
                <div className="h-16 w-16 flex items-center justify-center mb-2">
                  <img src={platform.icon} alt={platform.name} className="h-12 w-12" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our DevOps Services?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Faster Time to Market', 
                desc: 'Reduce deployment time from weeks to minutes with automated CI/CD pipelines.',
                icon: '⚡'
              },
              { 
                title: 'Improved Reliability', 
                desc: 'Increase system uptime and reduce failures with robust monitoring and automation.',
                icon: '🛡️'
              },
              { 
                title: 'Cost Optimization', 
                desc: 'Optimize cloud costs with right-sizing, auto-scaling, and efficient resource management.',
                icon: '💰'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let's build a scalable, secure, and efficient cloud infrastructure that grows with your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-orange-900 hover:bg-gray-100 transition-colors"
          >
            Start Your Cloud Journey
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOpsPage;
