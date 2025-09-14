import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const productData = {
  novabank: {
    name: 'NovaBank',
    tagline: 'Next-Generation Digital Banking Platform',
    description: 'Revolutionary digital banking platform that combines cutting-edge AI technology with intuitive user experience to deliver seamless financial services for the modern world.',
    hero_image: 'https://picsum.photos/seed/novabank-hero/1200/600',
    gradient: 'from-blue-600 to-purple-600',
    accentColor: 'blue',
    category: 'FinTech',
    status: 'Live',
    users: '50,000+',
    rating: 4.9,
    reviews: 1250,
    founded: '2023',
    headquarters: 'San Francisco, CA',
    employees: '150+',
    funding: '$25M Series A',
    awards: ['FinTech Innovation Award 2023', 'Best Banking App 2023', 'AI Excellence Award'],
    features: [
      {
        icon: '🤖',
        title: 'AI Financial Insights',
        desc: 'Advanced machine learning algorithms analyze your spending patterns and provide personalized financial recommendations.',
        details: 'Our proprietary AI engine processes over 10 million data points daily to deliver hyper-personalized financial insights. Features include predictive spending analysis, automated budget optimization, investment opportunity alerts, and risk assessment. The system learns from your behavior patterns to provide increasingly accurate recommendations over time.',
        benefits: ['Increase savings by 23% on average', 'Reduce unnecessary spending', 'Optimize investment portfolio', 'Predict future cash flow'],
        metrics: { accuracy: '94%', users: '45K+', savings: '$2.3M' }
      },
      {
        icon: '⚡',
        title: 'Instant Transactions',
        desc: 'Lightning-fast money transfers and payments with real-time processing and confirmation.',
        details: 'Experience sub-second transaction processing with our globally distributed infrastructure. Supporting domestic transfers, international wire transfers, cryptocurrency exchanges, and merchant payments with industry-leading speed and reliability.',
        benefits: ['Sub-second processing time', '99.99% uptime guarantee', 'Global reach to 150+ countries', 'Minimal transaction fees'],
        metrics: { speed: '<500ms', uptime: '99.99%', countries: '150+' }
      },
      {
        icon: '🔒',
        title: 'Bank-Grade Security',
        desc: 'Multi-layered security with biometric authentication and blockchain technology.',
        details: 'Military-grade encryption, advanced fraud detection, biometric authentication, and blockchain-secured transactions. Compliant with PCI DSS, SOX, and international banking regulations. 24/7 security monitoring with AI-powered threat detection.',
        benefits: ['Zero security breaches to date', 'Biometric authentication', 'Real-time fraud detection', 'Insurance coverage up to $1M'],
        metrics: { encryption: 'AES-256', breaches: '0', coverage: '$1M' }
      },
      {
        icon: '📱',
        title: 'Mobile-First Design',
        desc: 'Intuitive mobile app with seamless cross-platform synchronization.',
        details: 'Native iOS and Android applications with offline capabilities, push notifications, Apple Pay/Google Pay integration, and seamless desktop synchronization. Designed for accessibility with support for screen readers and voice commands.',
        benefits: ['Native mobile experience', 'Offline functionality', 'Cross-platform sync', 'Accessibility compliant'],
        metrics: { rating: '4.8/5', downloads: '500K+', platforms: '4' }
      },
      {
        icon: '📊',
        title: 'Advanced Analytics',
        desc: 'Comprehensive financial dashboards with detailed spending analysis.',
        details: 'Interactive dashboards with real-time data visualization, spending categorization, goal tracking, financial health scoring, and predictive analytics. Export capabilities and API access for third-party integrations.',
        benefits: ['Real-time insights', 'Custom reporting', 'Goal tracking', 'Predictive analytics'],
        metrics: { categories: '50+', reports: '25+', accuracy: '96%' }
      },
      {
        icon: '🌐',
        title: 'Global Accessibility',
        desc: 'Multi-currency support with competitive exchange rates.',
        details: 'Support for 50+ currencies with real-time exchange rates, international banking partnerships, SWIFT network integration, and compliance with local banking regulations in 150+ countries.',
        benefits: ['50+ supported currencies', 'Competitive exchange rates', 'Global banking network', 'Local compliance'],
        metrics: { currencies: '50+', countries: '150+', partners: '200+' }
      },
      {
        icon: '🎯',
        title: 'Smart Budgeting',
        desc: 'Intelligent budget creation and management with automated tracking.',
        details: 'AI-powered budget recommendations based on income, spending patterns, and financial goals. Automatic categorization, spending alerts, and budget optimization suggestions to help you stay on track.',
        benefits: ['Automated budget creation', 'Smart spending alerts', 'Goal-based budgeting', 'Expense categorization'],
        metrics: { categories: '30+', accuracy: '92%', users: '38K+' }
      },
      {
        icon: '💳',
        title: 'Digital Wallet',
        desc: 'Secure digital wallet with contactless payments and loyalty integration.',
        details: 'Comprehensive digital wallet supporting contactless payments, loyalty card storage, receipt management, and merchant rewards. Integration with major payment networks and loyalty programs.',
        benefits: ['Contactless payments', 'Loyalty integration', 'Receipt management', 'Merchant rewards'],
        metrics: { merchants: '10K+', rewards: '$500K+', transactions: '2M+' }
      }
    ],
    useCases: [
      {
        title: 'Personal Banking',
        description: 'Individual users seeking modern banking solutions',
        benefits: ['Personalized financial insights', 'Easy money management', 'Investment tracking']
      },
      {
        title: 'Small Businesses',
        description: 'SMEs needing efficient financial management',
        benefits: ['Business account management', 'Expense tracking', 'Payment processing']
      },
      {
        title: 'Enterprise Solutions',
        description: 'Large organizations requiring scalable banking',
        benefits: ['Multi-user access', 'Advanced reporting', 'API integrations']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/novabank-dashboard/1200/800',
        title: 'AI-Powered Dashboard',
        description: 'Comprehensive financial dashboard with real-time AI insights, spending analysis, and personalized recommendations',
        category: 'Dashboard',
        features: ['Real-time balance updates', 'AI spending insights', 'Goal tracking', 'Quick actions']
      },
      {
        url: 'https://picsum.photos/seed/novabank-mobile/1200/800',
        title: 'Mobile Banking App',
        description: 'Native mobile experience with biometric authentication, offline capabilities, and seamless transactions',
        category: 'Mobile',
        features: ['Biometric login', 'Offline mode', 'Push notifications', 'Quick transfers']
      },
      {
        url: 'https://picsum.photos/seed/novabank-analytics/1200/800',
        title: 'Advanced Analytics',
        description: 'Interactive charts and detailed spending analysis with predictive insights and custom reporting',
        category: 'Analytics',
        features: ['Interactive charts', 'Spending categories', 'Trend analysis', 'Export reports']
      },
      {
        url: 'https://picsum.photos/seed/novabank-security/1200/800',
        title: 'Security Center',
        description: 'Comprehensive security management with multi-factor authentication and fraud monitoring',
        category: 'Security',
        features: ['2FA setup', 'Device management', 'Fraud alerts', 'Security logs']
      },
      {
        url: 'https://picsum.photos/seed/novabank-transactions/1200/800',
        title: 'Transaction Management',
        description: 'Instant transfers, payment scheduling, and transaction history with advanced search and filtering',
        category: 'Transactions',
        features: ['Instant transfers', 'Scheduled payments', 'Transaction search', 'Receipt storage']
      },
      {
        url: 'https://picsum.photos/seed/novabank-investments/1200/800',
        title: 'Investment Portfolio',
        description: 'AI-powered investment recommendations, portfolio tracking, and market insights',
        category: 'Investments',
        features: ['Portfolio tracking', 'AI recommendations', 'Market insights', 'Risk analysis']
      }
    ],
    technologies: [
      { name: 'React', category: 'Frontend', description: 'Modern UI framework for responsive interfaces' },
      { name: 'Node.js', category: 'Backend', description: 'Scalable server-side JavaScript runtime' },
      { name: 'PostgreSQL', category: 'Database', description: 'Robust relational database for financial data' },
      { name: 'Redis', category: 'Caching', description: 'High-performance in-memory data store' },
      { name: 'Docker', category: 'DevOps', description: 'Containerization for consistent deployments' },
      { name: 'AWS', category: 'Cloud', description: 'Scalable cloud infrastructure and services' },
      { name: 'TensorFlow', category: 'AI/ML', description: 'Machine learning for financial insights' },
      { name: 'Blockchain', category: 'Security', description: 'Distributed ledger for secure transactions' }
    ],
    pricing: [
      {
        plan: 'Personal',
        price: 'Free',
        period: '',
        description: 'Perfect for individual users',
        features: [
          'Basic account management',
          'Mobile app access',
          'Standard transfers',
          'Email support',
          'Basic analytics'
        ],
        cta: 'Get Started Free',
        popular: false
      },
      {
        plan: 'Premium',
        price: '$9.99',
        period: '/month',
        description: 'Advanced features for power users',
        features: [
          'All Personal features',
          'AI financial insights',
          'Priority support',
          'Advanced analytics',
          'Investment tracking',
          'Multi-currency support'
        ],
        cta: 'Start Premium Trial',
        popular: true
      },
      {
        plan: 'Business',
        price: '$29.99',
        period: '/month',
        description: 'Comprehensive solution for businesses',
        features: [
          'All Premium features',
          'Multi-user access',
          'API integrations',
          'Custom reporting',
          'Dedicated support',
          'White-label options'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Financial Advisor',
        company: 'WealthTech Solutions',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        content: 'NovaBank has revolutionized how I manage my clients\' finances. The AI insights are incredibly accurate and have helped increase portfolio performance by 23%. The platform\'s intuitive design makes complex financial data accessible to everyone.',
        rating: 5,
        metrics: { improvement: '23%', clients: '150+', time_saved: '15hrs/week' },
        date: '2023-11-15'
      },
      {
        name: 'Michael Chen',
        role: 'CEO',
        company: 'StartupFlow Inc.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        content: 'The business features are exactly what we needed. Multi-user access and API integrations have streamlined our entire financial workflow. We\'ve reduced manual processes by 80% and improved cash flow visibility significantly.',
        rating: 5,
        metrics: { efficiency: '80%', users: '25', integration_time: '2 days' },
        date: '2023-10-22'
      },
      {
        name: 'Dr. Emily Rodriguez',
        role: 'Chief Financial Officer',
        company: 'MedTech Innovations',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        content: 'The security features give us complete confidence in managing our financial operations. The fraud detection system caught 3 potential threats in our first month, saving us thousands of dollars.',
        rating: 5,
        metrics: { threats_detected: '3', savings: '$15K', security_score: '98%' },
        date: '2023-12-03'
      },
      {
        name: 'James Wilson',
        role: 'Small Business Owner',
        company: 'Wilson\'s Bakery',
        avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
        content: 'As a small business owner, NovaBank\'s mobile app has been a game-changer. I can manage payments, track expenses, and monitor cash flow from anywhere. The AI budgeting suggestions helped me save 15% on operational costs.',
        rating: 5,
        metrics: { cost_savings: '15%', mobile_usage: '90%', satisfaction: '5/5' },
        date: '2023-11-28'
      },
      {
        name: 'Lisa Park',
        role: 'Personal Finance Blogger',
        company: 'MoneyWise Blog',
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
        content: 'I\'ve reviewed dozens of banking apps, and NovaBank stands out for its user experience and AI capabilities. The spending insights are incredibly detailed, and the goal tracking feature has helped me save for my dream vacation.',
        rating: 5,
        metrics: { followers: '50K+', engagement: '12%', goal_achievement: '100%' },
        date: '2023-12-10'
      },
      {
        name: 'Robert Kim',
        role: 'IT Director',
        company: 'TechCorp Solutions',
        avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
        content: 'The API integration was seamless, and the developer documentation is excellent. We integrated NovaBank with our existing systems in just 2 days. The webhook support and real-time notifications work flawlessly.',
        rating: 5,
        metrics: { integration_time: '2 days', api_calls: '1M+/month', uptime: '99.99%' },
        date: '2023-11-05'
      }
    ],
    caseStudies: [
      {
        title: 'StartupFlow Inc. - 80% Process Automation',
        company: 'StartupFlow Inc.',
        industry: 'Technology',
        challenge: 'Manual financial processes consuming 20+ hours weekly',
        solution: 'Implemented NovaBank Business with API integrations and multi-user access',
        results: ['80% reduction in manual processes', '15 hours saved per week', '99.9% accuracy in financial reporting'],
        metrics: { efficiency: '80%', time_saved: '15hrs', accuracy: '99.9%' },
        image: 'https://picsum.photos/seed/startupflow-case/600/400'
      },
      {
        title: 'WealthTech Solutions - 23% Portfolio Performance Boost',
        company: 'WealthTech Solutions',
        industry: 'Financial Services',
        challenge: 'Difficulty providing personalized investment advice at scale',
        solution: 'Leveraged NovaBank\'s AI insights for client portfolio management',
        results: ['23% average portfolio performance increase', '150+ clients managed efficiently', 'Reduced analysis time by 60%'],
        metrics: { performance: '23%', clients: '150+', time_reduction: '60%' },
        image: 'https://picsum.photos/seed/wealthtech-case/600/400'
      }
    ],
    integrations: [
      { name: 'QuickBooks', category: 'Accounting', description: 'Seamless accounting integration', logo: '📊' },
      { name: 'Stripe', category: 'Payments', description: 'Payment processing integration', logo: '💳' },
      { name: 'Salesforce', category: 'CRM', description: 'Customer relationship management', logo: '👥' },
      { name: 'Slack', category: 'Communication', description: 'Team notifications and alerts', logo: '💬' },
      { name: 'Zapier', category: 'Automation', description: 'Workflow automation platform', logo: '⚡' },
      { name: 'Microsoft 365', category: 'Productivity', description: 'Office suite integration', logo: '📄' }
    ]
  },

  fittrack: {
    name: 'FitTrack',
    tagline: 'Smart Fitness Companion for Modern Athletes',
    description: 'Comprehensive fitness tracking platform that combines AI-powered workout recommendations, nutrition planning, and social community features to help you achieve your health and fitness goals.',
    hero_image: 'https://picsum.photos/seed/fittrack-hero/1200/600',
    gradient: 'from-green-500 to-emerald-600',
    accentColor: 'green',
    category: 'Health & Fitness',
    status: 'Live',
    users: '25,000+',
    rating: 4.8,
    reviews: 890,
    founded: '2022',
    headquarters: 'Austin, TX',
    employees: '85+',
    funding: '$12M Seed Round',
    awards: ['Best Fitness App 2023', 'Health Innovation Award', 'User Choice Award'],
    features: [
      {
        icon: '🏃',
        title: 'AI Workout Planning',
        desc: 'Personalized workout routines powered by machine learning algorithms that adapt to your fitness level and goals.',
        details: 'Our AI analyzes your performance data, preferences, and goals to create dynamic workout plans that evolve with your progress. Features include exercise form analysis, progressive overload optimization, and injury prevention recommendations.',
        benefits: ['Personalized workout plans', 'Form correction alerts', 'Progressive difficulty scaling', 'Injury prevention'],
        metrics: { accuracy: '96%', workouts: '10K+', users: '22K+' }
      },
      {
        icon: '🍎',
        title: 'Nutrition Tracking',
        desc: 'Comprehensive nutrition tracking with barcode scanning, meal planning, and macro optimization.',
        details: 'Advanced nutrition database with over 2 million foods, barcode scanning, meal planning tools, and macro/micronutrient tracking. AI-powered meal suggestions based on your dietary preferences and fitness goals.',
        benefits: ['2M+ food database', 'Barcode scanning', 'Meal planning', 'Macro tracking'],
        metrics: { foods: '2M+', scans: '500K+', accuracy: '98%' }
      },
      {
        icon: '📊',
        title: 'Performance Analytics',
        desc: 'Detailed analytics and insights into your fitness progress with predictive modeling.',
        details: 'Comprehensive performance tracking with advanced analytics, progress visualization, goal setting, and predictive insights. Track strength gains, endurance improvements, and body composition changes over time.',
        benefits: ['Progress visualization', 'Goal tracking', 'Predictive insights', 'Performance trends'],
        metrics: { metrics: '50+', accuracy: '94%', insights: '1K+' }
      },
      {
        icon: '👥',
        title: 'Social Community',
        desc: 'Connect with like-minded fitness enthusiasts, share achievements, and stay motivated.',
        details: 'Vibrant fitness community with challenges, leaderboards, achievement sharing, and peer support. Join groups, participate in challenges, and get motivated by others on similar fitness journeys.',
        benefits: ['Community challenges', 'Achievement sharing', 'Peer support', 'Group workouts'],
        metrics: { users: '25K+', challenges: '500+', groups: '200+' }
      },
      {
        icon: '⌚',
        title: 'Wearable Integration',
        desc: 'Seamless integration with popular fitness wearables and health devices.',
        details: 'Connect with Apple Watch, Fitbit, Garmin, and other popular wearables. Automatic data sync, heart rate monitoring, sleep tracking, and comprehensive health metrics integration.',
        benefits: ['Multi-device sync', 'Real-time monitoring', 'Health metrics', 'Sleep tracking'],
        metrics: { devices: '15+', sync: '99.9%', users: '18K+' }
      },
      {
        icon: '🎯',
        title: 'Goal Setting & Tracking',
        desc: 'Smart goal setting with milestone tracking and achievement rewards.',
        details: 'SMART goal framework with milestone tracking, progress notifications, achievement badges, and reward systems. Set and track fitness, nutrition, and wellness goals with AI-powered recommendations.',
        benefits: ['SMART goal framework', 'Milestone tracking', 'Achievement badges', 'Progress notifications'],
        metrics: { goals: '100K+', completion: '78%', badges: '50+' }
      },
      {
        icon: '🧘',
        title: 'Wellness & Recovery',
        desc: 'Comprehensive wellness tracking including sleep, stress, and recovery metrics.',
        details: 'Holistic wellness approach with sleep quality analysis, stress monitoring, recovery recommendations, and mindfulness integration. Track HRV, sleep patterns, and stress levels for optimal recovery.',
        benefits: ['Sleep analysis', 'Stress monitoring', 'Recovery tracking', 'Mindfulness integration'],
        metrics: { sleep_accuracy: '92%', recovery: '15K+', wellness: '95%' }
      },
      {
        icon: '📱',
        title: 'Mobile & Offline',
        desc: 'Native mobile apps with offline workout capabilities and cloud synchronization.',
        details: 'Native iOS and Android apps with offline workout mode, cloud synchronization, Apple Health/Google Fit integration, and seamless cross-device experience.',
        benefits: ['Offline workouts', 'Cloud sync', 'Health app integration', 'Cross-device sync'],
        metrics: { rating: '4.8/5', downloads: '100K+', offline: '100%' }
      }
    ],
    useCases: [
      {
        title: 'Personal Fitness',
        description: 'Individual users focused on health and fitness goals',
        benefits: ['Personalized workout plans', 'Nutrition tracking', 'Progress monitoring', 'Community support']
      },
      {
        title: 'Athletic Training',
        description: 'Athletes and serious fitness enthusiasts',
        benefits: ['Advanced analytics', 'Performance optimization', 'Recovery tracking', 'Competition preparation']
      },
      {
        title: 'Corporate Wellness',
        description: 'Companies promoting employee health and wellness',
        benefits: ['Team challenges', 'Wellness programs', 'Health metrics', 'Engagement tracking']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/fittrack-dashboard/1200/800',
        title: 'Fitness Dashboard',
        description: 'Comprehensive fitness dashboard with workout tracking, progress visualization, and personalized recommendations',
        category: 'Dashboard',
        features: ['Workout history', 'Progress charts', 'Goal tracking', 'Quick actions']
      },
      {
        url: 'https://picsum.photos/seed/fittrack-workout/1200/800',
        title: 'AI Workout Planner',
        description: 'Intelligent workout planning with exercise demonstrations, form guidance, and real-time adjustments',
        category: 'Workouts',
        features: ['Exercise library', 'Form guidance', 'Timer integration', 'Progress tracking']
      },
      {
        url: 'https://picsum.photos/seed/fittrack-nutrition/1200/800',
        title: 'Nutrition Tracker',
        description: 'Advanced nutrition tracking with barcode scanning, meal planning, and macro optimization',
        category: 'Nutrition',
        features: ['Barcode scanning', 'Meal planning', 'Macro tracking', 'Recipe suggestions']
      },
      {
        url: 'https://picsum.photos/seed/fittrack-social/1200/800',
        title: 'Social Community',
        description: 'Vibrant fitness community with challenges, leaderboards, and achievement sharing',
        category: 'Social',
        features: ['Community challenges', 'Leaderboards', 'Achievement sharing', 'Group workouts']
      },
      {
        url: 'https://picsum.photos/seed/fittrack-analytics/1200/800',
        title: 'Performance Analytics',
        description: 'Detailed performance analytics with progress trends, insights, and predictive modeling',
        category: 'Analytics',
        features: ['Progress trends', 'Performance insights', 'Goal analysis', 'Predictive modeling']
      },
      {
        url: 'https://picsum.photos/seed/fittrack-wearables/1200/800',
        title: 'Wearable Integration',
        description: 'Seamless integration with popular fitness wearables and health monitoring devices',
        category: 'Integration',
        features: ['Device sync', 'Health metrics', 'Real-time monitoring', 'Data visualization']
      }
    ],
    technologies: [
      { name: 'React Native', category: 'Mobile', description: 'Cross-platform mobile app development' },
      { name: 'Python', category: 'Backend', description: 'AI/ML algorithms and data processing' },
      { name: 'TensorFlow', category: 'AI/ML', description: 'Machine learning for workout optimization' },
      { name: 'PostgreSQL', category: 'Database', description: 'Robust data storage for user metrics' },
      { name: 'Redis', category: 'Caching', description: 'High-performance data caching' },
      { name: 'HealthKit/Google Fit', category: 'Integration', description: 'Native health platform integration' },
      { name: 'WebRTC', category: 'Communication', description: 'Real-time video coaching features' },
      { name: 'AWS', category: 'Cloud', description: 'Scalable cloud infrastructure' }
    ],
    pricing: [
      {
        plan: 'Basic',
        price: 'Free',
        period: '',
        description: 'Perfect for fitness beginners',
        features: [
          'Basic workout tracking',
          'Exercise library access',
          'Progress monitoring',
          'Community access',
          'Mobile app'
        ],
        cta: 'Get Started Free',
        popular: false
      },
      {
        plan: 'Pro',
        price: '$9.99',
        period: '/month',
        description: 'Advanced features for serious athletes',
        features: [
          'All Basic features',
          'AI workout planning',
          'Nutrition tracking',
          'Performance analytics',
          'Wearable integration',
          'Priority support'
        ],
        cta: 'Start Pro Trial',
        popular: true
      },
      {
        plan: 'Coach',
        price: '$19.99',
        period: '/month',
        description: 'Professional coaching and guidance',
        features: [
          'All Pro features',
          'Personal trainer access',
          'Custom meal plans',
          'Video form analysis',
          'Recovery optimization',
          'Advanced analytics'
        ],
        cta: 'Get Coaching',
        popular: false
      }
    ],
    testimonials: [
      {
        name: 'Alex Thompson',
        role: 'Marathon Runner',
        company: 'Austin Running Club',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        content: 'FitTrack transformed my training routine. The AI workout planning helped me improve my marathon time by 12 minutes, and the recovery tracking prevented overtraining injuries. The community support keeps me motivated every day.',
        rating: 5,
        metrics: { improvement: '12min', training_days: '180', goals_achieved: '8' },
        date: '2023-11-20'
      },
      {
        name: 'Sarah Martinez',
        role: 'Fitness Instructor',
        company: 'Elite Fitness Studio',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        content: 'As a fitness instructor, I recommend FitTrack to all my clients. The form analysis feature is incredibly accurate, and the nutrition tracking helps them see real results. My clients love the community challenges.',
        rating: 5,
        metrics: { clients: '50+', retention: '95%', satisfaction: '4.9/5' },
        date: '2023-12-05'
      },
      {
        name: 'Mike Johnson',
        role: 'Corporate Wellness Manager',
        company: 'TechCorp Inc.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        content: 'We implemented FitTrack for our corporate wellness program and saw amazing results. Employee engagement increased by 60%, and our health insurance costs decreased by 15%. The team challenges are a huge hit.',
        rating: 5,
        metrics: { engagement: '60%', cost_reduction: '15%', participants: '500+' },
        date: '2023-10-15'
      }
    ],
    caseStudies: [
      {
        title: 'Austin Running Club - 40% Performance Improvement',
        company: 'Austin Running Club',
        industry: 'Sports & Recreation',
        challenge: 'Members struggling with inconsistent training and high injury rates',
        solution: 'Implemented FitTrack Pro with AI workout planning and recovery tracking',
        results: ['40% improvement in average race times', '60% reduction in training injuries', '85% increase in member retention'],
        metrics: { performance: '40%', injury_reduction: '60%', retention: '85%' },
        image: 'https://picsum.photos/seed/fittrack-running-case/600/400'
      },
      {
        title: 'Elite Fitness Studio - 95% Client Retention',
        company: 'Elite Fitness Studio',
        industry: 'Fitness & Wellness',
        challenge: 'Low client retention and difficulty tracking progress across multiple trainers',
        solution: 'Integrated FitTrack Coach for all personal training sessions',
        results: ['95% client retention rate', '30% increase in session bookings', '50% improvement in client goal achievement'],
        metrics: { retention: '95%', bookings: '30%', goal_achievement: '50%' },
        image: 'https://picsum.photos/seed/fittrack-studio-case/600/400'
      }
    ],
    integrations: [
      { name: 'Apple Health', category: 'Health', description: 'Native iOS health data integration', logo: '🍎' },
      { name: 'Google Fit', category: 'Health', description: 'Android health platform integration', logo: '🤖' },
      { name: 'Fitbit', category: 'Wearables', description: 'Fitbit device synchronization', logo: '⌚' },
      { name: 'Garmin', category: 'Wearables', description: 'Garmin watch integration', logo: '📍' },
      { name: 'MyFitnessPal', category: 'Nutrition', description: 'Nutrition data synchronization', logo: '🍽️' },
      { name: 'Strava', category: 'Social', description: 'Activity sharing and social features', logo: '🏃' }
    ]
  },

  shopease: {
    name: 'ShopEase',
    tagline: 'E-commerce Platform Reimagined for Modern Retailers',
    description: 'Comprehensive e-commerce solution with AI-powered recommendations, advanced analytics, multi-vendor support, and seamless checkout experience designed for modern online retailers.',
    hero_image: 'https://picsum.photos/seed/shopease-hero/1200/600',
    gradient: 'from-orange-500 to-red-600',
    accentColor: 'orange',
    category: 'E-commerce',
    status: 'Live',
    users: '100,000+',
    rating: 4.7,
    reviews: 2150,
    founded: '2021',
    headquarters: 'San Francisco, CA',
    employees: '200+',
    funding: '$35M Series B',
    awards: ['E-commerce Platform of the Year 2023', 'Innovation in Retail Award', 'Best User Experience'],
    features: [
      {
        icon: '🤖',
        title: 'AI Product Recommendations',
        desc: 'Advanced machine learning algorithms that analyze customer behavior to provide personalized product recommendations.',
        details: 'Our recommendation engine processes millions of data points including browsing history, purchase patterns, seasonal trends, and customer preferences to deliver highly relevant product suggestions that increase conversion rates by up to 35%.',
        benefits: ['35% higher conversion rates', 'Personalized shopping experience', 'Increased average order value', 'Reduced cart abandonment'],
        metrics: { accuracy: '92%', conversion_lift: '35%', users: '85K+' }
      },
      {
        icon: '📊',
        title: 'Advanced Analytics Dashboard',
        desc: 'Comprehensive analytics platform with real-time insights, sales tracking, and customer behavior analysis.',
        details: 'Real-time analytics dashboard providing detailed insights into sales performance, customer behavior, inventory management, and marketing effectiveness. Features include cohort analysis, funnel optimization, and predictive analytics.',
        benefits: ['Real-time sales tracking', 'Customer behavior insights', 'Inventory optimization', 'Marketing ROI analysis'],
        metrics: { metrics: '100+', accuracy: '98%', reports: '50+' }
      },
      {
        icon: '🏪',
        title: 'Multi-Vendor Marketplace',
        desc: 'Complete marketplace solution supporting multiple vendors with automated commission management.',
        details: 'Full-featured marketplace platform with vendor onboarding, product management, order fulfillment, commission tracking, and payout automation. Supports unlimited vendors with customizable commission structures.',
        benefits: ['Unlimited vendor support', 'Automated commissions', 'Vendor analytics', 'Centralized management'],
        metrics: { vendors: '5K+', transactions: '1M+', automation: '95%' }
      },
      {
        icon: '💳',
        title: 'Seamless Checkout',
        desc: 'Optimized checkout process with multiple payment options and one-click purchasing.',
        details: 'Streamlined checkout experience with guest checkout, saved payment methods, multiple payment gateways, tax calculation, shipping integration, and abandoned cart recovery. Supports 50+ payment methods globally.',
        benefits: ['One-click purchasing', '50+ payment methods', 'Cart abandonment recovery', 'Global tax compliance'],
        metrics: { conversion: '78%', abandonment_reduction: '45%', methods: '50+' }
      },
      {
        icon: '📱',
        title: 'Mobile Commerce',
        desc: 'Native mobile apps and responsive design optimized for mobile shopping experiences.',
        details: 'Mobile-first design with native iOS and Android apps, progressive web app (PWA) support, mobile payments, push notifications, and offline browsing capabilities for seamless mobile commerce.',
        benefits: ['Native mobile apps', 'PWA support', 'Mobile payments', 'Offline browsing'],
        metrics: { mobile_traffic: '65%', app_rating: '4.8/5', downloads: '250K+' }
      },
      {
        icon: '🔍',
        title: 'Smart Search & Filtering',
        desc: 'AI-powered search with intelligent filtering, auto-suggestions, and visual search capabilities.',
        details: 'Advanced search functionality with natural language processing, visual search, voice search, intelligent filters, search analytics, and personalized search results based on user behavior and preferences.',
        benefits: ['Visual search capability', 'Voice search support', 'Intelligent filtering', 'Personalized results'],
        metrics: { search_accuracy: '94%', usage: '80%', satisfaction: '4.7/5' }
      },
      {
        icon: '📦',
        title: 'Inventory Management',
        desc: 'Comprehensive inventory tracking with automated reordering and multi-location support.',
        details: 'Advanced inventory management system with real-time stock tracking, automated reordering, low stock alerts, multi-location inventory, supplier management, and demand forecasting.',
        benefits: ['Real-time stock tracking', 'Automated reordering', 'Multi-location support', 'Demand forecasting'],
        metrics: { accuracy: '99.5%', locations: '100+', automation: '90%' }
      },
      {
        icon: '🎯',
        title: 'Marketing Automation',
        desc: 'Integrated marketing tools with email campaigns, social media integration, and customer segmentation.',
        details: 'Complete marketing automation suite with email marketing, SMS campaigns, social media integration, customer segmentation, loyalty programs, and personalized marketing campaigns based on customer behavior.',
        benefits: ['Email automation', 'Customer segmentation', 'Loyalty programs', 'Social integration'],
        metrics: { open_rate: '28%', conversion: '12%', segments: '500+' }
      }
    ],
    useCases: [
      {
        title: 'Small to Medium Retailers',
        description: 'Growing businesses looking to establish online presence',
        benefits: ['Easy setup and management', 'Affordable pricing', 'Built-in marketing tools', 'Mobile optimization']
      },
      {
        title: 'Enterprise E-commerce',
        description: 'Large retailers requiring advanced features and scalability',
        benefits: ['Multi-vendor support', 'Advanced analytics', 'Custom integrations', 'Enterprise security']
      },
      {
        title: 'Marketplace Operators',
        description: 'Businesses creating multi-vendor marketplaces',
        benefits: ['Vendor management', 'Commission automation', 'Centralized operations', 'Scalable infrastructure']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/shopease-dashboard/1200/800',
        title: 'Admin Dashboard',
        description: 'Comprehensive admin dashboard with sales analytics, order management, and business insights',
        category: 'Dashboard',
        features: ['Sales analytics', 'Order management', 'Inventory tracking', 'Customer insights']
      },
      {
        url: 'https://picsum.photos/seed/shopease-storefront/1200/800',
        title: 'Modern Storefront',
        description: 'Beautiful, responsive storefront with AI-powered product recommendations and smart search',
        category: 'Storefront',
        features: ['Product recommendations', 'Smart search', 'Responsive design', 'Quick view']
      },
      {
        url: 'https://picsum.photos/seed/shopease-mobile/1200/800',
        title: 'Mobile Shopping App',
        description: 'Native mobile app with seamless shopping experience and mobile-optimized checkout',
        category: 'Mobile',
        features: ['Native app experience', 'Mobile checkout', 'Push notifications', 'Offline browsing']
      },
      {
        url: 'https://picsum.photos/seed/shopease-analytics/1200/800',
        title: 'Analytics & Reports',
        description: 'Advanced analytics dashboard with sales insights, customer behavior, and performance metrics',
        category: 'Analytics',
        features: ['Sales insights', 'Customer analytics', 'Performance metrics', 'Custom reports']
      },
      {
        url: 'https://picsum.photos/seed/shopease-vendor/1200/800',
        title: 'Vendor Management',
        description: 'Complete vendor portal with product management, order fulfillment, and commission tracking',
        category: 'Vendors',
        features: ['Vendor portal', 'Product management', 'Order tracking', 'Commission reports']
      },
      {
        url: 'https://picsum.photos/seed/shopease-checkout/1200/800',
        title: 'Optimized Checkout',
        description: 'Streamlined checkout process with multiple payment options and guest checkout',
        category: 'Checkout',
        features: ['Guest checkout', 'Multiple payments', 'Tax calculation', 'Shipping options']
      }
    ],
    technologies: [
      { name: 'Vue.js', category: 'Frontend', description: 'Progressive web application framework' },
      { name: 'Laravel', category: 'Backend', description: 'PHP framework for web applications' },
      { name: 'MySQL', category: 'Database', description: 'Relational database for e-commerce data' },
      { name: 'Redis', category: 'Caching', description: 'High-performance caching solution' },
      { name: 'Elasticsearch', category: 'Search', description: 'Advanced search and analytics engine' },
      { name: 'Stripe', category: 'Payments', description: 'Payment processing integration' },
      { name: 'AWS', category: 'Cloud', description: 'Scalable cloud infrastructure' },
      { name: 'Docker', category: 'DevOps', description: 'Containerization for deployment' }
    ],
    pricing: [
      {
        plan: 'Starter',
        price: '$29',
        period: '/month',
        description: 'Perfect for small businesses starting online',
        features: [
          'Up to 100 products',
          'Basic analytics',
          'Mobile responsive',
          'Email support',
          'Standard themes'
        ],
        cta: 'Start Free Trial',
        popular: false
      },
      {
        plan: 'Professional',
        price: '$79',
        period: '/month',
        description: 'Advanced features for growing businesses',
        features: [
          'Unlimited products',
          'AI recommendations',
          'Advanced analytics',
          'Multi-vendor support',
          'Priority support',
          'Custom themes'
        ],
        cta: 'Start Professional',
        popular: true
      },
      {
        plan: 'Enterprise',
        price: '$199',
        period: '/month',
        description: 'Complete solution for large retailers',
        features: [
          'All Professional features',
          'White-label solution',
          'Custom integrations',
          'Dedicated support',
          'Advanced security',
          'SLA guarantee'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Walsh',
        role: 'E-commerce Director',
        company: 'Fashion Forward',
        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
        content: 'ShopEase transformed our online business. The AI recommendations increased our conversion rate by 40%, and the analytics help us make data-driven decisions. Our revenue has grown 150% since switching.',
        rating: 5,
        metrics: { conversion_increase: '40%', revenue_growth: '150%', time_saved: '20hrs/week' },
        date: '2023-11-10'
      },
      {
        name: 'David Kim',
        role: 'Marketplace Owner',
        company: 'TechHub Marketplace',
        avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
        content: 'The multi-vendor features are exceptional. We manage 500+ vendors effortlessly, and the automated commission system saves us countless hours. Our marketplace has grown 300% in the past year.',
        rating: 5,
        metrics: { vendors: '500+', growth: '300%', automation: '95%' },
        date: '2023-12-01'
      },
      {
        name: 'Lisa Rodriguez',
        role: 'Small Business Owner',
        company: 'Artisan Crafts Co.',
        avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
        content: 'As a small business owner, ShopEase made it incredibly easy to go online. The mobile app brought in 60% more customers, and the inventory management keeps everything organized. Highly recommended!',
        rating: 5,
        metrics: { mobile_customers: '60%', efficiency: '80%', satisfaction: '5/5' },
        date: '2023-10-25'
      }
    ],
    caseStudies: [
      {
        title: 'Fashion Forward - 150% Revenue Growth',
        company: 'Fashion Forward',
        industry: 'Fashion & Retail',
        challenge: 'Low online conversion rates and poor customer experience on existing platform',
        solution: 'Migrated to ShopEase with AI recommendations and mobile optimization',
        results: ['150% increase in online revenue', '40% improvement in conversion rate', '60% increase in mobile sales'],
        metrics: { revenue_growth: '150%', conversion: '40%', mobile_sales: '60%' },
        image: 'https://picsum.photos/seed/shopease-fashion-case/600/400'
      },
      {
        title: 'TechHub Marketplace - 300% Vendor Growth',
        company: 'TechHub Marketplace',
        industry: 'Technology Marketplace',
        challenge: 'Difficulty managing multiple vendors and complex commission structures',
        solution: 'Implemented ShopEase multi-vendor platform with automated commission management',
        results: ['300% increase in active vendors', '95% automation of commission processing', '50% reduction in operational costs'],
        metrics: { vendor_growth: '300%', automation: '95%', cost_reduction: '50%' },
        image: 'https://picsum.photos/seed/shopease-marketplace-case/600/400'
      }
    ],
    integrations: [
      { name: 'Shopify', category: 'Migration', description: 'Seamless migration from Shopify', logo: '🛍️' },
      { name: 'WooCommerce', category: 'Migration', description: 'WordPress e-commerce integration', logo: '🔌' },
      { name: 'PayPal', category: 'Payments', description: 'PayPal payment processing', logo: '💰' },
      { name: 'Mailchimp', category: 'Marketing', description: 'Email marketing automation', logo: '📧' },
      { name: 'Google Analytics', category: 'Analytics', description: 'Advanced web analytics', logo: '📈' },
      { name: 'Facebook Ads', category: 'Advertising', description: 'Social media advertising integration', logo: '📱' }
    ]
  },

  cloudflow: {
    name: 'CloudFlow',
    tagline: 'DevOps Automation Suite for Modern Development Teams',
    description: 'Comprehensive DevOps platform that streamlines CI/CD pipelines, infrastructure management, and team collaboration with intelligent automation and monitoring.',
    hero_image: 'https://picsum.photos/seed/cloudflow-hero/1200/600',
    gradient: 'from-indigo-500 to-purple-600',
    accentColor: 'indigo',
    category: 'DevOps',
    status: 'Beta',
    users: '5,000+',
    rating: 4.6,
    reviews: 320,
    founded: '2023',
    headquarters: 'Seattle, WA',
    employees: '45+',
    funding: '$8M Seed Round',
    awards: ['DevOps Innovation Award 2023', 'Best Developer Tool', 'Startup of the Year'],
    features: [
      {
        icon: '🚀',
        title: 'CI/CD Automation',
        desc: 'Intelligent continuous integration and deployment pipelines with automated testing and rollback capabilities.',
        details: 'Advanced CI/CD platform with parallel processing, automated testing, deployment strategies, rollback mechanisms, and integration with popular version control systems. Supports multiple environments and deployment targets.',
        benefits: ['Automated deployments', 'Parallel processing', 'Rollback capabilities', 'Multi-environment support'],
        metrics: { deployments: '10K+', success_rate: '99.2%', time_saved: '75%' }
      },
      {
        icon: '☁️',
        title: 'Infrastructure as Code',
        desc: 'Manage and provision infrastructure using declarative configuration files and version control.',
        details: 'Complete Infrastructure as Code solution with Terraform integration, cloud provider support, state management, and automated provisioning. Supports AWS, Azure, GCP, and hybrid cloud environments.',
        benefits: ['Declarative configuration', 'Version controlled infrastructure', 'Multi-cloud support', 'Automated provisioning'],
        metrics: { resources: '50K+', providers: '15+', automation: '95%' }
      },
      {
        icon: '📊',
        title: 'Monitoring & Observability',
        desc: 'Comprehensive monitoring with real-time metrics, logging, and alerting across your entire stack.',
        details: 'Full-stack observability platform with application performance monitoring, infrastructure metrics, distributed tracing, log aggregation, and intelligent alerting with anomaly detection.',
        benefits: ['Real-time monitoring', 'Distributed tracing', 'Intelligent alerting', 'Performance insights'],
        metrics: { metrics: '1M+/sec', uptime: '99.9%', alerts: '500+' }
      },
      {
        icon: '🔒',
        title: 'Security & Compliance',
        desc: 'Built-in security scanning, compliance monitoring, and vulnerability management.',
        details: 'Integrated security platform with vulnerability scanning, compliance checks, secret management, access controls, and security policy enforcement throughout the development lifecycle.',
        benefits: ['Vulnerability scanning', 'Compliance monitoring', 'Secret management', 'Policy enforcement'],
        metrics: { scans: '100K+', vulnerabilities: '5K+', compliance: '98%' }
      }
    ],
    useCases: [
      {
        title: 'Startup Development Teams',
        description: 'Small teams needing efficient DevOps practices',
        benefits: ['Quick setup', 'Cost-effective', 'Easy collaboration', 'Automated workflows']
      },
      {
        title: 'Enterprise Organizations',
        description: 'Large companies requiring scalable DevOps solutions',
        benefits: ['Enterprise security', 'Compliance features', 'Multi-team support', 'Advanced analytics']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/cloudflow-dashboard/1200/800',
        title: 'DevOps Dashboard',
        description: 'Comprehensive DevOps dashboard with pipeline status, deployment metrics, and system health',
        category: 'Dashboard',
        features: ['Pipeline overview', 'Deployment status', 'System metrics', 'Team activity']
      },
      {
        url: 'https://picsum.photos/seed/cloudflow-pipeline/1200/800',
        title: 'CI/CD Pipeline',
        description: 'Visual pipeline builder with automated testing, deployment stages, and approval workflows',
        category: 'Pipelines',
        features: ['Visual builder', 'Automated testing', 'Approval workflows', 'Stage management']
      }
    ],
    technologies: [
      { name: 'Docker', category: 'Containerization', description: 'Container platform for applications' },
      { name: 'Kubernetes', category: 'Orchestration', description: 'Container orchestration platform' },
      { name: 'Terraform', category: 'Infrastructure', description: 'Infrastructure as Code tool' },
      { name: 'Prometheus', category: 'Monitoring', description: 'Monitoring and alerting toolkit' }
    ],
    pricing: [
      {
        plan: 'Starter',
        price: '$49',
        period: '/month',
        description: 'Perfect for small development teams',
        features: [
          'Up to 5 team members',
          'Basic CI/CD pipelines',
          'Infrastructure monitoring',
          'Email support'
        ],
        cta: 'Start Free Trial',
        popular: false
      },
      {
        plan: 'Professional',
        price: '$149',
        period: '/month',
        description: 'Advanced features for growing teams',
        features: [
          'Up to 25 team members',
          'Advanced pipelines',
          'Multi-cloud support',
          'Priority support',
          'Security scanning'
        ],
        cta: 'Start Professional',
        popular: true
      }
    ],
    testimonials: [
      {
        name: 'Tom Wilson',
        role: 'DevOps Engineer',
        company: 'TechStart Inc.',
        avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
        content: 'CloudFlow simplified our entire deployment process. We reduced deployment time from 2 hours to 15 minutes and eliminated 90% of deployment failures. The team loves the intuitive interface.',
        rating: 5,
        metrics: { time_reduction: '87%', failure_reduction: '90%', satisfaction: '4.8/5' },
        date: '2023-12-15'
      }
    ],
    caseStudies: [
      {
        title: 'TechStart Inc. - 87% Deployment Time Reduction',
        company: 'TechStart Inc.',
        industry: 'Technology',
        challenge: 'Manual deployment processes causing delays and errors',
        solution: 'Implemented CloudFlow CI/CD automation with monitoring',
        results: ['87% reduction in deployment time', '90% fewer deployment failures', '50% increase in development velocity'],
        metrics: { time_reduction: '87%', failure_reduction: '90%', velocity: '50%' },
        image: 'https://picsum.photos/seed/cloudflow-case/600/400'
      }
    ],
    integrations: [
      { name: 'GitHub', category: 'Version Control', description: 'Git repository integration', logo: '🐙' },
      { name: 'Slack', category: 'Communication', description: 'Team notifications', logo: '💬' },
      { name: 'Jira', category: 'Project Management', description: 'Issue tracking integration', logo: '📋' },
      { name: 'AWS', category: 'Cloud', description: 'Amazon Web Services integration', logo: '☁️' }
    ]
  },

  datainsight: {
    name: 'DataInsight',
    tagline: 'Business Intelligence Platform for Data-Driven Decisions',
    description: 'Advanced analytics platform with real-time dashboards, predictive modeling, and automated reporting to transform your data into actionable business insights.',
    hero_image: 'https://picsum.photos/seed/datainsight-hero/1200/600',
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
    category: 'Analytics',
    status: 'Live',
    users: '15,000+',
    rating: 4.8,
    reviews: 750,
    founded: '2022',
    headquarters: 'New York, NY',
    employees: '120+',
    funding: '$20M Series A',
    awards: ['Best Analytics Platform 2023', 'Data Innovation Award', 'Enterprise Choice Award'],
    features: [
      {
        icon: '📊',
        title: 'Real-time Dashboards',
        desc: 'Interactive dashboards with real-time data visualization and customizable widgets.',
        details: 'Create stunning, interactive dashboards with drag-and-drop widgets, real-time data updates, custom visualizations, and responsive design. Support for multiple data sources and automated refresh.',
        benefits: ['Drag-and-drop builder', 'Real-time updates', 'Custom visualizations', 'Mobile responsive'],
        metrics: { dashboards: '10K+', widgets: '50+', refresh_rate: '1sec' }
      },
      {
        icon: '🔮',
        title: 'Predictive Analytics',
        desc: 'Advanced machine learning models for forecasting and trend analysis.',
        details: 'Built-in machine learning algorithms for predictive modeling, trend analysis, anomaly detection, and forecasting. Automated model selection and training with explainable AI insights.',
        benefits: ['Automated ML models', 'Trend forecasting', 'Anomaly detection', 'Explainable AI'],
        metrics: { accuracy: '94%', models: '25+', predictions: '1M+' }
      }
    ],
    useCases: [
      {
        title: 'Business Analytics',
        description: 'Companies needing comprehensive business intelligence',
        benefits: ['Sales analytics', 'Customer insights', 'Performance tracking', 'ROI analysis']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/datainsight-dashboard/1200/800',
        title: 'Analytics Dashboard',
        description: 'Interactive business intelligence dashboard with real-time metrics and insights',
        category: 'Dashboard',
        features: ['Real-time metrics', 'Interactive charts', 'Custom widgets', 'Data filtering']
      }
    ],
    technologies: [
      { name: 'Python', category: 'Backend', description: 'Data processing and ML algorithms' },
      { name: 'Apache Spark', category: 'Big Data', description: 'Large-scale data processing' },
      { name: 'D3.js', category: 'Visualization', description: 'Advanced data visualization' },
      { name: 'PostgreSQL', category: 'Database', description: 'Analytical data storage' }
    ],
    pricing: [
      {
        plan: 'Professional',
        price: '$99',
        period: '/month',
        description: 'Advanced analytics for businesses',
        features: [
          'Unlimited dashboards',
          'Predictive analytics',
          'Real-time data',
          'Priority support'
        ],
        cta: 'Start Trial',
        popular: true
      }
    ],
    testimonials: [
      {
        name: 'Maria Garcia',
        role: 'Data Analyst',
        company: 'RetailCorp',
        avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
        content: 'DataInsight transformed how we analyze our business data. The predictive models helped us increase sales by 25% and the real-time dashboards keep everyone informed.',
        rating: 5,
        metrics: { sales_increase: '25%', efficiency: '60%', accuracy: '95%' },
        date: '2023-11-30'
      }
    ],
    caseStudies: [
      {
        title: 'RetailCorp - 25% Sales Increase',
        company: 'RetailCorp',
        industry: 'Retail',
        challenge: 'Lack of data-driven insights for business decisions',
        solution: 'Implemented DataInsight for comprehensive business analytics',
        results: ['25% increase in sales', '60% improvement in decision speed', '40% reduction in data analysis time'],
        metrics: { sales_increase: '25%', decision_speed: '60%', time_saved: '40%' },
        image: 'https://picsum.photos/seed/datainsight-case/600/400'
      }
    ],
    integrations: [
      { name: 'Salesforce', category: 'CRM', description: 'Customer data integration', logo: '👥' },
      { name: 'Google Analytics', category: 'Web Analytics', description: 'Website data integration', logo: '📈' },
      { name: 'MySQL', category: 'Database', description: 'Database connectivity', logo: '🗄️' },
      { name: 'Excel', category: 'Spreadsheets', description: 'Excel data import/export', logo: '📊' }
    ]
  },

  securevault: {
    name: 'SecureVault',
    tagline: 'Enterprise Security Suite for Complete Cyber Protection',
    description: 'Comprehensive cybersecurity platform with advanced threat detection, vulnerability assessment, and compliance management to protect your organization from cyber threats.',
    hero_image: 'https://picsum.photos/seed/securevault-hero/1200/600',
    gradient: 'from-red-500 to-pink-600',
    accentColor: 'red',
    category: 'Security',
    status: 'Live',
    users: '30,000+',
    rating: 4.9,
    reviews: 1100,
    founded: '2021',
    headquarters: 'Washington, DC',
    employees: '180+',
    funding: '$45M Series B',
    awards: ['Cybersecurity Excellence Award 2023', 'Best Security Platform', 'Enterprise Security Leader'],
    features: [
      {
        icon: '🛡️',
        title: 'Threat Detection',
        desc: 'AI-powered threat detection with real-time monitoring and automated response capabilities.',
        details: 'Advanced threat detection using machine learning algorithms, behavioral analysis, and signature-based detection. Real-time monitoring with automated incident response and threat intelligence integration.',
        benefits: ['Real-time monitoring', 'Automated response', 'Behavioral analysis', 'Threat intelligence'],
        metrics: { threats_detected: '50K+', accuracy: '99.2%', response_time: '<5min' }
      },
      {
        icon: '🔍',
        title: 'Vulnerability Assessment',
        desc: 'Comprehensive vulnerability scanning and assessment with prioritized remediation guidance.',
        details: 'Automated vulnerability scanning across networks, applications, and systems. Risk-based prioritization, remediation guidance, and compliance reporting with continuous monitoring.',
        benefits: ['Automated scanning', 'Risk prioritization', 'Remediation guidance', 'Compliance reporting'],
        metrics: { scans: '100K+', vulnerabilities: '25K+', remediation: '85%' }
      }
    ],
    useCases: [
      {
        title: 'Enterprise Security',
        description: 'Large organizations requiring comprehensive security',
        benefits: ['Advanced threat protection', 'Compliance management', 'Security analytics', '24/7 monitoring']
      }
    ],
    screenshots: [
      {
        url: 'https://picsum.photos/seed/securevault-dashboard/1200/800',
        title: 'Security Dashboard',
        description: 'Comprehensive security dashboard with threat monitoring and incident management',
        category: 'Dashboard',
        features: ['Threat monitoring', 'Incident tracking', 'Security metrics', 'Alert management']
      }
    ],
    technologies: [
      { name: 'Python', category: 'Backend', description: 'Security algorithms and automation' },
      { name: 'Machine Learning', category: 'AI/ML', description: 'Threat detection and analysis' },
      { name: 'Blockchain', category: 'Security', description: 'Secure data integrity' },
      { name: 'Kubernetes', category: 'Infrastructure', description: 'Secure container orchestration' }
    ],
    pricing: [
      {
        plan: 'Enterprise',
        price: '$299',
        period: '/month',
        description: 'Complete security solution for enterprises',
        features: [
          'Advanced threat detection',
          'Vulnerability assessment',
          'Compliance management',
          '24/7 security monitoring',
          'Dedicated support'
        ],
        cta: 'Contact Sales',
        popular: true
      }
    ],
    testimonials: [
      {
        name: 'Robert Chen',
        role: 'CISO',
        company: 'FinanceSecure Corp',
        avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
        content: 'SecureVault has been instrumental in protecting our organization. We\'ve prevented 15 major security incidents and achieved 100% compliance. The threat detection is incredibly accurate.',
        rating: 5,
        metrics: { incidents_prevented: '15', compliance: '100%', accuracy: '99.2%' },
        date: '2023-12-08'
      }
    ],
    caseStudies: [
      {
        title: 'FinanceSecure Corp - Zero Security Breaches',
        company: 'FinanceSecure Corp',
        industry: 'Financial Services',
        challenge: 'Increasing cyber threats and compliance requirements',
        solution: 'Deployed SecureVault comprehensive security platform',
        results: ['Zero security breaches in 18 months', '100% compliance achievement', '90% reduction in false positives'],
        metrics: { breaches: '0', compliance: '100%', false_positives: '90%' },
        image: 'https://picsum.photos/seed/securevault-case/600/400'
      }
    ],
    integrations: [
      { name: 'Microsoft 365', category: 'Productivity', description: 'Office security integration', logo: '📄' },
      { name: 'AWS Security', category: 'Cloud Security', description: 'Cloud security integration', logo: '☁️' },
      { name: 'Splunk', category: 'SIEM', description: 'Security information management', logo: '🔍' },
      { name: 'Active Directory', category: 'Identity', description: 'Identity management integration', logo: '👤' }
    ]
  }
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // Get product data based on URL parameter
  const product = productData[productId as keyof typeof productData] || productData.novabank;

  // Scroll to top when tab changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${product.gradient} text-white`}>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-white/5 rounded-full blur-xl animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center space-x-2 text-sm">
                  <Link to="/products" className="text-white/70 hover:text-white transition-colors">Products</Link>
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-white">{product.name}</span>
                </div>
              </nav>

              {/* Status & Category */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {product.status}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {product.tagline}
              </p>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{product.users}</div>
                  <div className="text-sm text-white/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-2xl font-bold text-white">{product.rating}</span>
                    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/70">{product.reviews} Reviews</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.hero_image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{product.rating}</div>
                  <div className="text-xs text-white/70">User Rating</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{product.users}</div>
                  <div className="text-xs text-white/70">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'screenshots', label: 'Screenshots' },
              { id: 'technology', label: 'Technology' },
              { id: 'integrations', label: 'Integrations' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'case-studies', label: 'Case Studies' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Key Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose {product.name}?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {product.useCases.map((useCase, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful capabilities that make {product.name} the perfect solution for your needs.
              </p>
            </div>

            <div className="space-y-20">
              {product.features.map((feature, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{feature.desc}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">{feature.details}</p>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(feature.metrics).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center shadow-xl">
                        <div className="text-8xl opacity-60">{feature.icon}</div>
                      </div>
                      {/* Floating metrics */}
                      <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{Object.values(feature.metrics)[0]}</div>
                          <div className="text-xs text-gray-500">{Object.keys(feature.metrics)[0].replace('_', ' ')}</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{Object.values(feature.metrics)[1] || 'Active'}</div>
                          <div className="text-xs text-gray-500">Status</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots Section */}
        {activeTab === 'screenshots' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">See {product.name} in Action</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore the intuitive interface and powerful features through our detailed screenshots and interactive demos.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[...new Set(product.screenshots.map(s => s.category))].map(category => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Main Screenshot Display */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={product.screenshots[selectedScreenshot].url}
                  alt={product.screenshots[selectedScreenshot].title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Screenshot Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                          {product.screenshots[selectedScreenshot].category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {product.screenshots[selectedScreenshot].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {product.screenshots[selectedScreenshot].description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {product.screenshots[selectedScreenshot].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {product.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedScreenshot(index)}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedScreenshot === index
                      ? 'ring-4 ring-blue-500 scale-105 shadow-xl'
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium block truncate">
                      {screenshot.title}
                    </span>
                    <span className="text-white/70 text-xs">
                      {screenshot.category}
                    </span>
                  </div>
                  {selectedScreenshot === index && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Demo Video */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Product Demo</h3>
                    <p className="text-gray-600">Watch our comprehensive product walkthrough and see all features in action</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>5:30 duration</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-80"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Technology Section */}
        {activeTab === 'technology' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {product.name} leverages cutting-edge technologies to deliver exceptional performance, security, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Architecture</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏗️</div>
                  <p className="text-gray-600">Scalable, secure, and modern architecture</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations Section */}
        {activeTab === 'integrations' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect {product.name} with your favorite tools and services for a unified workflow experience.
              </p>
            </div>

            {/* Integration Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.integrations.map((integration, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {integration.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {integration.name}
                      </h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Learn More →
                    </button>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Available
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* API Documentation */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">Developer-Friendly API</h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Build custom integrations with our comprehensive RESTful API. Complete documentation, SDKs, and developer support included.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
                    <div className="text-blue-100">API Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300 mb-2">&lt;100ms</div>
                    <div className="text-blue-100">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300 mb-2">1M+</div>
                    <div className="text-blue-100">API Calls/Month</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    View API Docs
                  </button>
                  <button className="border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                    Download SDK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {activeTab === 'pricing' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing options designed to grow with your needs. Start free and upgrade anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {product.pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Feature Comparison</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Personal</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Business</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { feature: 'Basic account management', personal: true, premium: true, business: true },
                      { feature: 'Mobile app access', personal: true, premium: true, business: true },
                      { feature: 'AI financial insights', personal: false, premium: true, business: true },
                      { feature: 'Priority support', personal: false, premium: true, business: true },
                      { feature: 'Multi-user access', personal: false, premium: false, business: true },
                      { feature: 'API integrations', personal: false, premium: false, business: true },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {row.personal ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {row.premium ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {row.business ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {activeTab === 'testimonials' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what real users have to say about {product.name}.
              </p>
            </div>

            {/* Featured Testimonial */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl font-medium leading-relaxed mb-8">
                  "{product.testimonials[selectedTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={product.testimonials[selectedTestimonial].avatar}
                    alt={product.testimonials[selectedTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-white/20"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{product.testimonials[selectedTestimonial].name}</div>
                    <div className="text-blue-100">{product.testimonials[selectedTestimonial].role}</div>
                    <div className="text-blue-200 text-sm">{product.testimonials[selectedTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer ${
                    selectedTestimonial === index ? 'ring-4 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-gray-100"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.content.substring(0, 150)}..."
                    </blockquote>

                    {/* Metrics */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                          <div key={idx}>
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-gray-400">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Section */}
        {activeTab === 'case-studies' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how leading companies are transforming their operations with {product.name}.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-16">
              {product.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-12">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                          {caseStudy.industry}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.company}</p>
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                          Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Results
                        </h4>
                        <div className="space-y-3">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-blue-600">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.company}
                        className="w-full h-full object-cover min-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 text-white">
                        <h4 className="text-2xl font-bold mb-2">{caseStudy.company}</h4>
                        <p className="text-lg opacity-90">{caseStudy.industry} Industry</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied users and transform your workflow with {product.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;