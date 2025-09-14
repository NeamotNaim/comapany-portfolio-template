# RecursionSoft Portfolio

A modern, enterprise-grade portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases best practices in web development, including performance optimization, accessibility, testing, and maintainable code architecture.

## 🚀 Features

### ✅ Completed Improvements

- **TypeScript Migration**: Full TypeScript support with strict type checking
- **Modern Architecture**: Component-based architecture with proper separation of concerns
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle size
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Error Handling**: Comprehensive error boundaries and loading states
- **Development Tools**: ESLint, Prettier, Husky pre-commit hooks
- **Testing Ready**: Jest and Cypress configuration
- **PWA Support**: Service worker and offline functionality
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Responsive Design**: Mobile-first responsive design
- **Animation**: Framer Motion animations and micro-interactions

### 🎨 Design System

- **Consistent UI Components**: Reusable Button, Card, Input components
- **Design Tokens**: Centralized colors, spacing, and typography
- **Dark Mode Ready**: Theme system with light/dark mode support
- **Component Library**: Well-documented, reusable components

### 🛠 Technical Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite with optimized configuration
- **State Management**: Zustand for global state
- **Forms**: React Hook Form with validation
- **Animations**: Framer Motion
- **Testing**: Jest, React Testing Library, Cypress
- **Code Quality**: ESLint, Prettier, Husky
- **PWA**: Vite PWA plugin with Workbox

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── pages/           # Page components
│   └── features/        # Feature-specific components
├── constants/           # Application constants
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── assets/             # Static assets
└── test/               # Test utilities and mocks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd company-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:e2e` - Run end-to-end tests
- `npm run analyze` - Analyze bundle size

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### End-to-End Tests

```bash
npm run test:e2e
```

### Coverage Report

```bash
npm run test:coverage
```

## 🏗 Architecture

### Component Architecture

- **Atomic Design**: Components organized by complexity (atoms, molecules, organisms)
- **Separation of Concerns**: Logic separated from presentation
- **Reusability**: Highly reusable components with proper prop interfaces
- **Performance**: React.memo and useMemo for optimization

### State Management

- **Local State**: useState and useReducer for component state
- **Global State**: Zustand for application-wide state
- **Server State**: React Query for API state management
- **Form State**: React Hook Form for form management

### Code Quality

- **TypeScript**: Strict type checking for better developer experience
- **ESLint**: Code linting with custom rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality assurance

## 🎨 Styling

### Tailwind CSS

- **Utility-First**: Rapid UI development with utility classes
- **Custom Configuration**: Extended with custom colors and spacing
- **Responsive Design**: Mobile-first responsive utilities
- **Dark Mode**: Built-in dark mode support

### Design System

- **Colors**: Consistent color palette with semantic naming
- **Typography**: Standardized font sizes and weights
- **Spacing**: Consistent spacing scale
- **Components**: Reusable styled components

## 🔧 Configuration

### Environment Variables

```env
# Application
VITE_APP_TITLE=RecursionSoft Portfolio
VITE_APP_DESCRIPTION=Enterprise-grade software solutions
VITE_APP_URL=http://localhost:5173

# API
VITE_API_BASE_URL=http://localhost:3001
VITE_CONTACT_FORM_ENDPOINT=/api/contact

# Analytics
VITE_GA_TRACKING_ID=
VITE_HOTJAR_ID=

# Features
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_PWA=true
VITE_ENABLE_DARK_MODE=true
```

### Build Configuration

- **Vite**: Fast build tool with HMR
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **PWA**: Service worker generation

## 📱 PWA Features

- **Offline Support**: Works without internet connection
- **Install Prompt**: Can be installed as native app
- **Push Notifications**: Support for web push notifications
- **Background Sync**: Sync data when connection is restored

## 🔍 SEO & Performance

### SEO

- **Meta Tags**: Comprehensive meta tag management
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Automatic sitemap generation

### Performance

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component and image lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Aggressive caching strategies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Excellent scores
- **Bundle Size**: Optimized for fast loading
- **Time to Interactive**: < 3 seconds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Follow the existing code style
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite team for the fast build tool
- All contributors and maintainers

## 📞 Support

For support, email contact@recursionsoft.com or create an issue in the repository.

---

**Built with ❤️ by RecursionSoft**
# comapany-portfolio-template
