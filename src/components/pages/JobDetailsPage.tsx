import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

  // Scroll detection for animations
  useEffect(() => {
    let scrollTimeout;
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

  // File upload handlers
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file.');
        return;
      }

      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.');
        return;
      }

      setUploadedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      // Create a fake event object for handleFileUpload
      const fakeEvent = { target: { files: [file] } };
      handleFileUpload(fakeEvent);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!uploadedFile) {
      alert('Please upload your resume.');
      return;
    }

    // Simulate form submission
    alert(`Application submitted successfully for ${job.title}!\n\nWe'll review your application and get back to you within 5-7 business days.`);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      coverLetter: ''
    });
    setUploadedFile(null);
    setShowApplicationForm(false);
  };

  // Mock job data - in real app, this would come from API
  const jobsData = {
    '1': {
      id: 1,
      title: 'Senior Full Stack Developer',
      category: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$120k - $180k',
      posted: '2 days ago',
      applicants: 47,
      description: 'Join our engineering team to build scalable web applications using modern technologies. You\'ll work on cutting-edge projects that impact millions of users worldwide.',
      longDescription: `We're looking for a passionate Senior Full Stack Developer to join our growing engineering team. In this role, you'll be responsible for designing, developing, and maintaining our core platform that serves millions of users globally.

You'll work with a talented team of engineers, designers, and product managers to build features that directly impact our users' experience. We value clean code, thoughtful architecture, and continuous learning.

This is a unique opportunity to work with modern technologies, contribute to open-source projects, and help shape the future of our platform. You'll have the autonomy to make technical decisions and the support to grow your career.`,
      requirements: [
        '5+ years of experience with React, Node.js, and TypeScript',
        'Strong understanding of modern JavaScript/ES6+ features',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Proficiency with database design and optimization (PostgreSQL, MongoDB)',
        'Experience with containerization (Docker, Kubernetes)',
        'Knowledge of CI/CD pipelines and DevOps practices',
        'Strong problem-solving skills and attention to detail',
        'Excellent communication and collaboration skills'
      ],
      niceToHave: [
        'Experience with GraphQL and Apollo',
        'Knowledge of microservices architecture',
        'Familiarity with machine learning concepts',
        'Open source contributions',
        'Experience with mobile development (React Native)',
        'Knowledge of blockchain technologies'
      ],
      responsibilities: [
        'Design and develop scalable web applications using React and Node.js',
        'Collaborate with cross-functional teams to define and implement new features',
        'Write clean, maintainable, and well-tested code',
        'Participate in code reviews and provide constructive feedback',
        'Optimize application performance and ensure scalability',
        'Mentor junior developers and contribute to team knowledge sharing',
        'Stay up-to-date with emerging technologies and industry best practices',
        'Participate in on-call rotation for production support'
      ],
      benefits: [
        'Comprehensive health, dental, and vision insurance',
        'Stock options with high growth potential',
        'Flexible working hours and remote work options',
        '$3,000 annual learning and development budget',
        'Top-tier equipment (MacBook Pro, external monitors, etc.)',
        'Unlimited PTO and sabbatical opportunities',
        'Catered meals and snacks in office',
        'Gym membership reimbursement'
      ],
      team: {
        size: '12 engineers',
        structure: 'Cross-functional squads',
        methodology: 'Agile/Scrum',
        tools: ['Slack', 'Jira', 'GitHub', 'Figma', 'Notion']
      },
      techStack: {
        frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
        database: ['PostgreSQL', 'Redis', 'MongoDB'],
        cloud: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        tools: ['Git', 'Jest', 'Cypress', 'Webpack', 'ESLint']
      },
      culture: {
        values: ['Innovation', 'Collaboration', 'Excellence', 'Growth'],
        workStyle: 'Hybrid with flexible hours',
        meetings: 'Minimal, focused meetings',
        growth: 'Regular 1:1s, career development plans'
      }
    },
    '2': {
      id: 2,
      title: 'UX/UI Designer',
      category: 'Design',
      location: 'New York / Remote',
      type: 'Full-time',
      experience: 'Mid Level',
      salary: '$90k - $130k',
      posted: '1 week ago',
      applicants: 23,
      description: 'Create beautiful and intuitive user experiences for our products.',
      longDescription: `We're seeking a talented UX/UI Designer to join our design team and help create exceptional user experiences. You'll work on a variety of projects, from mobile apps to web platforms, ensuring our products are both beautiful and functional.

As part of our design team, you'll collaborate closely with product managers, engineers, and other designers to solve complex user problems. You'll have the opportunity to work on the entire design process, from user research to final implementation.

We believe great design is about understanding users and creating solutions that make their lives better. If you're passionate about user-centered design and want to make a real impact, we'd love to hear from you.`,
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or similar design tools',
        'Strong portfolio demonstrating design process and thinking',
        'Experience with design systems and component libraries',
        'Understanding of user research methodologies',
        'Knowledge of accessibility principles and guidelines',
        'Excellent visual design skills with attention to detail',
        'Strong communication and presentation skills'
      ],
      niceToHave: [
        'Experience with prototyping tools (Framer, Principle)',
        'Basic understanding of HTML/CSS',
        'Experience with user testing and analytics',
        'Motion design and animation skills',
        'Experience in B2B SaaS products',
        'Knowledge of design thinking methodologies'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Collaborate with engineers to ensure design implementation',
        'Maintain and evolve our design system',
        'Present design concepts to stakeholders',
        'Analyze user feedback and iterate on designs',
        'Stay current with design trends and best practices'
      ],
      benefits: [
        'Health, dental, and vision insurance',
        'Creative budget for design tools and resources',
        'Flexible working hours and remote options',
        'Conference attendance and learning opportunities',
        'Modern design equipment and software licenses',
        'Collaborative and creative work environment',
        'Stock options and performance bonuses',
        'Wellness programs and mental health support'
      ],
      team: {
        size: '6 designers',
        structure: 'Design pods aligned with product teams',
        methodology: 'Design thinking, user-centered design',
        tools: ['Figma', 'Miro', 'Notion', 'Slack', 'Maze']
      },
      techStack: {
        design: ['Figma', 'Adobe Creative Suite', 'Sketch'],
        prototyping: ['Framer', 'Principle', 'InVision'],
        research: ['Maze', 'UserTesting', 'Hotjar'],
        collaboration: ['Miro', 'FigJam', 'Notion'],
        handoff: ['Zeplin', 'Figma Dev Mode']
      },
      culture: {
        values: ['User-first', 'Creativity', 'Collaboration', 'Quality'],
        workStyle: 'Flexible with design sprints',
        meetings: 'Design critiques, user research sessions',
        growth: 'Design mentorship, portfolio reviews'
      }
    }
  };

  const job = jobsData[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/career')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className={`fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${isScrolling ? 'opacity-20' : 'opacity-100'}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="text-4xl">
              {['💼', '🚀', '💡', '🎯', '⭐', '🏆', '💻', '🌟'][i]}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-40">
        <button
          onClick={() => navigate('/career')}
          className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20 group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </button>
      </nav>

      {/* Header Section */}
      <header className="relative pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    job.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                    job.category === 'Design' ? 'bg-purple-100 text-purple-800' :
                    job.category === 'Marketing' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {job.category}
                  </span>
                  <span className="text-sm text-gray-600">{job.type}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{job.experience}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                  {job.title}
                </h1>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">{job.applicants} applicants</span>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>
              
              <div className="lg:w-80 flex-shrink-0">
                <div className="sticky top-8">
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 mb-4"
                  >
                    Apply for This Position
                  </button>
                  <button className="w-full px-8 py-4 bg-white/60 text-gray-700 rounded-xl font-medium hover:bg-white/80 transition-all border border-white/20">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About This Role */}
            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Role</h2>
              <div className="prose prose-lg max-w-none">
                {job.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
              <div className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Requirements */}
            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Requirements</h3>
              <div className="space-y-3">
                {job.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Nice to Have */}
            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nice to Have</h3>
              <div className="space-y-3">
                {job.niceToHave.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 space-y-8">

          {/* Tech Stack */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.frontend.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.backend.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.database.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">☁️</span>
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.cloud.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.tools.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team & Culture */}
          <div className="grid lg:grid-cols-2 gap-8">
            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Structure</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">Team Size</div>
                    <div className="text-blue-600">{job.team.size}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-purple-800">Structure</div>
                    <div className="text-purple-600">{job.team.structure}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2m2 0h2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-green-800">Methodology</div>
                    <div className="text-green-600">{job.team.methodology}</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Culture</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Core Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.culture.values.map((value, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Work Style</h3>
                  <p className="text-gray-600">{job.culture.workStyle}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Meeting Culture</h3>
                  <p className="text-gray-600">{job.culture.meetings}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Growth & Development</h3>
                  <p className="text-gray-600">{job.culture.growth}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Benefits */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm opacity-90">Submit your application and resume</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Screen</h3>
                <p className="text-sm opacity-90">Initial phone/video screening</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm opacity-90">Technical and cultural fit interviews</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Offer</h3>
                <p className="text-sm opacity-90">Reference check and job offer</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Start Your Application
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

            {/* Form Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Apply for {job.title}</h2>
                  <p className="text-gray-600">Fill out the form below to submit your application</p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Application Form */}
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume <span className="text-red-500">*</span>
                  </label>

                  {!uploadedFile ? (
                    <div
                      className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
                        isDragOver
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('resume-upload').click()}
                    >
                      <svg className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                        isDragOver ? 'text-purple-500' : 'text-gray-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className={`mb-2 transition-colors ${
                        isDragOver ? 'text-purple-600' : 'text-gray-600'
                      }`}>
                        {isDragOver ? 'Drop your resume here' : 'Drop your resume here or click to browse'}
                      </p>
                      <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      <input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                      />
                    </div>
                  ) : (
                    <div className="border-2 border-green-300 bg-green-50 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-green-800">{uploadedFile.name}</p>
                            <p className="text-sm text-green-600">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="w-8 h-8 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => document.getElementById('resume-upload').click()}
                        className="mt-3 text-sm text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        Upload a different file
                      </button>
                      <input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !uploadedFile}
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
