import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  'how-to-build-modern-portfolio': {
    id: 'how-to-build-modern-portfolio',
    title: 'How to Build a Modern Portfolio with React',
    date: '2024-07-25',
    author: 'Alex Kim',
    tags: ['React', 'Portfolio', 'Web Development'],
    content: `
      <p>Building a modern portfolio website is crucial for developers and designers alike. It's your digital resume, showcasing your skills, projects, and personality. In this article, we'll walk through the process of creating a beautiful, responsive, and performant portfolio using React and Tailwind CSS.</p>
      
      <h3>Why React?</h3>
      <p>React is a popular JavaScript library for building user interfaces. Its component-based architecture makes it ideal for creating modular and reusable UI elements. This means you can build complex UIs from small, isolated pieces of code.</p>

      <h3>Why Tailwind CSS?</h3>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your HTML. Instead of writing custom CSS, you compose your designs using pre-defined utility classes. This approach leads to faster development, smaller CSS files, and a more consistent design system.</p>

      <h3>Getting Started</h3>
      <p>To begin, you'll need Node.js and npm (or Yarn) installed on your machine. We'll use Vite for a fast development setup:</p>
      <pre><code class="language-bash">npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      <p>After setting up, configure your <code>tailwind.config.js</code> and <code>index.css</code> files. Then, you can start building your components!</p>

      <h3>Key Components for a Portfolio</h3>
      <ul>
        <li><strong>Hero Section:</strong> A strong first impression with your name, title, and a call to action.</li>
        <li><strong>About Section:</strong> Tell your story, highlight your skills, and showcase your passion.</li>
        <li><strong>Portfolio/Projects:</strong> The core of your site. Display your best work with images, descriptions, and links.</li>
        <li><strong>Skills Section:</strong> List your technical proficiencies.</li>
        <li><strong>Contact Form:</strong> Make it easy for potential clients or employers to reach you.</li>
        <li><strong>Footer:</strong> Copyright information and social media links.</li>
      </ul>

      <h3>Deployment</h3>
      <p>Once your portfolio is ready, you can deploy it to platforms like Netlify, Vercel, or GitHub Pages. These platforms offer seamless integration with Git and provide continuous deployment, meaning your site updates automatically every time you push changes to your repository.</p>

      <p>Building your own portfolio is a rewarding experience that not only gives you a platform to showcase your work but also deepens your understanding of the tools and technologies you use. Happy coding!</p>
    `,
  },
  'ui-ux-trends-2024': {
    id: 'ui-ux-trends-2024',
    title: 'UI/UX Trends for 2024',
    date: '2024-07-20',
    author: 'Maria Gomez',
    tags: ['UI/UX', 'Design'],
    content: `
      <p>The world of UI/UX design is constantly evolving. Staying updated with the latest trends is essential for creating engaging and effective user experiences. Here are some of the top UI/UX trends we expect to see dominate in 2024.</p>

      <h3>1. Dark Mode Dominance</h3>
      <p>Dark mode isn't new, but its popularity continues to grow. Users appreciate the reduced eye strain, especially in low-light environments, and the sleek, modern aesthetic it provides. Expect more applications and websites to offer robust dark mode options, often with dynamic switching based on system preferences.</p>

      <h3>2. Microinteractions and Haptic Feedback</h3>
      <p>Subtle animations and haptic feedback (vibrations) enhance the user experience by providing immediate and satisfying responses to user actions. These small details can make an interface feel more alive and intuitive, guiding users through their journey without explicit instructions.</p>

      <h3>3. AI-Powered Personalization</h3>
      <p>Artificial intelligence will play an even larger role in tailoring user experiences. From personalized content recommendations to adaptive interfaces that learn user behavior, AI will enable designers to create truly unique and highly relevant interactions for each individual user.</p>

      <h3>4. Immersive 3D Elements and AR/VR Integration</h3>
      <p>As technology advances, so does the ability to incorporate more immersive elements. Expect to see more sophisticated 3D graphics, augmented reality (AR) features in mobile apps, and even virtual reality (VR) experiences becoming more mainstream, especially in e-commerce and entertainment.</p>

      <h3>5. Inclusive Design and Accessibility</h3>
      <p>Accessibility is no longer an afterthought but a core principle of good design. Designers are increasingly focusing on creating interfaces that are usable by everyone, regardless of their abilities. This includes considerations for color contrast, typography, navigation, and alternative text for images.</p>

      <h3>6. Glassmorphism and Neumorphism (Evolving)</h3>
      <p>While Glassmorphism (frosted glass effect) and Neumorphism (soft, extruded shapes) had their moments, expect to see more refined and subtle interpretations of these trends. The focus will be on creating depth and visual interest without sacrificing usability or accessibility.</p>

      <h3>Conclusion</h3>
      <p>The future of UI/UX design is exciting, with a strong emphasis on personalization, immersion, and inclusivity. By embracing these trends, designers can create experiences that are not only visually appealing but also deeply engaging and meaningful for users.</p>
    `,
  },
  'ai-powered-development': {
    title: 'The Future of AI-Powered Development',
    date: '2024-07-15',
    author: 'Alex Kim',
    tags: ['AI', 'Machine Learning', 'Development'],
    readTime: '10 min read',
    category: 'Technology',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    content: `
      <h2>The AI Revolution in Software Development</h2>
      <p>Artificial Intelligence is fundamentally transforming how we build software. From code generation to automated testing, AI tools are becoming indispensable for modern developers.</p>

      <h2>Current AI Development Tools</h2>
      <h3>Code Generation</h3>
      <p>Tools like GitHub Copilot and ChatGPT are revolutionizing how we write code, offering intelligent suggestions and complete function implementations.</p>

      <h3>Automated Testing</h3>
      <p>AI-powered testing tools can generate test cases, identify edge cases, and even predict potential bugs before they occur.</p>

      <h3>Code Review and Optimization</h3>
      <p>Machine learning algorithms can analyze code quality, suggest optimizations, and identify security vulnerabilities.</p>

      <h2>The Impact on Developer Productivity</h2>
      <p>Studies show that developers using AI tools are 30-50% more productive, spending less time on boilerplate code and more time on creative problem-solving.</p>

      <h2>Challenges and Considerations</h2>
      <ul>
        <li>Code quality and maintainability concerns</li>
        <li>Over-reliance on AI-generated solutions</li>
        <li>Security implications of AI-generated code</li>
        <li>The need for human oversight and validation</li>
      </ul>

      <h2>Future Predictions</h2>
      <p>Looking ahead, we can expect even more sophisticated AI tools that understand context better, generate more reliable code, and integrate seamlessly into development workflows.</p>
    `,
  },
  'cybersecurity-best-practices': {
    title: 'Cybersecurity Best Practices for 2024',
    date: '2024-07-10',
    author: 'Sarah Chen',
    tags: ['Security', 'DevOps', 'Best Practices'],
    readTime: '12 min read',
    category: 'Security',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    content: `
      <h2>The Evolving Cybersecurity Landscape</h2>
      <p>As cyber threats become more sophisticated, organizations must adopt comprehensive security strategies that go beyond traditional perimeter defense. In 2024, the focus has shifted to zero-trust architectures, AI-powered threat detection, and proactive security measures.</p>

      <h2>Essential Security Practices</h2>
      <h3>1. Zero-Trust Architecture</h3>
      <p>Implement a "never trust, always verify" approach where every user and device must be authenticated and authorized before accessing resources.</p>

      <h3>2. Multi-Factor Authentication (MFA)</h3>
      <p>Deploy MFA across all systems and applications to add an extra layer of security beyond passwords.</p>

      <h3>3. Regular Security Audits</h3>
      <p>Conduct comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards.</p>

      <h3>4. Employee Training</h3>
      <p>Educate staff about phishing attacks, social engineering, and other common threat vectors.</p>

      <h2>DevSecOps Integration</h2>
      <p>Security should be integrated into every stage of the development lifecycle:</p>
      <ul>
        <li>Automated security testing in CI/CD pipelines</li>
        <li>Container and infrastructure security scanning</li>
        <li>Secure coding practices and code reviews</li>
        <li>Runtime application self-protection (RASP)</li>
      </ul>

      <h2>Incident Response Planning</h2>
      <p>Develop and regularly test incident response procedures to minimize the impact of security breaches. This includes:</p>
      <ul>
        <li>Clear escalation procedures</li>
        <li>Communication protocols</li>
        <li>Recovery and business continuity plans</li>
        <li>Post-incident analysis and improvement</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The future of cybersecurity will be shaped by AI and machine learning, quantum computing threats, and the continued expansion of IoT devices. Organizations must stay agile and continuously adapt their security strategies.</p>
    `,
  },
  'cloud-architecture-patterns': {
    title: 'Modern Cloud Architecture Patterns',
    date: '2024-07-05',
    author: 'David Park',
    tags: ['Cloud', 'Architecture', 'DevOps'],
    readTime: '15 min read',
    category: 'Cloud',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    content: `
      <h2>Evolution of Cloud Architecture</h2>
      <p>Cloud architecture has evolved from simple lift-and-shift migrations to sophisticated, cloud-native designs that leverage the full potential of cloud platforms. Modern applications require scalable, resilient, and cost-effective architectures.</p>

      <h2>Key Architecture Patterns</h2>
      <h3>1. Microservices Architecture</h3>
      <p>Break down monolithic applications into smaller, independently deployable services that can be developed, scaled, and maintained separately.</p>

      <h3>2. Event-Driven Architecture</h3>
      <p>Use events to trigger and communicate between decoupled services, enabling real-time processing and improved scalability.</p>

      <h3>3. Serverless Computing</h3>
      <p>Leverage Functions-as-a-Service (FaaS) to run code without managing servers, reducing operational overhead and costs.</p>

      <h3>4. Container Orchestration</h3>
      <p>Use Kubernetes and similar platforms to manage containerized applications at scale with automated deployment, scaling, and management.</p>

      <h2>Design Principles</h2>
      <ul>
        <li><strong>Scalability:</strong> Design for horizontal scaling to handle varying loads</li>
        <li><strong>Resilience:</strong> Implement fault tolerance and graceful degradation</li>
        <li><strong>Security:</strong> Apply defense-in-depth strategies</li>
        <li><strong>Observability:</strong> Include comprehensive monitoring and logging</li>
        <li><strong>Cost Optimization:</strong> Use resources efficiently and implement auto-scaling</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>When implementing cloud architecture patterns:</p>
      <ul>
        <li>Start with a well-architected framework</li>
        <li>Use infrastructure as code (IaC) for consistency</li>
        <li>Implement CI/CD pipelines for automated deployments</li>
        <li>Monitor performance and costs continuously</li>
        <li>Plan for disaster recovery and business continuity</li>
      </ul>

      <h2>Future Trends</h2>
      <p>Emerging trends in cloud architecture include edge computing, AI/ML integration, and sustainable computing practices. Organizations should stay informed about these developments to maintain competitive advantages.</p>
    `,
  },
  'mobile-app-performance': {
    title: 'Optimizing Mobile App Performance',
    date: '2024-06-30',
    author: 'Maria Gomez',
    tags: ['Mobile', 'Performance', 'Optimization'],
    readTime: '9 min read',
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
    content: `
      <h2>The Importance of Mobile Performance</h2>
      <p>Mobile app performance directly impacts user experience, retention rates, and business success. Users expect apps to load quickly, respond instantly, and consume minimal battery and data.</p>

      <h2>Performance Optimization Strategies</h2>
      <h3>1. Efficient Resource Management</h3>
      <p>Optimize images, reduce bundle sizes, and implement lazy loading to minimize initial load times and memory usage.</p>

      <h3>2. Network Optimization</h3>
      <p>Implement caching strategies, compress data transfers, and use CDNs to reduce network latency and data usage.</p>

      <h3>3. Battery Optimization</h3>
      <p>Minimize background processing, optimize location services, and reduce unnecessary network requests to preserve battery life.</p>

      <h3>4. Memory Management</h3>
      <p>Implement proper memory cleanup, avoid memory leaks, and use efficient data structures to prevent crashes and slowdowns.</p>

      <h2>Platform-Specific Optimizations</h2>
      <h3>iOS Optimization</h3>
      <ul>
        <li>Use Instruments for performance profiling</li>
        <li>Implement proper view controller lifecycle management</li>
        <li>Optimize Core Data usage</li>
        <li>Leverage iOS-specific performance features</li>
      </ul>

      <h3>Android Optimization</h3>
      <ul>
        <li>Use Android Profiler for performance analysis</li>
        <li>Implement proper activity and fragment lifecycle</li>
        <li>Optimize database queries and operations</li>
        <li>Leverage Android-specific optimization tools</li>
      </ul>

      <h2>Performance Monitoring</h2>
      <p>Implement comprehensive performance monitoring to track:</p>
      <ul>
        <li>App launch times and screen load times</li>
        <li>Memory usage and garbage collection</li>
        <li>Network request performance</li>
        <li>Crash rates and error tracking</li>
        <li>User interaction responsiveness</li>
      </ul>

      <h2>Testing and Validation</h2>
      <p>Regular performance testing should include device testing across different hardware configurations, network conditions, and usage patterns. Automated performance testing can help catch regressions early in the development cycle.</p>
    `,
  },
};

