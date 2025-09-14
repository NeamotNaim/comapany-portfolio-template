import {
  Highlight,
  Technology,
  Award,
  Testimonial,
  Project,
  Stat,
} from '@/types';

export const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Custom Software Development',
    desc: 'Enterprise-grade solutions built with cutting-edge technologies.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps with seamless user experiences.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure and CI/CD pipelines for optimal performance.',
    icon: 'https://cdn-icons-png.flaticon.com/512/4116/4116544.png',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'backend',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'backend',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'cloud',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'devops',
  },
  {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    category: 'devops',
  },
];

export const CLIENT_LOGOS: string[] = [
  'https://picsum.photos/seed/logo1/150/50',
  'https://picsum.photos/seed/logo2/150/50',
  'https://picsum.photos/seed/logo3/150/50',
  'https://picsum.photos/seed/logo4/150/50',
  'https://picsum.photos/seed/logo5/150/50',
  'https://picsum.photos/seed/logo6/150/50',
];

export const AWARDS: Award[] = [
  { name: 'Clutch Top Agency 2024', icon: '🏆', year: 2024 },
  { name: 'ISO 9001 Certified', icon: '✅' },
  { name: 'GDPR Compliant', icon: '🔒' },
  { name: 'AWS Select Partner', icon: '⭐' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Lee',
    position: 'CTO',
    company: 'NovaBank',
    feedback:
      'RecursionSoft transformed our legacy systems into a modern digital platform. Their technical expertise and project management were exceptional.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'James Carter',
    position: 'Product Director',
    company: 'FitTrack',
    feedback:
      'The team at RecursionSoft delivered our mobile app ahead of schedule with all the features we needed. User adoption exceeded our expectations by 40%.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    position: 'CEO',
    company: 'ShopEase',
    feedback:
      'Working with RecursionSoft gave us a competitive edge in the market. Their strategic approach to e-commerce development drove a 65% increase in conversions.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'novabank',
    name: 'NovaBank',
    desc: 'A secure, scalable digital banking platform with real-time analytics and AI-powered fraud detection.',
    image: 'https://picsum.photos/seed/novabank-home/600/400',
    link: '/products/novabank',
    tags: ['Fintech', 'Cloud Architecture', 'Security'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    desc: 'Cross-platform fitness application with wearable integration, personalized workout plans, and social features.',
    image: 'https://picsum.photos/seed/fittrack-home/600/400',
    link: '/products/fittrack',
    tags: ['Mobile', 'IoT', 'Machine Learning'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'shopease',
    name: 'ShopEase',
    desc: 'Enterprise e-commerce solution with inventory management, advanced analytics, and omnichannel capabilities.',
    image: 'https://picsum.photos/seed/shopease-home/600/400',
    link: '/product/shopease',
    tags: ['E-commerce', 'Analytics', 'Microservices'],
    featured: true,
    status: 'completed',
  },
];

export const STATS: Stat[] = [
  {
    value: '150+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across various industries',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on client feedback and retention rates',
  },
  {
    value: '15+',
    label: 'Years Experience',
    description: 'Combined team experience in software development',
  },
  {
    value: '24/7',
    label: 'Enterprise Support',
    description: 'Round-the-clock support for enterprise clients',
  },
];

export const SLIDER_IMAGES: string[] = [
  'https://picsum.photos/seed/dashboard1/800/600',
  'https://picsum.photos/seed/dashboard2/800/600',
  'https://picsum.photos/seed/dashboard3/800/600',
  'https://picsum.photos/seed/dashboard4/800/600',
];
