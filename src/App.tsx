import React, { PropsWithChildren, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './components/layout/MenuBar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import NotFoundPage from './components/pages/NotFoundPage';
import { useDocumentTitle } from '@/hooks';

const Title: React.FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  useDocumentTitle(title);
  return <>{children}</>;
};

// Lazy-loaded top-level pages
const Homepage = lazy(() => import('./components/pages/Homepage'));
const ProductListPage = lazy(
  () => import('./components/pages/ProductListPage')
);
const ProductDetailPage = lazy(
  () => import('./components/pages/ProductDetailPage')
);
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
import ModernPortfolioArticle from './components/pages/blog/ModernPortfolioArticle';
import UIUXTrendsArticle from './components/pages/blog/UIUXTrendsArticle';
import AIPoweredDevelopmentArticle from './components/pages/blog/AIPoweredDevelopmentArticle';
import CybersecurityArticle from './components/pages/blog/CybersecurityArticle';
import CloudArchitectureArticle from './components/pages/blog/CloudArchitectureArticle';
import MobileAppPerformanceArticle from './components/pages/blog/MobileAppPerformanceArticle';
const DocsPage = lazy(() => import('./components/pages/DocsPage'));
import GettingStartedPage from './components/pages/docs/GettingStartedPage';
import APIReferencePage from './components/pages/docs/APIReferencePage';
import TutorialsPage from './components/pages/docs/TutorialsPage';
import DeploymentPage from './components/pages/docs/DeploymentPage';
import TroubleshootingPage from './components/pages/docs/TroubleshootingPage';
import AdvancedTopicsPage from './components/pages/docs/AdvancedTopicsPage';
const AnalyticsPage = lazy(() => import('./components/pages/AnalyticsPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const JobDetailsPage = lazy(() => import('./components/pages/JobDetailsPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const CaseStudiesPage = lazy(
  () => import('./components/pages/CaseStudiesPage')
);
// import AnalyticsFeature from './components/pages/AnalyticsFeature';
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));

// Import service pages
import CustomSoftwarePage from './components/pages/services/CustomSoftwarePage';
import CybersecurityITPage from './components/pages/services/CybersecurityITPage';
import MobileAppPage from './components/pages/services/MobileAppPage';
import WebAppPage from './components/pages/services/WebAppPage';
import CloudDevOpsPage from './components/pages/services/CloudDevOpsPage';
import AIMachineLearningPage from './components/pages/services/AIMachineLearningPage';
import BlockchainPage from './components/pages/services/BlockchainPage';
import UIUXDesignPage from './components/pages/services/UIUXDesignPage';
import SPAPage from './components/pages/services/web-app/SPAPage';
import PWAPage from './components/pages/services/web-app/PWAPage';
import EcommercePage from './components/pages/services/web-app/EcommercePage';
import CMSPage from './components/pages/services/web-app/CMSPage';
import RealtimePage from './components/pages/services/web-app/RealtimePage';
import EnterprisePortalPage from './components/pages/services/web-app/EnterprisePortalPage';

// Import mobile app detail pages
import IOSPage from './components/pages/services/mobile-app/iOSPage';
import AndroidPage from './components/pages/services/mobile-app/AndroidPage';
import ReactNativePage from './components/pages/services/mobile-app/ReactNativePage';
import FlutterPage from './components/pages/services/mobile-app/FlutterPage';
import MobilePWAPage from './components/pages/services/mobile-app/MobilePWAPage';
import EnterpriseMobilePage from './components/pages/services/mobile-app/EnterpriseMobilePage';

// Import AI/ML detail pages
import MachineLearningPage from './components/pages/services/ai-ml/MachineLearningPage';
import NLPPage from './components/pages/services/ai-ml/NLPPage';
import ComputerVisionPage from './components/pages/services/ai-ml/ComputerVisionPage';
import PredictiveAnalyticsPage from './components/pages/services/ai-ml/PredictiveAnalyticsPage';
import RecommendationSystemsPage from './components/pages/services/ai-ml/RecommendationSystemsPage';
import AIAutomationPage from './components/pages/services/ai-ml/AIAutomationPage';

