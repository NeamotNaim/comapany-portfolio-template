import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'how-to-build-modern-portfolio',
    title: 'How to Build a Modern Portfolio with React',
    date: '2024-07-25',
    author: 'Alex Kim',
    tags: ['React', 'Portfolio', 'Web Development'],
    excerpt:
      'Learn how to create a beautiful, modern portfolio website using React and Tailwind CSS.',
    readTime: '8 min read',
    category: 'Development',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  },
  {
    id: 'ui-ux-trends-2024',
    title: 'UI/UX Trends for 2024',
    date: '2024-07-20',
    author: 'Maria Gomez',
    tags: ['UI/UX', 'Design'],
    excerpt:
      'Stay ahead of the curve with the latest UI/UX design trends for 2024.',
    readTime: '6 min read',
    category: 'Design',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
  },
  {
    id: 'ai-powered-development',
    title: 'The Future of AI-Powered Development',
    date: '2024-07-15',
    author: 'Alex Kim',
    tags: ['AI', 'Machine Learning', 'Development'],
    excerpt:
      'Exploring how artificial intelligence is revolutionizing the way we build software.',
    readTime: '10 min read',
    category: 'Technology',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices for 2024',
    date: '2024-07-10',
    author: 'Sarah Chen',
    tags: ['Security', 'DevOps', 'Best Practices'],
    excerpt:
      'Essential security measures every development team should implement.',
    readTime: '12 min read',
    category: 'Security',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
  },
  {
    id: 'modern-cloud-architecture',
    title: 'Modern Cloud Architecture Patterns',
    date: '2024-08-05',
    author: 'Michael Chen',
    tags: ['Cloud', 'Architecture', 'Microservices', 'Serverless', 'DevOps'],
    excerpt:
      "Discover the cutting-edge patterns and practices that power today's most scalable and resilient cloud applications.",
    readTime: '12 min read',
    category: 'Architecture',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
  },
  {
    id: 'mobile-app-performance',
    title: 'Optimizing Mobile App Performance',
    date: '2024-06-30',
    author: 'Maria Gomez',
    tags: ['Mobile', 'Performance', 'Optimization'],
    excerpt: 'Techniques to make your mobile apps lightning fast.',
    readTime: '9 min read',
    category: 'Mobile',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
  },
];

const authors = {
  'Alex Kim': {
    bio: 'Lead Developer at RecursionSoft. Loves React and clean code.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Lead Developer',
    expertise: ['React', 'Node.js', 'AI/ML'],
  },
  'Maria Gomez': {
    bio: 'UI/UX Designer at RecursionSoft. Passionate about user-centric design.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'UI/UX Designer',
    expertise: ['Design Systems', 'User Research', 'Prototyping'],
  },
  'Sarah Chen': {
    bio: 'Security Engineer at RecursionSoft. Expert in cybersecurity and DevSecOps.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'Security Engineer',
    expertise: ['Cybersecurity', 'DevSecOps', 'Penetration Testing'],
  },
  'David Park': {
    bio: 'Cloud Architect at RecursionSoft. Specializes in scalable cloud solutions.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Cloud Architect',
    expertise: ['AWS', 'Kubernetes', 'Microservices'],
  },
  'Michael Chen': {
    bio: 'Senior Cloud Solutions Architect at RecursionSoft. Expert in modern cloud architecture patterns.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Cloud Solutions Architect',
    expertise: ['Cloud Architecture', 'Microservices', 'DevOps', 'Serverless'],
  },
};

const categories = [
  'All',
  'Development',
  'Design',
  'Technology',
  'Security',
  'Architecture',
  'Cloud',
  'Mobile',
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [codeLines, setCodeLines] = useState<string[]>([]);

  // Generate dynamic code lines for background
  useEffect(() => {
    const techLines = [
      'const blog = () => { return "cutting-edge insights"; }',
      'function shareKnowledge() { return innovation + experience; }',
      'class TechBlog extends Knowledge { publish() { return wisdom; } }',
      'let insights = developers + designers + architects;',
      'async function learnMore() { await readArticle(); }',
      'const future = "Built with passion and expertise";',
    ];
    setCodeLines(techLines);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Icons */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white/10 animate-tech-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            >
              {
                ['📝', '💡', '🚀', '⚡', '🔧', '💻', '📊', '🎯'][
                  Math.floor(Math.random() * 8)
                ]
              }
            </div>
          ))}

          {/* Code Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="absolute text-green-400 font-mono text-xs animate-code-fall"
                style={{
                  left: `${(i * 15) % 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 backdrop-blur-sm">
            <svg
              className="w-5 h-5 mr-2 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="text-sm font-medium text-purple-300">
              Tech Insights & Innovation
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-white">Tech</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insights, innovative solutions, and expert
            perspectives from our team of passionate technologists.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our most popular and impactful articles, handpicked for their
              innovation and insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <div key={post.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>

                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Post Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={authors[post.author].avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full border-2 border-purple-400/50"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {post.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {post.date} • {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? 's' : ''} found
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  {/* Post Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={authors[post.author].avatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full border border-cyan-400/50"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">
                          {post.author}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {post.date} • {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
                      >
                        Read
                        <svg
                          className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Tech Circuit Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="blog-circuit"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="1"
                  fill="currentColor"
                  className="text-purple-400"
                />
                <path
                  d="M2,2 L18,2 M2,2 L2,18"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-purple-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-circuit)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Meet Our Authors
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind our technical insights and innovative
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(authors).map(([name, info]) => (
              <div key={name} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 text-center">
                  <div className="relative mb-6">
                    <img
                      src={info.avatar}
                      alt={name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-green-400/50 group-hover:border-green-400 transition-colors"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {info.role}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {info.bio}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {info.expertise.map(skill => (
                      <span
                        key={skill}
                        className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Get the latest articles, tutorials, and industry insights
              delivered straight to your inbox.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-xl transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-purple-200 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
