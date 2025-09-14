import { Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Homepage from './components/Homepage';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';

import DocsPage from './components/DocsPage';
import ContactPage from './components/ContactPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import CareerPage from './components/CareerPage';
import AnalyticsFeature from './components/AnalyticsFeature';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <MenuBar />
      <div className="pt-20 flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route path="/docs" element={<DocsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/analytics" element={<AnalyticsFeature />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App; 