// Import Blockchain detail pages
import SmartContractsPage from './components/pages/services/blockchain/SmartContractsPage';
import DeFiPage from './components/pages/services/blockchain/DeFiPage';
import NFTMarketplacePage from './components/pages/services/blockchain/NFTMarketplacePage';
import CryptoWalletPage from './components/pages/services/blockchain/CryptoWalletPage';
import BlockchainIntegrationPage from './components/pages/services/blockchain/BlockchainIntegrationPage';
import DAOPage from './components/pages/services/blockchain/DAOPage';

// Import UI/UX detail pages
import UXDesignPage from './components/pages/services/ui-ux/UXDesignPage';
import UIDesignPage from './components/pages/services/ui-ux/UIDesignPage';
import DesignSystemsPage from './components/pages/services/ui-ux/DesignSystemsPage';
import PrototypingPage from './components/pages/services/ui-ux/PrototypingPage';
import MobileDesignPage from './components/pages/services/ui-ux/MobileDesignPage';
import WebDesignPage from './components/pages/services/ui-ux/WebDesignPage';

// Import Cloud & DevOps detail pages
import CloudMigrationPage from './components/pages/services/cloud-devops/CloudMigrationPage';
import CICDPipelinePage from './components/pages/services/cloud-devops/CICDPipelinePage';
import ContainerOrchestrationPage from './components/pages/services/cloud-devops/ContainerOrchestrationPage';
import InfrastructureAsCodePage from './components/pages/services/cloud-devops/InfrastructureAsCodePage';
import MonitoringPage from './components/pages/services/cloud-devops/MonitoringPage';
import SecurityCompliancePage from './components/pages/services/cloud-devops/SecurityCompliancePage';

// Import Custom Software detail pages
import ERPPage from './components/pages/services/custom-software/ERPPage';
import CRMPage from './components/pages/services/custom-software/CRMPage';
import BusinessIntelligencePage from './components/pages/services/custom-software/BusinessIntelligencePage';
import WorkflowManagementPage from './components/pages/services/custom-software/WorkflowManagementPage';
import CustomEcommercePage from './components/pages/services/custom-software/EcommercePage';
import HealthcarePage from './components/pages/services/custom-software/HealthcarePage';

// Import Cybersecurity & IT detail pages
import SecurityAssessmentPage from './components/pages/services/cybersecurity-it/SecurityAssessmentPage';
import PenetrationTestingPage from './components/pages/services/cybersecurity-it/PenetrationTestingPage';
import ComplianceManagementPage from './components/pages/services/cybersecurity-it/ComplianceManagementPage';
import ITStrategyPage from './components/pages/services/cybersecurity-it/ITStrategyPage';
import NetworkSecurityPage from './components/pages/services/cybersecurity-it/NetworkSecurityPage';
import IncidentResponsePage from './components/pages/services/cybersecurity-it/IncidentResponsePage';

// Import Admin Components
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ServiceManagement from './components/admin/ServiceManagementNew';
import LeadManagement from './components/admin/LeadManagement';
import Analytics from './components/admin/Analytics';
import Settings from './components/admin/Settings';
import ProtectedRoute from './components/admin/ProtectedRoute';
import ApiDebug from './components/admin/ApiDebug';

// Import individual case study pages
import NovaBankCaseStudy from './components/pages/case-studies/NovaBankCaseStudy';
import FitTrackCaseStudy from './components/pages/case-studies/FitTrackCaseStudy';
import ShopEaseCaseStudy from './components/pages/case-studies/ShopEaseCaseStudy';
import GovPortalCaseStudy from './components/pages/case-studies/GovPortalCaseStudy';
import MedTechCaseStudy from './components/pages/case-studies/MedTechCaseStudy';
import EduTechCaseStudy from './components/pages/case-studies/EduTechCaseStudy';
import LogiFlowCaseStudy from './components/pages/case-studies/LogiFlowCaseStudy';
import PropTechCaseStudy from './components/pages/case-studies/PropTechCaseStudy';
import AgriTechCaseStudy from './components/pages/case-studies/AgriTechCaseStudy';
import TravelHubCaseStudy from './components/pages/case-studies/TravelHubCaseStudy';
import InsureTechCaseStudy from './components/pages/case-studies/InsureTechCaseStudy';
import EnergyGridCaseStudy from './components/pages/case-studies/EnergyGridCaseStudy';
import RetailTechCaseStudy from './components/pages/case-studies/RetailTechCaseStudy';
import MediaStreamCaseStudy from './components/pages/case-studies/MediaStreamCaseStudy';

