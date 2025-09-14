-- Portfolio Website Admin Dashboard Database Schema
-- PostgreSQL Database Schema

-- Users table for authentication and role management
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Service categories (8 main categories)
CREATE TABLE service_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    gradient VARCHAR(100),
    bg_gradient VARCHAR(100),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services table (48 detail services)
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES service_categories(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    short_description TEXT,
    full_description TEXT,
    features JSONB, -- Array of features
    technologies JSONB, -- Array of technologies
    pricing_start INTEGER, -- Starting price in cents
    pricing_packages JSONB, -- Detailed pricing packages
    timeline_min INTEGER, -- Minimum timeline in weeks
    timeline_max INTEGER, -- Maximum timeline in weeks
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'draft', 'archived')),
    meta_title VARCHAR(200),
    meta_description TEXT,
    hero_image_url VARCHAR(500),
    gallery_images JSONB, -- Array of image URLs
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact form submissions and leads
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(200),
    service_interest VARCHAR(200),
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    message TEXT,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal_sent', 'converted', 'closed', 'lost')),
    priority VARCHAR(10) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    source VARCHAR(50) DEFAULT 'website',
    assigned_to INTEGER REFERENCES users(id),
    last_contact_date TIMESTAMP,
    next_follow_up TIMESTAMP,
    conversion_value INTEGER, -- Value in cents if converted
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lead activity tracking
CREATE TABLE lead_activities (
    id SERIAL PRIMARY KEY,
    lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    activity_type VARCHAR(50) NOT NULL, -- 'status_change', 'note_added', 'email_sent', etc.
    description TEXT,
    metadata JSONB, -- Additional activity data
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    featured_image_url VARCHAR(500),
    author_id INTEGER REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP,
    meta_title VARCHAR(200),
    meta_description TEXT,
    tags JSONB, -- Array of tags
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Case studies
CREATE TABLE case_studies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    client_name VARCHAR(200),
    client_industry VARCHAR(100),
    project_type VARCHAR(100),
    description TEXT,
    challenge TEXT,
    solution TEXT,
    results TEXT,
    technologies JSONB, -- Array of technologies used
    project_duration VARCHAR(50),
    team_size INTEGER,
    featured_image_url VARCHAR(500),
    gallery_images JSONB, -- Array of image URLs
    testimonial TEXT,
    testimonial_author VARCHAR(200),
    testimonial_position VARCHAR(200),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media library for file management
CREATE TABLE media_files (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(300) NOT NULL,
    original_filename VARCHAR(300) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(100), -- 'image', 'document', 'video', etc.
    mime_type VARCHAR(100),
    file_size INTEGER, -- Size in bytes
    dimensions JSONB, -- For images: {width: 1920, height: 1080}
    alt_text VARCHAR(300),
    uploaded_by INTEGER REFERENCES users(id),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Website analytics tracking
CREATE TABLE analytics_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL, -- 'page_view', 'form_submission', 'download', etc.
    page_path VARCHAR(500),
    user_agent TEXT,
    ip_address INET,
    referrer VARCHAR(500),
    session_id VARCHAR(100),
    user_id INTEGER REFERENCES users(id), -- If logged in
    metadata JSONB, -- Additional event data
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Daily analytics summary
CREATE TABLE analytics_daily (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    page_path VARCHAR(500),
    unique_visitors INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2),
    avg_session_duration INTEGER, -- In seconds
    conversions INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(date, page_path)
);

-- System settings and configuration
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value TEXT,
    description TEXT,
    type VARCHAR(20) DEFAULT 'string', -- 'string', 'number', 'boolean', 'json'
    is_public BOOLEAN DEFAULT false, -- Whether setting can be accessed by frontend
    updated_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_services_category_id ON services(category_id);
CREATE INDEX idx_services_status ON services(status);
CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX idx_analytics_events_page_path ON analytics_events(page_path);
CREATE INDEX idx_analytics_daily_date ON analytics_daily(date);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);

-- Insert default admin user (password: admin123)
-- Password hash for 'admin123' using bcrypt with 12 rounds
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('admin@company.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3bp.93iHSW', 'Admin', 'User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert default service categories
INSERT INTO service_categories (name, slug, description, icon, gradient, bg_gradient, display_order) VALUES
('Custom Software Development', 'custom-software', 'Enterprise-grade custom solutions', '💻', 'from-violet-500 to-indigo-500', 'from-violet-500/10 to-indigo-500/10', 1),
('Web Development', 'web-app', 'Modern web applications', '🌐', 'from-blue-500 to-cyan-500', 'from-blue-500/10 to-cyan-500/10', 2),
('Mobile App Development', 'mobile-app', 'Native and cross-platform apps', '📱', 'from-green-500 to-emerald-500', 'from-green-500/10 to-emerald-500/10', 3),
('AI & Machine Learning', 'ai-ml', 'Intelligent automation solutions', '🤖', 'from-purple-500 to-pink-500', 'from-purple-500/10 to-pink-500/10', 4),
('Blockchain Solutions', 'blockchain', 'Decentralized applications', '⛓️', 'from-orange-500 to-red-500', 'from-orange-500/10 to-red-500/10', 5),
('Cloud Infrastructure', 'cloud-devops', 'Scalable cloud solutions', '☁️', 'from-teal-500 to-blue-500', 'from-teal-500/10 to-blue-500/10', 6),
('UI/UX Design', 'ui-ux', 'Beautiful user experiences', '🎨', 'from-pink-500 to-rose-500', 'from-pink-500/10 to-rose-500/10', 7),
('Cybersecurity & IT Consulting', 'cybersecurity-it', 'Comprehensive security & IT solutions', '🔒', 'from-red-500 to-orange-500', 'from-red-500/10 to-orange-500/10', 8)
ON CONFLICT (slug) DO NOTHING;

-- Insert default system settings
INSERT INTO settings (key, value, description, type, is_public) VALUES
('site_name', 'Portfolio Company', 'Website name', 'string', true),
('site_description', 'Professional technology consulting services', 'Website description', 'string', true),
('contact_email', 'contact@company.com', 'Main contact email', 'string', true),
('contact_phone', '+1 (555) 123-4567', 'Main contact phone', 'string', true),
('analytics_enabled', 'true', 'Enable analytics tracking', 'boolean', false),
('lead_notification_email', 'admin@company.com', 'Email for lead notifications', 'string', false)
ON CONFLICT (key) DO NOTHING;
