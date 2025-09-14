// Common types
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Navigation types
export interface NavLink {
  name: string;
  to: string;
  external?: boolean;
}

export interface ProductItem {
  name: string;
  to: string;
  description?: string;
}

// Content types
export interface Highlight {
  title: string;
  desc: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
  category?: string;
}

export interface Award {
  name: string;
  icon: string;
  year?: number;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  feedback: string;
  avatar: string;
  rating?: number;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  subject?: string;
}

export interface NewsletterFormData {
  email: string;
}

// API types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}