// Individual Product Pages
import NovaBankProduct from './components/pages/products/NovaBankProduct';
import FitTrackProduct from './components/pages/products/FitTrackProduct';
import ShopEaseProduct from './components/pages/products/ShopEaseProduct';
import CloudFlowProduct from './components/pages/products/CloudFlowProduct';
import DataInsightProduct from './components/pages/products/DataInsightProduct';
import SecureVaultProduct from './components/pages/products/SecureVaultProduct';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-16">Loading…</div>
        }
      >
        <Routes>
          {/* Admin Routes - No main website layout */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="leads" element={<LeadManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="debug" element={<ApiDebug />} />
            <Route index element={<AdminDashboard />} />
          </Route>

          {/* Main Website Routes - With MenuBar and Footer */}
          <Route
            path="/*"
            element={
              <>
                <MenuBar />
                <main id="main-content" className="pt-20 flex-1">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Title title="Home">
                          <Homepage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services"
                      element={
                        <Title title="Services">
                          <ServicesPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/products"
                      element={
                        <Title title="Products">
                          <ProductListPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/:id"
                      element={
                        <Title title="Product Details">
                          <ProductDetailPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <Title title="About">
                          <AboutPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog"
                      element={
                        <Title title="Blog">
                          <BlogPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/how-to-build-modern-portfolio"
                      element={
                        <Title title="How to Build a Modern Portfolio">
                          <ModernPortfolioArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/ui-ux-trends-2024"
                      element={
                        <Title title="UI/UX Trends 2024">
                          <UIUXTrendsArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/ai-powered-development"
                      element={
                        <Title title="AI-Powered Development">
                          <AIPoweredDevelopmentArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/cybersecurity-best-practices"
                      element={
                        <Title title="Cybersecurity Best Practices">
                          <CybersecurityArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/modern-cloud-architecture"
                      element={
                        <Title title="Modern Cloud Architecture">
                          <CloudArchitectureArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/blog/mobile-app-performance"
                      element={
                        <Title title="Mobile App Performance">
                          <MobileAppPerformanceArticle />
                        </Title>
                      }
                    />
                    <Route
                      path="/docs"
                      element={
                        <Title title="Docs">
                          <DocsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/docs/getting-started"
                      element={<GettingStartedPage />}
                    />
                    <Route
                      path="/docs/api-reference"
                      element={<APIReferencePage />}
                    />
                    <Route path="/docs/tutorials" element={<TutorialsPage />} />
                    <Route
                      path="/docs/deployment"
                      element={<DeploymentPage />}
                    />
                    <Route
                      path="/docs/troubleshooting"
                      element={<TroubleshootingPage />}
                    />
                    <Route
                      path="/docs/advanced"
                      element={<AdvancedTopicsPage />}
                    />
                    <Route
                      path="/analytics"
                      element={
                        <Title title="Analytics">
                          <AnalyticsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/career"
                      element={
                        <Title title="Careers">
                          <CareersPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/career/job/:jobId"
                      element={
                        <Title title="Job Details">
                          <JobDetailsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <Title title="Contact">
                          <ContactPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies"
                      element={
                        <Title title="Case Studies">
                          <CaseStudiesPage />
                        </Title>
                      }
                    />
                    {/* Removed duplicate /analytics route */}

                    {/* Service Pages */}
                    <Route
                      path="/services/custom-software"
                      element={
                        <Title title="Custom Software">
                          <CustomSoftwarePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app"
                      element={
                        <Title title="Mobile App Development">
                          <MobileAppPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app"
                      element={
                        <Title title="Web App Development">
                          <WebAppPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops"
                      element={
                        <Title title="Cloud & DevOps">
                          <CloudDevOpsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml"
                      element={
                        <Title title="AI & ML">
                          <AIMachineLearningPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain"
                      element={
                        <Title title="Blockchain">
                          <BlockchainPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux"
                      element={
                        <Title title="UI/UX Design">
                          <UIUXDesignPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it"
                      element={
                        <Title title="Cybersecurity & IT Consulting">
                          <CybersecurityITPage />
                        </Title>
                      }
                    />

                    {/* Web App Detail Pages */}
                    <Route
                      path="/services/web-app/spa"
                      element={
                        <Title title="SPA Development">
                          <SPAPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app/pwa"
                      element={
                        <Title title="PWA Development">
                          <PWAPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app/ecommerce"
                      element={
                        <Title title="E-commerce Development">
                          <EcommercePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app/cms"
                      element={
                        <Title title="CMS Development">
                          <CMSPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app/realtime"
                      element={
                        <Title title="Realtime Apps">
                          <RealtimePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/web-app/enterprise-portal"
                      element={
                        <Title title="Enterprise Portal">
                          <EnterprisePortalPage />
                        </Title>
                      }
                    />

                    {/* Mobile App Detail Pages */}
                    <Route
                      path="/services/mobile-app/ios"
                      element={
                        <Title title="iOS Development">
                          <IOSPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app/android"
                      element={
                        <Title title="Android Development">
                          <AndroidPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app/react-native"
                      element={
                        <Title title="React Native">
                          <ReactNativePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app/flutter"
                      element={
                        <Title title="Flutter">
                          <FlutterPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app/pwa"
                      element={
                        <Title title="Mobile PWA">
                          <MobilePWAPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/mobile-app/enterprise"
                      element={
                        <Title title="Enterprise Mobile">
                          <EnterpriseMobilePage />
                        </Title>
                      }
                    />

                    {/* AI/ML Detail Pages */}
                    <Route
                      path="/services/ai-ml/machine-learning"
                      element={
                        <Title title="Machine Learning">
                          <MachineLearningPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml/nlp"
                      element={
                        <Title title="Natural Language Processing">
                          <NLPPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml/computer-vision"
                      element={
                        <Title title="Computer Vision">
                          <ComputerVisionPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml/predictive-analytics"
                      element={
                        <Title title="Predictive Analytics">
                          <PredictiveAnalyticsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml/recommendation-systems"
                      element={
                        <Title title="Recommendation Systems">
                          <RecommendationSystemsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ai-ml/ai-automation"
                      element={
                        <Title title="AI Automation">
                          <AIAutomationPage />
                        </Title>
                      }
                    />

                    {/* Blockchain Detail Pages */}
                    <Route
                      path="/services/blockchain/smart-contracts"
                      element={
                        <Title title="Smart Contracts">
                          <SmartContractsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain/defi"
                      element={
                        <Title title="DeFi">
                          <DeFiPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain/nft-marketplace"
                      element={
                        <Title title="NFT Marketplace">
                          <NFTMarketplacePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain/crypto-wallet"
                      element={
                        <Title title="Crypto Wallet">
                          <CryptoWalletPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain/integration"
                      element={
                        <Title title="Blockchain Integration">
                          <BlockchainIntegrationPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/blockchain/dao"
                      element={
                        <Title title="DAO">
                          <DAOPage />
                        </Title>
                      }
                    />

                    {/* UI/UX Detail Pages */}
                    <Route
                      path="/services/ui-ux/ux-design"
                      element={
                        <Title title="UX Design">
                          <UXDesignPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux/ui-design"
                      element={
                        <Title title="UI Design">
                          <UIDesignPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux/design-systems"
                      element={
                        <Title title="Design Systems">
                          <DesignSystemsPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux/prototyping"
                      element={
                        <Title title="Prototyping">
                          <PrototypingPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux/mobile-design"
                      element={
                        <Title title="Mobile Design">
                          <MobileDesignPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/ui-ux/web-design"
                      element={
                        <Title title="Web Design">
                          <WebDesignPage />
                        </Title>
                      }
                    />

                    {/* Cloud & DevOps Detail Pages */}
                    <Route
                      path="/services/cloud-devops/cloud-migration"
                      element={
                        <Title title="Cloud Migration">
                          <CloudMigrationPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops/cicd-pipeline"
                      element={
                        <Title title="CI/CD Pipeline">
                          <CICDPipelinePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops/container-orchestration"
                      element={
                        <Title title="Container Orchestration">
                          <ContainerOrchestrationPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops/infrastructure-as-code"
                      element={
                        <Title title="Infrastructure as Code">
                          <InfrastructureAsCodePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops/monitoring"
                      element={
                        <Title title="Monitoring">
                          <MonitoringPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cloud-devops/security-compliance"
                      element={
                        <Title title="Security & Compliance">
                          <SecurityCompliancePage />
                        </Title>
                      }
                    />

                    {/* Custom Software Detail Pages */}
                    <Route
                      path="/services/custom-software/erp"
                      element={
                        <Title title="ERP Systems">
                          <ERPPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/custom-software/crm"
                      element={
                        <Title title="CRM Systems">
                          <CRMPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/custom-software/business-intelligence"
                      element={
                        <Title title="Business Intelligence">
                          <BusinessIntelligencePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/custom-software/workflow-management"
                      element={
                        <Title title="Workflow Management">
                          <WorkflowManagementPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/custom-software/ecommerce"
                      element={
                        <Title title="E-commerce Platforms">
                          <CustomEcommercePage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/custom-software/healthcare"
                      element={
                        <Title title="Healthcare Systems">
                          <HealthcarePage />
                        </Title>
                      }
                    />

                    {/* Cybersecurity & IT Detail Pages */}
                    <Route
                      path="/services/cybersecurity-it/security-assessment"
                      element={
                        <Title title="Security Assessment">
                          <SecurityAssessmentPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it/penetration-testing"
                      element={
                        <Title title="Penetration Testing">
                          <PenetrationTestingPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it/compliance-management"
                      element={
                        <Title title="Compliance Management">
                          <ComplianceManagementPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it/it-strategy"
                      element={
                        <Title title="IT Strategy">
                          <ITStrategyPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it/network-security"
                      element={
                        <Title title="Network Security">
                          <NetworkSecurityPage />
                        </Title>
                      }
                    />
                    <Route
                      path="/services/cybersecurity-it/incident-response"
                      element={
                        <Title title="Incident Response">
                          <IncidentResponsePage />
                        </Title>
                      }
                    />

                    {/* Individual Case Study Pages */}
                    <Route
                      path="/case-studies/novabank"
                      element={
                        <Title title="NovaBank Case Study">
                          <NovaBankCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/fittrack"
                      element={
                        <Title title="FitTrack Case Study">
                          <FitTrackCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/shopease"
                      element={
                        <Title title="ShopEase Case Study">
                          <ShopEaseCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/govportal"
                      element={
                        <Title title="Gov Portal Case Study">
                          <GovPortalCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/medtech"
                      element={
                        <Title title="MedTech Case Study">
                          <MedTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/edutech"
                      element={
                        <Title title="EduTech Case Study">
                          <EduTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/logiflow"
                      element={
                        <Title title="LogiFlow Case Study">
                          <LogiFlowCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/proptech"
                      element={
                        <Title title="PropTech Case Study">
                          <PropTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/agritech"
                      element={
                        <Title title="AgriTech Case Study">
                          <AgriTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/travelhub"
                      element={
                        <Title title="TravelHub Case Study">
                          <TravelHubCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/insuretech"
                      element={
                        <Title title="InsureTech Case Study">
                          <InsureTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/energygrid"
                      element={
                        <Title title="EnergyGrid Case Study">
                          <EnergyGridCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/retailtech"
                      element={
                        <Title title="RetailTech Case Study">
                          <RetailTechCaseStudy />
                        </Title>
                      }
                    />
                    <Route
                      path="/case-studies/mediastream"
                      element={
                        <Title title="MediaStream Case Study">
                          <MediaStreamCaseStudy />
                        </Title>
                      }
                    />

                    {/* Individual Product Routes */}
                    <Route
                      path="/products/novabank"
                      element={
                        <Title title="NovaBank">
                          <NovaBankProduct />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/fittrack"
                      element={
                        <Title title="FitTrack">
                          <FitTrackProduct />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/shopease"
                      element={
                        <Title title="ShopEase">
                          <ShopEaseProduct />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/cloudflow"
                      element={
                        <Title title="CloudFlow">
                          <CloudFlowProduct />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/datainsight"
                      element={
                        <Title title="DataInsight">
                          <DataInsightProduct />
                        </Title>
                      }
                    />
                    <Route
                      path="/products/securevault"
                      element={
                        <Title title="SecureVault">
                          <SecureVaultProduct />
                        </Title>
                      }
                    />

                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
