import { NavLink, ProductItem } from '@/types';

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    name: 'NovaBank',
    to: '/products/novabank',
    description: 'Digital banking platform with AI-powered fraud detection'
  },
  {
    name: 'FitTrack',
    to: '/products/fittrack',
    description: 'Cross-platform fitness app with wearable integration'
  },
  {
    name: 'ShopEase',
    to: '/products/shopease',
    description: 'Enterprise e-commerce solution with advanced analytics'
  },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Docs', to: '/docs' },
  { name: 'Case Studies', to: '/case-studies' },
  { name: 'Analytics', to: '/analytics' },
  { name: 'Career', to: '/career' },
  { name: 'Contact', to: '/contact' },
];

export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', to: '/about' },
    { name: 'Our Team', to: '/about#team' },
    { name: 'Careers', to: '/career' },
    { name: 'Contact', to: '/contact' },
  ],
  services: [
    { name: 'Web Development', to: '/services/web' },
    { name: 'Mobile Apps', to: '/services/mobile' },
    { name: 'Cloud Solutions', to: '/services/cloud' },
    { name: 'DevOps', to: '/services/devops' },
  ],
  resources: [
    { name: 'Blog', to: '/blog' },
    { name: 'Documentation', to: '/docs' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Support', to: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Terms of Service', to: '/terms' },
    { name: 'Cookie Policy', to: '/cookies' },
  ],
};
