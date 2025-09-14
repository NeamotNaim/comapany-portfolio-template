// Application configuration
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_TITLE || 'RecursionSoft Portfolio',
  description:
    import.meta.env.VITE_APP_DESCRIPTION ||
    'Enterprise-grade software solutions',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  version: '1.0.0',
  author: 'RecursionSoft',
  email: 'contact@recursionsoft.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Tech Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'USA',
  },
};

// API configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  endpoints: {
    contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '/api/contact',
    newsletter: '/api/newsletter',
    projects: '/api/projects',
    testimonials: '/api/testimonials',
  },
  timeout: 10000,
};

// Feature flags
export const FEATURES = {
  analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  pwa: import.meta.env.VITE_ENABLE_PWA === 'true',
  darkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
  blog: true,
  newsletter: true,
  testimonials: true,
  caseStudies: true,
};

// Analytics configuration
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    trackingId: import.meta.env.VITE_GA_TRACKING_ID,
    enabled: FEATURES.analytics && !!import.meta.env.VITE_GA_TRACKING_ID,
  },
  hotjar: {
    id: import.meta.env.VITE_HOTJAR_ID,
    enabled: FEATURES.analytics && !!import.meta.env.VITE_HOTJAR_ID,
  },
};

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/recursionsoft',
  linkedin: 'https://linkedin.com/company/recursionsoft',
  github: 'https://github.com/recursionsoft',
  facebook: 'https://facebook.com/recursionsoft',
  instagram: 'https://instagram.com/recursionsoft',
  youtube: 'https://youtube.com/recursionsoft',
};

// Theme configuration
export const THEME_CONFIG = {
  defaultTheme: 'light' as const,
  storageKey: 'recursionsoft-theme',
  colors: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      900: '#4c1d95',
    },
  },
};

// Animation configuration
export const ANIMATION_CONFIG = {
  defaultDuration: 0.3,
  defaultEase: 'easeInOut',
  stagger: 0.1,
  pageTransition: {
    duration: 0.5,
    ease: 'easeInOut',
  },
};

// SEO configuration
export const SEO_CONFIG = {
  defaultTitle: APP_CONFIG.name,
  titleTemplate: '%s | RecursionSoft',
  defaultDescription: APP_CONFIG.description,
  siteUrl: APP_CONFIG.url,
  defaultImage: '/og-image.jpg',
  twitterHandle: '@recursionsoft',
};
