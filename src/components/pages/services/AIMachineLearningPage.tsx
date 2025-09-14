import React from 'react';
import { Link } from 'react-router-dom';

const aiSolutionTypes = [
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models for prediction, classification, and pattern recognition tailored to your business needs.',
    features: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Optimization'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
    platforms: ['Cloud Deployment', 'On-Premise', 'Edge Computing', 'Mobile Integration'],
    timeline: '2-4 months',
    price: 'Starting from $30,000',
    link: '/services/ai-ml/machine-learning'
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis, sentiment analysis, and language understanding solutions.',
    features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Chatbots & Virtual Assistants'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
    platforms: ['Web Applications', 'Mobile Apps', 'API Integration', 'Voice Assistants'],
    timeline: '1-3 months',
    price: 'Starting from $25,000',
    link: '/services/ai-ml/nlp'
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual analysis for automated decision making.',
    features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'OCR & Document Processing'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png',
    platforms: ['Security Systems', 'Mobile Apps', 'Industrial Automation', 'Healthcare Imaging'],
    timeline: '2-5 months',
    price: 'Starting from $35,000',
    link: '/services/ai-ml/computer-vision'
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict outcomes, and make data-driven decisions with advanced analytics.',
    features: ['Time Series Analysis', 'Demand Forecasting', 'Risk Assessment', 'Trend Analysis'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712055.png',
    platforms: ['Business Intelligence', 'Web Dashboards', 'Mobile Reports', 'API Services'],
    timeline: '1-3 months',
    price: 'Starting from $20,000',
    link: '/services/ai-ml/predictive-analytics'
  },
  {
    title: 'Recommendation Systems',
    description: 'Personalized recommendation engines to enhance user experience and drive engagement.',
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Systems', 'Real-time Recommendations'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712090.png',
    platforms: ['E-commerce', 'Streaming Platforms', 'Social Media', 'Content Platforms'],
    timeline: '2-4 months',
    price: 'Starting from $28,000',
    link: '/services/ai-ml/recommendation-systems'
  },
  {
    title: 'AI Automation Solutions',
    description: 'Intelligent process automation to streamline operations and reduce manual work.',
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Decision Automation'],
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712074.png',
    platforms: ['Enterprise Systems', 'Cloud Platforms', 'Legacy Integration', 'Custom Solutions'],
    timeline: '3-6 months',
    price: 'Starting from $40,000',
    link: '/services/ai-ml/ai-automation'
  }
];

const AIMachineLearningPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">AI & Machine Learning</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Intelligent Solutions &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">
                Machine Learning
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Transform your business with cutting-edge AI and machine learning solutions that automate processes, predict outcomes, and unlock insights from your data.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-center text-lg font-medium text-green-900 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get AI Consultation</span>
              </Link>
              <Link
                to="/case-studies"
                className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <span className="relative z-10">View AI Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold uppercase tracking-wide text-green-600">Our Solutions</h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              AI & Machine Learning Services
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              From machine learning models to intelligent automation, we build AI solutions that transform your business operations and decision-making processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutionTypes.map((solution, i) => (
              <Link
                key={i}
                to={solution.link || "/contact"}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105 cursor-pointer block"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 rounded-full bg-green-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                    <img src={solution.icon} alt={solution.title} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {solution.features.map((feature, idx) => (
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
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.platforms.map((platform, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span><strong>Timeline:</strong> {solution.timeline}</span>
                    <span><strong>Price:</strong> {solution.price}</span>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-green-700 group-hover:text-green-800 transition-colors">
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

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our AI Development Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              From data analysis to deployment, we follow a proven AI development methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Assessment', desc: 'Analyze data quality, volume, and structure to determine AI feasibility and requirements.' },
              { step: '02', title: 'Model Development', desc: 'Design, train, and optimize custom AI models tailored to your specific use case.' },
              { step: '03', title: 'Testing & Validation', desc: 'Rigorous testing to ensure model accuracy, reliability, and performance standards.' },
              { step: '04', title: 'Deployment & Monitoring', desc: 'Deploy to production with continuous monitoring, optimization, and maintenance.' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Implement AI Solutions?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent automation and data-driven insights powered by AI.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-medium text-green-900 hover:bg-gray-100 transition-colors"
          >
            Start Your AI Project
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIMachineLearningPage;
