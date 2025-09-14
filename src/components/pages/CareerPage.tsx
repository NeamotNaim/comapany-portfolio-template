import React, { useState } from 'react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $150,000',
    description:
      "We're looking for a Senior Full Stack Developer to join our growing team. You'll be responsible for developing and maintaining web applications using modern technologies like React, Node.js, and cloud services.",
    requirements: [
      'Strong experience with React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of database design and optimization',
      'Experience with CI/CD pipelines',
      'Strong problem-solving and communication skills',
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible remote work options',
      'Health, dental, and vision insurance',
      'Professional development budget',
      'Unlimited PTO',
    ],
    postedDate: '2024-01-15',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90,000 - $120,000',
    description:
      "Join our design team to create beautiful, intuitive user experiences for our products. You'll work closely with product managers and developers to bring designs to life.",
    requirements: [
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Experience with user research and usability testing',
      'Strong portfolio showcasing web and mobile designs',
      'Knowledge of design systems and component libraries',
      'Experience working with development teams',
    ],
    benefits: [
      'Competitive salary and equity',
      'Latest design tools and software',
      'Health, dental, and vision insurance',
      'Professional development opportunities',
      'Flexible work arrangements',
    ],
    postedDate: '2024-01-12',
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Austin',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$110,000 - $140,000',
    description:
      "We're seeking a Product Manager to drive product strategy and execution. You'll work with cross-functional teams to deliver exceptional products that solve real customer problems.",
    requirements: [
      'Experience in product management for SaaS or B2B products',
      'Strong analytical and data-driven decision making',
      'Experience with agile methodologies',
      'Excellent communication and stakeholder management',
      'Technical background or understanding preferred',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote work flexibility',
      'Comprehensive health benefits',
      'Professional development budget',
      'Generous PTO policy',
    ],
    postedDate: '2024-01-10',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$100,000 - $130,000',
    description:
      "Join our DevOps team to build and maintain our cloud infrastructure. You'll help us scale our systems and ensure high availability for our products.",
    requirements: [
      'Experience with AWS, Docker, and Kubernetes',
      'Knowledge of CI/CD pipelines and automation',
      'Experience with monitoring and logging tools',
      'Strong scripting skills (Python, Bash)',
      'Understanding of security best practices',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote work options',
      'Health, dental, and vision insurance',
      'Professional development opportunities',
      'Flexible work hours',
    ],
    postedDate: '2024-01-08',
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'New York',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$70,000 - $90,000',
    description:
      "Help us grow our brand and reach new customers. You'll develop and execute marketing campaigns across various channels to drive awareness and lead generation.",
    requirements: [
      'Experience with digital marketing channels',
      'Knowledge of marketing automation tools',
      'Strong writing and communication skills',
      'Experience with analytics and reporting',
      'Creative thinking and problem-solving abilities',
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Generous PTO',
    ],
    postedDate: '2024-01-05',
  },
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Marketing'];
const locations = ['All', 'Remote', 'New York', 'San Francisco', 'Austin'];

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredJobs = jobListings.filter(job => {
    const departmentMatch =
      selectedDepartment === 'All' || job.department === selectedDepartment;
    const locationMatch =
      selectedLocation === 'All' || job.location.includes(selectedLocation);
    return departmentMatch && locationMatch;
  });

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 3);

  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 bg-white">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-violet-700 mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We're looking for passionate individuals who want to make a difference
          in the world of technology. Join us in building innovative solutions
          that help businesses grow and succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Remote-friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Competitive benefits</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Growth opportunities</span>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-violet-700 mb-6 text-center">
          Why Work at RecursionSoft?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
            <p className="text-gray-600">
              Work on cutting-edge technologies and solve complex problems that
              make a real impact.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-semibold text-lg mb-2">
              Collaborative Culture
            </h3>
            <p className="text-gray-600">
              Join a team that values collaboration, learning, and supporting
              each other's growth.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold text-lg mb-2">Great Benefits</h3>
            <p className="text-gray-600">
              Enjoy competitive salaries, health benefits, flexible work
              arrangements, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <select
          value={selectedDepartment}
          onChange={e => {
            setSelectedDepartment(e.target.value);
            setShowAll(false);
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>
              {dept} Department
            </option>
          ))}
        </select>
        <select
          value={selectedLocation}
          onChange={e => {
            setSelectedLocation(e.target.value);
            setShowAll(false);
          }}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          {locations.map(loc => (
            <option key={loc} value={loc}>
              {loc} Location
            </option>
          ))}
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-6 mb-8">
        {displayedJobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                    {job.experience}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-lg font-semibold text-violet-700">
                  {job.salary}
                </div>
                <div className="text-sm text-gray-500">
                  Posted {formatDate(job.postedDate)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                {job.department}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {job.type}
              </span>
            </div>
            <button className="bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-violet-800 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredJobs.length > 3 && (
        <div className="text-center mb-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-violet-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-800 transition"
          >
            {showAll ? 'Show Less' : 'Load More Jobs'}
          </button>
        </div>
      )}

      {/* Application Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-violet-700 mb-6 text-center">
          General Application
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Don't see a position that fits? Send us your resume and we'll keep you
          in mind for future opportunities.
        </p>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Position of Interest
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option value="">Select a position</option>
              {jobListings.map(job => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Tell us about yourself and why you'd like to join our team..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume/CV
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-800 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerPage;