const authors = {
  'Alex Kim': {
    bio: 'Lead Developer at RecursionSoft. Loves React and clean code.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Lead Developer',
    expertise: ['React', 'Node.js', 'AI/ML'],
    social: {
      twitter: '@alexkim_dev',
      github: 'alexkim-dev',
      linkedin: 'alex-kim-developer',
    },
  },
  'Maria Gomez': {
    bio: 'UI/UX Designer at RecursionSoft. Passionate about user-centric design.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'UI/UX Designer',
    expertise: ['Design Systems', 'User Research', 'Prototyping'],
    social: {
      twitter: '@mariagomez_ux',
      dribbble: 'mariagomez',
      linkedin: 'maria-gomez-designer',
    },
  },
  'Sarah Chen': {
    bio: 'Security Engineer at RecursionSoft. Expert in cybersecurity and DevSecOps.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'Security Engineer',
    expertise: ['Cybersecurity', 'DevSecOps', 'Penetration Testing'],
    social: {
      twitter: '@sarahchen_sec',
      github: 'sarahchen-security',
      linkedin: 'sarah-chen-security',
    },
  },
  'David Park': {
    bio: 'Cloud Architect at RecursionSoft. Specializes in scalable cloud solutions.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Cloud Architect',
    expertise: ['AWS', 'Kubernetes', 'Microservices'],
    social: {
      twitter: '@davidpark_cloud',
      github: 'davidpark-architect',
      linkedin: 'david-park-cloud',
    },
  },
};

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);

  const post = id ? posts[id as keyof typeof posts] : null;
  const author = post ? authors[post.author as keyof typeof authors] : null;

  // Generate dynamic code lines for background
  useEffect(() => {
    const techLines = [
      'const article = () => { return "deep insights"; }',
      'function shareWisdom() { return knowledge + experience; }',
      'class TechArticle extends Content { render() { return value; } }',
      'let learning = reading + practicing + sharing;',
      'async function masterSkill() { await readMore(); }',
      'const growth = "Continuous learning and improvement";',
    ];
    setCodeLines(techLines);
  }, []);

  // Reading progress tracker
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

  if (!post || !author) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-200"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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

          {/* Floating Tech Icons */}
          {Array.from({ length: 10 }).map((_, i) => (
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
              {['📝', '💡', '🚀', '⚡', '🔧'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
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
          </div>

          {/* Article Header */}
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-purple-300">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={author.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-purple-400/50"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">{post.author}</div>
                  <div className="text-gray-400 text-sm">{author.role}</div>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-600"></div>

              <div className="text-gray-400 text-sm">
                <div>{post.date}</div>
                <div>{post.readTime}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div
                className="prose prose-lg prose-invert max-w-none"
                style={
                  {
                    '--tw-prose-body': 'rgb(209 213 219)',
                    '--tw-prose-headings': 'rgb(255 255 255)',
                    '--tw-prose-lead': 'rgb(156 163 175)',
                    '--tw-prose-links': 'rgb(168 85 247)',
                    '--tw-prose-bold': 'rgb(255 255 255)',
                    '--tw-prose-counters': 'rgb(156 163 175)',
                    '--tw-prose-bullets': 'rgb(75 85 99)',
                    '--tw-prose-hr': 'rgb(55 65 81)',
                    '--tw-prose-quotes': 'rgb(255 255 255)',
                    '--tw-prose-quote-borders': 'rgb(75 85 99)',
                    '--tw-prose-captions': 'rgb(156 163 175)',
                    '--tw-prose-code': 'rgb(255 255 255)',
                    '--tw-prose-pre-code': 'rgb(209 213 219)',
                    '--tw-prose-pre-bg': 'rgb(17 24 39)',
                    '--tw-prose-th-borders': 'rgb(75 85 99)',
                    '--tw-prose-td-borders': 'rgb(55 65 81)',
                  } as React.CSSProperties
                }
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <img
                    src={author.avatar}
                    alt={post.author}
                    className="w-24 h-24 rounded-full border-4 border-cyan-400/50"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {author.role}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {author.bio}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {author.expertise.map(skill => (
                      <span
                        key={skill}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start gap-4">
                    {Object.entries(author.social).map(([platform, handle]) => (
                      <a
                        key={platform}
                        href={`#${handle}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        title={`${platform}: ${handle}`}
                      >
                        <span className="capitalize">{platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles / CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Enjoyed This Article?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Discover more insights and stay updated with the latest in
            technology and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              More Articles
            </Link>

            <button className="inline-flex items-center justify-center border-2 border-purple-400/30 bg-purple-400/10 text-purple-300 px-8 py-4 rounded-2xl font-bold hover:bg-purple-400/20 transition-all duration-300 backdrop-blur-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Share Article
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
